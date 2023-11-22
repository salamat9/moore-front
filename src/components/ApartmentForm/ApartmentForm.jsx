import React, { useState } from 'react';
import { createApartment, updateApartment } from '../../http/api/apartments';


const ApartmentForm = ({ getData, closeModal, apartment }) => {
  const [formData, setFormData] = useState({
    id: apartment?._id ?? '',
    number: apartment?.number ?? '',
    floor: apartment?.floor ?? '',
    square: apartment?.square ?? '',
    price: apartment?.price ?? '',
    status: apartment?.status ?? '',
    description: apartment?.description ?? '',
    clients: apartment?.clients ?? null,
  });

  const options = [
    { value: 'Бронь', label: 'Бронь' },
    { value: 'Куплено', label: 'Куплено' },
    { value: 'Бартер', label: 'Бартер' },
    { value: 'Рассрочка', label: 'Рассрочка' },
    { value: 'Отмена', label: 'Отмена' },
    { value: 'Активна', label: 'Активна' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log('form', formData)
  };

  const handleSubmit = async (e) => {
    console.log('id', apartment._id)
    e.preventDefault();
    if (apartment?._id) {
        await updateApartment(apartment._id, formData );
    } else {
        await createApartment(formData);
    }
    await getData();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Номер квартиры:
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Этаж:
        <input
          type="text"
          name="floor"
          value={formData.floor}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Площадь:
        <input
          type="text"
          name="square"
          value={formData.square}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Цена:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Статус:
        <select name="status" value={formData.status} onChange={handleInputChange}>
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Заметки:
        <input
          type='text'
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Клиент:
        <input
          type='text'
          name="client"
          value={formData.clients}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Сохранить</button>
      <button>Отмена</button>
    </form>
  );
};

export default ApartmentForm;

import React, { useState } from 'react';
import { createApartment, updateApartment } from '../../http/api/apartments';


const ApartmentForm = ({ getData, closeModal, apartment, buildings }) => {
  const [formData, setFormData] = useState({
    id: apartment?._id ?? '',
    number: apartment?.number ?? '',
    floor: apartment?.floor ?? '',
    square: apartment?.square ?? '',
    price: apartment?.price ?? '',
    status: apartment?.status ?? '',
    description: apartment?.description ?? '',
    clients: apartment?.clients ?? null,
    building: apartment?.building ?? null,
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (apartment?._id) {
      await updateApartment(apartment._id, formData);
    } else {
      await createApartment(formData);
    }
    await getData();
    closeModal();
  };

  return (
    <form className='managerForm' onSubmit={handleSubmit}>
      <div className='managerForm-content'>
        <label className='labels'>
          <div>Номер квартиры:</div>
          <input
            className='labelInput'
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </label>

        <label className='labels'>
          <div>Объект:</div>
          <select className='labelInput' name="building" value={formData.building?._id} onChange={handleInputChange}>
            <option value="">Select...</option>
            {buildings.map((option) => (
              <option key={option?._id} value={option?._id}>
                {option?.name}
              </option>
            ))}
          </select>
        </label>

        <label className='labels'>
          <div>Этаж:</div>
          <input
            className='labelInput'
            type="text"
            name="floor"
            value={formData.floor}
            onChange={handleInputChange}
          />
        </label>

        <label className='labels'>
          <div>Площадь:</div>
          <input
            className='labelInput'
            type="text"
            name="square"
            value={formData.square}
            onChange={handleInputChange}
          />
        </label>

        <label className='labels'>
          <div>Цена:</div>
          <input
            className='labelInput'
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>

        <label className='labels'>
          <div>Статус:</div>
          <select className='labelInput' name="status" value={formData.status} onChange={handleInputChange}>
            <option value="">Select...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className='labels'>
          <div>Заметки:</div>
          <input
            className='labelInput'
            type='text'
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>

        <label className='labels'>
          <div>Клиент:</div>
          <input
            className='labelInput'
            type='text'
            name="client"
            value={formData.clients}
            onChange={handleInputChange}
          />
        </label>
      </div>
     <div className='managerForm-btns'>
        <button className='save-btn' type="submit">Сохранить</button>
        <button className='cancel-btn'>Отмена</button>
     </div>
    </form>
  );
};

export default ApartmentForm;

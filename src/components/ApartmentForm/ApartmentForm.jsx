import React, { useEffect, useState } from 'react';
import { createApartment, updateApartment } from '../../http/api/apartments';
import { getManagers } from '../../http/api/managers';


const ApartmentForm = ({ getData, closeModal, apartment, buildings }) => {
  const [clients, setClients] = useState();
  const [formData, setFormData] = useState({
    id: apartment?._id ?? '',
    number: apartment?.number ?? '',
    floor: apartment?.floor ?? '',
    square: apartment?.square ?? '',
    price: apartment?.price ?? '',
    status: apartment?.status ?? '',
    description: apartment?.description ?? '',
    clients: apartment?.clients ?? '',
    building: apartment?.building ?? null,
  });

  const getClients = async () => {
    const data = await getManagers({ roleName: "Client" });
    setClients(data);
  }

  useEffect(() => {
    getClients();
  }, []) 

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
      [name]: name === 'clients' ? [value] : value,
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
        Объект:
        <select name="building" value={formData.building?._id} onChange={handleInputChange}>
          <option value="">Select...</option>
          {buildings.map((option) => (
            <option key={option?._id} value={option?._id}>
              {option?.name}
            </option>
          ))}
        </select>
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
        Clients:
        <select name="clients" value={formData.clients} onChange={handleInputChange}>
        <option value="">Select...</option>
          {clients?.map((c) => (
            <option value={c._id}>{c.lastName} {c.firstName}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Сохранить</button>
      <button>Отмена</button>
    </form>
  );
};

export default ApartmentForm;

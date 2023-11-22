import React, { useState } from 'react';
import { createManager, updateManager } from '../../http/api/managers';


const ManagerForm = ({ getData, closeModal, manager }) => {
  const [formData, setFormData] = useState({
    id: manager?._id ?? '',
    firstName: manager?.firstName ?? '',
    lastName: manager?.lastName ?? '',
    surName: manager?.surName ?? '',
    phone: manager?.phone ?? '',
    email: manager?.email ?? '',
    password: manager?.password ?? '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (manager?._id) {
        await updateManager({ id: manager._id, data: formData});
    } else {
        await createManager(formData);
    }
    await getData();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        first name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        last name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        sur name:
        <input
          type="text"
          name="surName"
          value={formData.surName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        password:
        <input
          type='password'
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Сохранить</button>
      <button>Отмена</button>
    </form>
  );
};

export default ManagerForm;

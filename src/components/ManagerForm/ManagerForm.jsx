import React, { useState } from 'react';
import { createManager, updateManager } from '../../http/api/managers';
import './ManagerForm.scss'


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
    <form className='managerForm' onSubmit={handleSubmit}>
      <div className='managerForm-content'>
        <label className='labels'>
          <div>First name:</div>
          <input
            className='labelInput'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='labels'>
          <div>Last name:</div>
          <input
            className='labelInput'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='labels'>
          <div>Sur name:</div>
          <input
            className='labelInput'
            type="text"
            name="surName"
            value={formData.surName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='labels'>
          <div>Номер</div>
          <input
            className='labelInput'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>

        <label className='labels'>
          <div>Почта</div>
          <input
            className='labelInput'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='labels'>
          <div>Временный пароль</div>
          <input
            className='labelInput'
            type='password'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
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

export default ManagerForm;

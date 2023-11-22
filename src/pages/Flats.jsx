import React, { useEffect, useState } from 'react';
import PageWrapper from '../layouts/PageWrapper';
import BasicTable from '../components/ApartmentTable/ApartmentTable';
import { getApartments } from '../http/api/apartments/index';
import { getBuildings } from '../http/api/buildings/index';

const Flats = () => {
  const [status, setStatus] = useState('');
  const [buildingId, setBuildingId] = useState('');
  const [apartments, setApartments] = useState();
  const [buildings, setBuildings] = useState();

  const getData = async (status, buildingId) => {
    const data = await getApartments(status, buildingId);
    setApartments(data);
  }

  const getBuilding = async () => {
    const data = await getBuildings();
    setBuildings(data)
  }

  useEffect(() => {
    getData();
    getBuilding();
  }, []);

  useEffect(() => {
    console.log(status)
    getData(status, buildingId);
  }, [status, buildingId]);

  const options = [
    { value: 'Бронь', label: 'Бронь' },
    { value: 'Куплено', label: 'Куплено' },
    { value: 'Бартер', label: 'Бартер' },
    { value: 'Рассрочка', label: 'Рассрочка' },
    { value: 'Отмена', label: 'Отмена' },
    { value: 'Активна', label: 'Активна' },
  ];

  return (
    <PageWrapper>
      <div className='header'>Квартиры</div>
      <hr />
      <div>
        <button onClick={() => setBuildingId('')}>Все</button>
        {buildings && buildings.map((b) => (
          <button key={b._id} onClick={() => setBuildingId(b._id)}>{b.name}</button>
        ))}
      </div>
      <div>
        <label>
          Фильтр:
          <select name="status" value={options.value} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Все</option>
            {options.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className='content-container'>
        <BasicTable buildings={buildings} getData={getData} apartments={apartments} />
      </div>
    </PageWrapper>
  );
};

export default Flats;
import React, { useEffect, useState } from 'react';
import PageWrapper from '../layouts/PageWrapper';
import BasicTable from '../components/ApartmentTable/ApartmentTable';
import { getApartments } from '../http/api/apartments/index';
import { getBuildings } from '../http/api/buildings/index';

const Flats = () => {
  const [apartments, setApartments] = useState();
  const [buildings, setBuildings] = useState();

  const getData = async () => {
    const data = await getApartments();
    setApartments(data);
  }

  const getBuilding = async () => {
    const data = await getBuildings();
    setBuildings(data)
  }

  useEffect(() => {
    getData();
    getBuilding();
  }, [])

  return (
    <PageWrapper>
      <div className='header'>Квартиры</div>
      <hr />
      <div className='content-container'>
        <BasicTable buildings={buildings} getData={getData} apartments={apartments} />
      </div>
    </PageWrapper>
  );
};

export default Flats;
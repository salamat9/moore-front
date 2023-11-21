import React, {useEffect, useState} from 'react';
import PageWrapper from '../layouts/PageWrapper';
import BasicTable from '../components/ApartmentTable/ApartmentTable';
import {getApartments} from '../http/api/apartments/index';

const Flats = () => {
  const [apartm, setApart] = useState();
  
  const getData = async () => {
    const data = await getApartments();
    setApart(data);
  }
  
  useEffect(()=> {
    getData()
  },[])
  
  return (
    <PageWrapper>
      <div className='header'>Квартиры</div>
      <hr />
      <div className='content-container'>
        <BasicTable getData={getData} data={apartm}/>
      </div>
    </PageWrapper>
  );
};

export default Flats;
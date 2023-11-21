import React from 'react';
import PageWrapper from '../layouts/PageWrapper';
import BasicTable from '../components/MyTable';

const Flats = () => {
  
  return (
    <PageWrapper>
      <div className='header'>Квартиры</div>
      <hr />
      <div className='content-container'>
        
        <BasicTable />
      </div>
    </PageWrapper>
  );
};

export default Flats;
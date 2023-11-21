import React, { useEffect, useState } from 'react';

import PageWrapper from '../layouts/PageWrapper';
import { getManagers } from '../http/api/managers';
import ManagerTable from '../components/ManagerTable/ManagerTable';

const Managers = () => {
  const [managers, setManagers] = useState([]);
  
  const getData = async () => {
    const data = await getManagers();
    setManagers(data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PageWrapper>
      <div className='header'>Менеджеры</div>
      <hr />
      <div className='content-container'>
        <ManagerTable managers={managers}/>
      </div>
    </PageWrapper>
  );
};

export default Managers;
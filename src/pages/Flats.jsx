import React, {useEffect, useState} from 'react';
import PageWrapper from '../layouts/PageWrapper';
import BasicTable from '../components/Table/MyTable';
import {getApartments} from '../http/api/managers';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

const Flats = () => {
  const [apartm, setApart] = useState();
  const [modal, setModal] = useState(false);
  
  const getData = async () => {
    return await getApartments();
  }
  
  useEffect(()=> {
    const fetchData = async () => {
      const data = await getData();
      setApart(data);
    };
    fetchData();
  },[])
  
  useEffect(() => {
    console.log('apartm', apartm);
  }, [apartm])
  
  return (
    <PageWrapper>
    <MyModal visible={modal} setVisible={setModal}>
      <div>
        <div>Вы действительно хотите удалить менеджера?</div>
        <div className='btns'> 
          <MyButton>Да</MyButton>
          <MyButton onClick={() => setModal(false)}>Нет</MyButton>
        </div>
      </div>
    </MyModal>
      <div className='header'>Квартиры</div>
      <hr />
      <div className='content-container'>
        <BasicTable setModal={setModal} data={apartm}/>
      </div>
    </PageWrapper>
  );
};

export default Flats;
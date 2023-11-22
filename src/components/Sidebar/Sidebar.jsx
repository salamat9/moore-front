import React from 'react';
import MyButton from '../UI/button/MyButton';
import { ReactComponent as MySvgIcon } from '../../assets/icons/search.svg';
import {useNavigate} from 'react-router-dom';
import './styles.scss'
import { cleanUserTokensFromLocalStorage } from '../../helpers/user';

const Sidebar = () => {
  const navigate = useNavigate()
  
  const logout = () => {
      cleanUserTokensFromLocalStorage();
      window.location.href = '/login';
  };
  
  return (
    <div className='sidebar'>
      <div className='search-icon c-p'>
      <MySvgIcon />
      </div>
      <div className='main'>
        <div className={`c-p`}
        onClick={() => navigate(`/main`)}>Главная</div>
        <div className='c-p'>Отчеты</div>
        <div className='c-p' onClick={() => navigate(`/flats`)}>Квартиры</div>
        <div className='c-p' onClick={() => navigate(`/managers`)}>Менеджеры</div>
        <div className='c-p'>Бронирования</div>
        <hr />
        <div className='c-p'>Редак. сайта</div>
      </div>
      <div className='notification'>
        <div className='c-p'>Уведомления</div>
        <MyButton onClick={logout}>
          Log out
        </MyButton>
      </div>
      
    </div>
  );
};

export default Sidebar;
import React, {useContext} from 'react';
import MyButton from '../UI/button/MyButton';
import { ReactComponent as MySvgIcon } from '../../assets/icons/search.svg';
import {AuthContext} from '../../context';
import {useNavigate} from 'react-router-dom';
import './styles.scss'

const Sidebar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const logout = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
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
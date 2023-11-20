import React, {useContext} from 'react';
import MyButton from '../UI/button/MyButton';
import {AuthContext} from '../../context';
import './styles.scss'
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const logout = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
  };
  
  return (
    <div className='sidebar'>
      <div>
        <img src="../../assets/icons/search.png" alt="search" />
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
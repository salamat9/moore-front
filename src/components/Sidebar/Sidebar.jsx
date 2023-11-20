import React, {useContext} from 'react';
import MyButton from '../UI/button/MyButton';
import {AuthContext} from '../../context';
import './styles.scss'

const Sidebar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  const logout = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
  };
  
  return (
    <div className='sidebar'>
      <div><img src="" alt="" /></div>
      <div>Главная</div>
      <div>Отчеты</div>
      <div>Квартиры</div>
      <div>Менеджеры</div>
      <div>Бронирования</div>
      <hr />
      <div>Редак. сайта</div>
      <div>Уведомления</div>
      <MyButton onClick={logout}>
        Log out
      </MyButton>
      
    </div>
  );
};

export default Sidebar;
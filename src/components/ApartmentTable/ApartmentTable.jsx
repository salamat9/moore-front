import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactComponent as MySvgIcon } from '../../assets/icons/points.svg';
import RightModal from '../rightModal/rightModal';

import './styles.scss'
import { useState } from 'react';
import MyModal from '../UI/myModal/MyModal';
import MyButton from '../UI/button/MyButton';
import { deleteApartment } from '../../http/api/apartments';
import ApartmentForm from '../ApartmentForm/ApartmentForm';

export default function BasicTable({ buildings, apartments, getData }) {
  const [showModal, setShowModal] = useState(false);
  const [apartment, setApartment] = useState(null)
  const [showDropdown, setShowDropdown] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDelete = async (id) => {
    await deleteApartment({ id });
    setShowModal(false);
    getData();
  };

  return (
    <>
      <button onClick={() => {setShowEditModal(true); setApartment(null); }}>Добавить</button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className='table-header'>
              <TableCell align="left">Квартиры</TableCell>
              <TableCell align="left">Объект</TableCell>
              <TableCell align="left">Этаж</TableCell>
              <TableCell align="left">КВ</TableCell>
              <TableCell align="left">Дата</TableCell>
              <TableCell align="left">Статус</TableCell>
              <TableCell align="left">Цена</TableCell>
              <TableCell align="left">Клиент</TableCell>
              <TableCell align="left">Заметки</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apartments?.length && apartments.map((a) => (
              <TableRow
                className='table-header'
                key={a._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{a?.number}</TableCell>
                <TableCell align="left">{a?.building?.name}</TableCell>
                <TableCell align="left">{a?.floor}</TableCell>
                <TableCell align="left">{a?.square}</TableCell>
                <TableCell align="left">{a?.createdAt?.slice(0, 11)}</TableCell>
                <TableCell align="left">{a?.status}</TableCell>
                <TableCell align="left">{a?.price}</TableCell>
                <TableCell align="left">{a?.clients}</TableCell>
                <TableCell align="left">{a?.updatedAt}</TableCell>
                <TableCell align="left"><div onClick={() => {setApartment(a); setShowEditModal(true)}} className='change'>Изменить</div></TableCell>
                <TableCell align="left">
                  <div className='points' onClick={() => {setApartment(a); setShowDropdown(true);}}>
                    <MySvgIcon />
                  </div>
                  {showDropdown && <div className={`dropdown ${apartment._id === a._id ? 'd-b' : 'd-n'}`}>
                    <div className='dropdown-content' onClick={() => { console.log('wtf'); setShowDropdown(true); setShowModal(true) }}>Удалить</div>
                  </div>}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MyModal visible={showModal} setVisible={setShowModal}>
        <div>
          <div>Вы действительно хотите удалить квартиру?</div>
          <div className='btns'>
            <MyButton onClick={() => handleDelete(apartment._id)}>Да</MyButton>
            <MyButton onClick={() => setShowModal(false)}>Нет</MyButton>
          </div>
        </div>
      </MyModal>
      <RightModal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <ApartmentForm buildings={buildings} getData={getData} closeModal={() => setShowEditModal(false)} apartment={apartment} />
      </RightModal>
    </>
  );
}
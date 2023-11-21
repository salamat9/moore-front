import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { ReactComponent as MySvgIcon } from '../../assets/icons/points.svg';
import MyModal from '../../components/UI/myModal/MyModal';
import MyButton from '../../components/UI/button/MyButton';
import { deleteManager } from '../../http/api/managers';

const ManagerTable = ({ managers }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [managerId, setManagerId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (m) => {
    await deleteManager({ id: managerId });
    setManagerId(m._id);
    setShowModal(false);
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ФИО</TableCell>
            <TableCell align="center">Телефон</TableCell>
            <TableCell align="center">Почта</TableCell>
            <TableCell align="center">Дата создания</TableCell>
            <TableCell align="center">Кол-во сделок</TableCell>
            <TableCell align="center">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {managers.length && managers.map((m) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{m.lastName} {m.firstName} {m.surName}</TableCell>
              <TableCell align="center">{m.phone}</TableCell>
              <TableCell align="center">{m.email}</TableCell>
              <TableCell align="center">{m.createdAt}</TableCell>
              <TableCell align="center">{m.amountDeals ?? 0}</TableCell>
              <TableCell align="center">
                <div className='points' onClick={() => { setShowDropdown(true); setManagerId(m._id)}}>
                  <MySvgIcon />
                </div>
                <div className={`dropdown ${managerId === m._id ? 'd-b' : 'd-n'}`}>
                <div className='dropdown-content' onClick={() => {
                    // setShowModal(true);
                    setShowDropdown(false);
                  }}
                  >Изменить</div>
                  <div className='dropdown-content' onClick={() => {
                    setShowModal(true);
                    setShowDropdown(false);
                  }}
                  >Удалить</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MyModal visible={showModal} setVisible={setShowModal}>
      <div>
        <div>Вы действительно хотите удалить менеджера?</div>
        <div className='btns'> 
          <MyButton onClick={handleDelete}>Да</MyButton>
          <MyButton onClick={() => setShowModal(false)}>Нет</MyButton>
        </div>
      </div>
    </MyModal>
    </TableContainer >
    
  );
};

export default ManagerTable;
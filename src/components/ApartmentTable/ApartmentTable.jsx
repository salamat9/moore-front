import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactComponent as MySvgIcon } from '../../assets/icons/points.svg';

import './styles.scss'
import {useState} from 'react';

export default function BasicTable({data, setModal}) {
  const [dropdownId, setDropdownId] = useState(null);
  
  const openDropdown = (id) => {
    if (id !== undefined) {
      setDropdownId((prevId) => (prevId === id ? null : id));
    } else {
      console.error('Invalid id:', id);
    }
  }
  
  return (
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
          {data ? data.data.map((data) => (
            <TableRow
              className='table-header'
              key={data._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{data.number}</TableCell>
              <TableCell align="left">{data.description}</TableCell>
              <TableCell align="left">{data.floor}</TableCell>
              <TableCell align="left">{data.square}</TableCell>
              <TableCell align="left">{data.createdAt?.slice(0, 11)}</TableCell>
              <TableCell align="left">{data.status}</TableCell>
              <TableCell align="left">{data.price}</TableCell>
              <TableCell align="left">{data.clients}</TableCell>
              <TableCell align="left">{data.updatedAt}</TableCell>
              <TableCell align="left"><div className='change'>Изменить</div></TableCell>
              <TableCell align="left">
                <div className='points' onClick={() => openDropdown(data._id)}>
                  <MySvgIcon />
                </div>
                <div className={`dropdown ${dropdownId === data._id ? 'd-b' : 'd-n'}`}>
                  <div className='dropdown-content' onClick={()=> setModal(true)}>Удалить</div>
                </div>
              </TableCell>
            </TableRow>
          )) : ''}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
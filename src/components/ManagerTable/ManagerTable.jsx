import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const ManagerTable = ({managers}) => {
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
            <TableCell align="center">{m._id}</TableCell>
            <TableCell align="center">{m.phone}</TableCell>
            <TableCell align="center">{m.email}</TableCell>
            <TableCell align="center">еуые</TableCell>
            <TableCell align="center">еуые</TableCell>
            <TableCell align="center">еуые</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default ManagerTable;
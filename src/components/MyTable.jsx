import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(flats, object, stage, area, date, status, price, client, book, empty) {
  return { flats, object, stage, area, date, status, price, client, book, empty};
}

const rows = [
  createData('№1', 'Prime city', 1, 144.5, '14.09.2023', 'Активна', 2000000, 'Cтасов Василий С.', 'Бронь до 12.05.23   14:00', ''),
  createData('№2', 'Kochmon City', 2, 144.6, '15.09.2023', 'Бронь', 2000000, 'Cтасов Василий С.', '', ''),
  createData('№3', 'Baytik', 3, 144.7, '16.09.2023', 'Активна', 2000000, 'Cтасов Василий С.', 'Бронь до 13.05.23   15:00', ''),
  createData('№4', 'Prime city', 4, 144.8, '17.09.2023', 'Куплено', 2000000, 'Cтасов Василий С.', '', ''),
  createData('№5', 'Prime city', 5, 144.9, '18.09.2023', 'Активна', 2000000, 'Cтасов Василий С.', 'Бронь до 14.05.23   16:00', ''),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Квартиры</TableCell>
            <TableCell align="right">Объект</TableCell>
            <TableCell align="right">Этаж</TableCell>
            <TableCell align="right">КВ</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Клиент</TableCell>
            <TableCell align="right">Бронь</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.flats}</TableCell>
              <TableCell align="right">{row.object}</TableCell>
              <TableCell align="right">{row.stage}</TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.client}</TableCell>
              <TableCell align="right">{row.book}</TableCell>
              <TableCell align="right">{row.empty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
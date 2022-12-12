import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Pageable } from '../../../shared/interface/pageable';
import { UserDto } from '../../dto/user.dto';
import userService from "../../services/user.service";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'birthDay',
    headerName: 'Birthday',
    type: 'number',
    width: 110,
    editable: true,
  },
];


export default function UserList() {
  const [rows, setRows] = useState<UserDto[]>([]);

  async function getUsers(): Promise<void> {
    const data: Pageable<UserDto> = await userService.getMany();
    setRows(data.items);
  }

  useEffect(()=>{
    getUsers();
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

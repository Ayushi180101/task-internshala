// src/components/TableComponent.tsx
import React from 'react';
import { useQuery } from 'react-query';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const fetchJsonData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const TableComponent: React.FC = () => {
  const { data } = useQuery('jsonData', fetchJsonData);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    // Add more columns as needed
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  );
};

export default TableComponent;

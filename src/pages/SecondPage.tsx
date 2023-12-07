import React from 'react';

import TableComponent from '../components/TableComponent';
import DepartmentListComponent from '../components/DepartmentListComponent';

const SecondPage: React.FC = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <TableComponent />
      <DepartmentListComponent />
    </div>
  );
};

export default SecondPage;

import React, { useState } from 'react';

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
}

const DepartmentListComponent: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      name: 'Department 1',
      subDepartments: [
        { id: 101, name: 'Sub Department 1.1' },
        { id: 102, name: 'Sub Department 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Department 2',
      subDepartments: [
        { id: 201, name: 'Sub Department 2.1' },
        { id: 202, name: 'Sub Department 2.2' },
      ],
    },
    // Add more departments as needed
  ]);

  const handleToggleDepartment = (departmentId: number) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((department) =>
        department.id === departmentId
          ? { ...department, subDepartments: toggleSubDepartments(department.subDepartments) }
          : department
      )
    );
  };

  const toggleSubDepartments = (subDepartments: SubDepartment[]): SubDepartment[] => {
    // Toggle the selection status for sub-departments
    return subDepartments.map((subDepartment) => ({
      ...subDepartment,
      selected: !subDepartment.selected,
    }));
  };

  return (
    <div>
      <h2>Department List</h2>
      {departments.map((department) => (
        <div key={department.id}>
          <div onClick={() => handleToggleDepartment(department.id)}>
            {department.name}
            {department.subDepartments.length > 0 && (
              <span>{/* Render your expand/collapse icon here */}</span>
            )}
          </div>
          {department.subDepartments.length > 0 && (
            <div>
              {department.subDepartments.map((subDepartment) => (
                <div key={subDepartment.id}>
                  <input
                    type="checkbox"
                    checked={subDepartment.selected || false}
                    onChange={() => {
                      // Implement your selection logic here
                    }}
                  />
                  {subDepartment.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentListComponent;

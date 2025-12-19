import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
employees: any[] = [{ name: 'Kalki', role: 'Software Engineer', email: 'kalki@gmail.com' },
      { name: 'Arjun', role: 'Backend Dev', email: 'arjun@gmail.com' }];
departments: string[] = [
  'PAHUB',
  'HR',
  'Finance',
  'QA',
  'DOT NET(FormularyHub)',
  'IT & SYSTEMS',
  'ADMIN',
  'QA(RXConn)',
  'QA(FormularyHub)',
  'DB(PAHUB)',
  'UI/UX',
  'QA(FormularyHub)',
];

selectedDepartment: string | null = null;

selectDepartment(dept: string) {
  this.selectedDepartment = dept;
  this.loadEmployees(dept);
}
loadEmployees(department: string) {
  // Dummy data for now
  const data: any = {
    Development: [
      { name: 'Kalki', role: 'Software Engineer', email: 'kalki@gmail.com' },
      { name: 'Arjun', role: 'Backend Dev', email: 'arjun@gmail.com' }
    ],
    HR: [
      { name: 'Sita', role: 'HR Manager', email: 'sita@gmail.com' }
    ],
    Finance: [
      { name: 'Ravi', role: 'Accountant', email: 'ravi@gmail.com' }
    ]
  };

  this.employees = data[department] || [];
}

}

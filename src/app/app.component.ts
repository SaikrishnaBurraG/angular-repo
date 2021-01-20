import { Component } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employeeId: number = 10101;
  employeeName: string;
  employeeStatus: boolean;
  employeeIds: number[] = [123, 456, 1234];
  employeeNames: string[] = ['Suresh', 'Ajith', 'Bobby']
  employeesStatus: boolean[] = [true, false];
  student: any = { studentId: 1090, studentName: 'Shree', studentEmail: 'Shree01@gmail.com' };
   employye: any = { employeeId: 12345, employeeName: 'Ghowt', employeeEmail: 'ghowt2@gmail.com' };
  // customer: any = {customerId: 0987, customerName: 'Ajithq', customerEmail: 'Ajithq1@gmail.com',
    // customerStreet: '9423 lee Highway', customerCity: 'Fairfax', customerZip: '22031'
  // };

  newCustomer: any = {
    cId: 1209, cName: 'Praveen', cEmail: 'P@gmail.com',
    productId:[17688,678,9087],

    cBillingAddress: { street: '9451 lee high way', city: 'fairax', state: 'VA' },

    shippingAdrress: { street: '9781 lee high way', city: 'fairax', state: 'VA' }
  }

  employees: any = [{eId:this.newCustomer.cId,eName:this.newCustomer.cName,eEmail:this.newCustomer.cEmail},
                    {eId:78984,eName:'Ghyt',eEmail:'g@gmail.com'},
                    {eId:8097,eName:'vhfts',eEmail:'gh@gmail.com'}];

  getStudentsByID() {

  }

  getStudentsByName(studentId: number, studentName: string) {

    console.log(studentId);
    this.employeeId=studentId;
    console.log(studentId);
    // studentId = this.employeeIds;

    console.log(studentName);
    console.log(this.employeeIds[2]);
    console.log(this.employeeNames[2]);
    console.log(this.employeeNames[1]);
    console.log(this.employeeNames[0]);
    console.log(this.employeeNames.length);
    // index=0
    for (let index = 0; index < this.employeeNames.length; index++) {
      console.log(this.employeeNames[index]);
    }

    this.employeeNames.forEach(element => {
      console.log(element);
    });
    console.log(this.student.studentName);
    console.log(this.newCustomer.shippingAdrress.street);
    console.log(this.newCustomer.productId[1]);
  }


  getStudentsByStatus(studentId: number, studentName: string, studentStatus: boolean) {
    console.log(studentId, studentName, studentStatus);

  }



}

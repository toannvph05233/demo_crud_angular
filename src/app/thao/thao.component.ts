import {Component, OnInit} from '@angular/core';

interface Person {
  firstname: string;
  lastname: string;
  email: string;
}

@Component({
  selector: 'app-thao',
  templateUrl: './thao.component.html',
  styleUrls: ['./thao.component.css']
})
export class ThaoComponent implements OnInit {
  name = 'Nguyen Van Toan';
  arr: Array<Person> = [];

  constructor() {
    this.arr.push({firstname: 'Toan1', lastname: 'Nguyen', email: 'toan1.nguyen@gmail.com'});
    this.arr.push({firstname: 'Toan2', lastname: 'Nguyen', email: 'toan2.nguyen@gmail.com'});
    this.arr.push({firstname: 'Toan3', lastname: 'Nguyen', email: 'toan3.nguyen@gmail.com'});
    this.arr.push({firstname: 'Toan4', lastname: 'Nguyen', email: 'toan4.nguyen@gmail.com'});
    this.arr.push({firstname: 'Toan5', lastname: 'Nguyen', email: 'toan5.nguyen@gmail.com'});
  }

  ngOnInit() {
  }

  showName = () => {
    alert(this.name);
  }

  deleteArr = (email: string): void => {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].email === email) {
        this.arr.splice(i, 1);
        console.log(this.arr);
        return;
      }
    }
  }
}


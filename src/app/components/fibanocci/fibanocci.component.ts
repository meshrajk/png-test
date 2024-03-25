import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fibanocci',
  templateUrl: './fibanocci.component.html',
  styleUrls: ['./fibanocci.component.scss'],
})
export class FibanocciComponent {

  usersNumber = 5;
  result = [1];

  calculateFibanocci() {
    //5 => 0, 1, 1, 2, 3
    let input = this.usersNumber;
    this.result = [];
    let first = 0;
    let second = 1;
    if (this.usersNumber! < 1) {
      this.result = [1];
      return;
    }

    let lastNumber = 1;
    while (input > 0) {
      lastNumber = second;
      second = first + second;
      this.result.push(second);
      first = lastNumber;
      input--;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent {

  secondword: any = "iceman";
  firstWord: any = "cinema";
  result!: boolean;

  checkIfAnagram() {
    const first = this.firstWord.split('').sort().join('');
    const second = this.secondword.split('').sort().join('');
    this.result = (first == second);
  }
}

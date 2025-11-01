import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tofes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tofes.html',
  styleUrls: ['./tofes.css']
})
export class Tofes {
   user = {
    username: '',
    email: '',
    agree: false

  };
usersList: any[] = [];
  print() {   
   this.usersList.push({ ...this.user });
   console.log(this.user);
}
}
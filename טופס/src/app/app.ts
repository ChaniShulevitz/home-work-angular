import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tofes } from './tofes/tofes'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Tofes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson3');
}

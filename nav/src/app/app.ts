import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Recommendations} from './recommendations/recommendations';
import { Items} from './items/items';
import { Nav} from './nav/nav';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second');
}

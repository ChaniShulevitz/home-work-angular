import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Recommendations} from './recommendations/recommendations';
import { Items} from './items/items';





export const routes: Routes = [
   {path:'recommendations', component: Recommendations},
   {path:'about', component: About},
   {path:'gallery', component: Gallery},
   {path:'', component: Home},
   {path:'contact', component: Contact},
  {path:'items/:id', component: Items}

];

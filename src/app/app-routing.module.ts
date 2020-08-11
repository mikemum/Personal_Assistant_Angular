import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { VirtualAssistantComponent } from './components/virtual-assistant/virtual-assistant.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'virtual-assistant', component: VirtualAssistantComponent },
  {
    path: 'covid',
    loadChildren: () =>
      import('./modules/covid/covid.module').then((m) => m.CovidModule),
  },
  {
    path: 'gallary',
    loadChildren: () =>
      import('./modules/gallary/gallary.module').then((m) => m.GallaryModule),
  },
  {
    path: 'smart-home',
    loadChildren: () =>
      import('./modules/smart-home/smart-home.module').then(
        (m) => m.SmartHomeModule
      ),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modules/todos/todos.module').then((m) => m.TodosModule),
  },
];
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

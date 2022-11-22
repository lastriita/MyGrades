import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-asig',
    loadChildren: () => import('./pages/add-asig/add-asig.module').then( m => m.AddAsigPageModule)
  },
  {
    path: 'add-curso',
    loadChildren: () => import('./pages/add-curso/add-curso.module').then( m => m.AddCursoPageModule)
  },
  {
    path: 'asig-detail',
    loadChildren: () => import('./pages/asig-detail/asig-detail.module').then( m => m.AsigDetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'add-registro',
    loadChildren: () => import('./pages/add-registro/add-registro.module').then( m => m.AddRegistroPageModule)
  },
  {
    path: 'buscarfoto',
    loadChildren: () => import('./pages/buscarfoto/buscarfoto.module').then( m => m.BuscarfotoPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'universidad',
    loadChildren: () => import('./pages/universidad/universidad.module').then( m => m.UniversidadPageModule)
  },
  {
    path: 'selectividad',
    loadChildren: () => import('./pages/selectividad/selectividad.module').then( m => m.SelectividadPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'notas-corte',
    loadChildren: () => import('./pages/notas-corte/notas-corte.module').then( m => m.NotasCortePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

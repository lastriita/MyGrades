import { NgModule } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
          },
          {
            path: 'add-curso',
            loadChildren: () => import('../pages/add-curso/add-curso.module').then(m => m.AddCursoPageModule),
          },
          {
            path: 'add-asig',
            children: [
              {
                path: '',
                loadChildren: () => import('../pages/add-asig/add-asig.module').then(m => m.AddAsigPageModule),
              },
              {
                path: 'buscarfoto',
                loadChildren: () => import('../pages/buscarfoto/buscarfoto.module').then( m => m.BuscarfotoPageModule)
              }
            ]
          },
          {
            path: ':dataId',
            loadChildren: () => import('../pages/asig-detail/asig-detail.module').then(m => m.AsigDetailPageModule),
          }
        ]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'tab3',
        children:[
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },          
          {
            path: 'calculadora',
            loadChildren: () => import('../pages/selectividad/selectividad.module').then(m => m.SelectividadPageModule),
          },
          {
            path: ':dataId',
            loadChildren: () => import('../pages/universidad/universidad.module').then(m => m.UniversidadPageModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

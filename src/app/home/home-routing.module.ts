import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'transaction',
        children: [

          {
            path: '',
            loadChildren: () => import('../pages/transaction/transaction.module').then(m => m.TransactionPageModule)
          },
         ]
    
  },

  {
    path: 'scanner',
    children: [

      {
        path: '',
        loadChildren: () => import('../pages/scanner/scanner.module').then(m => m.ScannerPageModule)
      },


    ]
  },

  {
    path: 'paiment',
    children: [

      {
        path: '',
        loadChildren: () => import('../pages/paiment/paiment.module').then(m => m.PaimentPageModule)
      },
     
    ]

  },
  {
    path: '',
    redirectTo:'tabs/paiment',
    pathMatch :'full'
  }

    ]
  },
  {
    path: '',
    redirectTo:'tabs/paiment',
    pathMatch :'full'
  }


];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

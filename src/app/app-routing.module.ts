import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ListItemComponent} from './product/list-item/list-item.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import { DetailComponent } from './product/detail/detail.component';
import { LienheComponent } from './lienhe/lienhe.component';
const routes: Routes = [
     { path: '',component: HomeComponent },
     {path: 'list-item', component: ListItemComponent},
     {path: 'detail', component: DetailComponent},
     {path: '', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)  },
     {path: 'search', loadChildren:() => import('./search/search.module').then(m => m.SearchModule)  },
     {path: 'product', loadChildren:() => import('./product/product.module').then(m => m.ProductModule)  },
     {path: 'lienhe', loadChildren:() => import ('./lienhe/lienhe.module' ).then(m => m.LienheModule)  },
     {path: '**', component: NotFoundComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ServicesComponent } from './components/services/services.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HomeComponent } from './components/home/home.component';
import { IoexampleComponent } from './components/ioexample/ioexample.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ServiceexampleComponent } from './components/serviceexample/serviceexample.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ProductsComponent } from './components/products/products.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { FormHandling1Component } from './components/form-handling-1/form-handling-1.component';
import { FormHandling2Component } from './components/form-handling-2/form-handling-2.component';
import { SignalComponent } from './components/signal/signal.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { authGuard } from './guards/auth.guard';
import { BookComponent } from './components/book/book.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { DeletebookComponent } from './components/deletebook/deletebook.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'databinding',
        component: DatabindingComponent,
        canActivate:[authGuard]
    },
    {
        path: 'services',
        component: ServiceexampleComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'ioexample',
        component: IoexampleComponent
    },
    {
        path:'directives-example',
        component:DirectiveComponent
    },
    {
        path:'lifecycle-methods',
        component:LifecycleComponent
    },
    {
        path:'observable',
        component:ObservableComponent
    },
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'quotes',
        component:QuotesComponent
    },
    {
        path:'form-handling-1',
        component:FormHandling1Component
    },
    {
        path:'form-handling-2',
        component:FormHandling2Component
    },
    {
        path:'signals',
        component:SignalComponent
    },
    {
        path:'product/detail/:id',
        component:ProductDetailComponent
    },
    {
        path:'books',
        component:BookComponent,
        children:[
            {
                path:'add-book',
                component:AddbookComponent
            },
            {
                path:'update-book',
                component:UpdatebookComponent
            },
            {
                path:'delete-book',
                component:DeletebookComponent
            }
        ]
    }
    
];

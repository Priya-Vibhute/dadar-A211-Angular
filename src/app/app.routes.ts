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
        component: DatabindingComponent
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
    }
    
];

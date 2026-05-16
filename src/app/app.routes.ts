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
    }
    
];

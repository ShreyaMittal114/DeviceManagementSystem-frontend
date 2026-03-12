import { Routes } from '@angular/router';
import { DeviceComponent } from './component/device-component/device-component';
import { DeviceSummary } from './component/device-summary/device-summary';
import { CreateDevice } from './component/create-device/create-device';
import { UpdateDevice } from './component/update-device/update-device';
import { ShelfSummary } from './component/shelf-summary/shelf-summary';
import { CreateShelf } from './component/create-shelf/create-shelf';
import { ShelfUpdate } from './component/shelf-update/shelf-update';
import { Home } from './component/home/home';
import { Shelves } from './component/shelves/shelf';

export const routes: Routes = [
    {
        path: '',
        redirectTo : "home",
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : Home
    },
    {
        path : 'devices',
        component : DeviceComponent
    },
    {
        path:'shelves',
        component:Shelves
    },
    {
        path: 'devices/:id',
        component:DeviceSummary
    },
     {
        path: 'create-device',
        component:CreateDevice
    },
     {
        path: 'update-device/:id'
        ,component:UpdateDevice
    },
     
     {
        path: 'create-shelves',
        component:CreateShelf
    },
      {
        path: 'update-shelf/:id',
        component:ShelfUpdate
    },
    {
        path: 'shelves/:id',
        component:ShelfSummary
    }


];

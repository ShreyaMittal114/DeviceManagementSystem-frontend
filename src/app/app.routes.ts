import { Routes } from '@angular/router';
import { DeviceComponent } from './component/device-component/device-component';
import { DeviceSummary } from './component/device-summary/device-summary';
import { CreateDevice } from './component/create-device/create-device';
import { UpdateDevice } from './component/update-device/update-device';
import { ShelfSummary } from './component/shelf-summary/shelf-summary';
import { CreateShelf } from './component/create-shelf/create-shelf';
import { ShelfUpdate } from './component/shelf-update/shelf-update';

export const routes: Routes = [
    {path: '',component:DeviceComponent},
    {path: 'devices/:id',component:DeviceSummary},
     {path: 'create-device',component:CreateDevice},
     {path: 'update-device/:id',component:UpdateDevice},
     {path: 'shelves/:id',component:ShelfSummary},
     {path: 'create-shelves',component:CreateShelf},
      {path: 'update-shelf/:id',component:ShelfUpdate},


];

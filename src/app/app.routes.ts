import { Routes } from '@angular/router';
import { DeviceComponent } from './component/device-component/device-component';
import { DeviceSummary } from './component/device-summary/device-summary';
import { CreateDevice } from './component/create-device/create-device';

export const routes: Routes = [
    {path: '',component:DeviceComponent},
    {path: 'devices/:id',component:DeviceSummary},
     {path: 'create-device',component:CreateDevice}
];

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../services/DeviceService';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-device',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './create-device.html',
  styleUrl: './create-device.css',
})
export class CreateDevice {

//this object stores form data
   device={
    name: '',
    partNumber : '',
    buildingName : '',
    deviceType : '',
    noOfShelfPositions :0
   };

   constructor(
    private deviceService : DeviceService,
    private router:Router
   ){}

   createDevice(){
    console.log("create device function called")
    this.deviceService.createDevice(this.device).subscribe({
      next:()=>{
        alert("Device created successfully");
        this.router.navigate(['']);
      },
      error :(err)=>{
        console.log("error creating device")
      }
    });
   }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DeviceService } from '../../services/DeviceService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-device',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './update-device.html',
  styleUrl: './update-device.css',
})
export class UpdateDevice implements OnInit {
   device={
    name: '',
    partNumber : '',
    buildingName : '',
    deviceType : '',
    noOfShelfPositions:0
   };

   deviceId!:string

   constructor(
    private deviceService : DeviceService,
    private router:Router,
    private route:ActivatedRoute
   ){}

   ngOnInit():void{
  this.deviceId=this.route.snapshot.paramMap.get('id')!;

  this.deviceService.getDeviceById(this.deviceId).subscribe({
   next:(data)=>{
    this.device=data;
   },   
  error:(err)=>{
    console.error(err);
  }
});

}

updateDevice(){
  this.deviceService.updateDevice(this.deviceId,this.device).subscribe({
         next:()=>{
           console.log("device updated")
            alert("device updated successfully");
    this.router.navigate(['/devices',this.deviceId]);
   },   
  error:(err)=>{
    console.error(err);
  }
  })
}
}
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DeviceService } from '../../services/DeviceService';
import { Device } from '../../models/device';
import { ShelfPosition } from '../../models/ShelfPosition';
import { signal } from '@angular/core';

@Component({
  selector: 'app-device-summary',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './device-summary.html',
 
  styleUrl: './device-summary.css',
})

export class DeviceSummary implements OnInit {
device = signal<Device | null>(null);
deviceId!:string;
ShelfPosition = signal<ShelfPosition []>([]);

constructor(
 
  private route:ActivatedRoute,
  private deviceService:DeviceService,
  private router:Router
){}

ngOnInit():void{
  this.deviceId=this.route.snapshot.paramMap.get('id')!;

  this.deviceService.getDeviceById(this.deviceId).subscribe({
   next:(data)=>{
    console.log(data);
    this.device.set(data);
   },   
  error:(err)=>{
    console.error(err);
  }
});

 this.deviceService.getShelfPositions(this.deviceId).subscribe({
  next :(data)=>{
    console.log('shelf position',data)
    this.ShelfPosition.set(data);
  },
    error:(err)=>{
    console.error(err);
  }
 });


 

} 
deleteDevice(){

  const confirm = ("Do u really want to delet this device?");

  if(confirm){
  this.deviceService.deleteDevice(this.deviceId).subscribe({
   next :()=>{
    alert("device deleted successfully");
    this.router.navigate(['']);
  },
    error:(err)=>{
    console.error("Error deleteing device ",err);
  }

 });
 }
 

}

}

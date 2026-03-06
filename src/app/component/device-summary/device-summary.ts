import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DeviceService } from '../../services/DeviceService';
import { Device } from '../../models/device';
import { ShelfPosition } from '../../models/ShelfPosition';
import { signal } from '@angular/core';
import { ShelfService } from '../../services/shelf-service';
import { Shelf } from '../../models/Shelf';

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
shelves :Shelf[]=[];

constructor(
 
  private route:ActivatedRoute,
  private deviceService:DeviceService,
  private shelfService:ShelfService,
  private router:Router
){}

ngOnInit():void{
   this.loadDevice();
   this.loadShelves();

}

  loadDevice(){
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

  const confirmDelete = confirm("Do u really want to delete this device?");

  if(confirmDelete){
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


updateDevice(deviceId:string){
 this.router.navigate(['/update-device',deviceId]);
 

}


assignShelf(shelfId:string,spId: string) {
 
 
 
  if (!shelfId) {
    alert("Please select a shelf")
   return;
  }
    
 
  this.deviceService.occupyShelf(shelfId, spId).subscribe({
    next: () => {
      alert("Shelf assigned successfully");
      this.loadDevice()   // reload device summary
    },
    error: (err) => {
      console.error("Error assigning shelf", err);
    }
  });
 
}

loadShelves() {
  this.shelfService.getAllShelves().subscribe({
    next: (data) => {
      this.shelves = data.filter(shelf=>!shelf.Occupied);
    },
    error: (err) => {
      console.error("Error loading shelves", err);
    }
  });
}

}

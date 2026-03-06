import { Component,OnInit, Signal } from '@angular/core';
import { DeviceService } from '../../services/DeviceService';
import { Device } from '../../models/device';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShelfService } from '../../services/shelf-service';
import { Shelf } from '../../models/Shelf';

@Component({
  selector: 'app-device-component',
  standalone:true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './device-component.html',
  styleUrl: './device-component.css',
})
export class DeviceComponent implements OnInit {
 
  devices= signal<Device[]> ([]);
  shelves= signal<Shelf[]> ([]);
 
  constructor(private deviceService: DeviceService,private shelfService:ShelfService) {}
 
  ngOnInit(): void {
    this.loadDevices();
    this.loadShelves();
  }
 
  loadDevices() {
    this.deviceService.getAllDevices().subscribe({
      next: (data) => {
        // console.log("data from backend",data);
        this.devices.set(data);

      },
      error: (err) => {
        console.error('Error fetching devices', err);
      }
    });
  }

  loadShelves() {
    this.shelfService.getAllShelves().subscribe({
      next: (data) => {
        console.log("data from backend",data);
        this.shelves.set(data);

      },
      error: (err) => {
        console.error('Error fetching shelves', err);
      }
    });
  }



  searchName= '';
  searchType= '';
  searchBuildingName= '';

  searchDevices(){
      this.deviceService.searchDevice(
        this.searchName,
        this.searchType,
        this.searchBuildingName
      ).subscribe({
        next:(data)=>{
          this.devices.set(data);
        },
        error:(err)=>{
          console.log("search error",err)
        }
      })
  }

  resetsearch(){
     this.searchName= '';
  this.searchType= '';
  this.searchBuildingName= '';
  this.loadDevices();
  }

}

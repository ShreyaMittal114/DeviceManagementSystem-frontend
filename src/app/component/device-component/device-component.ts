import { Component,OnInit, Signal } from '@angular/core';
import { DeviceService } from '../../services/DeviceService';
import { Device } from '../../models/device';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-component',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './device-component.html',
  styleUrl: './device-component.css',
})
export class DeviceComponent implements OnInit {
 
  devices= signal<Device[]> ([]);
 
  constructor(private deviceService: DeviceService) {}
 
  ngOnInit(): void {
    this.loadDevices();
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
}

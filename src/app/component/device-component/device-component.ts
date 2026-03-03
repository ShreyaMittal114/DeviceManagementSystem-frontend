import { Component,OnInit } from '@angular/core';
import { DeviceService } from '../../services/DeviceService';
import { Device } from '../../models/device';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './device-component.html',
  styleUrl: './device-component.css',
})
export class DeviceComponent implements OnInit {
 
  devices: Device[] = [];
 
  constructor(private deviceService: DeviceService) {}
 
  ngOnInit(): void {
    this.loadDevices();
  }
 
  loadDevices() {
    this.deviceService.getAllDevices().subscribe({
      next: (data) => {
        console.log("data from backend",data);
        this.devices = data;
      },
      error: (err) => {
        console.error('Error fetching devices', err);
      }
    });
  }
}

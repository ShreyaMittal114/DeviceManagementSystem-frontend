import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Device} from '../models/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  private baseUrl= 'http://localhost:8080/device';

  constructor(private http:HttpClient){}

  getAllDevices():Observable<Device[]>{
    return this.http.get<Device[]>(`${this.baseUrl}/all`)
  }

   getDeviceById(id:string):Observable<Device>{
    return this.http.get<Device>(`${this.baseUrl}/${id}`)
  }

   searchDevice(name?:string,type?:string,buildingName?:string):Observable<Device[]>{
    let params =new HttpParams();
    if(name){
      params=params.set('name',name);
    }
     if(type){
      params=params.set('type',type);
    }

     if(buildingName){
      params=params.set('buildingName',buildingName);
    }
    return this.http.get<Device[]>(`${this.baseUrl}`,{params})

   }

  createDevice(device:Device):Observable<string>{
  return this.http.post<string>(`${this.baseUrl}/create`,device);
  }

  deleteDevice(id:String):Observable<string>{
  return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}

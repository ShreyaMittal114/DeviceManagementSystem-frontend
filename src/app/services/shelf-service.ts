import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shelf } from '../models/Shelf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  private baseUrl= 'http://localhost:8080/shelves';

  constructor(private http:HttpClient){}

  getAllShelves():Observable<Shelf[]>{
      return this.http.get<Shelf[]>(`${this.baseUrl}/all`)
    }

  getShelfById(id:string):Observable<Shelf>{
      return this.http.get<Shelf>(`${this.baseUrl}/${id}`)
    }

    deleteShelf(id:String):Observable<string>{
  return this.http.delete<string>(`${this.baseUrl}/${id}`,{responseType:'text' as 'json'});
  }

  createShelf(shelf:Shelf):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/create`,shelf,{responseType:'text' as 'json'});
    }

  updateShelf(id:string,shelf:Shelf):Observable<string>{
      return this.http.put<string>(`${this.baseUrl}/${id}/update`,shelf,{responseType:'text' as 'json'});
    }

    removeShelf(id:String){
      return this.http.delete<String>(`${this.baseUrl}/remove-shelf/${id}`,{responseType:'text' as 'json'})
    }
  
   
}

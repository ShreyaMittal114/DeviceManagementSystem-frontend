import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShelfService } from '../../services/shelf-service';
import { Shelf } from '../../models/Shelf';

@Component({
  selector: 'app-shelf',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './shelf.html',
  styleUrl: './shelf.css',
})
export class Shelves implements OnInit{

   shelves= signal<Shelf[]> ([]);
    
     constructor(private shelfService:ShelfService) {}
    
     ngOnInit(): void {
      
       this.loadShelves();
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
   
}

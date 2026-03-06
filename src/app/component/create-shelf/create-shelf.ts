import { Component } from '@angular/core';
import { ShelfService } from '../../services/shelf-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shelf',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './create-shelf.html',
  styleUrl: './create-shelf.css',
})
export class CreateShelf {


   shelf={
    name: '',
    partNumber : '',
    Occupied : false
   };

   constructor(
    private shelfService : ShelfService,
    private router:Router
   ){}

   createShelf(){
   
    this.shelfService.createShelf(this.shelf).subscribe({
      next:()=>{
        alert("Shelf created successfully");
        this.router.navigate(['']);
      },
      error :(err)=>{
        console.log("error creating shelf")
      }
    });
   }
}

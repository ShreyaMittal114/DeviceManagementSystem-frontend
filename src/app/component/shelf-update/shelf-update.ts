import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation, RouterModule } from '@angular/router';
import { ShelfService } from '../../services/shelf-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shelf-update',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './shelf-update.html',
  styleUrl: './shelf-update.css',
})
export class ShelfUpdate implements OnInit{
   shelf={
    name: '',
    partNumber : '',
   };

   shelfId!:string

   constructor(
    private shelfService : ShelfService,
    private router:Router,
    private route:ActivatedRoute
   ){}

   ngOnInit():void{
  this.shelfId=this.route.snapshot.paramMap.get('id')!;

  this.shelfService.getShelfById(this.shelfId).subscribe({
   next:(data)=>{
    this.shelf=data;
   },   
  error:(err)=>{
    console.error(err);
  }
});
}

updateShelf(){
  this.shelfService.updateShelf(this.shelfId,this.shelf).subscribe({
         next:()=>{
           console.log("shelf updated")
            alert("shelf updated successfully");
    this.router.navigate(['/shelves',this.shelfId]);
   },   
  error:(err)=>{
    console.error(err);
  }
  })
}
}

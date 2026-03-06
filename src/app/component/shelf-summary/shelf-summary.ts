import { Component, OnInit } from '@angular/core';
import { Shelf } from '../../models/Shelf';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ShelfService } from '../../services/shelf-service';

@Component({
  selector: 'app-shelf-summary',
  imports: [CommonModule,RouterModule],
  templateUrl: './shelf-summary.html',
  styleUrl: './shelf-summary.css',
})
export class ShelfSummary implements OnInit {
   shelf = signal<Shelf | null>(null);
   shelfId!:string;

   constructor(
 
  private route:ActivatedRoute,
  private shelfService:ShelfService,
  private router:Router
){}


ngOnInit():void{
  this.shelfId=this.route.snapshot.paramMap.get('id')!;

  this.shelfService.getShelfById(this.shelfId).subscribe({
   next:(data)=>{
    console.log(data);
    this.shelf.set(data);
   },   
  error:(err)=>{
    console.error(err);
  }
});
}


deleteShelf(){

  const confirmDelete = confirm("Do u really want to delete this shelf?");

  if(confirmDelete){
  this.shelfService.deleteShelf(this.shelfId).subscribe({
   next :()=>{
    alert("shelf deleted successfully");
    this.router.navigate(['']);
  },
    error:(err)=>{
    console.error("Error deleteing shelf ",err);
  }

 });
 }
 

}

updateShelf(shelfId:string){
 this.router.navigate(['/update-shelf',shelfId]);
 

}
}

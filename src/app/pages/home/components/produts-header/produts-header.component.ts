import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produts-header',
  templateUrl: `produts-header.components.html`,
  styles: [
  ]
})
export class ProdutsHeaderComponent  implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();
sort='desc';
itemsShowCount=12
constructor() {}

ngOnInit(): void{

}
onSortUpdated(newSort:string): void{
this.sort=newSort;
}

onItemsUpdated(count: number):void{
  this.itemsShowCount= count;
}
onColumbsUpdated(colsNum:number):void{
this.columnsCountChange.emit(colsNum);
}
}

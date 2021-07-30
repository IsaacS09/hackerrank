import {Component} from '@angular/core';
import {Item} from "../types/Item";
import { DataList } from './dataList/dataList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listItemBook = [];
  listItemSong = [];
  Book: string = 'Book';
  Song: string = 'Song';

  constructor() {

  }

  ngOnInit() {

  }

  onItemAdded(item) {
    if (item.typeForm.type === this.Book) {
      this.listItemBook.push(item);
    } else if(item.typeForm.type === this.Song){
      this.listItemSong.push(item);
    }
  }


  onItemDeleteBook(item) {
      this.listItemBook.splice(item, 1);
  }
  onItemDeleteSong(item) {
      this.listItemSong.splice(item, 1);
  }
}

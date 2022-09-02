import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) {
    this.book = new Book('', '');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.booksService.getSingleBook(+id).then(
      (book) => this.book = book
    );
  }

  onBack(){
    this.router.navigate(['/books']);
  }


}

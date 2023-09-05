import { Component } from '@angular/core';
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  authors:string[];
  constructor(service:AuthorService) {
    this.authors = service.getAuthors();
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hackerenw-add',
  templateUrl: './hackerenw-add.component.html',
  styleUrls: ['./hackerenw-add.component.scss']
})
export class HackerenwAddComponent implements OnInit {

  addArticles() {
    const addTitle = (document.getElementById('add-article-title') as HTMLInputElement).value;
    const addUrl = (document.getElementById('add-article-url') as HTMLInputElement).value
    // this.articles.push({title: addTitle, url: addUrl});
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}

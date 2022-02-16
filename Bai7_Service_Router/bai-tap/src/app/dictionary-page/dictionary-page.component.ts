import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {DictionaryService, IWord} from '../dictionary.service';
// @ts-ignore
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  listWord: IWord[] = [];

  constructor(
    private dictionaryService: DictionaryService,
    public authService: AuthService
  ) {
  }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }
}

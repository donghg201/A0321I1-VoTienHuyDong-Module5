import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.scss']
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) {
  }

  ngOnInit() {
  }
}

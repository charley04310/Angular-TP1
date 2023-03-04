import { Component, OnInit } from '@angular/core';
import { Festival } from './models/festival';
import { Observable } from 'rxjs';
import { FestivalsService } from './services/festivals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private festivalService: FestivalsService) {}
  festivals!: Observable<Festival[]>;
  festivalSelectionne?: Festival;

  ngOnInit() {
    this.festivalSelectionne = undefined;
    this.festivals = this.festivalService.getAllFestivals();
  }

  setNewFestival(festival: Festival) {
    this.festivalSelectionne = festival;
  }
}

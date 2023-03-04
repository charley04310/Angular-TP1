import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Festival } from 'src/app/models/festival';
import { FestivalsService } from 'src/app/services/festivals.service';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css'],
})
export class FestivalListComponent {
  @Input() listeFestival!: Festival[] | null;
  @Output() festivalSelectionne = new EventEmitter<Festival>();

  constructor(
    private festivalService: FestivalsService,
    private router: Router
  ) {}

  setNewFestival(festival: Festival) {
    this.festivalSelectionne.emit(festival);
  }

  addFestival(festival: Festival) {
    this.festivalService.addNewFestival(festival);
  }

  goToDetailsPage(festival: Festival) {
    this.router.navigate([`/festival/${festival.id}`]);
  }
}

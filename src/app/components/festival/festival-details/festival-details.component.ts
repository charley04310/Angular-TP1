import { Component, Input, OnInit, Output } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FestivalsService } from 'src/app/services/festivals.service';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css'],
})
export class FestivalDetailsComponent implements OnInit {
  @Input() festival!: Festival | null;
  public festivalGroup!: FormGroup;

  constructor(
    private festivalService: FestivalsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateform();
  }

  ngOnChanges() {
    if (this.festival == null) {
      this.festivalGroup = new FormGroup({
        name: new FormControl(''),
        entrancePrice: new FormControl(''),
        roomPrice: new FormControl(''),
      });
    } else {
      this.festivalGroup = new FormGroup({
        name: new FormControl(this.festival.name),
        entrancePrice: new FormControl(this.festival.tableprice_1),
        roomPrice: new FormControl(this.festival.sqmprice_1),
      });
    }
  }

  updateform() {
    if (this.festival == null) {
      this.festivalGroup = new FormGroup({
        name: new FormControl(''),
        entrancePrice: new FormControl(''),
        roomPrice: new FormControl(''),
      });
    } else {
      this.festivalGroup = new FormGroup({
        name: new FormControl(this.festival.name),
        entrancePrice: new FormControl(this.festival.tableprice_1),
        roomPrice: new FormControl(this.festival.sqmprice_1),
      });
    }
  }

  validate() {
    // on considère que c'est un ajout et non une modification
    if (this.festival === null) {
      this.festival = new Festival('');
    }
    this.festival.name = this.festivalGroup.get('name')?.value;
    this.festival.tableprice_1 = this.festivalGroup.get('entrancePrice')?.value;
    this.festival.sqmprice_1 = this.festivalGroup.get('roomPrice')?.value;
    this.festivalService.addUpdateFestival(this.festival);
    this.festival = null;

    this.updateform();
  }

  deleteFestival() {
    if (this.festival == null) return;
    this.festivalService.deleteFestival(this.festival);
    this.festival = null;
    this.updateform();
  }

  addFestivalView() {
    this.festival = null;
    this.updateform();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Festival } from 'src/app/models/festival';
import { FestivalsService } from 'src/app/services/festivals.service';

@Component({
  selector: 'app-consult-festival-details',
  templateUrl: './consult-festival-details.component.html',
  styleUrls: ['./consult-festival-details.component.css'],
})
export class ConsultFestivalDetailsComponent {
  @Input() festival!: Festival | null;
  constructor(
    private festivalService: FestivalsService,
    private route: ActivatedRoute
  ) {}

  /* ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('festivalId')) {
      const id = this.route.snapshot.paramMap.get('festivalId');
      // console.log(id);

      if (id == null) return;
      this.festivalService.getFestival(id).subscribe((fest) => {
        console.log(fest);
        this.festival = fest;
      });
    }
  } */
}

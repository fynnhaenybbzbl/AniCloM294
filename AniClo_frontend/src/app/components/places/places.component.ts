import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Places } from 'src/app/data/places';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  place : Array<Places> = new Array<Places>()
  places : Places = new Places()

  constructor(
    private placesService: PlacesService,
    private router: Router,
    ){}

  delete (obj:Places) {
    this.placesService.delete(obj.id).subscribe({
      next: response => {
        if (response.status === 200) {
          this.reloadData()
        }
      }
    })
  }

  public async edit (obj:Places) {
    await this.router.navigate(['editPlace', obj.id])
  }

  async ngOnInit () {
    this.reloadData()
  }

  reloadData () {
    this.placesService.getList().subscribe(obj => {
      this.place = obj
    })
  }
}

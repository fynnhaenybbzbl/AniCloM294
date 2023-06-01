import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothing } from 'src/app/data/clothing';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-aniclo-detail',
  templateUrl: './aniclo-detail.component.html',
  styleUrls: ['./aniclo-detail.component.scss']
})
export class AnicloDetailComponent implements OnInit {

  clothing : Clothing = new Clothing()



constructor(
  private router: Router,
  private route:ActivatedRoute,
  private clothingService: ClothingService
  ){}

  location: string = this.clothing.places.strasse;

  openGoogleMaps() {
    const encodedLocation = encodeURIComponent(this.location);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(url);
  }

  public async  edit (obj:Clothing) {
   await this.router.navigate(['edit', obj.id])
  }



ngOnInit(): void {
  if (this.route.snapshot.paramMap.get('id') !== null) {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.clothingService.getOne(id).subscribe(obj => {
      this.clothing = obj
      this.location = obj.places.strasse + ' ' + obj.places.strassennummer + ', ' + obj.places.ortsname
    })
  }
}

async back () {
  await this.router.navigate(['games'])
}
}

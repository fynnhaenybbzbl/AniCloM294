import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothing } from 'src/app/data/clothing';
import { AppAuthService } from 'src/app/services/app.auth.service';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-aniclo-detail',
  templateUrl: './aniclo-detail.component.html',
  styleUrls: ['./aniclo-detail.component.scss']
})
export class AnicloDetailComponent implements OnInit {

  clothing : Clothing = new Clothing()
  clothings : Array<Clothing> = new Array<Clothing>()
  username = ''
  isAdmin !: boolean;




constructor(
  private router: Router,
  private route:ActivatedRoute,
  private authService : AppAuthService,
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

  private reloadData () {
    this.clothingService.getList().subscribe(obj => {
      this.clothings = obj
    })
  }

  delete (obj:Clothing) {
    this.clothingService.delete(obj.id).subscribe({
      next: response => {
        if (response.status === 200) {
          this.reloadData()
          this.back()
        }
      }
    })
  }



ngOnInit(): void {
  if (this.route.snapshot.paramMap.get('id') !== null) {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.clothingService.getOne(id).subscribe(obj => {
      this.clothing = obj
      this.location = obj.places.strasse + ' ' + obj.places.strassennummer + ', ' + obj.places.ortsname
    })
  }
  this.authService.usernameObservable.subscribe(name => {
    this.username = name;
  });
  if (this.username == 'admin admin') {
    this.isAdmin = true;
  }

}

async back () {
  await this.router.navigate(['clothings'])
}
}

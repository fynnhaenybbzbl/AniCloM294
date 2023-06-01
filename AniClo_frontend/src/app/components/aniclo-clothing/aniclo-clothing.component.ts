import { Component, OnInit } from '@angular/core';
import { AppRoles } from 'src/app/app.roles';
import { Clothing } from 'src/app/data/clothing';
import { Colour } from 'src/app/data/colour';
import { Size } from 'src/app/data/size';
import { AppAuthService } from 'src/app/services/app.auth.service';
import { ClothingService } from 'src/app/services/clothing.service';
import { ColourService } from 'src/app/services/colour.service';
import { SizeService } from 'src/app/services/size.service';


@Component({
  selector: 'app-aniclo-clothing',
  templateUrl: './aniclo-clothing.component.html',
  styleUrls: ['./aniclo-clothing.component.scss']
})
export class AnicloClothingComponent implements OnInit {

  size : Array<Size> = new Array<Size>()
  colour : Array<Colour> = new Array<Colour>()
  clothing : Array<Clothing> = new Array<Clothing>()
  roles = AppRoles;
  username = ''
  isAdmin : boolean = false;



  constructor(
    private authService : AppAuthService,
    private sizeService: SizeService,
    private colourService: ColourService,
    private clothingService: ClothingService) {

  }

  public logout () {
    this.authService.logout()
  }


  async ngOnInit () {
    this.reloadData()
    this.authService.usernameObservable.subscribe(name => {
      this.username = name;
    });
    console.log(this.username);

      if (this.username == 'admin admin') {
        this.isAdmin = true;
      }
  }

  reloadData () {
    this.sizeService.getList().subscribe(obj => {
      this.size = obj
    })

    this.colourService.getList().subscribe(obj => {
      this.colour = obj
    })

    this.clothingService.getList().subscribe(obj => {
      this.clothing = obj
    })
  }
}

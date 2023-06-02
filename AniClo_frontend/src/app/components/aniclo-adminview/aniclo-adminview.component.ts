import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Clothing } from 'src/app/data/clothing';
import { Colour } from 'src/app/data/colour';
import { Places } from 'src/app/data/places';
import { Size } from 'src/app/data/size';
import { ClothingService } from 'src/app/services/clothing.service';
import { ColourService } from 'src/app/services/colour.service';
import { PlacesService } from 'src/app/services/places.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-aniclo-adminview',
  templateUrl: './aniclo-adminview.component.html',
  styleUrls: ['./aniclo-adminview.component.scss']
})
export class AnicloAdminviewComponent implements OnInit {
  size : Array<Size> = new Array<Size>()
  colour : Array<Colour> = new Array<Colour>()
  clothing : Clothing = new Clothing()
  colours : Colour = new Colour()
  sizes : Size = new Size()
  places : Places = new Places()
  place : Array<Places> = new Array<Places>()
  clothings : Array<Clothing> = new Array<Clothing>()

  public formClothing = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    marke: new FormControl(''),
    preis: new FormControl(),
    size: new FormControl(),
    colour: new FormControl(''),
    places: new FormControl('')
  })

  public formPlace = new FormGroup({
    id: new FormControl(0),
    plz: new FormControl(),
    ortsname: new FormControl(''),
    strasse: new FormControl(''),
    strassennummer: new FormControl()
  })

  constructor(
    private sizeService: SizeService,
    private colourService: ColourService,
    private clothingService: ClothingService,
    private placesService: PlacesService,
    private router: Router
  ){}

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['clothings'])
  }

  async saveClothing (formData: any) {
    this.clothing = Object.assign(formData)

      this.clothingService.save(this.clothing).subscribe({
        next: () => {
          this.back()
        },
      })
  }

  async savePlace () {
    this.places = Object.assign(this.formPlace.getRawValue())
    this.placesService.save(this.places).subscribe({
        next: () => {
          this.back()
        },
      })
  }

  async ngOnInit () {
    this.reloadData()
  }

  reloadData () {
    this.sizeService.getList().subscribe(obj => {
      this.size = obj
    })

    this.colourService.getList().subscribe(obj => {
      this.colour = obj
    })

    this.clothingService.getList().subscribe(obj => {
      this.clothings = obj
    })
    this.placesService.getList().subscribe(obj => {
      this.place = obj
    })
  }

}

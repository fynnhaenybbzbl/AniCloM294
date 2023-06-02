import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothing } from 'src/app/data/clothing';
import { Colour } from 'src/app/data/colour';
import { Places } from 'src/app/data/places';
import { Size } from 'src/app/data/size';
import { ClothingService } from 'src/app/services/clothing.service';
import { ColourService } from 'src/app/services/colour.service';
import { PlacesService } from 'src/app/services/places.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  implements OnInit {
  size : Array<Size> = new Array<Size>()
  colour : Array<Colour> = new Array<Colour>()
  clothing : Clothing = new Clothing()
  place : Array<Places> = new Array<Places>()
  clothings : Array<Clothing> = new Array<Clothing>()

  public form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    marke: new FormControl(''),
    preis: new FormControl(),
    size: new FormControl(),
    colour: new FormControl(),
    places: new FormControl()
  })

  constructor(
    private sizeService: SizeService,
    private colourService: ColourService,
    private clothingService: ClothingService,
    private placesService: PlacesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute

  ){}

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['clothings'])
  }

  async update (formData: any) {
    this.clothing = Object.assign(formData)

    if (this.clothing.id) {
      this.clothingService.update(this.clothing).subscribe({
        next: () => {
          this.back()
        },
      })
    }
  }

  async ngOnInit () {
    this.reloadData()
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
    if(id){
      this.clothingService.getOne(id).subscribe(clothing => {
        this.clothing = clothing; this.form = this.formBuilder.group(this.clothing);
        this.form.controls.size.setValue(this.clothing.size);
        this.form.controls.places.setValue(this.clothing.places)
      })
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
      this.clothings = obj
    })
    this.placesService.getList().subscribe(obj => {
      this.place = obj
    })
  }

}

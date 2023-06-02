import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Places } from 'src/app/data/places';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.scss']
})
export class EditPlaceComponent   implements OnInit {
  place : Places = new Places()
  places : Array<Places> = new Array<Places>()

  public form = new FormGroup({
    id: new FormControl(0),
    plz: new FormControl(),
    ortsname: new FormControl(''),
    strasse: new FormControl(''),
    strassennummer: new FormControl()
  })

  constructor(
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
    console.log(formData);

    this.place = Object.assign(formData)

    if (this.place.id) {
      this.placesService.update(this.place).subscribe({
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
      this.placesService.getOne(id).subscribe(place => {
        this.place = place; this.form = this.formBuilder.group(this.place);
      })
    }
  }


  reloadData () {
    this.placesService.getList().subscribe(obj => {
      this.places = obj
    })
  }

}


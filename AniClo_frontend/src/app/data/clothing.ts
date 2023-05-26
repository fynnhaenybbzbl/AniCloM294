import { Colour } from "./colour"
import { Places } from "./places"
import { Size } from "./size"

export class Clothing {
  public id!: number
  public name: string = ''
  public marke: string = ''
  public preis!: number
  public size : Array<Size> = []
  public colour: Array<Colour> = []
  public places: Array<Places> = []

}

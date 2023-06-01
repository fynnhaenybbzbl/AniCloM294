import { Colour } from "./colour"
import { Places } from "./places"
import { Size } from "./size"

export class Clothing {
  public id!: number
  public name = ''
  public marke = ''
  public preis!: number
  public size : Size = new Size()
  public colour: Colour = new Colour
  public places: Places = new Places()

}

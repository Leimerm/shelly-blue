export class Car {
  id: number
  make: string
  model: string
  year: number
  color: string
  warranty: string
  price: number
  body_style: string
  milage: number
  created_at: string
  updated_at: string
  image: string
  ex_color: string
  drive_line: string
  constructor({
  id = null,
  make = '',
  model = '',
  year = null,
  color = '',
  warranty = '',
  price = null,
  body_style = '',
  milage: number,
  created_at = '',
  updated_at = '',
  image = '',
  ex_color = '',
  drive_line = '',
  ...rest
  }){
    Object.assign(this, rest)
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.warranty = warranty
    this.price = price
    this.body_style = body_style
    this.milage = number,
    this.created_at = created_at
    this.updated_at = updated_at
    this.image = image
    this.ex_color = ex_color
    this.drive_line = drive_line
  }
}

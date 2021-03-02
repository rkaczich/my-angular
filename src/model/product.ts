export class Product {
  private id: string;
  private name: string;

  constructor (id:string, name:string){
    this.id = id;
    this.name = name;
  }

  get productName(): string {
    return this.name;
  }

  set productName(name:string){
    this.name = name;
  }

  get getId():string {
    return this.id;
  }

  set setId(id:string){
    this.id = id;
  }
}

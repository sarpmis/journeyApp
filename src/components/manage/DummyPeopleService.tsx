import { People } from "./People"

export class DummyPeopleModel {
  static instance = new DummyPeopleModel();
  public list: People[] = [
    {id: '1', name: 'Ismail', surname: 'Duran', title: 'Manager', photo: 'munir-ozkul.png'},
    {id: '2', name: 'Serkan', surname: 'Konakcı', title: 'Front End Architect and Designer', photo: 'ilyas-salman.png'},
    {id: '3', name: 'Eylül', surname: 'Güler', title: 'UX Designer', photo: 'ahmet-ariman.png'},
    {id: '4', name: 'Selin', surname: 'Tarakçı', title: 'UX Coach', photo: 'adile-nasit.png'},
    {id: '5', name: 'Nail', surname: 'Diker', title: 'Information Technology Manager', photo: 'feridun-savli.png'},
    {id: '6', name: 'Oğuz', surname: 'Akpınar', title: 'Back End Developer', photo: 'halit-akcatepe.png'},
    {id: '7', name: 'Ahmet', surname: 'Öz', title: 'Back End Developer', photo: 'tarik-akan.png'},
    {id: '8', name: 'Tuğba', surname: 'Öztürk Kaya', title: 'Agile Coach', photo: 'sevda-tolga.png'},
    {id: '9', name: 'Nurdan', surname: 'Canbaz', title: 'Agile Coach', photo: 'perran-kutman.png'},
    // {id: '10', name: 'Kerem', surname: 'Turgay', title: 'Product Manager', photo: 'sener-sen.png'}
  ];

  constructor() {}

  getPeople(index: number) {
    return this.list[index];
  }

  setPeople(index: number, property: string, value: any) {
    this.list[index][property] = value;
  }
}

export const DummyPeople = DummyPeopleModel.instance;

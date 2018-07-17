export class People {
  id: string;
  name: string;
  surname: string;
  title: string;
  manager?: People;
  employees?: People[];
  photo?: string;
//   location?: Geo;
}

export class WeatherDto {
  public id: number;
  public date: string;
  public latitude: string;
  public longitude: string;
  public city: string;
  public province: string;

  public temperatures: Array<string>;
}

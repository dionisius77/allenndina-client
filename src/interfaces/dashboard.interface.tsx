export interface CountryInterface {
  id: number;
  name: string;
  code: string;
}

export interface CityInterface {
  id: number;
  name: string;
  code: string;
  countryId: number;
}

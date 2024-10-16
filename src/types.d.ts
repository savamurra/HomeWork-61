export interface APICountry {
  name: string;
  alpha3Code: string;
}

export interface APIOneCountry {
  name: string;
  capital: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  borders: string[];
}

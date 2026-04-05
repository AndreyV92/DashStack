export type TCard = {
  "id": string;
  "name": string;
  "image"?: string;
  "current_price": number;
  "fully_diluted_valuation": number;
}

export type TRate = {
  [key: string]: number;
}

export type TCoin = {
  date: string;
  base: string
  rates: TRate
}

export type TCardProps = {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  current_price: number | undefined
}

export type TCardsState = {
  cardsData: TCard[] | null;
  isLoading: boolean;
  error: string | undefined
}



export type TRateDate = {
  [key: string]: TRate
}


export type TChartData = {
  startDate: string;
  endDate: string;
  base: string;
}

export type TChartParam = TChartData & {
  selectCoin: string
}

export type TChart = TChartData & {
  rates: TRateDate
}

export type TUser = {
  id: number;
  name: string;
  serName: string,
  password: string,
}



export type THour = {
  time: string[];
  temperature_2m: number[];
}

export type TCity = {
  name?: string;
  latitude: number;
  longitude: number;
}

export type TWeather = {
  latitude: number;
  longitude: number;
  hourly: THour;
}

// Films

export type TImage = {
  url: string;
  previewUrl?: string
}

export type TFilmResponce = {
  docs: TFilm[]
}

export type TFilm = {
  id: number;
  name: string;
  year: number;
  description: string
  poster: TImage
}

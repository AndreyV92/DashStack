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

export type TChartParam = TChartData &{
  selectCoin: string
}

export type TChart = TChartData &{
  rates: TRateDate
}

export type TUser = {
  id: number;
  name: string;
  serName: string,
  password: string,
}
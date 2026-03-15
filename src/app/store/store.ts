import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../slices/cards/cardsSlice'
import coinsSlice  from '../slices/coins/coinsSlice'
import chartsSlice from '../slices/Chart/ChartSlice'
import  weatherSlice  from '../slices/weather/weatherSlice'



export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    coins: coinsSlice,
    charts: chartsSlice,
    weather: weatherSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../slices/cards/cardsSlice'
import coinsSlice  from '../slices/coins/coinsSlice'
import chartsSlice from '../slices/Chart/ChartSlice'



export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    coins: coinsSlice,
    charts: chartsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
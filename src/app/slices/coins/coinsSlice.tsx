import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCoin } from "../../../types";

const currencyKey = import.meta.env.VITE_REACT_APP_CURRENCYBEACON_KEY

const currentDate = new Date().toISOString().split('T')[0]
const lastYearDate = +currentDate.split('-')[0] - 1 + currentDate.slice(4)

console.log(lastYearDate)


export type TCoinsState = {
  coinsData: TCoin | null;
  isLoading: boolean;
  error: string | undefined;
  startDate: string;
  endDate: string;
  selectCoin: string;
};

const initialState: TCoinsState = {
  coinsData: null,
  isLoading: false,
  error: "",
  startDate: lastYearDate,
  endDate: currentDate,
  selectCoin: "GBP",
};

export const fetchCoinsData = createAsyncThunk(
  "post/coinsData",
  async (selectDate: string = "2022-01-01") => {
    const response = await axios.get(
      `https://api.currencybeacon.com/v1/historical?api_key=${currencyKey}&base=USD&date=${selectDate}`,
    );
    return response.data;
  },
);

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    changeSelectCoin: (state, action) => {
      state.selectCoin = action.payload;
    },
    changeStartYear: (state, action) => {
      state.startDate = action.payload;
    },
    changeEndYear: (state, action) => {
      state.endDate = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCoinsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.coinsData = action.payload;
    });
    builder.addCase(fetchCoinsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "ошибка подгрузки монет";
      state.coinsData = null;
    });
    builder.addCase(fetchCoinsData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const { changeSelectCoin, changeStartYear, changeEndYear } = coinsSlice.actions;

export default coinsSlice.reducer;

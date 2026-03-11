import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCoin } from "../../../types";

// const currencyKey = process.env.REACT_APP_CURRENCYBEACON_KEY

export type TCoinsState = {
  coinsData: TCoin | null;
  isLoading: boolean;
  error: string | undefined;
  // selectDate: string;
  startYear: string;
  endYear: string;
  selectCoin: string;
};

const initialState: TCoinsState = {
  coinsData: null,
  isLoading: false,
  error: "",
  // selectDate: '2020',
  startYear: '2020',
  endYear: '2021',
  selectCoin: "GBP",
};

export const fetchCoinsData = createAsyncThunk(
  "post/coinsData",
  async (selectYear: string = "2022") => {
    const response = await axios.get(
      `https://api.currencybeacon.com/v1/historical?api_key=CDoLoWJVKT7h4odO3jKAgJ2hYmlnjBqH&base=USD&date=${selectYear}-01-01`,
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
      state.startYear = action.payload;
    },
    changeEndYear: (state, action) => {
      state.endYear = action.payload;
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

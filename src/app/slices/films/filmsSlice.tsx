import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { TFilm } from "../../../types";
import { Slide, toast } from "react-toastify";

const currencyKey = import.meta.env.VITE_REACT_APP_FILMS_KEY;

type TFilmsState = {
  filmsData: TFilm[] | null;
  error: string | undefined;
  isLoading: boolean;
};

const initialState: TFilmsState = {
  filmsData: null,
  error: undefined,
  isLoading: false,
};

export const fetchFilmsData = createAsyncThunk("get/filmsData", async () => {
  const response = await axios.get(`https://api.poiskkino.dev/v1.5/movie`, {
    headers: {
      "X-API-KEY": currencyKey,
    },
  });
  return response.data;
});

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFilmsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.filmsData = action.payload.docs;
    });
    builder.addCase(fetchFilmsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "ошибка подгрузки монет";
      toast.error("Ошибка загрузки", {
        transition: Slide

      })
      state.filmsData = null;
    });
    builder.addCase(fetchFilmsData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const {} = filmsSlice.actions;

export default filmsSlice.reducer;

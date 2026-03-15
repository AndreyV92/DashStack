import React, { useEffect } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import chartsSlice, {
  fetchChartsData,
} from "../../app/slices/Chart/ChartSlice";

const Chart = () => {
  const { selectCoin, startDate, endDate } = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  const { chartsData } = useAppSelector((state) => state.charts);

console.log(chartsData)
  const normalizeData =
  chartsData?.rates
    ? Object.entries(chartsData.rates).map(([date, rate]) => ({
        date,
        [selectCoin]: rate?.[selectCoin]
      }))
    : [];


  useEffect(() => {

    if(!selectCoin) return
    
    console.log(selectCoin)
    dispatch(
      fetchChartsData({
        startDate: `${startDate}`,
        endDate: `${endDate}`,
        base: "USD",
        selectCoin: selectCoin,
      }),
    );

    console.log(chartsData);
  }, [dispatch, startDate, selectCoin, endDate]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={normalizeData}>
          <XAxis dataKey="date" fontSize={12} tick={{ fill: "#9a9a9a" }} />
          <YAxis fontSize={12} tick={{ fill: "#9a9a9a" }} />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
          <Line
            type="monotone"
            dataKey={selectCoin}
            stroke="#4880FF"
            strokeWidth={2}
            dot={{ r: 3, fill: "#4880FF" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

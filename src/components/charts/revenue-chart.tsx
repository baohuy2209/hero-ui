import { Card, CardBody, CardHeader } from "@heroui/react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 5000,
    pv: 5670,
    amt: 3200,
  },
  {
    name: "Sep",
    uv: 4567,
    pv: 4340,
    amt: 3400,
  },
  {
    name: "Oct",
    uv: 5640,
    pv: 4500,
    amt: 4600,
  },
  {
    name: "Nov",
    uv: 6780,
    pv: 5630,
    amt: 4560,
  },
  {
    name: "Dec",
    uv: 4530,
    pv: 6700,
    amt: 3200,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <Card className="h-[400px]">
        <CardHeader>Total Revenue</CardHeader>
        <CardBody>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    );
  }
}

import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import Title from "./Title";

export default function Revenue() {
  const data = [
    {
      data: 2000,
    },
    {
      data: 4500,
    },
    {
      data: 7100,
    },
    {
      data: 3200,
    },
    {
      data: 2200,
    },
    {
      data: 8000,
    },
    {
      data: 3500,
    },
  ];
  return (
    <div className="revenue">
      <Title title="$9.528" subTitle="Revenue this week" />
      <div className="graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data}>
            <defs>
              <linearGradient id="color" x1="0" x2="0" y1="0" y2="1">
                <stop offset="30%" stopColor="#ff4d6d" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#ee3b3b"
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

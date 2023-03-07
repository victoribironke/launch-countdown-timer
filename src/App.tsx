import Counter from "./components/Counter/Counter";
import { useState, useEffect } from "react";
import Links from "./components/Links/Links";
import { days, date, format, convert } from "./utils/helpers";

type Time = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const App = () => {
  let interval = null;
  const initialState = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };
  const [timeLeft, setTimeLeft] = useState<Time>(initialState);

  useEffect(() => {
    interval = setInterval(() => {
      const day = format(new Date().getDate());
      const month = format(new Date().getMonth() + 1);
      const year = new Date().getFullYear();
      const hour = format(new Date().getHours());
      const minute = format(new Date().getMinutes());
      const second = format(new Date().getSeconds());

      const date1String = `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
      const date2String = `${year}-${month}-${
        days[month as keyof typeof days]
      }T00:00:00Z`;

      const date1 = new Date(date1String);
      const date2 = new Date(date2String);
      const result = convert(date2.getTime() - date1.getTime());
      setTimeLeft({
        days: result[0],
        hours: result[1],
        minutes: result[2],
        seconds: result[3],
      });
    }, 1000);
  }, []);

  return (
    <>
      <img src="/bg-stars.svg" alt="stars" className="stars" />
      <img src="/pattern-hills.svg" alt="hills" className="hills" />

      <main>
        <h2>
          We're launching <br />
          soon
        </h2>
        <div className="counters">
          <Counter value={timeLeft.days} duration="days" />
          <Counter value={timeLeft.hours} duration="hours" />
          <Counter value={timeLeft.minutes} duration="minutes" />
          <Counter value={timeLeft.seconds} duration="seconds" />
        </div>
        <p>{date}</p>
        <Links />
      </main>
    </>
  );
};

export default App;

const today = new Date().getMonth();
const thisYear = new Date().getFullYear();

const days = {
  "01": 31,
  "02": 12,
  "03": 31,
  "04": 30,
  "05": 31,
  "06": 30,
  "07": 31,
  "08": 31,
  "09": 30,
  "10": 31,
  "11": 30,
  "12": 31,
};

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const date = `Till 1st ${months[(today + 2) as keyof typeof months]} ${
  today + 2 == 12 ? thisYear + 1 : thisYear
}`;

const format = (number: number): string =>
  number.toString().length == 1 ? `0${number}` : number.toString();

const convert = (milli: number): string[] => {
  const days = Math.floor(milli / (24 * 60 * 60 * 1000));
  const daysms = milli % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = milli % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = milli % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  return [days, hours, minutes, sec].map(format);
};

export { days, date, format, convert };

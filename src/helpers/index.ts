export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return 'NE';
  if (deg > 76 && deg <= 105) return 'E';
  if (deg > 105 && deg <= 165) return 'SE';
  if (deg > 166 && deg <= 195) return 'S';
  if (deg > 195 && deg <= 255) return 'SW';
  if (deg > 255 && deg <= 285) return 'W';
  if (deg > 285 && deg <= 345) return 'NW';

  return 'N';
};

export const getWeeklyDay = (day: number): string => {
  if (day === 0) return 'Sunday';
  if (day === 1) return 'Monday';
  if (day === 2) return 'Tuesday';
  if (day === 3) return 'Wednesday';
  if (day === 4) return 'Thursday';
  if (day === 5) return 'Friday';

  return 'Saturday';
};

export const getHourNumber = (hour: number): string => {
  if (hour === 0) return '00';
  if (hour === 1) return '01';
  if (hour === 2) return '02';
  if (hour === 3) return '03';
  if (hour === 4) return '04';
  if (hour === 5) return '05';
  if (hour === 6) return '06';
  if (hour === 7) return '07';
  if (hour === 8) return '08';
  if (hour === 9) return '09';

  return hour.toString();
};

export const getMonthName = (month: number): string => {
  if (month === 0) return 'January';
  if (month === 1) return 'February';
  if (month === 2) return 'March';
  if (month === 3) return 'April';
  if (month === 4) return 'May';
  if (month === 5) return 'June';
  if (month === 6) return 'July';
  if (month === 7) return 'August';
  if (month === 8) return 'September';
  if (month === 9) return 'October';
  if (month === 10) return 'November';

  return 'December';
};

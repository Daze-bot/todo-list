import moment from 'moment';

function getWeekDates() {
  let weekDates = [];
  let upcomingWeek = [];

  for (let i = 0; i < 7; i++) {
    weekDates.push(moment().add(i, 'd').format());
  }

  upcomingWeek = weekDates.map(x => x.substring(0, 10));

  return upcomingWeek;
}

export {
  getWeekDates,
}
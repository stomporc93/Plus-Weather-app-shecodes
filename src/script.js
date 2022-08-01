function formatDate(date) {
  let hours = date.nowHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.nowMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.nowDay();
  let days = ["sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
  let day = days[dayIndex];
  return `${day}, ${hours}:${minutes}`;
}
console.log(formatDate);

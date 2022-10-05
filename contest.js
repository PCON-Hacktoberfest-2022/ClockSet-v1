import moment from './node_modules/moment/dist/moment.js';

fetch("https://www.kontests.net/api/v1/leet_code")
// fetch("https://www.kontests.net/api/v1/all")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    console.log(completedata.reverse())
    for(let i=0;i<completedata.length;i++){
      const title = document.querySelectorAll(".card-title");
        const startTime = document.querySelectorAll("#start-time");
        const endTime = document.querySelectorAll("#end-time");
        const link = document.querySelectorAll("#contest-link");
        const timeLeft = document.querySelectorAll("#time-left");
        console.log(title[i]);
        title[i].textContent = completedata[i].name;
        startTime[i].textContent = moment(completedata[i].start_time).format('LLLL');
        endTime[i].textContent = moment(completedata[i].end_time).format('LLLL');
        timeLeft[i].textContent = moment(completedata[i].start_time).fromNow();
        link[i].href = completedata[i].url;

    }
    // document.getElementById("contests").innerHTML = data1;
  });
// .catch.log((err) => {
//   console.log(err);
// });
function datetime_to_indian_format(datetime){
  date = new Date(datetime)
  day = date.getDate()
  month = date.getMonth()
  year = date.getFullYear()
  hour = date.getHours()
  min = date.getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  is_am = true
  if (hour > 12){
    hour = hour - 12
  }
  else if (hour == 0) {
    hour = 12
  }
  return day.toString().concat("/", month.toString(), "/", year.toString(), " ", hour.toString(), ":", min.toString(), " ", (is_am) ? 'AM' : 'PM')
}

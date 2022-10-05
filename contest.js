import moment from './node_modules/moment/dist/moment.js';

fetch("https://www.kontests.net/api/v1/leet_code")
// fetch("https://www.kontests.net/api/v1/all")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
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
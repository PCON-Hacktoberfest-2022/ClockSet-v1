import moment from './node_modules/moment/dist/moment.js';

fetch("https://www.kontests.net/api/v1/leet_code")
// fetch("https://www.kontests.net/api/v1/all")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata.reverse())
    for(let i=0;i<completedata.length;i++){
      const title = document.querySelectorAll(".card-title-lc");
      const duration = document.querySelectorAll("#duration-lc");
      const startTime = document.querySelectorAll("#start-time-lc");
      const endTime = document.querySelectorAll("#end-time-lc");
      const link = document.querySelectorAll("#contest-link-lc");
      const timeLeft = document.querySelectorAll("#time-left-lc");
      console.log(title[i]);
      duration[i].textContent = completedata[i].duration/60+completedata[i].duration%60;
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

fetch("https://www.kontests.net/api/v1/codeforces")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata)
    for(let i=0;i<completedata.length;i++){
      const title = document.querySelectorAll(".card-title-cf");
      const duration = document.querySelectorAll("#duration-cf");
      const startTime = document.querySelectorAll("#start-time-cf");
      const endTime = document.querySelectorAll("#end-time-cf");
      const link = document.querySelectorAll("#contest-link-cf");
      const timeLeft = document.querySelectorAll("#time-left-cf");
      console.log(title[i]);
      duration[i].textContent = completedata[i].duration/60+completedata[i].duration%60;
      title[i].textContent = completedata[i].name;
      startTime[i].textContent = moment(completedata[i].start_time).format('LLLL');
      endTime[i].textContent = moment(completedata[i].end_time).format('LLLL');
      timeLeft[i].textContent = moment(completedata[i].start_time).fromNow();
      link[i].href = completedata[i].url;
    }
  }
);

fetch("https://www.kontests.net/api/v1/codeforces")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    for(let i=0;i<completedata.length;i++){
      let card = document.createElement("div");
      // TODO: img in card
      var fragment = document.createDocumentFragment();
      let title = document.createElement("H5");
      title.innerHTML = 'title:' + completedata[i].name
      fragment.appendChild(title);
      let duration = document.createElement("P");
      duration.innerHTML = "Duration:".bold() + completedata[i].duration/60+completedata[i].duration%60;
      fragment.appendChild(duration);
      let start_time = document.createElement("P");
      start_time.innerHTML = "Event starts at:".bold() + moment(completedata[i].start_time).format('LLLL');
      fragment.appendChild(start_time);
      let end_time = document.createElement("P");
      end_time.innerHTML = "Event ends at:".bold() + moment(completedata[i].end_time).format('LLLL');
      fragment.appendChild(end_time);
      let time_left = document.createElement("P");
      time_left.innerHTML = "Event starts ".bold() + moment(completedata[i].start_time).fromNow();
      fragment.appendChild(time_left);
      let link_text = document.createTextNode("This is link");
      let link = document.createElement("A");
      link.appendChild(link_text);
      console.log(completedata[i].url)
      link.href = completedata[i].url;
      link.title = "Link"
      fragment.appendChild(link);
      card.appendChild(fragment);
      let container = document.querySelector("#container");
      container.appendChild(card);
    }
  }
);
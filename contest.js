import moment from './node_modules/moment/dist/moment.js';

fetch("https://www.kontests.net/api/v1/leet_code")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    for(let i=0;i<completedata.length;i++){
      let card = document.createElement("div");
      // TODO: add style to card
      var fragment = document.createDocumentFragment();
      var img = document.createElement('img');
      img.src = "images/leetcode.png"
      img.style.height = '45px'
      img.style.width = '160px'
      fragment.appendChild(img);
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
      let link = document.createElement("a");
      var linkText = document.createTextNode("Link");
      link.appendChild(linkText);
      link.title = "Link"
      link.href = completedata[i].url;
      link.target = "_blank";
      link.style.color = "#5498e7"
      fragment.appendChild(link);
      var line = document.createElement("HR");
      fragment.appendChild(line);
      card.appendChild(fragment);
      let container = document.querySelector("#container-leetcode");
      container.appendChild(card);
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
      // TODO: add style to card
      var fragment = document.createDocumentFragment();
      var img = document.createElement('img');
      img.src = "images/codeforces.png"
      img.style.height = '45px'
      img.style.width = '160px'
      fragment.appendChild(img);
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
      let link = document.createElement("a");
      var linkText = document.createTextNode("Link");
      link.appendChild(linkText);
      link.title = "Link"
      link.href = completedata[i].url;
      link.target = "_blank";
      link.style.color = "#5498e7"
      fragment.appendChild(link);
      var line = document.createElement("HR");
      fragment.appendChild(line);
      card.appendChild(fragment);
      let container = document.querySelector("#container-codeforces");
      container.appendChild(card);
    }
  }
);
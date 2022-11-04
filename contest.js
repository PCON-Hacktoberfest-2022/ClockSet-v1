import moment from "./node_modules/moment/dist/moment.js";


const sites = [
  "leetcode",
  "codeforces",
  "codechef",
  "at_coder",
  "hacker_earth",
  "hacker_rank",
  "kick_start"
]

function img_site(site) {
  if (site == "leetcode") {
    return "images/leetcode.png";
  } else if (site == "codeforces") {
    return "images/codeforces.png";
  } else if (site == "codechef") {
    return "images/codechef.svg";
  } else if (site == "at_coder") {
    return "images/at_coder.png";
  } else if (site == "kick_start") {
    return "images/kick_start.png";
  } else if (site == "hacker_earth") {
    return "images/hacker_earth.png";
  } else if (site == "hacker_rank") {
    return "images/hacker_rank.png";
  }
  // TODO: a placeholder image
}

function sortContestResp(data){
  // data is list of dict, sort on basis of start_time
  return data.sort(
    function(a, b) {
      return new Date(a.start_time) - new Date(b.start_time)
    }
  )
}

function cards(completedata, site) {
  for (let i = 0; i < completedata.length; i++) {
    let card = document.createElement("div");
    // TODO: add style to card
    var fragment = document.createDocumentFragment();
    var img = document.createElement("img");
    img.src = img_site(site);
    img.style.height = "45px";
    img.style.width = "160px";
    fragment.appendChild(img);
    let title = document.createElement("H5");
    title.innerHTML = completedata[i].name;
    fragment.appendChild(title);
    const duration_formatter = (dur) =>{
      let a="", b="", c="";
      if(dur / 86400 >= 1){
        a = (Math.floor(dur / 86400)) + " Day";
        if(Math.floor(dur / 86400)>1) a+="s";
        a+=" ";
      }
      dur %= 86400;
      if(dur / 3600 >= 1){
        b = (Math.floor(dur / 3600)) + " Hour";
        if(Math.floor(dur / 3600) > 1) b+="s";
        b+=" ";
      }
      dur %= 3600;
      if(dur / 60 >= 1){
        c = (Math.floor(dur / 60)) + " Minute";
        if(Math.floor(dur / 60) > 1) c+="s";
        c+=" ";
      }

      return a+b+c;
    }
    let duration = document.createElement("P");
    duration.innerHTML =
      "Duration: ".bold() + duration_formatter(completedata[i].duration);
    fragment.appendChild(duration);
    let start_time = document.createElement("P");
    start_time.innerHTML =
      "Event starts at: ".bold() +
      moment(completedata[i].start_time).format("LLLL");
    fragment.appendChild(start_time);
    let end_time = document.createElement("P");
    end_time.innerHTML =
      "Event ends at: ".bold() + moment(completedata[i].end_time).format("LLLL");
    fragment.appendChild(end_time);
    let time_left = document.createElement("P");
    time_left.innerHTML =
      "Event starts ".bold() + moment(completedata[i].start_time).fromNow();
    fragment.appendChild(time_left);
    let link = document.createElement("a");
    var linkText = document.createTextNode("Link");
    link.appendChild(linkText);
    link.title = "Link";
    link.href = completedata[i].url;
    link.target = "_blank";
    link.style.color = "#5498e7";
    fragment.appendChild(link);
    var line = document.createElement("HR");
    fragment.appendChild(line);
    card.appendChild(fragment);
    let container_name = "#container-" + site;
    let container = document.querySelector(container_name);
    container.appendChild(card);
  }
}

function toggleContenstVisibility(site){
  if (site=="all"){
    for(let i=0;i<sites.length;i++){
      document.getElementById("container-" + sites[i]).style.display = "block";
    }
  }
  else{
    for(let i=0;i<sites.length;i++){
      if(sites[i]==site){
        document.getElementById("container-" + sites[i]).style.display = "block";
      }
      else{
        document.getElementById("container-" + sites[i]).style.display = "none";
      }
    }
  }
}

fetch("https://www.kontests.net/api/v1/leet_code")
  .then((data) => {
    //console.log(data);
    return data.json();
  })
  .then((completedata) => {
    cards(sortContestResp(completedata), "leetcode");
  });

fetch("https://www.kontests.net/api/v1/codeforces")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(sortContestResp(completedata), "codeforces");
  });

fetch("https://www.kontests.net/api/v1/code_chef")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(sortContestResp(completedata), "codechef");
  });

fetch("https://www.kontests.net/api/v1/at_coder")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(sortContestResp(completedata), "at_coder");
  });

fetch("https://www.kontests.net/api/v1/kick_start")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(sortContestResp(completedata), "kick_start");
  });

fetch("https://www.kontests.net/api/v1/hacker_earth")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(sortContestResp(completedata), "hacker_earth");
  });

fetch("https://kontests.net/api/v1/hacker_rank")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(sortContestResp(completedata), "hacker_rank");
  });

let platform = "all";
const btn = document.querySelector("#btn");
let sb = document.querySelector("#contest");
btn.onclick = (e) => {
  e.preventDefault();
  // console.log(sb.value);
  platform = sb.value;
  toggleContenstVisibility(platform)
};

// console.log(allContest);

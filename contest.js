import moment from "./node_modules/moment/dist/moment.js";

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
    let duration = document.createElement("P");
    duration.innerHTML =
      "Duration:".bold() +
      completedata[i].duration / 60 +
      (completedata[i].duration % 60);
    fragment.appendChild(duration);
    let start_time = document.createElement("P");
    start_time.innerHTML =
      "Event starts at:".bold() +
      moment(completedata[i].start_time).format("LLLL");
    fragment.appendChild(start_time);
    let end_time = document.createElement("P");
    end_time.innerHTML =
      "Event ends at:".bold() + moment(completedata[i].end_time).format("LLLL");
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
const allContest = [{}];

fetch("https://www.kontests.net/api/v1/leet_code")
  .then((data) => {
    //console.log(data);
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    // console.log(completedata);
    cards(completedata, "leetcode");
  });

fetch("https://www.kontests.net/api/v1/codeforces")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(completedata, "codeforces");
  });

fetch("https://www.kontests.net/api/v1/code_chef")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(completedata, "codechef");
  });

fetch("https://www.kontests.net/api/v1/at_coder")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(completedata, "at_coder");
  });

fetch("https://www.kontests.net/api/v1/kick_start")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(completedata, "kick_start");
  });

fetch("https://www.kontests.net/api/v1/hacker_earth")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(completedata, "hacker_earth");
  });

fetch("https://kontests.net/api/v1/hacker_rank")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // allContest.push(completedata);
    cards(completedata, "hacker_rank");
  });

let platform = "all";
const btn = document.querySelector("#btn");
let sb = document.querySelector("#contest");
btn.onclick = (e) => {
  e.preventDefault();
  // console.log(sb.value);
  platform = sb.value;
  console.log(platform);
  if (platform === "all") {
    document.getElementById("container-leetcode").style.display = "block";
    document.getElementById("container-codeforces").style.display = "block";
    document.getElementById("container-codechef").style.display = "block";
    document.getElementById("container-at_coder").style.display = "block";
    document.getElementById("container-hacker_earth").style.display = "block";
    document.getElementById("container-hacker_rank").style.display = "block";
    document.getElementById("container-kick_start").style.display = "block";
  } else if (platform === "lc") {
    document.getElementById("container-leetcode").style.display = "block";
    document.getElementById("container-codeforces").style.display = "none";
    document.getElementById("container-codechef").style.display = "none";
    document.getElementById("container-at_coder").style.display = "none";
    document.getElementById("container-hacker_earth").style.display = "none";
    document.getElementById("container-hacker_rank").style.display = "none";
    document.getElementById("container-kick_start").style.display = "none";
  } else if (platform === "cc") {
    document.getElementById("container-leetcode").style.display = "none";
    document.getElementById("container-codeforces").style.display = "none";
    document.getElementById("container-codechef").style.display = "block";
    document.getElementById("container-at_coder").style.display = "none";
    document.getElementById("container-hacker_earth").style.display = "none";
    document.getElementById("container-hacker_rank").style.display = "none";
    document.getElementById("container-kick_start").style.display = "none";
  } else if (platform === "cf") {
    document.getElementById("container-leetcode").style.display = "none";
    document.getElementById("container-codeforces").style.display = "block";
    document.getElementById("container-codechef").style.display = "none";
    document.getElementById("container-at_coder").style.display = "none";
    document.getElementById("container-hacker_earth").style.display = "none";
    document.getElementById("container-hacker_rank").style.display = "none";
    document.getElementById("container-kick_start").style.display = "none";
  } else if (platform === "Atcoder") {
    document.getElementById("container-leetcode").style.display = "none";
    document.getElementById("container-codeforces").style.display = "none";
    document.getElementById("container-codechef").style.display = "none";
    document.getElementById("container-at_coder").style.display = "block";
    document.getElementById("container-hacker_earth").style.display = "none";
    document.getElementById("container-hacker_rank").style.display = "none";
    document.getElementById("container-kick_start").style.display = "none";
  } else if (platform === "he") {
    document.getElementById("container-leetcode").style.display = "none";
    document.getElementById("container-codeforces").style.display = "none";
    document.getElementById("container-codechef").style.display = "none";
    document.getElementById("container-at_coder").style.display = "none";
    document.getElementById("container-hacker_earth").style.display = "block";
    document.getElementById("container-hacker_rank").style.display = "none";
    document.getElementById("container-kick_start").style.display = "none";
  } else if (platform === "hr") {
    document.getElementById("container-leetcode").style.display = "none";
    document.getElementById("container-codeforces").style.display = "none";
    document.getElementById("container-codechef").style.display = "none";
    document.getElementById("container-at_coder").style.display = "none";
    document.getElementById("container-hacker_earth").style.display = "none";
    document.getElementById("container-hacker_rank").style.display = "block";
    document.getElementById("container-kick_start").style.display = "none";
  } else if (platform === "ks") {
    document.getElementById("container-leetcode").style.display = "none";
    document.getElementById("container-codeforces").style.display = "none";
    document.getElementById("container-codechef").style.display = "none";
    document.getElementById("container-at_coder").style.display = "none";
    document.getElementById("container-hacker_earth").style.display = "none";
    document.getElementById("container-hacker_rank").style.display = "none";
    document.getElementById("container-kick_start").style.display = "block";
  }
};

// console.log(allContest);

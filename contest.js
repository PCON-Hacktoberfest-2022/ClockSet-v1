fetch("https://www.kontests.net/api/v1/leet_code")
// fetch("https://www.kontests.net/api/v1/all")
  .then((data) => {
    return data.json();
  })
  .then((compledata) => {
    let data1 = "";
    compledata.reverse().map((values) => {
      data1 += `<div id="all_contest"><div class="c_name">${values.name}</div>
        <div class="btn btn-danger"><a href="${values.url}" target="_blank">Contest Link</a></div>
        <div class="start_time">${values.start_time}</div>
        <div class="end_time">${values.end_time}</div></div>`;
      // let x = `${values.url}`;
      // if (x.includes("codechef")) {
      //   console.log("Yes");
      //   var codeforces_e = document.getElementById("all_contest");
      //   codeforces_e.style["backgroundColor"] = "red";
      // }
    });

    document.getElementById("contests").innerHTML = data1;
  });
// .catch.log((err) => {
//   console.log(err);
// });

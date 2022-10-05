fetch("https://www.kontests.net/api/v1/leet_code")
// fetch("https://www.kontests.net/api/v1/all")
  .then((data) => {
    return data.json();
  })
  .then((compledata) => {
    let data1 = "";
    compledata.reverse().map((values) => {
      data1 += `<div id="all_contest"><div class="c_name">${values.name}</div>
        <div class="btn btn-danger"><a href="${values.url}" target="_blank">Contest Link</a></div><br/>
        <div class="start_time text-light"><b class="text-light">Start Time: </b>${datetime_to_indian_format(values.start_time)}</div><br/>
        <div class="end_time text-light"><b class="\text-light">End Time: </b>${datetime_to_indian_format(values.end_time)}</div></div>`;
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
function datetime_to_indian_format(datetime){
  const date = new Date(datetime)
  day = date.getDate()
  month = date.getMonth() + 1
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

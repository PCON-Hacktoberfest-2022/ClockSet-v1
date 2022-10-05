import moment from './node_modules/moment/dist/moment.js';
var span = document.getElementById("span");
function time() {
  let today = new Date();
  let options = {
    weekday: "short",
    day: "numeric",
    month: "long",
  };
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let day = today.toLocaleDateString("en-GB", options);
  span.textContent = `${moment().format("dddd")},${moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  )} `;
}
setInterval(time, 1000);

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
  span.textContent =
    day +
    "    " +
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
}
setInterval(time, 1000);

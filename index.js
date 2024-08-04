elemHour = document.getElementById("hour");
elemMin = document.getElementById("min");
elemApm = document.getElementById("apm");
elemSearch = document.getElementById("search");

elemHour.innerHTML = localStorage['hour'];
elemMin.innerHTML = localStorage['min'];
elemApm.innerHTML = localStorage['apm'];

setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let apm = hour > 11 ? "PM" : "AM";

  hour = hour > 12 ? hour - 12 : hour;
  hour = hour < 10 ? "0" + hour.toString() : hour.toString();
  min = min < 10 ? "0" + min.toString() : min.toString();

  elemHour.innerHTML = hour;
  elemMin.innerHTML = min;
  elemApm.innerHTML = apm;
  localStorage['hour'] = hour;
  localStorage['min'] = min;
  localStorage['apm'] = apm;
}, 1000);

elemSearch.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        window.location.href = `https://www.duckduckgo.com/?q=${elemSearch.value}`;
    }
})

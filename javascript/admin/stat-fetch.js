const mainStatPanel = document.querySelector(".stat-main");
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const statUrls = [
  {
    range: "total",
    url: "http://localhost:8080/admin/api/stat/total",
  },
  {
    range: "today",
    tourlay: "http://localhost:8080/admin/api/stat/total",
  },
  {
    range: "this week",
    url: "http://localhost:8080/admin/api/stat/total",
  },
  {
    range: "this month",
    url: "http://localhost:8080/admin/api/stat/total",
  },
  {
    range: "this year",
    url: "http://localhost:8080/admin/api/stat/total",
  },
];
let counter = 0;
let statDivs;

//button listeners

function goLeft() {
  counter--;
  if (counter < 0) counter = statUrls.length;
  const stats = fetchStats(statUrls[counter]);
  updateStatDivs(stats);
}

function goRight() {
  console.log("dadasda");
  counter++;
  if (counter > statUrls.length - 1) counter = 0;
  const stats = fetchStats(statUrls[counter]);
  updateStatDivs(stats);
}

window.onload = (x) => {
  //prvo pozvati metodu za skupljanje podataka fetch
  const stats = fetchStats(statUrls[0]);

  if (statDivs === undefined) statDivs = createDivs(stats);
  else updateStatDivs(stats);

  //ocistiti
  mainStatPanel.innerHTML = "";

  statDivs.forEach((x) => mainStatPanel.appendChild(x));
};

//PREPRAVITI KASNIJE
function createDivs(stats) {
  const totalDivs = stats.length;

  let statDiv = document.createElement("div");
  statDiv.classList = "stat";

  let statName = document.createElement("p");
  statName.classList = "stat-name";

  let statTotal = document.createElement("p");
  statTotal.classList = "stat-total";

  let statDivs = [];

  for (let i = 0; i < totalDivs; i++) {
    statName.innerText = "";
    statName.innerText = stats[i].name;

    statTotal.innerText = "";
    statTotal.innerText = stats[i].total;

    statDiv.appendChild(statName);
    statDiv.appendChild(statTotal);
    statDivs[i] = statDiv.cloneNode(true);
  }

  return statDivs;
}
//PREPRAVITI KASNIJE
function updateStatDivs(stats) {
  for (let i = 0; i < stats.length; i++) {
    statDivs[i].childNodes[0].innerText = "";
    statDivs[i].childNodes[0].innerText = stats[i].name;

    statDivs[i].childNodes[1].innerText = "";
    statDivs[i].childNodes[1].innerText = stats[i].total;
  }
}
//PREPRAVITI KASNIJE
function fetchStats(url) {
  let stats = [];
  for (let i = 0; i < 6; i++) {
    stats[i] = getStat("pregledi", "12");
  }
  return stats;
}

function getStat(name, total) {
  return {
    name: name,
    total: total,
  };
}

// totalSiteAccess": 2,
// "totalRemainderEmails": 0,
// "totalQuestionEmails": 0,
// "totalReviews": 0,
// "totalWebShopItemsSet": 0,
// "totalWebShopItemsChanged

// let request = new XMLHttpRequest();
// if ("withCredidentials" in request) console.log("dasda");
// request.open("GET", url, true);
// request.responseType = "application/json";
// console.log(request.responseType);
// request.withCredentials = true;

// request.onload = () => {
//   console.log(request.response);
//   console.log("dsadasa");
// };
// console.log(request);
// request.send();

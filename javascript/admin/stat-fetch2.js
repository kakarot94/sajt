let swiper = new Swiper(".swiper-container", {
  sliderPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var s = 1;

function initStats() {
  let data = fetchData();

  setData(data);
  console.log("pokrenuto " + s);
  s++;
}
initStats();
initStats();
setInterval(initStats, 60000);

function fetchData() {
  let allData = [
    {
      id: "today",
      name: "Today Total",
      statData: [
        {
          id: "nov",
          name: "Number of visits",
          total: "2",
        },
        {
          id: "res",
          name: "Remainder emails sent",
          total: "5",
        },
        {
          id: "qes",
          name: "Question emails sent",
          total: "20",
        },
        {
          id: "rp",
          name: "Reviews posted",
          total: "3",
        },
        {
          id: "sic",
          name: "Shop items created",
          total: "2",
        },
        {
          id: "siu",
          name: "Shop items altered",
          total: "2",
        },
      ],
    },
    {
      id: "month",
      name: "This Week Total",
      statData: [
        {
          id: "nov",
          name: "Number of visits",
          total: "2",
        },
        {
          id: "res",
          name: "Remainder emails sent",
          total: "5",
        },
        {
          id: "qes",
          name: "Question emails sent",
          total: "20",
        },
        {
          id: "rp",
          name: "Reviews posted",
          total: "3",
        },
        {
          id: "sic",
          name: "Shop items created",
          total: "2",
        },
        {
          id: "siu",
          name: "Shop items altered",
          total: "2",
        },
      ],
    },
    {
      id: "week",
      name: "This Month Total",
      statData: [
        {
          id: "nov",
          name: "Number of visits",
          total: "2",
        },
        {
          id: "res",
          name: "Remainder emails sent",
          total: "5",
        },
        {
          id: "qes",
          name: "Question emails sent",
          total: "20",
        },
        {
          id: "rp",
          name: "Reviews posted",
          total: "3",
        },
        {
          id: "sic",
          name: "Shop items created",
          total: "2",
        },
        {
          id: "siu",
          name: "Shop items altered",
          total: "2",
        },
      ],
    },
    {
      id: "year",
      name: "This Year Total",
      statData: [
        {
          id: "nov",
          name: "Number of visits",
          total: "2",
        },
        {
          id: "res",
          name: "Remainder emails sent",
          total: "5",
        },
        {
          id: "qes",
          name: "Question emails sent",
          total: "20",
        },
        {
          id: "rp",
          name: "Reviews posted",
          total: "3",
        },
        {
          id: "sic",
          name: "Shop items created",
          total: "2",
        },
        {
          id: "siu",
          name: "Shop items altered",
          total: "2",
        },
      ],
    },
    {
      id: "total",
      name: "Total",
      statData: [
        {
          id: "nov",
          name: "Number of visits",
          total: "2",
        },
        {
          id: "res",
          name: "Remainder emails sent",
          total: "5",
        },
        {
          id: "qes",
          name: "Question emails sent",
          total: "20",
        },
        {
          id: "rp",
          name: "Reviews posted",
          total: "3",
        },
        {
          id: "sic",
          name: "Shop items created",
          total: "2",
        },
        {
          id: "siu",
          name: "Shop items altered",
          total: "2",
        },
      ],
    },
  ];

  return allData;
}

function setData(allData) {
  console.log(allData.length);
  allData.forEach((data) => {
    let statContainer = document.querySelector("#" + data.id + "-container");
    let statName = document.querySelector("#" + data.id);
    let content = document.querySelector("#" + data.id + "-content");
    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    if (statContainer === null || statName === null || content === null) {
      statContainer = document.createElement("div");
      statContainer.classList.add("stat-container");
      statContainer.id = data.id + "-container";
      statName = document.createElement("p");
      statName.classList.add("stat-name");
      statName.id = data.id;
      content = document.createElement("div");
      content.classList.add("content");
      content.id = data.id + "-content";
      statContainer.appendChild(statName);
      statContainer.appendChild(content);

      statName.innerText = "";
      statName.innerText = data.name;

      content.innerText = "";
      content.innerHTML = "";

      slide.appendChild(statContainer);
    }

    let statData = data.statData;
    statData.forEach((stat) => {
      let contentName = document.querySelector("#" + data.id + stat.id);
      let total = document.querySelector("#" + data.id + stat.id + "-total");
      if (contentName === null || total === null) {
        contentName = document.createElement("p");
        contentName.innerText = stat.name;
        contentName.classList.add("content-name");
        contentName.id = data.id + stat.id;

        total = document.createElement("p");
        total.classList.add("total");
        total.id = data.id + stat.id + "-total";

        let contentStat = document.createElement("div");
        contentStat.classList.add("content-stat");
        contentStat.appendChild(contentName);
        contentStat.appendChild(total);

        content.appendChild(contentStat);
        swiper.appendSlide(slide);
      }

      total.innerText = "";
      total.innerText = stat.total;
    });
  });
}

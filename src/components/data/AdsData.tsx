export const AgeAndGenderData = {
  ChartOptions: {
    series: [
      {
        name: "",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
      {
        name: "",
        data: [35, 41, 36, 26, 45, 48, 52],
      },
    ],
    options: {
      chart: {
        type: "bar" as const,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: ["#bae6fd", "#38bdf8", "#0c4a6e"],
      xaxis: {
        categories: [
          "18-24",
          "25-34",
          "35-44",
          "45-54",
          "55-64",
          "65-74",
          "75+",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 275,
              offsetX: -20,
              stroke: {
                width: 3,
              },
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 400,
            },
          },
        },
      ],
    },
  },
};

export const AdSummaryData = [
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
  {
    id: 569872349,
    active: true,
    spendRange: 5178,
    reach: "100000",
    startDate: new Date(),
    endDate: new Date(),
    url: "https://axioon.com/",
  },
];

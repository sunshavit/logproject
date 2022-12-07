export const pieConfig = {
  type: "pie",
  data: {
    labels: [
      "Service One",
      "Service Two",
      "Service Three",
      "Service Four",
      "Service Five",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 331, 39],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  },
};

export const barConfig = {
  type: "bar",
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  data: {
    labels: ["ss", "ss", "ss", "ss", "ss", "ss", "ss"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 0,
      },
    ],
  },
};

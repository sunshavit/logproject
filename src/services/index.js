const rows = [
  {
    id: 1,
    caseName: "SC1115",
    date: 1652913512000,
    customer: "Bank Of Colombia",
  },
  { id: 2, caseName: "SC1455", date: 1670333912000, customer: "Tiger Lili" },
  { id: 3, caseName: "SC7785", date: 1670506712000, customer: "Mitzi" },
  { id: 4, caseName: "SC9652", date: 1655566712000, customer: "Amazon" },
  { id: 5, caseName: "SC8456", date: 1660837112000, customer: "Nit LTD" },
  { id: 6, caseName: "SC9652", date: 1645223912000, customer: "Sun RobotiSC" },
  { id: 7, caseName: "SC5565", date: 1652913512000, customer: "Adon Menashe" },
  {
    id: 8,
    caseName: "SC2223",
    date: 1652913512000,
    customer: "SuperX Software",
  },
  {
    id: 9,
    caseName: "SC5696",
    date: 1652913512000,
    customer: "Yoni Boston Hadati",
  },
];

export function getCasesRows() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(rows), 1000);
  });
}

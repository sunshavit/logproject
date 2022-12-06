const rows = [
  {
    id: 1,
    caseId: "SC1115",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1652913512000,
    customer: "Bank Of Colombia",
  },
  {
    id: 2,
    caseId: "SC1455",
    fileName: "vision_support_134.153.136.89_10-07-22-1603",
    date: 1670333912000,
    customer: "Tiger Lili",
  },
  {
    id: 3,
    caseId: "SC7785",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1670506712000,
    customer: "Mitzi",
  },
  {
    id: 4,
    caseId: "SC9652",
    fileName: "vision_support_134.153.136.45-06-22-1603",
    date: 1655566712000,
    customer: "Amazon",
  },
  {
    id: 5,
    caseId: "SC8456",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1660837112000,
    customer: "Nit LTD",
  },
  {
    id: 6,
    caseId: "SC9652",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1645223912000,
    customer: "Sun RobotiSC",
  },
  {
    id: 7,
    caseId: "SC5565",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1652913512000,
    customer: "Adon Menashe",
  },
  {
    id: 8,
    caseId: "SC2223",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1652913512000,
    customer: "SuperX Software",
  },
  {
    id: 9,
    caseId: "SC5696",
    fileName: "vision_support_10.93.1.25_10-20-22-1155",
    date: 1652913512000,
    customer: "Yoni Boston Hadati",
  },
];

export function getCasesRows() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(rows), 1000);
  });
}

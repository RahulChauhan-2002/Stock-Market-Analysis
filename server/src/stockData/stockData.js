export const hardcodedCompanies = [
  { symbol: "RELIANCE", name: "Reliance Industries Limited" },
  { symbol: "TCS", name: "Tata Consultancy Services Limited" },
  { symbol: "HDFCBANK", name: "HDFC Bank Limited" },
  { symbol: "INFY", name: "Infosys Limited" },
  { symbol: "ICICIBANK", name: "ICICI Bank Limited" },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever Limited" },
  { symbol: "SBIN", name: "State Bank of India" },
  { symbol: "BHARTIARTL", name: "Bharti Airtel Limited" },
  { symbol: "ITC", name: "ITC Limited" },
  { symbol: "LICI", name: "Life Insurance Corporation of India" },
];

export const hardcodedStockData = {
  RELIANCE: {
    data: [
      { date: "2024-07-15", open: 2850, high: 2880.5, low: 2845, close: 2875.5, volume: 5000000 },
      { date: "2024-07-16", open: 2876, high: 2905, low: 2870, close: 2900, volume: 6200000 },
      { date: "2024-07-17", open: 2901, high: 2910.2, low: 2885, close: 2895.8, volume: 4800000 },
      { date: "2024-07-18", open: 2896, high: 2925, low: 2890.5, close: 2920.3, volume: 5500000 },
    ],
    stats: {
      high52: 3024.9,
      low52: 2220.3,
      avgVolume: 5375000,
    },
  },
  TCS: {
    data: [
      { date: "2024-07-15", open: 3800, high: 3850, low: 3790, close: 3845, volume: 3000000 },
      { date: "2024-07-16", open: 3845, high: 3860, low: 3820, close: 3830.5, volume: 2500000 },
      { date: "2024-07-17", open: 3830, high: 3840, low: 3805, close: 3815, volume: 2800000 },
      { date: "2024-07-18", open: 3816, high: 3825, low: 3800.5, close: 3810.3, volume: 2900000 },
    ],
    stats: {
      high52: 4254.75,
      low52: 3070.35,
      avgVolume: 2800000,
    },
  },
  HDFCBANK: {
    data: [
      { date: "2024-07-15", open: 1650, high: 1675, low: 1640, close: 1665, volume: 4500000 },
      { date: "2024-07-16", open: 1666, high: 1680, low: 1655, close: 1672.5, volume: 4700000 },
      { date: "2024-07-17", open: 1673, high: 1685, low: 1660, close: 1668, volume: 4600000 },
      { date: "2024-07-18", open: 1669, high: 1690, low: 1665, close: 1682.3, volume: 4900000 },
    ],
    stats: {
      high52: 1750.0,
      low52: 1400.0,
      avgVolume: 4675000,
    },
  },
  INFY: {
    data: [
      { date: "2024-07-15", open: 1450, high: 1465, low: 1440, close: 1458, volume: 3200000 },
      { date: "2024-07-16", open: 1459, high: 1470, low: 1445, close: 1462.2, volume: 3000000 },
      { date: "2024-07-17", open: 1463, high: 1480, low: 1450, close: 1475.4, volume: 3100000 },
      { date: "2024-07-18", open: 1476, high: 1490, low: 1470, close: 1485.7, volume: 3300000 },
    ],
    stats: {
      high52: 1605.75,
      low52: 1250.65,
      avgVolume: 3150000,
    },
  },
  ICICIBANK: {
    data: [
      { date: "2024-07-15", open: 1050, high: 1065, low: 1040, close: 1058.7, volume: 5200000 },
      { date: "2024-07-16", open: 1059, high: 1070, low: 1045, close: 1065.3, volume: 5300000 },
      { date: "2024-07-17", open: 1066, high: 1080, low: 1055, close: 1075.1, volume: 5100000 },
      { date: "2024-07-18", open: 1076, high: 1090, low: 1070, close: 1088.2, volume: 5400000 },
    ],
    stats: {
      high52: 1150.2,
      low52: 890.3,
      avgVolume: 5250000,
    },
  },
  HINDUNILVR: {
    data: [
      { date: "2024-07-15", open: 2500, high: 2520, low: 2490, close: 2512.5, volume: 2700000 },
      { date: "2024-07-16", open: 2513, high: 2530, low: 2500, close: 2524.6, volume: 2800000 },
      { date: "2024-07-17", open: 2525, high: 2550, low: 2510, close: 2540.3, volume: 2600000 },
      { date: "2024-07-18", open: 2541, high: 2565, low: 2530, close: 2558.7, volume: 2900000 },
    ],
    stats: {
      high52: 2650.5,
      low52: 2100.0,
      avgVolume: 2750000,
    },
  },
  SBIN: {
    data: [
      { date: "2024-07-15", open: 600, high: 610, low: 595, close: 607, volume: 4800000 },
      { date: "2024-07-16", open: 608, high: 615, low: 600, close: 610.5, volume: 5000000 },
      { date: "2024-07-17", open: 611, high: 620, low: 605, close: 618.2, volume: 4700000 },
      { date: "2024-07-18", open: 619, high: 625, low: 610, close: 622.7, volume: 4900000 },
    ],
    stats: {
      high52: 655.0,
      low52: 490.3,
      avgVolume: 4850000,
    },
  },
  BHARTIARTL: {
    data: [
      { date: "2024-07-15", open: 1280, high: 1300, low: 1270, close: 1295.6, volume: 3100000 },
      { date: "2024-07-16", open: 1296, high: 1310, low: 1285, close: 1305.2, volume: 3200000 },
      { date: "2024-07-17", open: 1306, high: 1320, low: 1295, close: 1318.3, volume: 3000000 },
      { date: "2024-07-18", open: 1319, high: 1335, low: 1305, close: 1325.7, volume: 3150000 },
    ],
    stats: {
      high52: 1400.0,
      low52: 1120.0,
      avgVolume: 3112500,
    },
  },
  ITC: {
    data: [
      { date: "2024-07-15", open: 430, high: 440, low: 428, close: 438.7, volume: 4200000 },
      { date: "2024-07-16", open: 439, high: 445, low: 432, close: 443.5, volume: 4300000 },
      { date: "2024-07-17", open: 444, high: 450, low: 439, close: 448.2, volume: 4100000 },
      { date: "2024-07-18", open: 449, high: 455, low: 445, close: 453.6, volume: 4400000 },
    ],
    stats: {
      high52: 475.0,
      low52: 390.0,
      avgVolume: 4250000,
    },
  },
  LICI: {
    data: [
      { date: "2024-07-15", open: 1000, high: 1015, low: 990, close: 1008.5, volume: 3500000 },
      { date: "2024-07-16", open: 1009, high: 1030, low: 1000, close: 1025.2, volume: 3600000 },
      { date: "2024-07-17", open: 1026, high: 1045, low: 1015, close: 1038.3, volume: 3450000 },
      { date: "2024-07-18", open: 1039, high: 1050, low: 1020, close: 1045.6, volume: 3550000 },
    ],
    stats: {
      high52: 1120.0,
      low52: 840.0,
      avgVolume: 3525000,
    },
  },
};

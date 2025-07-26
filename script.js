// --- Global Data and Utility Functions ---
const PRODUCTS = [
  // Mevalar (Fruits) - 25 ta
  {
    id: "f1",
    name: "Qizil olma",
    price: 15000,
    oldPrice: 18000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 1200,
    likes: 500,
  },
  {
    id: "f2",
    name: "Banan",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 900,
    likes: 450,
  },
  {
    id: "f3",
    name: "Apelsin",
    price: 18000,
    oldPrice: 20000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 1000,
    likes: 480,
  },
  {
    id: "f4",
    name: "Uzum",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 750,
    likes: 300,
  },
  {
    id: "f5",
    name: "Shaftoli",
    price: 22000,
    oldPrice: 25000,
    discount: 12,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 680,
    likes: 280,
  },
  {
    id: "f6",
    name: "Anor",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 550,
    likes: 220,
  },
  {
    id: "f7",
    name: "Gilos",
    price: 35000,
    oldPrice: 40000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 480,
    likes: 200,
  },
  {
    id: "f8",
    name: "Qulupnay",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 1100,
    likes: 600,
  },
  {
    id: "f9",
    name: "Nok",
    price: 17000,
    oldPrice: 20000,
    discount: 15,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 620,
    likes: 250,
  },
  {
    id: "f10",
    name: "Kivi",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 500,
    likes: 210,
  },
  {
    id: "f11",
    name: "Mango",
    price: 45000,
    oldPrice: 50000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 380,
    likes: 180,
  },
  {
    id: "f12",
    name: "Ananas",
    price: 55000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 300,
    likes: 150,
  },
  {
    id: "f13",
    name: "Limon",
    price: 10000,
    oldPrice: 12000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 800,
    likes: 320,
  },
  {
    id: "f14",
    name: "Olxo'ri",
    price: 19000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 580,
    likes: 240,
  },
  {
    id: "f15",
    name: "Xurmo",
    price: 27000,
    oldPrice: 30000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 450,
    likes: 190,
  },
  {
    id: "f16",
    name: "Tarvuz",
    price: 12000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 1500,
    likes: 700,
  },
  {
    id: "f17",
    name: "Qovun",
    price: 14000,
    oldPrice: 16000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 1300,
    likes: 650,
  },
  {
    id: "f18",
    name: "Behi",
    price: 16000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 400,
    likes: 170,
  },
  {
    id: "f19",
    name: "O'rik",
    price: 23000,
    oldPrice: 26000,
    discount: 11.54,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 700,
    likes: 310,
  },
  {
    id: "f20",
    name: "Smorodina",
    price: 32000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 280,
    likes: 120,
  },
  {
    id: "f21",
    name: "Malina",
    price: 38000,
    oldPrice: 42000,
    discount: 9.52,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 320,
    likes: 140,
  },
  {
    id: "f22",
    name: "Chernika",
    price: 42000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 250,
    likes: 110,
  },
  {
    id: "f23",
    name: "Avokado",
    price: 29000,
    oldPrice: 33000,
    discount: 12.12,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 350,
    likes: 160,
  },
  {
    id: "f24",
    name: "Kokos",
    price: 60000,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 180,
    likes: 90,
  },
  {
    id: "f25",
    name: "Karamel olma",
    price: 20000,
    oldPrice: 23000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "fruits",
    purchases: 500,
    likes: 230,
  },

  // Taomlar (Food) - 25 ta
  {
    id: "fd1",
    name: "Palov",
    price: 45000,
    oldPrice: 50000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 800,
    likes: 350,
  },
  {
    id: "fd2",
    name: "Lag'mon",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 700,
    likes: 300,
  },
  {
    id: "fd3",
    name: "Somsa",
    price: 10000,
    oldPrice: 12000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 2000,
    likes: 900,
  },
  {
    id: "fd4",
    name: "Manti",
    price: 12000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 1800,
    likes: 850,
  },
  {
    id: "fd5",
    name: "Shashlik",
    price: 35000,
    oldPrice: 40000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 1500,
    likes: 700,
  },
  {
    id: "fd6",
    name: "Sho'rva",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 950,
    likes: 400,
  },
  {
    id: "fd7",
    name: "Dimlama",
    price: 40000,
    oldPrice: 45000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 600,
    likes: 280,
  },
  {
    id: "fd8",
    name: "Norin",
    price: 38000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 500,
    likes: 230,
  },
  {
    id: "fd9",
    name: "Chuchvara",
    price: 28000,
    oldPrice: 32000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 720,
    likes: 310,
  },
  {
    id: "fd10",
    name: "Qozon kabob",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 450,
    likes: 200,
  },
  {
    id: "fd11",
    name: "Tandir go'sht",
    price: 60000,
    oldPrice: 65000,
    discount: 7.69,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 380,
    likes: 170,
  },
  {
    id: "fd12",
    name: "Jarkop",
    price: 32000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 550,
    likes: 240,
  },
  {
    id: "fd13",
    name: "Xonim",
    price: 27000,
    oldPrice: 30000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 650,
    likes: 290,
  },
  {
    id: "fd14",
    name: "Lavash",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 1200,
    likes: 550,
  },
  {
    id: "fd15",
    name: "Burger",
    price: 30000,
    oldPrice: 35000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 1100,
    likes: 500,
  },
  {
    id: "fd16",
    name: "Pizza",
    price: 60000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 900,
    likes: 420,
  },
  {
    id: "fd17",
    name: "Sushi to'plami",
    price: 80000,
    oldPrice: 90000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 400,
    likes: 190,
  },
  {
    id: "fd18",
    name: "Sezar salati",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 700,
    likes: 300,
  },
  {
    id: "fd19",
    name: "Hot-dog",
    price: 18000,
    oldPrice: 20000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 950,
    likes: 410,
  },
  {
    id: "fd20",
    name: "Fri kartoshka",
    price: 15000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 1300,
    likes: 600,
  },
  {
    id: "fd21",
    name: "Donar",
    price: 25000,
    oldPrice: 28000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 1000,
    likes: 480,
  },
  {
    id: "fd22",
    name: "Pishiriqlar to'plami",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 700,
    likes: 320,
  },
  {
    id: "fd23",
    name: "Kola (1 litr)",
    price: 10000,
    oldPrice: 12000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 2500,
    likes: 1100,
  },
  {
    id: "fd24",
    name: "Suv (1.5 litr)",
    price: 5000,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 3000,
    likes: 1400,
  },
  {
    id: "fd25",
    name: "Muzlatilgan baliq",
    price: 55000,
    oldPrice: 60000,
    discount: 8.33,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    purchases: 400,
    likes: 180,
  },

  // Kiyimlar (Clothes) - 25 ta
  {
    id: "cl1",
    name: "Yozgi futbolka (erkaklar)",
    price: 80000,
    oldPrice: 95000,
    discount: 15.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "t-shirts",
    purchases: 2500,
    likes: 1200,
  },
  {
    id: "cl2",
    name: "Jinsi shim (ayollar)",
    price: 250000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 1500,
    likes: 700,
  },
  {
    id: "cl3",
    name: "Yozgi ko'ylak (ayollar)",
    price: 120000,
    oldPrice: 140000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 1800,
    likes: 900,
  },
  {
    id: "cl4",
    name: "Erkaklar ko'ylagi",
    price: 180000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 900,
    likes: 400,
  },
  {
    id: "cl5",
    name: "Ayollar yubkasi",
    price: 100000,
    oldPrice: 115000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 700,
    likes: 320,
  },
  {
    id: "cl6",
    name: "Klassik kostyum (erkaklar)",
    price: 1200000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 200,
    likes: 100,
  },
  {
    id: "cl7",
    name: "Qishki kurtka (unisex)",
    price: 700000,
    oldPrice: 800000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 300,
    likes: 150,
  },
  {
    id: "cl8",
    name: "Palto (ayollar)",
    price: 900000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 180,
    likes: 90,
  },
  {
    id: "cl9",
    name: "Sviter (erkaklar)",
    price: 200000,
    oldPrice: 230000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 800,
    likes: 350,
  },
  {
    id: "cl10",
    name: "Kardigan (ayollar)",
    price: 220000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 650,
    likes: 280,
  },
  {
    id: "cl11",
    name: "Jemper (unisex)",
    price: 190000,
    oldPrice: 210000,
    discount: 9.52,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 720,
    likes: 310,
  },
  {
    id: "cl12",
    name: "Sport kostyumi (erkaklar)",
    price: 400000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 500,
    likes: 220,
  },
  {
    id: "cl13",
    name: "Mayka (ayollar)",
    price: 50000,
    oldPrice: 58000,
    discount: 13.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "t-shirts",
    purchases: 1500,
    likes: 700,
  },
  {
    id: "cl14",
    name: "Shorti (erkaklar)",
    price: 90000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 1000,
    likes: 450,
  },
  {
    id: "cl15",
    name: "Paypoq (3 juft)",
    price: 25000,
    oldPrice: 30000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 3000,
    likes: 1500,
  },
  {
    id: "cl16",
    name: "Ichki kiyim to'plami (ayollar)",
    price: 70000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 800,
    likes: 380,
  },
  {
    id: "cl17",
    name: "Beysbolka",
    price: 40000,
    oldPrice: 45000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 1200,
    likes: 550,
  },
  {
    id: "cl18",
    name: "Sharf",
    price: 60000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 500,
    likes: 230,
  },
  {
    id: "cl19",
    name: "Qo'lqop",
    price: 35000,
    oldPrice: 40000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 400,
    likes: 180,
  },
  {
    id: "cl20",
    name: "Galstuk",
    price: 80000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 250,
    likes: 110,
  },
  {
    id: "cl21",
    name: "Kamar",
    price: 75000,
    oldPrice: 85000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 600,
    likes: 270,
  },
  {
    id: "cl22",
    name: "Pijama (unisex)",
    price: 150000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 450,
    likes: 200,
  },
  {
    id: "cl23",
    name: "Xalat",
    price: 130000,
    oldPrice: 150000,
    discount: 13.33,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 380,
    likes: 170,
  },
  {
    id: "cl24",
    name: "Bolalar kombinezoni",
    price: 110000,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothes",
    purchases: 550,
    likes: 240,
  },
  {
    id: "cl25",
    name: "Sport futbolkasi (ayollar)",
    price: 95000,
    oldPrice: 110000,
    discount: 13.64,
    image: "/placeholder.svg?height=300&width=300",
    category: "t-shirts",
    purchases: 1800,
    likes: 850,
  },

  // Maktab bozorliklar (School) - 25 ta
  {
    id: "sc1",
    name: "Maktab ryukzagi",
    price: 180000,
    oldPrice: 200000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 900,
    likes: 400,
  },
  {
    id: "sc2",
    name: "Qalamlar to'plami",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 500,
    likes: 200,
  },
  {
    id: "sc3",
    name: "Daftarlar to'plami (5 dona)",
    price: 40000,
    oldPrice: 45000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 700,
    likes: 300,
  },
  {
    id: "sc4",
    name: "Rangli qalamlar (12 dona)",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 600,
    likes: 250,
  },
  {
    id: "sc5",
    name: "Markerlar to'plami",
    price: 32000,
    oldPrice: 36000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 550,
    likes: 230,
  },
  {
    id: "sc6",
    name: "O'chirg'ich va o'tkirgich",
    price: 10000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 1000,
    likes: 450,
  },
  {
    id: "sc7",
    name: "Lineyka to'plami",
    price: 15000,
    oldPrice: 18000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 800,
    likes: 350,
  },
  {
    id: "sc8",
    name: "Maktab sumkasi (qizlar uchun)",
    price: 150000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 750,
    likes: 320,
  },
  {
    id: "sc9",
    name: "Geometriya to'plami",
    price: 50000,
    oldPrice: 55000,
    discount: 9.09,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 400,
    likes: 180,
  },
  {
    id: "sc10",
    name: "Akvarel bo'yoqlar",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 350,
    likes: 160,
  },
  {
    id: "sc11",
    name: "Flomasterlar to'plami (24 dona)",
    price: 38000,
    oldPrice: 42000,
    discount: 9.52,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 520,
    likes: 210,
  },
  {
    id: "sc12",
    name: "Plastilin",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 650,
    likes: 280,
  },
  {
    id: "sc13",
    name: "Qaychi",
    price: 12000,
    oldPrice: 14000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 800,
    likes: 340,
  },
  {
    id: "sc14",
    name: "Yelim (PVA)",
    price: 8000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 950,
    likes: 400,
  },
  {
    id: "sc15",
    name: "Rangli qog'ozlar to'plami",
    price: 25000,
    oldPrice: 28000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 580,
    likes: 260,
  },
  {
    id: "sc16",
    name: "Globus",
    price: 100000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 200,
    likes: 90,
  },
  {
    id: "sc17",
    name: "Atlas (geografiya)",
    price: 60000,
    oldPrice: 68000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 300,
    likes: 130,
  },
  {
    id: "sc18",
    name: "Lug'at (ingliz-o'zbek)",
    price: 70000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 250,
    likes: 110,
  },
  {
    id: "sc19",
    name: "Kalkulyator",
    price: 40000,
    oldPrice: 45000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 450,
    likes: 200,
  },
  {
    id: "sc20",
    name: "Doska uchun markerlar",
    price: 22000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 600,
    likes: 270,
  },
  {
    id: "sc21",
    name: "Maktab formasi (o'g'il bolalar)",
    price: 300000,
    oldPrice: 350000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 350,
    likes: 150,
  },
  {
    id: "sc22",
    name: "Maktab formasi (qiz bolalar)",
    price: 320000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 320,
    likes: 140,
  },
  {
    id: "sc23",
    name: "Sport formasi (maktab)",
    price: 200000,
    oldPrice: 230000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 480,
    likes: 210,
  },
  {
    id: "sc24",
    name: "Qog'oz (A4, 500 varaq)",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 1200,
    likes: 500,
  },
  {
    id: "sc25",
    name: "Stikerlar to'plami",
    price: 15000,
    oldPrice: 18000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "school",
    purchases: 700,
    likes: 300,
  },

  // Oyoqkiyimlar (Shoes) - 25 ta
  {
    id: "sh1",
    name: "Sport krossovkasi (erkaklar)",
    price: 350000,
    oldPrice: 400000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 1100,
    likes: 600,
  },
  {
    id: "sh2",
    name: "Bolalar etiklari",
    price: 150000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 400,
    likes: 180,
  },
  {
    id: "sh3",
    name: "Erkaklar tufli (klassik)",
    price: 400000,
    oldPrice: 450000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 300,
    likes: 140,
  },
  {
    id: "sh4",
    name: "Ayollar baletkalari",
    price: 180000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 500,
    likes: 220,
  },
  {
    id: "sh5",
    name: "Sandallar (unisex)",
    price: 120000,
    oldPrice: 140000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 800,
    likes: 350,
  },
  {
    id: "sh6",
    name: "Futbol butsalari",
    price: 280000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 250,
    likes: 110,
  },
  {
    id: "sh7",
    name: "Qishki etiklar (ayollar)",
    price: 600000,
    oldPrice: 700000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 150,
    likes: 70,
  },
  {
    id: "sh8",
    name: "Uy shippaklari",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 900,
    likes: 400,
  },
  {
    id: "sh9",
    name: "Krossovkalar (ayollar)",
    price: 200000,
    oldPrice: 230000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 700,
    likes: 300,
  },
  {
    id: "sh10",
    name: "Kechki oyoq kiyim (ayollar)",
    price: 300000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 180,
    likes: 80,
  },
  {
    id: "sh11",
    name: "Bolalar krossovkasi",
    price: 100000,
    oldPrice: 115000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 600,
    likes: 250,
  },
  {
    id: "sh12",
    name: "Sport sandallari",
    price: 160000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 450,
    likes: 200,
  },
  {
    id: "sh13",
    name: "Ish etiklari (erkaklar)",
    price: 500000,
    oldPrice: 550000,
    discount: 9.09,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 120,
    likes: 60,
  },
  {
    id: "sh14",
    name: "Yozgi shippaklar (plyaj)",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 1500,
    likes: 700,
  },
  {
    id: "sh15",
    name: "Klassik botinkalar (erkaklar)",
    price: 450000,
    oldPrice: 500000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 200,
    likes: 90,
  },
  {
    id: "sh16",
    name: "Ayollar etiklari (baland poshnali)",
    price: 380000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 280,
    likes: 130,
  },
  {
    id: "sh17",
    name: "Bolalar sandallari",
    price: 80000,
    oldPrice: 90000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 700,
    likes: 300,
  },
  {
    id: "sh18",
    name: "Yugurish krossovkasi",
    price: 270000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 900,
    likes: 420,
  },
  {
    id: "sh19",
    name: "Kechki tufli (erkaklar)",
    price: 320000,
    oldPrice: 360000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 220,
    likes: 100,
  },
  {
    id: "sh20",
    name: "Ayollar sport krossovkasi",
    price: 260000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 850,
    likes: 390,
  },
  {
    id: "sh21",
    name: "Bolalar shippaklari",
    price: 35000,
    oldPrice: 40000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 1000,
    likes: 450,
  },
  {
    id: "sh22",
    name: "Klassik krossovkalar",
    price: 220000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 650,
    likes: 290,
  },
  {
    id: "sh23",
    name: "Yozgi botinkalar (ayollar)",
    price: 290000,
    oldPrice: 330000,
    discount: 12.12,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 300,
    likes: 140,
  },
  {
    id: "sh24",
    name: "Erkaklar mokasinlari",
    price: 190000,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 400,
    likes: 180,
  },
  {
    id: "sh25",
    name: "Bolalar rezina etiklari",
    price: 70000,
    oldPrice: 80000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "shoes",
    purchases: 500,
    likes: 220,
  },

  // O'yinchoqlar (Toys) - 25 ta
  {
    id: "ty1",
    name: "O'yinchoq mashina (pultli)",
    price: 70000,
    oldPrice: 85000,
    discount: 17.65,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 600,
    likes: 250,
  },
  {
    id: "ty2",
    name: "Lego konstruktori (shaharcha)",
    price: 280000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 300,
    likes: 150,
  },
  {
    id: "ty3",
    name: "Yumshoq ayiqcha",
    price: 90000,
    oldPrice: 100000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 800,
    likes: 350,
  },
  {
    id: "ty4",
    name: "Qo'g'irchoq (Barbie)",
    price: 120000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 500,
    likes: 220,
  },
  {
    id: "ty5",
    name: "Bolalar velosipedi",
    price: 400000,
    oldPrice: 450000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 150,
    likes: 70,
  },
  {
    id: "ty6",
    name: "Pazl (1000 bo'lak)",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 700,
    likes: 300,
  },
  {
    id: "ty7",
    name: "Stol o'yini (Monopoliya)",
    price: 80000,
    oldPrice: 90000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 400,
    likes: 180,
  },
  {
    id: "ty8",
    name: "Robot o'yinchoq",
    price: 250000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 200,
    likes: 90,
  },
  {
    id: "ty9",
    name: "Musiqiy o'yinchoq (pianino)",
    price: 60000,
    oldPrice: 70000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 550,
    likes: 240,
  },
  {
    id: "ty10",
    name: "Konstruktor to'plami (yog'och)",
    price: 180000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 350,
    likes: 160,
  },
  {
    id: "ty11",
    name: "Bolalar oshxonasi",
    price: 300000,
    oldPrice: 340000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 180,
    likes: 80,
  },
  {
    id: "ty12",
    name: "O'yinchoq qurol (suv)",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 700,
    likes: 310,
  },
  {
    id: "ty13",
    name: "Bolalar skuter",
    price: 200000,
    oldPrice: 220000,
    discount: 9.09,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 250,
    likes: 110,
  },
  {
    id: "ty14",
    name: "O'yinchoq samolyot",
    price: 90000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 450,
    likes: 200,
  },
  {
    id: "ty15",
    name: "Bolalar uchun planshet",
    price: 150000,
    oldPrice: 170000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 380,
    likes: 170,
  },
  {
    id: "ty16",
    name: "O'yinchoq hayvonlar to'plami",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 600,
    likes: 260,
  },
  {
    id: "ty17",
    name: "Bolalar uchun gitara",
    price: 75000,
    oldPrice: 85000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 300,
    likes: 130,
  },
  {
    id: "ty18",
    name: "O'yinchoq telefon",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 900,
    likes: 400,
  },
  {
    id: "ty19",
    name: "Bolalar uchun mikroskop",
    price: 120000,
    oldPrice: 140000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 200,
    likes: 90,
  },
  {
    id: "ty20",
    name: "O'yinchoq doktor to'plami",
    price: 65000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 500,
    likes: 220,
  },
  {
    id: "ty21",
    name: "Bolalar uchun baraban to'plami",
    price: 180000,
    oldPrice: 200000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 150,
    likes: 70,
  },
  {
    id: "ty22",
    name: "O'yinchoq poyezd",
    price: 100000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 400,
    likes: 180,
  },
  {
    id: "ty23",
    name: "Bolalar uchun sport to'plami",
    price: 130000,
    oldPrice: 150000,
    discount: 13.33,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 350,
    likes: 160,
  },
  {
    id: "ty24",
    name: "O'yinchoq robot (transformator)",
    price: 220000,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 280,
    likes: 120,
  },
  {
    id: "ty25",
    name: "Bolalar uchun chizish doskasi",
    price: 55000,
    oldPrice: 65000,
    discount: 15.38,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    purchases: 650,
    likes: 290,
  },

  // Oziq-ovqatlar (Groceries) - 25 ta
  {
    id: "gr1",
    name: "Non (bug'doy)",
    price: 5000,
    oldPrice: 6000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 3000,
    likes: 1500,
  },
  {
    id: "gr2",
    name: "Sut (1 litr, 3.2%)",
    price: 10000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 2500,
    likes: 1000,
  },
  {
    id: "gr3",
    name: "Shakar (1kg)",
    price: 12000,
    oldPrice: 14000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1800,
    likes: 800,
  },
  {
    id: "gr4",
    name: "Tuz (1kg)",
    price: 4000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 2000,
    likes: 900,
  },
  {
    id: "gr5",
    name: "O'simlik yog'i (1 litr)",
    price: 25000,
    oldPrice: 28000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1200,
    likes: 550,
  },
  {
    id: "gr6",
    name: "Choy (qora, 100g)",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 900,
    likes: 400,
  },
  {
    id: "gr7",
    name: "Qahva (donali, 250g)",
    price: 45000,
    oldPrice: 50000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 700,
    likes: 300,
  },
  {
    id: "gr8",
    name: "Un (1kg, oliy nav)",
    price: 10000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1500,
    likes: 650,
  },
  {
    id: "gr9",
    name: "Konserva baliq (tuna)",
    price: 20000,
    oldPrice: 23000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 600,
    likes: 250,
  },
  {
    id: "gr10",
    name: "Muzqaymoq (vanil)",
    price: 18000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1100,
    likes: 500,
  },
  {
    id: "gr11",
    name: "Makaron (spagetti)",
    price: 12000,
    oldPrice: 14000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 900,
    likes: 400,
  },
  {
    id: "gr12",
    name: "Guruch (1kg, uzun don)",
    price: 16000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1000,
    likes: 450,
  },
  {
    id: "gr13",
    name: "Kartoshka (1kg)",
    price: 8000,
    oldPrice: 9500,
    discount: 15.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1800,
    likes: 800,
  },
  {
    id: "gr14",
    name: "Pishloq (Gollandiya, 200g)",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 600,
    likes: 270,
  },
  {
    id: "gr15",
    name: "Tuxum (10 dona)",
    price: 18000,
    oldPrice: 20000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1500,
    likes: 700,
  },
  {
    id: "gr16",
    name: "Shokolad (sutli)",
    price: 22000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1100,
    likes: 500,
  },
  {
    id: "gr17",
    name: "Kolbasa (doktorlik)",
    price: 35000,
    oldPrice: 40000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 800,
    likes: 350,
  },
  {
    id: "gr18",
    name: "Sosiska (10 dona)",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 700,
    likes: 300,
  },
  {
    id: "gr19",
    name: "Kefir (1 litr)",
    price: 14000,
    oldPrice: 16000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 950,
    likes: 420,
  },
  {
    id: "gr20",
    name: "Qatiq (500g)",
    price: 10000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1100,
    likes: 500,
  },
  {
    id: "gr21",
    name: "Meva sharbati (apelsin, 1 litr)",
    price: 15000,
    oldPrice: 17000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1300,
    likes: 600,
  },
  {
    id: "gr22",
    name: "Gazli ichimlik (kola, 0.5 litr)",
    price: 8000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1600,
    likes: 750,
  },
  {
    id: "gr23",
    name: "Chips (kartoshka)",
    price: 10000,
    oldPrice: 12000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 1400,
    likes: 680,
  },
  {
    id: "gr24",
    name: "Pechenye (shokoladli)",
    price: 18000,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 900,
    likes: 400,
  },
  {
    id: "gr25",
    name: "Marmelad",
    price: 15000,
    oldPrice: 17000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "groceries",
    purchases: 750,
    likes: 330,
  },

  // Basseynlar (Pools) - 25 ta
  {
    id: "pl1",
    name: "Shishiriladigan basseyn (o'rta)",
    price: 700000,
    oldPrice: 800000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 150,
    likes: 80,
  },
  {
    id: "pl2",
    name: "Katta karkasli basseyn",
    price: 1200000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 80,
    likes: 40,
  },
  {
    id: "pl3",
    name: "Bolalar basseyni (kichik)",
    price: 250000,
    oldPrice: 280000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 300,
    likes: 120,
  },
  {
    id: "pl4",
    name: "Basseyn filtri (qumli)",
    price: 300000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 100,
    likes: 50,
  },
  {
    id: "pl5",
    name: "Basseyn uchun kimyoviy moddalar (xlor)",
    price: 100000,
    oldPrice: 115000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 200,
    likes: 90,
  },
  {
    id: "pl6",
    name: "Basseyn uchun narvon",
    price: 180000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 70,
    likes: 30,
  },
  {
    id: "pl7",
    name: "Basseyn uchun qopqoq",
    price: 220000,
    oldPrice: 250000,
    discount: 12,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 90,
    likes: 45,
  },
  {
    id: "pl8",
    name: "Basseyn uchun tozalash to'plami",
    price: 150000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 110,
    likes: 55,
  },
  {
    id: "pl9",
    name: "Basseyn uchun nasos",
    price: 400000,
    oldPrice: 450000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 60,
    likes: 25,
  },
  {
    id: "pl10",
    name: "Basseyn uchun termometr",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 250,
    likes: 100,
  },
  {
    id: "pl11",
    name: "Basseyn uchun yoritgich",
    price: 80000,
    oldPrice: 90000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 130,
    likes: 60,
  },
  {
    id: "pl12",
    name: "Basseyn uchun mat",
    price: 90000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 180,
    likes: 85,
  },
  {
    id: "pl13",
    name: "Basseyn uchun suv isitgich",
    price: 600000,
    oldPrice: 700000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 40,
    likes: 20,
  },
  {
    id: "pl14",
    name: "Basseyn uchun o'yinchoqlar to'plami",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 280,
    likes: 130,
  },
  {
    id: "pl15",
    name: "Basseyn uchun havo nasosi",
    price: 70000,
    oldPrice: 80000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 200,
    likes: 95,
  },
  {
    id: "pl16",
    name: "Basseyn uchun suv sinov to'plami",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 160,
    likes: 70,
  },
  {
    id: "pl17",
    name: "Basseyn uchun cho'milish ko'zoynagi",
    price: 20000,
    oldPrice: 25000,
    discount: 20,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 400,
    likes: 180,
  },
  {
    id: "pl18",
    name: "Basseyn uchun suzish taxtasi",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 350,
    likes: 160,
  },
  {
    id: "pl19",
    name: "Basseyn uchun suzish halqasi",
    price: 30000,
    oldPrice: 35000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 320,
    likes: 150,
  },
  {
    id: "pl20",
    name: "Basseyn uchun suv to'pi",
    price: 15000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 500,
    likes: 220,
  },
  {
    id: "pl21",
    name: "Basseyn uchun suv o'yinchoqlari",
    price: 60000,
    oldPrice: 70000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 250,
    likes: 110,
  },
  {
    id: "pl22",
    name: "Basseyn uchun suv filtri kartriji",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 180,
    likes: 80,
  },
  {
    id: "pl23",
    name: "Basseyn uchun suv tozalash vositasi",
    price: 75000,
    oldPrice: 85000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 140,
    likes: 65,
  },
  {
    id: "pl24",
    name: "Basseyn uchun suv nasosi shlangi",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 100,
    likes: 48,
  },
  {
    id: "pl25",
    name: "Basseyn uchun suv sathi sensori",
    price: 90000,
    oldPrice: 100000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "pools",
    purchases: 80,
    likes: 35,
  },

  // Qurilish uskunalari (Construction) - 25 ta
  {
    id: "cn1",
    name: "Elektr dreli (zarbali)",
    price: 400000,
    oldPrice: 450000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 200,
    likes: 100,
  },
  {
    id: "cn2",
    name: "Bolg'a (yog'och dastali)",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 350,
    likes: 120,
  },
  {
    id: "cn3",
    name: "O'lchov lentalari (5 metr)",
    price: 30000,
    oldPrice: 35000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 400,
    likes: 150,
  },
  {
    id: "cn4",
    name: "Buragichlar to'plami (universal)",
    price: 80000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 280,
    likes: 110,
  },
  {
    id: "cn5",
    name: "Arra (qo'l)",
    price: 150000,
    oldPrice: 170000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 180,
    likes: 70,
  },
  {
    id: "cn6",
    name: "Ploskonos (universal)",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 300,
    likes: 130,
  },
  {
    id: "cn7",
    name: "Kalitlar to'plami",
    price: 120000,
    oldPrice: 140000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 250,
    likes: 100,
  },
  {
    id: "cn8",
    name: "Darajali (suv)",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 320,
    likes: 140,
  },
  {
    id: "cn9",
    name: "Elektr payvandlash apparati",
    price: 800000,
    oldPrice: 900000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 50,
    likes: 20,
  },
  {
    id: "cn10",
    name: "Beton aralashtirgich",
    price: 1500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 30,
    likes: 15,
  },
  {
    id: "cn11",
    name: "Shpaklyovka pichog'i",
    price: 15000,
    oldPrice: 18000,
    discount: 16.67,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 500,
    likes: 200,
  },
  {
    id: "cn12",
    name: "Bo'yoq cho'tkasi to'plami",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 450,
    likes: 180,
  },
  {
    id: "cn13",
    name: "Rolik (bo'yoq uchun)",
    price: 18000,
    oldPrice: 21000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 480,
    likes: 190,
  },
  {
    id: "cn14",
    name: "Qurilish ruletkasi (10 metr)",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 300,
    likes: 120,
  },
  {
    id: "cn15",
    name: "Kesuvchi disk (metall uchun)",
    price: 25000,
    oldPrice: 28000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 380,
    likes: 160,
  },
  {
    id: "cn16",
    name: "Himoya ko'zoynagi",
    price: 10000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 600,
    likes: 250,
  },
  {
    id: "cn17",
    name: "Himoya qo'lqoplari",
    price: 12000,
    oldPrice: 14000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 550,
    likes: 230,
  },
  {
    id: "cn18",
    name: "Qurilish kaskasi",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 200,
    likes: 90,
  },
  {
    id: "cn19",
    name: "Elektr arra (zanjirli)",
    price: 700000,
    oldPrice: 800000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 80,
    likes: 35,
  },
  {
    id: "cn20",
    name: "Perforator",
    price: 500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 150,
    likes: 60,
  },
  {
    id: "cn21",
    name: "Shurupovyort (akkumulyatorli)",
    price: 350000,
    oldPrice: 400000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 220,
    likes: 95,
  },
  {
    id: "cn22",
    name: "Bolg'ali drel",
    price: 450000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 190,
    likes: 85,
  },
  {
    id: "cn23",
    name: "Lazerli darajali",
    price: 250000,
    oldPrice: 280000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 100,
    likes: 40,
  },
  {
    id: "cn24",
    name: "Qurilish mikseri",
    price: 300000,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 120,
    likes: 50,
  },
  {
    id: "cn25",
    name: "Qurilish belkuragi",
    price: 40000,
    oldPrice: 45000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "construction",
    purchases: 300,
    likes: 130,
  },

  // Telefonlar (Phones) - 25 ta
  {
    id: "ph1",
    name: "Smartfon Samsung Galaxy S24",
    price: 9500000,
    oldPrice: 11000000,
    discount: 13.64,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1500,
    likes: 800,
  },
  {
    id: "ph2",
    name: "iPhone 15 Pro Max",
    price: 15000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1200,
    likes: 900,
  },
  {
    id: "ph3",
    name: "Xiaomi Redmi Note 13 Pro",
    price: 3200000,
    oldPrice: 3800000,
    discount: 15.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 2000,
    likes: 1000,
  },
  {
    id: "ph4",
    name: "Google Pixel 8",
    price: 7000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 600,
    likes: 300,
  },
  {
    id: "ph5",
    name: "OnePlus 12",
    price: 8500000,
    oldPrice: 9500000,
    discount: 10.53,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 400,
    likes: 200,
  },
  {
    id: "ph6",
    name: "Honor X9b",
    price: 4500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1000,
    likes: 500,
  },
  {
    id: "ph7",
    name: "Realme 11 Pro+",
    price: 3800000,
    oldPrice: 4200000,
    discount: 9.52,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 900,
    likes: 450,
  },
  {
    id: "ph8",
    name: "Poco X6 Pro",
    price: 4000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1100,
    likes: 550,
  },
  {
    id: "ph9",
    name: "Vivo V29e",
    price: 4200000,
    oldPrice: 4800000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 700,
    likes: 350,
  },
  {
    id: "ph10",
    name: "Infinix Note 40 Pro",
    price: 2800000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1300,
    likes: 600,
  },
  {
    id: "ph11",
    name: "Tecno Camon 30 Premier",
    price: 5500000,
    oldPrice: 6200000,
    discount: 11.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 300,
    likes: 150,
  },
  {
    id: "ph12",
    name: "Nokia C21 Plus",
    price: 1500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 800,
    likes: 400,
  },
  {
    id: "ph13",
    name: "Samsung Galaxy A35",
    price: 4800000,
    oldPrice: 5500000,
    discount: 12.64,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1000,
    likes: 500,
  },
  {
    id: "ph14",
    name: "iPhone SE (2022)",
    price: 6000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 500,
    likes: 250,
  },
  {
    id: "ph15",
    name: "Xiaomi 14 Ultra",
    price: 13000000,
    oldPrice: 14500000,
    discount: 10.34,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 200,
    likes: 100,
  },
  {
    id: "ph16",
    name: "Google Pixel 8 Pro",
    price: 10000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 400,
    likes: 200,
  },
  {
    id: "ph17",
    name: "OnePlus Nord 3",
    price: 5000000,
    oldPrice: 5800000,
    discount: 13.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 700,
    likes: 350,
  },
  {
    id: "ph18",
    name: "Honor Magic6 Pro",
    price: 12000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 150,
    likes: 70,
  },
  {
    id: "ph19",
    name: "Realme GT 5 Pro",
    price: 7500000,
    oldPrice: 8500000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 250,
    likes: 120,
  },
  {
    id: "ph20",
    name: "Poco F5 Pro",
    price: 6000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 800,
    likes: 400,
  },
  {
    id: "ph21",
    name: "Vivo X100 Pro",
    price: 11000000,
    oldPrice: 12500000,
    discount: 11.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 180,
    likes: 90,
  },
  {
    id: "ph22",
    name: "Infinix Zero 30 5G",
    price: 3500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 900,
    likes: 450,
  },
  {
    id: "ph23",
    name: "Tecno Spark 20 Pro+",
    price: 2500000,
    oldPrice: 2900000,
    discount: 13.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 1200,
    likes: 600,
  },
  {
    id: "ph24",
    name: "Nokia G400 5G",
    price: 2000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 600,
    likes: 300,
  },
  {
    id: "ph25",
    name: "Samsung Galaxy Z Fold5",
    price: 20000000,
    oldPrice: 22000000,
    discount: 9.09,
    image: "/placeholder.svg?height=300&width=300",
    category: "phones",
    purchases: 100,
    likes: 50,
  },

  // Noutbuklar (Laptops) - 25 ta
  {
    id: "lp1",
    name: "MacBook Air M3",
    price: 18000000,
    oldPrice: 20000000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 500,
    likes: 300,
  },
  {
    id: "lp2",
    name: "HP Pavilion 15",
    price: 7500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 800,
    likes: 400,
  },
  {
    id: "lp3",
    name: "Lenovo IdeaPad 3",
    price: 6000000,
    oldPrice: 7000000,
    discount: 14.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 1000,
    likes: 500,
  },
  {
    id: "lp4",
    name: "Dell XPS 13",
    price: 15000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 300,
    likes: 150,
  },
  {
    id: "lp5",
    name: "Asus ROG Zephyrus G14",
    price: 22000000,
    oldPrice: 25000000,
    discount: 12,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 150,
    likes: 80,
  },
  {
    id: "lp6",
    name: "Acer Aspire 5",
    price: 6800000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 900,
    likes: 450,
  },
  {
    id: "lp7",
    name: "Microsoft Surface Laptop 5",
    price: 13000000,
    oldPrice: 14500000,
    discount: 10.34,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 250,
    likes: 120,
  },
  {
    id: "lp8",
    name: "MSI Katana 15",
    price: 16000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 200,
    likes: 100,
  },
  {
    id: "lp9",
    name: "Huawei MateBook D 16",
    price: 9000000,
    oldPrice: 10000000,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 600,
    likes: 300,
  },
  {
    id: "lp10",
    name: "Samsung Galaxy Book3 Pro",
    price: 17000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 180,
    likes: 90,
  },
  {
    id: "lp11",
    name: "LG Gram 17",
    price: 14000000,
    oldPrice: 16000000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 220,
    likes: 110,
  },
  {
    id: "lp12",
    name: "Razer Blade 16",
    price: 28000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 80,
    likes: 40,
  },
  {
    id: "lp13",
    name: "HP Spectre x360 14",
    price: 16000000,
    oldPrice: 18000000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 100,
    likes: 50,
  },
  {
    id: "lp14",
    name: "Lenovo ThinkPad X1 Carbon",
    price: 19000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 120,
    likes: 60,
  },
  {
    id: "lp15",
    name: "Dell G15 Gaming Laptop",
    price: 11000000,
    oldPrice: 12500000,
    discount: 12,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 350,
    likes: 180,
  },
  {
    id: "lp16",
    name: "Asus ZenBook 14",
    price: 10000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 400,
    likes: 200,
  },
  {
    id: "lp17",
    name: "Acer Predator Helios 300",
    price: 20000000,
    oldPrice: 23000000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 100,
    likes: 50,
  },
  {
    id: "lp18",
    name: "Microsoft Surface Laptop Studio 2",
    price: 25000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 70,
    likes: 35,
  },
  {
    id: "lp19",
    name: "MSI Creator M16",
    price: 14000000,
    oldPrice: 16000000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 180,
    likes: 90,
  },
  {
    id: "lp20",
    name: "Huawei MateBook X Pro",
    price: 17000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 150,
    likes: 75,
  },
  {
    id: "lp21",
    name: "Samsung Galaxy Book3 360",
    price: 15000000,
    oldPrice: 17000000,
    discount: 11.76,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 200,
    likes: 100,
  },
  {
    id: "lp22",
    name: "LG Gram 14",
    price: 12000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 250,
    likes: 120,
  },
  {
    id: "lp23",
    name: "Razer Blade 14",
    price: 24000000,
    oldPrice: 27000000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 90,
    likes: 45,
  },
  {
    id: "lp24",
    name: "HP Envy 13",
    price: 11000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 300,
    likes: 150,
  },
  {
    id: "lp25",
    name: "Lenovo Yoga 7i",
    price: 9500000,
    oldPrice: 10500000,
    discount: 9.52,
    image: "/placeholder.svg?height=300&width=300",
    category: "laptops",
    purchases: 400,
    likes: 200,
  },

  // Televizorlar (TVs) - 25 ta
  {
    id: "tv1",
    name: 'Samsung 55" QLED 4K Smart TV',
    price: 8000000,
    oldPrice: 9500000,
    discount: 15.79,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 500,
    likes: 250,
  },
  {
    id: "tv2",
    name: 'LG 65" OLED 4K Smart TV',
    price: 15000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 300,
    likes: 150,
  },
  {
    id: "tv3",
    name: 'Sony 50" LED 4K Android TV',
    price: 6500000,
    oldPrice: 7500000,
    discount: 13.33,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 700,
    likes: 350,
  },
  {
    id: "tv4",
    name: 'Artel 43" Full HD Smart TV',
    price: 3500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 1000,
    likes: 500,
  },
  {
    id: "tv5",
    name: 'Hisense 75" ULED 4K Smart TV',
    price: 10000000,
    oldPrice: 11500000,
    discount: 13.04,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 200,
    likes: 100,
  },
  {
    id: "tv6",
    name: 'TCL 32" HD Smart TV',
    price: 2200000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 1200,
    likes: 600,
  },
  {
    id: "tv7",
    name: 'Philips 58" PUS7608 4K Smart TV',
    price: 7000000,
    oldPrice: 8000000,
    discount: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 400,
    likes: 200,
  },
  {
    id: "tv8",
    name: 'Panasonic 40" Full HD TV',
    price: 4000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 800,
    likes: 400,
  },
  {
    id: "tv9",
    name: 'Samsung 43" Crystal UHD 4K Smart TV',
    price: 5500000,
    oldPrice: 6200000,
    discount: 11.29,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 900,
    likes: 450,
  },
  {
    id: "tv10",
    name: 'LG 50" NanoCell 4K Smart TV',
    price: 9000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 350,
    likes: 170,
  },
  {
    id: "tv11",
    name: 'Sony 75" BRAVIA XR OLED 4K Smart TV',
    price: 20000000,
    oldPrice: 22000000,
    discount: 9.09,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 100,
    likes: 50,
  },
  {
    id: "tv12",
    name: 'Artel 55" 4K UHD Smart TV',
    price: 6000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 600,
    likes: 300,
  },
  {
    id: "tv13",
    name: 'Hisense 55" ULED Mini-LED 4K Smart TV',
    price: 8500000,
    oldPrice: 9500000,
    discount: 10.53,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 300,
    likes: 150,
  },
  {
    id: "tv14",
    name: 'TCL 50" C645 QLED 4K Smart TV',
    price: 7000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 500,
    likes: 250,
  },
  {
    id: "tv15",
    name: 'Philips 65" OLED 4K Ambilight TV',
    price: 16000000,
    oldPrice: 18000000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 150,
    likes: 75,
  },
  {
    id: "tv16",
    name: 'Panasonic 55" OLED 4K Smart TV',
    price: 13000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 200,
    likes: 100,
  },
  {
    id: "tv17",
    name: 'Samsung 75" Neo QLED 8K Smart TV',
    price: 25000000,
    oldPrice: 28000000,
    discount: 10.71,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 50,
    likes: 25,
  },
  {
    id: "tv18",
    name: 'LG 43" UQ7500 4K Smart TV',
    price: 4500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 800,
    likes: 400,
  },
  {
    id: "tv19",
    name: 'Sony 43" X80L 4K HDR Google TV',
    price: 5800000,
    oldPrice: 6500000,
    discount: 10.8,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 600,
    likes: 300,
  },
  {
    id: "tv20",
    name: 'Artel 32" HD TV',
    price: 1800000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 1500,
    likes: 750,
  },
  {
    id: "tv21",
    name: 'Hisense 65" U8 Series Mini-LED ULED 4K Smart TV',
    price: 12000000,
    oldPrice: 13500000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 180,
    likes: 90,
  },
  {
    id: "tv22",
    name: 'TCL 75" Q7 Series QLED 4K Smart TV',
    price: 10000000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 250,
    likes: 120,
  },
  {
    id: "tv23",
    name: 'Philips 50" PUS8108 4K Ambilight TV',
    price: 8000000,
    oldPrice: 9000000,
    discount: 11.11,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 300,
    likes: 150,
  },
  {
    id: "tv24",
    name: 'Panasonic 65" MX800 Series 4K Android TV',
    price: 9500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 200,
    likes: 100,
  },
  {
    id: "tv25",
    name: 'Samsung The Frame 55" 4K Smart TV',
    price: 11000000,
    oldPrice: 12500000,
    discount: 12,
    image: "/placeholder.svg?height=300&width=300",
    category: "tvs",
    purchases: 150,
    likes: 75,
  },
]

function formatPrice(price) {
  return new Intl.NumberFormat("uz-UZ", { style: "currency", currency: "UZS" }).format(price)
}

// --- Auth Page Logic (index.html) ---
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")
  const toggleToRegister = document.getElementById("toggle-to-register")
  const toggleToLogin = document.getElementById("toggle-to-login")
  const authMessage = document.getElementById("auth-message")

  function showMessage(message, type) {
    authMessage.textContent = message
    authMessage.className = `message ${type}`
    setTimeout(() => {
      authMessage.textContent = ""
      authMessage.className = "message"
    }, 3000)
  }

  toggleToRegister.addEventListener("click", () => {
    loginForm.classList.add("hidden")
    registerForm.classList.remove("hidden")
    toggleToRegister.classList.add("hidden")
    toggleToLogin.classList.remove("hidden")
  })

  toggleToLogin.addEventListener("click", () => {
    registerForm.classList.add("hidden")
    loginForm.classList.remove("hidden")
    toggleToLogin.classList.add("hidden")
    toggleToRegister.classList.remove("hidden")
  })

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const usernameOrEmail = document.getElementById("login-username").value
    const password = document.getElementById("login-password").value

    if (password !== "777") {
      showMessage("Parol noto'g'ri. Parol '777' bo'lishi kerak.", "error")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []
    let user = users.find((u) => u.username === usernameOrEmail || u.email === usernameOrEmail)

    if (!user) {
      // If user doesn't exist, create a new one on the fly with the fixed password
      user = { username: usernameOrEmail, email: usernameOrEmail, password: "777" }
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users))
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user))
    showMessage("Muvaffaqiyatli kirish!", "success")
    window.location.href = "market.html"
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("register-username").value
    const email = document.getElementById("register-email").value
    // Parol maydonidan qiymat olinmaydi, har doim '777' bo'ladi
    const password = "777" // Parol har doim 777

    const users = JSON.parse(localStorage.getItem("users")) || []

    if (users.some((u) => u.username === username || u.email === email)) {
      showMessage("Bu foydalanuvchi nomi yoki email allaqachon ro'yxatdan o'tgan.", "error")
      return
    }

    const newUser = { username, email, password: "777" } // Parol 777 qilib saqlanadi
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("loggedInUser", JSON.stringify(newUser))
    showMessage("Muvaffaqiyatli ro'yxatdan o'tdingiz va kirdingiz!", "success")
    window.location.href = "market.html"
  })

  // Redirect to market.html if already logged in
  if (localStorage.getItem("loggedInUser")) {
    window.location.href = "market.html"
  }
}

// --- Market Page Logic (market.html) ---
if (window.location.pathname.endsWith("market.html")) {
  const productsContainer = document.getElementById("products-container")
  const cartCountSpan = document.getElementById("cart-count")
  const favoritesCountSpan = document.getElementById("favorites-count")
  const searchInput = document.getElementById("search-input")
  const searchButton = document.getElementById("search-button")
  const categoryButtons = document.querySelectorAll(".category-btn")
  const logoutButton = document.getElementById("logout-button")
  const darkModeToggle = document.getElementById("dark-mode-toggle")

  const cartModal = document.getElementById("cart-modal")
  const favoritesModal = document.getElementById("favorites-modal")
  const cartItemsContainer = document.getElementById("cart-items")
  const favoritesItemsContainer = document.getElementById("favorites-items")
  const cartTotalSpan = document.getElementById("cart-total")
  const closeButtons = document.querySelectorAll(".close-button")
  const cartLink = document.getElementById("cart-link")
  const favoritesLink = document.getElementById("favorites-link")

  // Check login status
  if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "index.html"
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const favorites = JSON.parse(localStorage.getItem("favorites")) || []

  function updateCounts() {
    cartCountSpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0)
    favoritesCountSpan.textContent = favorites.length
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCounts()
  }

  function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites))
    updateCounts()
  }

  function renderProducts(filteredProducts = PRODUCTS) {
    productsContainer.innerHTML = ""
    if (filteredProducts.length === 0) {
      productsContainer.innerHTML = '<p style="text-align: center; width: 100%;">Hech qanday mahsulot topilmadi.</p>'
      return
    }

    filteredProducts.forEach((product) => {
      const isLiked = favorites.includes(product.id)
      const productCard = document.createElement("div")
      productCard.className = "product-card"

      let priceHtml = `<p class="product-price">${formatPrice(product.price)}</p>`
      if (product.oldPrice && product.discount) {
        priceHtml = `
          <div class="product-price-wrapper">
            <p class="product-price">${formatPrice(product.price)}</p>
            <span class="product-old-price">${formatPrice(product.oldPrice)}</span>
            <span class="product-discount">-${product.discount.toFixed(0)}%</span>
          </div>
        `
      }

      productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                ${priceHtml}
                <div class="product-meta">
                    <span><i class="fas fa-shopping-bag"></i> ${product.purchases} ta sotilgan</span>
                    <span><i class="fas fa-heart"></i> ${product.likes} ta yoqdi</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">Savatga qo'shish</button>
                    <button class="btn like-btn ${isLiked ? "liked" : ""}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `
      productsContainer.appendChild(productCard)
    })

    // Add event listeners for new buttons
    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.dataset.id
        addToCart(productId)
      })
    })

    document.querySelectorAll(".like-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.dataset.id
        toggleFavorite(productId, e.currentTarget)
      })
    })
  }

  function addToCart(productId) {
    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      const product = PRODUCTS.find((p) => p.id === productId)
      if (product) {
        cart.push({ ...product, quantity: 1 })
      }
    }
    saveCart()
    alert(`${PRODUCTS.find((p) => p.id === productId).name} savatga qo'shildi!`)
  }

  function toggleFavorite(productId, buttonElement) {
    const index = favorites.indexOf(productId)
    if (index > -1) {
      favorites.splice(index, 1)
      buttonElement.classList.remove("liked")
      // Decrease like count on UI (simple simulation)
      const product = PRODUCTS.find((p) => p.id === productId)
      if (product) product.likes--
    } else {
      favorites.push(productId)
      buttonElement.classList.add("liked")
      // Increase like count on UI (simple simulation)
      const product = PRODUCTS.find((p) => p.id === productId)
      if (product) product.likes++
    }
    saveFavorites()
    renderProducts(PRODUCTS) // Re-render to update like counts and button states
  }

  function renderCartItems() {
    cartItemsContainer.innerHTML = ""
    let total = 0
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p style="text-align: center;">Savat bo\'sh.</p>'
    } else {
      cart.forEach((item) => {
        const cartItemDiv = document.createElement("div")
        cartItemDiv.className = "cart-item"
        cartItemDiv.innerHTML = `
                  <img src="${item.image}" alt="${item.name}">
                  <div class="item-details">
                      <h4>${item.name}</h4>
                      <p>${formatPrice(item.price)} x ${item.quantity}</p>
                      <p>Jami: ${formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <div class="item-actions">
                      <button class="btn btn-secondary remove-btn" data-id="${item.id}">O\'chirish</button>
                  </div>
              `
        cartItemsContainer.appendChild(cartItemDiv)
        total += item.price * item.quantity
      })
    }
    cartTotalSpan.textContent = formatPrice(total)

    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.dataset.id
        removeFromCart(productId)
      })
    })
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId)
    saveCart()
    renderCartItems()
  }

  function renderFavoriteItems() {
    favoritesItemsContainer.innerHTML = ""
    if (favorites.length === 0) {
      favoritesItemsContainer.innerHTML = "<p style=\"text-align: center;\">Sevimlilar ro'yxati bo'sh.</p>"
    } else {
      favorites.forEach((productId) => {
        const product = PRODUCTS.find((p) => p.id === productId)
        if (product) {
          const favoriteItemDiv = document.createElement("div")
          favoriteItemDiv.className = "favorite-item"
          favoriteItemDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="item-details">
                        <h4>${product.name}</h4>
                        <p>${formatPrice(product.price)}</p>
                    </div>
                    <div class="item-actions">
                        <button class="btn btn-secondary remove-favorite-btn" data-id="${product.id}">O\'chirish</button>
                    </div>
                `
          favoritesItemsContainer.appendChild(favoriteItemDiv)
        }
      })
    }

    document.querySelectorAll(".remove-favorite-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.dataset.id
        toggleFavorite(productId, e.currentTarget) // Use toggleFavorite to remove
        renderFavoriteItems() // Re-render favorites modal
        renderProducts(PRODUCTS) // Re-render main products to update like button state
      })
    })
  }

  // Event Listeners for Market Page
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase()
    const filtered = PRODUCTS.filter(
      (product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query),
    )
    renderProducts(filtered)
  })

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchButton.click()
    }
  })

  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
      e.currentTarget.classList.add("active")
      const category = e.currentTarget.dataset.category
      if (category === "all") {
        renderProducts(PRODUCTS)
      } else {
        const filtered = PRODUCTS.filter((product) => product.category === category)
        renderProducts(filtered)
      }
    })
  })

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser")
    window.location.href = "index.html"
  })

  // Dark Mode Toggle
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    const isDarkMode = document.body.classList.contains("dark-mode")
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled")
    // Update icon based on mode
    const icon = darkModeToggle.querySelector("i")
    if (isDarkMode) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
    }
  })

  // Apply dark mode on load
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode")
    const icon = darkModeToggle.querySelector("i")
    if (icon) {
      // Check if icon exists before manipulating
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    }
  }

  // Modal functionality
  cartLink.addEventListener("click", (e) => {
    e.preventDefault()
    renderCartItems()
    cartModal.style.display = "flex"
  })

  favoritesLink.addEventListener("click", (e) => {
    e.preventDefault()
    renderFavoriteItems()
    favoritesModal.style.display = "flex"
  })

  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.closest(".modal").style.display = "none"
    })
  })

  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none"
    }
    if (e.target === favoritesModal) {
      favoritesModal.style.display = "none"
    }
  })

  // Initial render on page load
  updateCounts()
  renderProducts()
}

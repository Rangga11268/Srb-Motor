export interface MotorSpec {
  id: string;
  name: string;
  brand: "HONDA" | "YAMAHA";
  price: string;
  image: string;
  category: string;
  description: string; // The "155cc • VVA..." short text
  specifications: { label: string; value: string }[];
  tag?: string; // For "POPULAR", "NEW DROP" etc.
}

export const motors: MotorSpec[] = [
  // YAMAHA COLLECTION
  {
    id: "yamaha-aerox-alpha",
    name: "Yamaha Aerox Alpha",
    brand: "YAMAHA",
    price: "Rp. 32.365.000,-",
    image: "/assets/img/yamaha/AEROX-STD.png",
    category: "MATIC SPORT",
    tag: "POPULAR",
    description: "155cc • VVA • Y-Connect • Sporty • ABS",
    specifications: [
      { label: "Tipe Mesin", value: "Liquid cooled 4-stroke, SOHC, VVA" },
      { label: "Kapasitas Mesin", value: "155cc" },
      { label: "Sistem Bahan Bakar", value: "Fuel Injection" },
      { label: "Transmisi", value: "Otomatis" },
      { label: "Daya Maksimum", value: "11.3 kW / 8,000 rpm" },
      { label: "Torsi Maksimum", value: "13.9 Nm / 6,500 rpm" },
      {
        label: "Fitur Utama",
        value:
          "Y-Connect, Smart Key System, ABS, LED Lights, Stop & Start System",
      },
    ],
  },
  {
    id: "yamaha-fazzio-neo",
    name: "Yamaha Fazzio Neo Hybrid",
    brand: "YAMAHA",
    price: "Rp. 23.055.000,-",
    image: "/assets/img/yamaha/Fazzio.png",
    category: "HYBRID",
    tag: "CLASSY",
    description: "125cc • Hybrid • Y-Connect • Classy",
    specifications: [
      {
        label: "Tipe Mesin",
        value: "4-Langkah, SOHC, Pendingin Udara, Blue Core Hybrid",
      },
      { label: "Kapasitas Mesin", value: "124.86cc" },
      { label: "Sistem Bahan Bakar", value: "Fuel Injection" },
      { label: "Transmisi", value: "Otomatis Penuh" },
      { label: "Daya Maksimum", value: "6.2 kW / 6,500 rpm" },
      { label: "Torsi Maksimum", value: "10.6 Nm / 4,500 rpm" },
      {
        label: "Fitur Utama",
        value: "Y-Connect, Smart Key, LED Headlight, Electric Power Socket",
      },
    ],
  },
  {
    id: "yamaha-grand-filano",
    name: "Grand Filano Neo Hybrid",
    brand: "YAMAHA",
    price: "Rp. 28.010.000,-",
    image: "/assets/img/yamaha/Grand Filano.png",
    category: "CLASSIC",
    description: "125cc • Hybrid • Y-Connect • Luxury",
    specifications: [
      {
        label: "Tipe Mesin",
        value: "4-Langkah, SOHC, Pendingin Udara, Blue Core Hybrid",
      },
      { label: "Kapasitas Mesin", value: "124.86cc" },
      { label: "Sistem Bahan Bakar", value: "Fuel Injection" },
      { label: "Transmisi", value: "Otomatis Penuh" },
      { label: "Daya Maksimum", value: "6.1 kW / 6,500 rpm" },
      { label: "Torsi Maksimum", value: "10.4 Nm / 5,000 rpm" },
      {
        label: "Fitur Utama",
        value: "Y-Connect, Smart Key, TFT Sub Display, Power Socket",
      },
    ],
  },
  {
    id: "yamaha-alpha-cyber",
    name: "Yamaha Alpha Cyber",
    brand: "YAMAHA",
    price: "Rp. 34.110.000,-",
    image: "/assets/img/yamaha/alpha-cyber.png",
    category: "CYBER",
    description: "125cc • FI • Digital • Futuristic",
    specifications: [
      { label: "Tipe Mesin", value: "4-Langkah, SOHC, Pendingin Udara" },
      { label: "Kapasitas Mesin", value: "125cc" },
      { label: "Sistem Bahan Bakar", value: "Fuel Injection" },
      { label: "Transmisi", value: "Otomatis" },
      { label: "Daya Maksimum", value: "Approx. 7.0 kW / 7,000 rpm" },
      { label: "Torsi Maksimum", value: "Approx. 9.5 Nm / 5,000 rpm" },
      {
        label: "Fitur Utama",
        value: "Desain Cyberpunk, Full Digital Panel, USB Charging",
      },
    ],
  },
  {
    id: "yamaha-nmax-turbo",
    name: "NMAX TURBO NEO TYPE S",
    brand: "YAMAHA",
    price: "Rp. 34.490.000,-",
    image: "/assets/img/yamaha/NMax Turbo.png",
    category: "MAXI",
    tag: "TURBO",
    description: "155cc • VVA • Y-Connect • SmartKey",
    specifications: [
      {
        label: "Tipe Mesin",
        value: "Liquid cooled 4-stroke, SOHC, VVA, Blue Core",
      },
      { label: "Kapasitas Mesin", value: "155cc" },
      { label: "Sistem Bahan Bakar", value: "Fuel Injection" },
      { label: "Transmisi", value: "Otomatis (V-Belt)" },
      { label: "Daya Maksimum", value: "11.3 kW / 8,000 rpm" },
      { label: "Torsi Maksimum", value: "13.9 Nm / 6,500 rpm" },
      {
        label: "Fitur Utama",
        value: "Y-Connect, Smart Key, Full LED, Stop & Start System",
      },
    ],
  },
  // HONDA COLLECTION
  {
    id: "honda-beat-sporty",
    name: "Honda Beat Sporty CBS",
    brand: "HONDA",
    price: "Rp. 18.975.000,-",
    image: "/assets/img/honda/beat.png",
    category: "CITY",
    description: "New • 2025 • Matic • CBS",
    specifications: [
      { label: "Tipe Mesin", value: "4-Langkah, SOHC, eSP, Pendingin Udara" },
      { label: "Kapasitas Mesin", value: "109.5cc" },
      { label: "Sistem Bahan Bakar", value: "PGM-FI" },
      { label: "Transmisi", value: "Otomatis, V-Matic" },
      { label: "Daya Maksimum", value: "6.6 kW (9.0 PS) / 7,500 rpm" },
      { label: "Torsi Maksimum", value: "9.3 Nm / 5,500 rpm" },
      {
        label: "Fitur Utama",
        value: "CBS, Rangka eSAF, Lampu LED, Power Charger",
      },
    ],
  },
  {
    id: "honda-beat-smartkey",
    name: "Honda Beat SmartKey",
    brand: "HONDA",
    price: "Rp. 19.800.000,-",
    image:
      "/assets/img/honda/Honda-Beat-Sporty-Deluxe-SmartKey-Matte-Black.png",
    category: "CITY",
    description: "110cc • SmartKey • CBS • Secure",
    specifications: [
      { label: "Tipe Mesin", value: "4-Langkah, SOHC, eSP, Pendingin Udara" },
      { label: "Kapasitas Mesin", value: "109.5cc" },
      { label: "Sistem Bahan Bakar", value: "PGM-FI" },
      { label: "Transmisi", value: "Otomatis, V-Matic" },
      { label: "Daya Maksimum", value: "6.6 kW (9.0 PS) / 7,500 rpm" },
      { label: "Torsi Maksimum", value: "9.3 Nm / 5,500 rpm" },
      {
        label: "Fitur Utama",
        value: "Smart Key, CBS, Rangka eSAF, Lampu LED, Alarm",
      },
    ],
  },
  {
    id: "honda-pcx-160",
    name: "Honda PCX 160 CBS",
    brand: "HONDA",
    price: "Rp. 33.500.000,-",
    image: "/assets/img/honda/pcx 160.png",
    category: "PREMIUM",
    tag: "PREMIUM",
    description: "160cc • eSP+ • CBS • Elegant",
    specifications: [
      {
        label: "Tipe Mesin",
        value: "4-Langkah, 4-Katup, eSP+, Pendingin Cairan",
      },
      { label: "Kapasitas Mesin", value: "156.9cc" },
      { label: "Sistem Bahan Bakar", value: "PGM-FI" },
      { label: "Transmisi", value: "Otomatis, V-Matic" },
      { label: "Daya Maksimum", value: "11.8 kW (16 PS) / 8,500 rpm" },
      { label: "Torsi Maksimum", value: "14.7 Nm / 6,500 rpm" },
      {
        label: "Fitur Utama",
        value: "CBS, Smart Key, Full LED, USB Charger, Digital Panel",
      },
    ],
  },
  {
    id: "honda-adv-160",
    name: "Honda ADV 160 ABS",
    brand: "HONDA",
    price: "Rp. 39.450.000,-",
    image: "/assets/img/honda/adv 160.png",
    category: "ADVENTURE",
    description: "160cc • eSP+ • HSTC • Adventure",
    specifications: [
      {
        label: "Tipe Mesin",
        value: "4-Langkah, 4-Katup, eSP+, Pendingin Cairan",
      },
      { label: "Kapasitas Mesin", value: "156.9cc" },
      { label: "Sistem Bahan Bakar", value: "PGM-FI" },
      { label: "Transmisi", value: "Otomatis, V-Matic" },
      { label: "Daya Maksimum", value: "11.8 kW (16 PS) / 8,500 rpm" },
      { label: "Torsi Maksimum", value: "14.7 Nm / 6,500 rpm" },
      {
        label: "Fitur Utama",
        value: "HSTC, ABS, Smart Key, Full LED, Adjustable Windscreen",
      },
    ],
  },
  {
    id: "honda-vario-160",
    name: "Vario 160 CBS",
    brand: "HONDA",
    price: "Rp. 28.225.000,-",
    image: "/assets/img/honda/HondaVariong.png",
    category: "SPORT",
    tag: "NEW DROP",
    description: "160cc • eSP+ • CBS • Sporty",
    specifications: [
      {
        label: "Tipe Mesin",
        value: "4-Langkah, 4 Katup, eSP+, Pendingin Cairan",
      },
      { label: "Kapasitas Mesin", value: "156.9cc" },
      { label: "Sistem Bahan Bakar", value: "PGM-FI" },
      { label: "Transmisi", value: "Otomatis, V-Matic" },
      { label: "Daya Maksimum", value: "11.3 kW (15.4 PS) / 8,500 rpm" },
      { label: "Torsi Maksimum", value: "13.8 Nm / 7,000 rpm" },
      {
        label: "Fitur Utama",
        value: "CBS, Full LED, USB Charger, Digital Panel, Wavy Disc Brake",
      },
    ],
  },
];

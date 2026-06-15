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
    "id": "yamaha-tmax",
    "name": "Yamaha TMAX",
    "brand": "YAMAHA",
    "price": "Rp. 455.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012112000740123E5134.png",
    "category": "MAXI",
    "description": "155cc \u2022 : V-Belt Otomatis \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 Langkah, Pendingin Cairan, 4 Katup,  2 Silinder"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": ": V-Belt Otomatis"
        },
        {
            "label": "Daya Maksimum",
            "value": "35.0 kW / 7000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "55.0 Nm / 5250 rpm"
        }
    ]
},
  {
    "id": "yamaha-xmax-250",
    "name": "Yamaha XMAX 250",
    "brand": "YAMAHA",
    "price": "Rp. 69.215.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025092412293259576G76761.png",
    "category": "MAXI",
    "description": "249.8cc \u2022 V-belt Automatic \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Liquid Cooled, 4-Stroke, SOHC, 4 Valves"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "249.8 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-belt Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "16.8kW / 7.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "24.3 Nm / 5.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-nmax",
    "name": "Yamaha NMAX",
    "brand": "YAMAHA",
    "price": "Rp. 34.065.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025111019384188604L75511.png",
    "category": "MAXI",
    "description": "Single Cylinder \u2022 Automatic \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "155cc Blue Core, VVA, 4 Valve SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Single Cylinder"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "11.3 kW / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14.2 Nm / 6500 rpm"
        }
    ],
    "tag": "POPULAR"
},
  {
    "id": "yamaha-aerox-alpha",
    "name": "Yamaha Aerox Alpha",
    "brand": "YAMAHA",
    "price": "Rp. 30.200.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026020516255618687C33585.png",
    "category": "MAXI",
    "description": "155cc \u2022 V-Belt Otomatis / YECVT (TURBO & TURBO Ultimate) \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 Langkah, berpendingin cairan, SOHC 4 katup, VVA"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-Belt Otomatis / YECVT (TURBO & TURBO Ultimate)"
        },
        {
            "label": "Daya Maksimum",
            "value": "11,3 kW (15,4PS) / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,2 Nm / 6500 rpm"
        }
    ],
    "tag": "POPULAR"
},
  {
    "id": "yamaha-lexi-lx-155",
    "name": "Yamaha LEXi LX 155",
    "brand": "YAMAHA",
    "price": "Rp. 27.350.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202601210138425928P94164.png",
    "category": "MAXI",
    "description": "1/ Tunggal \u2022 Automatic \u2022 Injeksi",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "1/ Tunggal"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Injeksi"
        },
        {
            "label": "Transmisi",
            "value": "Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "11,3 kW / 8.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,2 Nm / 6.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-nmax-155",
    "name": "Yamaha NMAX 155",
    "brand": "YAMAHA",
    "price": "Rp. 32.175.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109405058553S83237.png",
    "category": "MAXI",
    "description": "Single Cylinder \u2022 Automatic \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Liquid cooled 4-stroke, SOHC , VVA"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Single Cylinder"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "11.3 kW / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "13.9 Nm / 6500 rpm"
        }
    ]
},
  {
    "id": "yamaha-aerox-155",
    "name": "Yamaha Aerox 155",
    "brand": "YAMAHA",
    "price": "Rp. 28.880.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023102519190474792T91675.png",
    "category": "MAXI",
    "description": "Single Cylinder \u2022 V-belt Automatic \u2022 FI (Fuel FI)",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Liquid cooled 4-stroke, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Single Cylinder"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "FI (Fuel Injection)"
        },
        {
            "label": "Transmisi",
            "value": "V-belt Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "11.3 kW / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "13.9Nm / 6500rpm"
        }
    ]
},
  {
    "id": "yamaha-grand-filano",
    "name": "Yamaha Grand Filano",
    "brand": "YAMAHA",
    "price": "Rp. 28.315.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012314263490145D59534.png",
    "category": "CLASSY",
    "description": "155cc \u2022 V-Belt Otomatis \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Udara, 4-Langkah, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-Belt Otomatis"
        },
        {
            "label": "Daya Maksimum",
            "value": "6,1 kW / 6.500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "10,4 Nm / 5.000 rpm"
        }
    ],
    "tag": "POPULAR"
},
  {
    "id": "yamaha-fazzio",
    "name": "Yamaha Fazzio",
    "brand": "YAMAHA",
    "price": "Rp. 22.470.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012315293027645K32651.png",
    "category": "CLASSY",
    "description": "155cc \u2022 V-Belt Otomatis \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Udara, 4 Langkah, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-Belt Otomatis"
        },
        {
            "label": "Daya Maksimum",
            "value": "6.2 kW / 6500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "10.6 Nm / 4500 rpm"
        }
    ],
    "tag": "POPULAR"
},
  {
    "id": "yamaha-gear-ultima",
    "name": "Yamaha Gear Ultima",
    "brand": "YAMAHA",
    "price": "Rp. 20.140.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202604021124218894J.png",
    "category": "MATIC",
    "description": "Silinder Tunggal \u2022 V-Belt Otomatis \u2022 Fuel Injeksi",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Berpendingin udara, 4 Langkah, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Silinder Tunggal"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injeksi"
        },
        {
            "label": "Transmisi",
            "value": "V-Belt Otomatis"
        },
        {
            "label": "Daya Maksimum",
            "value": "6,2 kW / 6.500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "10,6 Nm / 4.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-gear-125",
    "name": "Yamaha GEAR 125",
    "brand": "YAMAHA",
    "price": "Rp. 19.295.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024031507431441417B35284.png",
    "category": "MATIC",
    "description": "125cc \u2022 V-Belt Otomatis \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Berpendingin udara, 4 Langkah, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "125 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-Belt Otomatis"
        },
        {
            "label": "Daya Maksimum",
            "value": "7,0 kW / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9,5 Nm / 5500 rpm"
        }
    ]
},
  {
    "id": "yamaha-freego-125",
    "name": "Yamaha FreeGo 125",
    "brand": "YAMAHA",
    "price": "Rp. 22.865.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202506091443425485Y97917.png",
    "category": "MATIC",
    "description": "125cc \u2022 V-belt Automatic \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Air Cooled 4-Stroke,SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "125 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-belt Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "7,0 kW / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9,5 Nm/ 5500 rpm"
        }
    ]
},
  {
    "id": "yamaha-x-ride-125",
    "name": "Yamaha X-Ride 125",
    "brand": "YAMAHA",
    "price": "Rp. 21.135.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025070409402252373C51406.png",
    "category": "MATIC",
    "description": "125cc \u2022 Otomatis \u2022 Fuel FI (FI)",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 Langkah, 2 Valve SOHC, Berpendingin Udara, BlueCore"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "125 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection (FI)"
        },
        {
            "label": "Transmisi",
            "value": "Otomatis"
        },
        {
            "label": "Daya Maksimum",
            "value": "7,0 Kw / 8000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9,6 N.m / 5500 rpm"
        }
    ]
},
  {
    "id": "yamaha-mio-m3-125",
    "name": "Yamaha Mio M3 125",
    "brand": "YAMAHA",
    "price": "Rp. 18.705.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025051913533472814Q20921.png",
    "category": "MATIC",
    "description": "125cc \u2022 V-Belt Automatic \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Air cooled 4-stroke, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "125 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-Belt Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "7,0 kW / 8.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9.6 Nm / 5.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-fino-125",
    "name": "Yamaha Fino 125",
    "brand": "YAMAHA",
    "price": "Rp. 20.400.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202302210939153521B87826.png",
    "category": "MATIC",
    "description": "Single Cylinder \u2022 V-belt Automatic \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Air cooled, 4-stroke, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Single Cylinder"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "V-belt Automatic"
        },
        {
            "label": "Daya Maksimum",
            "value": "7.0 kW (9.52 PS) / 8000rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9.6 N.m (0,98 kgf.m) / 5500rpm"
        }
    ]
},
  {
    "id": "yamaha-xsr-155",
    "name": "Yamaha XSR 155",
    "brand": "YAMAHA",
    "price": "Rp. 39.565.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015110954865E18335.png",
    "category": "SPORT",
    "description": "155,09cc \u2022 1-N-2-3-4-5-6 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Cairan, 4-Langkah SOHC, 4 Valve, VVA"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155,09 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5-6"
        },
        {
            "label": "Daya Maksimum",
            "value": "14,2 kW/ 10.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,7 Nm/ 8.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-r15",
    "name": "Yamaha R15",
    "brand": "YAMAHA",
    "price": "Rp. 41.500.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024072510414155568H76580.png",
    "category": "SPORT",
    "description": "155.09cc \u2022 1-N-2-3-4-5-6 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Cairan, 4-Langkah SOHC, 4 Valve, VVA"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155.09 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5-6"
        },
        {
            "label": "Daya Maksimum",
            "value": "14,2 kW / 10.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,7 Nm / 8,500 rpm"
        }
    ]
},
  {
    "id": "yamaha-r25",
    "name": "Yamaha R25",
    "brand": "YAMAHA",
    "price": "Rp. 75.550.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015411993760O36900.png",
    "category": "SPORT",
    "description": "249,55cc \u2022 1-N-2-3-4-5-6 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Cairan, 4-Langkah DOHC, 4 Valve"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "249,55 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5-6"
        },
        {
            "label": "Daya Maksimum",
            "value": "26,4 kW/12.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "22,5 Nm/10.000 rpm"
        }
    ]
},
  {
    "id": "yamaha-mt-25",
    "name": "Yamaha MT-25",
    "brand": "YAMAHA",
    "price": "Rp. 65.750.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015192887371O6508.png",
    "category": "SPORT",
    "description": "2 Silinder / Inline \u2022 1-N-2-3-4-5-6 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Cairan, 4-Langkah DOHC, 4 valve"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "2 Silinder / Inline"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5-6"
        },
        {
            "label": "Daya Maksimum",
            "value": "26,4 kW/12.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "22,6 Nm/10.000 rpm"
        }
    ]
},
  {
    "id": "yamaha-mt-15",
    "name": "Yamaha MT-15",
    "brand": "YAMAHA",
    "price": "Rp. 40.515.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015144954158N49912.png",
    "category": "SPORT",
    "description": "Silinder Tunggal \u2022 1-N-2-3-4-5-6 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Cairan, 4-Langkah SOHC, 4 Valve, VVA"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Silinder Tunggal"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5-6"
        },
        {
            "label": "Daya Maksimum",
            "value": "14,2 kW/ 10.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,7 Nm/ 8.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-vixion-155",
    "name": "Yamaha Vixion 155",
    "brand": "YAMAHA",
    "price": "Rp. 31.050.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109421344125G78257.png",
    "category": "SPORT",
    "description": "155cc \u2022 Manual \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Liquid Cooled 4-Stroke, SOHC, 4 Valve, VVA (Vixion R), Liquid Cooled 4-stroke, SOHC (Vixion)"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Manual"
        },
        {
            "label": "Daya Maksimum",
            "value": "14.2 kW / 10000 rpm (Vixion R), 12.2 kW / 8500 rpm (Vixion)"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14.7 Nm / 8500 rpm (Vixion R), 14.5 Nm / 7500 rpm (Vixion)"
        }
    ]
},
  {
    "id": "yamaha-wr155r",
    "name": "Yamaha WR155R",
    "brand": "YAMAHA",
    "price": "Rp. 40.575.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012216283431324H51389.png",
    "category": "OFF-ROAD",
    "description": "155,09cc \u2022 1-N-2-3-4-5-6 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Pendingin Cairan, 4-Langkah SOHC, 4 Valve, VVA"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "155,09 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5-6"
        },
        {
            "label": "Daya Maksimum",
            "value": "12,3 KW/10.000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,3 Nm/6.500 rpm"
        }
    ]
},
  {
    "id": "yamaha-yz125x",
    "name": "Yamaha YZ125X",
    "brand": "YAMAHA",
    "price": "Rp. 97.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109380676612O51500.png",
    "category": "OFF-ROAD",
    "description": "125cc \u2022 Manual \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "-"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "125 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Manual"
        },
        {
            "label": "Daya Maksimum",
            "value": "-"
        },
        {
            "label": "Torsi Maksimum",
            "value": "-"
        }
    ]
},
  {
    "id": "yamaha-yz250x",
    "name": "Yamaha YZ250X",
    "brand": "YAMAHA",
    "price": "Rp. 120.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109375152800F19002.png",
    "category": "OFF-ROAD",
    "description": "250cc \u2022 Manual \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "-"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "250 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Manual"
        },
        {
            "label": "Daya Maksimum",
            "value": "-"
        },
        {
            "label": "Torsi Maksimum",
            "value": "-"
        }
    ]
},
  {
    "id": "yamaha-yz250f",
    "name": "Yamaha YZ250F",
    "brand": "YAMAHA",
    "price": "Rp. 129.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109373194981T79382.png",
    "category": "OFF-ROAD",
    "description": "250cc \u2022 Manual \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "-"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "250 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Manual"
        },
        {
            "label": "Daya Maksimum",
            "value": "-"
        },
        {
            "label": "Torsi Maksimum",
            "value": "-"
        }
    ]
},
  {
    "id": "yamaha-yz250fx",
    "name": "Yamaha YZ250FX",
    "brand": "YAMAHA",
    "price": "Rp. 124.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109371267312O21236.png",
    "category": "OFF-ROAD",
    "description": "250cc \u2022 Manual \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "-"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "250 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Manual"
        },
        {
            "label": "Daya Maksimum",
            "value": "-"
        },
        {
            "label": "Torsi Maksimum",
            "value": "-"
        }
    ]
},
  {
    "id": "yamaha-mx-king-150",
    "name": "Yamaha MX King 150",
    "brand": "YAMAHA",
    "price": "Rp. 28.725.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025120815512769463M45846.png",
    "category": "MOPED",
    "description": "Silinder Tunggal/ Tegak \u2022 1-N-2-3-4-5 \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Berpendingin cairan, 4 langkah, SOHC, 4 Klep"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Silinder Tunggal/ Tegak"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "1-N-2-3-4-5"
        },
        {
            "label": "Daya Maksimum",
            "value": "11,3 kW / 8500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "13,8 Nm / 7000 rpm"
        }
    ]
},
  {
    "id": "yamaha-jupiter-z1",
    "name": "Yamaha Jupiter Z1",
    "brand": "YAMAHA",
    "price": "Rp. 22.280.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025061108344332282O17129.png",
    "category": "MOPED",
    "description": "Single Cylinder / Mendatar \u2022 Constant mesh, 4-kecepatan \u2022 Fuel FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "Air cooled 4-stroke, SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Single Cylinder / Mendatar"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection"
        },
        {
            "label": "Transmisi",
            "value": "Constant mesh, 4-kecepatan"
        },
        {
            "label": "Daya Maksimum",
            "value": "7,4 kW / 7750 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9,8 Nm / 6750 rpm"
        }
    ]
},
  {
    "id": "yamaha-vega-force",
    "name": "Yamaha Vega Force",
    "brand": "YAMAHA",
    "price": "Rp. 19.900.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023060510573539478H29934.png",
    "category": "MOPED",
    "description": "Silinder Tunggal / Mendatar \u2022 Constant Mesh, 4 Kecepatan \u2022 Fuel FI System (FI)",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 Langkah, SOHC, Berpendingin Udara"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "Silinder Tunggal / Mendatar"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Fuel Injection System (FI)"
        },
        {
            "label": "Transmisi",
            "value": "Constant Mesh, 4 Kecepatan"
        },
        {
            "label": "Daya Maksimum",
            "value": "6,41 kW / 7000 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9,53 Nm / 5500 rpm"
        }
    ]
},

  // HONDA COLLECTION
// HONDA COLLECTION
  {
    id: "honda-beat-sporty",
    name: "Honda Beat Sporty CBS",
    brand: "HONDA",
    price: "Rp. 18.975.000,-",
    image: "/assets/img/honda/beat.webp",
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
      "/assets/img/honda/Honda-Beat-Sporty-Deluxe-SmartKey-Matte-Black.webp",
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
    image: "/assets/img/honda/pcx 160.webp",
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
    image: "/assets/img/honda/adv 160.webp",
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
    image: "/assets/img/honda/HondaVariong.webp",
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
  }
];

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
  colorImages?: { [colorName: string]: string };
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
    "description": "155cc • : V-Belt Otomatis • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "TMAX MAX Special Livery, TMAX Tech MAX"
        },
        {
            "label": "Pilihan Warna",
            "value": "Black MAX, Crystal Graphite"
        }
    ],
    "colorImages": {
        "Black MAX": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012109354833782C36890.png",
        "Crystal Graphite": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012109464595907G85940.png"
    }
},
  {
    "id": "yamaha-xmax-250",
    "name": "Yamaha XMAX 250",
    "brand": "YAMAHA",
    "price": "Rp. 69.215.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025092412293259576G76761.png",
    "category": "MAXI",
    "description": "249.8cc • V-belt Automatic • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "XMAX 250 MAX Special Livery, XMAX 250 TECH MAX, XMAX 250 Connected"
        },
        {
            "label": "Pilihan Warna",
            "value": "Black MAX, Ceramic Grey, Metallic Blue, Metallic Black, Elixir Dark Silver"
        }
    ],
    "colorImages": {
        "Black MAX": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202601211337387306A11348.png",
        "Ceramic Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026011410370912244S46425.png",
        "Metallic Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026011410361864796E17453.png",
        "Metallic Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026011410411324315K95315.png",
        "Elixir Dark Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026011410364512389Y58336.png"
    }
},
  {
    "id": "yamaha-nmax",
    "name": "Yamaha NMAX",
    "brand": "YAMAHA",
    "price": "Rp. 34.065.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025111019384188604L75511.png",
    "category": "MAXI",
    "description": "Single Cylinder • Automatic • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "\"TURBO\" TECH MAX Ultimate, \"TURBO\" TECH MAX Special Livery, \"TURBO\" TECH MAX, \"TURBO\", Neo S MAX Special Livery, Neo S Version, Neo MAX Special Livery, Neo Version"
        },
        {
            "label": "Pilihan Warna",
            "value": "Ceramic Grey, Elixir Dark Silver, Magma Black, Black MAX, Matte Blue, Red, White, Black"
        }
    ],
    "tag": "POPULAR",
    "colorImages": {
        "Ceramic Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/20251110191903676F5433.png",
        "Elixir Dark Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2024081909172910918Y66823.png",
        "Magma Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2024081909173228626E31666.png",
        "Black MAX": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020414194471194N62487.png",
        "Matte Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025111019202062H52051.png",
        "Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2024061119274974993S52769.png",
        "White": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2024061119281348784W8996.png",
        "Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2024061119274037676S53246.png"
    }
},
  {
    "id": "yamaha-aerox-alpha",
    "name": "Yamaha Aerox Alpha",
    "brand": "YAMAHA",
    "price": "Rp. 30.200.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026020516255618687C33585.png",
    "category": "MAXI",
    "description": "155cc • V-Belt Otomatis / YECVT (TURBO & TURBO Ultimate) • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "\"TURBO\" 70th Livery, \"TURBO\" Ultimate, \"TURBO\", CyberCity ABS, Cybercity, Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "70th Livery, Elixir Dark Silver, Matte Purple Black, White Pearl Blue, Matte Blue Red, Black, Red, Blue"
        }
    ],
    "tag": "POPULAR",
    "colorImages": {
        "70th Livery": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012212211612160Y45922.png",
        "Elixir Dark Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020515050852238N68798.png",
        "Matte Purple Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202602051705357793P60642.png",
        "White Pearl Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020516022374054T48660.png",
        "Matte Blue Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020516063336640M90207.png",
        "Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020515082054412B82352.png",
        "Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020515061329919C46613.png",
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020515060448745C51316.png"
    }
},
  {
    "id": "yamaha-lexi-lx-155",
    "name": "Yamaha LEXi LX 155",
    "brand": "YAMAHA",
    "price": "Rp. 27.350.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202601210138425928P94164.png",
    "category": "MAXI",
    "description": "1/ Tunggal • Automatic • Injeksi",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Connected/ABS, S Version, Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Ceramic Grey, Sand, Elixir Dark Silver, Matte Green, Metallic Black"
        }
    ],
    "colorImages": {
        "Ceramic Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202601210136411054B75592.png",
        "Sand": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012101353067003N34382.png",
        "Elixir Dark Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012101360579143I99099.png",
        "Matte Green": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012101320057424B70971.png",
        "Metallic Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012101322632009E95399.png"
    }
},
  {
    "id": "yamaha-nmax-155",
    "name": "Yamaha NMAX 155",
    "brand": "YAMAHA",
    "price": "Rp. 32.175.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109405058553S83237.png",
    "category": "MAXI",
    "description": "Single Cylinder • Automatic • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Connected/ABS, S Version, Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Prestige Silver, Matte Green, Maxi Signature, Metallic Red, Metallic Blue"
        }
    ],
    "colorImages": {
        "Prestige Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022021512555336606I37089.png",
        "Matte Green": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022021512560375607U73329.png",
        "Maxi Signature": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022021512561151468X87638.png",
        "Metallic Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022021512560935623Z67542.png",
        "Metallic Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023010515485617128M1683.png"
    }
},
  {
    "id": "yamaha-aerox-155",
    "name": "Yamaha Aerox 155",
    "brand": "YAMAHA",
    "price": "Rp. 28.880.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023102519190474792T91675.png",
    "category": "MAXI",
    "description": "Single Cylinder • V-belt Automatic • FI (Fuel FI)",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Connected/ABS, CyberCity, Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Prestige Silver, Maxi Signature, Cyber City Livery, Dull Blue Orange, Silver Cyan, Metallic Red, Black Grey"
        }
    ],
    "colorImages": {
        "Prestige Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023041415280563814D66821.png",
        "Maxi Signature": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023041415280299726S94464.png",
        "Cyber City Livery": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023041415280991628A58578.png",
        "Dull Blue Orange": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023102416264470586E6961.png",
        "Silver Cyan": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023102416255597157E83827.png",
        "Metallic Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202310241625591732N30808.png",
        "Black Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023102416263316247N20315.png"
    }
},
  {
    "id": "yamaha-grand-filano",
    "name": "Yamaha Grand Filano",
    "brand": "YAMAHA",
    "price": "Rp. 28.315.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012314263490145D59534.png",
    "category": "CLASSY",
    "description": "155cc • V-Belt Otomatis • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Hybrid Lux, Hybrid Neo"
        },
        {
            "label": "Pilihan Warna",
            "value": "Royal Iron, Magma Black, Prime Gray, Greenish Gray, Pink Mauve, Essential White"
        }
    ],
    "tag": "POPULAR",
    "colorImages": {
        "Royal Iron": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202601231028034876K13777.png",
        "Magma Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012310455516358M58371.png",
        "Prime Gray": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012310263681335O86751.png",
        "Greenish Gray": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012310255191745O23444.png",
        "Pink Mauve": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012310255677911L16899.png",
        "Essential White": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012310261915448E14156.png"
    }
},
  {
    "id": "yamaha-fazzio",
    "name": "Yamaha Fazzio",
    "brand": "YAMAHA",
    "price": "Rp. 22.470.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012315293027645K32651.png",
    "category": "CLASSY",
    "description": "155cc • V-Belt Otomatis • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Special Edition, Hybrid Lux, Hybrid Neo, Hybrid"
        },
        {
            "label": "Pilihan Warna",
            "value": "Starry Night, Greenish Gray, Titan, Go Purple, Pink Mauve, Green, White, Blue White, Black Red, Grayceful Pink, Yolo Black"
        }
    ],
    "tag": "POPULAR",
    "colorImages": {
        "Starry Night": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202603021616392454D52822.png",
        "Greenish Gray": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012315110540976J2461.png",
        "Titan": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012315101756736A45457.png",
        "Go Purple": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202601231711304860C78501.png",
        "Pink Mauve": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012315073710159J99507.png",
        "Green": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012315075513962R64993.png",
        "White": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202601231508455255U66303.png",
        "Blue White": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012317153856719H48710.png",
        "Black Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012315093684262D3348.png",
        "Grayceful Pink": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025062114190814455O18634.png",
        "Yolo Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025062114193117991G63536.png"
    }
},
  {
    "id": "yamaha-gear-ultima",
    "name": "Yamaha Gear Ultima",
    "brand": "YAMAHA",
    "price": "Rp. 20.140.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202604021124218894J.png",
    "category": "MATIC",
    "description": "Silinder Tunggal • V-Belt Otomatis • Fuel Injeksi",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Hybrid Smart, Hybrid Solid, Hybrid"
        },
        {
            "label": "Pilihan Warna",
            "value": "Magma Black, Matte Blue, Solid Orange, Solid Blue, Putih, Hitam"
        }
    ],
    "colorImages": {
        "Magma Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026040210281363446A2951.png",
        "Matte Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026040210285549459N49815.png",
        "Solid Orange": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026040210302746779S97325.png",
        "Solid Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026040210304321568W76344.png",
        "Putih": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026040210355699153B34831.png",
        "Hitam": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026040210362244135P20329.png"
    }
},
  {
    "id": "yamaha-gear-125",
    "name": "Yamaha GEAR 125",
    "brand": "YAMAHA",
    "price": "Rp. 19.295.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024031507431441417B35284.png",
    "category": "MATIC",
    "description": "125cc • V-Belt Otomatis • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Dull Blue, Red, Cyan, Olive, Black"
        }
    ],
    "colorImages": {
        "Dull Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025030717193296301C81889.png",
        "Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025030717194744688Q33745.png",
        "Cyan": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025030717200141027R3909.png",
        "Olive": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025060914163885294K36248.png",
        "Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025030717204097901P46596.png"
    }
},
  {
    "id": "yamaha-freego-125",
    "name": "Yamaha FreeGo 125",
    "brand": "YAMAHA",
    "price": "Rp. 22.865.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202506091443425485Y97917.png",
    "category": "MATIC",
    "description": "125cc • V-belt Automatic • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Connected, Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Magma Black, Silver, Putih, Red, Sand, Black"
        }
    ],
    "colorImages": {
        "Magma Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025060914385589502M90490.png",
        "Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025060914390157601M77440.png",
        "Putih": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025060914390790747E27231.png",
        "Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202506091439118073C8496.png",
        "Sand": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025060914391694380Z32312.png",
        "Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202506091439217808E18394.png"
    }
},
  {
    "id": "yamaha-x-ride-125",
    "name": "Yamaha X-Ride 125",
    "brand": "YAMAHA",
    "price": "Rp. 21.135.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025070409402252373C51406.png",
    "category": "MATIC",
    "description": "125cc • Otomatis • Fuel FI (FI)",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "X-Ride 125"
        },
        {
            "label": "Pilihan Warna",
            "value": "Blue, Black Red, Sand"
        }
    ],
    "colorImages": {
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025070409415976337A27649.png",
        "Black Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025072208562276568O22561.png",
        "Sand": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025072208580140423L22332.png"
    }
},
  {
    "id": "yamaha-mio-m3-125",
    "name": "Yamaha Mio M3 125",
    "brand": "YAMAHA",
    "price": "Rp. 18.705.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025051913533472814Q20921.png",
    "category": "MATIC",
    "description": "125cc • V-Belt Automatic • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Mio M3 125"
        },
        {
            "label": "Pilihan Warna",
            "value": "Metallic Cyan, Metallic White, Metallic Red, Metallic Black"
        }
    ],
    "colorImages": {
        "Metallic Cyan": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025051911283817688W57116.png",
        "Metallic White": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025051911302918364Q25138.png",
        "Metallic Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025051911290160771I39257.png",
        "Metallic Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025051911292554271E73676.png"
    }
},
  {
    "id": "yamaha-fino-125",
    "name": "Yamaha Fino 125",
    "brand": "YAMAHA",
    "price": "Rp. 20.400.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202302210939153521B87826.png",
    "category": "MATIC",
    "description": "Single Cylinder • V-belt Automatic • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Grande, Premium, Sporty"
        },
        {
            "label": "Pilihan Warna",
            "value": "Luxury Red, Royal Blue, Black Espresso, White Latte, Creamy Grey, Classic Tosca, Vintage Red, Retro Grey"
        }
    ],
    "colorImages": {
        "Luxury Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515231473422V37157.png",
        "Royal Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515232885178B81916.png",
        "Black Espresso": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515262544883N54966.png",
        "White Latte": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515265691891E70640.png",
        "Creamy Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515260944421A45792.png",
        "Classic Tosca": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515293157128N76590.png",
        "Vintage Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022030515294533437F38560.png",
        "Retro Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202203051530006065S13975.png"
    }
},
  {
    "id": "yamaha-xsr-155",
    "name": "Yamaha XSR 155",
    "brand": "YAMAHA",
    "price": "Rp. 39.565.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015110954865E18335.png",
    "category": "SPORT",
    "description": "155,09cc • 1-N-2-3-4-5-6 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Matte Silver, Matte Black"
        }
    ],
    "colorImages": {
        "70th Livery": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012212283641750K65588.png",
        "Metallic Brown Authentic": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015091380240D96357.png",
        "Metallic Black Elegance": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022122614535230076F30677.png",
        "Matte Silver Premium": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015100168918C54101.png"
    }
},
  {
    "id": "yamaha-r15",
    "name": "Yamaha R15",
    "brand": "YAMAHA",
    "price": "Rp. 41.500.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024072510414155568H76580.png",
    "category": "SPORT",
    "description": "155.09cc • 1-N-2-3-4-5-6 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "R15M C \"ABS\" 70th Livery, R15M Connected/ABS, R15 Connected"
        },
        {
            "label": "Pilihan Warna",
            "value": "70th Livery, Icon Performance, Blue, Black"
        }
    ],
    "colorImages": {
        "70th Livery": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202601221233083712A95570.png",
        "Icon Performance": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2024072510405534685V24502.png",
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012017035257352I85474.png",
        "Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012017035413528Z8968.png"
    }
},
  {
    "id": "yamaha-r25",
    "name": "Yamaha R25",
    "brand": "YAMAHA",
    "price": "Rp. 75.550.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015411993760O36900.png",
    "category": "SPORT",
    "description": "249,55cc • 1-N-2-3-4-5-6 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Racing Blue, Matte Dark Grey"
        }
    ],
    "colorImages": {
        "Racing Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015275896690H23938.png",
        "Metallic Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015280236852T12421.png"
    }
},
  {
    "id": "yamaha-mt-25",
    "name": "Yamaha MT-25",
    "brand": "YAMAHA",
    "price": "Rp. 65.750.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015192887371O6508.png",
    "category": "SPORT",
    "description": "2 Silinder / Inline • 1-N-2-3-4-5-6 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Metallic Dark Grey, Metallic Blue"
        }
    ],
    "colorImages": {
        "Metallic Light Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015174655343P65550.png",
        "Matte Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015175849114X62104.png"
    }
},
  {
    "id": "yamaha-mt-15",
    "name": "Yamaha MT-15",
    "brand": "YAMAHA",
    "price": "Rp. 40.515.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015144954158N49912.png",
    "category": "SPORT",
    "description": "Silinder Tunggal • 1-N-2-3-4-5-6 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Metallic Dark Grey, Metallic Blue"
        }
    ],
    "colorImages": {
        "Metallic Light Grey": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202501201512088268P91906.png",
        "Matte Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025012015121063611B452.png"
    }
},
  {
    "id": "yamaha-vixion-155",
    "name": "Yamaha Vixion 155",
    "brand": "YAMAHA",
    "price": "Rp. 31.050.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109421344125G78257.png",
    "category": "SPORT",
    "description": "155cc • Manual • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Metallic Black, Matte Blue"
        }
    ],
    "colorImages": {
        "Matte Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022011109444754536F60179.png",
        "Matte Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022011109443040020G78018.png",
        "Matte Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/202201110944359935S19728.png",
        "Metallic Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022011109445268890M59689.png"
    }
},
  {
    "id": "yamaha-wr155r",
    "name": "Yamaha WR155R",
    "brand": "YAMAHA",
    "price": "Rp. 40.575.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012216283431324H51389.png",
    "category": "OFF-ROAD",
    "description": "155,09cc • 1-N-2-3-4-5-6 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Yamaha Blue, Yamaha Black"
        }
    ],
    "colorImages": {
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012216212099486L85017.png",
        "Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012216212651507H98695.png"
    }
},
  {
    "id": "yamaha-yz125x",
    "name": "Yamaha YZ125X",
    "brand": "YAMAHA",
    "price": "Rp. 97.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109380676612O51500.png",
    "category": "OFF-ROAD",
    "description": "125cc • Manual • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Icon Blue"
        }
    ],
    "colorImages": {
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026060310515421581Q19732.png"
    }
},
  {
    "id": "yamaha-yz250x",
    "name": "Yamaha YZ250X",
    "brand": "YAMAHA",
    "price": "Rp. 120.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109375152800F19002.png",
    "category": "OFF-ROAD",
    "description": "250cc • Manual • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Icon Blue"
        }
    ],
    "colorImages": {
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026060310532432856X70087.png"
    }
},
  {
    "id": "yamaha-yz250f",
    "name": "Yamaha YZ250F",
    "brand": "YAMAHA",
    "price": "Rp. 129.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109373194981T79382.png",
    "category": "OFF-ROAD",
    "description": "250cc • Manual • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Icon Blue"
        }
    ],
    "colorImages": {
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022060910222174788X38101.png"
    }
},
  {
    "id": "yamaha-yz250fx",
    "name": "Yamaha YZ250FX",
    "brand": "YAMAHA",
    "price": "Rp. 124.000.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109371267312O21236.png",
    "category": "OFF-ROAD",
    "description": "250cc • Manual • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Icon Blue"
        }
    ],
    "colorImages": {
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026060310504041210L92658.png"
    }
},
  {
    "id": "yamaha-mx-king-150",
    "name": "Yamaha MX King 150",
    "brand": "YAMAHA",
    "price": "Rp. 28.725.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025120815512769463M45846.png",
    "category": "MOPED",
    "description": "Silinder Tunggal/ Tegak • 1-N-2-3-4-5 • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Active Blue, Cyan, Matte Red"
        }
    ],
    "colorImages": {
        "Prima Pramac": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026061116193112107L7254.png",
        "70th Livery": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012212570650164D72125.png",
        "Blue": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025120815501128784Y48788.png",
        "CyberCity": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025120815502299713A93187.png",
        "Silver": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025120815502963133Z5037.png"
    }
},
  {
    "id": "yamaha-jupiter-z1",
    "name": "Yamaha Jupiter Z1",
    "brand": "YAMAHA",
    "price": "Rp. 22.280.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025061108344332282O17129.png",
    "category": "MOPED",
    "description": "Single Cylinder / Mendatar • Constant mesh, 4-kecepatan • Fuel FI",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Metallic Blue, Metallic Red, Metallic Black"
        }
    ],
    "colorImages": {
        "Metallic Cyan": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025061108303017327J72634.png",
        "Metallic Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025061108303670252P60271.png",
        "Metallic Black": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025061108304364967I28512.png"
    }
},
  {
    "id": "yamaha-vega-force",
    "name": "Yamaha Vega Force",
    "brand": "YAMAHA",
    "price": "Rp. 19.900.000,-",
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023060510573539478H29934.png",
    "category": "MOPED",
    "description": "Silinder Tunggal / Mendatar • Constant Mesh, 4 Kecepatan • Fuel FI System (FI)",
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
        },
        {
            "label": "Tipe / Varian",
            "value": "Standard"
        },
        {
            "label": "Pilihan Warna",
            "value": "Black, Red"
        }
    ],
    "colorImages": {
        "Black Yellow": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060508085578784S98910.png",
        "Black Red": "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060508085369609J94854.png"
    }
},

  // HONDA COLLECTION
  {
    "id": "honda-beat-smartkey",
    "name": "Honda BeAT SmartKey",
    "brand": "HONDA",
    "price": "Rp. 21.189.000,-",
    "image": "/assets/img/honda/Honda-Beat-Sporty-Deluxe-SmartKey-Matte-Black.webp",
    "category": "CITY",
    "description": "109.5cc • Otomatis • PGM-FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 Langkah SOHC"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "109.5 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "Injeksi (PGM-FI)"
        },
        {
            "label": "Transmisi",
            "value": "Otomatis, V-Matic"
        },
        {
            "label": "Daya Maksimum",
            "value": "6.6 kW (9.0 PS)/7.500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9.2 N.m (0.95 kgf.m)/ 6.000 rpm"
        },
        {
            "label": "Tipe / Varian",
            "value": "Honda BeAT Sporty CBS, Honda BeAT Sporty Deluxe CBS ISS, Honda BeAT Sporty Deluxe SMARTKEY, Honda BeAT Street"
        },
        {
            "label": "Pilihan Warna",
            "value": "Deluxe Black, Deluxe Blue, Deluxe Brown, Street Black"
        }
    ],
    "tag": "POPULAR",
    "colorImages": {
        "Deluxe Black": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Honda-Beat-Sporty-Deluxe-SmartKey-Matte-Black.jpg",
        "Deluxe Blue": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Honda-Beat-Sporty-Deluxe-SmartKey-Matte-Black.jpg",
        "Deluxe Brown": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Honda-Beat-Sporty-Deluxe-SmartKey-Matte-Black.jpg",
        "Street Black": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Honda-Beat-Street-Black.jpg"
    }
},
  {
    "id": "honda-genio-cbs-sp",
    "name": "Honda Genio CBS SP",
    "brand": "HONDA",
    "price": "Rp. 20.432.000,-",
    "image": "https://www.hondacengkareng.com/wp-content/uploads/2026/04/IMG_84422.jpg.jpeg",
    "category": "CITY",
    "description": "110cc • Otomatis • PGM-FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 – Langkah, SOHC, eSP"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "110 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "PGM – FI ( Programmed Fuel Injection )"
        },
        {
            "label": "Transmisi",
            "value": "Automatic, V-Matic"
        },
        {
            "label": "Daya Maksimum",
            "value": "6,6 kW ( 9,0 PS ) / 7.500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "9,3 Nm ( 0,95 kgf.m ) / 5.500 rpm"
        },
        {
            "label": "Tipe / Varian",
            "value": "Honda Genio CBS, Honda Genio CBS Vibrant Black & White & Tri-Tone, Honda Genio CBS ISS"
        },
        {
            "label": "Pilihan Warna",
            "value": "Vibrant Black, Radiant Red, Vibrant Blue"
        }
    ],
    "colorImages": {
        "Vibrant Black": "https://www.hondacengkareng.com/wp-content/uploads/2019/07/Honda-Genio-CBS-Vibrant-Black.jpg",
        "Vibrant Blue": "https://www.hondacengkareng.com/wp-content/uploads/2019/07/Honda-Genio-CBS-Vibrant-Black.jpg"
    }
},
  {
    "id": "honda-vario-125-cbs-iss",
    "name": "Honda Vario 125 CBS ISS",
    "brand": "HONDA",
    "price": "Rp. 25.332.000,-",
    "image": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Street-Black-Coral.jpg.jpeg",
    "category": "SPORT",
    "description": "125cc • Otomatis • PGM-FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4-Langkah, SOHC, eSP, Pendinginan Cairan"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "125 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "PGM-FI (Programmed Fuel Injection)"
        },
        {
            "label": "Transmisi",
            "value": "Otomatis, V-Matic"
        },
        {
            "label": "Daya Maksimum",
            "value": "8,2 kW (11,1 PS) / 8.500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "10,8 Nm (1,1 kgf.m) / 5.000 rpm"
        },
        {
            "label": "Tipe / Varian",
            "value": "Honda New Vario 125 CBS, Honda New Vario 125 CBS ISS, Honda New Vario 125 STREET"
        },
        {
            "label": "Pilihan Warna",
            "value": "Matte Blue, Matte Black, Matte Red"
        }
    ],
    "colorImages": {
        "Matte Blue": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Advance-Blue.jpg.jpeg",
        "Matte Black": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Advance-Matte-Black.jpg.jpeg",
        "Matte Red": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/Advance-Matte-Red.jpg.jpeg"
    }
},
  {
    "id": "honda-pcx-160-cbs",
    "name": "Honda PCX 160 CBS",
    "brand": "HONDA",
    "price": "Rp. 34.989.000,-",
    "image": "https://www.hondacengkareng.com/wp-content/uploads/2026/04/PCX-ABS-Phenomenal-Green-1.jpg",
    "category": "PREMIUM",
    "description": "160cc • Otomatis • PGM-FI",
    "specifications": [
        {
            "label": "Tipe Mesin",
            "value": "4 Langkah, SOHC, PGM-FI, berpendingin cairan, eSP"
        },
        {
            "label": "Kapasitas Mesin",
            "value": "160 cc"
        },
        {
            "label": "Sistem Bahan Bakar",
            "value": "PGM-FI (Programmed Fuel Injection)"
        },
        {
            "label": "Transmisi",
            "value": "Otomatis, V-Matic"
        },
        {
            "label": "Daya Maksimum",
            "value": "11,8 kW (16 PS) / 8.500 rpm"
        },
        {
            "label": "Torsi Maksimum",
            "value": "14,7 Nm (1,5 kgf.m) / 6.500 rpm"
        },
        {
            "label": "Tipe / Varian",
            "value": "PCX 160 CBS, PCX 160 ABS ACC, PCX 160 ABS RoadSync"
        },
        {
            "label": "Pilihan Warna",
            "value": "Glorious Matte Black, Royal Matte Blue, Wonderful White"
        }
    ],
    "tag": "POPULAR",
    "colorImages": {
        "Glorious Matte Black": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/PCX-CBS-Exceptional-Black.jpg",
        "Royal Matte Blue": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/PCX-CBS-Exceptional-Matte-Silver.jpg",
        "Wonderful White": "https://www.hondacengkareng.com/wp-content/uploads/2018/11/PCX-CBS-Exceptional-Matte-White.jpg"
    }
}
];

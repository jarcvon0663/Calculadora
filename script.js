// Define un objeto JSON con los códigos de AT y sus valores
var atCodes = {
  AMS: [
	  { code: "A0681 / Support Engineer - ERP Bg / COP 2335379", value: 2335379 },
	  { code: "A0682 / Support Engineer - ERP Jr / COP 3151272", value: 3151272 },
	  { code: "A0683 / Support Engineer - ERP Pr / COP 4202978", value: 4202978 },
	  { code: "A0671 / Soft Eng Sys Admin - ERP Bg / COP 4341994", value: 4341994 },
	  { code: "A0661 / Software Engineer - ERP Bg / COP 4652278", value: 4652278 },
	  { code: "A0641 / Functional Consultant - ERP Bg / COP 4744531", value: 4744531 },
	  { code: "A0691 / Tech-Func Lead ERP Bg / COP 5202625", value: 5202625 },
	  { code: "A0684 / Support Engineer - ERP  Sr / COP 5447961", value: 5447961 },
	  { code: "A0421 / Service Manager ARS -  Bg / COP 5696300", value: 5696300 },
	  { code: "A0672 / Soft Eng Sys Admin - ERP Jr / COP 6275615", value: 6275615 },
	  { code: "A0651 / Functional ESP-ERP Bg / COP 6663383", value: 6663383 },
	  { code: "A0685 / Support Engineer - ERP  Ex / COP 7159357", value: 7159357 },
	  { code: "A0642 / Functional Consultant - ERP Jr / COP 7622809", value: 7622809 },
	  { code: "A0662 / Software Engineer - ERP JR / COP 7668935", value: 7668935 },
	  { code: "A0692 / Tech-Func Lead ERP Jr / COP 8454246", value: 8454246 },
	  { code: "A0422 / Service Manager ARS -  Jr / COP 8614973", value: 8614973 },
	  { code: "A0673 / Soft Eng Sys Admin - ERP Pr / COP 8806901", value: 8806901 },
	  { code: "A0652 / Functional ESP-ERP Jr / COP 10279681", value: 10279681 },
	  { code: "A0643 / Functional Consultant - ERP Pr / COP 11283388", value: 11283388 },
	  { code: "A0663 / Software Engineer - ERP Pr / COP 11615497", value: 11615497 },
	  { code: "A0693 / Tech-Func Lead ERP Pr / COP 11910910", value: 11910910 },
	  { code: "A0674 / Soft Eng Sys Admin - ERP Sr / COP 12092299", value: 12092299 },
	  { code: "A0423 / Service Manager ARS -  Pr / COP 12258891", value: 12258891 },
	  { code: "A0653 / Functional ESP-ERP Pr / COP 14825885", value: 14825885 },
	  { code: "A0644 / Functional Consultant - ERP Sr / COP 15487151", value: 15487151 },
	  { code: "A0694 / Tech-Func Lead ERP Sr / COP 15672282", value: 15672282 },
	  { code: "A0664 / Software Engineer - ERP Sr / COP 16282736", value: 16282736 },
	  { code: "A0424 / Service Manager ARS -  Sr / COP 16824402", value: 16824402 },
	  { code: "A0675 / Soft Eng Sys Admin - ERP Ex / COP 17072011", value: 17072011 },
	  { code: "A0654 / Functional ESP-ERP Sr / COP 19909367", value: 19909367 },
	  { code: "A0695 / Tech-Func Lead ERP Ex / COP 21328898", value: 21328898 },
	  { code: "A0645 / Functional Consultant - ERP Ex / COP 21844133", value: 21844133 },
	  { code: "A0425 / Service Manager ARS -  Ex / COP 23723899", value: 23723899 },
	  { code: "A0665 / Software Engineer - ERP Ex / COP 23812945", value: 23812945 },
	  { code: "A0655 / Functional ESP-ERP Ex / COP 27021141", value: 27021141 }
  ],
  "AMS ARS ERP": [
	  { code: "A0101 / Technical Writer ARS  Bg / COP 2380280", value: 2380280 },
	  { code: "A0451 / Process Quality Leader DD -  Bg / COP 2527077", value: 2527077 },
	  { code: "A0381 / Test Engineer ARS -  Tr / COP 2550281", value: 2550281 },
	  { code: "A0102 / Technical Writer ARS  JR / COP 2720321", value: 2720321 },
	  { code: "A0103 / Technical Writer ARS  Pr / COP 3060361", value: 3060361 },
	  { code: "A0382 / Test Engineer ARS -  Bg / COP 3060418", value: 3060418 },
	  { code: "A0091 / Graphical Designer ARS - Web Bg / COP 3081715", value: 3081715 },
	  { code: "A0231 / Software Designer ARS Bg / COP 3081715", value: 3081715 },
	  { code: "A0281 / Software Engineer ARS - Web Tr / COP 3251694", value: 3251694 },
	  { code: "A0291 / Software Engineer ARS - Client Server Tr / COP 3251694", value: 3251694 },
	  { code: "A0301 / Software Engineer ARS - Mainframe Tr / COP 3251694", value: 3251694 },
	  { code: "A0061 / Business Analyst ARS Bg / COP 3644899", value: 3644899 },
	  { code: "A0383 / Test Engineer ARS -  JR / COP 3902032", value: 3902032 },
	  { code: "A0452 / Process Quality Leader DD -  Jr / COP 4162122", value: 4162122 },
	  { code: "A0104 / Technical Writer ARS  Sr / COP 4274789", value: 4274789 },
	  { code: "A0282 / Software Engineer ARS - Web Bg / COP 4422165", value: 4422165 },
	  { code: "A0292 / Software Engineer ARS - Client Server Bg / COP 4422165", value: 4422165 },
	  { code: "A0302 / Software Engineer ARS - Mainframe Bg / COP 4422165", value: 4422165 },
	  { code: "A0384 / Test Engineer ARS -  Pr / COP 4552372", value: 4552372 },
	  { code: "A0105 / Technical Writer ARS  Ex / COP 4857715", value: 4857715 },
	  { code: "A0092 / Graphical Designer ARS - Web JR / COP 4869110", value: 4869110 },
	  { code: "A0232 / Software Designer ARS JR / COP 4869110", value: 4869110 },
	  { code: "A0062 / Business Analyst ARS JR / COP 4905329", value: 4905329 },
	  { code: "A0453 / Process Quality Leader DD -  Pr / COP 5636093", value: 5636093 },
	  { code: "A0001 / Project Manager ARS Bg / COP 6131556", value: 6131556 },
	  { code: "A0031 / Functional Leader ARS  Bg / COP 6131556", value: 6131556 },
	  { code: "A0063 / Business Analyst ARS Pr / COP 6131556", value: 6131556 },
	  { code: "A0131 / Technical Leader ARS - Mainframe Bg / COP 6131556", value: 6131556 },
	  { code: "A0283 / Software Engineer ARS - Web JR / COP 6410263", value: 6410263 },
	  { code: "A0293 / Software Engineer ARS - Client Server JR / COP 6410263", value: 6410263 },
	  { code: "A0303 / Software Engineer ARS - Mainframe JR / COP 6410263", value: 6410263 },
	  { code: "A0385 / Test Engineer ARS -  Sr / COP 6503187", value: 6503187 },
	  { code: "A0111 / Technical Leader ARS - Web Bg / COP 7058649", value: 7058649 },
	  { code: "A0121 / Technical Leader ARS - Client Server - Oracle Bg / COP 7058649", value: 7058649 },
	  { code: "A0032 / Functional Leader ARS  JR / COP 7085429", value: 7085429 },
	  { code: "A0064 / Business Analyst ARS Sr / COP 7085429", value: 7085429 },
	  { code: "A0093 / Graphical Designer ARS - Web Pr / COP 7303665", value: 7303665 },
	  { code: "A0233 / Software Designer ARS Pr / COP 7303665", value: 7303665 },
	  { code: "A0454 / Process Quality Leader DD -  Sr / COP 7568506", value: 7568506 },
	  { code: "A0002 / Project Manager ARS JR / COP 7903013", value: 7903013 },
	  { code: "A0132 / Technical Leader ARS - Mainframe JR / COP 7903013", value: 7903013 },
	  { code: "A0033 / Functional Leader ARS  Pr / COP 8175477", value: 8175477 },
	  { code: "A0181 / Software Architect ARS Bg / COP 8345569", value: 8345569 },
	  { code: "A0386 / Test Engineer ARS -  Ex / COP 8584251", value: 8584251 },
	  { code: "A0112 / Technical Leader ARS - Web JR / COP 8752725", value: 8752725 },
	  { code: "A0122 / Technical Leader ARS - Client Server - Oracle JR / COP 8752725", value: 8752725 },
	  { code: "A0003 / Project Manager ARS Pr / COP 8856785", value: 8856785 },
	  { code: "A0065 / Business Analyst ARS Ex / COP 8856785", value: 8856785 },
	  { code: "A0284 / Software Engineer ARS - Web Pr / COP 9364724", value: 9364724 },
	  { code: "A0294 / Software Engineer ARS - Client Server Pr / COP 9364724", value: 9364724 },
	  { code: "A0304 / Software Engineer ARS - Mainframe Pr / COP 9364724", value: 9364724 },
	  { code: "A0034 / Functional Leader ARS  Sr / COP 9538092", value: 9538092 },
	  { code: "A0455 / Process Quality Leader DD -  Ex / COP 9661928", value: 9661928 },
	  { code: "A0094 / Graphical Designer ARS - Web Sr / COP 10225131", value: 10225131 },
	  { code: "A0234 / Software Designer ARS Sr / COP 10225131", value: 10225131 },
	  { code: "A0182 / Software Architect ARS JR / COP 10348506", value: 10348506 },
	  { code: "A0113 / Technical Leader ARS - Web Pr / COP 10853378", value: 10853378 },
	  { code: "A0123 / Technical Leader ARS - Client Server - Oracle Pr / COP 10853378", value: 10853378 },
	  { code: "A0133 / Technical Leader ARS - Mainframe Pr / COP 10982414", value: 10982414 },
	  { code: "A0004 / Project Manager ARS Sr / COP 11445773", value: 11445773 },
	  { code: "A0285 / Software Engineer ARS - Web Sr / COP 11767852", value: 11767852 },
	  { code: "A0295 / Software Engineer ARS - Client Server Sr / COP 11767852", value: 11767852 },
	  { code: "A0305 / Software Engineer ARS - Mainframe Sr / COP 11767852", value: 11767852 },
	  { code: "A0035 / Functional Leader ARS  Ex / COP 11976553", value: 11976553 },
	  { code: "A0183 / Software Architect ARS Pr / COP 12469483", value: 12469483 },
	  { code: "A0095 / Graphical Designer ARS - Web Ex / COP 12715088", value: 12715088 },
	  { code: "A0235 / Software Designer ARS Ex / COP 12715088", value: 12715088 },
	  { code: "A0114 / Technical Leader ARS - Web Sr / COP 12973209", value: 12973209 },
	  { code: "A0124 / Technical Leader ARS - Client Server - Oracle Sr / COP 12973209", value: 12973209 },
	  { code: "A0005 / Project Manager ARS Ex / COP 13134876", value: 13134876 },
	  { code: "A0134 / Technical Leader ARS - Mainframe Sr / COP 13791640", value: 13791640 },
	  { code: "A0286 / Software Engineer ARS - Web Ex / COP 14185617", value: 14185617 },
	  { code: "A0296 / Software Engineer ARS - Client Server Ex / COP 14185617", value: 14185617 },
	  { code: "A0306 / Software Engineer ARS - Mainframe Ex / COP 14185617", value: 14185617 },
	  { code: "A0115 / Technical Leader ARS - Web Ex / COP 16086780", value: 16086780 },
	  { code: "A0125 / Technical Leader ARS - Client Server - Oracle Ex / COP 16086780", value: 16086780 },
	  { code: "A0135 / Technical Leader ARS - Mainframe Ex / COP 16770904", value: 16770904 },
	  { code: "A0184 / Software Architect ARS Sr / COP 16886244", value: 16886244 },
	  { code: "A0185 / Software Architect ARS Ex / COP 23354975", value: 23354975 }
  ],
  "AMS GDC": [
    {
      code: "A0681 / Support Engineer - ERP Bg / COP 2662477.95",
      value: 2662477.95305697,
    },
    {
      code: " A0682 / Support Engineer - ERP Jr / COP 3549977.37",
      value: 3549977.37150072,
    },
    {
      code: "A0600 / Support Engineer ARS - Mainframe Tr / COP 3630913.98",
      value: 3630913.98927469,
    },
    {
      code: "A0431 / Support Engineer ARS - Client Server - Oracle Tr / COP 3679529.48",
      value: 3679529.48261719,
    },
    {
      code: "A0610 / Support Engineer ARS - WEB Tr / COP 3772282.92",
      value: 3772282.92435885,
    },
    {
      code: "A0661 / Software Engineer - ERP Bg / COP 3925769.81",
      value: 3925769.815485,
    },
    {
      code: "A0400 / System Analyst ARS -  Tr / COP 3930388.33",
      value: 3930388.33546219,
    },
    {
      code: "A0641 / Functional Consultant - ERP Bg / COP 4141687.15",
      value: 4141687.15533667,
    },
    {
      code: "A0671 / Soft Eng Sys Admin - ERP Bg / COP 4703754.16",
      value: 4703754.16856412,
    },
    {
      code: "A0940 / System Engineer Tr / COP 5120439.49",
      value: 5120439.4960108,
    },
    {
      code: "A0620 / Process Quality Leader RD -  Tr / COP 5151884.81",
      value: 5151884.81854272,
    },
    {
      code: "A0683 / Support Engineer - ERP Pr / COP 5177071.23",
      value: 5177071.23994718,
    },
    {
      code: "A0611 / Support Engineer ARS - WEB Bg / COP 5212120.21",
      value: 5212120.21616347,
    },
    {
      code: "A0401 / System Analyst ARS -  Bg / COP 5436799.68",
      value: 5436799.68494969,
    },
    {
      code: "A0920 / Practice Specialist Tr / COP 5813622.94",
      value: 5813622.94701372,
    },
    {
      code: "A0930 / Technical Consultant Tr / COP 5860352.98",
      value: 5860352.98175217,
    },
    {
      code: "A0691 / Tech-Func Lead ERP Bg / COP 5916662.78",
      value: 5916662.789625,
    },
    {
      code: "A0651 / Functional ESP-ERP Bg / COP 5916675.21",
      value: 5916675.21958884,
    },
    {
      code: "A0662 / Software Engineer - ERP JR / COP 6656231.13",
      value: 6656231.13670364,
    },
    {
      code: "A0684 / Support Engineer - ERP  Sr / COP 6656231.13",
      value: 6656231.13670364,
    },
    {
      code: "A0642 / Functional Consultant - ERP Jr / COP 6952046.87",
      value: 6952046.87423551,
    },
    {
      code: "A0432 / Support Engineer ARS - Client Server - Oracle Bg / COP 6975284.27",
      value: 6975284.27730927,
    },
    {
      code: "A0612 / Support Engineer ARS - WEB Jr / COP 7111741.66",
      value: 7111741.66338234,
    },
    {
      code: "A0402 / System Analyst ARS -  Jr / COP 7207807.67",
      value: 7207807.67477909,
    },
    {
      code: "A0621 / Process Quality Leader RD -  Bg / COP 7399964.35",
      value: 7399964.35033419,
    },
    {
      code: "A0941 / System Engineer Bg / COP 7685030.03",
      value: 7685030.0336358,
    },
    {
      code: "A0931 / Technical Consultant Bg / COP 7932011.55",
      value: 7932011.55071653,
    },
    {
      code: "A0601 / Support Engineer ARS - Mainframe Bg / COP 8103296.03",
      value: 8103296.03815128,
    },
    {
      code: "A0685 / Support Engineer - ERP  Ex / COP 8135440.33",
      value: 8135440.33898334,
    },
    {
      code: "A0672 / Soft Eng Sys Admin - ERP Jr / COP 8388335.61",
      value: 8388335.61852881,
    },
    {
      code: "A0921 / Practice Specialist Bg / COP 8526647.76",
      value: 8526647.76237343,
    },
    {
      code: "A0421 / Service Manager ARS -  Bg / COP 8780743.77",
      value: 8780743.7764262,
    },
    {
      code: "A0403 / System Analyst ARS -  Pr / COP 8884778.43",
      value: 8884778.43047711,
    },
    {
      code: "A0622 / Process Quality Leader RD -  Jr / COP 8969092.32",
      value: 8969092.32539171,
    },
    {
      code: "A0613 / Support Engineer ARS - WEB Pr / COP 9161399.81",
      value: 9161399.81784146,
    },
    {
      code: "A0433 / Support Engineer ARS - Client Server - Oracle Jr / COP 9258143.05",
      value: 9258143.05510162,
    },
    {
      code: "A0692 / Tech-Func Lead ERP Jr / COP 9614575.58",
      value: 9614575.58297818,
    },
    {
      code: "A0942 / System Engineer Jr / COP 10307928.70",
      value: 10307928.7029876,
    },
    {
      code: "A0623 / Process Quality Leader RD -  Pr / COP 10352716.25",
      value: 10352716.2516586,
    },
    {
      code: "A0404 / System Analyst ARS -  Sr / COP 10391666.88",
      value: 10391666.8834101,
    },
    {
      code: "A0932 / Technical Consultant Jr / COP 10410559.59",
      value: 10410559.5997884,
    },
    {
      code: "A0422 / Service Manager ARS -  Jr / COP 10709525.76",
      value: 10709525.7695136,
    },
    {
      code: "A0434 / Support Engineer ARS - Client Server - Oracle Pr / COP 10781692.54",
      value: 10781692.5419855,
    },
    {
      code: "A0673 / Soft Eng Sys Admin - ERP Pr / COP 10827097.28",
      value: 10827097.2850204,
    },
    {
      code: "A0663 / Software Engineer - ERP Pr / COP 11017802.19",
      value: 11017802.1911903,
    },
    {
      code: "A0614 / Support Engineer ARS - WEB Sr / COP 11155848.56",
      value: 11155848.5633711,
    },
    {
      code: "A0922 / Practice Specialist Jr / COP 11220956.80",
      value: 11220956.8073027,
    },
    {
      code: "A0643 / Functional Consultant - ERP Pr / COP 11582809.91",
      value: 11582809.9117662,
    },
    {
      code: "A0652 / Functional ESP-ERP Jr / COP 12006549.33",
      value: 12006549.3314132,
    },
    {
      code: "A0405 / System Analyst ARS -  Ex / COP 12201201.82",
      value: 12201201.8223947,
    },
    {
      code: "A0943 / System Engineer Pr / COP 12341369.76",
      value: 12341369.769173,
    },
    {
      code: "A0933 / Technical Consultant Pr / COP 12464191.21",
      value: 12464191.2124207,
    },
    {
      code: "A0602 / Support Engineer ARS - Mainframe Jr / COP 12564662.72",
      value: 12564662.7258842,
    },
    {
      code: "A0423 / Service Manager ARS -  Pr / COP 12674515.14",
      value: 12674515.1442586,
    },
    {
      code: "A0693 / Tech-Func Lead ERP Pr / COP 12935508.03",
      value: 12935508.0319318,
    },
    {
      code: "A0435 / Support Engineer ARS - Client Server - Oracle Sr / COP 12969754.47",
      value: 12969754.4718184,
    },
    {
      code: "A0624 / Process Quality Leader RD -  Sr / COP 13019959.28",
      value: 13019959.2817468,
    },
    {
      code: "A0664 / Software Engineer - ERP Sr / COP 13616333.23",
      value: 13616333.2373896,
    },
    {
      code: "A0615 / Support Engineer ARS - WEB Ex / COP 13966733.82",
      value: 13966733.8288622,
    },
    {
      code: "A0923 / Practice Specialist Pr / COP 14181311.38",
      value: 14181311.389764,
    },
    {
      code: "A0424 / Service Manager ARS -  Sr / COP 14688681.72",
      value: 14688681.7278847,
    },
    {
      code: "A0944 / System Engineer Sr / COP 14696870.22",
      value: 14696870.2233343,
    },
    {
      code: "A0934 / Technical Consultant Sr / COP 14843151.14",
      value: 14843151.1400076,
    },
    {
      code: "A0406 / System Analyst ARS -  Ma / COP 15245895.89",
      value: 15245895.8943552,
    },
    {
      code: "A0625 / Process Quality Leader RD -  Ex / COP 15302291.58",
      value: 15302291.5870132,
    },
    {
      code: "A0653 / Functional ESP-ERP Pr / COP 15658798.04",
      value: 15658798.0471409,
    },
    {
      code: "A0674 / Soft Eng Sys Admin - ERP Sr / COP 15726878.55",
      value: 15726878.5589263,
    },
    {
      code: "A0644 / Functional Consultant - ERP Sr / COP 16339591.34",
      value: 16339591.3412791,
    },
    {
      code: "A0436 / Support Engineer ARS - Client Server - Oracle Ex / COP 16699225.68",
      value: 16699225.6828374,
    },
    {
      code: "A0694 / Tech-Func Lead ERP Sr / COP 17020417.88",
      value: 17020417.8816726,
    },
    {
      code: "A0626 / Process Quality Leader RD -  Ma / COP 17619443.56",
      value: 17619443.5685177,
    },
    {
      code: "A0924 / Practice Specialist Sr / COP 17692019.94",
      value: 17692019.9416741,
    },
    {
      code: "A0616 / Support Engineer ARS - WEB Ma / COP 17743156.79",
      value: 17743156.7987026,
    },
    {
      code: "A0665 / Software Engineer - ERP Ex / COP 17780763.73",
      value: 17780763.7333043,
    },
    {
      code: "A0954 / Service Director Sr / COP 17824448.30",
      value: 17824448.3056717,
    },
    {
      code: "A0945 / System Engineer Ex / COP 18014946.29",
      value: 18014946.2968115,
    },
    {
      code: "A0425 / Service Manager ARS -  Ex / COP 18079873.41",
      value: 18079873.413676,
    },
    {
      code: "A0935 / Technical Consultant Ex / COP 18194256.19",
      value: 18194256.1920329,
    },
    {
      code: "A0695 / Tech-Func Lead ERP Ex / COP 19756410.03",
      value: 19756410.0305661,
    },
    {
      code: "A0645 / Functional Consultant - ERP Ex / COP 20414980.74",
      value: 20414980.7479025,
    },
    {
      code: "A0675 / Soft Eng Sys Admin - ERP Ex / COP 20744254.48",
      value: 20744254.4851447,
    },
    {
      code: "A0437 / Support Engineer ARS - Client Server - Oracle Ma / COP 20913719.41",
      value: 20913719.4106425,
    },
    {
      code: "A0654 / Functional ESP-ERP Sr / COP 21274184.93",
      value: 21274184.9323451,
    },
    {
      code: "A0946 / System Engineer Ma / COP 21404516.76",
      value: 21404516.7656019,
    },
    {
      code: "A0955 / Service Director Ex / COP 21455117.74",
      value: 21455117.7457639,
    },
    {
      code: "A0936 / Technical Consultant Ma / COP 21617585.28",
      value: 21617585.2815278,
    },
    {
      code: "A0925 / Practice Specialist Ex / COP 22210364.52",
      value: 22210364.5236241,
    },
    {
      code: "A0603 / Support Engineer ARS - Mainframe Pr / COP 22750939.82",
      value: 22750939.828125,
    },
    {
      code: "A0426 / Service Manager ARS -  Ma / COP 22770101.46",
      value: 22770101.4690056,
    },
    {
      code: "A0604 / Support Engineer ARS - Mainframe Sr / COP 24841566.73",
      value: 24841566.73125,
    },
    {
      code: "A0655 / Functional ESP-ERP Ex / COP 24841566.73",
      value: 24841566.73125,
    },
    {
      code: "A0956 / Service Director Ma / COP 26090639.87",
      value: 26090639.8750072,
    },
    {
      code: "A0926 / Practice Specialist Ma / COP 27008958.50",
      value: 27008958.5027845,
    },
    {
      code: "A0605 / Support Engineer ARS - Mainframe Ex / COP 30603088.52",
      value: 30603088.5201562,
    },
    {
      code: "A0606 / Support Engineer ARS - Mainframe Ma / COP 35663635.40",
      value: 35663635.40625,
    }
  ],
  "APP DEV": [
    { code: "A0281 / Soft Eng ARS-Web Tr / COP 2400000", value: 2400000 },
    {
      code: "A0091 / Graph Des ARS-Web Bg / COP 2843149.77",
      value: 2843149.7709648,
    },
    {
      code: "A0451 / Proc Qty Lead DD Bg / COP 3242924.22",
      value: 3242924.227488,
    },
    {
      code: "A0061 / Busin Analyst ARS Bg / COP 3547686.38",
      value: 3547686.38763264,
    },
    {
      code: "A0282 / Soft Eng ARS-Web Bg / COP 4304222.12",
      value: 4304222.12204741,
    },
    {
      code: "A0301 / Soft Eng ARS-MF Tr / COP 4343992.88",
      value: 4343992.884,
    },
    {
      code: "A0092 / Graph Des ARS-Web Jr / COP 4739246.35",
      value: 4739246.35322123,
    },
    {
      code: "A0452 / Proc Qty Lead DD Jr / COP 5032601.45",
      value: 5032601.4539328,
    },
    {
      code: "A0302 / Soft Eng ARS-MF Bg / COP 5585133.70",
      value: 5585133.708,
    },
    {
      code: "A0001 / Proj Manag ARS Bg. / COP 5968021.98",
      value: 5968021.98788347,
    },
    {
      code: "A0031 / Funct Leader ARS Bg / COP 5968021.98",
      value: 5968021.98788347,
    },
    {
      code: "A0131 / Te Lead ARS-Mainf Bg / COP 5968021.98",
      value: 5968021.98788347,
    },
    {
      code: "A0062 / Busin Analyst ARS Jr / COP 6028398.28",
      value: 6028398.288,
    },
    { code: "A0231 / Soft Designer ARS Bg / COP 6119000", value: 6119000 },
    {
      code: "A0283 / Soft Eng ARS-Web Jr / COP 6239295.71",
      value: 6239295.71460545,
    },
    {
      code: "A0111 / Tech Lead ARS-Web Bg / COP 6870388.22",
      value: 6870388.2230016,
    },
    {
      code: "A0063 / Busin Analyst ARS Pr / COP 7053225.99",
      value: 7053225.99696,
    },
    {
      code: "A0093 / Graph Des ARS-Web Pr / COP 7108869.52",
      value: 7108869.52983184,
    },
    {
      code: "A0002 / Proj Manag ARS Jr / COP 7279077.05",
      value: 7279077.05818171,
    },
    {
      code: "A0032 / Funct Leader ARS Jr / COP 7279077.05",
      value: 7279077.05818171,
    },
    {
      code: "A0453 / Proc Qty Lead DD Pr / COP 7328641.05",
      value: 7328641.056,
    },
    {
      code: "A0303 / Soft Eng ARS-MF Jr / COP 7446844.94",
      value: 7446844.944,
    },
    {
      code: "A0132 / Te Lead ARS-Mainf Jr / COP 7692232.31",
      value: 7692232.3147597,
    },
    {
      code: "A0121 / Tech Lead ARS-C S Bg / COP 7900946.45",
      value: 7900946.45645184,
    },
    {
      code: "A0064 / Busin Analyst ARS Sr / COP 8252274.41",
      value: 8252274.4164432,
    },
    {
      code: "A0232 / Soft Designer ARS Jr / COP 8274272.16",
      value: 8274272.16,
    },
    {
      code: "A1212 / Soft Eng-Web Spec Jr / COP 8510679.93",
      value: 8510679.936,
    },
    {
      code: "A0112 / Tech Lead ARS-Web Jr / COP 8519281.39",
      value: 8519281.39652198,
    },
    {
      code: "A0003 / Proj Manag ARS Pr / COP 8878144.70",
      value: 8878144.70632307,
    },
    {
      code: "A0033 / Funct Leader ARS Pr / COP 8878144.70",
      value: 8878144.70632307,
    },
    { code: "A0082 / Specialized Cons Jr / COP 9073000", value: 9073000 },
    {
      code: "A0284 / Soft Eng ARS-Web Pr / COP 9114958.06",
      value: 9114958.06970919,
    },
    {
      code: "A0454 / Proc Qty Lead DD Sr / COP 9404301.32",
      value: 9404301.32928,
    },
    {
      code: "A0065 / Busin Analyst ARS Ex / COP 9655161.06",
      value: 9655161.06723854,
    },
    {
      code: "A0122 / Tech Lead ARS-C S Jr / COP 9797173.60",
      value: 9797173.60600028,
    },
    {
      code: "A0304 / Soft Eng ARS-MF Pr / COP 9929126.59",
      value: 9929126.592,
    },
    {
      code: "A0094 / Graph Des ARS-Web Sr / COP 9952417.34",
      value: 9952417.34176457,
    },
    {
      code: "A0133 / Te Lead ARS-Mainf Pr / COP 10689502.63",
      value: 10689502.6383475,
    },
    {
      code: "A0004 / Proj Manag ARS Sr / COP 10828495.53",
      value: 10828495.5354081,
    },
    {
      code: "A0034 / Funct Leader ARS Sr / COP 10828495.53",
      value: 10828495.5354081,
    },
    {
      code: "A0083 / Specialized Cons Pr / COP 11199257.55",
      value: 11199257.55,
    },
    {
      code: "A0113 / Tech Lead ARS-Web Pr / COP 11509540.03",
      value: 11509540.0356873,
    },
    {
      code: "A0233 / Soft Designer ARS Pr / COP 11820388.8",
      value: 11820388.8,
    },
    { code: "A0455 / Proc Qty Lead DD Ex / COP 11820388.8", value: 11820388.8 },
    {
      code: "A0123 / Tech Lead ARS-C S Pr / COP 12056796.57",
      value: 12056796.576,
    },
    {
      code: "A1213 / Soft Eng-Web Spec Pr / COP 12056796.57",
      value: 12056796.576,
    },
    {
      code: "A0285 / Soft Eng ARS-Web Sr / COP 12163215.53",
      value: 12163215.5363664,
    },
    {
      code: "A0181 / Softw Archit ARS Bg / COP 12766019.90",
      value: 12766019.904,
    },
    {
      code: "A0114 / Tech Lead ARS-Web Sr / COP 13099247.07",
      value: 13099247.0752922,
    },
    {
      code: "A0035 / Funct Leader ARS Ex / COP 13207299.43",
      value: 13207299.4346266,
    },
    {
      code: "A0005 / Proj Manag ARS Ex / COP 13207299.43",
      value: 13207299.4346266,
    },
    {
      code: "A0305 / Soft Eng ARS-MF Sr / COP 13404320.89",
      value: 13404320.8992,
    },
    {
      code: "A0095 / Graph Des ARS-Web Ex / COP 13784249.47",
      value: 13784249.4748763,
    },
    {
      code: "A0084 / Specialized Cons Sr / COP 13823803.55",
      value: 13823803.5568425,
    },
    {
      code: "A0286 / Soft Eng ARS-Web Ex / COP 14323433.76",
      value: 14323433.7647136,
    },
    {
      code: "A0134 / Te Lead ARS-Mainf Sr / COP 14634852.62",
      value: 14634852.6287423,
    },
    {
      code: "A0182 / Softw Archit ARS Jr / COP 14936243.28",
      value: 14936243.28768,
    },
    {
      code: "A0124 / Tech Lead ARS-C S Sr / COP 15366505.44",
      value: 15366505.44,
    },
    {
      code: "A1214 / Soft Eng-Web Spec Sr / COP 15957524.88",
      value: 15957524.88,
    },
    {
      code: "A0306 / Soft Eng ARS-MF Ex / COP 16134830.71",
      value: 16134830.712,
    },
    {
      code: "A0085 / Specialized Cons Ex / COP 17063411.92",
      value: 17063411.9203885,
    },
    {
      code: "A0115 / Tech Lead ARS-Web Ex / COP 17306901.36",
      value: 17306901.3653623,
    },
    {
      code: "A0183 / Softw Archit ARS Pr / COP 17475404.64",
      value: 17475404.6465856,
    },
    {
      code: "A0135 / Te Lead ARS-Mainf Ex / COP 18570313.91",
      value: 18570313.9182747,
    },
    {
      code: "A0234 / Soft Designer ARS Sr / COP 18912622.08",
      value: 18912622.08,
    },
    {
      code: "A0125 / Tech Lead ARS-C S Ex / COP 20094660.96",
      value: 20094660.96,
    },
    {
      code: "A0184 / Softw Archit ARS Sr / COP 20446223.43",
      value: 20446223.4365052,
    },
    {
      code: "A1215 / Soft Eng-Web Spec Ex / COP 20922088.17",
      value: 20922088.176,
    },
    {
      code: "A0235 / Soft Designer ARS Ex / COP 23640777.6",
      value: 23640777.6,
    },
    {
      code: "A0185 / Softw Archit ARS Ex / COP 23922081.42",
      value: 23922081.420711,
    }
  ],
  "APP DEV GDC": [
    {
      code: "A0451 / Proc Qty Lead DD Bg / COP 4901252.35",
      value: 4901252.35776,
    },
    {
      code: "A0131 / Te Lead ARS-Mainf Bg / COP 6222582.16",
      value: 6222582.16746144,
    },
    {
      code: "A0111 / Tech Lead ARS-Web Bg / COP 7900946.45",
      value: 7900946.45645184,
    },
    {
      code: "A0132 / Te Lead ARS-Mainf Jr / COP 8461455.54",
      value: 8461455.54623567,
    },
    {
      code: "A0452 / Proc Qty Lead DD Jr / COP 8532757.65",
      value: 8532757.65936,
    },
    {
      code: "A0121 / Tech Lead ARS-C S Bg / COP 8691041.10",
      value: 8691041.10209702,
    },
    {
      code: "A1212 / Soft Eng-Web Spec Jr / COP 9787281.92",
      value: 9787281.9264,
    },
    {
      code: "A0112 / Tech Lead ARS-Web Jr / COP 9797173.60",
      value: 9797173.60600028,
    },
    {
      code: "A0453 / Proc Qty Lead DD Pr / COP 10313649.07",
      value: 10313649.07584,
    },
    {
      code: "A0122 / Tech Lead ARS-C S Jr / COP 10776890.96",
      value: 10776890.9666003,
    },
    {
      code: "A0133 / Te Lead ARS-Mainf Pr / COP 11758452.90",
      value: 11758452.9021823,
    },
    {
      code: "A0454 / Proc Qty Lead DD Sr / COP 12970827.91",
      value: 12970827.91488,
    },
    {
      code: "A0113 / Tech Lead ARS-Web Pr / COP 13235971.04",
      value: 13235971.0410403,
    },
    {
      code: "A0123 / Tech Lead ARS-C S Pr / COP 13262476.23",
      value: 13262476.2336,
    },
    {
      code: "A1213 / Soft Eng-Web Spec Pr / COP 13865316.06",
      value: 13865316.0624,
    },
    {
      code: "A0114 / Tech Lead ARS-Web Sr / COP 15064134.13",
      value: 15064134.136586,
    },
    {
      code: "A0455 / Proc Qty Lead DD Ex / COP 15244547.10",
      value: 15244547.1024,
    },
    {
      code: "A0134 / Te Lead ARS-Mainf Sr / COP 16098337.89",
      value: 16098337.8916165,
    },
    {
      code: "A0124 / Tech Lead ARS-C S Sr / COP 16903155.98",
      value: 16903155.984,
    },
    {
      code: "A1214 / Soft Eng-Web Spec Sr / COP 18351153.61",
      value: 18351153.612,
    },
    {
      code: "A0115 / Tech Lead ARS-Web Ex / COP 19902936.57",
      value: 19902936.5701667,
    },
    {
      code: "A0135 / Te Lead ARS-Mainf Ex / COP 20427345.31",
      value: 20427345.3101022,
    },
    {
      code: "A0125 / Tech Lead ARS-C S Ex / COP 22104127.05",
      value: 22104127.056,
    },
    {
      code: "A1215 / Soft Eng-Web Spec Ex / COP 24060401.40",
      value: 24060401.4024,
    }
  ],
  BY: [
    {
      code: "A0880 / BLY Serv Manager Tr / COP 5133250.42360444",
      value: 5133250.42360444,
    },
    {
      code: "A0890 / BLY Tech Architect Tr / COP 5133250.42360444",
      value: 5133250.42360444,
    },
    {
      code: "A0870 / BLY Tech Consultant Tr / COP 5133250.42360444",
      value: 5133250.42360444,
    },
    {
      code: "A0900 / BLY Func Architect Tr / COP 6007526.65146894",
      value: 6007526.65146894,
    },
    {
      code: "A0910 / BLY Func Consultant Tr / COP 6007526.65146894",
      value: 6007526.65146894,
    },
    {
      code: "A0891 / BLY Tech Architect Bg / COP 6798355.65422838",
      value: 6798355.65422838,
    },
    {
      code: "A0881 / BLY Serv Manager Bg / COP 6915695.11751604",
      value: 6915695.11751604,
    },
    {
      code: "A0871 / BLY Tech Consultant Bg / COP 7932068.48711352",
      value: 7932068.48711352,
    },
    {
      code: "A0860 / BLY Tech Leader Tr / COP 8037096.46615439",
      value: 8037096.46615439,
    },
    {
      code: "A0901 / BLY Func Architect Bg / COP 8444774.99848326",
      value: 8444774.99848326,
    },
    {
      code: "A0911 / BLY Func Consultant Bg / COP 8444774.99848326",
      value: 8444774.99848326,
    },
    {
      code: "A0892 / BLY Tech Architect Jr / COP 8701455.074425",
      value: 8701455.074425,
    },
    {
      code: "A0882 / BLY Serv Manager Jr / COP 8796793.38834622",
      value: 8796793.38834622,
    },
    {
      code: "A0861 / BLY Tech Leader Bg / COP 11106914.0718219",
      value: 11106914.0718219,
    },
    {
      code: "A0872 / BLY Tech Consultant Jr / COP 11305578.0566335",
      value: 11305578.0566335,
    },
    {
      code: "A0902 / BLY Func Architect Jr / COP 11312258.1325753",
      value: 11312258.1325753,
    },
    {
      code: "A0912 / BLY Func Consultant Jr / COP 11312258.1325753",
      value: 11312258.1325753,
    },
    {
      code: "A0883 / BLY Serv Manager Pr / COP 11836618.859142",
      value: 11836618.859142,
    },
    {
      code: "A0873 / BLY Tech Consultant Pr / COP 13624056.0185766",
      value: 13624056.0185766,
    },
    {
      code: "A0893 / BLY Tech Architect Pr / COP 13922691.2692274",
      value: 13922691.2692274,
    },
    {
      code: "A0903 / BLY Func Architect Pr / COP 14700435.1350063",
      value: 14700435.1350063,
    },
    {
      code: "A0913 / BLY Func Consultant Pr / COP 14700435.1350063",
      value: 14700435.1350063,
    },
    {
      code: "A0862 / BLY Tech Leader Jr / COP 15719821.7223177",
      value: 15719821.7223177,
    },
    {
      code: "A0874 / BLY Tech Consultant Sr / COP 16630879.7653227",
      value: 16630879.7653227,
    },
    {
      code: "A0884 / BLY Serv Manager Sr / COP 16634417.0851102",
      value: 16634417.0851102,
    },
    {
      code: "A0904 / BLY Func Architect Sr / COP 19122666.1576597",
      value: 19122666.1576597,
    },
    {
      code: "A0914 / BLY Func Consultant Sr / COP 19122666.1576597",
      value: 19122666.1576597,
    },
    {
      code: "A0894 / BLY Tech Architect Sr / COP 19572666.1576596",
      value: 19572666.1576596,
    },
    {
      code: "A0875 / BLY Tech Consultant Ex / COP 21271445.0791148",
      value: 21271445.0791148,
    },
    {
      code: "A0863 / BLY Tech Leader Pr / COP 22760189.5195769",
      value: 22760189.5195769,
    },
    {
      code: "A0885 / BLY Serv Manager Ex / COP 22825579.18",
      value: 22825579.18,
    },
    {
      code: "A0895 / BLY Tech Architect Ex / COP 24658968.4410321",
      value: 24658968.4410321,
    },
    {
      code: "A0905 / BLY Func Architect Ex / COP 24908968.441032",
      value: 24908968.441032,
    },
    {
      code: "A0915 / BLY Func Consultant Ex / COP 24908968.441032",
      value: 24908968.441032,
    },
    {
      code: "A0864 / BLY Tech Leader Sr / COP 31465310.9522296",
      value: 31465310.9522296,
    },
    {
      code: "A0865 / BLY Tech Leader Ex / COP 38327112.4608241",
      value: 38327112.4608241,
    }
  ],
  "BY GDC": [
    {
      code: "A0880 / BLY Serv Manager Tr / COP 5133250.42360444",
      value: 5133250.42360444,
    },
    {
      code: "A0890 / BLY Tech Architect Tr / COP 5133250.42360444",
      value: 5133250.42360444,
    },
    {
      code: "A0870 / BLY Tech Consultant Tr / COP 5133250.42360444",
      value: 5133250.42360444,
    },
    {
      code: "A0900 / BLY Func Architect Tr / COP 6007526.65146894",
      value: 6007526.65146894,
    },
    {
      code: "A0910 / BLY Func Consultant Tr / COP 6007526.65146894",
      value: 6007526.65146894,
    },
    {
      code: "A0891 / BLY Tech Architect Bg / COP 6798355.65422838",
      value: 6798355.65422838,
    },
    {
      code: "A0881 / BLY Serv Manager Bg / COP 6915695.11751604",
      value: 6915695.11751604,
    },
    {
      code: "A0871 / BLY Tech Consultant Bg / COP 7932068.48711352",
      value: 7932068.48711352,
    },
    {
      code: "A0860 / BLY Tech Leader Tr / COP 8037096.46615439",
      value: 8037096.46615439,
    },
    {
      code: "A0901 / BLY Func Architect Bg / COP 8444774.99848326",
      value: 8444774.99848326,
    },
    {
      code: "A0911 / BLY Func Consultant Bg / COP 8444774.99848326",
      value: 8444774.99848326,
    },
    {
      code: "A0892 / BLY Tech Architect Jr / COP 8701455.074425",
      value: 8701455.074425,
    },
    {
      code: "A0882 / BLY Serv Manager Jr / COP 8796793.38834622",
      value: 8796793.38834622,
    },
    {
      code: "A0861 / BLY Tech Leader Bg / COP 11106914.0718219",
      value: 11106914.0718219,
    },
    {
      code: "A0872 / BLY Tech Consultant Jr / COP 11305578.0566335",
      value: 11305578.0566335,
    },
    {
      code: "A0902 / BLY Func Architect Jr / COP 11312258.1325753",
      value: 11312258.1325753,
    },
    {
      code: "A0912 / BLY Func Consultant Jr / COP 11312258.1325753",
      value: 11312258.1325753,
    },
    {
      code: "A0883 / BLY Serv Manager Pr / COP 11836618.859142",
      value: 11836618.859142,
    },
    {
      code: "A0873 / BLY Tech Consultant Pr / COP 13624056.0185766",
      value: 13624056.0185766,
    },
    {
      code: "A0893 / BLY Tech Architect Pr / COP 13922691.2692274",
      value: 13922691.2692274,
    },
    {
      code: "A0903 / BLY Func Architect Pr / COP 14700435.1350063",
      value: 14700435.1350063,
    },
    {
      code: "A0913 / BLY Func Consultant Pr / COP 14700435.1350063",
      value: 14700435.1350063,
    },
    {
      code: "A0862 / BLY Tech Leader Jr / COP 15719821.7223177",
      value: 15719821.7223177,
    },
    {
      code: "A0874 / BLY Tech Consultant Sr / COP 16630879.7653227",
      value: 16630879.7653227,
    },
    {
      code: "A0884 / BLY Serv Manager Sr / COP 16634417.0851102",
      value: 16634417.0851102,
    },
    {
      code: "A0904 / BLY Func Architect Sr / COP 19122666.1576597",
      value: 19122666.1576597,
    },
    {
      code: "A0914 / BLY Func Consultant Sr / COP 19122666.1576597",
      value: 19122666.1576597,
    },
    {
      code: "A0894 / BLY Tech Architect Sr / COP 19572666.1576596",
      value: 19572666.1576596,
    },
    {
      code: "A0875 / BLY Tech Consultant Ex / COP 21271445.0791148",
      value: 21271445.0791148,
    },
    {
      code: "A0863 / BLY Tech Leader Pr / COP 22760189.5195769",
      value: 22760189.5195769,
    },
    {
      code: "A0885 / BLY Serv Manager Ex / COP 22825579.18",
      value: 22825579.18,
    },
    {
      code: "A0895 / BLY Tech Architect Ex / COP 24658968.4410321",
      value: 24658968.4410321,
    },
    {
      code: "A0905 / BLY Func Architect Ex / COP 24908968.441032",
      value: 24908968.441032,
    },
    {
      code: "A0915 / BLY Func Consultant Ex / COP 24908968.441032",
      value: 24908968.441032,
    },
    {
      code: "A0864 / BLY Tech Leader Sr / COP 31465310.9522296",
      value: 31465310.9522296,
    },
    {
      code: "A0865 / BLY Tech Leader Ex / COP 38327112.4608241",
      value: 38327112.4608241,
    }
  ],
  DIGITAL: [
    {
      code: "A0760 / Digital Developer Tr / COP 3164968.67595955",
      value: 3164968.67595955,
    },
    {
      code: "A0801 / Digital Analyst Bg / COP 3362735.912448",
      value: 3362735.912448,
    },
    {
      code: "A0761 / Digital Developer Bg / COP 4304222.12204741",
      value: 4304222.12204741,
    },
    {
      code: "A0821 / Digital Leader Bg / COP 5968021.98788347",
      value: 5968021.98788347,
    },
    {
      code: "A0802 / Digital Analyst Jr / COP 6028398.288",
      value: 6028398.288,
    },
    { code: "A0752 / Digital Designer Jr / COP 6046112.16", value: 6046112.16 },
    {
      code: "A0762 / Digital Developer Jr / COP 6239295.71460545",
      value: 6239295.71460545,
    },
    {
      code: "A0831 / Digital Manager Bg / COP 6863225.28606599",
      value: 6863225.28606599,
    },
    {
      code: "A0822 / Digital Leader Jr / COP 6896453.83516003",
      value: 6896453.83516003,
    },
    {
      code: "A0803 / Digital Analyst Pr / COP 7053225.99696",
      value: 7053225.99696,
    },
    {
      code: "A0823 / Digital Leader Pr / COP 7957429.82972098",
      value: 7957429.82972098,
    },
    {
      code: "A0804 / Digital Analyst Sr / COP 8252274.4164432",
      value: 8252274.4164432,
    },
    { code: "A0753 / Digital Designer Pr / COP 8478148.8", value: 8478148.8 },
    {
      code: "A0763 / Digital Developer Pr / COP 9114958.06970919",
      value: 9114958.06970919,
    },
    {
      code: "A0824 / Digital Leader Sr / COP 9283702.15769357",
      value: 9283702.15769357,
    },
    {
      code: "A0832 / Digital Manager Jr / COP 9437086.60197365",
      value: 9437086.60197365,
    },
    {
      code: "A0805 / Digital Analyst Ex / COP 9655161.06723854",
      value: 9655161.06723854,
    },
    {
      code: "A0754 / Digital Designer Sr / COP 11114062.08",
      value: 11114062.08,
    },
    {
      code: "A0792 / Digital Architect Jr / COP 11805571.536",
      value: 11805571.536,
    },
    {
      code: "A0825 / Digital Leader Ex / COP 12092908.3838811",
      value: 12092908.3838811,
    },
    {
      code: "A0764 / Digital Developer Sr / COP 12163215.5363664",
      value: 12163215.5363664,
    },
    {
      code: "A0755 / Digital Designer Ex / COP 13520389.889065",
      value: 13520389.889065,
    },
    {
      code: "A0833 / Digital Manager Pr / COP 13593447.12",
      value: 13593447.12,
    },
    {
      code: "A0782 / DigitalSpecialist Jr / COP 13864555.4285767",
      value: 13864555.4285767,
    },
    {
      code: "A0793 / Digital Architect Pr / COP 14295218.36688",
      value: 14295218.36688,
    },
    {
      code: "A0765 / Digital Developer Ex / COP 14323433.7647136",
      value: 14323433.7647136,
    },
    {
      code: "A0783 / DigitalSpecialist Pr / COP 16704283.6488875",
      value: 16704283.6488875,
    },
    { code: "A0834 / Digital Manager Sr / COP 17730583.2", value: 17730583.2 },
    {
      code: "A0794 / Digital Architect Sr / COP 18911955.86016",
      value: 18911955.86016,
    },
    {
      code: "A0784 / DigitalSpecialist Sr / COP 20125642.9504669",
      value: 20125642.9504669,
    },
    {
      code: "A0835 / Digital Manager Ex / COP 21867719.28",
      value: 21867719.28,
    },
    {
      code: "A0795 / Digital Architect Ex / COP 23247674.472",
      value: 23247674.472,
    },
    {
      code: "A0785 / DigitalSpecialist Ex / COP 24247762.590924",
      value: 24247762.590924,
    }
  ],
  "DIGITAL GDC": [
    {
      code: "A0750 / Digital Designer Tr / COP 3127464.74806128",
      value: 3127464.74806128,
    },
    {
      code: "A0760 / Digital Developer Tr / COP 3551850.76970882",
      value: 3551850.76970882,
    },
    {
      code: "A0761 / Digital Developer Bg / COP 4331525.3289132",
      value: 4331525.3289132,
    },
    {
      code: "A0751 / Digital Designer Bg / COP 5213170.98854335",
      value: 5213170.98854335,
    },
    {
      code: "A0801 / Digital Analyst Bg / COP 5859413.13310003",
      value: 5859413.13310003,
    },
    {
      code: "A0762 / Digital Developer Jr / COP 6127414.61167651",
      value: 6127414.61167651,
    },
    {
      code: "A0752 / Digital Designer Jr / COP 7086323.0856",
      value: 7086323.0856,
    },
    { code: "A0812 / DigitalConsultant Jr / COP 8018000", value: 8018000 },
    {
      code: "A0802 / Digital Analyst Jr / COP 8217952.26270797",
      value: 8217952.26270797,
    },
    { code: "A0772 / Digital Engineer Jr / COP 8963328", value: 8963328 },
    {
      code: "A0832 / Digital Manager Jr / COP 8983495.488",
      value: 8983495.488,
    },
    {
      code: "A0753 / Digital Designer Pr / COP 9663167.844",
      value: 9663167.844,
    },
    { code: "A0813 / DigitalConsultant Pr / COP 9905395", value: 9905395 },
    {
      code: "A0803 / Digital Analyst Pr / COP 10021893.0033024",
      value: 10021893.0033024,
    },
    {
      code: "A0822 / Digital Leader Jr / COP 10212072.3734629",
      value: 10212072.3734629,
    },
    {
      code: "A0763 / Digital Developer Pr / COP 11372480.1369953",
      value: 11372480.1369953,
    },
    { code: "A0814 / DigitalConsultant Sr / COP 12238000", value: 12238000 },
    {
      code: "A0804 / Digital Analyst Sr / COP 13595349.053655",
      value: 13595349.053655,
    },
    {
      code: "A0782 / DigitalSpecialist Jr / COP 13864555.4285767",
      value: 13864555.4285767,
    },
    {
      code: "A0754 / Digital Designer Sr / COP 14172646.1712",
      value: 14172646.1712,
    },
    {
      code: "A0792 / Digital Architect Jr / COP 14404739.505288",
      value: 14404739.505288,
    },
    {
      code: "A0833 / Digital Manager Pr / COP 14619456.86784",
      value: 14619456.86784,
    },
    {
      code: "A0823 / Digital Leader Pr / COP 14926456.0057536",
      value: 14926456.0057536,
    },
    { code: "A0815 / DigitalConsultant Ex / COP 15192000", value: 15192000 },
    {
      code: "A0773 / Digital Engineer Pr / COP 16548544.32",
      value: 16548544.32,
    },
    {
      code: "A0783 / DigitalSpecialist Pr / COP 16704283.6488875",
      value: 16704283.6488875,
    },
    {
      code: "A0764 / Digital Developer Sr / COP 16742746.5703624",
      value: 16742746.5703624,
    },
    {
      code: "A0755 / Digital Designer Ex / COP 17290628.328864",
      value: 17290628.328864,
    },
    {
      code: "A0805 / Digital Analyst Ex / COP 19089738.7857792",
      value: 19089738.7857792,
    },
    {
      code: "A0784 / DigitalSpecialist Sr / COP 20125642.9504669",
      value: 20125642.9504669,
    },
    {
      code: "A0834 / Digital Manager Sr / COP 20307427.9584",
      value: 20307427.9584,
    },
    {
      code: "A0793 / Digital Architect Pr / COP 20569840.58976",
      value: 20569840.58976,
    },
    {
      code: "A0824 / Digital Leader Sr / COP 21816844.3266048",
      value: 21816844.3266048,
    },
    {
      code: "A0774 / Digital Engineer Sr / COP 22458738.72",
      value: 22458738.72,
    },
    {
      code: "A0765 / Digital Developer Ex / COP 23623289.7287834",
      value: 23623289.7287834,
    },
    {
      code: "A0835 / Digital Manager Ex / COP 23919738.77568",
      value: 23919738.77568,
    },
    {
      code: "A0785 / DigitalSpecialist Ex / COP 24247762.590924",
      value: 24247762.590924,
    },
    {
      code: "A0825 / Digital Leader Ex / COP 25089370.9755955",
      value: 25089370.9755955,
    },
    {
      code: "A0775 / Digital Engineer Ex / COP 26004855.36",
      value: 26004855.36,
    },
    {
      code: "A0794 / Digital Architect Sr / COP 26290435.953408",
      value: 26290435.953408,
    },
    {
      code: "A0795 / Digital Architect Ex / COP 31832543.446176",
      value: 31832543.446176,
    }
  ],
  "ERP PROY": [
    { code: "A0311 / Soft Eng Sys ERP Bg / COP 3650000", value: 3650000 },
    { code: "A0322 / Soft Eng ARS-ERP Bg / COP 3700000", value: 3700000 },
    { code: "A0161 / Soft Eng BI - ERP Bg / COP 3950000", value: 3950000 },
    { code: "A0441 / Func Cons ARS-ERP Bg / COP 4000000", value: 4000000 },
    { code: "A0051 / Tech-Func LeadERP Bg / COP 5000000", value: 5000000 },
    { code: "A0312 / Soft Eng Sys ERP Jr / COP 6250000.5", value: 6250000.5 },
    { code: "A0323 / Soft Eng ARS-ERP Jr / COP 6350000.5", value: 6350000.5 },
    { code: "A0011 / Proj Manager ERP Bg / COP 6500000", value: 6500000 },
    { code: "A0442 / Func Cons ARS-ERP Jr / COP 7350000.5", value: 7350000.5 },
    { code: "A0162 / Soft Eng BI - ERP Jr / COP 7400000.5", value: 7400000.5 },
    { code: "A0052 / Tech-Func LeadERP Jr / COP 8250000.5", value: 8250000.5 },
    { code: "A0041 / Proj Director ERP Bg / COP 8350000", value: 8350000 },
    { code: "A0012 / Proj Manager ERP Jr / COP 10000000.5", value: 10000000.5 },
    { code: "A0313 / Soft Eng Sys ERP Pr / COP 11400000.5", value: 11400000.5 },
    { code: "A0324 / Soft Eng ARS-ERP Pr / COP 11450000.5", value: 11450000.5 },
    {
      code: "A0042 / Proj Director ERP Jr / COP 11600000.5",
      value: 11600000.5,
    },
    {
      code: "A0443 / Func Cons ARS-ERP Pr / COP 12250000.5",
      value: 12250000.5,
    },
    {
      code: "A0163 / Soft Eng BI - ERP Pr / COP 12350000.5",
      value: 12350000.5,
    },
    {
      code: "A0053 / Tech-Func LeadERP Pr / COP 13000000.5",
      value: 13000000.5,
    },
    { code: "A0013 / Proj Manager ERP Pr / COP 14500000.5", value: 14500000.5 },
    {
      code: "A0043 / Proj Director ERP Pr / COP 17000000.5",
      value: 17000000.5,
    },
    { code: "A0325 / Soft Eng ARS-ERP Sr / COP 18000000.5", value: 18000000.5 },
    { code: "A0314 / Soft Eng Sys ERP Sr / COP 18350000.5", value: 18350000.5 },
    {
      code: "A0164 / Soft Eng BI - ERP Sr / COP 19650000.5",
      value: 19650000.5,
    },
    {
      code: "A0444 / Func Cons ARS-ERP Sr / COP 19750000.5",
      value: 19750000.5,
    },
    { code: "A0014 / Proj Manager ERP Sr / COP 20500000.5", value: 20500000.5 },
    {
      code: "A0054 / Tech-Func LeadERP Sr / COP 20500000.5",
      value: 20500000.5,
    },
    { code: "A0326 / Soft Eng ARS-ERP Ex / COP 22500000.5", value: 22500000.5 },
    { code: "A0315 / Soft Eng Sys ERP Ex / COP 22850000.5", value: 22850000.5 },
    {
      code: "A0044 / Proj Director ERP Sr / COP 23000000.5",
      value: 23000000.5,
    },
    {
      code: "A0165 / Soft Eng BI - ERP Ex / COP 25000000.5",
      value: 25000000.5,
    },
    {
      code: "A0445 / Func Cons ARS-ERP Ex / COP 25250000.5",
      value: 25250000.5,
    },
    { code: "A0015 / Proj Manager ERP Ex / COP 25500000.5", value: 25500000.5 },
    { code: "A0316 / Soft Eng Sys ERP Ma / COP 25500000.5", value: 25500000.5 },
    { code: "A0327 / Soft Eng ARS-ERP Ma / COP 25500000.5", value: 25500000.5 },
    {
      code: "A0055 / Tech-Func LeadERP Ex / COP 26000000.5",
      value: 26000000.5,
    },
    {
      code: "A0045 / Proj Director ERP Ex / COP 27500000.5",
      value: 27500000.5,
    },
    { code: "A0016 / Proj Manager ERP Ma / COP 28000000.5", value: 28000000.5 },
    {
      code: "A0166 / Soft Eng BI - ERP Ma / COP 28000000.5",
      value: 28000000.5,
    },
    {
      code: "A0056 / Tech-Func LeadERP Ma / COP 28500000.5",
      value: 28500000.5,
    },
    {
      code: "A0446 / Func Cons ARS-ERP Ma / COP 30000000.5",
      value: 30000000.5,
    },
    {
      code: "A0046 / Proj Director ERP Ma / COP 30500000.5",
      value: 30500000.5,
    }
  ],
  "ERP GDC": [
    { code: "A0311 / Soft Eng Sys ERP Bg / COP 4315000", value: 4315000 },
    { code: "A0322 / Soft Eng ARS-ERP Bg / COP 4327000", value: 4327000 },
    { code: "A0161 / Soft Eng BI - ERP Bg / COP 4605000", value: 4605000 },
    { code: "A0441 / Func Cons ARS-ERP Bg / COP 4678000", value: 4678000 },
    { code: "A0051 / Tech-Func LeadERP Bg / COP 6000000", value: 6000000 },
    { code: "A0312 / Soft Eng Sys ERP Jr / COP 7305000.5", value: 7305000.5 },
    { code: "A0323 / Soft Eng ARS-ERP Jr / COP 7374500.5", value: 7374500.5 },
    { code: "A0011 / Proj Manager ERP Bg / COP 7627000", value: 7627000 },
    { code: "A0162 / Soft Eng BI - ERP Jr / COP 8510000.5", value: 8510000.5 },
    { code: "A0442 / Func Cons ARS-ERP Jr / COP 8768000.5", value: 8768000.5 },
    { code: "A0041 / Proj Director ERP Bg / COP 9740500", value: 9740500 },
    { code: "A0052 / Tech-Func LeadERP Jr / COP 9900000.5", value: 9900000.5 },
    { code: "A0012 / Proj Manager ERP Jr / COP 11952000.5", value: 11952000.5 },
    { code: "A0313 / Soft Eng Sys ERP Pr / COP 13110000.5", value: 13110000.5 },
    { code: "A0324 / Soft Eng ARS-ERP Pr / COP 13167500.5", value: 13167500.5 },
    {
      code: "A0042 / Proj Director ERP Jr / COP 13478000.5",
      value: 13478000.5,
    },
    {
      code: "A0163 / Soft Eng BI - ERP Pr / COP 14202500.5",
      value: 14202500.5,
    },
    {
      code: "A0443 / Func Cons ARS-ERP Pr / COP 14700000.5",
      value: 14700000.5,
    },
    {
      code: "A0053 / Tech-Func LeadERP Pr / COP 15600000.5",
      value: 15600000.5,
    },
    { code: "A0013 / Proj Manager ERP Pr / COP 17400000.5", value: 17400000.5 },
    {
      code: "A0043 / Proj Director ERP Pr / COP 19550000.5",
      value: 19550000.5,
    },
    { code: "A0325 / Soft Eng ARS-ERP Sr / COP 21225000.5", value: 21225000.5 },
    { code: "A0314 / Soft Eng Sys ERP Sr / COP 21645000.5", value: 21645000.5 },
    {
      code: "A0164 / Soft Eng BI - ERP Sr / COP 23197500.5",
      value: 23197500.5,
    },
    {
      code: "A0444 / Func Cons ARS-ERP Sr / COP 23700000.5",
      value: 23700000.5,
    },
    { code: "A0014 / Proj Manager ERP Sr / COP 24600000.5", value: 24600000.5 },
    {
      code: "A0054 / Tech-Func LeadERP Sr / COP 24600000.5",
      value: 24600000.5,
    },
    {
      code: "A0044 / Proj Director ERP Sr / COP 26450000.5",
      value: 26450000.5,
    },
    { code: "A0326 / Soft Eng ARS-ERP Ex / COP 27000000.5", value: 27000000.5 },
    { code: "A0315 / Soft Eng Sys ERP Ex / COP 27420000.5", value: 27420000.5 },
    {
      code: "A0165 / Soft Eng BI - ERP Ex / COP 30000000.5",
      value: 30000000.5,
    },
    {
      code: "A0445 / Func Cons ARS-ERP Ex / COP 30300000.5",
      value: 30300000.5,
    },
    { code: "A0015 / Proj Manager ERP Ex / COP 30600000.5", value: 30600000.5 },
    { code: "A0316 / Soft Eng Sys ERP Ma / COP 30600000.5", value: 30600000.5 },
    { code: "A0327 / Soft Eng ARS-ERP Ma / COP 30600000.5", value: 30600000.5 },
    {
      code: "A0055 / Tech-Func LeadERP Ex / COP 31200000.5",
      value: 31200000.5,
    },
    {
      code: "A0045 / Proj Director ERP Ex / COP 31625000.5",
      value: 31625000.5,
    },
    { code: "A0016 / Proj Manager ERP Ma / COP 33600000.5", value: 33600000.5 },
    {
      code: "A0166 / Soft Eng BI - ERP Ma / COP 33600000.5",
      value: 33600000.5,
    },
    {
      code: "A0056 / Tech-Func LeadERP Ma / COP 34200000.5",
      value: 34200000.5,
    },
    {
      code: "A0046 / Proj Director ERP Ma / COP 35075000.5",
      value: 35075000.5,
    },
    {
      code: "A0446 / Func Cons ARS-ERP Ma / COP 36000000.5",
      value: 36000000.5,
    }
  ],
  "GDC Infosec": [
    { code: "A0520 / Security Tester - Tr / COP 4800000", value: 4800000 },
    { code: "A0540 / Security Engineer - Tr / COP 6000000", value: 6000000 },
    { code: "A0521 / Security Tester - Bg / COP 6857500", value: 6857500 },
    { code: "A0541 / Security Engineer - Bg / COP 7912500", value: 7912500 },
    {
      code: "A0530 / Security IT Auditor - Tr / COP 8932155.936",
      value: 8932155.936,
    },
    {
      code: "A0550 / InfoSec Manager - Tr / COP 8932155.936",
      value: 8932155.936,
    },
    { code: "A0522 / Security Tester - JR / COP 8967500", value: 8967500 },
    { code: "A0542 / Security Engineer - JR / COP 9495000", value: 9495000 },
    {
      code: "A0531 / Security IT Auditor - Bg / COP 10998051.81552",
      value: 10998051.81552,
    },
    {
      code: "A0551 / InfoSec Manager - Bg / COP 10998051.81552",
      value: 10998051.81552,
    },
    { code: "A0523 / Security Tester - Pr / COP 11077500", value: 11077500 },
    { code: "A0543 / Security Engineer - Pr / COP 12132500", value: 12132500 },
    {
      code: "A0532 / Security IT Auditor - JR / COP 12871469.80416",
      value: 12871469.80416,
    },
    {
      code: "A0552 / InfoSec Manager - JR / COP 12871469.80416",
      value: 12871469.80416,
    },
    { code: "A0524 / Security Tester - Sr / COP 13715000", value: 13715000 },
    { code: "A0544 / Security Engineer - Sr / COP 13715000", value: 13715000 },
    {
      code: "A0533 / Security IT Auditor - Pr / COP 14633279.2584",
      value: 14633279.2584,
    },
    {
      code: "A0553 / InfoSec Manager - Pr / COP 14633279.2584",
      value: 14633279.2584,
    },
    { code: "A0525 / Security Tester - Ex / COP 15825000", value: 15825000 },
    { code: "A0545 / Security Engineer - Ex / COP 15825000", value: 15825000 },
    { code: "A0546 / Security Engineer - Ma / COP 17935000", value: 17935000 },
    {
      code: "A0534 / Security IT Auditor - Sr / COP 18946109.09664",
      value: 18946109.09664,
    },
    {
      code: "A0554 / InfoSec Manager - Sr / COP 18946109.09664",
      value: 18946109.09664,
    },
    { code: "A0526 / Security Tester - Ma / COP 18990000", value: 18990000 },
    {
      code: "A0535 / Security IT Auditor - Ex / COP 22504416",
      value: 22504416,
    },
    { code: "A0555 / InfoSec Manager - Ex / COP 22504416", value: 22504416 },
    {
      code: "A0536 / Security IT Auditor - Ma / COP 27723880.8",
      value: 27723880.8,
    },
    {
      code: "A0556 / InfoSec Manager - Ma / COP 27723880.8",
      value: 27723880.8,
    }
  ],
  ITIS: [
    {
      code: "A0471 / Help D-ITIS-S Sup Tr / COP 2091134.08245",
      value: 2091134.08245,
    },
    { code: "A1190 / Storage Tr / COP 2313360", value: 2313360 },
    { code: "A0481 / Sup Eng-ITIS Desk Bg / COP 2423351.7", value: 2423351.7 },
    {
      code: "A0472 / Help D-ITIS-S Sup Bg / COP 2607276.672",
      value: 2607276.672,
    },
    {
      code: "A0851 / ITIS Data Center Facilities Bg / COP 3150000",
      value: 3150000,
    },
    { code: "A0631 / ProcQ Leader ITIS Bg / COP 3183832.3", value: 3183832.3 },
    { code: "A0340 / DBA ARS Tr / COP 3278652.363525", value: 3278652.363525 },
    {
      code: "A0510 / Sup Eng-ITIS Telc Tr  / COP 3377023.65",
      value: 3377023.65,
    },
    { code: "A0482 / Sup Eng-ITIS Desk Jr / COP 3430627.2", value: 3430627.2 },
    { code: "A0490 / S Eng-ITIS Server Tr / COP 3503225", value: 3503225 },
    {
      code: "A0473 / Help D-ITIS-S Sup Jr / COP 3533546.016",
      value: 3533546.016,
    },
    {
      code: "A0501 / Sup Eng-ITIS Syst Bg / COP 3598685.685",
      value: 3598685.685,
    },
    { code: "A1160 / Cloud Tr / COP 3815000", value: 3815000 },
    { code: "A0483 / Sup Eng-ITIS Desk Pr / COP 3887730", value: 3887730 },
    { code: "A0511 / Sup Eng-ITIS Telc Bg / COP 4181076.9", value: 4181076.9 },
    {
      code: "A0474 / Help D-ITIS-S Sup Pr / COP 4348979.712",
      value: 4348979.712,
    },
    { code: "A1191 / Storage Bg / COP 4360001.09", value: 4360001.09 },
    { code: "A0341 / DBA ARS Bg / COP 4383225", value: 4383225 },
    { code: "A0491 / S Eng-ITIS Server Bg / COP 4383225", value: 4383225 },
    {
      code: "A0502 / Sup Eng-ITIS Syst Jr / COP 4401702.3645",
      value: 4401702.3645,
    },
    { code: "A0632 / ProcQ Leader ITIS Jr / COP 4463316", value: 4463316 },
    { code: "A1200 / Process Automatio Tr / COP 4469000", value: 4469000 },
    { code: "A0484 / Sup Eng-ITIS Desk Sr / COP 4535685", value: 4535685 },
    { code: "A1161 / Cloud Bg / COP 4905000", value: 4905000 },
    { code: "A1180 / Middleware Tr / COP 4905000", value: 4905000 },
    {
      code: "A0475 / Help D-ITIS-S Sup Sr / COP 5028507.792",
      value: 5028507.792,
    },
    {
      code: "A0512 / Sup Eng-ITIS Telc Jr / COP 5121436.32",
      value: 5121436.32,
    },
    { code: "A1201 / Process Automatio Bg / COP 5123000", value: 5123000 },
    { code: "A0461 / Serv Manager ITIS-Bg / COP 5321666.4", value: 5321666.4 },
    { code: "A0485 / Sup Eng-ITIS Desk Ex / COP 5442822", value: 5442822 },
    {
      code: "A0852 / ITIS Data Center Facilities Jr / COP 5565000",
      value: 5565000,
    },
    {
      code: "A0476 / Help D-ITIS-S Sup Ex / COP 5640762.204",
      value: 5640762.204,
    },
    { code: "A1192 / Storage Jr / COP 5940501.09", value: 5940501.09 },
    { code: "A1181 / Middleware Bg / COP 5995000", value: 5995000 },
    { code: "A0633 / ProcQ Leader ITIS Pr / COP 6171000", value: 6171000 },
    { code: "A1162 / Cloud Jr / COP 6213000", value: 6213000 },
    { code: "A0492 / S Eng-ITIS Server Jr / COP 6259245.3", value: 6259245.3 },
    { code: "A0486 / Sup Eng-ITIS Desk Ma / COP 6600000", value: 6600000 },
    { code: "A0477 / Help D-ITIS-S Sup Ma / COP 6646200", value: 6646200 },
    {
      code: "A0503 / Sup Eng-ITIS Syst Pr / COP 6688822.50036",
      value: 6688822.50036,
    },
    { code: "A0462 / Serv Manager ITIS-Jr / COP 7288369.2", value: 7288369.2 },
    { code: "A1182 / Middleware Jr / COP 7303000", value: 7303000 },
    { code: "A1202 / Process Automatio Jr / COP 7303000", value: 7303000 },
    { code: "A0342 / DBA ARS Jr / COP 7349105.61", value: 7349105.61 },
    {
      code: "A0513 / Sup Eng-ITIS Telc Pr / COP 7619259.648",
      value: 7619259.648,
    },
    {
      code: "A0493 / S Eng-ITIS Server Pr / COP 7890442.56",
      value: 7890442.56,
    },
    { code: "A1193 / Storage Pr / COP 7957001.09", value: 7957001.09 },
    {
      code: "A0504 / Sup Eng-ITIS Syst Sr / COP 8582119.0875",
      value: 8582119.0875,
    },
    {
      code: "A0853 / ITIS Data Center Facilities Pr / COP 8715000",
      value: 8715000,
    },
    { code: "A0634 / ProcQ Leader ITIS Sr / COP 8751600", value: 8751600 },
    { code: "A0463 / Serv Manager ITIS-Pr / COP 8936928.9", value: 8936928.9 },
    { code: "A1163 / Cloud Pr / COP 9047000", value: 9047000 },
    { code: "A0635 / ProcQ Leader ITIS Ex / COP 9900000", value: 9900000 },
    { code: "A0343 / DBA ARS Pr / COP 9933150.15", value: 9933150.15 },
    { code: "A1203 / Process Automatio Pr / COP 10464000", value: 10464000 },
    { code: "A1183 / Middleware Pr / COP 10682000", value: 10682000 },
    { code: "A1194 / Storage Sr / COP 10736501.09", value: 10736501.09 },
    { code: "A0494 / S Eng-ITIS Server Sr / COP 10810800", value: 10810800 },
    {
      code: "A0854 / ITIS Data Center Facilities Sr / COP 11235000",
      value: 11235000,
    },
    { code: "A0505 / Sup Eng-ITIS Syst Ex / COP 11680767", value: 11680767 },
    { code: "A1164 / Cloud Sr / COP 11772000", value: 11772000 },
    { code: "A0495 / S Eng-ITIS Server Ex / COP 11880000", value: 11880000 },
    { code: "A0464 / Serv Manager ITIS-Sr / COP 12147282", value: 12147282 },
    {
      code: "A0514 / Sup Eng-ITIS Telc Sr / COP 12302327.4",
      value: 12302327.4,
    },
    { code: "A1204 / Process Automatio Sr / COP 12971000", value: 12971000 },
    { code: "A1195 / Storage Ex / COP 13897501.09", value: 13897501.09 },
    { code: "A1184 / Middleware Sr / COP 13952000", value: 13952000 },
    { code: "A1172 / Architect Jr / COP 13965000", value: 13965000 },
    {
      code: "A0855 / ITIS Data Center Facilities Ex / COP 14385000",
      value: 14385000,
    },
    {
      code: "A0465 / Serv Manager ITIS-Ex / COP 14545859.328",
      value: 14545859.328,
    },
    { code: "A1205 / Process Automatio Ex / COP 14606000", value: 14606000 },
    { code: "A0506 / Sup Eng-ITIS Syst Ma / COP 14878500", value: 14878500 },
    { code: "A1165 / Cloud Ex / COP 14933000", value: 14933000 },
    { code: "A0344 / DBA ARS Sr / COP 14967760.5", value: 14967760.5 },
    {
      code: "A0515 / Sup Eng-ITIS Telc Ex / COP 15437822.4",
      value: 15437822.4,
    },
    { code: "A0496 / S Eng-ITIS Server Ma / COP 15845500", value: 15845500 },
    { code: "A0466 / Serv Manager ITIS-Ma / COP 15955968", value: 15955968 },
    { code: "A1185 / Middleware Ex / COP 16275000", value: 16275000 },
    { code: "A1196 / Storage Ma / COP 16275001.05", value: 16275001.05 },
    { code: "A1173 / Architect Pr / COP 17325000", value: 17325000 },
    { code: "A1206 / Process Automatio Ma / COP 17325000", value: 17325000 },
    { code: "A1166 / Cloud Ma / COP 18312000", value: 18312000 },
    { code: "A0345 / DBA ARS Ex / COP 18650100", value: 18650100 },
    { code: "A0516 / Sup Eng-ITIS Telc Ma / COP 19183500", value: 19183500 },
    { code: "A1186 / Middleware Ma / COP 19215000", value: 19215000 },
    { code: "A1174 / Architect Sr / COP 19530000", value: 19530000 },
    { code: "A0346 / DBA ARS Ma / COP 21367500", value: 21367500 },
    { code: "A1175 / Architect Ex / COP 23940000", value: 23940000 },
    { code: "A1176 / Architect Ma / COP 27090000", value: 27090000 }
  ],
  "ITIS GDC": [
    {
      code: "A0471 / Help D-ITIS-S Sup Tr / COP 2126577.033",
      value: 2126577.033,
    },
    {
      code: "A0481 / Sup Eng-ITIS Desk Bg / COP 2533504.05",
      value: 2533504.05,
    },
    {
      code: "A0472 / Help D-ITIS-S Sup Bg / COP 2920488.48",
      value: 2920488.48,
    },
    {
      code: "A0851 / ITIS Data Center Facilities Bg / COP 3300000",
      value: 3300000,
    },
    {
      code: "A0340 / DBA ARS Tr / COP 3427682.0164125",
      value: 3427682.0164125,
    },
    { code: "A0510 / Sup Eng-ITIS Telc Tr  / COP 3434889", value: 3434889 },
    { code: "A0482 / Sup Eng-ITIS Desk Jr / COP 3522519", value: 3522519 },
    { code: "A1190 / Storage Tr / COP 3850000", value: 3850000 },
    {
      code: "A0490 / S Eng-ITIS Server Tr / COP 3892514.25",
      value: 3892514.25,
    },
    {
      code: "A0473 / Help D-ITIS-S Sup Jr / COP 3958030.44",
      value: 3958030.44,
    },
    {
      code: "A0501 / Sup Eng-ITIS Syst Bg / COP 3977577.45",
      value: 3977577.45,
    },
    { code: "A0511 / Sup Eng-ITIS Telc Bg / COP 4034885.4", value: 4034885.4 },
    { code: "A0483 / Sup Eng-ITIS Desk Pr / COP 4064445", value: 4064445 },
    { code: "A1160 / Cloud Tr / COP 4070000", value: 4070000 },
    { code: "A0631 / ProcQ Leader ITIS Bg / COP 4283832.3", value: 4283832.3 },
    { code: "A1200 / Process Automatio Tr / COP 4510000", value: 4510000 },
    { code: "A0491 / S Eng-ITIS Server Bg / COP 4542615", value: 4542615 },
    { code: "A0341 / DBA ARS Bg / COP 4582462.5", value: 4582462.5 },
    { code: "A0484 / Sup Eng-ITIS Desk Sr / COP 4700619", value: 4700619 },
    {
      code: "A0474 / Help D-ITIS-S Sup Pr / COP 4871422.08",
      value: 4871422.08,
    },
    { code: "A1180 / Middleware Tr / COP 4950000", value: 4950000 },
    { code: "A1161 / Cloud Bg / COP 5060000", value: 5060000 },
    { code: "A1201 / Process Automatio Bg / COP 5170000", value: 5170000 },
    { code: "A1191 / Storage Bg / COP 5500000", value: 5500000 },
    { code: "A0632 / ProcQ Leader ITIS Jr / COP 5563316", value: 5563316 },
    {
      code: "A0475 / Help D-ITIS-S Sup Sr / COP 5583602.808",
      value: 5583602.808,
    },
    { code: "A0485 / Sup Eng-ITIS Desk Ex / COP 5640742.8", value: 5640742.8 },
    {
      code: "A0502 / Sup Eng-ITIS Syst Jr / COP 5675997.4425",
      value: 5675997.4425,
    },
    {
      code: "A0852 / ITIS Data Center Facilities Jr / COP 5830000",
      value: 5830000,
    },
    {
      code: "A0512 / Sup Eng-ITIS Telc Jr / COP 5840976.96",
      value: 5840976.96,
    },
    { code: "A0461 / Serv Manager ITIS-Bg / COP 5935380", value: 5935380 },
    {
      code: "A0476 / Help D-ITIS-S Sup Ex / COP 6263443.746",
      value: 6263443.746,
    },
    {
      code: "A0492 / S Eng-ITIS Server Jr / COP 6486854.22",
      value: 6486854.22,
    },
    { code: "A1181 / Middleware Bg / COP 6930000", value: 6930000 },
    { code: "A0633 / ProcQ Leader ITIS Pr / COP 7271000", value: 7271000 },
    { code: "A1162 / Cloud Jr / COP 7370000", value: 7370000 },
    { code: "A1202 / Process Automatio Jr / COP 7370000", value: 7370000 },
    { code: "A0486 / Sup Eng-ITIS Desk Ma / COP 7524000", value: 7524000 },
    { code: "A0342 / DBA ARS Jr / COP 7683155.865", value: 7683155.865 },
    { code: "A0477 / Help D-ITIS-S Sup Ma / COP 7797600", value: 7797600 },
    { code: "A0462 / Serv Manager ITIS-Jr / COP 8128890", value: 8128890 },
    { code: "A1192 / Storage Jr / COP 8140000", value: 8140000 },
    {
      code: "A0493 / S Eng-ITIS Server Pr / COP 8177367.744",
      value: 8177367.744,
    },
    {
      code: "A0513 / Sup Eng-ITIS Telc Pr / COP 8534560.32",
      value: 8534560.32,
    },
    {
      code: "A0503 / Sup Eng-ITIS Syst Pr / COP 8625240.0234",
      value: 8625240.0234,
    },
    {
      code: "A0853 / ITIS Data Center Facilities Pr / COP 9130000",
      value: 9130000,
    },
    { code: "A1182 / Middleware Jr / COP 9240000", value: 9240000 },
    { code: "A0634 / ProcQ Leader ITIS Sr / COP 9851600", value: 9851600 },
    { code: "A0463 / Serv Manager ITIS-Pr / COP 9967567.5", value: 9967567.5 },
    { code: "A0343 / DBA ARS Pr / COP 10384656.975", value: 10384656.975 },
    { code: "A1203 / Process Automatio Pr / COP 10560000", value: 10560000 },
    { code: "A1163 / Cloud Pr / COP 10780000", value: 10780000 },
    {
      code: "A0494 / S Eng-ITIS Server Sr / COP 10862056.8",
      value: 10862056.8,
    },
    {
      code: "A0504 / Sup Eng-ITIS Syst Sr / COP 10970415.225",
      value: 10970415.225,
    },
    { code: "A0635 / ProcQ Leader ITIS Ex / COP 11000000", value: 11000000 },
    {
      code: "A0514 / Sup Eng-ITIS Telc Sr / COP 11687211.03",
      value: 11687211.03,
    },
    {
      code: "A0854 / ITIS Data Center Facilities Sr / COP 11770000",
      value: 11770000,
    },
    { code: "A1183 / Middleware Pr / COP 12320000", value: 12320000 },
    { code: "A1193 / Storage Pr / COP 12320000", value: 12320000 },
    {
      code: "A0495 / S Eng-ITIS Server Ex / COP 12881871.27234",
      value: 12881871.27234,
    },
    { code: "A1204 / Process Automatio Sr / COP 13090000", value: 13090000 },
    { code: "A0464 / Serv Manager ITIS-Sr / COP 13430340", value: 13430340 },
    { code: "A1164 / Cloud Sr / COP 13750000", value: 13750000 },
    { code: "A1205 / Process Automatio Ex / COP 14740000", value: 14740000 },
    { code: "A0505 / Sup Eng-ITIS Syst Ex / COP 14931378", value: 14931378 },
    {
      code: "A0855 / ITIS Data Center Facilities Ex / COP 15070000",
      value: 15070000,
    },
    {
      code: "A0465 / Serv Manager ITIS-Ex / COP 15364308.96",
      value: 15364308.96,
    },
    { code: "A1184 / Middleware Sr / COP 15400000", value: 15400000 },
    { code: "A0344 / DBA ARS Sr / COP 15512042.7", value: 15512042.7 },
    { code: "A1194 / Storage Sr / COP 15950000", value: 15950000 },
    { code: "A0496 / S Eng-ITIS Server Ma / COP 16541400", value: 16541400 },
    { code: "A0466 / Serv Manager ITIS-Ma / COP 16853760", value: 16853760 },
    { code: "A1185 / Middleware Ex / COP 17050000", value: 17050000 },
    { code: "A0506 / Sup Eng-ITIS Syst Ma / COP 17556000", value: 17556000 },
    {
      code: "A0515 / Sup Eng-ITIS Telc Ex / COP 17559210.24",
      value: 17559210.24,
    },
    { code: "A1195 / Storage Ex / COP 17600000", value: 17600000 },
    { code: "A1206 / Process Automatio Ma / COP 18150000", value: 18150000 },
    { code: "A1165 / Cloud Ex / COP 18700000", value: 18700000 },
    { code: "A1186 / Middleware Ma / COP 20130000", value: 20130000 },
    { code: "A1196 / Storage Ma / COP 20790000", value: 20790000 },
    { code: "A0345 / DBA ARS Ex / COP 20816400", value: 20816400 },
    { code: "A0516 / Sup Eng-ITIS Telc Ma / COP 21819600", value: 21819600 },
    { code: "A1172 / Architect Jr / COP 22330000", value: 22330000 },
    { code: "A0346 / DBA ARS Ma / COP 23199000", value: 23199000 },
    { code: "A1166 / Cloud Ma / COP 23980000", value: 23980000 },
    { code: "A1173 / Architect Pr / COP 25850000", value: 25850000 },
    { code: "A1174 / Architect Sr / COP 29260000", value: 29260000 },
    { code: "A1175 / Architect Ex / COP 31680000", value: 31680000 },
    { code: "A1176 / Architect Ma / COP 35663800", value: 35663800 }
  ],
  "QA&VALIDAT": [
    { code: "A0381 / Test Engineer ARS-Tr / COP 2323200", value: 2323200 },
    { code: "A0382 / Test Engineer ARS-Bg / COP 3008016", value: 3008016 },
    { code: "A0383 / Test Engineer ARS-Jr / COP 3899280", value: 3899280 },
    { code: "A0384 / Test Engineer ARS-Pr / COP 5236176", value: 5236176 },
    { code: "A0391 / Aut Test Eng ARS-Tr / COP 5319174.96", value: 5319174.96 },
    { code: "A1100 / Software Test Tr / COP 5673786.624", value: 5673786.624 },
    {
      code: "A0392 / Aut Test Eng ARS-Bg / COP 6223434.7032",
      value: 6223434.7032,
    },
    {
      code: "A1131 / Hybrid Test Eng Bg / COP 6248559.23090256",
      value: 6248559.23090256,
    },
    {
      code: "A1101 / Software Test Bg / COP 6638330.35008",
      value: 6638330.35008,
    },
    { code: "A0371 / Test Leader ARS - Bg / COP 6946579.2", value: 6946579.2 },
    {
      code: "A0393 / Aut Test Eng ARS-Jr / COP 7281418.602744",
      value: 7281418.602744,
    },
    { code: "A1111 / SDET Bg / COP 7606418.5024844", value: 7606418.5024844 },
    {
      code: "A1121 / Performance Test Bg / COP 7606418.5024844",
      value: 7606418.5024844,
    },
    {
      code: "A1102 / Software Test Jr / COP 7766846.5095936",
      value: 7766846.5095936,
    },
    { code: "A0385 / Test Engineer ARS-Sr / COP 8355600", value: 8355600 },
    {
      code: "A0394 / Aut Test Eng ARS-Pr / COP 8519259.76521048",
      value: 8519259.76521048,
    },
    {
      code: "A0372 / Test Leader ARS - Jr / COP 8574510.03552",
      value: 8574510.03552,
    },
    {
      code: "A1132 / Hybrid Test Eng Jr / COP 8794199.61054505",
      value: 8794199.61054505,
    },
    {
      code: "A1103 / Software Test Pr / COP 9087210.41622451",
      value: 9087210.41622451,
    },
    {
      code: "A0395 / Aut Test Eng ARS-Sr / COP 9967533.92529626",
      value: 9967533.92529626,
    },
    {
      code: "A0373 / Test Leader ARS - Pr / COP 10032176.7415584",
      value: 10032176.7415584,
    },
    {
      code: "A1122 / Performance Test Jr / COP 10147152.4427768",
      value: 10147152.4427768,
    },
    {
      code: "A1104 / Software Test Sr / COP 10632036.1869827",
      value: 10632036.1869827,
    },
    { code: "A0386 / Test Engineer ARS-Ex / COP 11140800", value: 11140800 },
    {
      code: "A0396 / Aut Test Eng ARS-Ex / COP 11662014.6925966",
      value: 11662014.6925966,
    },
    {
      code: "A1133 / Hybrid Test Eng Pr / COP 11731682.1354574",
      value: 11731682.1354574,
    },
    {
      code: "A0374 / Test Leader ARS - Sr / COP 11737646.7876233",
      value: 11737646.7876233,
    },
    {
      code: "A1105 / Software Test Ex / COP 12439482.3387697",
      value: 12439482.3387697,
    },
    { code: "A1112 / SDET Jr / COP 12677365.2976844", value: 12677365.2976844 },
    {
      code: "A1123 / Performance Test Pr / COP 13536555.0374753",
      value: 13536555.0374753,
    },
    {
      code: "A0397 / Aut Test Eng ARS-Ma / COP 13644557.1903381",
      value: 13644557.1903381,
    },
    {
      code: "A0375 / Test Leader ARS - Ex / COP 13733046.7415193",
      value: 13733046.7415193,
    },
    { code: "A1113 / SDET Pr / COP 13945102.8416422", value: 13945102.8416422 },
    { code: "A0387 / Test Engineer ARS-Ma / COP 14483040", value: 14483040 },
    {
      code: "A1106 / Software Test Ma / COP 14554194.3363606",
      value: 14554194.3363606,
    },
    {
      code: "A0363 / QA Manager ARS -  Pr / COP 15357548.8985804",
      value: 15357548.8985804,
    },
    {
      code: "A1134 / Hybrid Test Eng Sr / COP 15650357.2607535",
      value: 15650357.2607535,
    },
    {
      code: "A0364 / QA Manager ARS -  Sr / COP 17968332.2113391",
      value: 17968332.2113391,
    },
    {
      code: "A1124 / Performance Test Sr / COP 18058102.8338679",
      value: 18058102.8338679,
    },
    { code: "A1114 / SDET Sr / COP 19763688.2769009", value: 19763688.2769009 },
    {
      code: "A1135 / Hybrid Test Eng Ex / COP 20877967.8447767",
      value: 20877967.8447767,
    },
    {
      code: "A0365 / QA Manager ARS -  Ex / COP 21022948.6872667",
      value: 21022948.6872667,
    },
    { code: "A1115 / SDET Ex / COP 23914063.1923569", value: 23914063.1923569 },
    {
      code: "A1125 / Performance Test Ex / COP 24089960.6329507",
      value: 24089960.6329507,
    },
    {
      code: "A0366 / QA Manager ARS -  Ma / COP 24596849.964102",
      value: 24596849.964102,
    },
    { code: "A1116 / SDET Ma / COP 26305471.4879616", value: 26305471.4879616 },
    {
      code: "A1136 / Hybrid Test Eng Ma / COP 27851731.0541282",
      value: 27851731.0541282,
    },
    {
      code: "A1126 / Performance Test Ma / COP 32136609.733372",
      value: 32136609.733372,
    }
  ],
  "QA&VALIDAT GDC": [
    { code: "A0381 / Test Engineer ARS-Tr / COP 2956800", value: 2956800 },
    { code: "A0382 / Test Engineer ARS-Bg / COP 3899280", value: 3899280 },
    { code: "A0383 / Test Engineer ARS-Jr / COP 4456320", value: 4456320 },
    { code: "A0391 / Aut Test Eng ARS-Tr / COP 5041872", value: 5041872 },
    { code: "A0384 / Test Engineer ARS-Pr / COP 5570400", value: 5570400 },
    { code: "A1100 / Software Test Tr / COP 5673786.624", value: 5673786.624 },
    {
      code: "A0392 / Aut Test Eng ARS-Bg / COP 6223434.7032",
      value: 6223434.7032,
    },
    {
      code: "A1131 / Hybrid Test Eng Bg / COP 6592229.9886022",
      value: 6592229.9886022,
    },
    {
      code: "A1101 / Software Test Bg / COP 6638330.35008",
      value: 6638330.35008,
    },
    {
      code: "A1121 / Performance Test Bg / COP 7209875.35780512",
      value: 7209875.35780512,
    },
    {
      code: "A0393 / Aut Test Eng ARS-Jr / COP 7281418.602744",
      value: 7281418.602744,
    },
    {
      code: "A0371 / Test Leader ARS - Bg / COP 7328641.056",
      value: 7328641.056,
    },
    {
      code: "A1102 / Software Test Jr / COP 7361939.81952",
      value: 7361939.81952,
    },
    { code: "A1111 / SDET Bg / COP 7606418.5024844", value: 7606418.5024844 },
    { code: "A0385 / Test Engineer ARS-Sr / COP 8355600", value: 8355600 },
    {
      code: "A0394 / Aut Test Eng ARS-Pr / COP 8519259.76521048",
      value: 8519259.76521048,
    },
    {
      code: "A0372 / Test Leader ARS - Jr / COP 8574510.03552",
      value: 8574510.03552,
    },
    {
      code: "A1132 / Hybrid Test Eng Jr / COP 8794199.61054505",
      value: 8794199.61054505,
    },
    {
      code: "A1103 / Software Test Pr / COP 9087210.41622451",
      value: 9087210.41622451,
    },
    {
      code: "A0395 / Aut Test Eng ARS-Sr / COP 9967533.92529626",
      value: 9967533.92529626,
    },
    {
      code: "A0373 / Test Leader ARS - Pr / COP 10032176.7415584",
      value: 10032176.7415584,
    },
    {
      code: "A1122 / Performance Test Jr / COP 10147152.4427768",
      value: 10147152.4427768,
    },
    {
      code: "A1104 / Software Test Sr / COP 10632036.1869827",
      value: 10632036.1869827,
    },
    { code: "A0386 / Test Engineer ARS-Ex / COP 11140800", value: 11140800 },
    {
      code: "A0396 / Aut Test Eng ARS-Ex / COP 11662014.6925966",
      value: 11662014.6925966,
    },
    {
      code: "A1133 / Hybrid Test Eng Pr / COP 11731682.1354574",
      value: 11731682.1354574,
    },
    {
      code: "A0374 / Test Leader ARS - Sr / COP 11737646.7876233",
      value: 11737646.7876233,
    },
    {
      code: "A1105 / Software Test Ex / COP 12439482.3387697",
      value: 12439482.3387697,
    },
    { code: "A1112 / SDET Jr / COP 12677365.2976844", value: 12677365.2976844 },
    {
      code: "A1123 / Performance Test Pr / COP 13536555.0374753",
      value: 13536555.0374753,
    },
    {
      code: "A0397 / Aut Test Eng ARS-Ma / COP 13644557.1903381",
      value: 13644557.1903381,
    },
    {
      code: "A0375 / Test Leader ARS - Ex / COP 13733046.7415193",
      value: 13733046.7415193,
    },
    { code: "A1113 / SDET Pr / COP 13945102.8416422", value: 13945102.8416422 },
    { code: "A0387 / Test Engineer ARS-Ma / COP 14483040", value: 14483040 },
    {
      code: "A1106 / Software Test Ma / COP 14554194.3363606",
      value: 14554194.3363606,
    },
    {
      code: "A1134 / Hybrid Test Eng Sr / COP 15650357.2607535",
      value: 15650357.2607535,
    },
    {
      code: "A0363 / QA Manager ARS -  Pr / COP 16217571.6369009",
      value: 16217571.6369009,
    },
    {
      code: "A1124 / Performance Test Sr / COP 18058102.8338679",
      value: 18058102.8338679,
    },
    {
      code: "A0364 / QA Manager ARS -  Sr / COP 18974558.8151741",
      value: 18974558.8151741,
    },
    { code: "A1114 / SDET Sr / COP 19763688.2769009", value: 19763688.2769009 },
    {
      code: "A1135 / Hybrid Test Eng Ex / COP 20877967.8447767",
      value: 20877967.8447767,
    },
    {
      code: "A0365 / QA Manager ARS -  Ex / COP 22200233.8137536",
      value: 22200233.8137536,
    },
    { code: "A1115 / SDET Ex / COP 23914063.1923569", value: 23914063.1923569 },
    {
      code: "A1125 / Performance Test Ex / COP 24089960.6329507",
      value: 24089960.6329507,
    },
    {
      code: "A0366 / QA Manager ARS -  Ma / COP 25974273.5620918",
      value: 25974273.5620918,
    },
    { code: "A1116 / SDET Ma / COP 26305471.4879616", value: 26305471.4879616 },
    {
      code: "A1136 / Hybrid Test Eng Ma / COP 27851731.0541282",
      value: 27851731.0541282,
    },
    {
      code: "A1126 / Performance Test Ma / COP 32136609.733372",
      value: 32136609.733372,
    }
  ],
  "SALES PERFORMANCE": [
    { code: "A1051 / CC SUPPMBR BG / COP 2230000", value: 2230000 },
    { code: "A1071 / CC Teleoperador BG / COP 2235000", value: 2235000 },
    { code: "A1061 / CC Tramitador BG / COP 2246940", value: 2246940 },
    { code: "A1041 / CC ACAL BG / COP 2300000", value: 2300000 },
    { code: "A1031 / CC Analyst BG / COP 2400000", value: 2400000 },
    { code: "A1061 / CC Tramitador BG / COP 2400000", value: 2400000 },
    { code: "A1071 / CC Teleoperador BG / COP 2496600", value: 2496600 },
    { code: "A1052 / CC SUPPMBR JR / COP 2520000", value: 2520000 },
    {
      code: "A1062 / CC Tramitador JR / COP 2605940.45976",
      value: 2605940.45976,
    },
    {
      code: "A1072 / CC Teleoperador JR / COP 2688447.0184",
      value: 2688447.0184,
    },
    { code: "A1021 / CC Coordinador BG / COP 2720000", value: 2720000 },
    { code: "A1053 / CC SUPPMBR PR / COP 2744934.448", value: 2744934.448 },
    {
      code: "A1063 / CC Tramitador PR / COP 2763293.0756",
      value: 2763293.0756,
    },
    { code: "A1032 / CC Analyst JR / COP 2900000", value: 2900000 },
    {
      code: "A1074 / CC Teleoperador SR / COP 2945845.73712",
      value: 2945845.73712,
    },
    { code: "A1042 / CC ACAL JR / COP 3000000", value: 3000000 },
    { code: "A1091 / MKT Consultant BG / COP 3000000", value: 3000000 },
    {
      code: "A1073 / CC Teleoperador PR / COP 3102094.64552",
      value: 3102094.64552,
    },
    {
      code: "A1064 / CC Tramitador SR / COP 3107501.92275",
      value: 3107501.92275,
    },
    {
      code: "A1075 / CC Teleoperador EX / COP 3123722.6072",
      value: 3123722.6072,
    },
    { code: "A1022 / CC Coordinador JR / COP 3150000", value: 3150000 },
    { code: "A1043 / CC ACAL PR / COP 3200000", value: 3200000 },
    { code: "A1054 / CC SUPPMBR SR / COP 3258040.804", value: 3258040.804 },
    { code: "A1033 / CC Analyst PR / COP 3420000", value: 3420000 },
    {
      code: "A1062 / CC Tramitador JR / COP 3586753.1526",
      value: 3586753.1526,
    },
    {
      code: "A1072 / CC Teleoperador JR / COP 3586753.1526",
      value: 3586753.1526,
    },
    { code: "A1044 / CC ACAL SR / COP 3600111.708", value: 3600111.708 },
    { code: "A1055 / CC SUPPMBR EX / COP 3600111.708", value: 3600111.708 },
    { code: "A1063 / CC Tramitador PR / COP 3744900", value: 3744900 },
    {
      code: "A1065 / CC Tramitador EX / COP 3746746.9246",
      value: 3746746.9246,
    },
    { code: "A1011 / CC Leader BG / COP 3848297.67", value: 3848297.67 },
    { code: "A1034 / CC Analyst SR / COP 3848297.67", value: 3848297.67 },
    { code: "A1045 / CC ACAL EX / COP 3848297.67", value: 3848297.67 },
    { code: "A1092 / MKT Consultant JR / COP 3850000", value: 3850000 },
    { code: "A1023 / CC Coordinador PR / COP 4100000", value: 4100000 },
    { code: "A1035 / CC Analyst EX / COP 4104850.848", value: 4104850.848 },
    { code: "A1064 / CC Tramitador SR / COP 4119390", value: 4119390 },
    { code: "A1073 / CC Teleoperador PR / COP 4119390", value: 4119390 },
    { code: "A1041 / CC ACAL BG / COP 4369050", value: 4369050 },
    { code: "A1065 / CC Tramitador EX / COP 4493880", value: 4493880 },
    { code: "A1012 / CC Leader JR / COP 4500000", value: 4500000 },
    { code: "A1024 / CC Coordinador SR / COP 4500000", value: 4500000 },
    { code: "A1093 / MKT Consultant PR / COP 4911000", value: 4911000 },
    { code: "A1042 / CC ACAL JR / COP 4993200", value: 4993200 },
    { code: "A1074 / CC Teleoperador SR / COP 4993200", value: 4993200 },
    { code: "A1025 / CC Coordinador EX / COP 5100000", value: 5100000 },
    { code: "A1094 / MKT Consultant SR / COP 5613000", value: 5613000 },
    { code: "A1043 / CC ACAL PR / COP 5991840", value: 5991840 },
    { code: "A1011 / CC Leader BG / COP 6241500", value: 6241500 },
    { code: "A1013 / CC Leader PR / COP 6500000", value: 6500000 },
    { code: "A1044 / CC ACAL SR / COP 6865650", value: 6865650 },
    { code: "A1075 / CC Teleoperador EX / COP 6865650", value: 6865650 },
    { code: "A1051 / CC SUPPMBR BG / COP 7489800", value: 7489800 },
    { code: "A1012 / CC Leader JR / COP 7700000", value: 7700000 },
    { code: "A1045 / CC ACAL EX / COP 7800000", value: 7800000 },
    { code: "A1014 / CC Leader SR / COP 8450000", value: 8450000 },
    { code: "A1052 / CC SUPPMBR JR / COP 8738100", value: 8738100 },
    { code: "A1081 / MKT Leader BG / COP 9000000", value: 9000000 },
    { code: "A1013 / CC Leader PR / COP 9321900", value: 9321900 },
    { code: "A1095 / MKT Consultant EX / COP 9822000", value: 9822000 },
    { code: "A1053 / CC SUPPMBR PR / COP 9986400", value: 9986400 },
    { code: "A1082 / MKT Leader JR / COP 10261542", value: 10261542 },
    { code: "A1015 / CC Leader EX / COP 10500000", value: 10500000 },
    { code: "A1014 / CC Leader SR / COP 10700000", value: 10700000 },
    { code: "A1055 / CC SUPPMBR EX / COP 11234700", value: 11234700 },
    { code: "A1083 / MKT Leader PR / COP 11287696.2", value: 11287696.2 },
    { code: "A1054 / CC SUPPMBR SR / COP 11319450", value: 11319450 },
    { code: "A1084 / MKT Leader SR / COP 12313850.4", value: 12313850.4 },
    { code: "A1085 / MKT Leader EX / COP 14050000", value: 14050000 },
    { code: "A1015 / CC Leader EX / COP 22100000", value: 22100000 }
  ]
};

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatInputValue(input) {
  var value = input.value.replace(/\./g, "").replace(/,/g, ".");
  input.value = formatNumber(value);
}


function calculateCost() {
  var salaryInput = document.getElementById("salary");
  var bonusesInput = document.getElementById("bonuses");
  var subcontractorInput = document.getElementById("subcontractor");
  var salary = parseFloat(salaryInput.value.replace(/\./g, ""));
  var bonuses = parseFloat(bonusesInput.value.replace(/\./g, "")) || 0;
  var isSubcontractor = document.getElementById("toggle-contrato").checked;
  var connectivityBonus = document.getElementById("connectivity-bonus").checked;
  var suraPolicy = document.getElementById("sura-policy").checked;
  var sanitas = document.getElementById("sanitas").checked;
  var lifeInsurance = document.getElementById("life-insurance").checked;
  var result = document.getElementById("result");

  var smmlv = 1423500; // Salario mínimo
  var transportAllowance = 200000; // Auxilio de transporte

  if (isSubcontractor) {
    // Si es Subcontractor, el costo es el valor ingresado en el input de subcontractor
    var cost = parseFloat(subcontractorInput.value.replace(/\./g, ""));
    var departmentSelect = document.getElementById("department");
    var selectedDepartment = departmentSelect.value;
    var departmentATs = atCodes[selectedDepartment];

    if (departmentATs && departmentATs.length > 0) {
      var nextAT = null;
      for (var i = 0; i < departmentATs.length; i++) {
        if (departmentATs[i].value > cost) {
          nextAT = departmentATs[i].code;
          break;
        }
      }
      if (nextAT) {
        fetch("https://www.datos.gov.co/resource/32sa-8pi3.json")
          .then((response) => response.json())
          .then((data) => {
            var exchangeRate = parseFloat(data[0].valor); // Obtener la tasa de cambio actual
            // Encontrar el valor asociado al código de AT encontrado
            var atValue = departmentATs.find((at) => at.code === nextAT).value;
            var costInUSD = (atValue / exchangeRate).toFixed(2); // Calcular en dólares usando el valor del AT

            result.innerHTML = `El costo total del subcontractor es: $${formatNumber(
              cost
            )}. <br> <br>
				AT para ${selectedDepartment}: ${nextAT}. USD $${costInUSD}.`;
          })
          .catch((error) => {
            console.error("Error al obtener la tasa de cambio:", error);
            result.innerHTML = `El costo total del subcontractor es: $${formatNumber(
              cost
            )}. <br> <br>
				AT para ${selectedDepartment}: ${nextAT}. No se pudo calcular el equivalente en dólares.`;
          });
      } else {
        result.innerHTML = `El costo total del subcontractor es: $${formatNumber(
          cost
        )}. No se encontró un AT adecuado para la práctica ${selectedDepartment}.`;
      }

      var formattedCost = formatNumber(cost).replace(/\./g, "");
      document.getElementById("amount").value = formattedCost;
    }
  } else {
    // Si no es Subcontractor, calcular el costo como lo hacías antes
    var cost = 0;
    var integral = document.getElementById("integral").checked;

    if (integral && salary <= 18505499) {
      result.innerHTML =
        "El salario debe ser superior a $18.505.499 para el régimen integral.";
      return;
    }

    var maxBonuses = salary * 0.4;
    if (bonuses > maxBonuses) {
      result.innerHTML =
        "Los auxilios no pueden superar el 40% del salario prestacional, es decir: " +
        formatNumber(maxBonuses);
      return;
    }

    if (integral) {
      cost = Math.ceil(salary * 1.27135 + bonuses);
    } else if (salary < 2 * smmlv) {
      cost = Math.ceil(salary * 1.40308 + transportAllowance + 45000 + bonuses);
    } else if (salary + bonuses < 10 * smmlv) {
      cost = Math.ceil(salary * 1.40308 + bonuses);
    } else {
      cost = Math.ceil(salary * 1.53808 + bonuses);
    }

    if (connectivityBonus) cost += 72000;
    if (suraPolicy) cost += 339291;
    if (sanitas) cost += 316400;
    if (lifeInsurance) cost += 24111;

    var departmentSelect = document.getElementById("department");
    var selectedDepartment = departmentSelect.value;
    var departmentATs = atCodes[selectedDepartment];

    if (departmentATs && departmentATs.length > 0) {
      var nextAT = null;
      for (var i = 0; i < departmentATs.length; i++) {
        if (departmentATs[i].value > cost) {
          nextAT = departmentATs[i].code;
          break;
        }
      }
      if (nextAT) {
        fetch("https://www.datos.gov.co/resource/32sa-8pi3.json")
          .then((response) => response.json())
          .then((data) => {
            var exchangeRate = parseFloat(data[0].valor); // Obtener la tasa de cambio actual
            // Encontrar el valor asociado al código de AT encontrado
            var atValue = departmentATs.find((at) => at.code === nextAT).value;
            var costInUSD = (atValue / exchangeRate).toFixed(2); // Calcular en dólares usando el valor del AT

            result.innerHTML = `El costo total del empleado es: $${formatNumber(
              cost
            )}. <br> <br>
				AT para ${selectedDepartment}: ${nextAT}. USD $${costInUSD}.`;
          })
          .catch((error) => {
            console.error("Error al obtener la tasa de cambio:", error);
            result.innerHTML = `El costo total del empleado es: $${formatNumber(
              cost
            )}. <br> <br>
			 AT para ${selectedDepartment}: ${nextAT}. No se pudo calcular el equivalente en dólares.`;
          });
      } else {
        result.innerHTML = `El costo total del empleado es: $${formatNumber(
          cost
        )}. No se encontró un AT adecuado para la práctica ${selectedDepartment}.`;
      }

      var formattedCost = formatNumber(cost).replace(/\./g, "");
      document.getElementById("amount").value = formattedCost;
    }
  }
}


async function convertCurrency() {
  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const dateInput = document.getElementById("conversionDate");
  const resultDiv = document.getElementById("conversionResult");

  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const selectedDate = dateInput.value; // Formato: YYYY-MM-DD

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerHTML = "Por favor, ingrese un monto válido.";
    return;
  }

  if (fromCurrency === toCurrency) {
    resultDiv.innerHTML = `1 ${fromCurrency} equivale a 1 ${toCurrency}. No se requiere conversión.`;
    return;
  }

  try {
    let trm;

    // Si se selecciona una fecha, obtenemos la TRM de esa fecha usando la nueva API
    if (selectedDate) {
      const apiUrl = `https://trm-colombia.vercel.app/?date=${selectedDate}`;

      const response = await fetch(apiUrl);
      if (!response.ok)
        throw new Error("Error al obtener la TRM de la fecha seleccionada.");

      const data = await response.json();
      if (!data.data || !data.data.success)
        throw new Error("No se encontró la TRM para esta fecha.");

      trm = data.data.value;
    } else {
      // Si no se selecciona una fecha, obtenemos la TRM más reciente usando la otra API
      const apiUrl = "https://www.datos.gov.co/resource/32sa-8pi3.json";
      const appToken = "aaCaSz115wkOf48f1Rr0YB6mC";

      const response = await fetch(apiUrl, {
        headers: {
          "X-App-Token": appToken, // Incluir el token en los encabezados
        },
      });

      if (!response.ok)
        throw new Error("Error al obtener la TRM más reciente.");

      const data = await response.json();
      if (!data || data.length === 0)
        throw new Error("No se encontraron datos de la TRM.");

      trm = parseFloat(data[0].valor);
    }

    if (isNaN(trm)) throw new Error("La TRM obtenida no es válida.");

    let convertedAmount;
    if (fromCurrency === "COP" && toCurrency === "USD") {
      convertedAmount = amount / trm; // Convertir de COP a USD
    } else if (fromCurrency === "USD" && toCurrency === "COP") {
      convertedAmount = amount * trm; // Convertir de USD a COP
    } else {
      throw new Error("Conversión no soportada.");
    }

    const formattedAmount = convertedAmount.toLocaleString("es", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedInput = amount.toLocaleString("es", {
    });

    resultDiv.innerHTML = `${formattedInput} ${fromCurrency} equivale a ${formattedAmount} ${toCurrency} (TRM: ${trm.toLocaleString(
      "es"
    )} COP/USD)`;
  } catch (error) {
    console.error("Error al realizar la conversión:", error);
    resultDiv.innerHTML =
      "Error al obtener la tasa de cambio. Por favor, intente más tarde.";
  }
}

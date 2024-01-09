// Define un objeto JSON con los códigos de AT y sus valores
var atCodes = {
  "AMS GDC": [
    { code: "A0681 / Support Engineer -  Bg / COP 2273582.. / USD 568.396", value: 2523676 },
	{ code: "A0682 / Support Engineer -  Jr / COP 3031448.. / USD 757.862", value: 3364907 },
	{ code: "A0610 / Support Engineer ARS - WEB Tr / COP 3221283.. / USD 805.321", value: 3575624 },
	{ code: "A0600 / Support Engineer ARS - Mainframe Tr / COP 3271094.. / USD 817.774", value: 3630914 },
	{ code: "A0431 / Support Engineer ARS - Client Server - Oracle Tr / COP 3314891.. / USD 828.723", value: 3679529 },
	{ code: "A0400 / System Analyst ARS -  Tr / COP 3356294.. / USD 839.074", value: 3725487 },
	{ code: "A0641 / Functional Consultant -  Bg / COP 3536730.. / USD 884.183", value: 3925770 },
	{ code: "A0661 / Software Engineer -  Bg / COP 3536730.. / USD 884.183", value: 3925770 },
	{ code: "A0671 / Soft Eng Sys Admin -  Bg / COP 4016698.. / USD 1004.175", value: 4458535 },
	{ code: "A0940 / System Engineer Tr / COP 4372520.. / USD 1093.13", value: 4853497 },
	{ code: "A0620 / Process Quality Leader RD -  Tr / COP 4399372.. / USD 1099.843", value: 4883303 },
	{ code: "A0683 / Support Engineer -  Pr / COP 4420880.. / USD 1105.22", value: 4907177 },
	{ code: "A0611 / Support Engineer ARS - WEB Bg / COP 4450809.. / USD 1112.702", value: 4940398 },
	{ code: "A0401 / System Analyst ARS -  Bg / COP 4642671.. / USD 1160.668", value: 5153365 },
	{ code: "A0920 / Practice Specialist Tr / COP 4964453.. / USD 1241.113", value: 5510543 },
	{ code: "A0930 / Technical Consultant Tr / COP 5004358.. / USD 1251.09", value: 5554837 },
	{ code: "A0691 / Tech-Func Lead  Bg / COP 5052443.. / USD 1263.111", value: 5608211 },
	{ code: "A0651 / Functional ESP- Bg / COP 5052453.. / USD 1263.113", value: 5608223 },
	{ code: "A0662 / Software Engineer -  JR / COP 5683985.. / USD 1420.996", value: 6309224 },
	{ code: "A0684 / Support Engineer -   Sr / COP 5683985.. / USD 1420.996", value: 6309224 },
	{ code: "A0642 / Functional Consultant -  Jr / COP 5936593.. / USD 1484.148", value: 6589618 },
	{ code: "A0432 / Support Engineer ARS - Client Server - Oracle Bg / COP 5956436.. / USD 1489.109", value: 6611644 },
	{ code: "A0612 / Support Engineer ARS - WEB Jr / COP 6072962.. / USD 1518.241", value: 6740987 },
	{ code: "A0402 / System Analyst ARS -  Jr / COP 6154996.. / USD 1538.749", value: 6832045 },
	{ code: "A0621 / Process Quality Leader RD -  Bg / COP 6319085.. / USD 1579.771", value: 7014184 },
	{ code: "A0941 / System Engineer Bg / COP 6562512.. / USD 1640.628", value: 7284389 },
	{ code: "A0931 / Technical Consultant Bg / COP 6773418.. / USD 1693.355", value: 7518494 },
	{ code: "A0601 / Support Engineer ARS - Mainframe Bg / COP 6919684.. / USD 1729.921", value: 7680849 },
	{ code: "A0685 / Support Engineer -   Ex / COP 6947133.. / USD 1736.783", value: 7711318 },
	{ code: "A0672 / Soft Eng Sys Admin -  Jr / COP 7163089.. / USD 1790.772", value: 7951029 },
	{ code: "A0921 / Practice Specialist Bg / COP 7281199.. / USD 1820.3", value: 8082131 },
	{ code: "A0421 / Service Manager ARS -  Bg / COP 7498180.. / USD 1874.545", value: 8322980 },
	{ code: "A0403 / System Analyst ARS -  Pr / COP 7587019.. / USD 1896.755", value: 8421591 },
	{ code: "A0622 / Process Quality Leader RD -  Jr / COP 7659017.. / USD 1914.754", value: 8501509 },
	{ code: "A0613 / Support Engineer ARS - WEB Pr / COP 7823235.. / USD 1955.809", value: 8683791 },
	{ code: "A0433 / Support Engineer ARS - Client Server - Oracle Jr / COP 7905848.. / USD 1976.462", value: 8775491 },
	{ code: "A0692 / Tech-Func Lead  Jr / COP 8210218.. / USD 2052.555", value: 9113342 },
	{ code: "A0942 / System Engineer Jr / COP 8802296.. / USD 2200.574", value: 9770549 },
	{ code: "A0404 / System Analyst ARS -  Sr / COP 8873803.. / USD 2218.451", value: 9813001 },
	{ code: "A0932 / Technical Consultant Jr / COP 8889936.. / USD 2222.484", value: 9849921 },
	{ code: "A0623 / Process Quality Leader RD -  Pr / COP 9257548.. / USD 2314.387", value: 9867829 },
	{ code: "A0422 / Service Manager ARS -  Jr / COP 9576613.. / USD 2394.153", value: 10151209 },
	{ code: "A0434 / Support Engineer ARS - Client Server - Oracle Pr / COP 9641145.. / USD 2410.286", value: 10219614 },
	{ code: "A0673 / Soft Eng Sys Admin -  Pr / COP 9681747.. / USD 2420.437", value: 10262651 },
	{ code: "A0663 / Software Engineer -  Pr / COP 9852278.. / USD 2463.07", value: 10443414 },
	{ code: "A0614 / Support Engineer ARS - WEB Sr / COP 9975721.. / USD 2493.93", value: 10574264 },
	{ code: "A0922 / Practice Specialist Jr / COP 10033942.. / USD 2508.486", value: 10635978 },
	{ code: "A0643 / Functional Consultant -  Pr / COP 10357516.. / USD 2589.379", value: 10978967 },
	{ code: "A0652 / Functional ESP- Jr / COP 10736430.. / USD 2684.108", value: 11380615 },
	{ code: "A0405 / System Analyst ARS -  Ex / COP 10910491.. / USD 2727.623", value: 11565120 },
	{ code: "A0943 / System Engineer Pr / COP 11035831.. / USD 2758.958", value: 11697981 },
	{ code: "A0933 / Technical Consultant Pr / COP 11145660.. / USD 2786.415", value: 11814399 },
	{ code: "A0602 / Support Engineer ARS - Mainframe Jr / COP 11235503.. / USD 2808.876", value: 11909633 },
	{ code: "A0423 / Service Manager ARS -  Pr / COP 11333734.. / USD 2833.434", value: 12013758 },
	{ code: "A0693 / Tech-Func Lead  Pr / COP 11567118.. / USD 2891.78", value: 12261145 },
	{ code: "A0435 / Support Engineer ARS - Client Server - Oracle Sr / COP 11597742.. / USD 2899.436", value: 12293606 },
	{ code: "A0624 / Process Quality Leader RD -  Sr / COP 11642636.. / USD 2910.659", value: 12341194 },
	{ code: "A0664 / Software Engineer -  Sr / COP 12175922.. / USD 3043.981", value: 12906477 },
	{ code: "A0615 / Support Engineer ARS - WEB Ex / COP 12489255.. / USD 3122.314", value: 13238610 },
	{ code: "A0923 / Practice Specialist Pr / COP 12681133.. / USD 3170.283", value: 13442001 },
	{ code: "A0424 / Service Manager ARS -  Sr / COP 13134831.. / USD 3283.708", value: 13922921 },
	{ code: "A0944 / System Engineer Sr / COP 13142153.. / USD 3285.538", value: 13930683 },
	{ code: "A0934 / Technical Consultant Sr / COP 13272960.. / USD 3318.24", value: 14069338 },
	{ code: "A0406 / System Analyst ARS -  Ma / COP 13633100.. / USD 3408.275", value: 14451086 },
	{ code: "A0625 / Process Quality Leader RD -  Ex / COP 13683530.. / USD 3420.883", value: 14504542 },
	{ code: "A0653 / Functional ESP- Pr / COP 14002323.. / USD 3500.581", value: 14842463 },
	{ code: "A0674 / Soft Eng Sys Admin -  Sr / COP 14063202.. / USD 3515.801", value: 14906994 },
	{ code: "A0644 / Functional Consultant -  Sr / COP 14611098.. / USD 3652.775", value: 15487764 },
	{ code: "A0436 / Support Engineer ARS - Client Server - Oracle Ex / COP 14932689.. / USD 3733.172", value: 15828650 },
	{ code: "A0694 / Tech-Func Lead  Sr / COP 15219903.. / USD 3804.976", value: 16133098 },
	{ code: "A0626 / Process Quality Leader RD -  Ma / COP 15755561.. / USD 3938.89", value: 16700894 },
	{ code: "A0924 / Practice Specialist Sr / COP 15820460.. / USD 3955.115", value: 16769687 },
	{ code: "A0616 / Support Engineer ARS - WEB Ma / COP 15866187.. / USD 3966.547", value: 16818158 },
	{ code: "A0665 / Software Engineer -  Ex / COP 15899816.. / USD 3974.954", value: 16853804 },
	{ code: "A0954 / Service Director Sr / COP 15938879.. / USD 3984.72", value: 16895212 },
	{ code: "A0945 / System Engineer Ex / COP 16109225.. / USD 4027.306", value: 17075778 },
	{ code: "A0425 / Service Manager ARS -  Ex / COP 16167284.. / USD 4041.821", value: 17137321 },
	{ code: "A0935 / Technical Consultant Ex / COP 16269566.. / USD 4067.392", value: 17245740 },
	{ code: "A0695 / Tech-Func Lead  Ex / COP 17666467.. / USD 4416.617", value: 18726455 },
	{ code: "A0645 / Functional Consultant -  Ex / COP 18255370.. / USD 4563.843", value: 19350693 },
	{ code: "A0675 / Soft Eng Sys Admin -  Ex / COP 18549812.. / USD 4637.453", value: 19662800 },
	{ code: "A0437 / Support Engineer ARS - Client Server - Oracle Ma / COP 18701350.. / USD 4675.338", value: 19823431 },
	{ code: "A0654 / Functional ESP- Sr / COP 19023683.. / USD 4755.921", value: 20165104 },
	{ code: "A0946 / System Engineer Ma / COP 19140228.. / USD 4785.057", value: 20288641 },
	{ code: "A0955 / Service Director Ex / COP 19185476.. / USD 4796.369", value: 20336604 },
	{ code: "A0936 / Technical Consultant Ma / COP 19330757.. / USD 4832.689", value: 20490602 },
	{ code: "A0925 / Practice Specialist Ex / COP 19860829.. / USD 4965.207", value: 21052478 },
	{ code: "A0603 / Support Engineer ARS - Mainframe Pr / COP 20344219.. / USD 5086.055", value: 21564872 },
	{ code: "A0426 / Service Manager ARS -  Ma / COP 20361353.. / USD 5090.338", value: 21583035 },
	{ code: "A0604 / Support Engineer ARS - Mainframe Sr / COP 22213688.. / USD 5553.422", value: 23546509 },
	{ code: "A0655 / Functional ESP- Ex / COP 22213688.. / USD 5553.422", value: 23546509 },
	{ code: "A0956 / Service Director Ma / COP 23330627.. / USD 5832.657", value: 24730464 },
	{ code: "A0926 / Practice Specialist Ma / COP 24151801.. / USD 6037.95", value: 25600909 },
	{ code: "A0605 / Support Engineer ARS - Mainframe Ex / COP 27365723.. / USD 6841.431", value: 29007667 },
	{ code: "A0606 / Support Engineer ARS - Mainframe Ma / COP 31890938.. / USD 7972.735", value: 33804394 }
  ],
  "APP DEV GDC": [
	{ code: "A0451 / Proc Qty Lead DD Bg / COP 4399372.. / USD 1099.843", value: 4645737 },
	{ code: "A0131 / Te Lead ARS-Mainf Bg / COP 5892597.. / USD 1473.149", value: 6222582 },
	{ code: "A0111 / Tech Lead ARS-Web Bg / COP 7091902.. / USD 1772.976", value: 7489049 },
	{ code: "A0132 / Te Lead ARS-Mainf Jr / COP 7595016.. / USD 1898.754", value: 8020337 },
	{ code: "A0452 / Proc Qty Lead DD Jr / COP 7659017.. / USD 1914.754", value: 8087922 },
	{ code: "A0121 / Tech Lead ARS-C S Bg / COP 7801092.. / USD 1950.273", value: 8237954 },
	{ code: "A1212 / Soft Eng-Web Spec Jr / COP 8785080.. / USD 2196.27", value: 9277044 },
	{ code: "A0112 / Tech Lead ARS-Web Jr / COP 8793959.. / USD 2198.49", value: 9286420 },
	{ code: "A0453 / Proc Qty Lead DD Pr / COP 9257548.. / USD 2314.387", value: 9775971 },
	{ code: "A0122 / Tech Lead ARS-C S Jr / COP 9673355.. / USD 2418.339", value: 10215063 },
	{ code: "A0133 / Te Lead ARS-Mainf Pr / COP 10554406.. / USD 2638.602", value: 11145453 },
	{ code: "A0454 / Proc Qty Lead DD Sr / COP 11642636.. / USD 2910.659", value: 12294624 },
	{ code: "A0113 / Tech Lead ARS-Web Pr / COP 11880629.. / USD 2970.157", value: 12545944 },
	{ code: "A0123 / Tech Lead ARS-C S Pr / COP 11904420.. / USD 2976.105", value: 12571068 },
	{ code: "A1213 / Soft Eng-Web Spec Pr / COP 12445530.. / USD 3111.383", value: 13142480 },
	{ code: "A0114 / Tech Lead ARS-Web Sr / COP 13521591.. / USD 3380.398", value: 14278800 },
	{ code: "A0455 / Proc Qty Lead DD Ex / COP 13683530.. / USD 3420.883", value: 14449808 },
	{ code: "A0134 / Te Lead ARS-Mainf Sr / COP 14449894.. / USD 3612.474", value: 15259088 },
	{ code: "A0124 / Tech Lead ARS-C S Sr / COP 15172300.. / USD 3793.075", value: 16021949 },
	{ code: "A1214 / Soft Eng-Web Spec Sr / COP 16472025.. / USD 4118.006", value: 17394458 },
	{ code: "A0115 / Tech Lead ARS-Web Ex / COP 17864908.. / USD 4466.227", value: 18865343 },
	{ code: "A0135 / Te Lead ARS-Mainf Ex / COP 18335618.. / USD 4583.905", value: 19362413 },
	{ code: "A0125 / Tech Lead ARS-C S Ex / COP 19840700.. / USD 4960.175", value: 20951779 },
	{ code: "A1215 / Soft Eng-Web Spec Ex / COP 21596655.. / USD 5399.164", value: 22806068 }
  ],
  "DIGITAL GDC": [
    { code: "A0750 / Digital Designer Tr / COP 2961614.. / USD 740.404", value: 3127465 },
	{ code: "A0760 / Digital Developer Tr / COP 3188147.. / USD 797.037", value: 3366683 },
	{ code: "A0761 / Digital Developer Bg / COP 3887984.. / USD 971.996", value: 4105711 },
	{ code: "A0751 / Digital Designer Bg / COP 4679351.. / USD 1169.838", value: 4941394 },
	{ code: "A0762 / Digital Developer Jr / COP 5499977.. / USD 1374.994", value: 5807976 },
	{ code: "A0801 / Digital Analyst Bg / COP 5548687.. / USD 1387.172", value: 5859413 },
	{ code: "A0752 / Digital Designer Jr / COP 6360695.. / USD 1590.174", value: 6716894 },
	{ code: "A0802 / Digital Analyst Jr / COP 7376447.. / USD 1844.112", value: 7789528 },
	{ code: "A0832 / Digital Manager Jr / COP 8063600.. / USD 2015.9", value: 8515162 },
	{ code: "A0772 / Digital Engineer Jr / COP 8488000.. / USD 2122.", value: 8963328 },
	{ code: "A0753 / Digital Designer Pr / COP 8673675.. / USD 2168.419", value: 9159401 },
	{ code: "A0803 / Digital Analyst Pr / COP 8995667.. / USD 2248.917", value: 9499425 },
	{ code: "A0822 / Digital Leader Jr / COP 9166373.. / USD 2291.593", value: 9679689 },
	{ code: "A0763 / Digital Developer Pr / COP 10207956.. / USD 2551.989", value: 10779602 },
	{ code: "A0804 / Digital Analyst Sr / COP 12203207.. / USD 3050.802", value: 12886587 },
	{ code: "A0782 / DigitalSpecialist Jr / COP 12444847.. / USD 3111.212", value: 13141759 },
	{ code: "A0754 / Digital Designer Sr / COP 12721390.. / USD 3180.348", value: 13433788 },
	{ code: "A0792 / Digital Architect Jr / COP 12929717.. / USD 3232.429", value: 13653782 },
	{ code: "A0833 / Digital Manager Pr / COP 13122448.. / USD 3280.612", value: 13857305 },
	{ code: "A0823 / Digital Leader Pr / COP 13398011.. / USD 3349.503", value: 14148300 },
	{ code: "A0755 / Digital Designer Ex / COP 14610041.. / USD 3652.51", value: 15685824 },
	{ code: "A0773 / Digital Engineer Pr / COP 14854000.. / USD 3713.5", value: 15833444 },
	{ code: "A0783 / DigitalSpecialist Pr / COP 14993792.. / USD 3748.448", value: 15869902 },
	{ code: "A0764 / Digital Developer Sr / COP 15028316.. / USD 3757.079", value: 16389221 },
	{ code: "A0805 / Digital Analyst Ex / COP 17134980.. / USD 4283.745", value: 18094539 },
	{ code: "A0784 / DigitalSpecialist Sr / COP 18064809.. / USD 4516.202", value: 19076439 },
	{ code: "A0834 / Digital Manager Sr / COP 18227980.. / USD 4556.995", value: 19248747 },
	{ code: "A0793 / Digital Architect Pr / COP 18463522.. / USD 4615.881", value: 19497479 },
	{ code: "A0824 / Digital Leader Sr / COP 19582835.. / USD 4895.709", value: 20679473 },
	{ code: "A0774 / Digital Engineer Sr / COP 20159000.. / USD 5039.75", value: 21287904 },
	{ code: "A0765 / Digital Developer Ex / COP 21204303.. / USD 5301.076", value: 22391744 },
	{ code: "A0835 / Digital Manager Ex / COP 21470396.. / USD 5367.599", value: 22672738 },
	{ code: "A0785 / DigitalSpecialist Ex / COP 21764831.. / USD 5441.208", value: 22983661 },
	{ code: "A0825 / Digital Leader Ex / COP 22520260.. / USD 5630.065", value: 23781394 },
	{ code: "A0775 / Digital Engineer Ex / COP 23342000.. / USD 5835.5", value: 24649152 },
	{ code: "A0794 / Digital Architect Sr / COP 23598338.. / USD 5899.585", value: 24919845 },
	{ code: "A0795 / Digital Architect Ex / COP 28572942.. / USD 7143.236", value: 30173027 }
  ],
  "ERP GDC": [
    { code: "A0311 / Soft Eng Sys ERP Bg / COP 3630000.. / USD 907.5", value: 4025000 },
	{ code: "A0322 / Soft Eng ARS-ERP Bg / COP 3630000.. / USD 907.5", value: 4025000 },
	{ code: "A0441 / Func Cons ARS-ERP Bg / COP 3630000.. / USD 907.5", value: 4312500 },
	{ code: "A0161 / Soft Eng BI - ERP Bg / COP 4658500.. / USD 1164.625", value: 4312500 },
	{ code: "A0051 / Tech-Func LeadERP Bg / COP 5445000.. / USD 1361.25", value: 5750000 },
	{ code: "A0323 / Soft Eng ARS-ERP Jr / COP 6957501.. / USD 1739.375", value: 6900001 },
	{ code: "A0312 / Soft Eng Sys ERP Jr / COP 7260001.. / USD 1815.", value: 6900001 },
	{ code: "A0442 / Func Cons ARS-ERP Jr / COP 7562501.. / USD 1890.625", value: 7187500 },
	{ code: "A0011 / Proj Manager ERP Bg / COP 7683500.. / USD 1920.875", value: 8050001 },
	{ code: "A0162 / Soft Eng BI - ERP Jr / COP 8167501.. / USD 2041.875", value: 8050001 },
	{ code: "A0052 / Tech-Func LeadERP Jr / COP 9377501.. / USD 2344.375", value: 9027500 },
	{ code: "A0041 / Proj Director ERP Bg / COP 9498500.. / USD 2374.625", value: 9487501 },
	{ code: "A0012 / Proj Manager ERP Jr / COP 11616001.. / USD 2904.", value: 11500001 },
	{ code: "A0324 / Soft Eng ARS-ERP Pr / COP 12705001.. / USD 3176.25", value: 12362501 },
	{ code: "A0313 / Soft Eng Sys ERP Pr / COP 13007501.. / USD 3251.875", value: 12362501 },
	{ code: "A0042 / Proj Director ERP Jr / COP 13310001.. / USD 3327.5", value: 12765001 },
	{ code: "A0443 / Func Cons ARS-ERP Pr / COP 13612501.. / USD 3403.125", value: 13225001 },
	{ code: "A0163 / Soft Eng BI - ERP Pr / COP 14520001.. / USD 3630.", value: 13225001 },
	{ code: "A0053 / Tech-Func LeadERP Pr / COP 15125001.. / USD 3781.25", value: 14950001 },
	{ code: "A0013 / Proj Manager ERP Pr / COP 15730001.. / USD 3932.5", value: 16675001 },
	{ code: "A0043 / Proj Director ERP Pr / COP 17726501.. / USD 4431.625", value: 18400001 },
	{ code: "A0314 / Soft Eng Sys ERP Sr / COP 20267501.. / USD 5066.875", value: 20125001 },
	{ code: "A0325 / Soft Eng ARS-ERP Sr / COP 20267501.. / USD 5066.875", value: 20125001 },
	{ code: "A0444 / Func Cons ARS-ERP Sr / COP 21175001.. / USD 5293.75", value: 21850001 },
	{ code: "A0164 / Soft Eng BI - ERP Sr / COP 21780001.. / USD 5445.", value: 21850001 },
	{ code: "A0014 / Proj Manager ERP Sr / COP 22687501.. / USD 5671.875", value: 23000001 },
	{ code: "A0054 / Tech-Func LeadERP Sr / COP 22990001.. / USD 5747.5", value: 23575001 },
	{ code: "A0044 / Proj Director ERP Sr / COP 24200001.. / USD 6050.", value: 25300001 },
	{ code: "A0315 / Soft Eng Sys ERP Ex / COP 25410001.. / USD 6352.5", value: 25875001 },
	{ code: "A0326 / Soft Eng ARS-ERP Ex / COP 25410001.. / USD 6352.5", value: 25875001 },
	{ code: "A0165 / Soft Eng BI - ERP Ex / COP 26620001.. / USD 6655.", value: 28750001 },
	{ code: "A0445 / Func Cons ARS-ERP Ex / COP 26922501.. / USD 6730.625", value: 28750001 },
	{ code: "A0015 / Proj Manager ERP Ex / COP 28132501.. / USD 7033.125", value: 28750001 },
	{ code: "A0316 / Soft Eng Sys ERP Ma / COP 28435001.. / USD 7108.75", value: 29325001 },
	{ code: "A0055 / Tech-Func LeadERP Ex / COP 29040001.. / USD 7260.", value: 29325001 },
	{ code: "A0327 / Soft Eng ARS-ERP Ma / COP 29040001.. / USD 7260.", value: 29900001 },
	{ code: "A0045 / Proj Director ERP Ex / COP 29342501.. / USD 7335.625", value: 30475001 },
	{ code: "A0166 / Soft Eng BI - ERP Ma / COP 30250001.. / USD 7562.5", value: 32200001 },
	{ code: "A0056 / Tech-Func LeadERP Ma / COP 31460001.. / USD 7865.", value: 32200001 },
	{ code: "A0016 / Proj Manager ERP Ma / COP 32065001.. / USD 8016.25", value: 32775001 },
	{ code: "A0046 / Proj Director ERP Ma / COP 32065001.. / USD 8016.25", value: 33350001 },
	{ code: "A0446 / Func Cons ARS-ERP Ma / COP 32367501.. / USD 8091.875", value: 34500001 }
  ],
  "GDC Infosec": [
    { code: "A0520 / Security Tester -  Tr / COP 7463526.. / USD 1865.882", value: 4800000 },
	{ code: "A0540 / Security Engineer -  Tr / COP 7463526.. / USD 1865.882", value: 6000000 },
	{ code: "A0521 / Security Tester -  Bg / COP 8458481.. / USD 2114.62", value: 6500000 },
	{ code: "A0530 / Security IT Auditor -  Tr / COP 8458481.. / USD 2114.62", value: 7500000 },
	{ code: "A0541 / Security Engineer -  Bg / COP 8458481.. / USD 2114.62", value: 8500000 },
	{ code: "A0550 / InfoSec Manager -  Tr / COP 8458481.. / USD 2114.62", value: 8932156 },
	{ code: "A0522 / Security Tester -  JR / COP 9871869.. / USD 2467.967", value: 8932156 },
	{ code: "A0531 / Security IT Auditor -  Bg / COP 9871869.. / USD 2467.967", value: 9000000 },
	{ code: "A0542 / Security Engineer -  JR / COP 9871869.. / USD 2467.967", value: 10424694 },
	{ code: "A0551 / InfoSec Manager -  Bg / COP 9871869.. / USD 2467.967", value: 10424694 },
	{ code: "A0523 / Security Tester -  Pr / COP 10985601.. / USD 2746.4", value: 10500000 },
	{ code: "A0543 / Security Engineer -  Pr / COP 10985601.. / USD 2746.4", value: 11500000 },
	{ code: "A0532 / Security IT Auditor -  JR / COP 11553452.. / USD 2888.363", value: 12200445 },
	{ code: "A0552 / InfoSec Manager -  JR / COP 11553452.. / USD 2888.363", value: 12200445 },
	{ code: "A0524 / Security Tester -  Sr / COP 11991732.. / USD 2997.933", value: 13000000 },
	{ code: "A0544 / Security Engineer -  Sr / COP 11991732.. / USD 2997.933", value: 13000000 },
	{ code: "A0525 / Security Tester -  Ex / COP 13134855.. / USD 3283.714", value: 13870407 },
	{ code: "A0533 / Security IT Auditor -  Pr / COP 13134855.. / USD 3283.714", value: 13870407 },
	{ code: "A0545 / Security Engineer -  Ex / COP 13134855.. / USD 3283.714", value: 15000000 },
	{ code: "A0553 / InfoSec Manager -  Pr / COP 13134855.. / USD 3283.714", value: 15000000 },
	{ code: "A0526 / Security Tester -  Ma / COP 14169742.. / USD 3542.436", value: 17000000 },
	{ code: "A0546 / Security Engineer -  Ma / COP 14169742.. / USD 3542.436", value: 17958397 },
	{ code: "A0534 / Security IT Auditor -  Sr / COP 17006058.. / USD 4251.515", value: 17958397 },
	{ code: "A0554 / InfoSec Manager -  Sr / COP 17006058.. / USD 4251.515", value: 18000000 },
	{ code: "A0535 / Security IT Auditor -  Ex / COP 20200000.. / USD 5050.", value: 21331200 },
	{ code: "A0555 / InfoSec Manager -  Ex / COP 20200000.. / USD 5050.", value: 21331200 },
	{ code: "A0536 / Security IT Auditor -  Ma / COP 24885000.. / USD 6221.25", value: 26278560 },
	{ code: "A0556 / InfoSec Manager -  Ma / COP 24885000.. / USD 6221.25", value: 26278560 }
  ],
  "ITIS GDC": [
    { code: "A0471 / Help D-ITIS-S Sup Tr / COP 2.126.577 / USD 532", value: 2126577 },
	{ code: "A0481 / Sup Eng-ITIS Desk Bg / COP 2.533.504 / USD 633", value: 2533504 },
	{ code: "A0472 / Help D-ITIS-S Sup Bg / COP 2.920.488 / USD 730", value: 2920488 },
	{ code: "A0851 / ITIS Data Center Facilities Bg / COP 3.300.000 / USD 825", value: 3300000 },
	{ code: "A0340 / DBA ARS Tr / COP 3.427.682 / USD 857", value: 3427682 },
	{ code: "A0510 / Sup Eng-ITIS Telc Tr  / COP 3.434.889 / USD 859", value: 3434889 },
	{ code: "A0482 / Sup Eng-ITIS Desk Jr / COP 3.522.519 / USD 881", value: 3522519 },
	{ code: "A1190 / Storage Tr / COP 3.850.000 / USD 963", value: 3850000 },
	{ code: "A0490 / S Eng-ITIS Server Tr / COP 3.892.514 / USD 973", value: 3892514 },
	{ code: "A0473 / Help D-ITIS-S Sup Jr / COP 3.958.030 / USD 990", value: 3958030 },
	{ code: "A0501 / Sup Eng-ITIS Syst Bg / COP 3.977.577 / USD 994", value: 3977577 },
	{ code: "A0511 / Sup Eng-ITIS Telc Bg / COP 4.034.885 / USD 1.009", value: 4034885 },
	{ code: "A0483 / Sup Eng-ITIS Desk Pr / COP 4.064.445 / USD 1.016", value: 4064445 },
	{ code: "A1160 / Cloud Tr / COP 4.070.000 / USD 1.018", value: 4070000 },
	{ code: "A0631 / ProcQ Leader ITIS Bg / COP 4.283.832 / USD 1.071", value: 4283832 },
	{ code: "A1200 / Process Automatio Tr / COP 4.510.000 / USD 1.128", value: 4510000 },
	{ code: "A0491 / S Eng-ITIS Server Bg / COP 4.542.615 / USD 1.136", value: 4542615 },
	{ code: "A0341 / DBA ARS Bg / COP 4.582.463 / USD 1.146", value: 4582463 },
	{ code: "A0484 / Sup Eng-ITIS Desk Sr / COP 4.700.619 / USD 1.175", value: 4700619 },
	{ code: "A0474 / Help D-ITIS-S Sup Pr / COP 4.871.422 / USD 1.218", value: 4871422 },
	{ code: "A1180 / Middleware Tr / COP 4.950.000 / USD 1.238", value: 4950000 },
	{ code: "A1161 / Cloud Bg / COP 5.060.000 / USD 1.265", value: 5060000 },
	{ code: "A1201 / Process Automatio Bg / COP 5.170.000 / USD 1.293", value: 5170000 },
	{ code: "A1191 / Storage Bg / COP 5.500.000 / USD 1.375", value: 5500000 },
	{ code: "A0632 / ProcQ Leader ITIS Jr / COP 5.563.316 / USD 1.391", value: 5563316 },
	{ code: "A0475 / Help D-ITIS-S Sup Sr / COP 5.583.603 / USD 1.396", value: 5583603 },
	{ code: "A0485 / Sup Eng-ITIS Desk Ex / COP 5.640.743 / USD 1.410", value: 5640743 },
	{ code: "A0502 / Sup Eng-ITIS Syst Jr / COP 5.675.997 / USD 1.419", value: 5675997 },
	{ code: "A0852 / ITIS Data Center Facilities Jr / COP 5.830.000 / USD 1.458", value: 5830000 },
	{ code: "A0512 / Sup Eng-ITIS Telc Jr / COP 5.840.977 / USD 1.460", value: 5840977 },
	{ code: "A0461 / Serv Manager ITIS-Bg / COP 5.935.380 / USD 1.484", value: 5935380 },
	{ code: "A0476 / Help D-ITIS-S Sup Ex / COP 6.263.444 / USD 1.566", value: 6263444 },
	{ code: "A0492 / S Eng-ITIS Server Jr / COP 6.486.854 / USD 1.622", value: 6486854 },
	{ code: "A1181 / Middleware Bg / COP 6.930.000 / USD 1.733", value: 6930000 },
	{ code: "A0633 / ProcQ Leader ITIS Pr / COP 7.271.000 / USD 1.818", value: 7271000 },
	{ code: "A1162 / Cloud Jr / COP 7.370.000 / USD 1.843", value: 7370000 },
	{ code: "A1202 / Process Automatio Jr / COP 7.370.000 / USD 1.843", value: 7370000 },
	{ code: "A0487 / Sup Eng-ITIS Desk Ma / COP 7.524.000 / USD 1.881", value: 7524000 },
	{ code: "A0342 / DBA ARS Jr / COP 7.683.156 / USD 1.921", value: 7683156 },
	{ code: "A0477 / Help D-ITIS-S Sup Ma / COP 7.797.600 / USD 1.949", value: 7797600 },
	{ code: "A0462 / Serv Manager ITIS-Jr / COP 8.128.890 / USD 2.032", value: 8128890 },
	{ code: "A1192 / Storage Jr / COP 8.140.000 / USD 2.035", value: 8140000 },
	{ code: "A0493 / S Eng-ITIS Server Pr / COP 8.177.368 / USD 2.044", value: 8177368 },
	{ code: "A0513 / Sup Eng-ITIS Telc Pr / COP 8.534.560 / USD 2.134", value: 8534560 },
	{ code: "A0503 / Sup Eng-ITIS Syst Pr / COP 8.625.240 / USD 2.156", value: 8625240 },
	{ code: "A0853 / ITIS Data Center Facilities Pr / COP 9.130.000 / USD 2.283", value: 9130000 },
	{ code: "A1182 / Middleware Jr / COP 9.240.000 / USD 2.310", value: 9240000 },
	{ code: "A0634 / ProcQ Leader ITIS Sr / COP 9.851.600 / USD 2.463", value: 9851600 },
	{ code: "A0463 / Serv Manager ITIS-Pr / COP 9.967.568 / USD 2.492", value: 9967568 },
	{ code: "A0343 / DBA ARS Pr / COP 10.384.657 / USD 2.596", value: 10384657 },
	{ code: "A1203 / Process Automatio Pr / COP 10.560.000 / USD 2.640", value: 10560000 },
	{ code: "A1163 / Cloud Pr / COP 10.780.000 / USD 2.695", value: 10780000 },
	{ code: "A0494 / S Eng-ITIS Server Sr / COP 10.862.057 / USD 2.716", value: 10862057 },
	{ code: "A0504 / Sup Eng-ITIS Syst Sr / COP 10.970.415 / USD 2.743", value: 10970415 },
	{ code: "A0635 / ProcQ Leader ITIS Ma / COP 11.000.000 / USD 2.750", value: 11000000 },
	{ code: "A0514 / Sup Eng-ITIS Telc Sr / COP 11.687.211 / USD 2.922", value: 11687211 },
	{ code: "A0854 / ITIS Data Center Facilities Sr / COP 11.770.000 / USD 2.943", value: 11770000 },
	{ code: "A1183 / Middleware Pr / COP 12.320.000 / USD 3.080", value: 12320000 },
	{ code: "A1193 / Storage Pr / COP 12.320.000 / USD 3.080", value: 12320000 },
	{ code: "A0636 / ProcQ Leader ITIS Ex / COP 12.650.000 / USD 3.163", value: 12650000 },
	{ code: "A0495 / S Eng-ITIS Server Ex / COP 12.881.871 / USD 3.220", value: 12881871 },
	{ code: "A1204 / Process Automatio Sr / COP 13.090.000 / USD 3.273", value: 13090000 },
	{ code: "A0464 / Serv Manager ITIS-Sr / COP 13.430.340 / USD 3.358", value: 13430340 },
	{ code: "A1164 / Cloud Sr / COP 13.750.000 / USD 3.438", value: 13750000 },
	{ code: "A1205 / Process Automatio Ex / COP 14.740.000 / USD 3.685", value: 14740000 },
	{ code: "A0505 / Sup Eng-ITIS Syst Ex / COP 14.931.378 / USD 3.733", value: 14931378 },
	{ code: "A0855 / ITIS Data Center Facilities Ex / COP 15.070.000 / USD 3.768", value: 15070000 },
	{ code: "A0465 / Serv Manager ITIS-Ex / COP 15.364.309 / USD 3.841", value: 15364309 },
	{ code: "A1184 / Middleware Sr / COP 15.400.000 / USD 3.850", value: 15400000 },
	{ code: "A0344 / DBA ARS Sr / COP 15.512.043 / USD 3.878", value: 15512043 },
	{ code: "A1194 / Storage Sr / COP 15.950.000 / USD 3.988", value: 15950000 },
	{ code: "A0496 / S Eng-ITIS Server Ma / COP 16.541.400 / USD 4.135", value: 16541400 },
	{ code: "A0466 / Serv Manager ITIS-Ma / COP 16.853.760 / USD 4.213", value: 16853760 },
	{ code: "A1185 / Middleware Ex / COP 17.050.000 / USD 4.263", value: 17050000 },
	{ code: "A0506 / Sup Eng-ITIS Syst Ma / COP 17.556.000 / USD 4.389", value: 17556000 },
	{ code: "A0515 / Sup Eng-ITIS Telc Ex / COP 17.559.210 / USD 4.390", value: 17559210 },
	{ code: "A1195 / Storage Ex / COP 17.600.000 / USD 4.400", value: 17600000 },
	{ code: "A1206 / Process Automatio Ma / COP 18.150.000 / USD 4.538", value: 18150000 },
	{ code: "A1165 / Cloud Ex / COP 18.700.000 / USD 4.675", value: 18700000 },
	{ code: "A1186 / Middleware Ma / COP 20.130.000 / USD 5.033", value: 20130000 },
	{ code: "A1196 / Storage Ma / COP 20.790.000 / USD 5.198", value: 20790000 },
	{ code: "A0345 / DBA ARS Ex / COP 20.816.400 / USD 5.204", value: 20816400 },
	{ code: "A0516 / Sup Eng-ITIS Telc Ma / COP 21.819.600 / USD 5.455", value: 21819600 },
	{ code: "A1172 / Architect Jr / COP 22.330.000 / USD 5.583", value: 22330000 },
	{ code: "A0346 / DBA ARS Ma / COP 23.199.000 / USD 5.800", value: 23199000 },
	{ code: "A1166 / Cloud Ma / COP 23.980.000 / USD 5.995", value: 23980000 },
	{ code: "A1173 / Architect Pr / COP 25.850.000 / USD 6.463", value: 25850000 },
	{ code: "A1174 / Architect Sr / COP 29.260.000 / USD 7.315", value: 29260000 },
	{ code: "A1175 / Architect Ex / COP 31.680.000 / USD 7.920", value: 31680000 },
	{ code: "A1176 / Architect Ma / COP 33.880.000 / USD 8.470", value: 33880000 }
  ],
  "QA&VALIDAT GDC": [
	{ code: "A0381 / Test Engineer ARS-Tr / COP 2.956.800 / USD 739", value: 2956800 },
	{ code: "A0382 / Test Engineer ARS-Bg / COP 3.696.000 / USD 924", value: 3696000 },
	{ code: "A0383 / Test Engineer ARS-Jr / COP 4.224.000 / USD 1.056", value: 4224000 },
	{ code: "A0391 / Aut Test Eng ARS-Tr / COP 5.041.872 / USD 1.260", value: 5041872 },
	{ code: "A0384 / Test Engineer ARS-Pr / COP 5.280.000 / USD 1.320", value: 5280000 },
	{ code: "A1100 / Software Test Tr / COP 5.377.997 / USD 1.344", value: 5377997 },
	{ code: "A0392 / Aut Test Eng ARS-Bg / COP 5.898.990 / USD 1.475", value: 5898990 },
	{ code: "A1131 / Hybrid Test Eng Bg / COP 6.248.559 / USD 1.562", value: 6248559 },
	{ code: "A1101 / Software Test Bg / COP 6.292.256 / USD 1.573", value: 6292256 },
	{ code: "A0393 / Aut Test Eng ARS-Jr / COP 6.901.819 / USD 1.725", value: 6901819 },
	{ code: "A0371 / Test Leader ARS - Bg / COP 6.946.579 / USD 1.737", value: 6946579 },
	{ code: "A1111 / SDET Bg / COP 7.209.875 / USD 1.802", value: 7209875 },
	{ code: "A1121 / Performance Test Bg / COP 7.209.875 / USD 1.802", value: 7209875 },
	{ code: "A1102 / Software Test Jr / COP 7.361.940 / USD 1.840", value: 7361940 },
	{ code: "A0385 / Test Engineer ARS-Sr / COP 7.920.000 / USD 1.980", value: 7920000 },
	{ code: "A0394 / Aut Test Eng ARS-Pr / COP 8.075.128 / USD 2.019", value: 8075128 },
	{ code: "A0372 / Test Leader ARS - Jr / COP 8.127.498 / USD 2.032", value: 8127498 },
	{ code: "A1132 / Hybrid Test Eng Jr / COP 8.335.734 / USD 2.084", value: 8335734 },
	{ code: "A1103 / Software Test Pr / COP 8.613.470 / USD 2.153", value: 8613470 },
	{ code: "A0395 / Aut Test Eng ARS-Sr / COP 9.447.899 / USD 2.362", value: 9447899 },
	{ code: "A0373 / Test Leader ARS - Pr / COP 9.509.172 / USD 2.377", value: 9509172 },
	{ code: "A1122 / Performance Test Jr / COP 9.618.154 / USD 2.405", value: 9618154 },
	{ code: "A1104 / Software Test Sr / COP 10.077.759 / USD 2.519", value: 10077759 },
	{ code: "A0386 / Test Engineer ARS-Ex / COP 10.560.000 / USD 2.640", value: 10560000 },
	{ code: "A0396 / Aut Test Eng ARS-Ex / COP 11.054.042 / USD 2.764", value: 11054042 },
	{ code: "A1133 / Hybrid Test Eng Pr / COP 11.120.078 / USD 2.780", value: 11120078 },
	{ code: "A0374 / Test Leader ARS - Sr / COP 11.125.732 / USD 2.781", value: 11125732 },
	{ code: "A1105 / Software Test Ex / COP 11.790.979 / USD 2.948", value: 11790979 },
	{ code: "A1112 / SDET Jr / COP 12.016.460 / USD 3.004", value: 12016460 },
	{ code: "A1123 / Performance Test Pr / COP 12.830.858 / USD 3.208", value: 12830858 },
	{ code: "A0397 / Aut Test Eng ARS-Ma / COP 12.933.230 / USD 3.233", value: 12933230 },
	{ code: "A0375 / Test Leader ARS - Ex / COP 13.017.106 / USD 3.254", value: 13017106 },
	{ code: "A1113 / SDET Pr / COP 13.218.107 / USD 3.305", value: 13218107 },
	{ code: "A0387 / Test Engineer ARS-Ma / COP 13.728.000 / USD 3.432", value: 13728000 },
	{ code: "A1106 / Software Test Ma / COP 13.795.445 / USD 3.449", value: 13795445 },
	{ code: "A1134 / Hybrid Test Eng Sr / COP 14.834.462 / USD 3.709", value: 14834462 },
	{ code: "A0363 / QA Manager ARS -  Pr / COP 15.372.106 / USD 3.843", value: 15372106 },
	{ code: "A1124 / Performance Test Sr / COP 17.116.685 / USD 4.279", value: 17116685 },
	{ code: "A0364 / QA Manager ARS -  Sr / COP 17.985.364 / USD 4.496", value: 17985364 },
	{ code: "A1114 / SDET Sr / COP 18.733.354 / USD 4.683", value: 18733354 },
	{ code: "A1135 / Hybrid Test Eng Ex / COP 19.789.543 / USD 4.947", value: 19789543 },
	{ code: "A0365 / QA Manager ARS -  Ex / COP 21.042.876 / USD 5.261", value: 21042876 },
	{ code: "A1115 / SDET Ex / COP 22.667.358 / USD 5.667", value: 22667358 },
	{ code: "A1125 / Performance Test Ex / COP 22.834.086 / USD 5.709", value: 22834086 },
	{ code: "A0366 / QA Manager ARS -  Ma / COP 24.620.165 / USD 6.155", value: 24620165 },
	{ code: "A1116 / SDET Ma / COP 24.934.096 / USD 6.234", value: 24934096 },
	{ code: "A1136 / Hybrid Test Eng Ma / COP 26.399.745 / USD 6.600", value: 26399745 },
	{ code: "A1126 / Performance Test Ma / COP 30.461.241 / USD 7.615", value: 30461241 }
  ]
};

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatInputValue(input) {
  var value = input.value.replace(/\./g, '');
  input.value = formatNumber(value);
}

function calculateCost() {
  var salaryInput = document.getElementById('salary');
  var bonusesInput = document.getElementById('bonuses');
  var salary = parseFloat(salaryInput.value.replace(/\./g, ''));
  var bonuses = parseFloat(bonusesInput.value.replace(/\./g, ''));
  var integral = document.getElementById('integral').checked;
  var connectivityBonus = document.getElementById('connectivity-bonus').checked;
  var suraPolicy = document.getElementById('sura-policy').checked;
  var sanitas = document.getElementById('sanitas').checked;
  var lifeInsurance = document.getElementById('life-insurance').checked;
  var result = document.getElementById('result');

  var smmlv = 1300000; // Valor del salario mínimo mensual legal vigente
  var transportAllowance = 162000; // Auxilio de transporte

  if (integral && salary <= 16899999) {
    result.innerHTML = 'El salario debe ser superior a $16.899.999 para el régimen integral.';
    return;
  }

  // Limitar el valor de "bonuses" al 40% del salario ingresado
  var maxBonuses = salary * 0.4;
  
  if (bonuses > maxBonuses) {
    result.innerHTML = 'Las bonificaciones no pueden superar el 40% del salario prestacional, es decir: ' + formatNumber(maxBonuses);
    return;
  }
  
  if (integral) {
    var cost = Math.ceil(salary * 1.27135 + bonuses); // Cálculo del costo según régimen integral
  } else if (salary < 2 * smmlv) {
    var cost = Math.ceil(salary * 1.40308 + transportAllowance + 45000 + bonuses); // Cálculo del costo según escenario 1
  } else if (salary + bonuses < 10 * smmlv) {
    var cost = Math.ceil(salary * 1.40308 + bonuses); // Cálculo del costo según escenario 2
  } else {
    var cost = Math.ceil(salary * 1.53808 + bonuses); // Cálculo del costo según escenario 3
  }

  if (connectivityBonus) {
    cost += 60000;
  }
  if (suraPolicy) {
    cost += 339291;
  }
  if (sanitas) {
    cost += 316400;
  }
  if (lifeInsurance) {
    cost += 24111;
  }
  
  var departmentSelect = document.getElementById('department');
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
      result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost) + '<br>' + '<br>';
      result.innerHTML += 'Código de AT para la práctica ' + selectedDepartment + ': ' + nextAT;
    } else {
      result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost) + '<br>' + '<br>';
      result.innerHTML += 'No se encontró un código de AT adecuado para la práctica ' + selectedDepartment;
    }
  } else {
    result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost) + '<br>' + '<br>';
    result.innerHTML += 'No se encontraron códigos de AT para la práctica ' + selectedDepartment;
  }

  var formattedCost = formatNumber(cost).replace(/\./g, "");
  document.getElementById("amount").value = formattedCost;
}

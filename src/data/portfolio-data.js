import gallery_1 from "@assets/img/gallery/143.jpg";
import gallery_2 from "@assets/img/gallery/rangierlokv65.jpg";
import gallery_3 from "@assets/img/gallery/216.jpg";
import gallery_4 from "@assets/img/gallery/626.jpg";
import gallery_5 from "@assets/img/gallery/steuerwagen_bnrbdzf.png";
import gallery_6 from "@assets/img/gallery/mittelwagen.jpg";

//portfolio area image
import portfolioIcon from "@assets/img/portfolio/p-icon.png";
import gallery_7 from "@assets/img/gallery/flachwagen.jpg";
import gallery_8 from "@assets/img/gallery/mittelwagen.jpg";
import gallery_9 from "@assets/img/gallery/mittelwagen.jpg";

const PortfolioData = [
  //home and home-2 data
  {
    id: 1,
    image: gallery_1,
    title: "Baureihe 143",
    subTitle: "E-Lokomotive",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c1 c3",
    description_1: "Die E-Lok der Baureihe 143 wurde von der Deutschen Reichsbahn als universal Lokomotive für den Personen und Güterverkehr entwickelt. Später wurden die Fahrzeuge in die Variante 143-R für den Einsatz im Regionalverkehr umgebaut. Unsere Fahrzeuge der Baureihe 143 sind mit Wendezugsteuerung (ZWS/ZDS), dem Fahrgastinformationssystem (FT95) und den Türschließsystem (TB0, SAT, TAV) ausgerüstet.",
    lok: true,
    triebsteuer: false,
    wagon: false,
    keypoints: [
      {"Gewicht": "33t",
    "Geschwindigkeit": "140km/h" }
    ]
  },
  {
    id: 2,
    image: gallery_2,
    title: "Rangierlok V65 (MS800D)",
    subTitle: "Diese-Lokomotive",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c2 c3",
    lok: true,
    triebsteuer: false,
    wagon: false,
  },
  {
    id: 3,
    image: gallery_3,
    title: "Bauhreihe 216 (DH1504)",
    subTitle: "Diesel-Lokomotive",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c1 c4 c2",
    lok: true,
    triebsteuer: false,
    wagon: false,
  },
  {
    id: 4,
    image: gallery_4,
    title: "Baureihe 626 (NE81)",
    subTitle: "Triebwagen",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c1 c4 c2",
    lok: false,
    triebsteuer: true,
    wagon: false,
  },
  {
    id: 5,
    image: gallery_5,
    title: "Bnrbdzf",
    subTitle: "Steuerwagen",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c4 c1",
    lok: false,
    triebsteuer: true,
    wagon: false,
  },
  {
    id: 6,
    image: gallery_6,
    title: "Mittelwagen 2. Klasse",
    subTitle: "Personenwagen",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c2 c3",
    lok: false,
    triebsteuer: false,
    wagon: true,
  },
  {
    id: 7,
    image: gallery_7,
    title: "Flachwagen",
    subTitle: "Güterwagen",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c1 c4 c2",
    lok: false,
    triebsteuer: false,
    wagon: true,
  },
  {
    id: 8,
    image: gallery_8,
    title: "Mittelwagen 1. Klasse",
    subTitle: "Personenwagen",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c4 c1",
    lok: false,
    triebsteuer: false,
    wagon: true,
  },
  {
    id: 9,
    image: gallery_9,
    title: "Mittelwagen Mehrzweckabteil",
    subTitle: "Personenwagen",
    daynamic_class: "col-xl-4 col-lg-6 col-md-6 c2 c3",
    lok: false,
    triebsteuer: false,
    wagon: true,
  },
];

export default PortfolioData;

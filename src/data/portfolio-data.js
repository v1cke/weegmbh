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
    description_1: "Die Rangierlok MS800D wurde 1959 von Klöckner-Humboldt-Deutz (KHD) für die Frechen-Benzelrather Eisenbahn gebaut. Das Fahrzeug ist mit einen Stangenantrieb ausgerüstet und verfügt über eine Leistung von 800 PS.",
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
    description_1: "Bei der DH1504 handelt es sich um ein Umbau der Baureihe 216 durch die Firma OnRail. Beim Umbau wurde der Dieselmotor, die Führerstände, die gesamten Hilfsbetriebe und Installationen erneuert. Weiter wurden die Fahrzeuge mit einer Funkfernsteuerung ausgerüstet.",
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
    description_1: "Der NE81 (Baureihe 626) wurde ab 1981 für die nichtbundeseigenen Eisenbahnen entwickelt und gebaut. Um den Anforderungen für einen gemischten Betrieb gerecht zu werden, können diese Fahrzeuge als Schlepptriebwagen bis zu 400t ziehen und ermöglichen somit auch den Einsatz vor leichten Güterzügen. Um den Personalaufwand beim Rangieren zu reduzieren, wurden einige Triebwagen auch mit einer Funkfernsteuerung ausgerüstet.",
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
    description_1: "Der Wittenberger Steuerwagen wurde in den 1990er Jahren von der Deutschen Bundesbahn entwickelt. Umgangssprachlich wird dieses Fahrzeug als Wittenberger Kopf (WiKo) bezeichnet und eignet sich für den Einsatz mit Diesel- und Elektrolokomotiven. Zuletzt wurden unsere Steuerwagen der Bauart 480.2 im Jahr 2000 für das Modernisierungsprogramm „SH99“ umgebaut und erhielten moderne Einzelsitze und eine behindertengerechte Toilette.",
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
    description_1: "Die Reisezugwagen mit der Bezeichnung „n-Wagen“ wurden ab 1959 für die Deutsche Bundesbahn gebaut. Die Fahrzeuge wurden während ihres Einsatzes umfassend saniert und sind somit noch gut für den Reisezugverkehr geeignet.",
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
    description_1: "Der Wagen ist für den Transport von Walzwerkerzeugnissen, Baufertigteilen, Schüttgütern, sperrigen Gütern, Straßenfahrzeugen und Containern – wobei keine Befestigungseinrichtungen für Container vorhanden sind – vorgesehen. Der Wagenkasten besteht aus 12 stählernen Seiten- und 2 stählernen Stirnborden mit 12 austauschbaren Seitenwanddrehrungen und 4 austauschbaren Stirnwandsteckrungen. Die Borde sind so ausgelegt, dass im abgeklappten Zustand ein unbehindertes Befahren des Wagens von Seiten- und Kopframpen aus möglich ist. Der Wagenboden besteht aus 70 mm dicken Holzbohlen. Bei abgeklappten Endseitenborden ist der Güterwagen nicht profilfrei.",
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
    description_1: "Die Reisezugwagen mit der Bezeichnung „n-Wagen“ wurden ab 1959 für die Deutsche Bundesbahn gebaut. Die Fahrzeuge wurden während ihres Einsatzes umfassend saniert und sind somit noch gut für den Reisezugverkehr geeignet.",
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
    description_1: "Die Reisezugwagen mit der Bezeichnung „n-Wagen“ wurden ab 1959 für die Deutsche Bundesbahn gebaut. Die Fahrzeuge wurden während ihres Einsatzes umfassend saniert und sind somit noch gut für den Reisezugverkehr geeignet. An einem Fahrzeugende verfügt dieser Wagen über ein Mehrzweckabteil mit Fahrradstellplätzen.",
    lok: false,
    triebsteuer: false,
    wagon: true,
  },
];

export default PortfolioData;

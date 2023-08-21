const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: "Start",
    link: "/",
    submenus: [
      { title: "Home Style 01", link: "/" },
      { title: "Home Style 02", link: "/home-2" },
      { title: "Home Style 03", link: "/home-3" },
    ],
  },
  // {
  //   id: 2,
  //   hasDropdown: true,
  //   title: "Fahrzeuge",
  //   link: "/shop",
  //   submenus: [
  //     { title: "shop", link: "/shop" },
  //     { title: "shop details", link: "/shop-details" },
  //     { title: "wishlist", link: "/wishlist" },
  //     { title: "cart", link: "/cart" },
  //     { title: "checkout", link: "/checkout" },
  //   ],
  // },
  {
    id: 3,
    hasDropdown: false,
    title: "Leistungen",
    link: "/services",
    submenus: [
      { title: "Leistungen", link: "/services" },
      { title: "Leistungsdetails", link: "/services-details" },
    ],
  },
  {
    id: 4,
    hasDropdown: false,
    title: "Fahrzeuge",
    link: "/portfolio",
    // submenus: [
        //   { title: "Portfolio", link: "/portfolio" },
        //   { title: "Portfolio Details", link: "/portfolio-details" },
        // ],
  },
  {
    id: 5,
    hasDropdown: false,
    title: "Karriere",
    link: "/career",
  },
  {
    id: 6,
    title: "Unternehmen",
    megaMenu: true,
    link: "/about-us",
    pages: true,
    mega_menus: [
      { title: "Über uns", link: "/about-us" },
      { title: "FAQ", link: "/faq" },
      { title: "Standorte", link: "/location" },
      { title: "Partner", link: "/partner" },
      // { title: "Team",
      //   link: "/team",
      //   // submenus: [
      //     //   { title: "Team", link: "/team" },
      //     //   { title: "team details", link: "/team-details" },
      //     // ],
      //   },
        // { title: "Awards", link: "/awards" },
      // { title: "Karriere", link: "/career" },
      // { title: "Kontakt", link: "/contact" },
      // { title: "Quote", link: "/quote" },
      // { title: "Pricing", link: "/pricing" },
      // { title: "Login", link: "/login" },
      // { title: "Register", link: "/register" },
    ],
  },
  
  
];

export default menu_data;

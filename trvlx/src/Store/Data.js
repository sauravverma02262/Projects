export const TopMenu = [
  {
    public: [
      {
        name: "Flight",
        type: "link",
        link: "/flight",
        access: "nav",
        icon: "airplanemode_active"
      },
      {
        name: "Hotels",
        link: "/hotels",
        type: "link",
        access: "nav",
        icon: "domain"
      }
    ],
    private: [
      {
        name: "My Account",
        link: "user",
        type: "dropdown",
        access: "private",
        icon: "person",
        sub: [
          {
            name: "My Booking",
            link: "/bookings",
            access: "private",
            type: "link"
          },
          {
            name: "My Profile",
            link: "profile",
            access: "private",
            type: "link"
          }
        ]
      },
      {
        name: "Notifications",
        link: "/notifications",
        access: "private",
        type: "link",
        icon: "bell"
      }
    ]
  }
];

export const FooterData = {
  menu: [
    { title: "Contact Us", state: "contact_us" },
    { title: "About Us", state: "about_us" },
    { title: "Terms of Use", state: "terms" },
    { title: "Privacy Policy", state: "privacy_policy" },
    { title: "Help", state: "help" }
  ]
};

export const SliderData = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Book Your Flight Now",
    image:
      "http://www.grandprixmotel.com/wp-content/uploads/2018/03/travel-banner.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "OFFER: FLYTODAY250",
    image: "https://www.traveltrolley.co.uk/images/homebanner.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Plan your Trip now",
    image:
      "https://www.thaiairways.com/static/common/imgscontent/pix_de/hero-banner-summer-deal.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

export const Airlines = [
  {
    id: 1,
    airline: "Air India"
  },
  {
    id: 2,
    airline: "SpiceJet"
  },
  {
    id: 3,
    airline: "Jet Airways"
  },
  {
    id: 4,
    airline: "IndiGo"
  },
  {
    id: 5,
    airline: "GoAir"
  },
  {
    id: 6,
    airline: "AirAsia"
  },
  {
    id: 7,
    airline: "Vistara"
  }
];

import { SET_HEADER_TITLE } from "../typeConstants";
const initialState = {
  title: "App",
  appName: "TrvlX",
  rightMenu: [
    {
      name: "Flight",
      link: "/",
      access: "nav"
    },
    {
      name: "Hotels",
      link: "/hotels",
      access: "nav"
    },
    {
      name: "SignIn",
      link: "/signIn",
      access: "public"
    },
    {
      name: "SignUp",
      link: "/signUp",
      access: "public"
    },
    {
      name: "My Account",
      link: "/myAccount",
      sub: [
        { name: "My Booking", link: "/bookings" },
        { name: "My Profile", link: "profile" }
      ],
      access: "private"
    },
    {
      name: "Notifications",
      link: "/notifications",
      access: "private"
    }
  ],
  user: {
    isLoggedIn: true
  },
  footer: {
    menu: [
      { title: "Contact Us", state: "contact_us" },
      { title: "About Us", state: "about_us" },
      { title: "Terms of Use", state: "terms" },
      { title: "Privacy Policy", state: "privacy_policy" },
      { title: "Help", state: "help" }
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TITLE: {
      return {
        ...state,
        title: action.title
      };
    }
    default:
      return {
        ...state
      };
  }
};

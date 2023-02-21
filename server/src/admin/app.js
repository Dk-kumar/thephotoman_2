import favicon from './extensions/BLACK.png';

export default {
  config: {
    // replace favicon with a custom icon
    head: {
      favicon: favicon,
    },
    menu: {
        logo: favicon,
    },
    auth: {
        logo: favicon, 
    },

    translations: {
        en: {
          "Auth.form.welcome.title": "Welcome!",
          "Auth.form.welcome.subtitle": "Log in to Dashboard",
          "Auth.form.email.placeholder": "e.g. example@gamil.com",
        //   "app.components.LeftMenu.navbrand.title": "Dashboard",
        //   "app.components.LeftMenu.navbrand.workplace": " ",
        },
      }
  }
}
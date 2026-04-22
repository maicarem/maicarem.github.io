// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-mendeleyev-39-s-dream",
          title: 'Mendeleyev&amp;#39;s Dream',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mendeylev/";
            },},{id: "books-voices-from-chernobyl-the-oral-history-of-a-nuclear-disaster",
          title: 'Voices from Chernobyl The Oral History of a Nuclear Disaster',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/voices-from-chernobyl/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%75%6F%6E%67.%61%6E%68@%75%66%6C.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

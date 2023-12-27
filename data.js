const { nanoid } = require("nanoid");

const summary = {
  eng: "I am a front-end React developer. I focus on HTML, CSS, SASS, JS, React. Development, practice are very important to me. Ready to spend a lot of time learning. I will be glad to learn new things from colleagues, I prefer to work with purposeful people.I am very goal oriented.Usually I perceive the goals of the company as my personal goals.",
  ru: "Я фронтенд React разработчик . Я специализируюсь на HTML, CSS, SASS, JS, React. Развитие, практика очень важны для меня. Готов потратить много времени на обучение. Буду рад узнавать новое от коллег, предпочитаю работать с прогрессивными людьми. Я очень целеустремленный. Обычно я воспринимаю цели компании как свои личные цели.",
  ukr: "Я фронтенд React розробник. Я спеціалізуюсь на HTML, CSS, SASS, JS, React. Розвиток, практика для мене дуже важливі. Готовий витратити багато часу на навчання. Буду радий навчитися чомусь новому від колег, віддаю перевагу роботі з прогресивними людьми. Я дуже цілеспрямований. Зазвичай я сприймаю цілі компанії як свої особисті цілі.",
};

const softSkills = [
  {
    id: nanoid(),
    skill: {
      eng: "I can write a project from scratch",
      ru: "Могу написать проект с нуля",
      ukr: "Я можу написати проект з нуля",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I know git commands, I can work with different branches, pull requests and conflicts",
      ru: "Я знаю git-команди, умею работать з разними ветками, пул реквестами и конфликтами",
      ukr: "Я знаю git-команди, вмію працювати з різними гілками, пул реквестами та конфліктами",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I understand how the work process is built in the team",
      ru: "Я понимаю как построен рабочий процес в колективе",
      ukr: "Я розумію, як побудований процес роботи в колективі",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I am a very communicative person",
      ru: "Я очень коммуникабельный человек",
      ukr: "Я дуже комунікабельна людина",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I am a multi-tasker and I know how to prioritize",
      ru: "Я многозадачный и умею расставлять приоритеты",
      ukr: "Я багатозадачний і вмію розставляти пріоритети",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I take responsibility for my decisions",
      ru: "Я отвечаю за свои решения",
      ukr: "Я відповідаю за свої рішення",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I know how to find compromises in any situation, I respect a different point of view",
      ru: "Умею находить компромисы в любой ситуации, уважаю другие точки зрения",
      ukr: "Вмію знаходити компроміс у будь-якій ситуації, поважаю іншу точку зору",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I understand how to transform business tasks into development tasks",
      ru: "Я понимаю как трансформировать бизнес-задачи в технические",
      ukr: "Я розумію як трансформувати бізнес-задачі у технічні",
    },
  },
  {
    id: nanoid(),
    skill: {
      eng: "I take criticism well",
      ru: "Я хорошо воспринимаю критику",
      ukr: "Я добре сприймаю критику",
    },
  },
];

const techSkills = [
  {
    id: nanoid(),
    title: "HTML5",
    name: "html",
  },
  {
    id: nanoid(),
    title: "CSS3",
    name: "css",
  },
  {
    id: nanoid(),
    title: "SASS",
    name: "sass",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    name: "javascript",
  },
  {
    id: nanoid(),
    title: "React",
    name: "react",
  },
  {
    id: nanoid(),
    title: "WordPress",
    name: "wordpress",
  },
  {
    id: nanoid(),
    title: "REST-API",
    name: "restapi",
  },
  {
    id: nanoid(),
    title: "Type-Script",
    name: "typescript",
  },
  {
    id: nanoid(),
    title: "Node.js",
    name: "node",
  },
  {
    id: nanoid(),
    title: "Express",
    name: "express",
  },
  {
    id: nanoid(),
    title: "GitHub",
    name: "gihub",
  },
  {
    id: nanoid(),
    title: "GitLab",
    name: "gitlab",
  },
  {
    id: nanoid(),
    title: "WebPack/Parcel",
    name: "webpack",
  },
  {
    id: nanoid(),
    title: "Redux/Redux-toolkit",
    name: "redux",
  },
  {
    id: nanoid(),
    title: "MUI",
    name: "mui",
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    name: "botstrap",
  },
  {
    id: nanoid(),
    title: "ANT-design",
    name: "ant",
  },
  {
    id: nanoid(),
    title: "Taillwind",
    name: "taillwind",
  },
];

const education = [
  {
    id: nanoid(),
    title: "IT School GoIT",
    text: "Full stack developer June 2022 - October 2022 |Ukraine",
  },
  {
    id: nanoid(),
    title: "Kyiv National University of Trade and Economics",
    text: "Restaurant business 2015 - 2018",
  },
];

const languages = [
  {
    id: nanoid(),
    title: "Ukrainian - native",
  },
  {
    id: nanoid(),
    title: "Russian - fluent",
  },
  {
    id: nanoid(),
    title: "English - pre-intermediate",
  },
];

const workExperience = [
  {
    id: nanoid(),
    name: "Readable games",
    duration: "June 2023 - Now",
    description: `Game development, produces games - novels for the US market, work with Unity and Nani`,
    links: [
      {
        linkTitle: "AppStore",
        linkUrl: "https://apps.apple.com/ua/app/midnight-stories-choice-games/id6444111225?l=en",
      },
      {
        linkTitle: "Google Play",
        linkUrl: "https://play.google.com/store/apps/details?id=com.DefaultCompany.Midnightstories",
      },
    ],
  },
  {
    id: nanoid(),
    name: "IdealSoftWare",
    duration: "December 2022  -  June 2023",
    description:
      "it's startUp, i'm working on this project with experiences people who have a lot of years experience. Working on develop application about structurization of notes, and media files. Support for web version and mobile application.",
  },
  {
    id: nanoid(),
    name: "BootCamp 24 GoIt",
    duration: "June 2022  -  December 2022",
    description:
      "have 7 month experience of writing code in GoIt school on BootCamp (really writing code from 9 a.m. to 11 p. m. every day)",
  },
];

const projects = [
  {
    id: nanoid(),
    name: "Ilark games",
    livePageLink: "https://ilark.games/",
    description: `This is a commercial website for the company I work for, a template was purchased,
        and more than 50% was rebuilt to suit the company's request. The site was built using
        WordPress`,
  },
  {
    id: nanoid(),
    name: "Enko trans",
    livePageLink: "https://enkotrans.com.ua/",
    description:
      "This is a commercial website for a logistics company. A responsive layout has been developed and the site is based on WordPress",
  },
  {
    id: nanoid(),
    name: "Merchant",
    repoLink: "https://github.com/VPagent/merchant",
    livePageLink: "https://vpagent.github.io/merchant/register",
    description:
      "This is the implementation of Authorization in 4 steps, custom pagination was developed. Used: React.js Type-Script, JS, SCSS, REST-API, React-Router",
  },
  {
    id: nanoid(),
    name: "Graphics",
    repoLink: "https://github.com/VPagent/test-calc",
    livePageLink: "https://vpagent.github.io/test-calc/",
    description:
      "An application that calculates the cost of storage in different companies for the same parameters! I used: React.js, js, SCSS, TypeScript and etc.",
  },
  {
    id: nanoid(),
    name: "Abz-task",
    repoLink: "https://github.com/VPagent/abz-task",
    livePageLink: "https://vpagent.github.io/abz-task/",
    description: "Implemented registration. Using React.js, JS, SCSS, npm-packages, REST-API , TypeScript.",
  },
  {
    id: nanoid(),
    name: "TMG-task",
    repoLink: "https://github.com/VPagent/tmg-task",
    livePageLink: "https://vpagent.github.io/tmg-task/",
    description:
      "An application that calculates the cost of storage in different companies for the same parameters! I used: React.js, js, SCSS, TypeScript and etc.",
  },
  {
    id: nanoid(),
    name: "Architect",
    repoLink: "https://github.com/VPagent/smart-orange-task",
    livePageLink: "https://vpagent.github.io/smart-orange-task/",
    description:
      "This application is implemented with the help of react, type script, sass modules, custom animations are written, without adaptive",
  },
  {
    id: nanoid(),
    name: "UserCamera",
    repoLink: "https://github.com/VPagent/camera",
    livePageLink: "https://vpagent.github.io/camera/",
    description:
      "In this application i  worked with user Camera on different devices, implemented access request, and possible work with user photo on different pages.  I used: React.js, js, SCSS, TypeScript, userMedia requests.",
  },

  {
    id: nanoid(),
    name: "PhoneBook & Notes",
    repoLink: "https://github.com/VPagent/my-phone-book",
    livePageLink: "https://vpagent.github.io/my-phone-book/",
    description:
      "This adaptive application about create a PhoneBook and notes page after you pass authorization. Used: React.js Type-Script, JS, SCSS, REST-API ",
  },
  {
    id: nanoid(),
    name: "KidsLike",
    repoLink: "https://github.com/VPagent/My-Projet-React",
    livePageLink: "https://kidslike-bc24.netlify.app",
    description:
      "This application to improve the discipline of children will be very useful for parents. Implemented authorization. Using React.js, JS, SCSS, npm-packages, REST-API",
  },
  {
    id: nanoid(),
    name: "Jobs Desk",
    repoLink: "https://github.com/VPagent/test-task-finish",
    livePageLink: "https://vpagent.github.io/test-task-finish",
    description:
      "This a two-page site with the ability to save your favorite vacancies. Application developed with: React.js, Type-Script, JS, Google maps, REST-API.  Styles are developed using the Tailwind library.",
  },
  {
    id: nanoid(),
    name: "Filmoteka",
    repoLink: "https://github.com/VPagent/project-team1",
    livePageLink: "https://vpagent.github.io/project-team1/",
    description: "App about searching movies, and adding favorite movies. Using pure JS, REST-API, npm-packages and SCSS",
  },
  {
    id: nanoid(),
    name: "IceCream",
    repoLink: "https://github.com/VPagent/project-HTML-CSS",
    livePageLink: "https://olenayatseniuk.github.io/Ice-cream/",
    description: "Ice Cream company site. Neat and tasty design, responsible layout. Using Parcel, SCSS, JS",
  },
];

module.exports = {
  summary,
  softSkills,
  techSkills,
  workExperience,
  projects,
  education,
  languages,
};

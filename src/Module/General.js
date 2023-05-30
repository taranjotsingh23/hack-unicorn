import team from "./Assets/team.gif";
import devfolio from "./Assets/sponsorsLogos/devfolio.png";
import filecoin from "./Assets/sponsorsLogos/filecoin.png";
import quine from "./Assets/sponsorsLogos/quine.jfif";
import frienducation from "./Assets/sponsorsLogos/frienducation.png";
import zetapass from "./Assets/sponsorsLogos/zetapass.png";
import polygon from "./Assets/sponsorsLogos/polygon.png";
import replit from "./Assets/sponsorsLogos/replit.png";
import solana from './Assets/sponsorsLogos/solana.png'

import me from "./Assets/teami/Vashishth_Patel.jpg";
import vanshikagarg from "./Assets/teami/vanshikagarg.jfif";
import shrutiarora from "./Assets/teami/shrutiarora.jfif";
import ayonroy from "./Assets/teami/ayonroy.jfif";
import poojagera from "./Assets/teami/poojagera1.JPG";
import ayush from "./Assets/teami/Ayush_Rudani.jpg";

import taranjot from "./Assets/teami/taranjotsingh.png";
import harpreet from "./Assets/teami/harpreetsingh.jpg";
import ripu from "./Assets/teami/ripudamansingh.png";
import agam from "./Assets/teami/agamjyotsingh.jfif";
import kanishk from "./Assets/teami/kanishkchhabra.jpeg";
import sahib from "./Assets/teami/sahibpreetsingh.jpg";
import brahamdeep from "./Assets/teami/brahamdeepsinghsabharwal.jpeg";
import chaitanya from "./Assets/teami/chaitanyagandhi.jpg";
import chirag from "./Assets/teami/chiragarora.jpg";
import harsh from "./Assets/teami/harshvardhanrana.jpg";
import mahak from "./Assets/teami/mahakkaur.jpg";
import pulkit from "./Assets/teami/pulkitchauhan.jfif";
import virat from "./Assets/teami/viratchauhan.jpg";









const TOP_SECTION = {
  TITLE: "Hack Unicorn",
  Typed_effect: ["13 June - 15 June", "24 hours of creation", "Expert Speaker Sessions", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us from 13th to 15th of June 2023 for 24 hours of creation, innovation, expert speaker sessions & fun with over 800+ students.",
  IMG_SRC: team,
  DISCORD_LINK: "https://discord.gg/cvHPEK7U3v",
  JUDGES_FORM_LINK:
    "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK:
    "#Hackers Registration devfolio link"
};

const SOCIALS = {
  instagram: "https://instagram.com/hack_unicorn_club?igshid=ZDdkNTZiNTM=",
  email: "mailto:contact@hackunicornhackathon@gmail.com",
  mail: "contact@hackunicornhackathon@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is Hack Unicorn?",
  LONG_DESCRIPTION:
    "It will take place in online mode from 13th - 14th June 2023 with Final Presentation Round, Result Declaration, Prize Distribution & Industry Professionals Speaker Sessions on 15th June 2023 in Hybrid mode. The Hackathon is designed to spark innovation, attract and educate new talent and create new channels for collaboration between performance and capacity professionals. We want to spread the idea that programming is a useful skill that can be enjoyed by anyone. The event is open to participants from all backgrounds and skill levels who are passionate about coding and want to challenge themselves to take on new and exciting coding challenges.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "#Volunteer form link"
  },
  JOIN_TEAM: {
    required: true,
    src: "#Join team link"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

const calenderStartingDate = {
  month: 7,
  year: 2022
}


const schedule = [
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Opening Ceremoney",
        "timings": "8 AM - 9 AM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "11 AM - 12 PM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Closing Ceremoney",
        "timings": "6 PM - 7 PM",
        "link": "https://google.com"
      }
    ]
  },
]

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Overall First",
      content:
        "The first overall prize will be given to a project that outstands all other submissions."
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "The second overall prize will be given to the second-best project in the hackathon."
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third",
      content:
        "The third overall prize will be given to the third-best project in the hackathon."
    }
  ],
  [
    //Array 2
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Women Team",
      content: "Your project will qualify for this category if your all team members are women."
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best DDU Team",
      content: "Your project will qualify for this category if your all team members are from DDU."
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ],
  [
    //Array 3
  ]
];

const TeamInfo = [
  [
    // Array 1
    {
      Name: "Taranjot Singh",
      role: "Lead Organizer",
      linkedin: "https://www.linkedin.com/in/taranjotsingh23/",
      img: taranjot
    },
    {
      Name: "Harpreet Singh",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/harpreet-singh-810911195",
      img: harpreet
    },
    {
      Name: "Ripudaman Singh",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/ripudaman-singh-259957155/",
      img: ripu
    }
  ],
  [
    // Array 2
    {
      Name: "Agamjyot Singh",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/agam-jyot-singh/",
      img: agam
    },
    {
      Name: "Kanishk Chhabra",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/kanishk-chhabra/",
      img: kanishk
    },
    {
      Name: "Sahib Preet Singh",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/sahib-preet-singh",
      img: sahib
    },
  ],
  [
    // Array 2
    {
      Name: "Brahamdeep Singh Sabharwal",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/brahamdeep-singh-sabharwal-14a914256/",
      img: brahamdeep
    },
    {
      Name: "Chaitanya Gandhi",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/chaitanya-gandhi-aab8ab205",
      img: chaitanya
    },
    {
      Name: "Chirag Arora",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/chirag-arora-9a2134168/",
      img: chirag
    },
  ],
  [
    // Array 2
    {
      Name: "Harsh Vardhan Rana",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/iamharshvardhan/",
      img: harsh
    },
    {
      Name: "Mahak Kaur",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/mahak-kaur-54a89a218",
      img: mahak
    },
    {
      Name: "Pulkit Chauhan",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/pulkit-chauhan-172635259",
      img: pulkit
    },
  ],
  [
    // Array 2
    {
      Name: "Virat Chauhan",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/viratchauhan",
      img: virat
    }
  ]
];

const SpeakersInfo = [
  [
    // Array 1
    {
      Name: "Jai Sadana",
      role: "Community Manager | NFT | Building DAO | Creator Social Community | Quine Ambassador",
      linkedin: "https://www.linkedin.com/in/jaisadana/",
      img: me
    },
    {
      Name: "Kundan Singh",
      role: "Crypto Enthusiast | Community Manager | DAO Developer | Blockchain Expert | DEX Developer",
      linkedin: "https://www.linkedin.com/in/kundansinghweb3/",
      img: ayush
    },
    {
      Name: "Vanshika Garg",
      role: "Fractal Analytics | vGHC'21, GHCI & EATON Scholar | 21U21 Awardee | Google Former DSC Lead",
      linkedin: "https://www.linkedin.com/in/vanshikagarg17/",
      img: vanshikagarg
    }
  ],
  [
    // Array 2
    {
      Name: "Ayon Roy",
      role: "Data Scientist | Speaker/Mentor/Judge @ 160+ Conferences/Hackathons | Community @Kaggle Days | Z by HP Global Data Science Ambassador",
      linkedin: "https://www.linkedin.com/in/ayon-roy/",
      img: ayonroy
    },
    {
      Name: "Pooja Gera",
      role: "8k+ Followers | SWE'23 @PaloAltoNetworks | SWE Intern'22 @Microsoft | Founder @CelestialBiscuitIGDTUW | National 2nd Runner Up @Flipkart GRiD 3.0 | Postman Student Leader | Winner @VMWareCAPHackathon",
      linkedin: "https://www.linkedin.com/in/pooja-gera/",
      img: poojagera
    },
    {
      Name: "Shruti Arora",
      role: "Cyber Security Advocate | Building, DevRelo | Podcast Host, Atypical Tuesday",
      linkedin: "https://www.linkedin.com/in/shrutiiaroraaa/",
      img: shrutiarora
    },
  ]
];

const JudgesInfo = [
  [
    // Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Manager",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    }
  ],
  [
    // Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    }
  ]
];

const sponsorLogos = [
  // [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const titlesponsorLogos = [
  [{ src: devfolio, link: "https://devfolio.co/" }, { src: polygon, link: "https://polygon.technology/" }, { src: filecoin, link: "https://filecoin.io/" }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const goldsponsorLogos = [
  // [  ], //Array 1
  [{ src: replit, link: "https://replit.com/" }, { src: solana, link: "https://solana.com/" }, { src: zetapass, link: "https://linktr.ee/zetapass" }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const silversponsorLogos = [
  [{ src: quine, link: "https://quine.sh/" }, { src: frienducation, link: "https://frienducation.in/" }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];




const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          'A hackathon is a 24 hour event where "hackers" will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: "Who can attend?",
        content: "Hack Unicorn is open to all undergraduate, graduate, high school students, and middle school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first-time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathons and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form a team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team."
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to register yourself on devfolio and join the whatsapp group, we will guide you through everything there."
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (hackunicornhackathon@gmail.com) we would happy to help you."
      }
      ,
      {
        label: "Can I participate as a individual?",
        content: "Yes, you can participate individually. We encourage One-Man-Army as well."
      }
      ,
      {
        label: "Will there be swags?",
        content: "Yes, Participants and winners will receive swags, certificates, and much more!"
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  titlesponsorLogos,
  goldsponsorLogos,
  silversponsorLogos,
  TeamInfo,
  SpeakersInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
};

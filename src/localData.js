import { v4 as uuidv4 } from "uuid";

const getRandomDate = () => {
  const startDate = new Date("2023-01-05");
  const endDate = new Date();
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();

  // Generate a random timestamp within the range
  const randomTimestamp = Math.floor(
    Math.random() * (endTimestamp - startTimestamp) + startTimestamp
  );

  // Create a new date object using the random timestamp
  const randomDate = new Date(randomTimestamp);
  return randomDate;
};

const users = [
  {
    userName: "abhishekY495",
    fullName: "Abhishek Yadav",
    email: "abhishek@testing.com",
    password: "abhishekY495",
    verified: true,
    bio: "Into space and rockets. Fueled by ☕",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
    website: "https://github.com/abhishekY495",
    followers: [],
    following: [
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "musicalscience",
        fullName: "melodysheep",
        verified: false,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
      },
      {
        userName: "thePrimalSpace",
        fullName: "Primal Space",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
      },
    ],
  },
  {
    userName: "johndoe77",
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    password: "johndoe77",
    verified: false,
    bio: "...",
    avatar:
      "https://api.dicebear.com/6.x/bottts-neutral/svg?seed=f97a4ff2-49fa-4858-b9f1-ae2e0f432913",
    website: "",
    followers: [],
    following: [],
  },
  {
    userName: "neiltyson",
    fullName: "Neil deGrasse Tyson",
    email: "neiltyson2009@gmail.com",
    password: "58qyt7@4857t#!q875",
    verified: true,
    bio: "Astrophysicist",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
    website: "https://neildegrassetyson.com",
    followers: [],
    following: [
      {
        userName: "abhishekY495",
        fullName: "Abhishek Yadav",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      },
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "latestinspace",
        fullName: "Latest in space",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      },
    ],
  },
  {
    userName: "tweetsauce",
    fullName: "Vsauce",
    email: "michaelstevens@vsauce.com",
    password: "s5f6$pov46f597r@@",
    verified: true,
    bio: "My name is Michael Stevens.",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
    website: "https://www.youtube.com/Vsauce",
    followers: [],
    following: [
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "latestinspace",
        fullName: "Latest in space",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      },
      {
        userName: "abhishekY495",
        fullName: "Abhishek Yadav",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      },
    ],
  },
  {
    userName: "redditSpacePorn",
    fullName: "Space Porn",
    email: "spaceporn@reddit.com",
    password: "spaceporn@123",
    verified: false,
    bio: "Follow for some top astrophotography",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
    website: "https://www.instagram.com/space_bible",
    followers: [],
    following: [
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "thePrimalSpace",
        fullName: "Primal Space",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
      },
    ],
  },
  {
    userName: "latestinspace",
    fullName: "Latest in space",
    email: "admin@latestinspace.com",
    password: "latest@space1000",
    verified: true,
    bio: "Reporting on real-time space events.",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
    website: "https://latestinspace.substack.com",
    followers: [],
    following: [
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "abhishekY495",
        fullName: "Abhishek Yadav",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      },
    ],
  },
  {
    userName: "thePrimalSpace",
    fullName: "Primal Space",
    email: "admin@primalnebula.com",
    password: "primal#space123",
    verified: true,
    bio: "Answering about all things space!",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
    website: "https://www.primalnebula.com",
    followers: [],
    following: [
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "musicalscience",
        fullName: "melodysheep",
        verified: false,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
      },
    ],
  },
  {
    userName: "musicalscience",
    fullName: "melodysheep",
    email: "admin@melodysheep.com",
    password: "melodysheep520",
    verified: false,
    bio: "musicmaker / filmmaker / space freak",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
    website: "https://www.melodysheep.com",
    followers: [],
    following: [
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "thePrimalSpace",
        fullName: "Primal Space",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
      },
    ],
  },
  {
    userName: "karanp21",
    fullName: "Karan Patil",
    email: "karanpatil@gmail.com",
    password: "karanpatil@123",
    verified: false,
    bio: "A fellow space nerd.",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
    website: "",
    followers: [],
    following: [
      {
        userName: "abhishekY495",
        fullName: "Abhishek Yadav",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      },
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "redditSpacePorn",
        fullName: "Space Porn",
        verified: false,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
      },
    ],
  },
  {
    userName: "scottliam61",
    fullName: "Liam scott",
    email: "scottliam61@gmail.com",
    password: "scottliam61",
    verified: false,
    bio: "Amateur Astrographer 🔭",
    avatar:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
    website: "https://www.instagram.com/scottliam61",
    followers: [],
    following: [
      {
        userName: "abhishekY495",
        fullName: "Abhishek Yadav",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      },
      {
        userName: "neiltyson",
        fullName: "Neil deGrasse Tyson",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      },
      {
        userName: "tweetsauce",
        fullName: "Vsauce",
        verified: true,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      },
      {
        userName: "musicalscience",
        fullName: "melodysheep",
        verified: false,
        avatar:
          "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
      },
    ],
  },
];

users.forEach((user) => {
  user.following.forEach((followingUser) => {
    const followedUser = users.find(
      (fwdUser) => fwdUser.userName === followingUser.userName
    );
    followedUser.followers.push(user);
  });
});

export const localData = {
  postsData: [
    {
      id: uuidv4(),
      userName: "abhishekY495",
      fullName: "Abhishek Yadav",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      verified: true,
      content:
        "Hello, this is the 1st post on Cosmic Connect.\nHope you guys enjoy the app 🙌",
      media: "",
      createdAt: "2023-01-01T12:32:13.632Z",
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
        {
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
        {
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "Loving it so far.",
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
          verified: true,
          commentedAt: getRandomDate(),
        },
        {
          id: uuidv4(),
          content:
            "Thanks Abhishek, for creating Cosmic Connect. It's amazing to see all the people interested in space here.\nCan't wait to explore all the incredible features you've built.",
          userName: "scottliam61",
          fullName: "Liam scott",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
          verified: false,
          commentedAt: getRandomDate(),
        },
        {
          id: uuidv4(),
          content: "Hi, there",
          userName: "karanp21",
          fullName: "Karan Patil",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
          verified: false,
          commentedAt: getRandomDate(),
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "scottliam61",
      fullName: "Liam scott",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
      verified: false,
      content: "Nebula RCW58 from my backyard.\nTelescope - Meade LX200 ACF",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1688663088/cosmic-connect/postImage/Nebula-RCW58_moj3u0.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "Stunning",
          userName: "karanp21",
          fullName: "Karan Patil",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
          verified: false,
          commentedAt: getRandomDate(),
        },
        {
          id: uuidv4(),
          content:
            "Still can't believe that we can take such pictures from our backyard. Need to buy a telescope now 😬",
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "neiltyson",
      fullName: "Neil deGrasse Tyson",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      verified: true,
      content:
        "Mercury being closest to the Sun is not the hottest planet in our solar system - that title belongs to Venus.",
      media: "",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content: "😲😲",
          userName: "johndoe77",
          fullName: "John Doe",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/johndoe77_bk7q8k.png",
          verified: false,
          commentedAt: getRandomDate(),
        },
        {
          id: uuidv4(),
          content: "Woah, didnt know that",
          userName: "karanp21",
          fullName: "Karan Patil",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
          verified: false,
          commentedAt: getRandomDate(),
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "neiltyson",
      fullName: "Neil deGrasse Tyson",
      verified: true,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      content: "Buy my book - Astrophysics for People in a Hurry",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730627/cosmic-connect/postImage/131405_Astrophysics-for-people-in-a-hurry_dqkmeb.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
          verified: true,
        },
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
          verified: true,
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content: "Bookmarked so i dont forget reading it.",
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
          verified: true,
          commentedAt: getRandomDate(),
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "tweetsauce",
      fullName: "Vsauce",
      verified: true,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      content: "To avoid crowds, visit areas that are less crowded.",
      media: "",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "🤣🤣",
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
          verified: true,
          commentedAt: getRandomDate(),
        },
        {
          id: uuidv4(),
          content: "Mind-blowing advice right there.",
          userName: "scottliam61",
          fullName: "Liam scott",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
          verified: false,
          commentedAt: getRandomDate(),
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "abhishekY495",
      fullName: "Abhishek Yadav",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
      verified: true,
      content:
        "Asteroid Alert is finally done. Built using NASA's API. It shows asteroids that are going to make a close approach by Earth today and gives a 3D view of the asteroid in space.\nCheck it out here - https://asteroidalert.netlify.app",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730626/cosmic-connect/postImage/FnzXdkTaUAcSviC_zndjqb.jpg",
      createdAt: getRandomDate(),
      edited: true,
      updatedAt: "",
      likedBy: [
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content: "Cool site 👌",
          userName: "tweetsauce",
          fullName: "Vsauce",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
          verified: true,
          commentedAt: getRandomDate(),
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "tweetsauce",
      fullName: "Vsauce",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      verified: true,
      content:
        "The first photograph of the full-disk of Earth. Taken on 30 May 1966 by the Soviet Molniya 1 satellite, it was released to the public 56 years ago today.",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730626/cosmic-connect/postImage/FWNjMutUcAADKwl_l1wt2k.jpg",
      createdAt: getRandomDate(),
      edited: true,
      updatedAt: "",
      likedBy: [
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [],
    },
    {
      id: uuidv4(),
      userName: "tweetsauce",
      fullName: "Vsauce",
      verified: true,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      content: "",
      media:
        "https://res.cloudinary.com/dfuirkjxj/video/upload/v1688493558/cosmic-connect/postVideo/solar-system-scale-stickers-shorts-720-ytshorts.savetube.me_vmikyz.mp4",
      isVideo: true,
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
        {
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content: "Mind-blowing 😲😲",
          userName: "karanp21",
          fullName: "Karan Patil",
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
          verified: false,
          commentedAt: getRandomDate(),
        },
        {
          id: uuidv4(),
          content: "This will always be one of my favourite Vsauce videos.",
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "redditSpacePorn",
      fullName: "Space Porn",
      verified: false,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
      content: "The Blue Dragon River seen from space.",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730626/cosmic-connect/postImage/FTfDzdmXsAE2BYP_femfc8.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "🐉",
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "redditSpacePorn",
      fullName: "Space Porn",
      verified: false,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
      content: "The Flame Nebula | NASA",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730627/cosmic-connect/postImage/FyCOsghWYBE_3TK_qrglvq.jpg",
      createdAt: getRandomDate(),
      edited: true,
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [],
    },
    {
      id: uuidv4(),
      userName: "redditSpacePorn",
      fullName: "Space Porn",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
      verified: false,
      content:
        "James Webb Space Telescope's infrared view of the Pillars of Creation",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730627/cosmic-connect/postImage/FwW7PFxX0AAuTnE_sxscvu.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content:
            "Pillars of creation is the name of the picture, what you see is part of the Eagle nebula which is 9.5 light years long.",
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "redditSpacePorn",
      fullName: "Space Porn",
      verified: false,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
      content: "Northern Lights Over Canada captured by the crew on the ISS",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730627/cosmic-connect/postImage/FwL3SzVXsBgzEBB_mdgdtd.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content:
            "Fun fact: The ISS orbits Earth at an approximate altitude of 420 😜 kilometers above Earth.",
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "latestinspace",
      fullName: "Latest in space",
      verified: true,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      content: "NASA's new lunar car design for upcoming moon missions in 2025",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730627/cosmic-connect/postImage/FyEbTBwXwAA-HgY_sntfye.jpg",
      createdAt: getRandomDate(),
      edited: true,
      updatedAt: "",
      likedBy: [
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
        {
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
      ],
      comments: [],
    },
    {
      id: uuidv4(),
      userName: "latestinspace",
      fullName: "Latest in space",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      verified: true,
      content:
        "This came from space ☄️ A metallic meteorite made up of iron-nickel and olivine crystals.",
      media:
        "https://res.cloudinary.com/dfuirkjxj/video/upload/v1686731677/cosmic-connect/postVideo/3LfSIgkQeRL3fLTn_heutnp.mp4",
      isVideo: true,
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content:
            "If you like interesting space news, subscribe to our newsletter\nhttp://latestinspace.substack.com",
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "latestinspace",
      fullName: "Latest in space",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      verified: true,
      content:
        "Hoba, the largest meteorite ever discovered, still lies where it struck over 80,000 years ago.",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686731612/cosmic-connect/postImage/FxbOZE9WcAAInqg_uhcrmt.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "Bullseye landing!",
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "latestinspace",
      fullName: "Latest in space",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      verified: true,
      content:
        "NASA is developing snake robots to explore Saturn's icy moon Enceladus ❄️.",
      media:
        "https://res.cloudinary.com/dfuirkjxj/video/upload/v1686731792/cosmic-connect/postVideo/8FATmQMHiCujPKP__vpihfa.mp4",
      isVideo: true,
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content:
            "It is still in the testing phase and is powered during field tests via a tether to an exterior power supply.\nIf the robot is ever sent on a future mission to space, it will likely be powered via a long tether connected to a spacecraft that would land on the surface.",
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "latestinspace",
      fullName: "Latest in space",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      verified: true,
      content:
        "Space fact: The Moon moves away from Earth at about 1.49 inches (3.78 centimeters) per year.",
      media: "",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "Iam gonna miss it 🥹",
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "latestinspace",
      fullName: "Latest in space",
      verified: true,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
      content: "What would you do?",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730626/cosmic-connect/postImage/Fuj6w1yWAAEvEQh_aj84so.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "I'd stop it tbh",
          userName: "johndoe77",
          fullName: "John Doe",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/johndoe77_bk7q8k.png",
        },
        {
          id: uuidv4(),
          content: "I would call Elonmusk for help.",
          userName: "tweetsauce",
          fullName: "Vsauce",
          commentedAt: getRandomDate(),
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "thePrimalSpace",
      fullName: "Primal Space",
      verified: true,
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
      content: "Gimbal testing of NASA's RS-25 engine! 🔥",
      media:
        "https://res.cloudinary.com/dfuirkjxj/video/upload/v1686731926/cosmic-connect/postVideo/lhxums16zpyEblAf_zza2xr.mp4",
      isVideo: true,
      createdAt: getRandomDate(),
      edited: true,
      updatedAt: "",
      likedBy: [
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      comments: [],
    },
    {
      id: uuidv4(),
      userName: "thePrimalSpace",
      fullName: "Primal Space",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
      verified: true,
      content:
        "Want to learn more about the mysterious journey of Apollo 10's lunar module? Check out my newest video\nhttps://youtu.be/xjdPtBofH7s",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730627/cosmic-connect/postImage/Fw-uzDSaIAgnchN_zt8q3r.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
        {
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "tweetsauce",
          fullName: "Vsauce",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content: "Animation and Explaination on point.",
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
        {
          id: uuidv4(),
          content: "I hope we might be able to retrieve Snoopy in 2028.",
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "thePrimalSpace",
      fullName: "Primal Space",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
      verified: true,
      content:
        "Pluto moves so slowly that it won't complete its first full orbit since its discovery until Monday, March 23rd, 2178",
      media: "",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
      ],
      bookmarkedBy: [],
      comments: [
        {
          id: uuidv4(),
          content: "Leave Pluto Alone 😡😡",
          userName: "tweetsauce",
          fullName: "Vsauce",
          commentedAt: getRandomDate(),
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
        },
        {
          id: uuidv4(),
          content: "I will be waiting for that day 🤞",
          userName: "musicalscience",
          fullName: "melodysheep",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "musicalscience",
      fullName: "melodysheep",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
      verified: false,
      content:
        "If you could travel anywhere in the galaxy, where would you go? Allow me to be your guide. Proudly presenting THE SIGHTS OF SPACE: A Voyage to Spectacular Alien Worlds\nhttps://www.youtube.com/watch?v=HTHj_pvEYYE",
      media:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/v1686730626/cosmic-connect/postImage/Fiv5W8BaEAEHUYR_uwofnx.jpg",
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
        {
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content:
            "One of the best videos I ever watched. The animation, sound effects and the narration are just too good.\nCan't recommend enough.",
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          id: uuidv4(),
          content:
            "This is quite an accurate representation of the planets.\nWell done.",
          userName: "neiltyson",
          fullName: "Neil deGrasse Tyson",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
        },
        {
          id: uuidv4(),
          content: "A Real Masterpiece, this video is awesome 🔥",
          userName: "thePrimalSpace",
          fullName: "Primal Space",
          verified: true,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/thePrimalSpace_eubcz6.jpg",
        },
        {
          id: uuidv4(),
          content: "Absolutely stunning video.",
          userName: "scottliam61",
          fullName: "Liam scott",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686679539/cosmic-connect/userAvatar/scottliam61_jyjdei.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      userName: "musicalscience",
      fullName: "melodysheep",
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/musicalscience_fyateu.jpg",
      verified: false,
      content:
        "WATER WORLDS. They are probably out there. There are probably billions of them in our galaxy. And some of them might just host alien life 👽\nFull video dropping soon.",
      media:
        "https://res.cloudinary.com/dfuirkjxj/video/upload/v1686732193/cosmic-connect/postVideo/mvNNENOBRaHqcfdc_ubgjw6.mp4",
      isVideo: true,
      createdAt: getRandomDate(),
      updatedAt: "",
      likedBy: [
        {
          userName: "latestinspace",
          fullName: "Latest in space",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/latestinspace_xi1ksf.jpg",
        },
        {
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
        {
          userName: "abhishekY495",
          fullName: "Abhishek Yadav",
          verified: true,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678456/cosmic-connect/userAvatar/abhishekY495_wdipoi.jpg",
        },
        {
          userName: "redditSpacePorn",
          fullName: "Space Porn",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
        },
      ],
      bookmarkedBy: [
        {
          userName: "redditSpacePorn",
          fullName: "Space Porn",
          verified: false,
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/redditSpacePorn_hmgvro.jpg",
        },
      ],
      comments: [
        {
          id: uuidv4(),
          content: "first",
          userName: "karanp21",
          fullName: "Karan Patil",
          verified: false,
          commentedAt: getRandomDate(),
          avatar:
            "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678457/cosmic-connect/userAvatar/karanp21_cyiffp.jpg",
        },
      ],
    },
  ],
  usersData: users,
};

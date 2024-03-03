type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];

  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];

  export const menu: Menu = [
   {
    id: 1,
    slug: 'Onigiri',
    title: 'Onigiri',
    desc: 'A traditional Japanese rice dish that is made with rice and fish. It is typically served with a variety of condiments, such as soy sauce, wasabi, and ginger.',
    img: '/onigiri.png',
    color: 'red',
   },  
   {
    id: 2,
    slug: 'Sides',
    title: 'Sides',
    desc: 'A range of small dishes including Gyoza, Yakitori and Karage',
    img: '/a_photo_of_gyoza.png',
    color: 'blue',
   }, 
   {
    id: 3,
    slug: 'Ramen',
    title: 'Ramen',
    desc: 'A selection of Ramen dishes',
    img: '/yakitori.png',
    color: 'green',
   },
   {
    id: 4,
    slug: 'Rice',
    title: 'Rice',
    desc: 'A selection of Rice dishes',
    img: '/yakitori.png',
    color: 'green',
   },
  //  {
  //   id: ,
  //   slug: '',
  //   title: '',
  //   desc: '',
  //   img: '',
  //   color: ''
  //  },       
   
   

  ];

  export const rice: Products = [
    {
      id: 1,
      title: "Gyudon",
      desc: "Indulge in the tantalizing blend of tender beef, savory sauce, and steaming rice that defines the exquisite Japanese comfort dish, Gyudon.",
      img: "/gyudon.png",
      price: 5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },

    {
      id: 2,
      title: "Katsudon",
      desc: "",
      img: "/katsu.png",
      price: 5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },

    {
      id: 3,
      title: "Curry Rice",
      desc: "Discover the irresistible flavors of authentic Japanese curry — a harmonious blend of tender meat, vibrant vegetables, and aromatic spices that will transport your taste buds to Japan.",
      img: "/curry.png",
      price: 5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Omurice",
      desc: "Welcome to our restaurant, where you can indulge in the delightful fusion of a fluffy omelette draped over fragrant seasoned fried rice, creating a harmonious blend of flavors that will transport your taste buds to the heart of Japan with every mouthwatering bite of our signature omurice.",
      img: "/temporary/p1.png",
      price: 5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },

    

  ]
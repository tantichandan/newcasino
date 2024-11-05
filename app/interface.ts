export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: string;
    slug: string;
    categoryName: string;
    name: string;
    click: string;
    categorydescription: string;
    payments: string;
    withdrawal: string;
    bonus: string;
    language: string;
    countries: string;
  
  }
  
  export interface fullProduct {
    _id: string;
    imageUrl: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
    click: string;
    content: any;
    reviews: any;
    payments: string;
    language: string;
    countries: string;
    withdrawal: string;
  }

  export interface post {
    title: string;
    overview: string;
    content: any,
    _id: string,
    slug: {
      current: string
    },

    _createdAt: string;
  }
  
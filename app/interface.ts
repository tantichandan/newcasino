export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: any;
    slug: string;
    categoryName: string;
    name: string;
    click: string;
    description: string;
    payments: string;
    withdrawal: any;
    bonus: string;
    language: string;
    countries: string;
    reviews: any;
  
  }
  
  export interface fullProduct {
    _id: string;
    imageUrl: any;
    price: string;
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
    withdrawal: any;
  }

  export interface post {
    title: string;
    overview: string;
    estimatedReadTime: number;
    authorName: string;
    authorBio: string;
    authorAvatar: any;
    categoryName: any;
    imageUrl: any;
    content: any,
    _id: string,
    slug: {
      current: string
    },

    _createdAt: string;
  }
  
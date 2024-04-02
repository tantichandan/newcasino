export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    click: string;
  
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
  
// schemas/pet.js
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of the product'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of:[{type:'image'}]
      },

      

      {
        name: 'description',
        type: 'text',
        title: 'Description of product'
      },

      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
            source: 'name',
        }
      },

      {
        name: 'price',
        type: 'number',
        title: 'Price product'
      },

      {
        name: 'click',
        title: 'Click',
        type: 'url',
        
      },

      {
        name: 'category',
        type: 'reference',
        title: 'Category',
        to:[
            {
                type:'category'
            }
        ]
      },

      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of:[
            {
                type: 'block',

            },
            
        ]
    },

    {
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      of:[
          {
              type: 'block',

          },
          
      ]
  }


    ]
  }

  
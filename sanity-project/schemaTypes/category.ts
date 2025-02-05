// schemas/pet.js
export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of category'
      },

      {
        name: 'categoryDescription',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
  
          },
  
        ]
      },
      
    ]
  }

  
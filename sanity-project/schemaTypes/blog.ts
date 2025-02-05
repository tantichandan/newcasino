export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'estimatedReadTime',
            type: 'number',
            Title: 'estimatedReadTime'
        },

        {
            name: 'overview',
            type: 'string',
            Title: 'Overview'
        },

        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: [
              {
                type: 'category'
              }
            ]
          },

        {
            name: 'images',
            type: 'array',
            title: 'images',
            of: [{ type: 'image' }]
          },

        {
            name: 'slug',
            type: 'slug',
            title: 'Post Slug',
            options: {
                source: 'title'
            }
        },

        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of:[
                {
                    type: 'block',

                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative Text'
                        }
                    ]
                }
            ]
        },

        {
            name: 'authorName',
            type: 'string',
            title: 'Author Name',
            initialValue: 'TheCasinoLoot Expert', // Fixed author name
        },
        {
            name: 'authorBio',
            type: 'text',
            title: 'Author Bio',
            initialValue: 'TheCasinoLoot Expert provides insights into the world of casino games and online gambling.',
        },
        {
            name: 'authorAvatar',
            type: 'image',
            title: 'Author Avatar',
            options: {
                hotspot: false, // No need for cropping
            },
        }

    ]
        

}
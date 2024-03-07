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
            name: 'overview',
            type: 'string',
            Title: 'Overview'
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
        }

    ]
        

}
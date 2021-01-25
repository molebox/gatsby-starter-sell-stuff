export default {
    title: 'Brand Description',
    name: 'brandDescription',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'An image to work alongside the brand description',
        },
    ]
}
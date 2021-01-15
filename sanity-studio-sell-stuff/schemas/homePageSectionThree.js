export default {
    title: 'Home page section Three',
    name: 'homePageSectionThree',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Full page image for the third section of the home page',
            options: {
                hotspot: true
            }
        }
    ]
}
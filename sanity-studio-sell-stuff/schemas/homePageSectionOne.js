export default {
    title: 'Home page section One',
    name: 'homePageSectionOne',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'imageOne',
            title: 'Image One',
            type: 'image',
            description: 'Hero image for the first section of the home page',
            options: {
                hotspot: true
            }
        },
        {
            name: 'imageTwo',
            title: 'Image Two',
            type: 'image',
            description: 'Second Hero image for the first section of the home page',
            options: {
                hotspot: true
            }
        }
    ]
}
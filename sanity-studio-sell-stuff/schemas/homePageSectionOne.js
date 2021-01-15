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
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Hero image for the first section of the home page',
            options: {
                hotspot: true
            }
        }
    ]
}
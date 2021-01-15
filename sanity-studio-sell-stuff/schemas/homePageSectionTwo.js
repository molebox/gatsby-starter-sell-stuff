export default {
    title: 'Home page section Two',
    name: 'homePageSectionTwo',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            validation: Rule => Rule.max(3),
            description: '3 images to show in the second section of the home page',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          },
    ]
}
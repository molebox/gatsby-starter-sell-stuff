export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'featuredProducts',
            title: 'Featured Products',
            type: 'array',
            description: 'Choose 3 products to feature on the home page',
            validation: Rule => Rule.max(3),
            of: [
                {
                    type: 'reference',
                    to: {type: 'product'}
                }
            ]
        },
        {
            name: 'sectionOne',
            title: 'Section One',
            type: 'homePageSectionOne'
        },
        {
            name: 'sectionTwo',
            title: 'Section Two',
            type: 'homePageSectionTwo'
        },
        {
            name: 'sectionThree',
            title: 'Section Three',
            type: 'homePageSectionThree'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
        }
    ]
}
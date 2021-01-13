export default {
    name: 'featuredProducts',
    title: 'Featured Products',
    type: 'document',
    fields: [
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
        }
    ]
}
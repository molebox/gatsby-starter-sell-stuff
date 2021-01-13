export default {
  name: 'category',
  title: 'Category',
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
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'subCategories',
      title: 'Sub-Categories',
      description: 'If this is a parent category it should have sub categories. If this category is named Men then it might have the following sub-categories: t-shirts, jeans, shoes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}]
        }
      ]
    },
    {
      name: 'isParentCategory',
      title: 'Is Parent Category',
      description: 'Is this category a parent to other categories? if its top level and has no sub-categories then it is a parent.',
      type: 'boolean'
    }
  ],
  initialValue: {
    isParentCategory: false
  }
}

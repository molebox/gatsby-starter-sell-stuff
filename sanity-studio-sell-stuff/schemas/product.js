export default {
  name: 'product',
  title: 'Product',
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
      name: 'productId',
      title: 'Product ID',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string'
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ],
      validation: (rule) => rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images[0]'
    }
  }
}

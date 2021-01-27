export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      media: 'logo',
    },
  },
}
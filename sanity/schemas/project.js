export const project = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slideLink',
      title: 'Slide Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'telegramTopic',
      title: 'Telegram Topic Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [{ value: 'ongoing', checked: true }, { value: 'deployed' }, { value: 'archived' }],
        layout: 'radio',
      },
    },
  ],
};

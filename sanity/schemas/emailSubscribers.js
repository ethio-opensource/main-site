export const emailSubscribers = {
  name: 'emailSubscribers',
  title: 'Email Subscribers List',
  type: 'document',
  fields: [
    {
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.email().required(),
    },
  ],
};

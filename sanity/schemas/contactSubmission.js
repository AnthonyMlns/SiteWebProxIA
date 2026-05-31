export default {
  name: 'contactSubmission',
  title: 'Formulaire de contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Entreprise',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Taille de l\'entreprise',
      type: 'string',
      options: {
        list: [
          {title: '1-5 (TPE)', value: '1-5'},
          {title: '6-20 (Petite PME)', value: '6-20'},
          {title: '21-50 (PME)', value: '21-50'},
          {title: '50+', value: '50+'},
        ],
      },
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Date de soumission',
      type: 'datetime',
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'Nouveau', value: 'new'},
          {title: 'Lu', value: 'read'},
          {title: 'En cours', value: 'in_progress'},
          {title: 'Traité', value: 'done'},
        ],
      },
      initialValue: 'new',
    },
  ],
  orderings: [
    {
      title: 'Date',
      name: 'createdAt',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
    },
    prepare({title, subtitle, status}) {
      return {
        title: title || 'Sans nom',
        subtitle: `${subtitle || ''} ${status === 'new' ? '🔴' : ''}`,
      }
    },
  },
}

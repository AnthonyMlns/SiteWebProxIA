export default {
  name: 'useCaseCategory',
  title: 'Catégorie de cas d\'usage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Étiquette ROI',
      type: 'string',
      options: {
        list: [
          {title: 'ROI rapide', value: 'ROI rapide'},
          {title: 'ROI confirmé', value: 'ROI confirmé'},
          {title: 'ROI durable', value: 'ROI durable'},
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'tagColor',
      title: 'Couleur de l\'étiquette',
      type: 'string',
      options: {
        list: [
          {title: 'Rouge (rapide)', value: 'fast'},
          {title: 'Gris foncé (confirmé)', value: 'mid'},
          {title: 'Gris clair (durable)', value: 'long'},
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'items',
      title: 'Cas d\'usage',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'useCase',
          title: 'Cas d\'usage',
          fields: [
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required(),
            },
            {
              name: 'outcome',
              title: 'Résultat / Métrique',
              type: 'string',
              description: 'Ex: −80% de temps de tri · Délai de réponse divisé par 3',
              validation: Rule => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'outcome',
            },
          },
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
      order: 'order',
    },
    prepare({title, tag, order}) {
      return {
        title: title || 'Sans titre',
        subtitle: `${order ? `#${order} · ` : ''}${tag || ''}`,
      }
    },
  },
}

import type { CollectionConfig } from 'payload'

export const Students: CollectionConfig = {
  slug: 'students',
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}

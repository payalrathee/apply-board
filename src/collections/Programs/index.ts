import { CollectionConfig } from "payload";

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'createdAt'],
  },
  fields: [
    {
        name: 'name',
        label: 'Program Name',
        type: 'text',
        required: true,
    }
  ]
}
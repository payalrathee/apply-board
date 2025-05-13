import { CollectionConfig } from "payload";

export const Recruiters: CollectionConfig = {
    slug: 'recruiters',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'createdAt'],
    },
    fields: [
        {
            name: 'name',
            label: 'Recruiter Name',
            type: 'text',
            required: true,
        },
    ]
}
import type { CollectionConfig } from 'payload';

import { authenticated } from '../../access/authenticated';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Programs: CollectionConfig = {
    slug: 'programs',
    access: {
        admin: authenticated,
        read: authenticated,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    admin: {
        useAsTitle: 'programName',
    },
    fields: [
        {
            name: 'programName',
            label: 'Program Name',
            type: 'text',
            required: true,
        },
        {
            name: 'about',
            label: 'About',
            type: 'richText',
            required: false,
            editor: lexicalEditor({}),
        },
        {
            name: 'programLevel',
            label: 'Program Level',
            type: 'select',
            required: true,
            options: [
                { label: 'Undergraduate', value: 'undergraduate' },
                { label: 'Postgraduate', value: 'postgraduate' },
                { label: 'Diploma', value: 'diploma' },
                { label: 'Certificate', value: 'certificate' },
            ],
        },
        {
            name: 'applicationFee',
            label: 'Application Fee',
            type: 'number',
            required: false,
        },
    ],
};

import type { CollectionConfig } from 'payload';

import { authenticated } from '../../access/authenticated';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { anyone } from '@/access/anyone';

export const Programs: CollectionConfig = {
    slug: 'programs',
    access: {
        admin: authenticated,
        read: anyone,
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
                { label: 'Elementary and High School', value: 'school' },
                { label: 'Language Proficiency', value: 'language' },
            ],
        },
        {
            name: 'field',
            label: 'Field of Study',
            type: 'select',
            required: true,
            options: [
                { label: 'Arts', value: 'arts' },
                { label: 'Business, Management, Economics', value: 'business' },
                { label: 'Elementary and High School', value: 'school' },
                { label: 'Language Proficiency', value: 'language' },
                { label: 'Engineering and Technology', value: 'tech' },
                { label: 'Health Sciences and Medicine', value: 'medicine' },
                { label: 'Law and Politics', value: 'law' },
                { label: 'Science', value: 'science' },
                { label: 'Others', value: 'other' },
            ],
        },
        {
            name: 'applicationFee',
            label: 'Application Fee',
            type: 'number',
            required: false,
        },
        {
            name: 'institution',
            type: 'relationship',
            relationTo: 'institutions',
            required: true, 
        },
    ],
};

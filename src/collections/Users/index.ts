import type { CollectionConfig } from 'payload';
import { authenticated } from '../../access/authenticated';
import { anyone } from '@/access/anyone';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    timestamps: true,
    access: {
        admin: ({ req }) => req.user?.role === 'admin',
        create: anyone,
        delete: authenticated,
        read: anyone,
        update: anyone,
    },
    admin: {
        defaultColumns: ['firstName', 'lastName', 'email', 'role'],
        useAsTitle: 'email',
        hidden: ({ user }) => user?.role !== 'admin', 
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
            required: true,
        },
        {
            name: 'lastName',
            type: 'text',
        },
        {
            name: 'phone',
            type: 'text',
            required: false,
        },
        {
            name: 'role',
            type: 'select',
            required: true,
            defaultValue: 'student',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Recruiter', value: 'recruiter' },
                { label: 'Student', value: 'student' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
    ],
};

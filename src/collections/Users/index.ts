import type { CollectionConfig } from 'payload';
import { authenticated } from '../../access/authenticated';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    timestamps: true,
    access: {
        admin: ({ req }) => req.user?.role === 'admin',
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        defaultColumns: ['firstName', 'lastName', 'email', 'role'],
        useAsTitle: 'email',
        // hidden: ({ user }) => user?.role === 'recruiter', 
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
            defaultValue: 'recruiter',
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

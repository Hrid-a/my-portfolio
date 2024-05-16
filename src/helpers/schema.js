import { z } from 'zod';

export const schema = z.object({
    name: z.string()
        .min(3, 'Please enter your name.')
        .max(20, "Your name shouldn't be longer than 20 characters"),
    email: z.string()
        .min(1, 'Please enter your email.')
        .email('The email address is badly formatted.'),
    message: z.string()
        .min(1, 'Please enter your message.')
        .min(10, 'Your message must have 10 characters or more.')
        .max(200, 'Your message must have less than 200 characters.')
        .transform(value => value.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
});

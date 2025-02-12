'use server';

import { z } from 'zod';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true});

export async function createInvoices(formdata:FormData) {
    const {customerId, amount, status } = CreateInvoice.parse({
        customerId: formdata.get('customerId'),
        amount: formdata.get('amount'),
        status: formdata.get('status'),
    });
    const amountIncents = amount * 100;
}
import { z } from 'zod'

export const autoCompleteProductSchema = z.object({
	itemsReturned: z.array(
		z.object({
			items: z.object({
				items: z.object({
					productId: z.string(),
					itemID: z.string(),
					name: z.string(),
					nameComplete: z.string(),
					imageUrl: z.string(),
				}),
			}),
			thumb: z.string(),
			thumbUrl: z.string().nullable(),
			name: z.string(),
			href: z.string(),
			criteria: z.string().nullable(),
		}),
	),
})

export type AutoCompleteProductProps = z.infer<typeof autoCompleteProductSchema>

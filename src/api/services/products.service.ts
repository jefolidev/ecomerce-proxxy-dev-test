import { api } from '../axios'
import {
	type AutoCompleteProductProps,
	autoCompleteProductSchema,
} from '../schemas/auto-complete-product.schema'

const { vtexAutocomplete } = api

export const productsService = {
	fetchAutoComplete: async (
		term: string,
	): Promise<AutoCompleteProductProps> => {
		try {
			const { data } = await vtexAutocomplete.get(`productNameContains=${term}`)

			const productData = autoCompleteProductSchema.safeParse(data)

			if (!productData.success) {
				console.error(
					'Erro ao validar dados no autocomplete: ',
					productData.error.format(),
				)

				throw new Error('Invalid data returned by auto complete')
			}

			return productData.data
		} catch (error) {
			console.error('Erro ao realizar o auto complete', error)
			throw new Error('Error excepted at search the data')
		}
	},
}

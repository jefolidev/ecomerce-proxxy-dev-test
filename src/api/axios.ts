import { VTEX_API } from '@/constants/api'
import axios from 'axios'

export const api = {
	vtexAutocomplete: axios.create({
		baseURL: VTEX_API.AUTOCOMPLETE,
	}),

	vtexSearch: axios.create({
		baseURL: VTEX_API.SEARCH,
	}),
}

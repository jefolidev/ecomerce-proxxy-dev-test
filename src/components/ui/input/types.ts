import type { InputHTMLAttributes } from 'react'

type InputSizes = 'sm' | 'base' | 'lg'

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	fullWidth?: boolean
	loading?: boolean
	size?: InputSizes
}

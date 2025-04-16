import type { ButtonHTMLAttributes, JSX, ReactNode } from 'react'

type ButtonVariants =
	| 'primary'
	| 'secondary'
	| 'ghost'
	| 'outline'
	| 'success'
	| 'destructive'

type ButtonSizes = 'sm' | 'base' | 'lg' | 'xl'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	size?: ButtonSizes
	icon?: JSX.Element
	variant?: ButtonVariants
	loading?: boolean
}

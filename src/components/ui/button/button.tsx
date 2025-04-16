import type { ButtonProps } from './types'

import { CircleNotch } from '@phosphor-icons/react'

export function Button({
	children,
	loading = false,
	variant = 'primary',
	type,
	icon,
	size = 'base',
}: ButtonProps) {
	return (
		<>
			<button type={type} className="button">
				{loading ? <CircleNotch /> : icon}
				{children}
			</button>
		</>
	)
}

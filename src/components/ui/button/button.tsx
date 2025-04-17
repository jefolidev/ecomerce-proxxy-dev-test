import type { ButtonProps } from './types'

import { CircleNotch } from '@phosphor-icons/react'

import styles from './button.module.scss'

export function Button({
	children,
	loading = false,
	variant = 'primary',
	type,
	icon,
	size = 'base',
	...rest
}: ButtonProps) {
	return (
		<>
			<button
				type={type}
				className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]}  ${loading ? styles['button--loading'] : ''} `}
				{...rest}
			>
				{loading ? <CircleNotch className={styles['loading-icon']} /> : icon}
				{loading ? '' : children}
			</button>
		</>
	)
}

import styles from './input.module.scss'
import type { InputProps } from './types'

export function Input({
	type = 'text',
	placeholder,
	size = 'base',
	fullWidth = false,
	loading = false,
	...rest
}: InputProps) {
	return (
		<>
			<input
				className={`${styles.input} ${styles[`input--${type}`]} ${styles[`input--${size}`]} ${fullWidth ? styles['input--fullWidth'] : ''}`}
				type={type}
				placeholder={placeholder}
        disabled={loading}
				{...rest}
			/>
		</>
	)
}

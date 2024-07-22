import React from 'react'
import cn from '@/app/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	type?: string
}

export const NewInput: React.FC<InputProps> = ({ label, type = 'text', className, ...props }) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-input focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		/>
	)
}

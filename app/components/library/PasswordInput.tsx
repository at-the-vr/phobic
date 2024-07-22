'use client'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import cn from '@/app/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const PassWordInput: React.FC<InputProps> = ({ label, className, ...props }) => {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}
	return (
		<div className="relative">
			<input
				type={showPassword ? 'text' : 'password'}
				className={cn(
					'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				{...props}
			/>
			<button
				type="button"
				onClick={togglePasswordVisibility}
				className="absolute inset-y-0 right-0 flex items-center rounded-lg px-2 text-sm leading-5"
			>
				{showPassword ? <FaEyeSlash /> : <FaEye />}
			</button>
		</div>
	)
}

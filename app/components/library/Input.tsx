import React from 'react'
import { twMerge } from 'tailwind-merge'

// D E F I N E    T Y P E   F O R   P R O P S   T H A T   I N P U T   C O M P O N E N T   A C C E P T S

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	description?: string
}

export const Input: React.FC<InputProps> = ({ label, description, className, ...props }) => {
	//  B A S E   C L A S S E S
	const baseClasses: string =
		'block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400'

	const mergedClasses: string = twMerge([baseClasses, className])
	return (
		<div className="max-w-sm space-y-3">
			{label && <label className="mb-2 block text-sm font-medium dark:text-white">{label}</label>}
			<input {...props} className={mergedClasses} />
			{description && (
				<p className="mt-2 block text-sm text-gray-500 dark:text-gray-400">{description}</p>
			)}
		</div>
	)
}

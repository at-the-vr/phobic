import { twMerge } from 'tailwind-merge'

// D E F I N E    T Y P E S   F O R   P R O P S
type CardContainerProps = React.HTMLAttributes<HTMLDivElement>

export const CardContainer: React.FC<CardContainerProps> = ({ className, children, ...props }) => {
	// B A S E    C L A S S E S
	const baseClasses: string = 'rounded-xl border bg-white shadow-sm'
	const mergedClasses = twMerge([baseClasses, className])
	return (
		<div className="w-full max-w-xs" {...props}>
			<div className={mergedClasses}>{children}</div>
		</div>
	)
}

// T H I S    T Y P E   O F   C A R D   I S   F O R   D I S P L A Y I N G    C O N T E N T
export const ContentCard = ({
	header,
	footer,
	title,
	subtitle,
	plaintext,
	link,
	children,
}: {
	header?: string
	footer?: string
	title?: string
	subtitle?: string
	plaintext?: string
	link?: { url: string; text: string }
	children?: React.ReactNode
}) => {
	return (
		<CardContainer>
			{header && (
				<div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{header}</p>
				</div>
			)}
			<div className="flex flex-col p-4 md:p-5">
				{title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
				{subtitle && <p className="mt-1 text-xs font-medium uppercase text-gray-500">{subtitle}</p>}
				{plaintext && <p className="mt-2 text-gray-800">{plaintext}</p>}
				{children}
				{link && (
					<a
						href={link.url}
						className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-600"
					>
						{link.text}
					</a>
				)}
			</div>
			{footer && (
				<div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{footer}</p>
				</div>
			)}
		</CardContainer>
	)
}

export const BlockLinkCard = () => {
	return <div>Card</div>
}
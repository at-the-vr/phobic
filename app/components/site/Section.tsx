export const Section = ({
	title,
	description,
	children,
}: {
	title: string
	description: string
	children: React.ReactNode
}) => {
	return (
		<div>
			{/* S E C T I O N		H E A D I N G */}
			<h2 className="text-lg font-bold text-gray-800">{title}</h2>
			{/* S E C T I O N		D E S C R I P T I O N */}
			<p className="mt-1 text-gray-600">{description}</p>
			{/* S E C T I O N		P R E V I E W */}
			<div className="mt-3">
				<div className="flex flex-col rounded-xl p-6 shadow-sm">
					<div className="flex flex-wrap gap-2">
						{/* P R E V I E W E D		S T U F F		AKA		C H I L D		C O M P O N E N T S */}
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

import { twMerge } from 'tailwind-merge'

// D E F I N E		E X C L U S I V E		P R O P		T Y P E S		F O R		E A C H		V A R I A N T
type PrimaryColors = {
	bg?: string
	hoverBg?: string
	focusRing?: string
}

type SecondaryColors = {
	text?: string
	hoverBorder?: string
	hoverBg?: string
	focusRing?: string
}

type TertiaryColors = {
	text?: string
	hoverText?: string
	focusRing?: string
}

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

// O V E R L O A D		S I G N A T U R E S		F O R		B U T T O N		C O M P O N E N T
type ButtonComponent = {
	(props: BaseButtonProps & { variant?: 'primary'; colors?: PrimaryColors }): JSX.Element
	(props: BaseButtonProps & { variant: 'secondary'; colors?: SecondaryColors }): JSX.Element
	(props: BaseButtonProps & { variant: 'tertiary'; colors?: TertiaryColors }): JSX.Element
}

export const Button: ButtonComponent = ({ variant = 'primary', colors = {}, ...props }) => {
	// B A S E    C L A S S E S
	const baseClasses: string =
		'inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

	const generateVariantClasses = (variant: string, colorProps: any) => {
		switch (variant) {
			case 'primary':
				return `border border-transparent py-3 text-white ${colorProps.bg || 'bg-emerald-500'} ${colorProps.hoverBg || 'hover:bg-emerald-600'}  ${colorProps.focusRing || 'focus:ring-emerald-500'}`
			case 'secondary':
				return `border-2 border-gray-200 py-[0.688rem] hover:text-white ${colorProps.text || 'text-emerald-500'} ${colorProps.hoverBorder || 'hover:border-emerald-500'} ${colorProps.hoverBg || 'hover:bg-emerald-500'} ${colorProps.focusRing || 'focus:ring-emerald-500'}`
			case 'tertiary':
				return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline ${colorProps.text || 'text-emerald-500'} ${colorProps.hoverText || 'hover:text-emerald-700'}  ${colorProps.focusRing || 'focus:ring-emerald-500'}`
			default:
				return ''
		}
	}

	// G E N E R A T E    V A R I A N T   C L A S S E S   B A S E D   O N   C O L O R   P R O P S
	const varibleClasses = generateVariantClasses(variant, colors)

	// M E R G E    B A S E   C L A S S E S   W I T H   V A R I A B L E   C L A S S E S   A N D   A N Y   A D D I T I O N A L   C L A S S E S

	const mergedClasses = twMerge([baseClasses, varibleClasses])
	return <button className={mergedClasses} {...props} />
}

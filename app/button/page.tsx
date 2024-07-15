import { Container } from '../components/site/Container'
import { Section } from '../components/site/Section'
import { Button } from '../components/library/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'phobic | Button',
	openGraph: {
		title: 'phobic | Button',
		images: [
			{
				url: 'https://phobic.vercel.app/api/og?title=phobic | button',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function ButtonPage() {
	return (
		<Container
			title="Button"
			description="A button is a widget that enables users to trigger an action or even, such as submitting a form, opening a dialog, cancelling an action or performing a delete operation."
		>
			<aside
				aria-label="Note"
				className="border-s-4 border-blue-500 bg-blue-200 p-4 dark:border-sky-700 dark:bg-indigo-950"
			>
				<p className="text-xl">Note</p>
				<section>
					Button has underwent significant changes and can be visited at{' '}
					<a href="/newbutton" className="mt-2 underline">
						New Button ↗
					</a>
				</section>
			</aside>
			<Section
				title="Primary"
				description="Primary actions should be obvious. Solid, High contrast background colors work great here."
			>
				<Button>Primary</Button>
				<Button disabled>Disabled</Button>
				<Button
					colors={{
						bg: 'bg-amber-500',
						hoverBg: 'hover:bg-amber-600',
						focusRing: 'focus:ring-amber-500',
					}}
				>
					Amber
				</Button>
				<Button
					colors={{
						bg: 'bg-rose-500',
						hoverBg: 'hover:bg-rose-600',
						focusRing: 'focus:ring-rose-500',
					}}
				>
					Rose
				</Button>
				<Button
					colors={{
						bg: 'bg-fuchsia-500',
						hoverBg: 'hover:bg-fuchsia-600',
						focusRing: 'focus:ring-fuchsia-500',
					}}
				>
					Fuchsia
				</Button>
				<Button
					colors={{
						bg: 'bg-indigo-500',
						hoverBg: 'hover:bg-indigo-600',
						focusRing: 'focus:ring-indigo-500',
					}}
				>
					Indigo
				</Button>
				<Button
					colors={{
						bg: 'bg-[#1da1f2]',
						hoverBg: 'hover:bg-[#1a8cd8]',
						focusRing: 'focus:ring-[#1da1f2]',
					}}
				>
					Twitter
				</Button>
			</Section>
			<Section
				title="Secondary"
				description="Secondary actions should be clear but not prominent. Outline srtles or lower conrtrast background colors are great options."
			>
				<Button variant="secondary">Default</Button>
				<Button variant="secondary" disabled>
					Disabled
				</Button>
				<Button
					variant="secondary"
					colors={{
						text: 'text-amber-500',
						hoverBorder: 'hover:border-amber-500',
						hoverBg: 'hover:bg-amber-500',
						focusRing: 'focus:ring-amber-500',
						darkHoverBorder: 'dark:hover:border-amber-500',
					}}
				>
					Amber
				</Button>
				<Button
					variant="secondary"
					colors={{
						text: 'text-rose-500',
						hoverBorder: 'hover:border-rose-500',
						hoverBg: 'hover:bg-rose-500',
						focusRing: 'focus:ring-rose-500',
						darkHoverBorder: 'dark:hover:border-rose-500',
					}}
				>
					Rose
				</Button>
				<Button
					variant="secondary"
					colors={{
						text: 'text-fuchsia-500',
						hoverBorder: 'hover:border-fuchsia-500',
						hoverBg: 'hover:bg-fuchsia-500',
						focusRing: 'focus:ring-fuchsia-500',
						darkHoverBorder: 'dark:hover:border-fuchsia-500',
					}}
				>
					Fuchsia
				</Button>
				<Button
					variant="secondary"
					colors={{
						text: 'text-indigo-500',
						hoverBorder: 'hover:border-indigo-500',
						hoverBg: 'hover:bg-indigo-500',
						focusRing: 'focus:ring-indigo-500',
						darkHoverBorder: 'dark:hover:border-indigo-500',
					}}
				>
					Indigo
				</Button>
				<Button
					variant="secondary"
					colors={{
						text: 'text-[#1da1f2]',
						hoverBorder: 'hover:border-[#1da1f2]',
						hoverBg: 'hover:bg-[#1da1f2]',
						focusRing: 'focus:ring-[#1da1f2]',
						darkHoverBorder: 'dark:hover:border-[#1da1f2]',
					}}
				>
					Twitter Blue
				</Button>
			</Section>
			<Section
				title="Tertiary"
				description="Tertiary actions should be discoverable but not unobtrusive. Styling these actions like links is usually the best approach."
			>
				<Button variant="tertiary">Default</Button>
				<Button variant="tertiary" disabled>
					Disabled
				</Button>
				<Button
					variant="tertiary"
					colors={{
						text: 'text-amber-500',
						hoverText: 'hover:text-amber-700',
						focusRing: 'focus:ring-amber-500',
						darkHoverText: 'dark:hover:text-amber-500',
					}}
				>
					Amber
				</Button>
				<Button
					variant="tertiary"
					colors={{
						text: 'text-rose-500',
						hoverText: 'hover:text-rose-700',
						focusRing: 'focus:ring-rose-500',
						darkHoverText: 'dark:hover:text-rose-500',
					}}
				>
					Rose
				</Button>
				<Button
					variant="tertiary"
					colors={{
						text: 'text-fuchsia-500',
						hoverText: 'hover:text-fuchsia-700',
						focusRing: 'focus:ring-fuchsia-500',
						darkHoverText: 'dark:hover:text-fuchsia-500',
					}}
				>
					Fuchsia
				</Button>
				<Button
					variant="tertiary"
					colors={{
						text: 'text-indigo-500',
						hoverText: 'hover:text-indigo-700',
						focusRing: 'focus:ring-indigo-500',
						darkHoverText: 'dark:hover:text-indigo-500',
					}}
				>
					Indigo
				</Button>
				<Button
					variant="tertiary"
					colors={{
						text: 'text-[#1da1f2]',
						hoverText: 'hover:text-[#1a8cd8]',
						focusRing: 'focus:ring-[#1da1f2]',
						darkHoverText: 'dark:hover:text-[#1a8cd8]',
					}}
				>
					Twitter Blue
				</Button>
			</Section>
			<Section
				title="Destructive"
				description="Destructive actions typically result in removal of an item and may result in an undesirable consequence."
			>
				<Button
					colors={{
						bg: 'bg-red-500',
						hoverBg: 'hover:bg-red-600',
						focusRing: 'focus:ring-red-500',
					}}
				>
					Yes, I am sure I want to delete this
				</Button>
				<Button
					variant="secondary"
					colors={{
						text: 'text-red-500',
						hoverBorder: 'hover:border-red-500',
						hoverBg: 'hover:bg-red-500',
						focusRing: 'focus:ring-red-500',
						darkHoverBorder: 'dark:hover:border-red-500',
					}}
				>
					Unsubscribe
				</Button>
				<Button
					variant="tertiary"
					colors={{
						text: 'text-gray-500',
						hoverText: 'hover:text-gray-700',
						focusRing: 'focus:ring-gray-500',
						darkHoverText: 'dark:hover:text-gray-400',
					}}
				>
					Cancel
				</Button>
			</Section>
		</Container>
	)
}

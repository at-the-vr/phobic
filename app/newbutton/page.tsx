import { Container } from '../components/site/Container'
import { Section } from '../components/site/Section'
import NewButton from '../components/library/NewButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'phobic | New Button',
	openGraph: {
		title: 'phobic | New Button',
		images: [
			{
				url: 'https://phobic.vercel.app/api/og?title=phobic | newbutton',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function NewButtonPage() {
	return (
		<Container
			title="Button"
			description="A button is a widget that enables users to trigger an action or even, such as submitting a form, opening a dialog, cancelling an action or performing a delete operation."
		>
			<Section
				title="Primary"
				description="Primary actions should be obvious. Solid, High contrast background colors work great here."
			>
				<NewButton>Primary</NewButton>
				<NewButton disabled>Disabled</NewButton>
				<NewButton className="bg-amber-500 hover:bg-amber-600 focus-visible:ring-amber-500">
					Amber
				</NewButton>
				<NewButton className="bg-rose-500 hover:bg-rose-600 focus-visible:ring-rose-500">Rose</NewButton>
				<NewButton className="bg-fuchsia-500 hover:bg-fuchsia-600 focus-visible:ring-fuchsia-500">
					Fuchsia
				</NewButton>
				<NewButton className="bg-indigo-500 hover:bg-indigo-600 focus-visible:ring-indigo-500">
					Indigo
				</NewButton>
			</Section>
			<Section
				title="Secondary"
				description="Primary actions should be obvious. Solid, High contrast background colors work great here."
			>
				<NewButton variant={'secondary'}>Secondary</NewButton>
			</Section>
			<Section
				title="Destructive"
				description="Destructive actions typically result in removal of an item and may result in an undesirable consequence."
			>
				<NewButton variant={'destructive'}>Yes, I am sure i want to delete this</NewButton>
			</Section>
		</Container>
	)
}

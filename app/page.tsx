import { Section } from './components/site/Section'
import { Container } from './components/site/Container'
import { Button } from './components/library/Button'

export default function Home() {
	return (
		<>
			<Container
				title="Button"
				description="A button is a widget that enables users to traigger an action or even, such as submitting a form, opening a dialog, cancelling an action or performing a delete operation."
			>
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid, High contrast background colors work great here."
				>
					<Button>Default Primary</Button>
					<Button disabled>Disabled Primary</Button>
				</Section>
				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline srtles or lower conrtrast background colors are great options."
				>
					<Button variant="secondary">Default Secondary</Button>
					<Button variant="secondary" disabled>
						Disabled Secondary
					</Button>
				</Section>
				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but not unobtrusive. Styling these actions like links is usually the best approach."
				>
					<Button variant="tertiary">Default Secondary</Button>
					<Button variant="tertiary" disabled>
						Disabled Secondary
					</Button>
				</Section>
				<Section
					title="Destructive"
					description="Destructive actions typically result in removal of an item and may result in an undesirable consequence."
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>
			</Container>
			<Container title="Component Name XXX" description="Component Description">
				<Section
					title="Section Heading using a component"
					description="Section Description using a component"
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>
			</Container>
		</>
	)
}

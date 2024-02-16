import { Section } from './components/site/Section'
import { Container } from './components/site/Container'

export default function Home() {
	return (
		<>
			<Container title="Component Name XXX" description="Component Description">
				<Section
					title="Section Heading using a component"
					description="Section Description using a component"
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>
				<Section
					title="Section Heading using a component"
					description="Section Description using a component"
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

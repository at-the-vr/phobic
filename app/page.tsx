import { Section } from './components/site/Section'
import { Container } from './components/site/Container'
import { Button } from './components/library/Button'
import { BlockLinkCard, ContentCard } from './components/library/Card'
import { SiNextdotjs, SiVite } from 'react-icons/si'
import { Input } from './components/library/Input'

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
						}}
					>
						Cancel
					</Button>
				</Section>
			</Container>
			<Container title="Card" description="A card is a flexible and extensible content container.">
				<Section
					title="Simple"
					description="Simple cards display content and can provide a distinct link that can be selected."
				>
					{/* S I M P L E		C A R D */}
					<ContentCard
						title="Card title"
						subtitle="CARD SUBTITLE"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: '/', text: 'Card Link' }}
					></ContentCard>
				</Section>
				<Section
					title="Simple Card with a Header and Footer"
					description="Add an optional header and/or a footer within the card"
				>
					{/* S I M P L E		C A R D		W I T H		H E A D E R*/}
					<ContentCard
						header="Featured"
						title="Card title"
						subtitle="CARD SUBTITLE"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: '/', text: 'Card Link' }}
					></ContentCard>
					{/* S I M P L E		C A R D		W I T H		F O O T E R*/}
					<ContentCard
						footer="Last updated 5 mins ago"
						title="Card title"
						subtitle="CARD SUBTITLE"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: '/', text: 'Card Link' }}
					></ContentCard>
				</Section>
				<Section
					title="Block Link"
					description="A simple card enhanced into a selectable block link"
				>
					{/* S I M P L E		C A R D */}
					<BlockLinkCard text="Vite" url="https://vitejs.dev/">
						<SiVite className="size-10" />
					</BlockLinkCard>
					<BlockLinkCard text="NextJs" url="https://nextjs.org/">
						<SiNextdotjs className="size-10" />
					</BlockLinkCard>
				</Section>
			</Container>
			<Container
				title="Inputs"
				description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
			>
				<Section title="Basic" description="Basic input with a placeholder.">
					<Input type="text" placeholder="Type things here" />
					<Input disabled type="text" placeholder="Disabled 😖" />
				</Section>
				<Section title="Label" description="Input with a label.">
					<Input type="email" label="Email" placeholder="Type things here" />
				</Section>
				<Section title="Description" description="Input with a description">
					<Input
						type="password"
						label="Password"
						description="We will totally never share your passwords"
					/>
				</Section>
			</Container>
		</>
	)
}

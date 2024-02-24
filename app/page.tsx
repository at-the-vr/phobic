import { Container } from './components/site/Container'
import { BlockLinkCard, ContentCard } from './components/library/Card'
import { RxButton, RxIdCard, RxInput } from 'react-icons/rx'
import Link from 'next/link'

export default function Home() {
	return (
		<Container
			title="Components"
			description="A collection of customized components built with React and TailwindCSS"
		>
			<div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
				<BlockLinkCard
					CustomLinkComponent={Link}
					customLinkProps={{
						href: '/button',
					}}
					text="Button"
					widthLimit="none"
				>
					<RxButton />
				</BlockLinkCard>
				<BlockLinkCard
					CustomLinkComponent={Link}
					customLinkProps={{
						href: '/card',
					}}
					text="Card"
					widthLimit="none"
				>
					<RxIdCard />
				</BlockLinkCard>
				<BlockLinkCard
					CustomLinkComponent={Link}
					customLinkProps={{
						href: '/input',
					}}
					text="Input"
					widthLimit="none"
				>
					<RxInput />
				</BlockLinkCard>
			</div>
		</Container>
	)
}

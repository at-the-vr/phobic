import React from 'react'
import { Container } from '../components/site/Container'
import { Section } from '../components/site/Section'
import { BlockLinkCard, ContentCard } from '../components/library/Card'
import { SiNextdotjs, SiVite } from 'react-icons/si'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'phobic | Card',
	openGraph: {
		title: 'phobic | card',
		images: [
			{
				url: 'https://phobic.vercel.app/api/og?title=phobic | card',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function CardPage() {
	return (
		<Container title="Card" description="A card is a flexible and extensible content container.">
			<Section
				title="Simple"
				description="Simple cards display content and can provide a distinct link that can be selected."
			>
				{/* S I M P L E		C A R D */}
				<ContentCard
					title="Card title"
					subtitle="Card subtitle"
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
					subtitle="Card subtitle"
					plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
					link={{ url: '/', text: 'Card Link' }}
				></ContentCard>
				{/* S I M P L E		C A R D		W I T H		F O O T E R*/}
				<ContentCard
					footer="Last updated 5 mins ago"
					title="Card title"
					subtitle="Card subtitle"
					plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
					link={{ url: '/', text: 'Card Link' }}
				></ContentCard>
			</Section>
			<Section title="Block Link" description="A simple card enhanced into a selectable block link">
				{/* S I M P L E		C A R D */}
				<BlockLinkCard text="Vite" url="https://vitejs.dev/">
					<SiVite className="size-10" aria-label="This is the external link to ViteJs Website" />
				</BlockLinkCard>
				<BlockLinkCard text="NextJs" url="https://nextjs.org/">
					<SiNextdotjs
						className="size-10"
						aria-label="This is the external link to NextJs Website"
					/>
				</BlockLinkCard>
			</Section>
		</Container>
	)
}

import React from 'react'
import { Container } from '../components/site/Container'
import { Section } from '../components/site/Section'
import { Input } from '../components/library/Input'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'phobic | Input',
	openGraph: {
		title: 'phobic | Input',
		images: [
			{
				url: 'https://phobic.vercel.app/api/og?title=phobic | input',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function InputPage() {
	return (
		<Container
			title="Inputs"
			description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
		>
			<aside
				aria-label="Note"
				className="border-s-4 border-blue-500 bg-blue-200 p-4 dark:border-sky-700 dark:bg-indigo-950"
			>
				<p className="text-xl">Note</p>
				<section>
					Input has underwent significant changes and can be visited at{' '}
					<Link href="/newinput" className="mt-2 underline">
						New Input ↗
					</Link>
				</section>
			</aside>
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
	)
}

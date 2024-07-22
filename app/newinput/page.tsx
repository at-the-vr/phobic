import React from 'react'
import { Container } from '../components/site/Container'
import { Section } from '../components/site/Section'
import { NewInput } from '../components/library/NewInput'
import {PassWordInput} from '../components/library/PasswordInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'phobic | Input',
	openGraph: {
		title: 'phobic | Input',
		images: [
			{
				url: 'https://phobic.vercel.app/api/og?title=phobic | newbutton',
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
			<Section title="Basic" description="Basic input with a placeholder.">
				<div className="flex w-full items-center space-x-2">
					<div className="max-w-sm">
						<NewInput placeholder="Type things here" />
					</div>
					<div className="max-w-xs">
						<NewInput disabled type="text" placeholder="Disabled 😖" />
					</div>
				</div>
			</Section>
			<Section title="Label" description="Input with a label.">
				<div className="flex w-full max-w-sm items-center space-x-2">
					<div>
						<label htmlFor="email" className="mb-2 block px-1 text-sm font-medium">
							Email
						</label>
						<NewInput type="email" id="email" placeholder="Email" />
					</div>
				</div>
			</Section>
			<Section title="Password" description="Input with a Password">
				<div className="max-w-sm">
					<PassWordInput />
				</div>
			</Section>
		</Container>
	)
}

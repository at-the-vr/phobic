import { Container } from '../components/site/Container'
import { Metadata } from 'next'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../components/library/Accordion'

export const metadata: Metadata = {
	title: 'phobic | Accordion',
	openGraph: {
		title: 'phobic | Accordion',
		images: [
			{
				url: 'https://phobic.vercel.app/api/og?title=phobic | Accordion',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function CardPage() {
	return (
		<Container
			title="Accordion"
			description="An accordion is a vertically stacked set of interactive headings that each contain a title representing a section of content."
		>
			<div className="rounded-md border-2 border-slate-200 p-4 dark:border-slate-800 sm:p-10">
				{/* O U T E R		A C C O R D I O N		W R A P P E R*/}
				<Accordion className="w-full" defaultOpenItem="item-1">
					<AccordionItem value="item-1">
						<AccordionTrigger>Click Me!!!</AccordionTrigger>
						<AccordionContent>Whoa whoa whoa, you actually clicked here</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Click Me!!!</AccordionTrigger>
						<AccordionContent>Whoa whoa whoa, you actually clicked here</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</Container>
	)
}

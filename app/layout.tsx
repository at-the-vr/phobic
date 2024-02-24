import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/site/Navbar'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'phobic',
	description: 'phobic is a set of components made using react and tailwindcss',
	metadataBase: new URL('https://phobic.vercel.app'),
	openGraph: {
		title: 'phobic',
		description: 'phobic is a set of components made using react and tailwindcss',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="icon" href="/favicon.jpg" />
			<body className={inter.className}>
				<div className="relative min-h-screen bg-white dark:bg-zinc-900">
					<Providers>
						<a href="#main" className="sr-only focus:not-sr-only">
							Skip to main content
						</a>
						{/* N A V B A R */}
						<Navbar />
						{/* M A I N		C O N T E N T		A R E A  */}
						<main id="main" className="p-10 sm:px-16 lg:px-44">
							<div className="mx-auto max-w-3xl space-y-20">{children}</div>
						</main>
					</Providers>
				</div>
			</body>
		</html>
	)
}

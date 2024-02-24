import Link from 'next/link'

export default function NotFoundPage() {
	return (
		<div className="px-4 py-10 text-center sm:px-6 lg:px-8">
			<h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">404</h1>
			<h2 className="block text-2xl font-bold text-gray-700 dark:text-white">Page not Found</h2>
			<p className="mt-3 text-gray-600 dark:text-gray-400">
				Uh Oh!
				<br />
				The Page you requested was not found 😔
			</p>
			<Link href="/" className="font-medium text-zinc-500 dark:text-zinc-300">
				Return Home
			</Link>
		</div>
	)
}

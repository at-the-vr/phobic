'use client'
import { SiGithub } from 'react-icons/si'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { Eczar } from 'next/font/google'

const josefin = Eczar({ subsets: ['latin'] })

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white dark:border-zinc-700 dark:bg-zinc-900">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							<Link
								href="/"
								className={`inline-flex h-10 items-center justify-center text-2xl font-bold text-gray-800 dark:text-white ${josefin.className}`}
							>
								phobic
							</Link>
						</div>
						<div className="flex flex-1 items-center justify-end">
							<nav className="flex items-center space-x-1">
								<ThemeSwitcher />
								<a
									href="https://github.com/at-the-vr/phobic"
									className="size-10 p-2 text-gray-800 hover:text-green-700 dark:text-white dark:hover:text-green-700"
								>
									<SiGithub
										className="size-full"
										aria-label="This is the external link to GitHub Repository for this website"
									/>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

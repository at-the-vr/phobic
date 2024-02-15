import { SiTwitter } from "react-icons/si"
import { SiGithub } from "react-icons/si"

export default function Home() {
	return (
		<div>
			{/* N A V B A R */}
			<header className="w-full border-b bg-white">
				<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
					<div className="mx-auto w-full max-w-3xl space-y-20">
						<div className="flex justify-between">
							<div className="flex flex-1 items-center justify-start">
								<a
									href="/"
									className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
								>
									phobic
								</a>
							</div>
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1">
									<a href="https://github.com/at-the-vr/phobic" className="size-10 p-2 text-gray-800 hover:text-green-700">
										<SiGithub className="size-full"/>
									</a>
									<a href="https://twitter.com/at_the_vr" className="size-10 p-2 text-gray-800 hover:text-blue-400">
										<SiTwitter className="size-full"/>
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* M A I N		C O N T E N T		A R E A  */}
		</div>
	)
}

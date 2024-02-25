import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const hasTitle = searchParams.has('title')
		const hasDescrition = searchParams.has('descrition')
		const title = hasTitle ? searchParams.get('title') : 'phobic'
		const description = hasDescrition
			? searchParams.get('descrition')
			: 'phobic is a set of HTML components made using react and tailwindcss'

		return new ImageResponse(
			(
				<div tw="flex flex-col w-full h-full items-center justify-center bg-[#2F233A]">
					<div tw="flex w-full">
						<div tw="flex flex-col w-full py-12 px-4 md:items-center justify-between p-8">
							<h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-white text-left">
								{title}
							</h2>
							<div tw="mt-8 flex md:mt-0">
								<p tw="flex rounded-md shadow text-white">{description}</p>
							</div>
						</div>
					</div>
				</div>
			)
		)
	} catch (e: any) {
		return new Response('Failed to Generate OG Image', { status: 500 })
	}
}

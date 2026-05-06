import Link from "next/link";

type NavContent = {
	title: string;
	link: string;
}

interface NavProps {
	isMobile: boolean;
}

export default function Navbar(data:NavProps ) {
	
	console.log(data.isMobile)
	
	const tempNavContent : NavContent[] = [
		{
			title: 'studies',
			link: '/studies',
		},
		{
			title: 'experience',
			link: '/experience',
		},
		{
			title: 'cases',
			link: '/case',
		},
		{
			title: 'projects',
			link: '/project',
		}
	]
	
	
	return (
		<>
			{(data.isMobile)
				?<div className="flex flex-col gap-4 items-center h-full">
					<Link href={'/main'}>Home</Link>
					<Link href={'/main/about'}>About</Link>
					{
						tempNavContent.map((nav : NavContent) =>
							<Link
								key={nav.title}
								href={nav.link}
								className="hover:opacity-50 transition-opacity"
							>
								{nav.title}
							</Link>
						)
					}
				</div>
				:<div className="flex gap-4 items-center h-full">
					<Link href={'/main'}>Home</Link>
					<Link href={'/main/about'}>About</Link>
					{
						tempNavContent.map((nav : NavContent) =>
							<Link
								key={nav.title}
								href={nav.link}
								className="hover:opacity-50 transition-opacity"
							>
									{nav.title}
							</Link>
						)
					}
				</div>
			}
		</>
	)
}
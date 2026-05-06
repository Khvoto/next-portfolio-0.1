// app/page.tsx
'use client';
import Image from 'next/image';
import {useScroll} from '@/src/lib/useScroll';
import Carousel from "@/src/components/views/carousel";

export default function MainPage() {
	const scrollY = useScroll();
	
	// As user scrolls down, opacity shifts.
	const fadeOut = Math.max(0, 1 - scrollY / 150)
	const fadeIn = 1 - fadeOut
	
	return (
		<section className="relative min-w-screen min-h-[150vh]">
			<div
				className=" pt-20 min-h-screen flex items-center w-full mx-autopx-20 transition-opacity duration-75}"
			>
				
				<div className="grid grid-cols-1 sm:grid-cols-12 sm:w-[90%] place-items-center items-center h-screen max-w-7xlw-full">
					{/* Left Side */}
					<div className="space-y-6 min-w-75 max-w-2xl md:w-[50%] relative flex h-125 col-start-1 col-span-8  row-start-1 z-10">
						<div className="absolute w-full space-y-6" style={{
							opacity: fadeOut,
							pointerEvents: fadeOut === 0.1 ? 'none' : 'auto',
							visibility: fadeOut === 0 ? 'hidden' : 'visible'
						}}>
							<h2 className="text-6xl font-bold leading-tight">
								Crafting digital <br/> experiences.
							</h2>
							<p className="text-xl text-white/60 leading-relaxed">
								Hi, I'm Jens. I am a system developer who build apps for the web and focus on clean UIs and maintainable
								code.
							</p>
						</div>
						<div className="absolute w-full space-y-6" style={{
							opacity: fadeIn,
							pointerEvents: fadeIn === 0.1 ? 'none' : 'visible',
							visibility: fadeIn === 0 ? 'hidden' : 'visible'
						}}>
							<h2 className="text-6xl font-bold leading-tight">
								Merging logic with design.
							</h2>
							<p className="text-xl text-white/60 leading-relaxed">
								I build robust architectures that prioritize seamless
								user experiences and solve complex problems with clarity.
							</p>
						</div>
					</div>
					{/* Right Side*/}
					<div
						className="sm:col-start-6 sm:col-span-7 row-start-1 relative aspect-4/5 w-full md:min-w-175  min-w-75 bg-background rounded-[40px] overflow-hidden">
						<Image
							src="/jens.webp"
							alt="Me"
							fill
							className="object-cover mask-[linear-gradient(to_bottom_right,black_70%,transparent_100%)]"
							priority
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
						<div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-bg-background pointer-events-none" />
					</div>
				</div>
				
			</div>
			<Carousel/>
		</section>
	);
}
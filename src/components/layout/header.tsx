'use client';
import Link from 'next/link';
import Navbar from "@/src/components/layout/navbar";
import { useState, useEffect } from 'react';

export function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const role = "demo-admin";
	
	// Basic width detection for the dropdown toggle
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 900);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	
	return (
		<header className="fixed top-0 left-0 w-full h-20 z-100 px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-sm">
			<div className="text-xl font-black tracking-tighter shrink-0">
				<Link href="/">BYOSTERQVIST</Link>
			</div>

			<div className="absolute left-1/2 -translate-x-1/2 top-2 pointer-events-none">
				{role.startsWith('demo') && (
					<div className="bg-yellow-400/10 border border-yellow-400/20 text-yellow-500 text-[10px] uppercase tracking-widest py-1 px-4 rounded-full pointer-events-auto">
						{role.replace('-', ' ')} mode active
					</div>
				)}
			</div>
			
			<div className="flex items-center gap-8">
				{isMobile ? (
					<div className="group relative ">
						<button className="p-2 uppercase text-xs font-bold tracking-widest">Menu</button>
						{/* Dropdown Menu */}
						<div className="absolute right-0 top-full mt-2 w-48 bg-black border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all p-4 flex flex-col gap-4 shadow-2xl">
							<Navbar isMobile={isMobile} />
							<hr className="border-white/10" />
							<button className="text-left text-sm text-yellow-500">Demo</button>
						</div>
					</div>
				) : (
					<nav className="flex items-center gap-8 text-sm font-medium">
						<Navbar isMobile={isMobile} />
						<div className="h-4 w-px bg-white/20" />
						<button className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
							Demo
						</button>
					</nav>
				)}
			</div>
		</header>
	);
	/*
	return (
		<header className="fixed top-0 left-0 w-full h-20 z-100 grid grid-cols-3 px-12 transition-all">
			{/* 1. Logo/Name *}
			<div className="text-xl font-black tracking-tighter flex items-center">
				<Link href="/">BYOSTERQVIST</Link>
			</div>
			
			{/* 2. Alerts/Status *}
			<div className="flex items-end  ">
				To display things like user state
			</div>
			
			{/* 3. Navigation & Mock Auth *}
			<nav className="flex justify-end items-center gap-8 text-sm font-medium">
				<Navbar />
				<div className="h-4 w-px bg-white/20" />
				<button className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
					Log In
				</button>
			</nav>
		</header>
	);
*/
}

"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- Typer och Demo-data (samma som tidigare) ---
type PortfolioItem = {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
	type: 'project' | 'case';
};

const demoData: PortfolioItem[] = [
	{ id: 1, title: "E-com Portal", description: "Projektbeskrivning 1", image: "https://picsum.photos/seed/p1/800/600", link: "/p1", type: 'project' },
	{ id: 2, title: "Data App", description: "Projektbeskrivning 2", image: "https://picsum.photos/seed/p2/800/600", link: "/p2", type: 'project' },
	{ id: 3, title: "Cloud Tool", description: "Projektbeskrivning 3", image: "https://picsum.photos/seed/p3/800/600", link: "/p3", type: 'project' },
	{ id: 4, title: "Dev Platform", description: "Projektbeskrivning 4", image: "https://picsum.photos/seed/p4/800/600", link: "/p4", type: 'project' },
	{ id: 5, title: "AI Interface", description: "Projektbeskrivning 5", image: "https://picsum.photos/seed/p5/800/600", link: "/p5", type: 'project' },
	{ id: 6, title: "Fintech Case", description: "Casebeskrivning 1", image: "https://picsum.photos/seed/c1/800/600", link: "/c1", type: 'case' },
	{ id: 7, title: "Health Case", description: "Casebeskrivning 2", image: "https://picsum.photos/seed/c2/800/600", link: "/c2", type: 'case' },
	{ id: 8, title: "Logistics Case", description: "Casebeskrivning 3", image: "https://picsum.photos/seed/c3/800/600", link: "/c3", type: 'case' },
	{ id: 9, title: "Retail Case", description: "Casebeskrivning 4", image: "https://picsum.photos/seed/c4/800/600", link: "/c4", type: 'case' },
	{ id: 10, title: "Energy Case", description: "Casebeskrivning 5", image: "https://picsum.photos/seed/c5/800/600", link: "/c5", type: 'case' },
];

export default function PortfolioCarousel() {
	const [displayType, setDisplayType] = useState<'Projekt' | 'Cases'>('Projekt');
	const [currentIndex, setCurrentIndex] = useState(0);
	
	// 1. Initial slumpmässig kategori (Next.js säker)
	useEffect(() => {
		setDisplayType(Math.random() > 0.5 ? 'Projekt' : 'Cases');
	}, []);
	
	// 2. Filtrera och välj 4 slumpmässiga objekt
	const filteredItems = useMemo(() => {
		const targetType = displayType === 'Projekt' ? 'project' : 'case';
		const allMatching = demoData.filter(item => item.type === targetType);
		// Fisher-Yates shuffle för att välja 4 slumpmässiga
		const shuffled = [...allMatching].sort(() => Math.random() - 0.5);
		return shuffled.slice(0, 4);
	}, [displayType]);
	
	// 3. Navigeringslogik (måste vara beroende av filteredItems.length)
	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
	}, [filteredItems.length]);
	
	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
	}, [filteredItems.length]);
	
	// 4. ÅTERINFÖRD: Timer för Auto-play (8 sekunder)
	useEffect(() => {
		const timer = setInterval(nextSlide, 8000);
		return () => clearInterval(timer); // Rensar när komponenten dör eller nextSlide ändras
	}, [nextSlide]);
	
	// Nollställ index vid byte av kategori
	useEffect(() => {
		setCurrentIndex(0);
	}, [displayType]);
	
	const currentItem = filteredItems[currentIndex];
	
	if (!currentItem) return null;
	
	return (
		<section className="relative h-screen w-full flex flex-col items-center justify-center bg-background px-4 overflow-hidden">
			<motion.h2
				key={displayType}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter"
			>
				{displayType}
			</motion.h2>
			
			<div className="relative w-full max-w-5xl flex items-center justify-center">
				<button onClick={prevSlide} className="absolute -left-16 z-20 p-2 hidden md:block hover:scale-110 transition-transform">
					<ChevronLeft size={48} />
				</button>
				
				<AnimatePresence mode="wait">
					<motion.div
						key={`${displayType}-${currentItem.id}`}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="grid grid-cols-1 md:grid-cols-2 bg-slate-900 rounded-3xl overflow-hidden w-full min-h-125 shadow-2xl"
					>
						<div className="relative h-64 md:h-auto">
							<Image
								src={currentItem.image}
								alt={currentItem.title}
								fill
								className="object-cover p-4 rounded-[2.5rem]"
								priority
							/>
						</div>
						<div className="p-12 flex flex-col justify-center text-white">
							<span className="text-blue-400 font-bold uppercase text-sm mb-2">{currentItem.type}</span>
							<h3 className="text-4xl font-bold mb-4">{currentItem.title}</h3>
							<p className="text-gray-400 mb-8 leading-relaxed">{currentItem.description}</p>
							<Link href={currentItem.link} className="bg-white text-black px-8 py-3 rounded-xl w-fit font-bold hover:bg-blue-400 transition-colors">
								Visa {displayType === 'Projekt' ? 'projektet' : 'caset'}
							</Link>
						</div>
					</motion.div>
				</AnimatePresence>
				
				<button onClick={nextSlide} className="absolute -right-16 z-20 p-2 hidden md:block hover:scale-110 transition-transform">
					<ChevronRight size={48} />
				</button>
			</div>
			
			{/* Pagination dots (nu alltid max 4 stycken) */}
			<div className="flex gap-3 mt-12">
				{filteredItems.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrentIndex(i)}
						className={`h-2 rounded-full transition-all duration-300 ${
							i === currentIndex ? 'w-12 bg-blue-600' : 'w-2 bg-gray-600'
						}`}
						aria-label={`Gå till slide ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
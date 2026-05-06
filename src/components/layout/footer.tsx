// components/Footer.tsx
export default function Footer() {
	return (
		<footer className="w-full h-screen bg-neutral-950 border-t border-white/5 py-20 px-12 flex items-center justify-center">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
				<div className="space-y-8">
					<h3 className="text-3xl font-bold">Get in touch.</h3>
					<div className="space-y-2 text-white/60">
						<p>hello@example.com</p>
						<p>+46 (0) 70 123 45 67</p>
					</div>
					<div className="flex gap-4">
						<a href="#" className="underline decoration-white/20 hover:decoration-white">GitHub</a>
						<a href="#" className="underline decoration-white/20 hover:decoration-white">LinkedIn</a>
					</div>
				</div>
				
				<form className="flex flex-col gap-4">
					<input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-white/30" />
					<textarea placeholder="Message" rows={4} className="bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-white/30" />
					<button className="bg-white text-black font-bold p-4 rounded-lg uppercase text-xs tracking-widest">Send</button>
				</form>
			</div>
		</footer>
	);
}


/*export default function Footer() {
	return (
		<div className="w-full">
			<footer className="w-full min-h-20 flex flex-row justify-evenly bg-slate-900">
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</footer>
		</div>
	)
}*/
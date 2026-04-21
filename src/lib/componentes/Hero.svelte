
<script>
	let {
		title = 'Comisión Corográfica Digital',
		kicker = '',
		description = '',
		cta = '',
		ctaHref = '/proyecto/'
	} = $props();
</script>

<section class="hero">
	<!-- Fondo fotográfico archivístico (0002) -->

	<!-- Capa SVG cartográfica — reducida de densidad -->
	<div class="hero-bg" aria-hidden="true">
		<svg viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(214,180,27,0.05)" stroke-width="0.5"/>
				</pattern>
				<pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1="0" y1="0" x2="0" y2="8" stroke="rgba(214,180,27,0.03)" stroke-width="1"/>
				</pattern>
			</defs>
			<!-- Rect oscuro reducido — más material, menos cinematográfico -->
			<rect width="1440" height="860" fill="rgba(15,12,8,0.60)"/>
			<rect width="1440" height="860" fill="url(#hatch)"/>
			<rect width="1440" height="860" fill="url(#grid)"/>
			<!-- Elipses cartográficas — textura archivística -->
			<g fill="none" stroke="rgba(214,180,27,0.08)" stroke-width="0.8">
				<ellipse cx="720" cy="400" rx="580" ry="270"/>
				<ellipse cx="720" cy="400" rx="480" ry="220"/>
				<ellipse cx="720" cy="400" rx="380" ry="175"/>
				<ellipse cx="720" cy="400" rx="285" ry="135"/>
				<ellipse cx="720" cy="400" rx="195" ry="98"/>
				<ellipse cx="180" cy="180" rx="300" ry="150"/>
				<ellipse cx="1220" cy="620" rx="260" ry="130"/>
			</g>
			<!-- Líneas de río / recorrido -->
			<g fill="none" stroke="rgba(214,180,27,0.10)" stroke-width="1">
				<path d="M 160 0 Q 290 190 390 340 Q 490 470 570 590 Q 640 690 690 860"/>
				<path d="M 720 0 Q 745 145 785 295 Q 825 445 865 575 Q 905 700 925 860"/>
				<path d="M 1010 0 Q 970 175 950 335 Q 930 475 910 615 Q 890 745 880 860"/>
			</g>
			<!-- Coordenadas en esquinas -->
			<g font-family="monospace" font-size="9" fill="rgba(214,180,27,0.18)" letter-spacing="1">
				<text x="56" y="100">04°35'N 74°04'W</text>
				<text x="1190" y="100">06°15'N 75°35'W</text>
				<text x="56" y="830">01°13'N 77°16'W</text>
				<text x="1190" y="830">02°26'N 76°36'W</text>
			</g>
			<!-- Escala -->
			<g transform="translate(56,800)">
				<line x1="0" y1="0" x2="120" y2="0" stroke="rgba(214,180,27,0.28)" stroke-width="1"/>
				<line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(214,180,27,0.28)" stroke-width="1"/>
				<line x1="120" y1="-4" x2="120" y2="4" stroke="rgba(214,180,27,0.28)" stroke-width="1"/>
				<text x="55" y="-9" font-family="monospace" font-size="7" fill="rgba(214,180,27,0.32)" text-anchor="middle">100 km</text>
			</g>
			<!-- Rosa de los vientos -->
			<g transform="translate(1370,100)" fill="none" stroke="rgba(214,180,27,0.18)" stroke-width="0.8">
				<circle cx="0" cy="0" r="24"/>
				<line x1="0" y1="-24" x2="0" y2="24"/>
				<line x1="-24" y1="0" x2="24" y2="0"/>
				<polygon points="0,-16 3,-5 -3,-5" fill="rgba(214,180,27,0.28)" stroke="none"/>
				<text x="0" y="-30" font-family="monospace" font-size="8" fill="rgba(214,180,27,0.35)" text-anchor="middle">N</text>
			</g>
		</svg>
	</div>

	<!-- Capa de mapa archivístico — textura material muy sutil -->
	<div class="hero-map-layer" aria-hidden="true">
		<picture>
			<source
				type="image/avif"
				srcset="/assets/imgs/maps/optimized/map-07-2400.avif 2400w, /assets/imgs/maps/optimized/map-07-1200.avif 1200w"
				sizes="100vw"
			/>
			<source
				type="image/webp"
				srcset="/assets/imgs/maps/optimized/map-07-2400.webp 2400w, /assets/imgs/maps/optimized/map-07-1200.webp 1200w"
				sizes="100vw"
			/>
			<img
				src="/assets/imgs/maps/optimized/map-07-1200.jpg"
				srcset="/assets/imgs/maps/optimized/map-07-1200.jpg 1200w, /assets/imgs/maps/optimized/map-07-2400.jpg 2400w"
				sizes="100vw"
				alt=""
				loading="eager"
			/>
		</picture>
	</div>

	<!-- Overlay — gradiente aligerado, con transición cálida en el tope -->
	<div class="hero-overlay" aria-hidden="true"></div>

	<div class="hero-content">
		{#if kicker}
			<div class="hero-tag">{kicker}</div>
		{/if}
		<h1 class="hero-title">{@html title}</h1>
		{#if description}
			<p class="hero-subtitle">{description}</p>
		{/if}
		{#if cta}
			<a class="hero-cta" href={ctaHref}>{cta}</a>
		{/if}
	</div>
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		background-image: image-set(
			url('/assets/imgs/0002-1600.avif') type('image/avif'),
			url('/assets/imgs/0002-1600.webp') type('image/webp')
		);
		background-size: cover;
		background-position: center top;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
	}

	.hero-bg svg {
		width: 100%;
		height: 100%;
	}

	/* Capa de mapa — textura archivística sobre la fotografía */
	.hero-map-layer {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.hero-map-layer picture {
		display: block;
		width: 100%;
		height: 100%;
	}

	.hero-map-layer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 0.10;
		mix-blend-mode: luminosity;
	}

	/* Overlay aligerado — menos denso, con calor en el tope que conecta con el header */
	.hero-overlay {
		position: absolute;
		inset: 0;
		background:
			/* transición cálida en el tope — conecta con el header parchment */
			linear-gradient(to bottom, rgba(237,232,223,0.14) 0%, transparent 9%),
			/* gradiente principal de legibilidad en la base */
			linear-gradient(to top, rgba(10,8,6,0.82) 0%, rgba(10,8,6,0.30) 45%, rgba(10,8,6,0.04) 100%);
	}

	.hero-content {
		position: relative;
		z-index: 2;
		padding: 0 clamp(2rem, 5vw, 3rem) clamp(2.5rem, 5vw, 3.5rem);
		max-width: 920px;
	}

	/* Tag — azul claro legible sobre fondo oscuro */
	.hero-tag {
		display: inline-block;
		font-family: var(--font-body);
		font-size: 9px;
		font-weight: 500;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--blue-lt, #E8EDF5);
		border: 1px solid rgba(43,74,122,0.50);
		padding: 4px 10px;
		margin-bottom: 1.25rem;
	}

	.hero-title {
		font-family: var(--font-ccd);
		font-weight: 900;
		font-size: clamp(3rem, 8vw, 6.5rem);
		line-height: 0.92;
		letter-spacing: -0.02em;
		color: #F4F1EB;
		text-transform: uppercase;
		max-width: 14ch;
		margin-bottom: 1.25rem;
		text-wrap: balance;
	}

	.hero-subtitle {
		font-family: var(--font-body);
		font-size: clamp(0.9rem, 1.4vw, 1.05rem);
		font-weight: 300;
		color: rgba(244,241,235,0.70);
		max-width: 40rem;
		line-height: 1.70;
		letter-spacing: 0.15px;
	}

	:global(.hero-accent) {
		color: var(--accent, #2B4A7A);
	}

	.hero-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 2rem;
		padding: 0.75rem 1.75rem;
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 2px;
		text-transform: uppercase;
		text-decoration: none;
		background: var(--accent, #2B4A7A);
		color: #E8EDF5;
		border: 1px solid var(--accent, #2B4A7A);
		transition: background 0.2s ease, color 0.2s ease;
	}

	.hero-cta::after {
		content: '→';
		font-size: 13px;
		line-height: 1;
	}

	.hero-cta:hover {
		background: transparent;
		color: #E8EDF5;
		border-color: rgba(232,237,245,0.55);
	}

	@media (max-width: 600px) {
		.hero {
			min-height: 92svh;
			background-image: image-set(
				url('/assets/imgs/0002-800.avif') type('image/avif'),
				url('/assets/imgs/0002-800.webp') type('image/webp')
			);
		}

		.hero-title {
			font-size: clamp(2.6rem, 10vw, 3.6rem);
		}

		.hero-subtitle {
			font-size: 0.9rem;
		}
	}
</style>

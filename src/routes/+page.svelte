<script>
	import { onMount } from 'svelte';
	import Hero from '$lib/componentes/Hero.svelte';
	import { homeBlocks, resources, activities, institutions } from '$lib/content/index.js';

	/* ── Build unified card pool ─────────────────────── */
	const proyectoCards = homeBlocks.map((b) => ({
		id: b.id_bloque,
		section: 'proyecto',
		label: 'Proyecto',
		title: b.titulo,
		description: b.texto_principal,
		href: b.cta_destino || '/proyecto/',
		external: false
	}));

	const infraCards = resources
		.filter((r) => r.visible_en_home)
		.map((r) => ({
			id: r.id_recurso,
			section: 'infraestructura',
			label: 'Infraestructura · ' + r.estado,
			title: r.nombre,
			description: r.descripcion_breve,
			href: r.enlace,
			external: true
		}));

	const activityCards = activities
		.filter((a) => a.visible_en_home)
		.map((a) => ({
			id: a.id_actividad,
			section: 'actividades',
			label: a.tipo ?? 'Actividades',
			title: a.titulo,
			description: a.descripcion_breve,
			href: a.enlace,
			external: true
		}));

	const institutionCards = institutions
		.filter((i) => i.visible_en_home)
		.map((i) => ({
			id: i.id_institucion,
			section: 'instituciones',
			label: i.categoria || 'Institución',
			title: i.sigla || i.nombre,
			description: i.sigla ? i.nombre : (i.descripcion_breve || ''),
			href: '/instituciones/',
			external: false
		}));

	const allCards = [...proyectoCards, ...infraCards, ...activityCards, ...institutionCards];

	/* ── Hero fijo: siempre proyecto. Carousel: resto ─── */
	const purposeBlock = homeBlocks.find((b) => b.id_bloque === 'proposito-general');
	let heroIndex = $state(0);

	onMount(() => {
		heroIndex = Math.floor(Math.random() * proyectoCards.length);
	});

	const heroCard = $derived(proyectoCards[heroIndex]);
	const carouselCards = $derived([...infraCards, ...activityCards, ...institutionCards]);

	/* ── Carousel ─────────────────────────────────────── */
	const VISIBLE = 3;
	let carouselStart = $state(0);
	let outerWidth = $state(0); // bound via bind:clientWidth

	const cardWidth = $derived(outerWidth > 0 ? (outerWidth - 2 * (VISIBLE - 1)) / VISIBLE : 0);
	const trackOffset = $derived(carouselStart * (cardWidth + 2)); // 2px gap

	const canPrev = $derived(carouselStart > 0);
	const canNext = $derived(carouselStart + VISIBLE < carouselCards.length);

	function prev() {
		if (canPrev) carouselStart -= 1;
	}
	function next() {
		if (canNext) carouselStart += 1;
	}

	/* ── Section → visual tokens ─────────────────────── */
	const sectionBg = {
		proyecto: '#EAE4D9',
		infraestructura: '#E6E0D8',
		actividades: '#E8E3D8',
		instituciones: '#E4DDD5'
	};

	const sectionAccent = {
		proyecto: 'rgba(60,45,15,0.08)',
		infraestructura: 'rgba(43,74,122,0.08)',
		actividades: 'rgba(60,45,15,0.07)',
		instituciones: 'rgba(60,45,15,0.06)'
	};
</script>

<svelte:head>
	<title>Inicio | Comisión Corográfica Digital</title>
</svelte:head>

<Hero
	title="Comisión Corográfica Digital"
	kicker="Proyecto interinstitucional · Colombia"
	description={purposeBlock?.texto_principal}
	cta="Conocer Proyecto"
	ctaHref="/proyecto/"
/>

<section class="home-grid-surface">

	<!-- ── Hero card (random, full width) ── -->
	{#if heroCard}
		<a
			class="home-card home-card--hero"
			href={heroCard.href}
			style="--card-bg: {sectionBg[heroCard.section]}; --card-accent: {sectionAccent[heroCard.section]}"
			target={heroCard.external ? '_blank' : undefined}
			rel={heroCard.external ? 'noopener noreferrer' : undefined}
			aria-label="{heroCard.section}: {heroCard.title}"
		>
			<div class="home-card__bg" aria-hidden="true">
				<picture class="home-card__map-img">
					<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-07-2400.avif 2400w, /assets/imgs/maps/optimized/map-07-1200.avif 1200w" sizes="100vw" />
					<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-07-2400.webp 2400w, /assets/imgs/maps/optimized/map-07-1200.webp 1200w" sizes="100vw" />
					<img src="/assets/imgs/maps/optimized/map-07-1200.jpg" srcset="/assets/imgs/maps/optimized/map-07-1200.jpg 1200w, /assets/imgs/maps/optimized/map-07-2400.jpg 2400w" sizes="100vw" alt="" loading="lazy" />
				</picture>
			</div>
			<div class="home-card__overlay" aria-hidden="true"></div>
			<div class="home-card__content home-card__content--hero">
				<p class="home-card__label">{heroCard.label}</p>
				<h2 class="home-card__title home-card__title--hero">{heroCard.title}</h2>
				{#if heroCard.description}
					<p class="home-card__desc">{heroCard.description}</p>
				{/if}
			</div>
		</a>
	{/if}

	<!-- ── Carousel ── -->
	<div class="carousel-shell">
		<button
			class="carousel-btn carousel-btn--prev"
			onclick={prev}
			disabled={!canPrev}
			aria-label="Anterior"
		>‹</button>

		<div class="carousel-outer" bind:clientWidth={outerWidth}>
			<div
				class="carousel-track"
				style="transform: translateX({-trackOffset}px); gap: 2px"
				aria-live="polite"
			>
				{#each carouselCards as card (card.id)}
					<a
						class="home-card home-card--small"
						href={card.href}
						style="
							width: {cardWidth}px;
							flex: 0 0 {cardWidth}px;
							--card-bg: {sectionBg[card.section]};
							--card-accent: {sectionAccent[card.section]}
						"
						target={card.external ? '_blank' : undefined}
						rel={card.external ? 'noopener noreferrer' : undefined}
					>
						<picture class="home-card__map-layer" aria-hidden="true">
							<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-20-1200.avif" sizes="560px" />
							<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-20-1200.webp" sizes="560px" />
							<img src="/assets/imgs/maps/optimized/map-20-1200.jpg" alt="" loading="lazy" />
						</picture>
						<div class="home-card__overlay" aria-hidden="true"></div>
						<div class="home-card__content">
							<p class="home-card__label">{card.label}</p>
							<h3 class="home-card__title">{card.title}</h3>
							{#if card.description}
								<p class="home-card__desc">{card.description}</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</div>

		<button
			class="carousel-btn carousel-btn--next"
			onclick={next}
			disabled={!canNext}
			aria-label="Siguiente"
		>›</button>
	</div>

	<!-- ── Progress indicator ── -->
	<div class="carousel-progress" aria-hidden="true">
		<span class="carousel-progress__track">
			<span
				class="carousel-progress__fill"
				style="
					width: {(VISIBLE / carouselCards.length) * 100}%;
					left: {(carouselStart / carouselCards.length) * 100}%
				"
			></span>
		</span>
		<span class="carousel-progress__label">
			{carouselStart + 1}–{Math.min(carouselStart + VISIBLE, carouselCards.length)} / {carouselCards.length}
		</span>
	</div>

</section>

<script module>
	/* SVG pattern generator per section — paleta archivística cálida */
	function svgForSection(section, size) {
		const w = size === 'hero' ? 1440 : 560;
		const h = size === 'hero' ? 500 : 360;
		const uid = section + '-' + size;

		const bgs = {
			proyecto: '#EAE4D9',
			infraestructura: '#E6E0D8',
			actividades: '#E8E3D8',
			instituciones: '#E4DDD5'
		};
		const bg = bgs[section] || '#EAE4D9';

		const patterns = {
			proyecto: `
				<g fill="none" stroke="rgba(60,45,15,0.12)" stroke-width="0.8">
					<ellipse cx="${w/2}" cy="${h/2}" rx="${w*0.42}" ry="${h*0.42}"/>
					<ellipse cx="${w/2}" cy="${h/2}" rx="${w*0.32}" ry="${h*0.32}"/>
					<ellipse cx="${w/2}" cy="${h/2}" rx="${w*0.22}" ry="${h*0.22}"/>
					<ellipse cx="${w/2}" cy="${h/2}" rx="${w*0.12}" ry="${h*0.12}"/>
					<ellipse cx="${w*0.15}" cy="${h*0.25}" rx="${w*0.2}" ry="${h*0.2}"/>
					<ellipse cx="${w*0.85}" cy="${h*0.75}" rx="${w*0.18}" ry="${h*0.18}"/>
				</g>
				<g fill="none" stroke="rgba(60,45,15,0.10)" stroke-width="1">
					<path d="M ${w*0.12} 0 Q ${w*0.25} ${h*0.35} ${w*0.35} ${h*0.65} Q ${w*0.42} ${h*0.8} ${w*0.48} ${h}"/>
					<path d="M ${w*0.65} 0 Q ${w*0.67} ${h*0.3} ${w*0.7} ${h*0.6} Q ${w*0.72} ${h*0.8} ${w*0.73} ${h}"/>
				</g>`,
			infraestructura: `
				<g fill="none" stroke="rgba(43,74,122,0.10)" stroke-width="0.7">
					<rect x="${w*0.06}" y="${h*0.15}" width="${w*0.88}" height="${h*0.7}" rx="2"/>
					<line x1="${w*0.06}" y1="${h*0.36}" x2="${w*0.94}" y2="${h*0.36}"/>
					<line x1="${w*0.06}" y1="${h*0.57}" x2="${w*0.94}" y2="${h*0.57}"/>
					<line x1="${w*0.06}" y1="${h*0.78}" x2="${w*0.94}" y2="${h*0.78}"/>
					<line x1="${w*0.27}" y1="${h*0.15}" x2="${w*0.27}" y2="${h*0.85}"/>
					<line x1="${w*0.5}" y1="${h*0.15}" x2="${w*0.5}" y2="${h*0.85}"/>
					<line x1="${w*0.73}" y1="${h*0.15}" x2="${w*0.73}" y2="${h*0.85}"/>
				</g>
				<circle cx="${w*0.165}" cy="${h*0.255}" r="6" fill="rgba(43,74,122,0.20)"/>
				<circle cx="${w*0.385}" cy="${h*0.255}" r="6" fill="rgba(43,74,122,0.14)"/>
				<circle cx="${w*0.615}" cy="${h*0.255}" r="6" fill="rgba(43,74,122,0.10)"/>`,
			actividades: `
				<g fill="none" stroke="rgba(60,45,15,0.10)" stroke-width="0.7">
					<line x1="${w*0.08}" y1="${h*0.82}" x2="${w*0.92}" y2="${h*0.82}"/>
					<rect x="${w*0.1}" y="${h*0.58}" width="${w*0.1}" height="${h*0.24}" rx="1" fill="rgba(60,45,15,0.05)" stroke="rgba(60,45,15,0.12)"/>
					<rect x="${w*0.24}" y="${h*0.44}" width="${w*0.1}" height="${h*0.38}" rx="1" fill="rgba(60,45,15,0.06)" stroke="rgba(60,45,15,0.13)"/>
					<rect x="${w*0.38}" y="${h*0.52}" width="${w*0.1}" height="${h*0.3}" rx="1" fill="rgba(60,45,15,0.04)" stroke="rgba(60,45,15,0.11)"/>
					<rect x="${w*0.52}" y="${h*0.36}" width="${w*0.1}" height="${h*0.46}" rx="1" fill="rgba(60,45,15,0.08)" stroke="rgba(60,45,15,0.14)"/>
					<rect x="${w*0.66}" y="${h*0.42}" width="${w*0.1}" height="${h*0.4}" rx="1" fill="rgba(60,45,15,0.05)" stroke="rgba(60,45,15,0.12)"/>
					<rect x="${w*0.8}" y="${h*0.28}" width="${w*0.1}" height="${h*0.54}" rx="1" fill="rgba(60,45,15,0.07)" stroke="rgba(60,45,15,0.13)"/>
				</g>`,
			instituciones: `
				<g font-family="monospace" fill="rgba(60,45,15,0.08)" letter-spacing="3">
					<text x="${w*0.05}" y="${h*0.22}" font-size="${size==='hero'?48:28}" font-weight="800">AGN</text>
					<text x="${w*0.05}" y="${h*0.48}" font-size="${size==='hero'?32:20}">BNC · BANREP · IGAC</text>
					<text x="${w*0.05}" y="${h*0.68}" font-size="${size==='hero'?24:15}">MNC · SCI · SOGEOCOL · SMOB · UN</text>
					<text x="${w*0.05}" y="${h*0.84}" font-size="${size==='hero'?18:11}">FN · IIC · CaHID · RCHD · RC</text>
				</g>
				<g fill="none" stroke="rgba(60,45,15,0.07)" stroke-width="0.6">
					<line x1="0" y1="${h*0.3}" x2="${w}" y2="${h*0.3}"/>
					<line x1="0" y1="${h*0.55}" x2="${w}" y2="${h*0.55}"/>
					<line x1="0" y1="${h*0.75}" x2="${w}" y2="${h*0.75}"/>
				</g>`
		};

		return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice"
			xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
			<defs>
				<pattern id="grid-${uid}" width="50" height="50" patternUnits="userSpaceOnUse">
					<path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(60,45,15,0.06)" stroke-width="0.5"/>
				</pattern>
				<pattern id="hatch-${uid}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1="0" y1="0" x2="0" y2="7" stroke="rgba(60,45,15,0.04)" stroke-width="0.8"/>
				</pattern>
			</defs>
			<rect width="${w}" height="${h}" fill="${bg}"/>
			<rect width="${w}" height="${h}" fill="url(#hatch-${uid})"/>
			<rect width="${w}" height="${h}" fill="url(#grid-${uid})"/>
			${patterns[section] || patterns.proyecto}
		</svg>`;
	}
</script>

<style>
	.home-grid-surface {
		background: var(--bg, #EDE8DF);
	}

	/* ── Shared card base ── */
	.home-card {
		position: relative;
		display: block;
		overflow: hidden;
		text-decoration: none;
		background: var(--card-bg, #0f0c08);
		flex-shrink: 0;
	}

	.home-card__bg {
		position: absolute;
		inset: 0;
		transition: transform 0.5s ease;
		overflow: hidden;
	}

	.home-card:hover .home-card__bg {
		transform: scale(1.04);
	}

	/* ── Hover tarjetas pequeñas ── */
	.home-card--small {
		transition: box-shadow 0.35s ease;
	}

	.home-card--small:hover {
		box-shadow: 0 4px 20px rgba(26,24,21,0.10);
	}

	.home-card--small .home-card__map-layer {
		transition: transform 0.55s ease, opacity 0.35s ease;
	}

	.home-card--small:hover .home-card__map-layer {
		transform: scale(1.05);
		opacity: 0.34;
	}

	.home-card--small .home-card__overlay {
		transition: opacity 0.35s ease;
	}

	.home-card--small:hover .home-card__overlay {
		opacity: 0.82;
	}

	.home-card--small .home-card__title {
		transition: color 0.25s ease;
	}

	.home-card--small:hover .home-card__title {
		color: var(--accent);
	}

	.home-card__map-img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.home-card__map-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* mapa en tarjetas pequeñas — entre fondo y overlay */
	.home-card__map-layer {
		position: absolute;
		inset: 0;
		display: block;
		z-index: 1;
		overflow: hidden;
	}

	.home-card__map-layer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 0.22;
		transition: opacity 0.35s ease;
	}

	.home-card__overlay {
		position: absolute;
		inset: 0;
		z-index: 2;
		background: linear-gradient(
			to top,
			rgba(237,232,223,0.97) 0%,
			rgba(237,232,223,0.70) 50%,
			rgba(237,232,223,0.18) 100%
		);
	}

	.home-card__content {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: clamp(1rem, 2.5vw, 1.5rem);
		z-index: 2;
	}

	.home-card__label {
		margin: 0 0 0.45rem;
		font-family: var(--font-body, 'IBM Plex Sans', Arial, sans-serif);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 2.5px;
		text-transform: uppercase;
		color: var(--accent, #2B4A7A);
	}

	.home-card__title {
		margin: 0;
		font-family: var(--font-ccd, 'Barlow Condensed', 'Arial Narrow', sans-serif);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: 0.01em;
		color: var(--ink, #1A1815);
		font-size: clamp(1.2rem, 2.4vw, 1.6rem);
	}

	.home-card__desc {
		margin: 0.55rem 0 0;
		font-family: var(--font-body, 'IBM Plex Sans', Arial, sans-serif);
		font-size: 0.875rem;
		font-weight: 300;
		line-height: 1.60;
		color: var(--fg-dim, rgba(26,24,21,0.55));
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* ── Hero card ── */
	.home-card--hero {
		display: block;
		width: 100%;
		aspect-ratio: 21 / 7;
		border-bottom: 1px solid var(--border, rgba(26,24,21,0.12));
	}

	.home-card__content--hero {
		padding: clamp(1.5rem, 4vw, 2.5rem) clamp(2rem, 5vw, 3rem);
	}

	.home-card__title--hero {
		font-size: clamp(2rem, 4.2vw, 2.9rem);
		max-width: 22ch;
	}

	.home-card--hero .home-card__desc {
		-webkit-line-clamp: 4;
		font-size: 0.95rem;
		max-width: 48rem;
	}

	/* ── Carousel ── */
	.carousel-shell {
		display: flex;
		align-items: stretch;
		position: relative;
	}

	.carousel-outer {
		flex: 1;
		overflow: hidden;
		min-width: 0;
	}

	.carousel-track {
		display: flex;
		transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.home-card--small {
		aspect-ratio: 4 / 3;
		flex-shrink: 0;
	}

	.carousel-btn {
		flex-shrink: 0;
		width: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(26,24,21,0.06);
		border: none;
		color: rgba(26,24,21,0.45);
		font-size: 1.6rem;
		cursor: pointer;
		z-index: 10;
		transition: color 0.15s, background 0.15s;
	}

	.carousel-btn:hover:not(:disabled) {
		color: var(--surface, #F4F1EB);
		background: var(--accent, #2B4A7A);
	}

	.carousel-btn:disabled {
		opacity: 0.25;
		cursor: default;
	}

	/* ── Progress ── */
	.carousel-progress {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.6rem clamp(1rem, 3vw, 2rem);
		background: var(--bg, #EDE8DF);
		border-top: 1px solid var(--border, rgba(26,24,21,0.12));
	}

	.carousel-progress__track {
		flex: 1;
		height: 1px;
		background: rgba(26,24,21,0.12);
		position: relative;
		display: block;
	}

	.carousel-progress__fill {
		position: absolute;
		top: 0;
		height: 1px;
		background: var(--accent, #2B4A7A);
		transition: left 0.42s cubic-bezier(0.4, 0, 0.2, 1), width 0.42s;
	}

	.carousel-progress__label {
		font-family: var(--font-body, 'IBM Plex Sans', Arial, sans-serif);
		font-size: 10px;
		font-weight: 300;
		letter-spacing: 1.5px;
		color: var(--fg-dim, rgba(26,24,21,0.55));
		flex-shrink: 0;
	}

	/* ── Responsive ── */
	@media (max-width: 760px) {
		.home-card--hero {
			aspect-ratio: 16 / 9;
		}

		.home-card--small {
			aspect-ratio: 4 / 3;
		}

		.carousel-btn {
			width: 36px;
			font-size: 1.3rem;
		}
	}

	@media (max-width: 480px) {
		.home-card--hero {
			aspect-ratio: 4 / 3;
		}
	}
</style>

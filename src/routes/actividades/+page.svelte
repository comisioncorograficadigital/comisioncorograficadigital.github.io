<script>
	import { activities, pageContent, pageMetrics } from '$lib/content';

	let actividadAbierta = $state(null);
	const actividadesContent = pageContent.actividades;
	const actividadesCifras = pageMetrics
		.filter(item => item.page === 'actividades')
		.sort((a, b) => Number(a.orden) - Number(b.orden));

	function toggleActividad(i) {
		actividadAbierta = actividadAbierta === i ? null : i;
	}

	const actividades = activities
		.filter(a => a.visible_en_actividades)
		.map((a, i) => ({
			id: a.id_actividad,
			num: String(i + 1).padStart(2, '0'),
			titulo: a.titulo,
			tipo: a.tipo,
			estado: a.estado,
			ano: a['a\u00f1o'],
			descripcion: a.descripcion_breve,
			detalle: a.detalle,
			enlace: a.enlace,
			enlaceLabel: a.enlace_label
		}));


	const tipoBadge = {
		'Exposición': '#3a2a1a',
		'Seminario / actividad académica': '#1a3a2a',
		'Reconocimiento institucional': '#1a2a4a',
		Evento: '#3a1a3a',
		'Académico': '#2a2a1a',
		'Publicación': '#2a3a1a'
	};
</script>

<svelte:head>
	<title>{actividadesContent.head_title}</title>
</svelte:head>

<!-- â”€â”€ Intro dark â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div class="intro-dark">
	<div class="intro-bg" aria-hidden="true">
		<picture class="intro-map-layer">
			<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-31-2400.avif 2400w, /assets/imgs/maps/optimized/map-31-1200.avif 1200w" sizes="100vw" />
			<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-31-2400.webp 2400w, /assets/imgs/maps/optimized/map-31-1200.webp 1200w" sizes="100vw" />
			<img src="/assets/imgs/maps/optimized/map-31-1200.jpg" srcset="/assets/imgs/maps/optimized/map-31-1200.jpg 1200w, /assets/imgs/maps/optimized/map-31-2400.jpg 2400w" sizes="100vw" alt="" loading="eager" />
		</picture>
		<svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="ag" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(214,180,27,0.05)" stroke-width="0.5"/>
				</pattern>
			</defs>
			<rect width="1440" height="400" fill="rgba(15,12,8,0.14)"/>
			<rect width="1440" height="400" fill="url(#ag)"/>
			<g fill="none" stroke="rgba(214,180,27,0.1)" stroke-width="1">
				<line x1="56" y1="340" x2="56" y2="60"/>
				<line x1="56" y1="340" x2="1384" y2="340"/>
			</g>
			<g fill="rgba(43,74,122,0.15)" stroke="none">
				<rect x="100" y="160" width="80" height="180"/>
				<rect x="240" y="100" width="80" height="240"/>
				<rect x="380" y="220" width="80" height="120"/>
				<rect x="520" y="80" width="80" height="260"/>
				<rect x="660" y="180" width="80" height="160"/>
				<rect x="800" y="130" width="80" height="210"/>
				<rect x="940" y="200" width="80" height="140"/>
				<rect x="1080" y="110" width="80" height="230"/>
				<rect x="1220" y="170" width="80" height="170"/>
			</g>
			<g fill="rgba(214,180,27,0.04)" stroke="none">
				<rect x="100" y="60" width="80" height="100"/>
				<rect x="240" y="60" width="80" height="40"/>
				<rect x="520" y="60" width="80" height="20"/>
				<rect x="800" y="60" width="80" height="70"/>
				<rect x="1080" y="60" width="80" height="50"/>
			</g>
		</svg>
	</div>
	<div class="intro-overlay" aria-hidden="true"></div>
	<div class="intro-content container">
		<p class="intro-kicker">{actividadesContent.intro_kicker}</p>
		<h1 class="intro-title">{actividadesContent.intro_title}</h1>
		<p class="intro-desc">{actividadesContent.intro_desc}</p>
	</div>
</div>

<!-- â”€â”€ Cifras â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div class="cifras-strip">
	<div class="cifras-grid container">
		{#each actividadesCifras as cifra}
			<div class="cifra">
				<span class="cifra__num">{cifra.valor}</span>
				<span class="cifra__label">{cifra.label}</span>
			</div>
		{/each}
	</div>
</div>

<!-- â”€â”€ Actividades realizadas â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div class="actividades-section container">
	<p class="bloque-label">{actividadesContent.current_kicker}</p>
	<h2 class="bloque-h2">{actividadesContent.current_title}</h2>

	<div class="act-lista" role="list">
		{#each actividades as act, i}
			<div class="act-item" role="listitem">
				<button
					class="act-btn"
					class:act-btn--open={actividadAbierta === i}
					onclick={() => toggleActividad(i)}
					aria-expanded={actividadAbierta === i}
				>
					<div class="act-btn__meta">
						<span
							class="act-badge"
							style="background: {tipoBadge[act.tipo] ?? '#2a2a2a'}"
						>{act.tipo}</span>
						<span class="act-ano">{act.ano}</span>
					</div>
					<div class="act-btn__centro">
						<span class="act-num">{act.num}</span>
						<span class="act-titulo">{act.titulo}</span>
					</div>
					<span class="act-icon" aria-hidden="true">{actividadAbierta === i ? '→' : '+'}</span>
				</button>

				{#if actividadAbierta === i}
					<div class="act-detalle">
						<div class="act-detalle__inner">
							<p class="act-detalle__desc">{act.descripcion}</p>
							<p class="act-detalle__texto">{act.detalle}</p>
							<a class="act-enlace" href={act.enlace} target="_blank" rel="noopener noreferrer">
								{act.enlaceLabel} â†’
							</a>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<!-- â”€â”€ Cita â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div class="proposito-strip">
	<div class="container">
		<p class="bloque-label">{actividadesContent.quote_label}</p>
		<blockquote class="proposito-quote">{actividadesContent.quote_text}</blockquote>
	</div>
</div>

<style>
	.bloque-label {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
		margin: 0 0 1rem;
	}

	.bloque-h2 {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		line-height: 1.02;
		letter-spacing: -0.02em;
		color: var(--ink);
		text-transform: uppercase;
		margin: 0 0 clamp(2rem, 4vw, 3rem);
	}

	/* â”€â”€ Intro dark â”€â”€ */
	.intro-dark {
		position: relative;
		min-height: 38vh;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		background:
			linear-gradient(rgba(16, 14, 11, 0.56), rgba(16, 14, 11, 0.56)),
			image-set(
				url('/assets/imgs/maps/optimized/map-31-2400.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-31-2400.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-31-2400.jpg') type('image/jpeg')
			);
		background-size: cover;
		background-position: center;
	}

	.intro-bg { position: absolute; inset: 0; }
	.intro-bg svg { width: 100%; height: 100%; position: relative; z-index: 1; }

	.intro-map-layer {
		position: absolute;
		inset: 0;
		display: block;
	}

	.intro-map-layer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 0.48;
		mix-blend-mode: normal;
	}

	.intro-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to bottom, rgba(237, 232, 223, 0.10) 0%, transparent 14%),
			linear-gradient(to top, rgba(10, 8, 6, 0.42) 0%, rgba(10, 8, 6, 0.12) 48%, rgba(10, 8, 6, 0.03) 100%);
	}

	.intro-content {
		position: relative;
		z-index: 2;
		padding-top: clamp(3rem, 8vw, 6rem);
		padding-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.intro-kicker {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--blue-lt, #E8EDF5);
		margin: 0 0 1rem;
	}

	.intro-title {
		font-family: var(--font-ccd);
		font-weight: 900;
		font-size: clamp(3rem, 7vw, 5.5rem);
		line-height: 0.92;
		letter-spacing: -0.02em;
		color: #F4F1EB;
		text-transform: uppercase;
		margin: 0 0 1.5rem;
	}

	.intro-desc {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.4vw, 1.05rem);
		font-weight: 300;
		color: rgba(244,241,235,0.80);
		max-width: 42rem;
		line-height: 1.75;
		margin: 0;
	}

	/* â”€â”€ Cifras â€” claras â”€â”€ */
	.cifras-strip {
		background: transparent;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.cifras-grid {
		width: min(100%, 1200px);
		margin-inline: auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.cifra {
		padding: clamp(1.25rem, 2.5vw, 1.75rem) clamp(1rem, 2vw, 1.5rem);
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.cifra:last-child { border-right: none; }

	.cifra__num {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: clamp(1.4rem, 3vw, 2.2rem);
		color: var(--accent);
		line-height: 1;
	}

	.cifra__label {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 400;
		letter-spacing: 0.3px;
		color: var(--fg-dim);
		line-height: 1.4;
	}

	/* â”€â”€ Actividades â”€â”€ */
	.actividades-section {
		width: min(100%, 1200px);
		margin-inline: auto;
		padding: clamp(4rem, 8vw, 6rem) 0;
		border-bottom: 1px solid var(--border);
	}

	.act-lista {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.act-item { border-bottom: 1px solid var(--border); }

	.act-btn {
		width: 100%;
		display: grid;
		grid-template-columns: 160px 1fr 2rem;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem 0;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: opacity 0.15s;
	}

	.act-btn:hover { opacity: 0.85; }

	.act-btn__meta {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}

	.act-badge {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--accent);
		border: 1px solid rgba(43,74,122,0.25);
		padding: 2px 8px;
	}

	.act-ano {
		font-family: var(--font-ccd);
		font-weight: 300;
		font-size: 0.88rem;
		letter-spacing: 2px;
		color: var(--ink-50);
	}

	.act-btn__centro {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.act-num {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: 1.6rem;
		color: rgba(43,74,122,0.25);
		line-height: 1;
		flex-shrink: 0;
	}

	.act-btn--open .act-num { color: var(--accent); }

	.act-titulo {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.4vw, 1.08rem);
		font-weight: 500;
		color: var(--ink);
		line-height: 1.35;
		transition: color 0.15s;
	}

	.act-icon {
		font-family: var(--font-ccd);
		font-size: 1.4rem;
		color: var(--ink-25);
		font-weight: 300;
		text-align: center;
	}

	.act-btn--open .act-icon { color: var(--accent); }

	.act-detalle {
		background: rgba(26,24,21,0.03);
		border-left: 3px solid rgba(43,74,122,0.35);
		margin-bottom: 1.5rem;
	}

	.act-detalle__inner {
		padding: 1.5rem 1.5rem 1.5rem 4.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 54rem;
	}

	.act-detalle__desc {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.75;
		color: var(--ink);
		margin: 0;
	}

	.act-detalle__texto {
		font-family: var(--font-body);
		font-size: 0.92rem;
		font-weight: 300;
		line-height: 1.75;
		color: var(--fg-dim);
		margin: 0;
	}

	.act-enlace {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--accent);
		text-decoration: none;
		align-self: flex-start;
		padding-bottom: 1px;
		border-bottom: 1px solid rgba(43,74,122,0.35);
		transition: border-color 0.15s;
	}

	.act-enlace:hover { border-bottom-color: var(--accent); }

	.proposito-strip {
		padding: clamp(3rem, 6vw, 5rem) 0;
		border-top: 1px solid var(--border);
	}

	.proposito-quote {
		font-family: var(--font-ccd);
		font-weight: 700;
		font-size: clamp(1.4rem, 3vw, 2.2rem);
		line-height: 1.2;
		color: var(--ink);
		margin: 0;
		max-width: 38rem;
		border-left: 3px solid var(--accent);
		padding-left: 1.5rem;
	}
</style>

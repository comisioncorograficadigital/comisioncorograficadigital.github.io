<script>
	import { componentes, objetivos, institutions, pageContent, pageMetrics, projectStateBadges } from '$lib/content';
	import { renderInlineMarkdown } from '$lib/content/parsePageMarkdown';

	let componenteActivo = $state(0);
	let objetivoAbierto = $state(null);

	const proyectoContent = pageContent.proyecto;
	const proyectoCifras = pageMetrics
		.filter(item => item.page === 'proyecto')
		.sort((a, b) => Number(a.orden) - Number(b.orden));
	const estadoBadges = projectStateBadges.sort((a, b) => Number(a.orden) - Number(b.orden));
	const originParagraphs = (proyectoContent.sections.origin_body || '')
		.split(/\r?\n\r?\n/)
		.map(texto => texto.trim())
		.filter(Boolean);

	const custodiosList  = institutions.filter(i => i.categoria === 'Custodio activo');
	const aliadasList    = institutions.filter(i => i.categoria === 'Aliada / colaboradora');

	function toggleObjetivo(i) {
		objetivoAbierto = objetivoAbierto === i ? null : i;
	}
</script>

<svelte:head>
	<title>{proyectoContent.head_title}</title>
</svelte:head>

<!-- ── Section intro (dark) ─────────────────────── -->
<div class="proyecto-intro">
	<div class="proyecto-intro__bg" aria-hidden="true">
		<picture class="proyecto-intro__map-layer">
			<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-15-2400.avif 2400w, /assets/imgs/maps/optimized/map-15-1200.avif 1200w" sizes="100vw" />
			<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-15-2400.webp 2400w, /assets/imgs/maps/optimized/map-15-1200.webp 1200w" sizes="100vw" />
			<img src="/assets/imgs/maps/optimized/map-15-1200.jpg" srcset="/assets/imgs/maps/optimized/map-15-1200.jpg 1200w, /assets/imgs/maps/optimized/map-15-2400.jpg 2400w" sizes="100vw" alt="" loading="eager" />
		</picture>
		<svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="pg" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(214,180,27,0.05)" stroke-width="0.5"/>
				</pattern>
				<pattern id="ph" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1="0" y1="0" x2="0" y2="8" stroke="rgba(214,180,27,0.04)" stroke-width="0.8"/>
				</pattern>
			</defs>
			<rect width="1440" height="400" fill="rgba(15,12,8,0.26)"/>
			<rect width="1440" height="400" fill="url(#ph)"/>
			<rect width="1440" height="400" fill="url(#pg)"/>
			<g fill="none" stroke="rgba(214,180,27,0.07)" stroke-width="0.8">
				<ellipse cx="200" cy="200" rx="380" ry="160"/>
				<ellipse cx="200" cy="200" rx="280" ry="118"/>
				<ellipse cx="200" cy="200" rx="180" ry="78"/>
				<ellipse cx="1100" cy="280" rx="350" ry="140"/>
				<ellipse cx="1100" cy="280" rx="240" ry="96"/>
			</g>
			<g fill="none" stroke="rgba(214,180,27,0.09)" stroke-width="1">
				<path d="M 600 0 Q 620 80 640 180 Q 660 280 670 400"/>
				<path d="M 900 0 Q 880 100 860 200 Q 840 300 830 400"/>
			</g>
			<rect width="1440" height="400" fill="url(#pg)" opacity="0.3"/>
		</svg>
	</div>
	<div class="proyecto-intro__overlay" aria-hidden="true"></div>
	<div class="proyecto-intro__content container">
		<p class="proyecto-intro__kicker">{proyectoContent.intro_kicker}</p>
		<h1 class="proyecto-intro__title">{proyectoContent.intro_title}</h1>
		<p class="proyecto-intro__desc">{proyectoContent.intro_desc}</p>
	</div>
</div>

<!-- ── Cifras clave ─────────────────────────────── -->
<div class="cifras-strip">
	<div class="cifras-grid container">
		{#each proyectoCifras as cifra}
			<div class="cifra">
				<span class="cifra__num">{cifra.valor}</span>
				<span class="cifra__label">{cifra.label}</span>
			</div>
		{/each}
	</div>
</div>

<!-- ── Origen ─────────────────────────────────── -->
<div class="bloque-narrativo container">
	<div class="bloque-narrativo__grid">
		<div class="bloque-narrativo__texto">
			<p class="bloque-label">{proyectoContent.origin_kicker}</p>
			<h2 class="bloque-h2">{proyectoContent.origin_title}</h2>
			{#each originParagraphs as parrafo}
				<p>{@html renderInlineMarkdown(parrafo)}</p>
			{/each}
		</div>
		<aside class="bloque-narrativo__aside">
			<p class="bloque-label">{proyectoContent.aside_custodios_label}</p>
			<ul class="custodios-lista">
				{#each custodiosList as inst}
					<li class="custodio-item">{inst.nombre}</li>
				{/each}
			</ul>
			<p class="bloque-label" style="margin-top: 2rem">{proyectoContent.aside_aliadas_label}</p>
			<ul class="custodios-lista">
				{#each aliadasList as inst}
					<li class="custodio-item">{inst.nombre}</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>

<!-- ── Propósito ─────────────────────────────── -->
<div class="proposito-strip">
	<div class="container">
		<p class="bloque-label bloque-label--light">{proyectoContent.quote_label}</p>
		<blockquote class="proposito-quote">{proyectoContent.quote_text}</blockquote>
	</div>
</div>

<!-- ── Componentes ───────────────────────────── -->
<div class="componentes-section container">
	<p class="bloque-label">{proyectoContent.componentes_kicker}</p>
	<h2 class="bloque-h2">{proyectoContent.componentes_title}</h2>

	<div class="componentes-tabs" role="tablist" aria-label="Componentes del proyecto">
		{#each componentes as comp, i}
			<button
				class="comp-tab"
				class:comp-tab--active={componenteActivo === i}
				class:comp-tab--destacado={comp.destacado === 'si'}
				role="tab"
				aria-selected={componenteActivo === i}
				aria-controls="comp-panel-{i}"
				onclick={() => (componenteActivo = i)}
			>
				<span class="comp-tab__num">{comp.num}</span>
				<span class="comp-tab__titulo">{comp.titulo}</span>
			</button>
		{/each}
	</div>

	{#each componentes as comp, i}
		<div
			id="comp-panel-{i}"
			class="comp-panel"
			class:comp-panel--visible={componenteActivo === i}
			role="tabpanel"
			aria-labelledby="comp-tab-{i}"
			hidden={componenteActivo !== i}
		>
			<div class="comp-panel__inner">
				<div class="comp-panel__body">
					<div class="comp-estado" data-estado={comp.estado}>{comp.estado}</div>
					<p class="comp-desc">{comp.descripcion}</p>
					<p class="comp-detalle">{comp.detalle}</p>
					{#if comp.enlace}
						<div class="comp-actions">
							<a class="comp-link" href={comp.enlace} target="_blank" rel="noopener noreferrer">
								{comp.enlace_label || 'Acceder'}
							</a>
						</div>
					{/if}
				</div>
				<div class="comp-panel__visual" aria-hidden="true">
					<picture class="comp-panel__map">
						<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-03-1200.avif" />
						<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-03-1200.webp" />
						<img src="/assets/imgs/maps/optimized/map-03-1200.jpg" alt="" loading="lazy" />
					</picture>
					<svg class="comp-panel__num-overlay" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
						<rect width="320" height="200" fill="rgba(16,14,11,0.36)"/>
						<text
							x="160" y="110"
							font-family="'Barlow Condensed', sans-serif"
							font-weight="800"
							font-size="96"
							fill="rgba(244,241,235,0.12)"
							text-anchor="middle"
						>{comp.num}</text>
						<text
							x="160" y="160"
							font-family="monospace"
							font-size="7"
							fill="rgba(244,241,235,0.25)"
							text-anchor="middle"
							letter-spacing="3"
						>{comp.titulo.toUpperCase()}</text>
					</svg>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- ── Objetivos ─────────────────────────────── -->
<div class="objetivos-section">
	<div class="container">
		<p class="bloque-label">{proyectoContent.objetivos_kicker}</p>
		<h2 class="bloque-h2">{proyectoContent.objetivos_title}</h2>

		<div class="objetivos-lista" role="list">
			{#each objetivos as obj, i}
				<div class="objetivo-item" role="listitem">
					<button
						class="objetivo-btn"
						class:objetivo-btn--open={objetivoAbierto === i}
						onclick={() => toggleObjetivo(i)}
						aria-expanded={objetivoAbierto === i}
					>
						<span class="objetivo-num" aria-hidden="true">{obj.num}</span>
						<span class="objetivo-preview">
							{obj.texto.slice(0, 72)}…
						</span>
						<span class="objetivo-icon" aria-hidden="true">{objetivoAbierto === i ? '−' : '+'}</span>
					</button>
					{#if objetivoAbierto === i}
						<p class="objetivo-texto">{obj.texto}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- ── Estado actual ─────────────────────────── -->
<div class="estado-section container">
	<div class="estado-inner">
		<div>
			<p class="bloque-label">{proyectoContent.estado_kicker}</p>
			<p class="estado-texto">{proyectoContent.estado_text}</p>
		</div>
		<div class="estado-badges">
			{#each estadoBadges as badge}
				<div class="estado-badge">
					<span class={
						badge.tono === 'active'
							? 'badge-dot badge-dot--active'
							: 'badge-dot badge-dot--pending'
					}>{''}</span>
					{badge.texto}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* ── Shared ── */
	.bloque-label {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
		margin: 0 0 1rem;
	}

	.bloque-label--light {
		color: var(--blue-lt, #E8EDF5);
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

	/* ── Intro dark ── */
	.proyecto-intro {
		position: relative;
		min-height: 38vh;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		background:
			linear-gradient(rgba(16, 14, 11, 0.58), rgba(16, 14, 11, 0.58)),
			image-set(
				url('/assets/imgs/maps/optimized/map-15-2400.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-15-2400.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-15-2400.jpg') type('image/jpeg')
			);
		background-size: cover;
		background-position: center;
	}

	.proyecto-intro__bg { position: absolute; inset: 0; }
	.proyecto-intro__bg svg { width: 100%; height: 100%; position: relative; z-index: 1; }

	.proyecto-intro__map-layer {
		position: absolute;
		inset: 0;
		display: block;
	}

	.proyecto-intro__map-layer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 0.38;
		mix-blend-mode: normal;
	}

	.proyecto-intro__overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to bottom, rgba(237, 232, 223, 0.10) 0%, transparent 14%),
			linear-gradient(to top, rgba(10, 8, 6, 0.58) 0%, rgba(10, 8, 6, 0.18) 48%, rgba(10, 8, 6, 0.03) 100%);
	}

	.proyecto-intro__content {
		position: relative;
		z-index: 2;
		padding-top: clamp(3rem, 8vw, 6rem);
		padding-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.proyecto-intro__kicker {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--blue-lt, #E8EDF5);
		margin: 0 0 1rem;
	}

	.proyecto-intro__title {
		font-family: var(--font-ccd);
		font-weight: 900;
		font-size: clamp(3rem, 7vw, 5.5rem);
		line-height: 0.92;
		letter-spacing: -0.02em;
		color: #F4F1EB;
		text-transform: uppercase;
		margin: 0 0 1.5rem;
	}

	.proyecto-intro__desc {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.4vw, 1.05rem);
		font-weight: 300;
		color: rgba(244,241,235,0.80);
		max-width: 42rem;
		line-height: 1.75;
		margin: 0;
	}

	/* ── Cifras ── */
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
		gap: 0;
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
		font-size: clamp(1.3rem, 2.8vw, 1.9rem);
		color: var(--accent);
		line-height: 1;
		letter-spacing: -0.01em;
	}

	.cifra__label {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 400;
		letter-spacing: 0.3px;
		color: var(--fg-dim);
		line-height: 1.4;
	}

	/* ── Narrativo ── */
	.bloque-narrativo {
		width: min(100%, 1200px);
		margin-inline: auto;
		padding: clamp(4rem, 8vw, 6rem) 0;
		border-bottom: 1px solid var(--border);
	}

	.bloque-narrativo__grid {
		display: grid;
		grid-template-columns: 1fr 280px;
		gap: clamp(3rem, 6vw, 5rem);
		align-items: start;
	}

	.bloque-narrativo__texto h2 {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: clamp(1.5rem, 3vw, 2.2rem);
		line-height: 1.05;
		letter-spacing: -0.02em;
		color: var(--ink);
		text-transform: uppercase;
		margin: 0 0 1.5rem;
	}

	.bloque-narrativo__texto p {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.3vw, 1.05rem);
		font-weight: 300;
		line-height: 1.8;
		color: var(--fg-dim);
		margin: 0 0 1rem;
		max-width: 46rem;
	}

	.bloque-narrativo__texto p:last-child { margin-bottom: 0; }

	.bloque-narrativo__aside { padding-top: 1.5rem; }

	.custodios-lista {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.custodio-item {
		font-family: var(--font-body);
		font-size: 0.82rem;
		font-weight: 400;
		color: var(--ink);
		background: rgba(26,24,21,0.05);
		border: 1px solid var(--border);
		padding: 4px 10px;
		line-height: 1.4;
	}

	/* ── Propósito (dark, intencional) ── */
	.proposito-strip {
		background:
			linear-gradient(rgba(10,8,6,0.74), rgba(10,8,6,0.74)),
			image-set(
				url('/assets/imgs/maps/optimized/map-15-2400.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-15-2400.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-15-2400.jpg') type('image/jpeg')
			);
		background-size: cover;
		background-position: center;
		padding: clamp(3rem, 6vw, 5rem) 0;
	}

	.proposito-quote {
		font-family: var(--font-ccd);
		font-weight: 700;
		font-size: clamp(1.5rem, 3.5vw, 2.4rem);
		line-height: 1.2;
		color: #F4F1EB;
		margin: 0;
		max-width: 36rem;
		border-left: 3px solid var(--accent);
		padding-left: 1.5rem;
	}

	/* ── Componentes ── */
	.componentes-section {
		width: min(100%, 1200px);
		margin-inline: auto;
		padding: clamp(4rem, 8vw, 6rem) 0;
		border-bottom: 1px solid var(--border);
	}

	.componentes-tabs {
		display: flex;
		gap: 2px;
		margin-bottom: 2px;
		flex-wrap: wrap;
	}

	.comp-tab {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;
		flex: 1;
		min-width: 140px;
		padding: 1rem 1.25rem;
		background: rgba(26,24,21,0.04);
		border: none;
		border-top: 2px solid transparent;
		cursor: pointer;
		text-align: left;
		transition: background 0.15s, border-color 0.15s;
	}

	.comp-tab:hover { background: rgba(26,24,21,0.08); }

	.comp-tab--active {
		background: var(--surface);
		border-top-color: var(--accent);
	}

	.comp-tab--destacado {
		background: color-mix(in srgb, var(--accent) 8%, var(--surface));
	}

	.comp-tab--destacado.comp-tab--active {
		background: color-mix(in srgb, var(--accent) 12%, var(--surface));
		border-top-color: var(--accent);
	}

	.comp-tab__num {
		font-family: var(--font-ccd);
		font-size: 11px;
		font-weight: 300;
		letter-spacing: 2px;
		color: var(--accent);
	}

	.comp-tab__titulo {
		font-family: var(--font-body);
		font-size: 15px;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--ink-50);
		line-height: 1.3;
	}

	.comp-tab--active .comp-tab__titulo { color: var(--ink); }

	.comp-panel { display: none; }
	.comp-panel--visible { display: block; }

	.comp-panel__inner {
		display: grid;
		grid-template-columns: 1fr 240px;
		background: var(--surface);
		min-height: 220px;
		border: 1px solid var(--border);
		border-top: none;
	}

	.comp-panel__body {
		padding: clamp(1.5rem, 3vw, 2.5rem);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.comp-estado {
		display: inline-block;
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
		border: 1px solid rgba(43,74,122,0.30);
		padding: 3px 8px;
		align-self: flex-start;
	}

	.comp-desc {
		font-family: var(--font-body);
		font-size: clamp(0.92rem, 1.3vw, 1.02rem);
		font-weight: 400;
		line-height: 1.75;
		color: var(--ink);
		margin: 0;
		max-width: 46rem;
	}

	.comp-detalle {
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 300;
		line-height: 1.7;
		color: var(--fg-dim);
		margin: 0;
		max-width: 46rem;
	}

	.comp-panel__visual {
		border-left: 1px solid var(--border);
		overflow: hidden;
		position: relative;
	}

	.comp-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 0.25rem;
	}

	.comp-link {
		font-family: var(--font-body);
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		color: #F4F1EB;
		text-decoration: none;
		align-self: flex-start;
		padding: 0.9rem 1.25rem;
		background: var(--accent);
		border: 1px solid var(--accent);
		transition: background 0.15s, border-color 0.15s;
	}

	.comp-link:hover {
		background: color-mix(in srgb, var(--accent) 88%, #0f0c08 12%);
		border-color: color-mix(in srgb, var(--accent) 88%, #0f0c08 12%);
	}

	.comp-panel__map {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
	}

	.comp-panel__map img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.comp-panel__num-overlay { position: absolute; inset: 0; }

	/* ── Objetivos ── */
	.objetivos-section {
		background: var(--bg);
		padding: clamp(4rem, 8vw, 6rem) 0;
		border-top: 1px solid var(--border);
	}

	.objetivos-lista {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.objetivo-item { border-bottom: 1px solid var(--border); }

	.objetivo-btn {
		width: 100%;
		display: grid;
		grid-template-columns: 3rem 1fr 2rem;
		align-items: center;
		gap: 1rem;
		padding: 1.25rem 0;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.objetivo-btn:hover .objetivo-preview { color: var(--ink); }
	.objetivo-btn--open .objetivo-preview { color: var(--ink); }

	.objetivo-num {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: 1.6rem;
		color: rgba(43,74,122,0.30);
		line-height: 1;
		flex-shrink: 0;
	}

	.objetivo-btn--open .objetivo-num { color: var(--accent); }

	.objetivo-preview {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 400;
		color: var(--fg-dim);
		line-height: 1.4;
		transition: color 0.15s;
	}

	.objetivo-icon {
		font-family: var(--font-ccd);
		font-size: 1.4rem;
		color: var(--ink-25);
		font-weight: 300;
		text-align: center;
	}

	.objetivo-btn--open .objetivo-icon { color: var(--accent); }

	.objetivo-texto {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.8;
		color: var(--fg-dim);
		padding: 0 0 1.5rem 4rem;
		margin: 0;
		max-width: 52rem;
	}

	/* ── Estado ── */
	.estado-section {
		width: min(100%, 1200px);
		margin-inline: auto;
		padding: clamp(3rem, 6vw, 5rem) 0 clamp(4rem, 8vw, 6rem);
	}

	.estado-inner {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: start;
		padding: clamp(1.5rem, 3vw, 2.5rem);
		background: rgba(26,24,21,0.03);
		border-left: 3px solid var(--accent);
	}

	.estado-texto {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.8;
		color: var(--fg-dim);
		max-width: 44rem;
		margin: 0.5rem 0 0;
	}

	.estado-badges {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		min-width: 240px;
	}

	.estado-badge {
		font-family: var(--font-body);
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0.02em;
		color: var(--fg-dim);
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.badge-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.badge-dot--active { background: #5a9e5a; }
	.badge-dot--pending { background: transparent; border: 1px solid var(--border); }

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.cifras-grid { grid-template-columns: repeat(2, 1fr); }
		.bloque-narrativo__grid { grid-template-columns: 1fr; }
		.comp-panel__inner { grid-template-columns: 1fr; }
		.comp-panel__visual { display: none; }
		.estado-inner { grid-template-columns: 1fr; }
	}

	@media (max-width: 600px) {
		.cifras-grid { grid-template-columns: 1fr 1fr; }
		.componentes-tabs { flex-direction: column; }
		.comp-tab { min-width: unset; flex-direction: row; align-items: center; }
		.objetivo-btn { grid-template-columns: 2.5rem 1fr 2rem; }
	}
</style>

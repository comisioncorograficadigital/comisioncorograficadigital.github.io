<script>
	import { resources, pageContent, pageMetrics } from '$lib/content';

	let recursoActivo = $state(0);
	const infraestructuraContent = pageContent.infraestructura;
	const infraestructuraCifras = pageMetrics
		.filter(item => item.page === 'infraestructura')
		.sort((a, b) => Number(a.orden) - Number(b.orden));

	const recursos = resources
		.filter(r => r.visible_en_seccion && r.seccion === 'infraestructura')
		.map((r, i) => ({
			num: String(i + 1).padStart(2, '0'),
			id: r.id_recurso,
			titulo: r.nombre,
			tipo: r.tipo,
			estado: r.estado,
			descripcion: r.descripcion_breve,
			detalle: r.detalle,
			enlace: r.enlace,
			enlaceLabel: r.enlace_label,
			previewTipo: r.preview_tipo,
			previewUrl: r.preview_url || r.enlace,
			previewTitulo: r.preview_titulo || r.nombre,
			estandares: r.estandares ? r.estandares.split('|') : []
		}));

	const estandaresMap = {
		'RDF/OWL':  { nombre: 'Resource Description Framework / Web Ontology Language', area: 'Modelado sem\u00e1ntico' },
		'SKOS':     { nombre: 'Simple Knowledge Organization System', area: 'Vocabularios' },
		'PROV-O':   { nombre: 'PROV Ontology', area: 'Procedencia' },
		'DCTERMS':  { nombre: 'Dublin Core Metadata Terms', area: 'Descripci\u00f3n bibliogr\u00e1fica' },
		'IIIF':     { nombre: 'International Image Interoperability Framework', area: 'Im\u00e1genes digitales' },
		'JSON-LD':  { nombre: 'JSON for Linking Data', area: 'Datos enlazados' },
		'Omeka S':  { nombre: 'Omeka S \u2014 plataforma de colecciones culturales', area: 'Plataforma' }
	};

	const estandares = [...new Set(recursos.flatMap(r => r.estandares))]
		.map(sigla => ({ sigla, ...estandaresMap[sigla] }))
		.filter(e => e.nombre);
</script>

<svelte:head>
	<title>{infraestructuraContent.head_title}</title>
</svelte:head>

<!-- ── Intro dark ───────────────────────────────── -->
<div class="intro-dark">
	<div class="intro-bg" aria-hidden="true">
		<picture class="intro-map-layer">
			<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-27-2400.avif 2400w, /assets/imgs/maps/optimized/map-27-1200.avif 1200w" sizes="100vw" />
			<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-27-2400.webp 2400w, /assets/imgs/maps/optimized/map-27-1200.webp 1200w" sizes="100vw" />
			<img src="/assets/imgs/maps/optimized/map-27-1200.jpg" srcset="/assets/imgs/maps/optimized/map-27-1200.jpg 1200w, /assets/imgs/maps/optimized/map-27-2400.jpg 2400w" sizes="100vw" alt="" loading="eager" />
		</picture>
		<svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="ig" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(214,180,27,0.06)" stroke-width="0.5"/>
				</pattern>
				<pattern id="iv" width="40" height="40" patternUnits="userSpaceOnUse">
					<line x1="20" y1="0" x2="20" y2="40" stroke="rgba(214,180,27,0.04)" stroke-width="0.4"/>
				</pattern>
			</defs>
			<rect width="1440" height="400" fill="rgba(15,12,8,0.16)"/>
			<rect width="1440" height="400" fill="url(#ig)"/>
			<rect width="1440" height="400" fill="url(#iv)"/>
			<g fill="none" stroke="rgba(214,180,27,0.08)" stroke-width="0.6">
				<line x1="0" y1="80" x2="1440" y2="80"/>
				<line x1="0" y1="160" x2="1440" y2="160"/>
				<line x1="0" y1="240" x2="1440" y2="240"/>
				<line x1="0" y1="320" x2="1440" y2="320"/>
			</g>
			<g fill="rgba(214,180,27,0.06)" font-family="monospace" font-size="8" letter-spacing="1">
				<text x="56" y="52">RDF/OWL</text>
				<text x="56" y="132">SKOS</text>
				<text x="56" y="212">PROV-O</text>
				<text x="56" y="292">IIIF</text>
				<text x="1340" y="52">JSON-LD</text>
				<text x="1330" y="132">DCTERMS</text>
				<text x="1320" y="212">OMEKA S</text>
			</g>
			<rect width="1440" height="400" fill="rgba(15,12,8,0.08)"/>
		</svg>
	</div>
	<div class="intro-overlay" aria-hidden="true"></div>
	<div class="intro-content container">
		<p class="intro-kicker">{infraestructuraContent.intro_kicker}</p>
		<h1 class="intro-title">{infraestructuraContent.intro_title}</h1>
		<p class="intro-desc">{infraestructuraContent.intro_desc}</p>
	</div>
</div>

<!-- ── Cifras ──────────────────────────────────── -->
<div class="cifras-strip">
	<div class="cifras-grid container">
		{#each infraestructuraCifras as cifra}
			<div class="cifra">
				<span class="cifra__num">{cifra.valor}</span>
				<span class="cifra__label">{cifra.label}</span>
			</div>
		{/each}
	</div>
</div>

<!-- ── Recursos: tabs ─────────────────────────── -->
<div class="recursos-section container">
	<p class="bloque-label">{infraestructuraContent.resources_kicker}</p>
	<h2 class="bloque-h2">{infraestructuraContent.resources_title}</h2>

	<div class="rec-tabs" role="tablist">
		{#each recursos as rec, i}
			<button
				class="rec-tab"
				class:rec-tab--active={recursoActivo === i}
				role="tab"
				aria-selected={recursoActivo === i}
				onclick={() => (recursoActivo = i)}
			>
				<span class="rec-tab__num">{rec.num}</span>
				<span class="rec-tab__titulo">{rec.titulo}</span>
			</button>
		{/each}
	</div>

	{#each recursos as rec, i}
		<div
			class="rec-panel"
			class:rec-panel--visible={recursoActivo === i}
			hidden={recursoActivo !== i}
			role="tabpanel"
		>
			<div class="rec-panel__inner">
				<div class="rec-panel__body">
					<div class="rec-estado">{rec.estado}</div>
					<p class="rec-tipo">{rec.tipo}</p>
					<p class="rec-desc">{rec.descripcion}</p>
					<p class="rec-detalle">{rec.detalle}</p>
					<div class="rec-tags">
						{#each rec.estandares as std}
							<span class="rec-tag">{std}</span>
						{/each}
					</div>
					<div class="rec-actions">
						<a class="rec-link" href={rec.enlace} target="_blank" rel="noopener noreferrer">
							{rec.enlaceLabel || 'Acceder'}
						</a>
					</div>
				</div>
				<div class="rec-panel__visual" aria-hidden="true">
					<div class="rec-preview-shell">
						<div class="rec-preview-bar">
							<span class="rec-preview-dot"></span>
							<span class="rec-preview-dot"></span>
							<span class="rec-preview-dot"></span>
							<p class="rec-preview-url">{rec.previewTitulo}</p>
						</div>
						<div class="rec-preview-fallback">
							<span class="rec-preview-num">{rec.num}</span>
							<p class="rec-preview-kicker">{infraestructuraContent.preview_kicker}</p>
							<p class="rec-preview-title">{rec.titulo}</p>
							<p class="rec-preview-copy">{rec.estado}</p>
							<div class="rec-preview-tags">
								{#each rec.estandares.slice(0, 3) as std}
									<span class="rec-preview-tag">{std}</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- ── Estándares ─────────────────────────────── -->
<div class="estandares-section">
	<div class="container">
		<p class="bloque-label bloque-label--light">{infraestructuraContent.standards_kicker}</p>
		<h2 class="bloque-h2 bloque-h2--light">{infraestructuraContent.standards_title}</h2>
		<p class="estandares-intro">{infraestructuraContent.sections.standards_intro}</p>
		<div class="estandares-grid">
			{#each estandares as std}
				<div class="estandar-card">
					<p class="estandar-sigla">{std.sigla}</p>
					<p class="estandar-nombre">{std.nombre}</p>
					<p class="estandar-area">{std.area}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- ── Propósito técnico ───────────────────────── -->
<div class="proposito-strip">
	<div class="container">
		<p class="bloque-label">{infraestructuraContent.quote_label}</p>
		<blockquote class="proposito-quote">{infraestructuraContent.quote_text}</blockquote>
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

	.bloque-label--light { color: var(--blue-lt, #E8EDF5); }

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

	.bloque-h2--light { color: #F4F1EB; }

	/* ── Intro dark ── */
	.intro-dark {
		position: relative;
		min-height: 38vh;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		background:
			linear-gradient(rgba(16, 14, 11, 0.58), rgba(16, 14, 11, 0.58)),
			image-set(
				url('/assets/imgs/maps/optimized/map-27-2400.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-27-2400.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-27-2400.jpg') type('image/jpeg')
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
		opacity: 0.46;
		mix-blend-mode: normal;
	}

	.intro-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to bottom, rgba(237, 232, 223, 0.10) 0%, transparent 14%),
			linear-gradient(to top, rgba(10, 8, 6, 0.46) 0%, rgba(10, 8, 6, 0.14) 48%, rgba(10, 8, 6, 0.03) 100%);
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

	/* ── Recursos ── */
	.recursos-section {
		width: min(100%, 1200px);
		margin-inline: auto;
		padding: clamp(4rem, 8vw, 6rem) 0;
		border-bottom: 1px solid var(--border);
	}

	.rec-tabs {
		display: flex;
		gap: 2px;
		margin-bottom: 2px;
	}

	.rec-tab {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		flex: 1;
		padding: 1rem 1.25rem;
		background: rgba(26,24,21,0.04);
		border: none;
		border-top: 2px solid transparent;
		cursor: pointer;
		text-align: left;
		transition: background 0.15s, border-color 0.15s;
	}

	.rec-tab:hover { background: rgba(26,24,21,0.08); }

	.rec-tab--active {
		background: var(--surface);
		border-top-color: var(--accent);
	}

	.rec-tab__num {
		font-family: var(--font-ccd);
		font-size: 11px;
		font-weight: 300;
		letter-spacing: 2px;
		color: var(--accent);
	}

	.rec-tab__titulo {
		font-family: var(--font-body);
		font-size: 15px;
		font-weight: 600;
		color: var(--ink-50);
	}

	.rec-tab--active .rec-tab__titulo { color: var(--ink); }

	.rec-panel { display: none; }
	.rec-panel--visible { display: block; }

	.rec-panel__inner {
		display: grid;
		grid-template-columns: 1fr 280px;
		background: var(--surface);
		min-height: 260px;
		border: 1px solid var(--border);
		border-top: none;
	}

	.rec-panel__body {
		padding: clamp(1.5rem, 3vw, 2.5rem);
		display: flex;
		flex-direction: column;
		gap: 1.15rem;
	}

	.rec-estado {
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

	.rec-tipo {
		font-family: var(--font-body);
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: var(--ink-50);
		margin: 0;
	}

	.rec-desc {
		font-family: var(--font-body);
		font-size: clamp(1rem, 1.45vw, 1.12rem);
		font-weight: 400;
		line-height: 1.75;
		color: var(--ink);
		margin: 0;
		max-width: 46rem;
	}

	.rec-detalle {
		font-family: var(--font-body);
		font-size: 0.97rem;
		font-weight: 300;
		line-height: 1.7;
		color: var(--fg-dim);
		margin: 0;
		max-width: 46rem;
	}

	.rec-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.rec-tag {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: var(--accent);
		border: 1px solid rgba(43,74,122,0.25);
		padding: 2px 7px;
	}

	.rec-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 0.25rem;
	}

	.rec-link {
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
		transition: background 0.15s, color 0.15s, border-color 0.15s;
	}

	.rec-link:hover {
		background: color-mix(in srgb, var(--accent) 88%, #0f0c08 12%);
		border-color: color-mix(in srgb, var(--accent) 88%, #0f0c08 12%);
	}

	.rec-panel__visual {
		border-left: 1px solid var(--border);
		overflow: hidden;
		background: rgba(15, 12, 8, 0.04);
		padding: 1rem;
	}

	.rec-preview-shell {
		height: 100%;
		display: flex;
		flex-direction: column;
		border: 1px solid rgba(43,74,122,0.16);
		background: rgba(244, 241, 235, 0.85);
	}

	.rec-preview-bar {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.55rem 0.75rem;
		border-bottom: 1px solid rgba(43,74,122,0.12);
		background: rgba(255,255,255,0.55);
	}

	.rec-preview-dot {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 999px;
		background: rgba(43,74,122,0.32);
		flex: 0 0 auto;
	}

	.rec-preview-url {
		margin: 0 0 0 0.2rem;
		font-family: var(--font-body);
		font-size: 0.68rem;
		line-height: 1.4;
		color: var(--fg-dim);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.rec-preview-fallback {
		flex: 1;
		width: 100%;
	}

	.rec-preview-fallback {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 1.5rem;
		background:
			linear-gradient(rgba(244, 241, 235, 0.88), rgba(244, 241, 235, 0.88)),
			image-set(
				url('/assets/imgs/maps/optimized/map-08-1200.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-08-1200.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-08-1200.jpg') type('image/jpeg')
			);
		background-size: cover;
		background-position: center;
		gap: 0.8rem;
	}

	.rec-preview-num {
		font-family: var(--font-ccd);
		font-size: 3.25rem;
		font-weight: 800;
		line-height: 1;
		color: rgba(43,74,122,0.18);
	}

	.rec-preview-kicker {
		margin: 0;
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1.8px;
		text-transform: uppercase;
		color: var(--accent);
	}

	.rec-preview-title {
		margin: 0;
		font-family: var(--font-ccd);
		font-size: clamp(1.3rem, 2.1vw, 1.85rem);
		font-weight: 800;
		line-height: 1.02;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		color: var(--ink);
		max-width: 13rem;
	}

	.rec-preview-copy {
		margin: 0;
		font-family: var(--font-body);
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--fg-dim);
	}

	.rec-preview-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: 0.2rem;
	}

	.rec-preview-tag {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		color: var(--accent);
		padding: 0.28rem 0.45rem;
		border: 1px solid rgba(43,74,122,0.18);
		background: rgba(255,255,255,0.5);
	}

	/* ── Estándares — sección clara ── */
	.estandares-section {
		background: var(--bg);
		border-top: 1px solid var(--border);
		padding: clamp(4rem, 8vw, 6rem) 0;
	}

	.estandares-section .bloque-h2 { color: var(--ink); }

	.estandares-intro {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.3vw, 1.05rem);
		font-weight: 300;
		line-height: 1.8;
		color: var(--fg-dim);
		max-width: 44rem;
		margin: -1.5rem 0 2.5rem;
	}

	.estandares-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 2px;
	}

	.estandar-card {
		padding: 1.25rem 1.5rem;
		background: var(--surface);
		border-top: 2px solid rgba(43,74,122,0.15);
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		transition: border-top-color 0.15s;
	}

	.estandar-card:hover { border-top-color: var(--accent); }

	.estandar-sigla {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: 1.3rem;
		color: var(--accent);
		margin: 0;
		letter-spacing: -0.01em;
	}

	.estandar-nombre {
		font-family: var(--font-body);
		font-size: 0.85rem;
		font-weight: 300;
		color: var(--fg-dim);
		margin: 0;
		line-height: 1.45;
	}

	.estandar-area {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--accent);
		opacity: 0.65;
		margin: 0.2rem 0 0;
	}

	/* ── Propósito ── */
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

	/* ── Responsive ── */
	@media (max-width: 760px) {
		.cifras-grid { grid-template-columns: repeat(2, 1fr); }
		.rec-panel__inner { grid-template-columns: 1fr; }
		.rec-panel__visual { display: none; }
	}
</style>

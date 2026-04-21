<script>
	import { institutions, participants, workstreams, pageContent, pageMetrics } from '$lib/content';

	let tabActivo = $state('custodios');
	const participantesContent = pageContent.participantes;
	const participantesCifras = pageMetrics
		.filter(item => item.page === 'participantes')
		.sort((a, b) => Number(a.orden) - Number(b.orden));

	const custodios = institutions
		.filter(i => i.categoria === 'Custodio activo' && i.visible_en_instituciones)
		.map(i => ({
			sigla: i.sigla,
			nombre: i.nombre,
			ciudad: i.ciudad,
			nota: i.nota,
			logoUrl: i.logo_url,
			webUrl: i.web_url
		}));

	const aliadas = institutions
		.filter(i => i.categoria === 'Aliada / colaboradora' && i.visible_en_instituciones)
		.map(i => ({
			sigla: i.sigla,
			nombre: i.nombre,
			tipo: i.categoria,
			nota: i.nota,
			logoUrl: i.logo_url,
			webUrl: i.web_url
		}));

	const comite = participants
		.filter(p => p.tipo_participacion === 'Comit\u00e9 cient\u00edfico' && p.visible_en_instituciones)
		.map(p => ({
			nombre: p.nombre,
			institucion: p.institucion_nombre,
			pais: p.pais,
			photoUrl: p.photo_url,
			webUrl: p.web_url
		}));

	const equipo = workstreams
		.filter(ws => ws.visible_en_instituciones)
		.map(ws => ({
			eje: ws.nombre,
			personas: participants
				.filter(p => p.tipo_participacion === 'Equipo de trabajo' && p.grupo_o_instancia === ws.nombre)
				.map(p => ({
					nombre: p.nombre,
					afiliacion: p.afiliacion,
					photoUrl: p.photo_url,
					webUrl: p.web_url
				}))
		}))
		.filter(ws => ws.personas.length > 0);

	const totalEquipo = equipo.reduce((acc, ws) => acc + ws.personas.length, 0);

	const tabs = [
		{ id: 'custodios', label: participantesContent.tab_custodios, count: custodios.length },
		{ id: 'aliadas', label: participantesContent.tab_aliadas, count: aliadas.length },
		{ id: 'comite', label: participantesContent.tab_comite, count: comite.length },
		{ id: 'equipo', label: participantesContent.tab_equipo, count: totalEquipo }
	];
</script>

<svelte:head>
	<title>{participantesContent.head_title}</title>
</svelte:head>

<!--  Intro dark  -->
<div class="intro-dark">
	<div class="intro-bg" aria-hidden="true">
		<picture class="intro-map-layer">
			<source type="image/avif" srcset="/assets/imgs/maps/optimized/map-21-2400.avif 2400w, /assets/imgs/maps/optimized/map-21-1200.avif 1200w" sizes="100vw" />
			<source type="image/webp" srcset="/assets/imgs/maps/optimized/map-21-2400.webp 2400w, /assets/imgs/maps/optimized/map-21-1200.webp 1200w" sizes="100vw" />
			<img src="/assets/imgs/maps/optimized/map-21-1200.jpg" srcset="/assets/imgs/maps/optimized/map-21-1200.jpg 1200w, /assets/imgs/maps/optimized/map-21-2400.jpg 2400w" sizes="100vw" alt="" loading="eager" />
		</picture>
		<svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="instg" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(214,180,27,0.04)" stroke-width="0.5"/>
				</pattern>
				<pattern id="insth" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1="0" y1="0" x2="0" y2="8" stroke="rgba(214,180,27,0.03)" stroke-width="1"/>
				</pattern>
			</defs>
			<rect width="1440" height="400" fill="rgba(15,12,8,0.18)"/>
			<rect width="1440" height="400" fill="url(#insth)"/>
			<rect width="1440" height="400" fill="url(#instg)"/>
			<g font-family="'Barlow Condensed', sans-serif" font-weight="800" fill="rgba(214,180,27,0.05)">
				<text x="60" y="160" font-size="120">AGN</text>
				<text x="340" y="260" font-size="88">BANREP</text>
				<text x="780" y="130" font-size="100">IGAC</text>
				<text x="980" y="300" font-size="80">BNC</text>
				<text x="1180" y="200" font-size="72">UN</text>
			</g>
			<g fill="none" stroke="rgba(214,180,27,0.06)" stroke-width="0.8">
				<circle cx="720" cy="200" r="180"/>
				<circle cx="720" cy="200" r="120"/>
				<circle cx="720" cy="200" r="60"/>
			</g>
		</svg>
	</div>
	<div class="intro-overlay" aria-hidden="true"></div>
	<div class="intro-content container">
		<p class="intro-kicker">{participantesContent.intro_kicker}</p>
		<h1 class="intro-title">{participantesContent.intro_title}</h1>
		<p class="intro-desc">{participantesContent.intro_desc}</p>
	</div>
</div>

<!--  Cifras  -->
<div class="cifras-strip">
	<div class="cifras-grid container">
		{#each participantesCifras as cifra}
			<div class="cifra">
				<span class="cifra__num">{cifra.valor}</span>
				<span class="cifra__label">{cifra.label}</span>
			</div>
		{/each}
	</div>
</div>

<!--  Tabs  -->
<div class="red-section container">
	<p class="bloque-label">{participantesContent.network_kicker}</p>
	<h2 class="bloque-h2">{participantesContent.network_title}</h2>

	<div class="inst-tabs" role="tablist">
		{#each tabs as tab}
			<button
				class="inst-tab"
				class:inst-tab--active={tabActivo === tab.id}
				role="tab"
				aria-selected={tabActivo === tab.id}
				onclick={() => (tabActivo = tab.id)}
			>
				<span class="inst-tab__label">{tab.label}</span>
				<span class="inst-tab__count">{tab.count}</span>
			</button>
		{/each}
	</div>

	<!-- Custodios -->
	{#if tabActivo === 'custodios'}
		<div class="inst-grid" role="tabpanel">
			{#each custodios as inst}
				<div class="inst-card">
					{#if inst.logoUrl}
						<div class="inst-media">
							<img class="inst-media__img" src={inst.logoUrl} alt="" loading="lazy" />
						</div>
					{/if}
					<p class="inst-sigla">{inst.sigla}</p>
					<p class="inst-nombre">{inst.nombre}</p>
					<p class="inst-ciudad">{inst.ciudad}</p>
					{#if inst.nota}
						<p class="inst-nota">{inst.nota}</p>
					{/if}
					{#if inst.webUrl}
						<a class="inst-link" href={inst.webUrl} target="_blank" rel="noopener noreferrer">
							{participantesContent.institution_link_label}
						</a>
					{/if}
				</div>
			{/each}
		</div>
	{/if}

	<!-- Aliadas -->
	{#if tabActivo === 'aliadas'}
		<div class="inst-grid" role="tabpanel">
			{#each aliadas as inst}
				<div class="inst-card">
					{#if inst.logoUrl}
						<div class="inst-media">
							<img class="inst-media__img" src={inst.logoUrl} alt="" loading="lazy" />
						</div>
					{/if}
					<p class="inst-sigla">{inst.sigla}</p>
					<p class="inst-nombre">{inst.nombre}</p>
					<p class="inst-ciudad">{inst.tipo}</p>
					{#if inst.nota}
						<p class="inst-nota">{inst.nota}</p>
					{/if}
					{#if inst.webUrl}
						<a class="inst-link" href={inst.webUrl} target="_blank" rel="noopener noreferrer">
							{participantesContent.institution_link_label}
						</a>
					{/if}
				</div>
			{/each}
		</div>
	{/if}

	<!-- Comité -->
	{#if tabActivo === 'comite'}
		<div class="comite-bloque" role="tabpanel">
			<p class="comite-intro">{participantesContent.comite_intro}</p>
			<div class="inst-grid">
				{#each comite as persona}
					<div class="inst-card inst-card--persona">
						{#if persona.photoUrl}
							<div class="inst-media inst-media--persona">
								<img class="inst-media__img" src={persona.photoUrl} alt="" loading="lazy" />
							</div>
						{/if}
						<p class="persona-nombre">{persona.nombre}</p>
						<p class="persona-inst">{persona.institucion}</p>
						<p class="persona-pais">{persona.pais}</p>
						{#if persona.webUrl}
							<a class="inst-link" href={persona.webUrl} target="_blank" rel="noopener noreferrer">
								{participantesContent.portfolio_link_label}
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Equipo -->
	{#if tabActivo === 'equipo'}
		<div class="equipo-bloque" role="tabpanel">
			{#each equipo as eje}
				<div class="equipo-eje">
					<p class="equipo-eje__titulo">{eje.eje}</p>
					<div class="equipo-lista">
						{#each eje.personas as persona}
							<div class="equipo-persona">
								{#if persona.photoUrl}
									<div class="inst-media inst-media--persona">
										<img class="inst-media__img" src={persona.photoUrl} alt="" loading="lazy" />
									</div>
								{/if}
								<p class="persona-nombre">{persona.nombre}</p>
								{#if persona.afiliacion}
									<p class="persona-inst">{persona.afiliacion}</p>
								{/if}
								{#if persona.webUrl}
									<a class="inst-link" href={persona.webUrl} target="_blank" rel="noopener noreferrer">
										{participantesContent.portfolio_link_label}
									</a>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<!--  Alcance geográfico  -->
<div class="alcance-strip">
	<div class="container">
		<p class="bloque-label bloque-label--light">{participantesContent.scope_kicker}</p>
		<blockquote class="proposito-quote">{participantesContent.scope_quote}</blockquote>
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

	/*  Intro dark  */
	.intro-dark {
		position: relative;
		min-height: 38vh;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		background:
			linear-gradient(rgba(16, 14, 11, 0.58), rgba(16, 14, 11, 0.58)),
			image-set(
				url('/assets/imgs/maps/optimized/map-21-2400.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-21-2400.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-21-2400.jpg') type('image/jpeg')
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
		opacity: 0.44;
		mix-blend-mode: normal;
	}

	.intro-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to bottom, rgba(237, 232, 223, 0.10) 0%, transparent 14%),
			linear-gradient(to top, rgba(10, 8, 6, 0.48) 0%, rgba(10, 8, 6, 0.14) 48%, rgba(10, 8, 6, 0.03) 100%);
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

	/*  Cifras  claras  */
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

	/*  Red / Tabs  */
	.red-section {
		width: min(100%, 1200px);
		margin-inline: auto;
		padding: clamp(4rem, 8vw, 6rem) 0;
		border-bottom: 1px solid var(--border);
	}

	.inst-tabs {
		display: flex;
		gap: 2px;
		margin-bottom: 2px;
		flex-wrap: wrap;
	}

	.inst-tab {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.75rem 1.25rem;
		background: rgba(26,24,21,0.04);
		border: none;
		border-top: 2px solid transparent;
		cursor: pointer;
		transition: background 0.15s, border-color 0.15s;
	}

	.inst-tab:hover { background: rgba(26,24,21,0.08); }

	.inst-tab--active {
		background: var(--surface);
		border-top-color: var(--accent);
	}

	.inst-tab__label {
		font-family: var(--font-body);
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.5px;
		color: var(--ink-50);
		text-transform: uppercase;
	}

	.inst-tab--active .inst-tab__label { color: var(--ink); }

	.inst-tab__count {
		font-family: var(--font-ccd);
		font-size: 0.9rem;
		font-weight: 700;
		color: rgba(43,74,122,0.40);
	}

	.inst-tab--active .inst-tab__count { color: var(--accent); }

	/*  Grilla instituciones  clara  */
	.inst-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 2px;
		padding: 2px 0 0;
	}

	.inst-card {
		padding: 1.5rem;
		background: var(--surface);
		border-top: 2px solid rgba(43,74,122,0.12);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		transition: border-top-color 0.15s;
	}

	.inst-card:hover { border-top-color: var(--accent); }

	.inst-media {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		aspect-ratio: 16 / 9;
		margin-bottom: 1rem;
		border: 1px dashed rgba(43,74,122,0.22);
		background: rgba(43,74,122,0.03);
		overflow: hidden;
	}

	.inst-media--persona {
		aspect-ratio: 1;
		max-width: 7rem;
	}

	.inst-media__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.inst-sigla {
		font-family: var(--font-ccd);
		font-weight: 800;
		font-size: 1.4rem;
		color: var(--accent);
		margin: 0;
		line-height: 1;
		letter-spacing: -0.01em;
	}

	.inst-nombre {
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--ink);
		margin: 0;
		line-height: 1.4;
	}

	.inst-ciudad {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--ink-50);
		margin: 0.15rem 0 0;
	}

	.inst-nota {
		font-family: var(--font-body);
		font-size: 0.85rem;
		font-weight: 300;
		color: var(--fg-dim);
		margin: 0.5rem 0 0;
		line-height: 1.55;
	}

	.inst-link {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--accent);
		text-decoration: none;
		margin-top: 0.9rem;
		align-self: flex-start;
	}

	.inst-link:hover { text-decoration: underline; }

	/*  Comit  */
	.comite-bloque { margin-top: 2px; }

	.comite-intro {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.75;
		color: var(--fg-dim);
		max-width: 46rem;
		margin: 0 0 2rem;
	}

	.inst-card--persona {
		background: var(--surface);
		border-color: rgba(43,74,122,0.10);
	}

	.inst-card--persona:hover { border-top-color: var(--accent); }

	.persona-nombre {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 600;
		color: var(--ink);
		margin: 0;
	}

	.persona-inst {
		font-family: var(--font-body);
		font-size: 0.85rem;
		font-weight: 300;
		color: var(--fg-dim);
		margin: 0;
	}

	.persona-pais {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--accent);
		opacity: 0.70;
		margin: 0.2rem 0 0;
	}

	/*  Equipo  */
	.equipo-bloque {
		margin-top: 2px;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.equipo-eje__titulo {
		font-family: var(--font-body);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
		margin: 0 0 1rem;
	}

	.equipo-lista {
		display: flex;
		flex-wrap: wrap;
		gap: 2px;
	}

	.equipo-persona {
		padding: 1rem 1.25rem;
		background: var(--surface);
		border-top: 2px solid rgba(43,74,122,0.10);
		min-width: 200px;
		flex: 1;
		transition: border-top-color 0.15s;
	}

	.equipo-persona:hover { border-top-color: var(--accent); }

	.equipo-persona .persona-nombre { font-size: 0.95rem; }
	.equipo-persona .persona-inst { font-size: 0.82rem; }

	/*  Alcance (dark strip, intencional)  */
	.alcance-strip {
		background:
			linear-gradient(rgba(10,8,6,0.66), rgba(10,8,6,0.66)),
			image-set(
				url('/assets/imgs/maps/optimized/map-21-2400.avif') type('image/avif'),
				url('/assets/imgs/maps/optimized/map-21-2400.webp') type('image/webp'),
				url('/assets/imgs/maps/optimized/map-21-2400.jpg') type('image/jpeg')
			);
		background-size: cover;
		background-position: center;
		padding: clamp(3rem, 6vw, 5rem) 0;
	}

	.alcance-strip .bloque-label { color: var(--blue-lt, #E8EDF5); }

	.proposito-quote {
		font-family: var(--font-ccd);
		font-weight: 700;
		font-size: clamp(1.4rem, 3vw, 2.2rem);
		line-height: 1.2;
		color: #F4F1EB;
		margin: 0;
		max-width: 40rem;
		border-left: 3px solid var(--accent);
		padding-left: 1.5rem;
	}

	/*  Responsive  */
	@media (max-width: 760px) {
		.cifras-grid { grid-template-columns: repeat(2, 1fr); }
		.inst-tabs { flex-direction: column; }
		.inst-tab { flex-direction: row; justify-content: space-between; }
	}
</style>



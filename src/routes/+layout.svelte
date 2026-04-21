<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let menuAbierto = $state(false);
	let scrolled = $state(false);

	const menuLinks = [
		{ title: 'Inicio', href: '/' },
		{ title: 'Proyecto', href: '/proyecto/' },
		{ title: 'Infraestructura', href: '/infraestructura/' },
		{ title: 'Actividades', href: '/actividades/' },
		{ title: 'Participantes', href: '/instituciones/' }
	];

	const cerrarMenu = () => { menuAbierto = false; };
	const alternarMenu = () => { menuAbierto = !menuAbierto; };
	const manejarTecla = (e) => { if (e.key === 'Escape') cerrarMenu(); };
	const handleScroll = () => { scrolled = window.scrollY > 60; };
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/assets/site.css" />
	<title>Comisión Corográfica Digital</title>
	<meta
		name="description"
		content="Sitio informativo institucional de la Comisión Corográfica Digital: proyecto, participantes, actividades y recursos en desarrollo."
	/>
</svelte:head>

<svelte:window onkeydown={manejarTecla} onscroll={handleScroll} />

<header class="site-header" class:scrolled>
	<div class="site-bar container">
		<a class="site-logo" href="/" aria-label="Comisión Corográfica Digital">
			<svg
				viewBox="0 0 200 72"
				height="38"
				style="flex-shrink:0;overflow:visible"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
			>
				<text
					y="68"
					font-family="'Barlow Condensed',sans-serif"
					font-weight="800"
					font-size="80"
					style="fill: var(--ink)"
				>CC</text>
				<text
					x="133"
					y="68"
					font-family="'Barlow Condensed',sans-serif"
					font-weight="800"
					font-size="80"
					style="fill: var(--accent)"
				>D</text>
			</svg>
			<div class="site-logo__divider" aria-hidden="true"></div>
			<div class="site-logo__name" aria-hidden="true">
				<span class="site-logo__name-top">Comisión Corográfica</span>
				<span class="site-logo__name-bot">Digital</span>
			</div>
		</a>

		<nav class="site-nav" aria-label="Navegación principal">
			{#each menuLinks.slice(1) as link}
				<a class="site-nav__link" href={link.href}>{link.title}</a>
			{/each}
		</nav>

		<button
			type="button"
			class="site-bar__toggle"
			aria-expanded={menuAbierto}
			aria-controls="site-menu-mobile"
			aria-label="Menú"
			onclick={alternarMenu}
		>
			<span class="hamburger" aria-hidden="true">
				<span></span><span></span><span></span>
			</span>
		</button>
	</div>

	{#if menuAbierto}
		<nav id="site-menu-mobile" class="site-menu-mobile" aria-label="Menú principal">
			{#each menuLinks as link}
				<a class="site-menu-mobile__link" href={link.href} onclick={cerrarMenu}>{link.title}</a>
			{/each}
		</nav>
	{/if}
</header>

<main id="contenido">
	{@render children?.()}
</main>

<footer class="site-footer">
	<div class="site-footer__inner container">
		<nav class="site-footer__nav" aria-label="Navegación de pie">
			{#each menuLinks.slice(1) as link}
				<a class="site-footer__nav-link" href={link.href}>{link.title}</a>
			{/each}
		</nav>
		<small class="site-footer__copy">© 2025 Comisión Corográfica Digital · Colombia</small>
		<a class="site-footer__logo" href="/" aria-label="Comisión Corográfica Digital">
			<div class="site-footer__logo-name" aria-hidden="true">
				<span class="site-footer__logo-top">Comisión Corográfica</span>
				<span class="site-footer__logo-bot">Digital</span>
			</div>
			<div class="site-footer__logo-divider" aria-hidden="true"></div>
			<svg
				viewBox="0 0 200 72"
				height="38"
				style="flex-shrink:0;overflow:visible"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
			>
				<text
					y="68"
					font-family="'Barlow Condensed',sans-serif"
					font-weight="800"
					font-size="80"
					style="fill: var(--ink)"
				>CC</text>
				<text
					x="133"
					y="68"
					font-family="'Barlow Condensed',sans-serif"
					font-weight="800"
					font-size="80"
					style="fill: var(--accent)"
				>D</text>
			</svg>
		</a>
	</div>
</footer>

<style>
	/* ── Header — claro editorial ── */
	.site-header {
		position: sticky;
		top: 0;
		z-index: 40;
		background: rgba(237,232,223,0.92);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: background 0.25s ease, box-shadow 0.25s ease;
	}

	.site-header.scrolled {
		background: rgba(237,232,223,0.98);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		box-shadow: 0 1px 12px rgba(26,24,21,0.06);
	}

	.site-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		height: 66px;
		border-bottom: 1px solid var(--border);
	}

	/* ── Logo (compartido: header usa .site-logo, footer .site-footer__logo) ── */
	.site-logo {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-shrink: 0;
		text-decoration: none;
	}

	.site-logo__divider {
		width: 1px;
		height: 26px;
		background: var(--accent);
		opacity: 0.50;
		flex-shrink: 0;
	}

	.site-logo__name {
		display: flex;
		flex-direction: column;
		gap: 0;
		font-family: var(--font-body);
		text-transform: uppercase;
	}

	.site-logo__name-top {
		font-size: 10px;
		letter-spacing: 2px;
		line-height: 1.5;
		font-weight: 600;
		color: var(--ink);
	}

	.site-logo__name-bot {
		font-size: 10px;
		letter-spacing: 2px;
		line-height: 1.5;
		font-weight: 300;
		color: var(--ink-50);
	}

	/* ── Desktop nav ── */
	.site-nav {
		display: flex;
		align-items: center;
		gap: 0;
		margin-left: auto;
	}

	.site-nav__link {
		padding: 0.5rem 0.9rem;
		font-family: var(--font-body);
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--ink-50);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.site-nav__link:hover {
		color: var(--accent);
	}

	/* ── Mobile toggle ── */
	.site-bar__toggle {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.1rem;
		height: 2.1rem;
		border: 1px solid var(--border);
		border-radius: 3px;
		background: transparent;
		cursor: pointer;
		padding: 0;
		color: var(--ink-50);
	}

	.site-bar__toggle:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		gap: 4px;
		pointer-events: none;
	}

	.hamburger span {
		display: block;
		width: 15px;
		height: 1.5px;
		background: currentColor;
	}

	/* ── Mobile dropdown ── */
	.site-menu-mobile {
		display: flex;
		flex-direction: column;
		background: var(--surface);
		border-bottom: 1px solid var(--border);
		padding: 0.25rem clamp(1rem, 3vw, 2rem) 1rem;
	}

	.site-menu-mobile__link {
		padding: 0.75rem 0;
		font-family: var(--font-body);
		font-size: 0.95rem;
		font-weight: 400;
		color: var(--ink-50);
		text-decoration: none;
		border-bottom: 1px solid var(--border);
	}

	.site-menu-mobile__link:hover {
		color: var(--accent);
	}

	.site-menu-mobile__link:last-child {
		border-bottom: none;
	}

	/* ── Focus ── */
	.site-logo:focus-visible,
	.site-nav__link:focus-visible,
	.site-bar__toggle:focus-visible,
	.site-menu-mobile__link:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 3px;
	}

	/* ── Footer — superficie densa, composición invertida ── */
	.site-footer {
		background: #E4DDD3;
		border-top: 1px solid rgba(26,24,21,0.16);
		margin-top: 0;
	}

	.site-footer__inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		height: 76px;
	}

	/* nav a la izquierda */
	.site-footer__nav {
		display: flex;
		gap: 0;
		flex-shrink: 0;
	}

	.site-footer__nav-link {
		padding: 0.3rem 0.85rem;
		font-family: var(--font-body);
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--ink-50);
		text-decoration: none;
		transition: color 0.15s;
	}

	.site-footer__nav-link:first-child {
		padding-left: 0;
	}

	.site-footer__nav-link:hover {
		color: var(--accent);
	}

	/* copy — columna central, perfectamente centrado */
	.site-footer__copy {
		font-family: var(--font-body);
		font-size: 10px;
		font-weight: 300;
		letter-spacing: 1px;
		color: var(--ink-25);
		text-align: center;
		justify-self: center;
	}

	/* logo a la derecha — nombre antes del monograma (espejo del header) */
	.site-footer__logo {
		display: flex;
		align-items: center;
		gap: 14px;
		text-decoration: none;
		justify-self: end;
	}

	.site-footer__logo-divider {
		width: 1px;
		height: 26px;
		background: var(--accent);
		opacity: 0.50;
		flex-shrink: 0;
	}

	.site-footer__logo-name {
		display: flex;
		flex-direction: column;
		font-family: var(--font-body);
		text-transform: uppercase;
		text-align: right;
	}

	.site-footer__logo-top {
		font-size: 10px;
		letter-spacing: 2px;
		line-height: 1.5;
		font-weight: 600;
		color: var(--ink);
	}

	.site-footer__logo-bot {
		font-size: 10px;
		letter-spacing: 2px;
		line-height: 1.5;
		font-weight: 300;
		color: var(--ink-50);
	}

	/* ── Responsive ── */
	@media (max-width: 760px) {
		.site-nav {
			display: none;
		}

		.site-bar__toggle {
			display: flex;
		}

		.site-logo__name {
			display: none;
		}

		.site-footer__nav {
			display: none;
		}

		.site-footer__copy {
			text-align: center;
		}

		.site-footer__logo-name {
			display: none;
		}
	}
</style>

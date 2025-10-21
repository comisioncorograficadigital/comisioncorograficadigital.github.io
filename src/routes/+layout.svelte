<script>
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/assets/site.css" />
	<title>Comisión Corográfica Digital</title>
	<meta name="description" content="Sitio general de la CCD: ontología, recursos y exposición." />
	<link
	rel="preload"
	as="image"
	href="/assets/imgs/0002-800.webp"
	imagesrcset="/assets/imgs/0002-800.webp 800w, /assets/imgs/0002-1600.webp 1600w"
	imagesizes="100vw"
	type="image/webp"
	fetchpriority="high"
	/>

	<link
	rel="preload"
	as="image"
	href="/assets/imgs/0001-800.webp"
	imagesrcset="/assets/imgs/0001-800.webp 800w, /assets/imgs/0001-1600.webp 1600w"
	imagesizes="100vw"
	type="image/webp"
	/>

</svelte:head>


<header class="site-header">
	<nav class="nav">
		<a href="/">Inicio</a>
		<a href="https://drive.google.com/file/d/1dEF-PO8h1xNcJzmplvAtHBXaEFW6ADol/view?usp=sharing" target="_blank">Proyecto</a>
		<a href="https://razoncartografica.com/2025/05/12/codazzi/" target="_blank">Eventos</a>
		<a href="https://comisioncorograficadigital.github.io/ccd-ontology/" target="_blank">Ontología CCD</a>
		<a href="https://my.matterport.com/show/?m=64w4nfGVJVU" target="_blank">Expo Codazzi: Archivo Global</a>
	</nav>
</header>

<main id="contenido" class="container">
	{@render children?.()}
</main>

<footer class="site-footer">
	<small>© CCD — Licencias y créditos</small>
</footer>
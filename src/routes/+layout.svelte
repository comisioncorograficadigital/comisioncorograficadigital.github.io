<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/assets/site.css" />
	<title>Comisión Corográfica Digital</title>
	<meta name="description" content="Sitio general de la CCD: ontología, recursos y exposición." />
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
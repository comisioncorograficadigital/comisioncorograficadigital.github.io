<script>
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/assets/site.css" />
	<title>Comision Corografica Digital</title>
	<meta name="description" content="Sitio general de la CCD: ontologia, recursos y exposicion." />
<!-- HERO: desktop y tablets -->
<link
  rel="preload"
  as="image"
  href="/assets/imgs/0002-1600.avif"
  type="image/avif"
  media="(min-width: 601px)"
  fetchpriority="high"
/>

<!-- HERO: moviles -->
<link
  rel="preload"
  as="image"
  href="/assets/imgs/0002-800.avif"
  type="image/avif"
  media="(max-width: 600px)"
  fetchpriority="high"
/>


</svelte:head>


<header class="site-header">
	<nav class="nav">
		<a href="/">Inicio</a>
		<a href="/proyecto/">Proyecto</a>
		<a href="/infraestructura/">Infraestructura</a>
		<a href="/actividades/">Actividades</a>
		<a href="/instituciones/">Instituciones</a>
	</nav>
</header>

<main id="contenido" class="container">
	{@render children?.()}
</main>

<footer class="site-footer">
	<small>© CCD — Licencias y creditos</small>
</footer>

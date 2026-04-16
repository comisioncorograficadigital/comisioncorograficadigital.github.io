<script>
	import ListaContenidos from '$lib/componentes/ListaContenidos.svelte';
	import { contenidos } from '$lib/data/contenidos.js';

	const contenidosInfraestructura = contenidos.filter(
		(contenido) => contenido.category === 'infrastructure'
	);
</script>

<svelte:head>
	<title>Infraestructura | Comision Corografica Digital</title>
</svelte:head>

<section>
	<h1>Infraestructura</h1>
	<ListaContenidos contenidos={contenidosInfraestructura} />
</section>

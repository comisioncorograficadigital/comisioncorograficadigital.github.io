<script>
	import ListaContenidos from '$lib/componentes/ListaContenidos.svelte';
	import { contenidos } from '$lib/data/contenidos.js';

	const contenidosInstituciones = contenidos.filter(
		(contenido) => contenido.category === 'institutions'
	);
</script>

<svelte:head>
	<title>Instituciones | Comision Corografica Digital</title>
</svelte:head>

<section>
	<h1>Instituciones</h1>
	<ListaContenidos contenidos={contenidosInstituciones} />
</section>

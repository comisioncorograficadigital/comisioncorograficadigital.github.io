<script>
	import ListaContenidos from '$lib/componentes/ListaContenidos.svelte';
	import { contenidos } from '$lib/data/contenidos.js';

	const contenidosProyecto = contenidos.filter((contenido) => contenido.category === 'project');
</script>

<svelte:head>
	<title>Proyecto | Comision Corografica Digital</title>
</svelte:head>

<section>
	<h1>Proyecto</h1>
	<ListaContenidos contenidos={contenidosProyecto} />
</section>

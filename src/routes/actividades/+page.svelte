<script>
	import ListaContenidos from '$lib/componentes/ListaContenidos.svelte';
	import { contenidos } from '$lib/data/contenidos.js';

	const contenidosActividades = contenidos.filter((contenido) => contenido.category === 'activities');
</script>

<svelte:head>
	<title>Actividades | Comision Corografica Digital</title>
</svelte:head>

<section>
	<h1>Actividades</h1>
	<ListaContenidos contenidos={contenidosActividades} />
</section>

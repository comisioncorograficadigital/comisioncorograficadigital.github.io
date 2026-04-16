<script>
	import ListaContenidos from '$lib/componentes/ListaContenidos.svelte';
	import { contenidos } from '$lib/data/contenidos.js';

	const categoryOptions = [
		{ value: 'all', label: 'Todos' },
		{ value: 'project', label: 'Proyecto' },
		{ value: 'infrastructure', label: 'Infraestructura' },
		{ value: 'activities', label: 'Actividades' },
		{ value: 'institutions', label: 'Instituciones' }
	];

	let categoriaActiva = $state('all');

	const contenidosVisibles = $derived(
		categoriaActiva === 'all'
			? contenidos
			: contenidos.filter((contenido) => contenido.category === categoriaActiva)
	);
</script>

<svelte:head>
	<title>Inicio | Comision Corografica Digital</title>
</svelte:head>

<section class="home-hero">
	<div class="home-hero__content">
		<h1>Comision Corografica Digital</h1>
		<p class="home-hero__summary">
			Plataforma para explorar proyecto, infraestructura, actividades e instituciones de la CCD.
		</p>
	</div>
</section>

<section class="home-catalog">
	<div class="category-nav" aria-label="Filtros por categoria">
		{#each categoryOptions as option}
			<button
				type="button"
				class:active={categoriaActiva === option.value}
				on:click={() => {
					categoriaActiva = option.value;
				}}
			>
				{option.label}
			</button>
		{/each}
	</div>

	<ListaContenidos contenidos={contenidosVisibles} />
</section>

<style>
	.home-catalog {
		padding-top: 2rem;
	}
</style>

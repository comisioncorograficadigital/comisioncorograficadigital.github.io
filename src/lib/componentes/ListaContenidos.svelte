<script>
	import CardContenido from '$lib/componentes/CardContenido.svelte';

	let { contenidos = [] } = $props();
</script>

<div class="catalog-grid">
	{#each contenidos as contenido (contenido.id)}
		<CardContenido {...contenido} />
	{/each}
</div>

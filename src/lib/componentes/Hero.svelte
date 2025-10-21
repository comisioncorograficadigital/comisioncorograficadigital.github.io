<script>
	// Props con valores por defecto (Svelte 5)
	let {
		title = 'Comisión Corográfica Digital',
		kicker = 'Proyecto interinstitucional para crear un portal que enlace los documentos dispersos de la COmisión Corográfica',
		// tagline = 'Ontología abierta, vocabularios controlados y una exposición virtual con materiales de Turín: el punto de partida del proyecto.',
		primaryHref = '/ontologia/',
		primaryText = 'Explorar ontología',
		secondaryHref = '/exposicion-turin/',
		secondaryText = 'Ver exposición'
	} = $props();
</script>

<section class="hero">
	<div class="hero__inner container">
		<h1 class="hero__title">{title}</h1>
        <p class="kicker">{kicker}</p>
		<!-- <p class="hero__tagline">{tagline}</p> -->


	</div>
</section>

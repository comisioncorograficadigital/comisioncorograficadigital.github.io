<script>
	const categoryLabels = {
		project: 'Proyecto',
		infrastructure: 'Infraestructura',
		activities: 'Actividades',
		institutions: 'Participantes'
	};

	let {
		title,
		category,
		description,
		href = '#',
		external = false
	} = $props();

	const getCategoryLabel = (value) => categoryLabels[value] ?? value;
</script>

<article class="content-card">
	<p class="content-card__label">{getCategoryLabel(category)}</p>
	<h2 class="content-card__title">{title}</h2>
	<p class="content-card__description">{description}</p>
	<p class="content-card__link">
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
		>
			{external ? 'Ver recurso externo' : 'Ver más'}
		</a>
	</p>
</article>

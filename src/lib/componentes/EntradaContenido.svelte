<script>
	const categoryLabels = {
		project: 'Proyecto',
		infrastructure: 'Infraestructura',
		activities: 'Actividades',
		institutions: 'Participantes'
	};

	const subtypeLabels = {
		overview: 'Panorama',
		document: 'Documento',
		platform: 'Plataforma',
		repository: 'Repositorio',
		exhibition: 'Exposicion',
		event: 'Evento',
		network: 'Red institucional',
		recognition: 'Reconocimiento'
	};

	let { title, category, subtype, description, href = '#', external = false } = $props();

	const getEyebrow = (categoryValue, subtypeValue) =>
		subtypeLabels[subtypeValue] ?? categoryLabels[categoryValue] ?? categoryValue;
</script>

<article class="entry-content">
	<p class="entry-content__eyebrow">{getEyebrow(category, subtype)}</p>
	<h2 class="entry-content__title">{title}</h2>
	<p class="entry-content__description">{description}</p>
	<p class="entry-content__link">
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
		>
			{external ? 'Abrir recurso externo' : 'Ir a la sección'}
		</a>
	</p>
</article>

<style>
	.entry-content {
		max-width: 64rem;
		padding-bottom: clamp(2.5rem, 5vw, 3.25rem);
		border-bottom: 1px solid rgba(31, 31, 31, 0.08);
	}

	.entry-content__eyebrow {
		margin-bottom: var(--space-2);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(31, 31, 31, 0.54);
	}

	.entry-content__title {
		font-size: clamp(2rem, 4vw, 2.8rem);
		line-height: 1.02;
	}

	.entry-content__description {
		max-width: 38rem;
		margin-top: var(--space-3);
		font-size: 1.02rem;
		line-height: 1.75;
		color: var(--fg-dim);
	}

	.entry-content__link {
		margin-top: var(--space-4);
	}

	.entry-content__link a {
		color: inherit;
		text-decoration: none;
		border-bottom: 1px solid rgba(214, 180, 27, 0.45);
	}

	.entry-content__link a:hover {
		color: var(--text);
		border-bottom-color: var(--accent);
	}
</style>

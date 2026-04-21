function slugify(value) {
	return value
		.trim()
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '_');
}

export function parsePageMarkdown(text) {
	let body = text.trim();
	let frontmatter = {};

	if (body.startsWith('---')) {
		const end = body.indexOf('\n---', 3);
		if (end !== -1) {
			const rawFrontmatter = body.slice(3, end).trim();
			body = body.slice(end + 4).trim();
			frontmatter = Object.fromEntries(
				rawFrontmatter
					.split(/\r?\n/)
					.filter(Boolean)
					.map((line) => {
						const separator = line.indexOf(':');
						if (separator === -1) return [line.trim(), ''];
						return [
							line.slice(0, separator).trim(),
							line.slice(separator + 1).trim()
						];
					})
			);
		}
	}

	const sections = {};
	let currentSection = null;
	let buffer = [];

	function flush() {
		if (!currentSection) return;
		sections[currentSection] = buffer.join('\n').trim();
		buffer = [];
	}

	for (const line of body.split(/\r?\n/)) {
		if (line.startsWith('## ')) {
			flush();
			currentSection = slugify(line.slice(3));
			continue;
		}

		if (currentSection) {
			buffer.push(line);
		}
	}

	flush();

	return { ...frontmatter, sections };
}

function escapeHtml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

export function renderInlineMarkdown(value = '') {
	return escapeHtml(value).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function parseCsv(text) {
	const lines = [];
	let current = [];
	let value = '';
	let inQuotes = false;

	for (let i = 0; i < text.length; i += 1) {
		const char = text[i];
		const next = text[i + 1];

		if (char === '"') {
			if (inQuotes && next === '"') {
				value += '"';
				i += 1;
			} else {
				inQuotes = !inQuotes;
			}
			continue;
		}

		if (char === ',' && !inQuotes) {
			current.push(value);
			value = '';
			continue;
		}

		if ((char === '\n' || char === '\r') && !inQuotes) {
			if (char === '\r' && next === '\n') {
				i += 1;
			}
			current.push(value);
			if (current.some((cell) => cell !== '')) {
				lines.push(current);
			}
			current = [];
			value = '';
			continue;
		}

		value += char;
	}

	if (value !== '' || current.length > 0) {
		current.push(value);
		if (current.some((cell) => cell !== '')) {
			lines.push(current);
		}
	}

	if (lines.length === 0) {
		return [];
	}

	const [headers, ...rows] = lines;

	return rows.map((row) =>
		Object.fromEntries(
			headers.map((header, index) => [header.trim(), (row[index] ?? '').trim()])
		)
	);
}

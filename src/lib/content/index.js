// ─────────────────────────────────────────────────────────────────────────────
// Fuente de datos: archivos CSV locales en /content
//
// Migración a Google Sheets (cuando estén publicadas como CSV):
// Reemplazar cada import ?raw por un fetch a la URL publicada, por ejemplo:
//
//   const homeRaw = await fetch('https://docs.google.com/spreadsheets/d/SHEET_ID/export?format=csv&gid=TAB_GID').then(r => r.text());
//
// El resto del código (parseCsv + exports) permanece igual.
// ─────────────────────────────────────────────────────────────────────────────

import homeRaw         from '../../../content/01_home.csv?raw';
import sectionsRaw     from '../../../content/02_secciones.csv?raw';
import resourcesRaw    from '../../../content/03_recursos.csv?raw';
import activitiesRaw   from '../../../content/04_actividades.csv?raw';
import institutionsRaw from '../../../content/05_instituciones.csv?raw';
import participantsRaw from '../../../content/06_participantes.csv?raw';
import workstreamsRaw  from '../../../content/07_ejes_trabajo.csv?raw';
import vocabulariesRaw from '../../../content/08_vocabularios.csv?raw';
import objetivosRaw    from '../../../content/09_objetivos.csv?raw';
import componentesRaw  from '../../../content/10_componentes.csv?raw';
import pageMetricsRaw  from '../../../content/11_page_cifras.csv?raw';
import projectStateRaw from '../../../content/12_estado_proyecto.csv?raw';
import upcomingRaw     from '../../../content/13_actividades_proximas.csv?raw';
import proyectoPageRaw from '../../../content/pages/proyecto.md?raw';
import infraestructuraPageRaw from '../../../content/pages/infraestructura.md?raw';
import actividadesPageRaw from '../../../content/pages/actividades.md?raw';
import participantesPageRaw from '../../../content/pages/participantes.md?raw';

import { parseCsv } from './parseCsv.js';
import { parsePageMarkdown } from './parsePageMarkdown.js';

function normalizeFlags(record) {
	return Object.fromEntries(
		Object.entries(record).map(([key, value]) => {
			if (value === 'si') return [key, true];
			if (value === 'no') return [key, false];
			return [key, value];
		})
	);
}

export const homeBlocks    = parseCsv(homeRaw).map(normalizeFlags);
export const sectionContent = parseCsv(sectionsRaw).map(normalizeFlags);
export const resources     = parseCsv(resourcesRaw).map(normalizeFlags);
export const activities    = parseCsv(activitiesRaw).map(normalizeFlags);
export const institutions  = parseCsv(institutionsRaw).map(normalizeFlags);
export const participants  = parseCsv(participantsRaw).map(normalizeFlags);
export const workstreams   = parseCsv(workstreamsRaw).map(normalizeFlags);
export const vocabularies  = parseCsv(vocabulariesRaw).map(normalizeFlags);
export const objetivos     = parseCsv(objetivosRaw);
export const componentes   = parseCsv(componentesRaw);
export const pageMetrics   = parseCsv(pageMetricsRaw);
export const projectStateBadges = parseCsv(projectStateRaw);
export const upcomingActivities = parseCsv(upcomingRaw);
export const pageContent = {
	proyecto: parsePageMarkdown(proyectoPageRaw),
	infraestructura: parsePageMarkdown(infraestructuraPageRaw),
	actividades: parsePageMarkdown(actividadesPageRaw),
	participantes: parsePageMarkdown(participantesPageRaw)
};

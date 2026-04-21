# Comisión Corográfica Digital (CCD)

## Definición del sitio

Este sitio es la página informativa institucional de la Comisión Corográfica Digital (CCD).

Su función principal es dar a conocer el proyecto, explicar qué es, quiénes participan, qué acciones y actividades se han realizado o están en curso, y cuál es el estado de los recursos que se están desarrollando.

No es el repositorio principal del proyecto.
No es una exposición digital autónoma.
No es un portal de exploración compleja.
Debe comunicar primero el proyecto y solo después derivar a recursos.

---

## Arquitectura editorial vigente

La edición visible del sitio se organiza así:

- `content/pages/*.md`: narrativa de página, intros, textos de contexto, citas y labels editoriales
- `content/*.csv`: recursos, actividades, instituciones, participantes, ejes de trabajo, componentes, cifras, estados y otros datos estructurados
- `content/site-content.md`: documento de referencia editorial general y de control de consistencia

Criterio:
- usar markdown para narrativa
- usar CSV para datos estructurados, repetibles o relacionales
- evitar contenido editorial hardcodeado en las rutas

---

## Qué es la CCD

La Comisión Corográfica de la Nueva Granada (1850–1859), dirigida por Agustín Codazzi, fue un hito para las ciencias y la historia territorial de Colombia. Produjo mapas, descripciones de paisajes, economías y poblaciones, e inventarios de caminos y recursos que documentan la diversidad geográfica, natural y cultural del país.

Ese acervo —informes, crónicas, láminas y documentación manuscrita e impresa— se conserva hoy disperso en bibliotecas, archivos, museos y colecciones públicas y privadas dentro y fuera de Colombia.

En años recientes, miles de documentos de la Comisión resguardados en la Biblioteca Nacional Universitaria de Turín fueron digitalizados en alta resolución; entre ellos, decenas de mapas manuscritos originales de Codazzi. Una copia se entregó al Archivo General de la Nación.

A partir de este corpus se realizó la exposición “Codazzi: cartografía de un archivo global”, que reavivó el interés académico por la Comisión y su legado.

La Comisión Corográfica Digital (CCD) surge como una alianza de especialistas e instituciones para enlazar, describir y publicar este patrimonio con herramientas de las humanidades digitales, incluyendo datos enlazados, repositorio, curadurías e información geoespacial.

---

## Propósito general del proyecto

La CCD busca reunir, conectar y presentar el legado documental de la Comisión Corográfica de la Nueva Granada mediante una plataforma digital que articule investigación, preservación, formación, curaduría y divulgación pública.

---

## Objetivo general

Crear una plataforma digital interactiva que reúna, conecte y presente el legado documental de la Comisión Corográfica de la Nueva Granada, integrando sus materiales en un entorno unificado que articule investigación, preservación y creación, y que pueda ser aprovechado por diversos públicos.

---

## Objetivos específicos

1. Reunir, organizar y conectar la documentación dispersa relacionada con la Comisión Corográfica.
2. Desarrollar e implementar una ontología semántica CCD v1.0 con estándares de interoperabilidad.
3. Construir un repositorio digital para visualizar, consultar e interconectar documentos.
4. Diseñar un geoportal histórico-geográfico.
5. Desarrollar un museo virtual con curadurías digitales y narrativas visuales.
6. Fortalecer la participación comunitaria y la divulgación pública del proyecto.
7. Promover formación artística, pedagógica y tecnológica en torno a archivos digitales y cultura visual.

---

## Componentes del proyecto

### 1. Base de datos unificada
Sistema de registro y organización que articula documentos, topónimos, autores, agentes y temas.

### 2. Repositorio digital
Plataforma para visualizar y consultar documentos, ya sea alojados localmente o enlazados desde repositorios institucionales.

### 3. Geoportal
Sistema de información histórico-geográfico para georreferenciar mapas, recorridos, topónimos y cadenas de producción y circulación documental.

### 4. Museo virtual
Espacio de exploración visual e interactiva con curadurías digitales, narrativas y mediaciones pedagógicas.

### 5. Relaciones y participación
Estrategia de divulgación, articulación institucional, talleres, eventos y sostenibilidad.

---

## Estado actual del proyecto

El proyecto está en desarrollo.

Actualmente cuenta con:
- una ontología CCD v1.0 en proceso de implementación y pruebas
- un repositorio piloto en Omeka S
- actividades públicas y académicas ya realizadas
- una red interinstitucional activa de custodios, aliados y participantes
- trabajo en curso sobre base de datos, desarrollo web, coordinación interinstitucional y relaciones públicas

Los recursos no deben presentarse como productos terminados salvo que se indique explícitamente su estado.

---

## Estados sugeridos para recursos y desarrollos

Usar, cuando aplique, solo estas etiquetas:

- Disponible
- Piloto
- En desarrollo
- En preparación

---

## Secciones del sitio

### Proyecto
Debe explicar:
- qué es la CCD
- su origen, propósito y alcance
- sus objetivos
- su estado actual
- sus documentos base o de referencia

### Infraestructura
Debe explicar:
- qué recursos técnicos y conceptuales se están desarrollando
- para qué sirven
- en qué estado están
- cuáles están disponibles y cuáles siguen en desarrollo

### Actividades
Debe registrar:
- exposiciones
- seminarios
- circulación pública
- acciones realizadas o en curso
- registros disponibles
- horizonte de próximas actividades cuando aplique

### Participantes
Debe presentar:
- custodios activos
- aliados y colaboradoras
- comité científico
- tipos de participación
- grupos y ejes de trabajo
- espacios para logos institucionales, fotos y enlaces externos cuando existan

---

## Instituciones custodias activas

- Archivo General de la Nación (AGN)
- Banco de la República (BANREP)
- Biblioteca Nacional de Colombia (BNC)
- Biblioteca Nacional Universitaria de Turín (BNUTo)
- Instituto Geográfico Agustín Codazzi (IGAC)
- Museo Nacional de Colombia (MNC)
- Sociedad Colombiana de Ingenieros (SCI)
- Sociedad Geográfica de Colombia (SOGEOCOL)
- Sociedad de Mejoras y Ornato de Bogotá (SMOB)
- Universidad Nacional de Colombia (UN), incluyendo el Archivo Central e Histórico y el Instituto de Ciencias Naturales

---

## Entidades aliadas y colaboradoras

- Fundación Neogranadina (FN)
- Instituto Italiano de Cultura (IIC)
- Laboratorio de Cartografía Histórica e Historia Digital del Departamento de Historia de la Universidad Nacional (CaHID)
- Red Colombiana de Humanidades Digitales (RCHD / RedColHD)
- Razón Cartográfica – Red de Historias de las Geografías y Cartografías de Colombia (RC)

---

## Comité Científico

- Nancy Appelbaum
- Sebastián Díaz Ángel
- Lucía Duque Muñoz
- Stefania Gallini
- David Ramírez Palacios
- Juanita Rodríguez Congote
- Efraín Sánchez Cabra
- Juan Felipe Urueña Calderón

---

## Equipos y ejes de trabajo activos

### Equipo de base de datos
- Juan Felipe Urueña Calderón
- David Ramírez
- Santiago González (BNC)

### Desarrollo web
- Juan Felipe Urueña Calderón

### Coordinación interinstitucional
- Sebastián Díaz Ángel
- Víctor Buitrago (Sogeocol)
- Laura Sánchez (UN)
- Sandra Angulo (BNC)

### Grupo de investigación en Geografía Histórica de la Sociedad Geográfica de Colombia
- activo dentro del proyecto

---

## Actividades y acciones

### Codazzi: cartografía de un archivo global
Tipo: Exposición
Estado: Realizada
Enlace: https://my.matterport.com/show/?m=64w4nfGVJVU

Descripción breve:
Exposición realizada a partir del corpus digitalizado de la Comisión Corográfica, orientada a activar y visibilizar el archivo en clave pública y curatorial.

### Codazzi, un geógrafo para dos naciones
Tipo: Seminario / actividad académica
Estado: Realizada
Enlace: https://razoncartografica.com/2025/05/12/codazzi/

Descripción breve:
Espacio académico y de circulación pública en torno a la figura de Codazzi y el legado de la Comisión Corográfica.

### Registro Memoria del Mundo UNESCO
Tipo: Reconocimiento institucional
Estado: Realizada / registrada
Enlace: https://www.unesco.org/es/articles/30-nuevas-inscripciones-en-el-registro-regional-memoria-del-mundo-de-america-latina-y-el-caribe-de?hub=84793

Descripción breve:
Referencia al reconocimiento regional vinculado al patrimonio documental relacionado con la Comisión Corográfica.

### Horizonte 2026–2028
- Socialización nominación UNESCO
- Ponencias en humanidades digitales
- Artículo en revista indexada

---

## Recursos clave

### Ontología CCD
Tipo: Recurso conceptual y técnico
Estado: En desarrollo / piloto
Enlace: https://comisioncorograficadigital.github.io/ccd-ontology/

Descripción breve:
Modelo semántico del proyecto para estructurar entidades, relaciones y vocabularios con estándares interoperables.

### Repositorio piloto Omeka
Tipo: Recurso digital
Estado: Piloto
Enlace: https://p1-hd.tail991e65.ts.net/s/ccd-piloto/page/mapas

Descripción breve:
Entorno de consulta y prueba donde se implementa la ontología y se ensaya la organización de los materiales del proyecto.

---

## Usuarios del sitio

El sitio debe servir principalmente a:
- investigadores y profesionales del patrimonio
- docentes y estudiantes
- artistas, curadores y creadores digitales
- público general interesado
- documentalistas, bibliotecarios y gestores culturales

---

## Reglas editoriales

- Comunicar primero el proyecto y solo después derivar a recursos.
- No presentar el sitio como repositorio principal.
- No presentar recursos aislados sin contexto.
- No inventar información faltante.
- Si un dato no está confirmado, mantener redacción neutral.
- Evitar lenguaje grandilocuente o promocional.
- El tono debe ser institucional, claro y sobrio.

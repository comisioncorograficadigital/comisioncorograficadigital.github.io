const g=`id_bloque,orden,titulo,subtitulo_o_bajada,texto_principal,texto_secundario,cta_texto,cta_destino,estado,notas
que-es-la-ccd,1,Qué es la CCD,Página informativa institucional del proyecto,"La Comisión Corográfica Digital surge como una alianza de especialistas e instituciones para enlazar, describir y publicar el patrimonio documental de la Comisión Corográfica con herramientas de humanidades digitales.","Debe comunicar primero el proyecto y solo después derivar a recursos.",Ver Proyecto,/proyecto/,En desarrollo,
proposito-general,2,Propósito general,Alcance del proyecto,"La CCD busca reunir, conectar y presentar el legado documental de la Comisión Corográfica de la Nueva Granada mediante una plataforma digital que articule investigación, preservación, formación, curaduría y divulgación pública.",,Ver Proyecto,/proyecto/,En desarrollo,
estado-actual,3,Estado actual,Proyecto en desarrollo,"Actualmente el proyecto cuenta con una ontología CCD v1.0 en proceso de implementación y pruebas, un repositorio piloto en Omeka S, actividades públicas y académicas ya realizadas, una red interinstitucional activa y trabajo en curso en varias líneas.",,"Ver Infraestructura",/infraestructura/,En desarrollo,"Los recursos no deben presentarse como productos terminados salvo que se indique explícitamente su estado."
componentes,4,Componentes del proyecto,Frentes de trabajo activos,"El proyecto contempla una base de datos unificada, un repositorio digital, un geoportal, un museo virtual y una estrategia de relaciones públicas, alianzas y participación comunitaria.",,Ver Infraestructura,/infraestructura/,En desarrollo,
actividades-acciones,5,Actividades y acciones,Circulación pública del proyecto,"La CCD ya cuenta con exposiciones, actividades académicas y referencias de circulación institucional relacionadas con el patrimonio documental de la Comisión Corográfica.",,Ver Actividades,/actividades/,En desarrollo,
instituciones-participacion,6,Participantes,Red activa del proyecto,"El proyecto cuenta con custodios activos, entidades aliadas y colaboradoras, un comité científico y grupos de trabajo activos.",,Ver Participantes,/instituciones/,En desarrollo,
recursos-clave,7,Recursos clave,Desarrollos en curso,"Entre los recursos clave actualmente registrados están la Ontología CCD y el Repositorio piloto Omeka.",,"Ver Infraestructura",/infraestructura/,En desarrollo,
`,b=`seccion,orden,titulo,proposito,intro_breve,debe_explicar_1,debe_explicar_2,debe_explicar_3,debe_explicar_4,debe_explicar_5,estado,notas
proyecto,1,Proyecto,Explicar el proyecto CCD,Presenta la definición general del proyecto y su marco institucional,qué es la CCD,"su origen, propósito y alcance",sus objetivos,su estado actual,sus documentos base o de referencia,En desarrollo,
infraestructura,2,Infraestructura,Explicar recursos técnicos y conceptuales,Presenta los desarrollos y recursos del proyecto,qué recursos técnicos y conceptuales se están desarrollando,para qué sirven,en qué estado están,cuáles están disponibles y cuáles siguen en desarrollo,,En desarrollo,
actividades,3,Actividades,Registrar acciones realizadas o en curso,Presenta la circulación pública y académica del proyecto,exposiciones,seminarios,circulación pública,acciones realizadas o en curso,registros disponibles,En desarrollo,
instituciones,4,Participantes,Presentar participantes y red de trabajo,Presenta custodios aliados comité y ejes de trabajo,custodios activos,aliados y colaboradoras,comité científico,tipos de participación,grupos y ejes de trabajo,En desarrollo,
`,v=`id_recurso,nombre,tipo,estado,descripcion_breve,enlace,seccion,visible_en_home,visible_en_seccion,detalle,estandares,enlace_label,preview_tipo,preview_url,preview_titulo,notas
ontologia-ccd,Ontología CCD,Recurso conceptual y técnico,En desarrollo / piloto,Modelo semántico del proyecto para estructurar entidades relaciones y vocabularios con estándares interoperables,https://comisioncorograficadigital.github.io/ccd-ontology/,infraestructura,si,si,"Implementada con RDF/OWL, SKOS, PROV-O, DCTERMS e IIIF. Permite representar documentos, agentes, lugares, eventos y sus relaciones de manera enlazada, facilitando consultas cruzadas y la integración con otras infraestructuras de datos de la región y el mundo.","RDF/OWL|SKOS|PROV-O|DCTERMS|IIIF",Acceder a la ontología,iframe,https://comisioncorograficadigital.github.io/ccd-ontology/,Vista previa de la ontología CCD,
repositorio-piloto-omeka,Repositorio piloto Omeka S,Recurso digital,Piloto,Entorno de consulta y prueba donde se implementa la ontología CCD y se ensaya la organización y visualización de los materiales del proyecto,https://p1-hd.tail991e65.ts.net/s/ccd-piloto/page/mapas,infraestructura,si,si,"Construido sobre Omeka S, plataforma de código abierto especializada en colecciones culturales y patrimoniales. El piloto permite explorar las capacidades de descripción enlazada, visualización de mapas IIIF y navegación por conjuntos documentales heterogéneos.","Omeka S|IIIF|JSON-LD",Acceder al repositorio piloto,iframe,https://p1-hd.tail991e65.ts.net/s/ccd-piloto/page/mapas,Vista previa del repositorio piloto Omeka S,
`,C=`id_actividad,titulo,tipo,estado,año,descripcion_breve,detalle,enlace,enlace_label,visible_en_home,visible_en_actividades,notas
codazzi-cartografia-archivo-global,Codazzi: cartografía de un archivo global,Exposición,Realizada,2024,Exposición realizada a partir del corpus digitalizado de la Comisión Corográfica orientada a activar y visibilizar el archivo en clave pública y curatorial,"Disponible en versión virtual mediante un recorrido Matterport de alta resolución. Permite explorar las piezas en detalle, leer textos curatoriales y comprender el proceso de producción cartográfica y artística de la Comisión. Surgió del impulso generado por la digitalización del fondo en la Biblioteca Nacional Universitaria de Turín.",https://my.matterport.com/show/m=64w4nfGVJVU,Visitar exposición virtual,si,si,
codazzi-geografo-dos-naciones,"Codazzi, un geógrafo para dos naciones",Seminario / actividad académica,Realizada,2025,Espacio académico y de circulación pública en torno a la figura de Codazzi y el legado de la Comisión Corográfica,El seminario exploró la trayectoria de Codazzi entre Venezuela y la Nueva Granada y su rol como cartógrafo de Estado. Articulado por Razón Cartográfica — red académica especializada en historia de la cartografía colombiana.,https://razoncartografica.com/2025/05/12/codazzi/,Ver en Razón Cartográfica,si,si,
registro-memoria-mundo-unesco,Registro Memoria del Mundo UNESCO,Reconocimiento institucional,Registrada,2024,Referencia al reconocimiento regional vinculado al patrimonio documental relacionado con la Comisión Corográfica,El expediente forma parte de una estrategia más amplia de visibilización y protección del legado corográfico. El proyecto CCD acompañará el seguimiento técnico del expediente ante la instancia nacional en 2026 con un evento público de socialización de resultados.,https://www.unesco.org/es/articles/30-nuevas-inscripciones-en-el-registro-regional-memoria-del-mundo-de-america-latina-y-el-caribe-dehub=84793,Ver en UNESCO,si,si,
`,f=`id_institucion,nombre,sigla,categoria,ciudad,descripcion_breve,nota,visible_en_home,visible_en_instituciones,logo_url,web_url,notas
archivo-general-de-la-nacion,Archivo General de la Nación,AGN,Custodio activo,Bogotá,,Depositario de la copia digital del fondo de Turín y colecciones propias de la Comisión.,si,si,,,
banco-de-la-republica,Banco de la República,BANREP,Custodio activo,Bogotá,,"Biblioteca Luis Ángel Arango — fondos bibliográficos, cartográficos y documentales.",si,si,,,
biblioteca-nacional-de-colombia,Biblioteca Nacional de Colombia,BNC,Custodio activo,Bogotá,,"Colección de mapas, publicaciones y materiales impresos vinculados a la Comisión.",si,si,,,
biblioteca-nacional-universitaria-de-turin,Biblioteca Nacional Universitaria de Turín,BNUTo,Custodio activo,"Turín, Italia",,Custodia el fondo original de mapas manuscritos de Codazzi recientemente digitalizado.,si,si,,,
instituto-geografico-agustin-codazzi,Instituto Geográfico Agustín Codazzi,IGAC,Custodio activo,Bogotá,,Repositorio de cartografía histórica y entidad que lleva el nombre del comisionado.,si,si,,,
museo-nacional-de-colombia,Museo Nacional de Colombia,MNC,Custodio activo,Bogotá,,"Colecciones de pintura, acuarela y objetos vinculados a la Comisión.",si,si,,,
sociedad-colombiana-de-ingenieros,Sociedad Colombiana de Ingenieros,SCI,Custodio activo,Bogotá,,Archivo institucional con documentación vinculada a la historia de la ingeniería y la cartografía.,si,si,,,
sociedad-geografica-de-colombia,Sociedad Geográfica de Colombia,SOGEOCOL,Custodio activo,Bogotá,,Fondos de cartografía e historia de la geografía; activa en el proyecto desde el eje de investigación.,si,si,,,
sociedad-de-mejoras-y-ornato-de-bogota,Sociedad de Mejoras y Ornato de Bogotá,SMOB,Custodio activo,Bogotá,,Documentación histórica sobre la ciudad y el territorio en el período corográfico.,si,si,,,
universidad-nacional-de-colombia,Universidad Nacional de Colombia,UN,Custodio activo,Bogotá,,"Incluye el Archivo Central e Histórico y el Instituto de Ciencias Naturales.",si,si,,,
fundacion-neogranadina,Fundación Neogranadina,FN,Aliada / colaboradora,,,Aliada en procesos de patrimonialización e investigación histórica sobre el período colonial y republicano.,si,si,,,
instituto-italiano-de-cultura,Instituto Italiano de Cultura,IIC,Aliada / colaboradora,,,Aliado cultural en el marco de la relación con el fondo de Turín y las actividades de circulación internacional.,si,si,,,
laboratorio-cartografia-historica-historia-digital,Laboratorio de Cartografía Histórica e Historia Digital,CaHID,Aliada / colaboradora,Bogotá,,Departamento de Historia — Universidad Nacional de Colombia. Eje de desarrollo metodológico del proyecto.,si,si,,,
red-colombiana-de-humanidades-digitales,Red Colombiana de Humanidades Digitales,RCHD,Aliada / colaboradora,,,RedColHD — marco de articulación con la comunidad académica de humanidades digitales del país.,si,si,,,
razon-cartografica,Razón Cartográfica,RC,Aliada / colaboradora,,,Red de Historias de las Geografías y Cartografías de Colombia. Espacio de circulación y publicación académica.,si,si,,,
`,y=`id_persona,nombre,tipo_participacion,afiliacion,institucion_nombre,pais,grupo_o_instancia,visible_en_instituciones,photo_url,web_url,notas
nancy-appelbaum,Nancy Appelbaum,Comité científico,,Universidad de Binghamton,EE. UU.,Comité Científico,si,,,
sebastian-diaz-angel,Sebastián Díaz Ángel,Comité científico,,"SGC / IGAC / Biblioteca Nacional",Colombia,Comité Científico,si,,,
lucia-duque-munoz,Lucía Duque Muñoz,Comité científico,,Universidad Nacional de Colombia,Colombia,Comité Científico,si,,,
stefania-gallini,Stefania Gallini,Comité científico,,Universidad de Roma III,Italia,Comité Científico,si,,,
david-ramirez-palacios,David Ramírez Palacios,Comité científico,,SGC / IGAC,Colombia,Comité Científico,si,,,
juanita-rodriguez-congote,Juanita Rodríguez Congote,Comité científico,,Universidad de Binghamton,EE. UU.,Comité Científico,si,,,
efrain-sanchez-cabra,Efraín Sánchez Cabra,Comité científico,,Biblioteca Luis Ángel Arango,Colombia,Comité Científico,si,,,
juan-felipe-uruena-calderon,Juan Felipe Urueña Calderón,Comité científico,,Universidad Pedagógica Nacional,Colombia,Comité Científico,si,,https://juanfuc.vercel.app/,
juan-felipe-uruena-calderon-base-datos,Juan Felipe Urueña Calderón,Equipo de trabajo,UPN,,Colombia,Equipo de base de datos,si,,https://juanfuc.vercel.app/,
david-ramirez-equipo,David Ramírez,Equipo de trabajo,BLAA,,Colombia,Equipo de base de datos,si,,,
santiago-gonzalez,Santiago González,Equipo de trabajo,BNC,,Colombia,Equipo de base de datos,si,,,
juan-felipe-uruena-calderon-desarrollo,Juan Felipe Urueña Calderón,Equipo de trabajo,UPN,,Colombia,Desarrollo web,si,,https://juanfuc.vercel.app/,
sebastian-diaz-angel-equipo,Sebastián Díaz Ángel,Equipo de trabajo,BNC-IGAC-Sogeocol,,Colombia,Coordinación interinstitucional,si,,,
victor-buitrago,Víctor Buitrago,Equipo de trabajo,Sogeocol,,Colombia,Coordinación interinstitucional,si,,,
laura-sanchez,Laura Sánchez,Equipo de trabajo,UN,,Colombia,Coordinación interinstitucional,si,,,
sandra-angulo,Sandra Angulo,Equipo de trabajo,BNC,,Colombia,Coordinación interinstitucional,si,,,
`,_=`id_eje,nombre,descripcion_breve,estado,visible_en_home,visible_en_instituciones,notas
equipo-base-de-datos,Equipo de base de datos,,En desarrollo,si,si,
desarrollo-web,Desarrollo web,,En desarrollo,si,si,
coordinacion-interinstitucional,Coordinación interinstitucional,,En desarrollo,si,si,
grupo-investigacion-geografia-historica,Grupo de investigación en Geografía Histórica de la Sociedad Geográfica de Colombia,Activo dentro del proyecto,En desarrollo,si,si,
`,z=`tipo_vocabulario,valor,descripcion
estado_recurso,Disponible,Estado sugerido para recursos y desarrollos
estado_recurso,Piloto,Estado sugerido para recursos y desarrollos
estado_recurso,En desarrollo,Estado sugerido para recursos y desarrollos
estado_recurso,En preparacion,Estado sugerido para recursos y desarrollos
tipo_actividad,Exposicion,Tipo de actividad presente en site-content.md
tipo_actividad,Seminario / actividad academica,Tipo de actividad presente en site-content.md
tipo_actividad,Reconocimiento / circulacion institucional,Tipo de actividad presente en site-content.md
categoria_institucion,Custodio activo,Categoria institucional presente en site-content.md
categoria_institucion,Aliada / colaboradora,Categoria institucional presente en site-content.md
tipo_participacion,Comite cientifico,Tipo de participacion presente en site-content.md
tipo_participacion,Equipo de trabajo,Tipo de participacion derivado de grupos y ejes de trabajo activos
`,h=`num,texto
1,"Reunir, organizar y conectar la documentación dispersa relacionada con la Comisión Corográfica (mapas, manuscritos, cartas, informes, láminas, impresos y borradores), articulando los fondos existentes en diferentes instituciones nacionales e internacionales."
2,"Desarrollar e implementar una ontología semántica (CCD v1.0) en la plataforma Omeka S, que estructure la base de datos con estándares internacionales de interoperabilidad (RDF/OWL, SKOS, PROV-O, DCTERMS, IIIF), permitiendo consultas enlazadas, curadurías digitales y visualización de relaciones entre documentos, lugares, agentes y temas."
3,"Construir un repositorio digital que permita visualizar, consultar e interconectar los documentos descritos en la base de datos unificada, ya sea mediante carga directa de archivos o mediante vínculos a los repositorios institucionales de origen."
4,"Diseñar un geoportal como Sistema de Información Histórico y Geográfico donde sea posible georreferenciar los mapas, recorridos, topónimos y actividades de la Comisión, así como las cadenas de producción y circulación de los documentos."
5,"Desarrollar un museo virtual que integre curadurías digitales, narrativas visuales, visitas guiadas temáticas y herramientas de visualización interactiva, para comunicar resultados de investigación y propiciar el aprendizaje en distintos niveles educativos."
6,"Fortalecer la participación comunitaria y la divulgación pública mediante estrategias de comunicación, talleres, exposiciones, eventos culturales y procesos colaborativos que fomenten la apropiación social del conocimiento."
7,"Promover la formación artística, pedagógica y tecnológica de docentes y estudiantes en torno a archivos digitales, cultura visual, anotación semántica y prácticas artísticas digitales, integrando los resultados en seminarios de Humanidades Digitales."
`,E=`num,id,titulo,descripcion,detalle,estado,destacado,enlace,enlace_label
01,datos,Base de datos unificada,"Sistema de registro y organización relacional que abarca todo el cuerpo documental de la Comisión Corográfica. Incluye descripciones catalográficas, curatoriales y de conservación, con fichas normalizadas e identificadores únicos que conectan documentos, topónimos, autores y temas.","Permite exploración por tipologías, índices temáticos, onomásticos, toponímicos e iconográficos, bajo estándares interoperables (RDF/OWL, SKOS, PROV-O, DCTERMS, IIIF) que facilitan la conexión con otros sistemas y repositorios de humanidades digitales.",En desarrollo,si,https://comisioncorograficadigital.github.io/ccd-ontology/,Acceder al desarrollo
02,repositorio,Repositorio digital,"Plataforma para visualizar, consultar e interconectar los documentos descritos en la base de datos unificada, ya sea mediante carga directa de archivos o mediante vínculos a los repositorios institucionales de origen.","Integra mecanismos de interoperabilidad y preservación, herramientas de búsqueda avanzada y anotación colaborativa. Actualmente en fase piloto con Omeka S, implementando la ontología CCD v1.0.",Piloto,si,https://p1-hd.tail991e65.ts.net/s/ccd-piloto/page/mapas,Acceder al desarrollo
03,geoportal,Geoportal,"Sistema de Información Histórico-Geográfico para georreferenciar los mapas, recorridos, topónimos y actividades de la Comisión, así como las cadenas de producción y circulación de los documentos.","Incluirá un diccionario geográfico e histórico derivado del corpus documental y permitirá visualizar los procesos de representación y desplazamiento espacial de los materiales a través del tiempo.",En preparación,no,,
04,museo,Museo virtual,"Espacio de exploración visual e interactiva que reúne los resultados curatoriales del proyecto. Incluirá guías pedagógicas, narrativas audiovisuales y herramientas de interpretación orientadas a investigadores, docentes, estudiantes y público general.","Permitirá comprender la historia, los recorridos y las consecuencias de la Comisión Corográfica mediante curadurías digitales, visitas guiadas temáticas y visualizaciones interactivas.",En preparación,no,,
05,alianzas,Relaciones y participación,"Estrategia de vinculación, divulgación y sostenibilidad del proyecto, orientada a fortalecer alianzas con instituciones, atraer nuevos usuarios y fomentar la participación activa de comunidades académicas y educativas.","Incluye la creación del sitio web general, eventos académicos, exposiciones, talleres de formación y procesos de enriquecimiento colaborativo de los metadatos.",Activo,no,,
`,R=`page,orden,valor,label
proyecto,1,1850–1859,Período de la expedición original
proyecto,2,10,Instituciones custodias activas
proyecto,3,8,Integrantes del Comité Científico
proyecto,4,24,Meses de duración estimada
infraestructura,1,2,Plataformas activas
infraestructura,2,6,Estándares implementados
infraestructura,3,Omeka S,Plataforma de repositorio
infraestructura,4,IIIF,Protocolo de imágenes
actividades,1,3,Actividades realizadas
actividades,2,1,Exposición virtual
actividades,3,UNESCO,Memoria del Mundo
participantes,1,10,Instituciones custodias
participantes,2,5,Entidades aliadas
participantes,3,8,Comité Científico
participantes,4,4,Países representados
`,I=`orden,texto,tono
1,Ontología CCD v1.0 — Piloto,active
2,Repositorio Omeka S — Piloto,active
3,Geoportal — En preparación,pending
4,Museo virtual — En preparación,pending
`,S=`orden,tipo,titulo,descripcion,año
1,Evento,Socialización nominación UNESCO,Evento público de balance del expediente Memoria del Mundo.,2026
2,Académico,Ponencias en humanidades digitales,Presentaciones en la UPN y la SGC sobre el modelo de datos CCD.,2026
3,Publicación,Artículo en revista indexada,Modelado semántico y patrimonio documental de la Comisión.,2027
`,D=`---
head_title: Proyecto | Comisión Corográfica Digital
intro_kicker: Sección · CCD
intro_title: El Proyecto
intro_desc: Una alianza interinstitucional para reunir, conectar y presentar el legado documental de la Comisión Corográfica de la Nueva Granada (1850–1859) mediante herramientas de humanidades digitales.
origin_kicker: Origen
origin_title: Un hito de las ciencias y la cartografía colombiana
aside_custodios_label: Instituciones custodias
aside_aliadas_label: Entidades aliadas
quote_label: Propósito general
quote_text: Reunir, conectar y presentar el legado documental de la Comisión Corográfica mediante una plataforma digital que articule investigación, preservación, formación, curaduría y divulgación pública.
componentes_kicker: Estructura del proyecto
componentes_title: Cinco componentes interdependientes
objetivos_kicker: Objetivos específicos
objetivos_title: Siete líneas de trabajo
estado_kicker: Estado del proyecto
estado_text: El proyecto cuenta actualmente con una ontología CCD v1.0 en proceso de implementación y pruebas, un repositorio piloto en Omeka S, actividades públicas y académicas ya realizadas, y una red interinstitucional activa.
---

## origin_body
La Comisión Corográfica de la Nueva Granada, liderada por Agustín Codazzi entre 1850 y 1859, produjo un vasto cuerpo de informes, crónicas, mapas y láminas que documentaron paisajes, economías, pueblos y costumbres, estableciendo relaciones entre observación científica, práctica artística e imaginación política.

Recientemente, miles de documentos conservados en la Biblioteca Nacional Universitaria de Turín —entre ellos decenas de mapas manuscritos originales de Codazzi— fueron digitalizados en alta resolución y una copia fue entregada al Archivo General de la Nación. Con base en este material se llevó a cabo la exposición *Codazzi: cartografía de un archivo global*, que renovó el interés académico por este legado.

La Comisión Corográfica Digital (CCD) surge de este impulso: una alianza de especialistas e instituciones para enlazar, describir y publicar este patrimonio con herramientas de humanidades digitales.
`,q=`---
head_title: Infraestructura | Comisión Corográfica Digital
intro_kicker: Sección · CCD
intro_title: Infraestructura
intro_desc: Herramientas, modelos y entornos técnicos que sostienen la descripción, organización y consulta del patrimonio documental de la Comisión Corográfica bajo estándares internacionales de interoperabilidad.
resources_kicker: Plataformas del proyecto
resources_title: Recursos digitales en desarrollo
preview_kicker: Desarrollo activo
standards_kicker: Interoperabilidad
standards_title: Estándares implementados
quote_label: Enfoque técnico
quote_text: Una infraestructura abierta, interoperable y sostenible que permita a investigadores, instituciones y públicos acceder, explorar y enriquecer el legado documental de la Comisión Corográfica.
---

## standards_intro
La infraestructura del proyecto adopta los principales estándares internacionales de humanidades digitales y datos enlazados, garantizando que los documentos descritos puedan conectarse con otros repositorios, sistemas y proyectos de patrimonio cultural.
`,P=`---
head_title: Actividades | Comisión Corográfica Digital
intro_kicker: Sección · CCD
intro_title: Actividades
intro_desc: Exposiciones, eventos académicos y reconocimientos que ponen en circulación el legado documental de la Comisión Corográfica ante distintos públicos, instituciones y comunidades de investigación.
current_kicker: Circulación pública
current_title: Actividades realizadas
upcoming_kicker: Horizonte 2026–2028
upcoming_title: Próximas actividades
quote_label: Divulgación
quote_text: El proyecto construye espacios de circulación que conectan el archivo histórico con investigadores, docentes, estudiantes y público general, en formatos presenciales y digitales.
---
`,j=`---
head_title: Participantes | Comisión Corográfica Digital
intro_kicker: Sección · CCD
intro_title: Participantes
intro_desc: Red interinstitucional de entidades custodias, aliadas y colaboradoras que sostienen, investigan y difunden el patrimonio documental de la Comisión Corográfica de la Nueva Granada.
network_kicker: Red interinstitucional
network_title: Participantes del proyecto
tab_custodios: Custodios
tab_aliadas: Aliadas
tab_comite: Comité Científico
tab_equipo: Equipo
comite_intro: El Comité Científico orienta las decisiones curatoriales, metodológicas y conceptuales del proyecto. Reúne especialistas en historia, cartografía, humanidades digitales y patrimonio de Colombia, Estados Unidos, Italia y Venezuela.
scope_kicker: Alcance
scope_quote: Una red que conecta archivos, museos, universidades y centros de investigación en Colombia, Italia, Estados Unidos y Venezuela para reunir el legado disperso de la Comisión Corográfica.
institution_link_label: Sitio institucional
portfolio_link_label: Portafolio web
logo_placeholder: Logo
photo_placeholder: Foto
---
`;function n(o){const i=[];let e=[],t="",r=!1;for(let a=0;a<o.length;a+=1){const s=o[a],c=o[a+1];if(s==='"'){r&&c==='"'?(t+='"',a+=1):r=!r;continue}if(s===","&&!r){e.push(t),t="";continue}if((s===`
`||s==="\r")&&!r){s==="\r"&&c===`
`&&(a+=1),e.push(t),e.some(u=>u!=="")&&i.push(e),e=[],t="";continue}t+=s}if((t!==""||e.length>0)&&(e.push(t),e.some(a=>a!=="")&&i.push(e)),i.length===0)return[];const[d,...p]=i;return p.map(a=>Object.fromEntries(d.map((s,c)=>[s.trim(),(a[c]??"").trim()])))}function A(o){return o.trim().toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"_")}function m(o){let i=o.trim(),e={};if(i.startsWith("---")){const a=i.indexOf(`
---`,3);if(a!==-1){const s=i.slice(3,a).trim();i=i.slice(a+4).trim(),e=Object.fromEntries(s.split(/\r?\n/).filter(Boolean).map(c=>{const u=c.indexOf(":");return u===-1?[c.trim(),""]:[c.slice(0,u).trim(),c.slice(u+1).trim()]}))}}const t={};let r=null,d=[];function p(){r&&(t[r]=d.join(`
`).trim(),d=[])}for(const a of i.split(/\r?\n/)){if(a.startsWith("## ")){p(),r=A(a.slice(3));continue}r&&d.push(a)}return p(),{...e,sections:t}}function k(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function O(o=""){return k(o).replace(/\*([^*]+)\*/g,"<em>$1</em>")}function l(o){return Object.fromEntries(Object.entries(o).map(([i,e])=>e==="si"?[i,!0]:e==="no"?[i,!1]:[i,e]))}const x=n(g).map(l);n(b).map(l);const w=n(v).map(l),N=n(C).map(l),B=n(f).map(l),U=n(y).map(l),G=n(_).map(l);n(z).map(l);const M=n(h),F=n(E),V=n(R),L=n(I);n(S);const H={proyecto:m(D),infraestructura:m(q),actividades:m(P),participantes:m(j)};export{N as a,H as b,U as c,L as d,F as e,O as f,x as h,B as i,M as o,V as p,w as r,G as w};

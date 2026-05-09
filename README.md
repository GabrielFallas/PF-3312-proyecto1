# PF-3312 Proyecto 1 · Agentes 3D con VRM

Aplicacion web construida con Vite, Three.js y `@pixiv/three-vrm` para demostrar 3 agentes 3D distintos dentro de un motor grafico, con rigging humanoide, expresiones faciales, lip-sync por audio y acciones controladas desde interfaz.

## Objetivo

Demostrar en el navegador que tres modelos 3D distintos cumplen los puntos tecnicos solicitados por el enunciado:

- Carga correcta dentro del motor grafico.
- Rigging funcional para animacion.
- Blendshapes/expressions para alegria, tristeza y duda.
- Blendshapes/visemes para lip-sync.
- Interaccion mediante interfaz grafica.
- Documentacion de fuentes, creditos, licencias y justificacion estetica.

## Modelos utilizados

1. `Seed-san`
2. `VRM1 Constraint Twist Sample`
3. `Alicia Solid`

El detalle de fuentes y licencias esta en [public/models/SOURCES.md](public/models/SOURCES.md).

## Stack

- Vite
- TypeScript
- Three.js
- `@pixiv/three-vrm`

## Ejecucion local

```bash
npm install
npm run dev
```

Servidor por defecto: `http://127.0.0.1:4173/` cuando se levanta manualmente con `npm run dev -- --host 127.0.0.1 --port 4173`.

## Scripts utiles

```bash
npm run build
npm run inspect:meta
npm run inspect:visemes
npm run verify:assets
```

### Que valida cada script

- `npm run build`: compila TypeScript y genera el bundle de produccion.
- `npm run inspect:meta`: extrae metadatos VRM de autores, licencias y permisos de redistribucion.
- `npm run inspect:visemes`: verifica la presencia de visemes y expresiones base en los tres modelos.
- `npm run verify:assets`: ejecuta ambas inspecciones para dejar evidencia tecnica repetible.

## Controles de la demo

- Selector de modelo.
- Acciones: `Idle`, `Saludar`, `Asentir`, `Senalar`, `Caminar`.
- Expresiones: `Neutral`, `Alegria`, `Tristeza`, `Duda`.
- Audio: `Hablar (audio)` y `Detener`.
- Panel tecnico con triangulos, vertices, cantidad de skinned meshes, joints maximos y presets resueltos.

## Estado validado

Se confirmo que los tres modelos:

- cargan sin errores en la aplicacion,
- exponen expresiones faciales utilizables,
- tienen visemes suficientes para lip-sync,
- responden a las acciones procedurales del visor,
- muestran informacion tecnica dentro del motor grafico.

La validacion tecnica base del repo puede repetirse con:

```bash
npm run build
npm run verify:assets
```

La validacion interactiva del navegador ya fue ejecutada con Playwright MCP sobre los tres modelos. El recorrido cubrio cambio de modelo, acciones, expresiones y reproduccion de audio, sin `console errors`, `console warnings` ni `page errors`.

## Evidencia visual

Las capturas actuales generadas durante el recorrido E2E estan en:

- [docs/evidence/seed-san-view.png](docs/evidence/seed-san-view.png)
- [docs/evidence/vrm1-constraint-view.png](docs/evidence/vrm1-constraint-view.png)
- [docs/evidence/alicia-solid-view.png](docs/evidence/alicia-solid-view.png)

## Entregables de apoyo

- [README.md](README.md)
- [docs/informe-entrega.md](docs/informe-entrega.md)
- [docs/checklist-evidencia.md](docs/checklist-evidencia.md)
- [docs/evidence/seed-san-view.png](docs/evidence/seed-san-view.png)
- [docs/evidence/vrm1-constraint-view.png](docs/evidence/vrm1-constraint-view.png)
- [docs/evidence/alicia-solid-view.png](docs/evidence/alicia-solid-view.png)
- [public/models/SOURCES.md](public/models/SOURCES.md)

## Entregables finales

### 1. Documento de seleccion y justificacion estetica

El insumo base para exportar a PDF es:

- [docs/informe-entrega.md](docs/informe-entrega.md)

Ese documento ya incluye:

- ficha tecnica de los tres modelos,
- perfil del agente y contexto de uso,
- justificacion estetica,
- analisis tecnico,
- capturas de evidencia dentro del motor grafico,
- resumen del paquete de assets,
- guia breve para la demo en video.

### 2. Paquete de activos tecnicos

El paquete listo para entregar dentro del repositorio es este proyecto completo, con estructura organizada para integracion:

- Modelos VRM: [public/models](public/models)
- Audios para lip-sync: [public/audio](public/audio)
- Codigo del visor y logica de animacion/expresiones: [src](src)
- Scripts de verificacion tecnica: [scripts](scripts)

### 3. Video de demostracion

El enunciado pide un enlace no listado en YouTube dentro del README. Reemplaza el marcador siguiente cuando subas el video:

- Enlace demo no listado: `PENDIENTE_AGREGAR_URL_YOUTUBE`

## Guion minimo para el video

Duracion sugerida: 2 a 3 minutos.

1. Mostrar la app cargando con un modelo y el panel tecnico visible.
2. Ejecutar al menos dos acciones fisicas en cada modelo.
3. Reproducir el audio corto para evidenciar lip-sync.
4. Cambiar entre los tres modelos y mostrar que las transiciones funcionan.
5. Cerrar mostrando el panel tecnico y mencionando que el enlace queda en este README.


# Informe de Entrega · PF-3312 Proyecto 1

## 1. Documento de seleccion y justificacion estetica

Este reporte resume la seleccion de tres agentes 3D en formato VRM, su justificacion estetica, el contexto de uso imaginado y la evidencia tecnica de que funcionan dentro del motor grafico de la aplicacion.

La solucion fue implementada con Three.js, TypeScript y `@pixiv/three-vrm`, con soporte para:

- rigging humanoide funcional,
- blendshapes y presets de expresion,
- visemes para lip-sync,
- acciones procedurales,
- carga y cambio de modelo en tiempo real,
- evidencia tecnica visible dentro del motor.

## 2. Ficha tecnica de los tres modelos

### 2.1 Seed-san

**Archivo:** `public/models/seed-san.vrm`

**Perfil del agente:** agente de orientacion academica.

**Rol y personalidad:** representa un agente amable, cercano y positivo, pensado para recibir a una persona, orientarla en pasos iniciales y mantener una presencia clara y accesible.

**Contexto de uso imaginado:** recepcion virtual, orientacion estudiantil o acompanamiento en interfaces donde el usuario necesita instrucciones sencillas y confianza desde el primer contacto.

**Justificacion de apariencia:** se eligio porque su estilo visual es amigable y neutro. Esa estetica baja la friccion inicial de la interaccion, favorece que el usuario perciba apoyo y hace que expresiones como alegria y saludo se vean naturales.

**Analisis tecnico:**

- Rigging humanoide: si.
- Blendshapes/expresiones: si.
- Visemes para lip-sync: `aa, ih, ou, ee, oh`.
- Expresiones observables: `happy`, `sad`, `surprised` y presets equivalentes resueltos por el visor.
- Triangulos: `45058`.
- Vertices: `34059`.
- Skinned meshes: `21`.
- Max joints: `128`.
- Evidencia visual en motor: [docs/evidence/seed-san-view.png](docs/evidence/seed-san-view.png).
- Fuente y licencia: [public/models/SOURCES.md](public/models/SOURCES.md).

### 2.2 VRM1 Constraint Twist Sample

**Archivo:** `public/models/vrm1-constraint-twist-sample.vrm`

**Perfil del agente:** agente tecnico de laboratorio.

**Rol y personalidad:** representa un agente preciso, atento y meticuloso, adecuado para guiar procesos, confirmar estados o explicar pasos tecnicos con una presencia mas sobria.

**Contexto de uso imaginado:** soporte tecnico, laboratorio, flujos de verificacion o ambientes donde el agente deba reforzar orden, claridad y seguimiento de instrucciones.

**Justificacion de apariencia:** se eligio porque su presencia visual es mas estructurada y utilitaria. Esa estetica apoya mejor gestos como asentir y senalar, y ayuda a comunicar seriedad operativa.

**Analisis tecnico:**

- Rigging humanoide: si.
- Blendshapes/expresiones: si.
- Visemes para lip-sync: `aa, ih, ou, ee, oh`.
- Expresiones observables: presets equivalentes para alegria, tristeza y duda resueltos por el visor.
- Triangulos: `36470`.
- Vertices: `24951`.
- Skinned meshes: `13`.
- Max joints: `129`.
- Evidencia visual en motor: [docs/evidence/vrm1-constraint-view.png](docs/evidence/vrm1-constraint-view.png).
- Fuente y licencia: [public/models/SOURCES.md](public/models/SOURCES.md).

### 2.3 Alicia Solid

**Archivo:** `public/models/alicia-solid.vrm`

**Perfil del agente:** agente de asistencia futurista.

**Rol y personalidad:** representa un agente seguro, expresivo y curioso, orientado a una demostracion tecnologica o a una experiencia de apoyo digital con mayor identidad visual.

**Contexto de uso imaginado:** demostraciones interactivas, soporte digital avanzado, guiado visual en exhibiciones de tecnologia o presentaciones de alto impacto.

**Justificacion de apariencia:** se eligio porque su estilo es mas estilizado y tecnologico. Eso refuerza la sensacion de innovacion, diferencia claramente este agente de los otros dos y mejora la lectura de expresiones mas marcadas.

**Analisis tecnico:**

- Rigging humanoide: si.
- Blendshapes/expresiones: si.
- Visemes para lip-sync: `a, i, u, e, o`.
- Expresiones observables: `joy`, `sorrow`, `lookleft`, `lookright` y presets equivalentes resueltos por el visor.
- Triangulos: `31798`.
- Vertices: `21623`.
- Skinned meshes: `20`.
- Max joints: `106`.
- Evidencia visual en motor: [docs/evidence/alicia-solid-view.png](docs/evidence/alicia-solid-view.png).
- Fuente y licencia: [public/models/SOURCES.md](public/models/SOURCES.md).

## 3. Analisis tecnico consolidado

### 3.1 Metadatos, creditos y licencias

La verificacion de metadatos del propio archivo VRM confirma lo siguiente:

- Seed-san: autor `VirtualCast, Inc.`, licencia `VRM Public License 1.0`, redistribucion permitida y credito requerido.
- VRM1 Constraint Twist Sample: autor `pixiv Inc.`, licencia `VRM Public License 1.0`, redistribucion permitida.
- Alicia Solid: autor `DWANGO Co., Ltd.`, licencia especifica del modelo Alicia, con restricciones expresas de uso violento y sexual.

El detalle completo esta en [public/models/SOURCES.md](public/models/SOURCES.md).

### 3.2 Rigging y blendshapes

Los tres modelos cargan correctamente como humanoides VRM y responden a huesos normalizados dentro del motor. Esto permite ejecutar acciones visibles como:

- `Saludar`
- `Asentir`
- `Senalar`
- `Caminar`

En cuanto a blendshapes, los tres modelos exponen presets utilizables para expresiones faciales y visemes de boca. La aplicacion resuelve esos presets por modelo para mapear `Alegria`, `Tristeza`, `Duda` y apertura de boca para lip-sync.

### 3.3 Evidencia visual dentro del motor grafico

Las capturas guardadas en el repositorio muestran los modelos cargados y el panel tecnico dentro del motor grafico:

- [docs/evidence/seed-san-view.png](docs/evidence/seed-san-view.png)
- [docs/evidence/vrm1-constraint-view.png](docs/evidence/vrm1-constraint-view.png)
- [docs/evidence/alicia-solid-view.png](docs/evidence/alicia-solid-view.png)

## 4. Paquete de activos tecnicos

El paquete de assets entregable corresponde al proyecto completo configurado y organizado para integracion.

### 4.1 Contenido incluido

- Tres modelos VRM con rigging funcional en [public/models](public/models).
- Audios por agente para prueba de lip-sync en [public/audio](public/audio).
- Codigo del visor, animacion y expresiones en [src](src).
- Scripts de verificacion tecnica en [scripts](scripts).

### 4.2 Soporte funcional incluido

El proyecto ya contiene:

- carga y cambio entre los 3 modelos,
- rigging funcional dentro del motor grafico,
- blendshapes basicas para boca y expresiones,
- lip-sync por audio pregrabado,
- estructura de carpetas lista para ejecucion e integracion.

## 5. Video de demostracion

Para cumplir el entregable del video, la demo debe mostrar:

- al menos dos acciones fisicas,
- lip-sync con audio corto,
- transiciones entre acciones,
- cambio entre los tres modelos.

Guion recomendado de menos de 3 minutos:

1. Abrir la aplicacion con el panel tecnico visible.
2. Mostrar Seed-san y ejecutar `Saludar` y `Alegria`.
3. Reproducir el audio para evidenciar lip-sync.
4. Cambiar a VRM1 Constraint Twist Sample y ejecutar `Asentir` y `Senalar`.
5. Cambiar a Alicia Solid y ejecutar `Caminar` y `Duda`.
6. Cerrar mostrando que los tres modelos comparten el mismo visor y el mismo flujo de cambio de estado.

El enlace no listado de YouTube debe quedar incluido en [README.md](README.md).

## 6. Validacion recomendada antes de entregar

1. Ejecutar `npm run build`.
2. Ejecutar `npm run verify:assets`.
3. Levantar la app con `npm run dev -- --host 127.0.0.1 --port 4173`.
4. Revisar que las capturas y el video correspondan al estado final del proyecto.
5. Exportar este archivo a PDF.

## 7. Exportacion a PDF

Este archivo esta redactado para exportarse directamente a PDF desde la vista previa Markdown de VS Code o desde el navegador.


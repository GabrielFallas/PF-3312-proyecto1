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

### 2.1 Zed

**Archivo:** `public/models/zed.vrm`

**Perfil del agente:** mentor de carreras STEM.

**Rol y personalidad:** estudiante universitario en su ultimo semestre que apoya proyectos de robotica e inteligencia artificial. Acompana a personas indecisas (hombres y mujeres) sobre carreras STEM, explicando que se puede construir y como iniciar.

**Contexto de uso imaginado:** orientacion vocacional STEM, exploracion de rutas de aprendizaje y ejemplos de proyectos reales (programacion, electronica, robotica e IA).

**Justificacion de apariencia:** se eligio porque su estetica juvenil y amigable baja la barrera de entrada y hace natural la conversacion motivacional. Gestos como saludo y alegria refuerzan un rol de mentor cercano.

**Analisis tecnico:**

- Rigging humanoide: si.
- Blendshapes/expresiones: si.
- Visemes para lip-sync: `aa, ih, ou, ee, oh`.
- Expresiones observables: `happy`, `sad`, `surprised` y presets equivalentes resueltos por el visor.
- Triangulos: `45058`.
- Vertices: `34059`.
- Skinned meshes: `21`.
- Max joints: `128`.
- Evidencia visual en motor: [evidence/zed-view.png](evidence/zed-view.png).
- Fuente y licencia: [../public/models/SOURCES.md](../public/models/SOURCES.md).

### 2.2 Yuki

**Archivo:** `public/models/yuki.vrm`

**Perfil del agente:** entrenadora personal y nutricion.

**Rol y personalidad:** entrenadora personal energica y empatica que adapta recomendaciones al nivel del usuario. Ofrece guia de entrenamiento, habitos y consejos generales de nutricion.

**Contexto de uso imaginado:** acompanamiento fitness para metas deportivas (fuerza, resistencia, recomposicion), tecnica basica, recuperacion y orientacion nutricional general.

**Justificacion de apariencia:** se eligio porque su presencia visual limpia y sobria funciona bien para un rol de coach: transmite disciplina, foco y claridad al dar instrucciones (asentir, senalar y caminar).

**Analisis tecnico:**

- Rigging humanoide: si.
- Blendshapes/expresiones: si.
- Visemes para lip-sync: `aa, ih, ou, ee, oh`.
- Expresiones observables: presets equivalentes para alegria, tristeza y duda resueltos por el visor.
- Triangulos: `36470`.
- Vertices: `24951`.
- Skinned meshes: `13`.
- Max joints: `129`.
- Evidencia visual en motor: [evidence/yuki-view.png](evidence/yuki-view.png).
- Fuente y licencia: [../public/models/SOURCES.md](../public/models/SOURCES.md).

### 2.3 Alicia

**Archivo:** `public/models/alicia.vrm`

**Perfil del agente:** guia de viajes a Japon.

**Rol y personalidad:** agente conversacional calida y entusiasta para planear viajes a Japon. Recomienda rutas por estacion, lugares, comidas, puntos turisticos y datos practicos a considerar.

**Contexto de uso imaginado:** conversaciones con futuros turistas que quieren conocer Japon: armado de itinerarios, recomendaciones segun temporada, transporte, cultura y consejos para viajar con mas confianza.

**Justificacion de apariencia:** se eligio porque su apariencia expresiva facilita una comunicacion agradable. Ayuda a sostener dialogo y a transmitir energia de guia, manteniendo una identidad visual memorable.

**Analisis tecnico:**

- Rigging humanoide: si.
- Blendshapes/expresiones: si.
- Visemes para lip-sync: `a, i, u, e, o`.
- Expresiones observables: `joy`, `sorrow`, `lookleft`, `lookright` y presets equivalentes resueltos por el visor.
- Triangulos: `31798`.
- Vertices: `21623`.
- Skinned meshes: `20`.
- Max joints: `106`.
- Evidencia visual en motor: [evidence/alicia-view.png](evidence/alicia-view.png).
- Fuente y licencia: [../public/models/SOURCES.md](../public/models/SOURCES.md).

## 3. Analisis tecnico consolidado

### 3.1 Metadatos, creditos y licencias

La verificacion de metadatos del propio archivo VRM confirma lo siguiente:

- Zed (modelo base Seed-san): autor `VirtualCast, Inc.`, licencia `VRM Public License 1.0`, redistribucion permitida y credito requerido.
- Yuki (modelo base VRM1 Constraint Twist Sample): autor `pixiv Inc.`, licencia `VRM Public License 1.0`, redistribucion permitida.
- Alicia (modelo base Alicia Solid): autor `DWANGO Co., Ltd.`, licencia especifica del modelo Alicia, con restricciones expresas de uso violento y sexual.

El detalle completo esta en [../public/models/SOURCES.md](../public/models/SOURCES.md).

### 3.2 Rigging y blendshapes

Los tres modelos cargan correctamente como humanoides VRM y responden a huesos normalizados dentro del motor. Esto permite ejecutar acciones visibles como:

- `Saludar`
- `Asentir`
- `Senalar`
- `Caminar`

En cuanto a blendshapes, los tres modelos exponen presets utilizables para expresiones faciales y visemes de boca. La aplicacion resuelve esos presets por modelo para mapear `Alegria`, `Tristeza`, `Duda` y apertura de boca para lip-sync.

### 3.3 Evidencia visual dentro del motor grafico

Las capturas guardadas en el repositorio muestran los modelos cargados y el panel tecnico dentro del motor grafico:

Las capturas correspondientes a esta version estan en:

- [evidence/zed-view.png](evidence/zed-view.png)
- [evidence/yuki-view.png](evidence/yuki-view.png)
- [evidence/alicia-view.png](evidence/alicia-view.png)

## 4. Paquete de activos tecnicos

El paquete de assets entregable corresponde al proyecto completo configurado y organizado para integracion.

### 4.1 Contenido incluido

- Tres modelos VRM con rigging funcional en [../public/models](../public/models).
- Audios por agente para prueba de lip-sync en [../public/audio](../public/audio).
- Codigo del visor, animacion y expresiones en [../src](../src).
- Scripts de verificacion tecnica en [../scripts](../scripts).

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
2. Mostrar Zed y ejecutar `Saludar` y `Alegria`.
3. Reproducir el audio para evidenciar lip-sync.
4. Cambiar a Yuki y ejecutar `Asentir` y `Senalar`.
5. Cambiar a Alicia y ejecutar `Caminar` y `Duda`.
6. Cerrar mostrando que los tres modelos comparten el mismo visor y el mismo flujo de cambio de estado.

El enlace no listado de YouTube debe quedar incluido en [../README.md](../README.md).


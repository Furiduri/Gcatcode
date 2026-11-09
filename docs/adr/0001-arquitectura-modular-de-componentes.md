# ADR-0001: Arquitectura modular de componentes

- **Estado:** Aceptada
- **Fecha:** 2026-10-02

## Contexto

El sitio tiene dos superficies que comparten contenido: la landing de GCatcode
(`/`, `/en/`) y el CV (`/cv/`, `/cv/projects/`). El mismo material aparece en
ambas; por ejemplo, el caso de Juegalajara se muestra como caso real en la
landing y debe mostrarse igual en `/cv/projects/`.

Estado del código al escribir este ADR:

- La landing del PR #20 está escrita en una sola plantilla de 421 líneas con
  diez secciones en línea. El caso de Juegalajara no puede reutilizarse en
  otra página sin copiar su marcado.
- `src/pages/[...lang]/cv/index.astro` (167 líneas) contiene cinco secciones en
  línea (issue #21).
- Parte del estilo compartido vive como clases globales con `@apply` en
  `src/styles/global.css` (`.glass-card`, `.btn-primary`): se reutiliza el
  estilo, pero el marcado y los atributos de accesibilidad se repiten en cada
  uso.
- Las páginas legales sí siguen un patrón modular: ambas usan
  `LegalDocument.astro` con el contenido por props.
- El repositorio no tiene linter ni tests; la única verificación automática es
  `npm run build`.

El dueño del sitio exige que todo el sitio sea modular, justamente para estos
casos de reutilización. El PR #20 quedó bloqueado en revisión por incumplirlo.

## Decisión

Construimos el sitio con componentes reutilizables y páginas que solo componen.

1. **Las páginas son contenedores.** Cada plantilla de `src/pages/[...lang]/`
   resuelve el idioma, toma el diccionario, reemplaza sus `{placeholders}` y
   calcula los datos propios de la página (URLs, enlaces de WhatsApp). Después
   compone secciones. No contiene el marcado de ninguna sección.
2. **Cada sección es un componente presentacional** en
   `src/components/<funcionalidad>/` (por ejemplo `landing/`, `case-study/`,
   `cv/`). Recibe sus textos y datos por props, tipadas con los tipos del
   diccionario. No lee el diccionario, `Astro.currentLocale` ni `src/data/` por
   su cuenta.
3. **Los elementos de interfaz que se repiten** (botones, encabezados de
   sección, etiquetas, marcos de foto, contenedores de sección) son componentes
   en `src/components/ui/`, y su estilo vive dentro del componente. Una página
   no define clases propias para darles estilo.
4. **Una sección compartida vive en la carpeta de su funcionalidad**, no en la
   de la primera página que la usó: el caso de estudio va en `case-study/`, no
   en `landing/`.
5. **Excepción: el armazón del sitio.** `Layout`, `Header`, `Footer` y
   `LanguageSwitcher` aparecen una vez por página en todo el sitio y pueden leer
   el idioma actual por su cuenta.

`src/styles/global.css` conserva los tokens de diseño (`@theme`) y los estilos
base. Las clases de componente que hoy existen ahí se migran a `ui/` (issue
#21).

## Alternativas consideradas

**Una plantilla completa por página.** Todo el marcado de una página queda en
un archivo y es rápido de escribir. Se descarta porque impide reutilizar: el
caso de Juegalajara del PR #20 no puede llevarse a `/cv/projects/` sin copiar
su marcado, y cada copia diverge con el tiempo.

**Clases CSS globales con `@apply` como componentes.** Requiere menos archivos
y reutiliza el estilo. Se descarta porque solo reutiliza el estilo: el
marcado, los textos ocultos para lectores de pantalla, `rel` y `aria` se
repiten en cada uso, y el componente queda repartido entre la hoja de estilos y
cada página que lo usa. El PR #20 empezó así.

**Carpetas por nivel de diseño atómico (`atoms/`, `molecules/`, `organisms/`).**
Es una taxonomía conocida. Se descarta porque los nombres describen el nivel
de abstracción y no de qué trata el sitio, y decidir si algo es átomo o
molécula es discutible y cambia con el tiempo. Las carpetas por funcionalidad
dicen qué hace cada componente; `ui/` cubre los elementos base.

**Componentes que leen el diccionario por su cuenta.** Ahorra props, porque el
componente busca sus propios textos. Se descarta para las secciones porque ata
el componente a una ruta concreta del diccionario: otra página no puede usarlo
con otros textos, y el flujo de datos deja de verse desde la página. Se acepta
solo para el armazón del sitio (punto 5 de la decisión).

## Consecuencias

**A favor:**

- Una sección se reutiliza en otra página sin copiar marcado: la primera será
  el caso de Juegalajara en `/cv/projects/`.
- Las páginas quedan cortas y muestran de un vistazo qué secciones tienen y de
  dónde salen sus datos.
- Las props tipadas con el diccionario permiten que el editor señale un texto
  faltante o mal nombrado al usar una sección.
- Cada componente se revisa por separado, y un cambio de estilo de un botón se
  hace en un solo lugar.

**En contra:**

- Más archivos y más props que pasar; la página contenedora crece en
  "cableado" de datos.
- Las props quedan acopladas a la forma del diccionario: renombrar una clave
  cambia también el tipo de las props del componente.
- El código existente no cumple todavía: `cv/index.astro`, `cv/projects/` y
  las clases `.glass-card` y `.btn-primary` (issue #21).
- Ningún chequeo automático hace cumplir esta regla; depende de la revisión y
  de la skill `gcatcode-content`.
- Los tipos de las props no se verifican en el build: `npm run build` no corre
  `astro check` ni `tsc`, y el CI solo ejecuta `npm run build`. Una prop mal
  pasada se detecta en el editor o al renderizar, no antes.

## Verificación pendiente

- El PR #20 todavía no cumple esta decisión; se refactoriza antes de mergear.
- La migración del CV queda en el issue #21.
- No existe una regla de lint que detecte secciones en línea en una página.
- No existe verificación de tipos automática (`astro check` no está instalado).

## Alcance

Cubre `src/pages/` y `src/components/`. No decide la estructura del
diccionario ni la de `src/data/` (la internacionalización por diccionarios es
una decisión anterior, pendiente de ADR), ni la adopción de una librería de
componentes externa: el sitio usa solo componentes de Astro.

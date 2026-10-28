# ADR-0017: Precio, pago y promociones de las páginas web estáticas

- **Estado:** Propuesta
- **Fecha:** 2026-10-28
- **Supera a:** [ADR-0015](0015-precio-y-pago-de-paginas-web-estaticas.md)

## Contexto

ADR-0015 fijó en los términos una promoción de primer proyecto de $1,500 MXN
para micro empresas y emprendedores. Las promociones de GCatcode no son
recurrentes: cada una va dirigida a un público concreto (por ejemplo, el
Programa Emprende Diversx a $1,500 MXN o la Comunidad Gaydalajara a $2,500 MXN)
y tiene su propia vigencia. Una promoción fija en los términos queda vigente
indefinidamente y no puede cubrir promociones con otros precios o públicos.

El sitio publica las páginas web informativas desde $7,000 MXN, el valor real
del paquete básico: 14 horas a la tarifa de $500 MXN por hora, IVA incluido
(ADR-0003).

## Decisión

Las páginas web estáticas tienen una sección propia en los términos:

- Se cotizan por actividad (análisis, diseño, desarrollo y pruebas) con la
  tarifa de $500 MXN por hora, IVA incluido, desde $7,000 MXN. El desarrollo
  incluye SEO básico y optimización de recursos gráficos.
- Cada página informativa adicional cuesta $1,000 MXN (una hora de análisis y
  una de desarrollo).
- El anticipo es siempre del 50 % del total. El saldo se paga antes de
  publicar en el servidor del cliente. Pagar el anticipo implica
  aceptar el desarrollo y los precios de la cotización; no se firma la
  cotización.
- El desarrollo dura como mínimo 1 semana; puede extenderse con aviso previo y
  depende del tiempo que tarde el cliente en enviar el material solicitado.
- El cliente entrega el material gráfico y la información del negocio en un
  plazo no mayor a un mes desde el pago del anticipo. Si no lo entrega, el
  proyecto se considera abandonado y cancelado, y el anticipo no se reembolsa.
- Las revisiones no tienen límite mientras sean cambios mínimos: corrección de
  textos, posición de elementos gráficos o cambio de archivos proporcionados
  por el cliente, como fotografías o logos.
- Los avances se revisan en servidores de GCatcode; al liquidar, se publica en
  el servidor que elija el cliente y se entrega el sitio compilado.
- La propiedad del código fuente la decide ADR-0018: es del cliente si paga el
  proyecto sin promociones ni descuentos.
- La garantía de 30 días (ADR-0008) aplica también a las páginas estáticas.
- La pausa y la cancelación siguen las reglas del desarrollo modular
  (ADR-0010, ADR-0014), considerando la página estática como un único módulo.

Los términos no fijan ninguna promoción. Una sección «Promociones» establece
las reglas comunes:

- Cada promoción indica en su cotización o anuncio a quién va dirigida, su
  vigencia y sus condiciones.
- Aplica solo a las personas a quienes va dirigida su cotización y a proyectos
  contratados, con el pago del anticipo, durante su vigencia. Por eso las
  promociones no se publican en el sitio.
- Las promociones no son combinables.
- Una promoción puede fijar sus propios precios y su propio anticipo (por
  ejemplo, un anticipo mínimo o una página adicional a precio promocional).
- La cotización muestra el valor real y el descuento de la promoción.
- Al terminar la vigencia, los proyectos nuevos se cotizan con los precios de
  los términos. Lo que la promoción no indique se rige por los términos.

## Alternativas consideradas

**Mantener la promoción fija de ADR-0015.** No requiere cambios. Se descarta
porque deja vigente indefinidamente una promoción que el dueño quiere temporal
y no cubre promociones con otros precios.

**Publicar cada promoción en los términos y retirarla al vencer.** Da
publicidad legal a cada promoción. Se descarta porque obliga a cambiar los
términos y su fecha de actualización con cada campaña.

**Anticipo mínimo de $1,000 MXN en proyectos de más de $2,000 MXN.** Reduce el
desembolso inicial. Se descarta como regla general porque baja lo cobrado por
adelantado; queda como condición posible de una promoción.

**No mencionar las promociones en los términos.** Es lo más simple. Se descarta
porque no queda regla para un cliente que contrata después de la vigencia o
para lo que la promoción no indica.

## Consecuencias

**A favor:**

- Cada campaña se lanza con una cotización y un anuncio, sin tocar el sitio.
- El cliente sabe que lo no previsto en la promoción se rige por los términos.

**En contra:**

- Las condiciones de cada promoción solo constan en su cotización o anuncio;
  si se pierden, no hay registro público de lo ofrecido.
- Cada promoción cubre una fracción del valor real; los proyectos promocionales
  son trabajo con poco margen.
- Una página adicional de $1,000 MXN queda por debajo del mercado ($2,000 a
  $8,000 MXN) y supone páginas sencillas de dos horas.
- Las revisiones ilimitadas dependen de distinguir un cambio mínimo de uno
  mayor; la frontera puede discutirse en un caso concreto.
- Retener el anticipo de un proyecto abandonado puede generar reclamos ante
  Profeco si el cliente no fue avisado del plazo.

## Verificación

- `npm run build` genera las secciones «Páginas web estáticas» y «Promociones»
  en español y en inglés, sin el precio de promoción fijo.

## Verificación pendiente

- No se definió cómo se cobran los cambios que no son mínimos durante el
  desarrollo.
- Este ADR no fue revisado por un abogado.

## Alcance

No decide la propiedad del código fuente de las páginas estáticas ni de los
proyectos con promoción (ADR-0018).
No cambia el desarrollo a la medida por módulos (ADR-0009).

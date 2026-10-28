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
- Cada página informativa adicional cuesta $500 MXN (una hora).
- El anticipo es del 50 % del total. En proyectos de más de $2,000 MXN, el
  anticipo mínimo es de $1,000 MXN y el cliente puede adelantar más. El saldo se
  paga antes de publicar en el servidor del cliente. Pagar el anticipo implica
  aceptar el desarrollo y los precios de la cotización; no se firma la
  cotización.
- El desarrollo dura como mínimo 1 semana; puede extenderse con aviso previo y
  depende del tiempo que tarde el cliente en enviar el material solicitado.
- El cliente entrega el material gráfico y la información del negocio. Los
  avances se revisan en servidores de GCatcode; al liquidar, se publica en el
  servidor que elija el cliente y se entrega el sitio compilado.

Los términos no fijan ninguna promoción. Una sección «Promociones» establece
las reglas comunes:

- Cada promoción indica en su cotización o anuncio a quién va dirigida, su
  vigencia y sus condiciones.
- Aplica solo a proyectos contratados, con el pago del anticipo, durante su
  vigencia.
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
- Con el anticipo mínimo de $1,000 MXN, lo exigido baja del 50 % en proyectos
  de más de $2,000 MXN, y el riesgo de no cobrar el saldo aumenta.
- Una página adicional de $500 MXN queda muy por debajo del mercado ($2,000 a
  $8,000 MXN) y supone páginas sencillas de una hora.

## Verificación

- `npm run build` genera las secciones «Páginas web estáticas» y «Promociones»
  en español y en inglés, sin el precio de promoción fijo.

## Verificación pendiente

- No se definió si la garantía de 30 días (ADR-0008) aplica a páginas estáticas.
- No se definió qué pasa con el anticipo y los avances si el cliente no paga el
  saldo, cuántas rondas de revisión incluye el precio ni el plazo para entregar
  el material.
- No se definió si dos promociones se pueden combinar.
- Este ADR no fue revisado por un abogado.

## Alcance

No decide la propiedad del código fuente de las páginas estáticas (ADR-0016).
No cambia el desarrollo a la medida por módulos (ADR-0009).

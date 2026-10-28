# ADR-0015: Precio y pago de las páginas web estáticas

- **Estado:** Aceptada
- **Fecha:** 2026-10-27

## Contexto

GCatcode quiere ofrecer páginas web estáticas (sitios informativos sin backend
ni base de datos) a micro empresas y emprendedores. Los términos solo regulaban
el desarrollo a la medida por módulos, con un anticipo del 25 % del primer
módulo (ADR-0009) y ciclos de 2 semanas, un esquema pensado para sistemas con
frontend, backend y base de datos.

La investigación de mercado del dueño ubica un sitio PyME de 4 a 6 secciones
entre $5,000 y $25,000 MXN con freelancers, y el anticipo de 50 % como estándar
en proyectos pequeños. Con la tarifa publicada de $500 MXN por hora, IVA
incluido (ADR-0003), el paquete de landing, «Acerca de», términos y catálogo
vale $7,000 MXN (14 horas).

## Decisión

Las páginas web estáticas tienen una sección propia en los términos:

- Se cotizan por actividad (análisis, diseño, desarrollo y pruebas) con la
  tarifa de $500 MXN por hora, IVA incluido. El desarrollo incluye SEO básico y
  optimización de recursos gráficos.
- Cada página informativa adicional cuesta $500 MXN (una hora).
- Promoción de primer proyecto: micro empresas y emprendedores pagan $1,500 MXN,
  IVA incluido, por landing, «Acerca de», términos y catálogo, una sola vez. La
  cotización muestra el valor real y el descuento.
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

## Alternativas consideradas

**Cotizarlas como un módulo de desarrollo a la medida.** No requiere texto
nuevo. Se descarta porque el ciclo de 2 semanas y el anticipo del 25 % no
corresponden a un trabajo de pocas horas.

**Anticipo del 50 % sin excepción.** Es el estándar del mercado. Se descarta
porque en proyectos con varias páginas adicionales obliga al emprendedor a
desembolsar más de lo que el dueño quiere pedir al inicio.

**Anticipo con tope de $1,000 MXN.** El cálculo es el mismo. Se descarta la
redacción porque «máximo» invita al cliente a no pagar más, cuando puede
adelantar más si quiere.

**Precio fijo publicado sin desglose.** Es más simple. Se descarta porque oculta
el valor real del trabajo y hace que la promoción parezca el precio normal.

## Consecuencias

**A favor:**

- El emprendedor conoce el precio y el anticipo antes de contratar.
- La cotización por actividad muestra el valor real y justifica la promoción.

**En contra:**

- La promoción cubre poco más del 20 % del valor real; cada proyecto
  promocional es trabajo casi sin margen.
- Con el anticipo mínimo de $1,000 MXN, lo exigido baja del 50 % en proyectos
  de más de $2,000 MXN, y el riesgo de no cobrar el saldo aumenta.
- «Micro empresa» y «emprendedor» no tienen un criterio verificable en los
  términos; la elegibilidad queda a juicio del proveedor.
- Una página adicional de $500 MXN queda muy por debajo del mercado ($2,000 a
  $8,000 MXN) y supone páginas sencillas de una hora.

## Verificación

- `npm run build` genera la sección «Páginas web estáticas» en español y en
  inglés.

## Verificación pendiente

- No se definió si la garantía de 30 días (ADR-0008) aplica a páginas estáticas.
- No se definió qué pasa con el anticipo y los avances si el cliente no paga el
  saldo, cuántas rondas de revisión incluye el precio ni el plazo para entregar
  el material.
- Este ADR no fue revisado por un abogado.

## Alcance

No decide la propiedad del código fuente de las páginas estáticas (ADR-0016).
No cambia el desarrollo a la medida por módulos (ADR-0009).

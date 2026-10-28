# ADR-0018: Código fuente de las páginas web estáticas y de los proyectos con promoción

- **Estado:** Propuesta
- **Fecha:** 2026-10-28
- **Supera a:** [ADR-0016](0016-codigo-fuente-de-paginas-web-estaticas.md)

## Contexto

ADR-0016 hace que GCatcode conserve el código fuente de toda página web
estática, con una liberación que se cotiza aparte. Las páginas estáticas se
venden a menudo con promociones que cubren una fracción de su valor real
(ADR-0017), y el soporte posterior es lo que recupera ese descuento. Una
página estática a precio completo, en cambio, ya paga su valor real, igual que
un módulo de desarrollo a la medida, cuyo código es del cliente al pagarlo
(ADR-0011).

## Decisión

Es dueño del código fuente quien paga el proyecto sin promociones ni
descuentos:

- En una página web estática pagada a precio completo, el código desarrollado
  para el sitio es del cliente al liquidarla, con las mismas reglas de
  ADR-0011 sobre el código genérico de GCatcode. Se entrega junto con el sitio
  compilado.
- Si el cliente pide detener de inmediato una página estática sin promoción,
  se le entrega su código en el estado en que se encuentre, como en el
  desarrollo modular (ADR-0014).
- En un proyecto con promoción o descuento, GCatcode retiene el código fuente
  y su propiedad, incluso si el proyecto se detiene. El cliente recibe el sitio
  compilado y publicado.
- El código de un proyecto con promoción pasa al cliente si paga el valor del
  proyecto sin descuento.
- Los cambios futuros los hace GCatcode a $500 MXN por hora, IVA incluido.

## Alternativas consideradas

**Mantener ADR-0016.** GCatcode conserva siempre el código de las páginas
estáticas. Se descarta porque cobra el precio completo sin dar la propiedad que
sí da el desarrollo modular por el mismo pago.

**Dar el código siempre, también con promoción.** Es uniforme. Se descarta
porque el cliente podría llevarse a otro proveedor un sitio pagado con un
descuento de hasta 80 % sin que GCatcode lo recupere.

**Cotizar la liberación caso por caso.** Da flexibilidad. Se descarta porque el
cliente no sabe de antemano cuánto cuesta ser dueño de su código; con esta
regla, el precio es la diferencia del descuento.

## Consecuencias

**A favor:**

- La regla es la misma en todos los servicios: quien paga el valor real es
  dueño de su código.
- El cliente con promoción sabe exactamente cuánto cuesta liberar el código.

**En contra:**

- El cliente con promoción depende de GCatcode para cambiar su sitio, lo que
  puede percibirse como dependencia forzada.
- Si un proyecto con promoción se detiene, el cliente no recibe código y solo
  conserva lo publicado.
- GCatcode debe identificar en cada cotización si el proyecto tiene promoción,
  porque de eso depende la propiedad del código.

## Verificación

- `npm run build` genera en español y en inglés las reglas de propiedad del
  código en las secciones «Páginas web estáticas», «Promociones» y «Propiedad
  del código».

## Verificación pendiente

- No se verificó con un abogado si retener la titularidad requiere un contrato
  firmado frente al artículo 83 de la Ley Federal del Derecho de Autor.

## Alcance

No cambia ADR-0011 para el desarrollo a la medida sin promoción. No decide los
precios ni el anticipo de las páginas estáticas (ADR-0017).

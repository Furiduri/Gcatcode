# ADR-0016: Código fuente de las páginas web estáticas

- **Estado:** Superada por [ADR-0018](0018-codigo-fuente-de-paginas-web-estaticas-y-promociones.md)
- **Fecha:** 2026-10-27

## Contexto

ADR-0011 hace al cliente dueño del código de cada módulo pagado del desarrollo
a la medida. Las páginas web estáticas (ADR-0015) no se organizan en módulos y
se venden a bajo costo, a veces con una promoción que cubre poco más del 20 %
de su valor real.

## Decisión

En las páginas web estáticas, GCatcode conserva el código fuente y su
propiedad. El cliente recibe el sitio compilado y publicado en el servidor que
elija. Los cambios futuros los hace GCatcode a $500 MXN por hora, IVA incluido.
Si el cliente quiere trabajar con otro proveedor, la liberación del código
fuente se cotiza por separado.

En el desarrollo a la medida sigue aplicando ADR-0011: el código se entrega con
el pago total de cada módulo y al cancelar el proyecto.

## Alternativas consideradas

**Aplicar ADR-0011 también a las páginas estáticas.** Es uniforme. Se descarta
porque, con un precio tan bajo, el soporte posterior es lo que hace rentable el
proyecto.

**Entregar el código fuente sin poder venderlo después.** Evita una negociación
futura. Se descarta porque el cliente podría llevarse el proyecto a otro
proveedor sin que GCatcode recupere el descuento otorgado.

## Consecuencias

**A favor:**

- GCatcode recupera el descuento con el soporte de los cambios futuros.
- El cliente tiene un proveedor que ya conoce su sitio.

**En contra:**

- El cliente depende de GCatcode para cambiar su sitio, lo que puede
  percibirse como dependencia forzada.
- El precio de la liberación del código no está definido; cada caso requiere
  negociación.
- Los términos tienen dos regímenes de propiedad del código según el tipo de
  proyecto, lo que exige identificar el tipo en cada cotización.

## Verificación

- `npm run build` genera la remisión desde «Propiedad del código» a la sección
  «Páginas web estáticas», en español y en inglés.

## Verificación pendiente

- No se verificó con un abogado si conservar la titularidad requiere un
  contrato firmado frente al artículo 83 de la Ley Federal del Derecho de Autor.

## Alcance

No cambia ADR-0011 para el desarrollo a la medida. No fija el precio de la
liberación del código fuente.

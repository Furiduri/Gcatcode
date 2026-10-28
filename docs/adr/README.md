# Decisiones de arquitectura (ADR)

Registro de las decisiones de arquitectura del sitio (landing de GCatcode y CV)
y del razonamiento detrás de cada una.

El proceso está definido en [ADR-0000](0000-proceso-de-adr.md). La regla
principal: **un ADR aceptado no se edita, se supera con uno nuevo.**

## Índice

| # | Decisión | Estado | Fecha |
| --- | --- | --- | --- |
| [0000](0000-proceso-de-adr.md) | Proceso de registro de decisiones de arquitectura | Aceptada | 2026-10-02 |
| [0001](0001-arquitectura-modular-de-componentes.md) | Arquitectura modular de componentes | Aceptada | 2026-10-02 |
| [0002](0002-recursos-servidos-desde-el-propio-sitio.md) | Recursos servidos desde el propio sitio | Aceptada | 2026-10-03 |
| [0003](0003-precios-publicados-con-iva-incluido.md) | Precios publicados con IVA incluido | Aceptada | 2026-10-06 |
| [0004](0004-alcance-de-la-tarifa-de-asesoria.md) | Alcance de la tarifa de asesoría | Aceptada | 2026-10-06 |
| [0005](0005-pago-y-agenda-de-sesiones-de-asesoria.md) | Pago y agenda de las sesiones de asesoría | Aceptada | 2026-10-06 |
| [0006](0006-zona-de-atencion-presencial.md) | Zona de atención presencial | Aceptada | 2026-10-06 |
| [0007](0007-grabaciones-y-material-de-capacitacion.md) | Grabaciones y material de capacitación | Aceptada | 2026-10-06 |
| [0008](0008-alcance-de-la-garantia.md) | Alcance de la garantía | Aceptada | 2026-10-06 |
| [0009](0009-pago-por-modulo-y-cambios-en-el-desarrollo.md) | Pago por módulo y cambios en el desarrollo a la medida | Aceptada | 2026-10-06 |
| [0010](0010-pausa-cancelacion-y-resguardo-del-codigo.md) | Pausa, cancelación y resguardo del código | Aceptada | 2026-10-06 |
| [0011](0011-propiedad-del-codigo.md) | Propiedad del código | Aceptada | 2026-10-06 |
| [0012](0012-servicios-de-terceros-a-cargo-del-cliente.md) | Servicios de terceros a cargo del cliente | Aceptada | 2026-10-06 |
| [0013](0013-conservacion-de-datos-personales.md) | Conservación de datos personales y datos bancarios | Aceptada | 2026-10-06 |
| [0014](0014-modulo-en-desarrollo-al-pausar-o-cancelar.md) | Módulo en desarrollo al pausar o cancelar | Aceptada | 2026-10-06 |
| [0015](0015-precio-y-pago-de-paginas-web-estaticas.md) | Precio y pago de las páginas web estáticas | Superada por ADR-0017 | 2026-10-27 |
| [0016](0016-codigo-fuente-de-paginas-web-estaticas.md) | Código fuente de las páginas web estáticas | Superada por ADR-0018 | 2026-10-27 |
| [0017](0017-precio-pago-y-promociones-de-paginas-web-estaticas.md) | Precio, pago y promociones de las páginas web estáticas | Propuesta | 2026-10-28 |
| [0018](0018-codigo-fuente-de-paginas-web-estaticas-y-promociones.md) | Código fuente de las páginas web estáticas y de los proyectos con promoción | Propuesta | 2026-10-28 |

## Pendientes

Decisiones ya tomadas que todavía no tienen ADR (están registradas solo en el
PR que las implementó):

- Internacionalización con diccionarios tipados y español como idioma por
  defecto (PR #10, PR #12).
- Hosting en Firebase con despliegue de vista previa por PR y producción al
  mergear a `main`.

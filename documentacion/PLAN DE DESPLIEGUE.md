# Plan Estratégico de Despliegue CONNEXA y Apagado Progresivo de SGM en DIARCO

---

## 1. Marco Estratégico y Diagnóstico del Estado de Madurez Tecnológica

### Contexto Estratégico

El proceso de modernización tecnológica en DIARCO contempla la sustitución progresiva del sistema legacy SGM mediante la implantación de la plataforma Core Retail de nueva generación CONNEXA. Esta iniciativa constituye un imperativo estratégico clave para mitigar la obsolescencia técnica, garantizar la continuidad operacional en toda la red de sucursales y Centros de Distribución (CD), y dotar al negocio de una arquitectura distribuida de alta disponibilidad. Modernizar las funciones operativas primarias bajo la gobernanza de datos en tiempo real de CONNEXA optimiza los flujos logísticos y comerciales, asegurando la escalabilidad necesaria para absorber el crecimiento futuro de la compañía sin incrementar la deuda técnica.

### Evaluación de Madurez Funcional

El diagnóstico del estado del proyecto a octubre de 2026 evidencia una asimetría estructural en los niveles de madurez entre dominios. La infraestructura transaccional de soporte comercial y la logística primaria presentan un consolidado nivel de avance, mientras que las capacidades analíticas de gestión, costeo valorizado y motores de precios avanzados continúan en fase de desarrollo o análisis.

|Macro Dominio|Capacidad / Módulo Sub-Dominio|Porcentaje de Avance Promedio|Estado Operativo Dominante|
|---|---|---|---|
|**Operación Comercial (Core)**|Catálogo & Organización|**90%**|En validación|
|**Operación Comercial (Core)**|Surtido & Reglas de Comercialización|**90%**|En validación|
|**Operación Comercial (Core)**|Pricing & Acuerdos Comerciales|**80%**|En validación|
|**Operación Comercial (Core)**|Abastecimiento Inteligente|**100%**|Completado|
|**Operación Comercial (Core)**|Generación OC FULL CONNEXA|**80%**|En validación|
|**Operación Comercial (Core)**|Gestión de Márgenes y Precios|**10% - 20%**|En desarrollo / En Análisis|
|**Operación Comercial (Core)**|Control Comercial (NEXA)|**70%**|En desarrollo / En Análisis|
|**Operación Comercial (Core)**|Costeo, Kardex Valorizado e Interfases SAP|**20% - 30%**|En desarrollo / En Análisis|
|**Operación Logística**|Stock Inteligente|**100%**|Completado|
|**Operación Logística**|Planificación de la Distribución (VKM / SGM)|**80%**|En validación / En Testing|
|**Operación Logística**|Ejecución Logística|**100%**|Completado|
|**Operación Logística**|Inventarios Rotativos en Sucursal|**80% - 90%**|En validación|
|**Operación Logística**|Recepción de Mercaderías en Sucursal|**90% - 100%**|Completado / En validación|
|**Operación Logística**|Optimización Distribución (TMS / WMS VECTA)|**40% - 80%**|En validación / En desarrollo / No Iniciado|
|**Control y Gestión del Negocio**|Observabilidad Operaciones (Técnico)|**100%**|Completado|
|**Control y Gestión del Negocio**|KPIs & Analítica (NEXA)|**80%**|En Testing|
|**Control y Gestión del Negocio**|Agenda Operativa|**0%**|No Iniciado|
|**Control y Gestión del Negocio**|Integración de Datos (BRIDGE / SAP / PUEBLUM)|**0%**|No Iniciado|

### Análisis de Impacto ("So What?")

La alta madurez en el núcleo transaccional —con módulos críticos al **100% ("Completado")** como Abastecimiento Inteligente, Stock Inteligente y Ejecución Logística, sumados a componentes esenciales entre el **80% y 90% ("En validación")** como Catálogo, Surtido, Recepción y Generación de OC FULL— demuestra que la operación primaria de las sucursales está técnicamente lista para independizarse de SGM. Las capacidades rezagadas (Kardex valorizado central, simulador de márgenes y analítica avanzada) actúan como capas de post-procesamiento financiero y de BI que no bloquean la ejecución física de las compras, el almacenamiento ni la venta en tienda. Por tanto, es inviable postergar el despliegue del Core operacional, siendo la estrategia óptima activar el go-live del Bloque 1 y diferir la integración analítica/financiera hacia el Bloque 2.

Conexión Progresiva

A partir de la solvencia observada en la infraestructura operativa base, se procede a formalizar la arquitectura táctica de despliegue correspondiente al Bloque 1.

---

## 2. Bloque 1: Despliegue Prioritario, Inversión de Interfaces y Cutover Operacional (Hito Target: 07/11/2026)

Contexto Estratégico

El Bloque 1 concentra el abanico funcional necesario para otorgar total autonomía operativa a las sucursales y centros de distribución de DIARCO. Alcanzar el go-live fijado para el **07/11/2026** implica transferir la gobernanza primaria del dato a CONNEXA en procesos de catálogo, surtido, órdenes de compra, gestión de stock y recepción. Esta independencia operacional reduce la exposición a fallas del sistema heredado y consolida un modelo operativo estandarizado a nivel nacional.

### 2.1. Reimplementación y Estabilización de Módulos en Validación y Completados

La ejecución del Bloque 1 requiere cerrar las ventanas de validación técnica e integrar los componentes finalizados bajo el control estricto de células de trabajo especializadas:

|Dominio / Módulo|Funcionalidad|Avance (%)|Prioridad|Fecha Objetivo|Responsable Asignado|
|---|---|---|---|---|---|
|**Comercial / Catálogo & Org.**|ABM Artículos, Sucursales, Clasificación, EAN, Proveedores|90%|Crítica / Alta|15/09/2026 - 20/09/2026|`Zeetrex-Team2`|
|**Comercial / Surtido & Reglas**|Cluster Básicos, Segmentación, Estados Venta/Compra, Formas Abastecimiento, Transferencias|90%|Crítica / Alta / Media|10/09/2026 - 20/09/2026|`Zeetrex-Team2`|
|**Comercial / Pricing & Acuerdos**|Precios Compra, Condiciones Proveedor, Acuerdos, Bonificaciones, Exhibiciones, Campañas|80%|Crítica / Media|05/10/2026 - 30/10/2026|`Zeetrex - CTSO` / `Zeetrex-Team2`|
|**Comercial / Abastecimiento**|Forecast, Comprador Sugerido, Compra Directa Ágil, Generación OC vía SGM|100%|Crítica|30/06/2026|`Zeetrex - CTSO`|
|**Comercial / Generación OC FULL**|Valorización de OC, Reglas Proveedor/Comprador, Envíos EDI/Mail/Portal, Aprobación OC, Piloto Proveedores|80%|Crítica / Alta|25/09/2026 - 30/10/2026|`Zeetrex - CTSO` / `DIARCO`|
|**Logística / Stock Inteligente**|Stock por Sucursal, CD, Comprometido y Neto Disponible|100%|Alta|15/09/2026|`DIARCO`|
|**Logística / Planif. Distribución**|Cálculo de Necesidades (80% En validación)|80%|Crítica|10/09/2026|`GP-Imp Cliente`|
|**Logística / Planif. Distribución**|Consolidación y Planificación Distribución (Agenda Viajes)|80%|Crítica / Alta|15/09/2026|`Zeetrex-Team1`|
|**Logística / Planif. Distribución**|Publicación VKM Órdenes de Trabajo (80% En Testing)|80%|Alta|20/09/2026|`VALKIMIA`|
|**Logística / Planif. Distribución**|Seguimiento de Distribución (80% En Testing)|80%|Alta|30/09/2026|`Zeetrex-Team1`|
|**Logística / Ejecución Logística**|Recepción Mercadería, Ajustes Stock, Devolución Proveedor, Transferencias|100%|Alta / Media|30/06/2026|`DIARCO`|
|**Logística / Inventarios Rotativos**|Mapeo Sucursales (100%), Planificación, Toma PDA, Conteos, Diferencias, Desvíos, Ajustes, Auditoría, Regularización|80% - 90%|Crítica / Alta|30/07/2026|`DIARCO` / `GP-Imp Cliente`|
|**Logística / Recepción Sucursal**|Recepción CD/Proveedor, Validación OC, Registro Diferencias, Confirmación Stock, Devoluciones por Vencimiento|90% - 100%|Crítica / Alta|30/06/2026 - 30/09/2026|`DIARCO` / `GP-Imp Cliente`|

### 2.2. Plan de Capacitación y Preparación Operativa

El despliegue en campo exige garantizar la idoneidad operativa mediante tres programas de habilitación estructurados:

1. **Gestión de Inventarios Rotativos mediante Colectores PDA**
    - **Alcance Funcional:** Ejecución de conteos ciegos y planificados mediante colectores PDA, registro de conteo original, cálculo automático de diferencias, generación de alertas por desvíos y emisión de movimientos de regularización con aprobación de auditoría.
    - **Perfil Impactado:** Auditores de sucursal, jefes de depósito, inventariadores y gerentes de local.
    - **Criterio de Readiness:** Cobertura del 100% del personal operativo capacitado y resolución satisfactoria de 3 ciclos simulados de inventario rotativo sin inconsistencias de lectura en PDA (módulo al 80%-90% en validación).
2. **Recepción de Mercaderías y Control de Entradas en Sucursal**
    - **Alcance Funcional:** Confirmación de ingresos desde CD por transferencia y desde proveedores por OC directa; validación documental en tiempo real contra registros de compra; registro de mermas y diferencias de recepción; y procesamiento de devoluciones por vencimiento o mal estado.
    - **Perfil Impactado:** Recepcionistas de mercadería, supervisores de depósito y jefes de recepción.
    - **Criterio de Readiness:** Certificación en el flujo de validación electrónica de OC y registro fluido de devoluciones, manteniendo cero discrepancias en las pruebas de confirmación de stock (módulo al 90%-100% completado/en validación).
3. **Emisión, Valorización y Aprobación Descentralizada de Orden de Compra (OC FULL CONNEXA)**
    - **Alcance Funcional:** Parametrización del Comprador Inteligente, aplicación de reglas por proveedor/comprador, valorización automática mediante acuerdos comerciales y bonificaciones, y transmisión de documentos comerciales a través de EDI, Mail y Portales (GS1/PUEBLUM).
    - **Perfil Impactado:** Equipo de Compradores Centrales, Gestores de Abastecimiento y Administración Comercial.
    - **Criterio de Readiness:** Emisión exitosa de OC en el ambiente de piloto con proveedores, demostrando la correcta aplicación de acuerdos de precio y la correcta transmisión EDI (módulo al 80% en validación).

### 2.3. Arquitectura de Inversión de Interfaces y Cutover Operacional

La estrategia de coexistencia se fundamenta en un patrón de **Inversión de Interfaces**, posicionando a CONNEXA como la única fuente de verdad (_Master_) y degradando a SGM al rol de sistema dependiente (_Slave_).

```
[ Capa Maestra: CONNEXA Core ]
       │
       ├─ (Sincronización Unidireccional de Maestros y Precios)
       ▼
[ Plataforma BRIDGE Integration ]
       │
       ├─ (Distribución a Cajas / Puntos de Venta local)
       ├─ (Réplica de lectura temporal hacia SGM Legacy)
       ▼
[ Capa Esclava: SGM Legacy ] ─── (Lecturas de consulta/Cierres históricos)
       ▲
       └─ (Corte de Escritura en Sucursales efectivo 01/11/2026)
```

- **Flujo Integrado de Datos durante Coexistencia:**
    1. _Gobernanza Maestra:_ Los maestros de Catálogo, Surtido y Listas de Precios se crean y modifican exclusivamente en CONNEXA.
    2. _Distribución Hacia Abajo:_ CONNEXA replica estos datos vía la capa de integración **BRIDGE** hacia las bases locales de las sucursales (POS) y hacia SGM.
    3. _Retorno Transaccional:_ Las ventas ejecutadas en los POS locales fluyen a través de BRIDGE para actualizar los saldos de stock centralizado en CONNEXA. En paralelo, para garantizar la retrocompatibilidad durante la transición, se utiliza el componente _"Envío temporal de información a SGM"_ (Logística 2.5, ítem 35: **80% En Análisis**, fecha objetivo **30/09/2026**, asignado a `GP-Imp Cliente`), asegurando que la contabilidad histórica y los reportes de SGM sigan alimentándose de forma pasiva.
    4. _Aislamiento Legacy:_ Se activa la capacidad _"Corte futuro de envío a SGM"_ (Logística 2.5, ítem 36: **0% En desarrollo**, fecha objetivo **01/11/2026**, asignado a `DIARCO`), revocando permanentemente los permisos de escritura directa de las sucursales sobre las bases de datos de SGM.
- **Ventana de Cutover Operacional (Go-Live 07/11/2026):**
    1. **T-15 Días (23/10/2026):** Congelamiento definitivo (_Data Freeze_) de configuraciones de catálogos y acuerdos comerciales en SGM. Cierre de la ventana de homologación técnica para módulos al 80%-90%.
    2. **T-7 Días (31/10/2026):** Activación del motor de inversión de interfaces BRIDGE en modo unidireccional (CONNEXA $\rightarrow$ SGM). Validaciones de coherencia en réplicas de datos maestros.
    3. **T-2 Días (05/11/2026):** Desactivación total de los módulos de emisión de OC y recepción de mercadería en SGM. Bloqueo de terminales legacy.
    4. **T-1 Día (06/11/2026):** Ejecución del proceso de migración de saldos finales de stock por sucursal y CD. Conciliación de tablas de inventario en CONNEXA.
    5. **Go-Live Hito Target (07/11/2026):** Apertura de operaciones con CONNEXA como Core comercial y logístico primario en toda la red de DIARCO.

Conexión Progresiva

Con la puesta en marcha del Bloque 1 y el aislamiento exitoso de las operaciones transaccionales en sucursal, se habilita la hoja de ruta del Bloque 2 para la absorción de los componentes analíticos y de costeo.

---

## 3. Bloque 2: Absorción Progresiva, Integraciones Remanentes y Gestión de Terceros

Contexto Estratégico

El Bloque 2 organiza la desconexión definitiva de SGM mediante la absorción gradual de las capacidades complejas que no fueron requeridas para el arranque operativo inicial. Postergar la migración del motor de costeo valorizado, la simulación de márgenes y la analítica ejecutiva permite mitigar riesgos financieros y fiscales, asegurando que CONNEXA asuma estas funciones tras una estricta fase de prueba y conciliación de saldos contables.

### 3.1. Plan de Absorción de Funcionalidades en Análisis, Desarrollo y Testing

El siguiente cronograma establece el mapa de ruta para los módulos actualmente en fases iniciales (0% al 80%), ordenados según su ventana de liberación programada entre el cuarto trimestre de 2026 y el primer cuatrimestre de 2027:

|Módulo / Capacidad|Estado Actual|Avance (%)|Fecha Objetivo|Observaciones de Dependencia y Responsable|
|---|---|---|---|---|
|**Bases Unificadas y Estructura Márgenes**|En desarrollo|20%|10/10/2026 - 20/10/2026|Depende de Precios y Acuerdos. Asignado a `Zeetrex - CTSO`.|
|**Calendario y Estrategias Comerciales**|En Análisis|0%|01/02/2027|Planificación promocional avanzada. Asignado a `Zeetrex - CTSO`.|
|**Simulación de Márgenes y Adm. Precios**|En Análisis|20%|01/02/2027 - 02/01/2027|SGM posee módulo propio transitorio. Asignado a `Zeetrex - CTSO`.|
|**Control Comercial NEXA (Ventas/Rentabilidad)**|En desarrollo|80%|01/03/2027|Cuadros de mando comercial. Asignado a `Zeetrex - BI`.|
|**Performance Proveedor y Competencia**|En desarrollo / En Análisis|20% - 80%|01/03/2027|Performance evaluada mediante **METABASE** (80%). Competencia mantenida en SGM (20%). `Zeetrex - BI`.|
|**Panel iPad Ejecución Directiva**|En desarrollo|80%|01/01/2027|Visualización ejecutiva consolidada. Asignado a `Zeetrex - BI`.|
|**Gestión Operativa Precios (Hito 10)**|En desarrollo / No Iniciado|0% - 5%|30/01/2027|Precedido por 1.5. Incluye API consulta, Motor de Publicación y BRIDGE.|
|**Gestión Operativa Ofertas (Hito 11)**|No Iniciado|0%|28/02/2027|Precedido por 1.7. Incluye Catálogo, Calendario y Motor de Ofertas.|
|**Kardex Valorizado, Costos y Cierre Diario**|En desarrollo|30%|01/02/2027|Kardex central, 3 perspectivas costo y cierre diario valorizado. `Zeetrex - CTSO`.|
|**Conciliación Compras e Interfaz SAP**|En Análisis / No Iniciado|0% - 20%|01/02/2027|Integración contable/fiscal directa con SAP. Asignado a `Zeetrex - CTSO`.|
|**TMS - Motor Optimización & Agenda Viajes**|En validación|80%|01/01/2027 - 01/03/2027|Implementado sobre VKM Actual. Asignado a `Zeetrex-Team1` / `VALKIMIA`.|
|**TMS - Publicación y Sincronización**|En desarrollo|60%|01/03/2027|**Bloqueante Técnico:** Requiere desarrollo por parte de contraparte `VALKIMIA`.|
|**TMS - Seguimiento Integrado**|No Iniciado|0%|01/04/2027|Trazabilidad end-to-end de entregas.|
|**WMS VECTA 3PL (Nuevo)**|En desarrollo|0%|01/02/2027|Gestión avanzada de depósitos de terceros. Asignado a `Zeetrex - VECTA`.|
|**KPIs & Analítica (Ventas, Stock, Abastec.)**|En Testing|80%|01/02/2027|Cuadros de gestión analítica de operaciones.|
|**Agenda Operativa (Tareas, Alertas, Workflow)**|No Iniciado|0%|01/03/2027|Motor de orquestación de tareas en tienda.|

### 3.2. Gestión del Remanente Legacy, Integraciones Externas y Análisis de Riesgo

Un hallazgo crítico derivado del diagnóstico técnico es que la totalidad de las interfaces de integración de datos en tiempo real asignadas al equipo **Zeetrex-CTSO** (sección 3.4 del estado de avance) registran a la fecha un **0% de avance ("No Iniciado")**, a pesar de contar con una fecha objetivo fijada al **30/09/2026**:

- **Cuello de Botella Operativo Identificado:**
    - _Cierres de Tienda BRIDGE (0%):_ Riesgo de pérdida de sincronización contable de cierres de caja al momento del go-live del Bloque 1.
    - _Ventas Diarias x Sucursal (0%):_ Riesgo en la reposición continua por imposibilidad de descontar ventas diarias del stock centralizado.
    - _Publicación de Precios y Ofertas en BRIDGE (0%):_ Riesgo de desacople entre los precios aprobados en CONNEXA y las balanzas/POS de sucursal.
    - _Portal de Proveedores PUEBLUM (0%):_ Impedimento para la recepción digital de facturas y documentos de embarque.
    - _Interfaz SAP (0%):_ Paralización de la contabilización del costo de mercadería vendida (CMV) e ingreso de facturas de compra.
- **Medidas Tácticas de Mitigación Estratégica:** Dado que estas interfaces son indispensables para el período de coexistencia previo al cutover del 07/11/2026, la Dirección de Transformación Digital ordena la reasignación inmediata de recursos de desarrollo en la célula `Zeetrex-CTSO`, declarando estas 5 integraciones en estado de **Máxima Prioridad de Sprint** con entregas semanales de testing entre el 15/10/2026 y el 30/10/2026.

```
Integraciones Críticas (Zeetrex-CTSO - 0% Avance) ──► Reasignación de Sprints ──► Validación Pre-Cutover
 ├── Cierres de Tienda BRIDGE                         (15/10/2026 - 30/10/2026)      (Target: 01/11/2026)
 ├── Ventas Diarias x Sucursal
 ├── Publicación Precios/Ofertas BRIDGE
 ├── Portal Proveedores PUEBLUM
 └── Interfaz Contable SAP
```

Conexión Progresiva

La gestión rigurosa de estos riesgos de desarrollo requiere enmarcar la relación entre las células técnicas e IT DIARCO bajo una gobernanza institucional estricta.

---

## 4. Gobernanza de Transición, Ruta Crítica y Política de Freeze

Contexto Estratégico

El control de la coexistencia entre la plataforma emergente CONNEXA y el sistema legacy SGM exige una estructura de gobierno de TI rígida. La alineación transversal entre las células especializadas de desarrollo, los proveedores de soluciones y la estructura de sistemas de DIARCO es la única garantía para mitigar desviaciones en el camino crítico y evitar costos no presupuestados durante la migración.

### 4.1. Pasos Críticos para el Compromiso Institucional con IT DIARCO

Para formalizar la transferencia de responsabilidades operativas y garantizar el involucramiento de IT DIARCO, se instrumenta el siguiente esquema de tres pasos:

1. **Definición y Firma de Acuerdos de Nivel de Servicio (SLA) de Interfaces:**
    - Establecimiento formal de parámetros de disponibilidad ($>99.5\%$), tiempos máximos de latencia de sincronización ($<5$ segundos en BRIDGE) y límites de encolamiento de mensajes para las tablas de integración gestionadas por `Zeetrex-CTSO`.
2. **Protocolo Unificado de Validación de Contingencias y Failover:**
    - Formalización del manual de procedimientos operativos ante caídas de enlace entre sucursales y el Core CONNEXA. Definición del modelo de contingencia offline en puntos de venta y los mecanismos de resincronización automatizada post-restablecimiento.
3. **Homologación de Infraestructura y Capacidad Operativa:**
    - Validación formal por parte de IT DIARCO de la capacidad de procesamiento del ambiente de producción (completada al 100% en el módulo de Observabilidad: estado de procesos, errores de interfaces y auditoría), garantizando la ejecución de procesos batch nocturnos para el cierre valorizado.

### 4.2. Camino Crítico de Alineación de Equipos y Responsabilidades

La matriz de gobernanza asigna la responsabilidad primaria de los hitos del camino crítico entre los equipos intervinientes, estableciendo las fechas límite para la absorción total de funciones y el apagado definitivo de SGM:

|Macro Dominio / Área|Célula Responsable Primaria|Entregable Crítico Integrado|Fecha Límite Crítica|
|---|---|---|---|
|**Catálogo, Surtido y Reglas**|`Zeetrex-Team2`|Estabilización total de ABM, Clusters y Reglas|20/09/2026|
|**Planificación de Distribución**|`Zeetrex-Team1` / `VALKIMIA`|Publicación de Órdenes de Trabajo y Seguimiento VKM|30/09/2026|
|**Operación e Inventario Sucursal**|`GP-Imp Cliente` / `DIARCO`|Despliegue PDA, Recepción y Corte de envío a SGM|01/11/2026|
|**Core Operacional Go-Live**|`DIARCO` / `Zeetrex - CTSO`|Cutover y entrada en producción Bloque 1|**07/11/2026**|
|**Integraciones, BRIDGE y SAP**|`Zeetrex - CTSO`|Salida a producción de Cierres, Ventas, PUEBLUM y SAP|01/02/2027|
|**Control Comercial y KPIs**|`Zeetrex - BI`|Tableros de Rentabilidad, METABASE e iPad Directivo|01/03/2027|
|**Logística Avanzada y WMS**|`Zeetrex - VECTA`|Despliegue de WMS VECTA 3PL y TMS Integrado|01/04/2027|

### 4.3. Política de Congelamiento (Freeze) de Requerimientos Legacy SGM

Con el fin de evitar la dispersión de horas de desarrollo y mitigar riesgos de desincronización durante la ventana de coexistencia, se dicta la Política Normativa de Freeze sobre el sistema SGM:

- **Prohibición Explícita de Desarrollos Evolutivos:** Queda estrictamente congelado el código fuente y el modelo de datos de SGM. Se prohíbe la aprobación de nuevos requerimientos, cambios de formato en reportes existentes o modificaciones en la lógica de negocio del sistema legacy.
- **Criterios Estrictos de Excepción:** Únicamente se tramitarán solicitudes de cambio sobre SGM cuando se cumpla alguna de las siguientes condiciones:
    1. Fallas operativas críticas (_Showstoppers_) que paralicen la venta en cajas o la recepción física en depósitos, sin alternativa de resolución desde CONNEXA.
    2. Impositivos o normativos de carácter legal y de cumplimiento obligatorio promulgados por entes gubernamentales.
- **Procedimiento de Aprobación de Emergencia:** Toda excepción deberá ser presentada mediante un Ticket de Excepción de Arquitectura, requiriendo la evaluación de impacto técnico en un plazo máximo de 48 horas y la firma manuscrita de aprobación tripartita entre el Director de Transformación Digital, el Líder Técnico de **Zeetrex-CTSO** y el Gerente de IT **DIARCO**. Cualquier modificación no autorizada resultará en la suspensión inmediata de las interfaces de sincronización del módulo afectado.

---
# DESPLIEGUE
**Informe Estratégico de Despliegue** que documenta formalmente la estrategia de transición en dos bloques, el plan de capacitación, la inversión de integraciones y las políticas de congelamiento para DIARCO.

A continuación, presento la estructura estratégica detallada para articular estos hitos de entrega con el equipo de IT de DIARCO:

---

## 1. Estructura Estratégica de los 2 Bloques de Entrega

**Bloque 1: Hito de Entrega al 07/11/2026 (Go-Live & Operación Primaria en CONNEXA)**

- **Alcance Funcional (Módulos en Validación y Completados):**
    - **Comercial & Catálogo:** ABM de artículos, estructura comercial de sucursales, clasificación, códigos EAN y alta de proveedores.
    - **Surtido & Reglas:** Clusters de surtido, segmentación de sucursales, reglas de estados de venta/compra y formas de abastecimiento.
    - **Pricing & Acuerdos:** Listas de precios de compra, condiciones de proveedor, acuerdos comerciales, bonificaciones y campañas.
    - **Abastecimiento e Historias de OC:** Forecast, Comprador Inteligente, Compra Directa, así como la generación y aprobación de OC desde CONNEXA con valorización por acuerdos.
    - **Operación Logística & Sucursales:** Cálculo de necesidades, consolidación y agenda de viajes de distribución; mapeo, toma con PDA, recuentos e informes de desvíos para inventarios rotativos; 
    - **Recepción en Sucursales:** Recepción con PDA o con Pantalla WEB, recepción en sucursales desde CD/proveedor y control de diferencias.
    - **Observabilidad:** Monitoreo técnico de estados de procesos y auditoría de interfaces.
- **Estrategia de Inversión de Integraciones (Cutover Transitorio):**
    - CONNEXA pasa a ser el **sistema primario y fuente de la verdad** para estas operaciones.
    - Se activan conectores de salida para "dar vuelta" las integraciones: CONNEXA enviará de manera continua las actualizaciones (movimientos, recepciones, órdenes) hacia SGM.
    - SGM operará como un **receptor pasivo de datos** únicamente para mantener sincronizados los procesos que aún no migren.

---

**Bloque 2: Absorción de la Funcionalidad Remanente de SGM**

- **Alcance Funcional (Módulos en Análisis, Desarrollo y Testing):**
    - **Márgenes y Precios Avanzados:** Base unificada de costo neto comercial, estructura de márgenes, simulación y administración de precios.
    - **Control Comercial (NEXA) & BI:** Reportes de ventas por producto, rentabilidad, performance de comprador/proveedor y panel para dirección.
    - **Costeo y Conciliación:** Kardex valorizado central, las tres perspectivas de costo, cierre diario valorizado, conciliación de compras e integración con SAP.
    - **Logística Avanzada:** Optimización TMS, agenda de viajes avanzada y WMS VECTA 3PL.
    - **Control & Agendas:** KPIs analíticos (ventas, stock, abastecimiento), alertas y workflows operativos.
- **Desconexión y Apagado Definitivo de SGM (Dependencias de Terceros):**
    - La desactivación final de SGM estará condicionada a la entrega de las integraciones con proveedores externos: **BRIDGE** (cierres de tienda, ventas diarias y publicación de precios/ofertas en cajas), **SAP** (costeo/contabilidad) y el **Portal de Proveedores (PUEBLUM)**.

---

## 2. Pasos Críticos para Coordinar e Involucrar a IT DIARCO

3. **Matriz de Homologación y Firma de UAT (Pruebas de Aceptación de Usuario):**
    - Establecer un calendario de validación obligatoria donde los líderes usuarios de DIARCO firmen las funcionalidades del Bloque 1 antes del 30/10.
4. **Plan de Capacitación y Gestión del Cambio (Change Management):**
    - Capacitar al personal operativo (compradores, jefes de depósito y personal de sucursal) en el uso exclusivo de CONNEXA para las funciones operativas del Bloque 1.
5. **Cutover Técnico y Reorientación de Interfaces:**
    - Definir una ventana de mantenimiento previa al 07/11 para ejecutar la carga inicial de deltas, habilitar los conectores CONNEXA ➔ SGM y verificar la consistencia de datos.
6. **Acuerdo de Niveles de Servicio (SLA) y Mesa de Ayuda de Transición:**
    - Crear un canal de soporte unificado Zeetrex-IT DIARCO durante las primeras 3 semanas post go-live para resolver incidencias sin retornar a la operación manual en SGM.

---

## 3. Camino Crítico, Alineación del Equipo y Congelamiento Legacy

- **Política de Congelamiento (Legacy Freeze en SGM):**
    - **Inmovilizar formalmente SGM:** Prohibir el desarrollo de nuevos requerimientos o mejoras evolutivas en SGM. Toda nueva necesidad de negocio deberá construirse e incorporarse únicamente en la hoja de ruta de CONNEXA.
    - Mantener SGM en modo **mantenimiento estricto** (solo corrección de fallas críticas bloqueantes).
- **Camino Crítico de Alineación del Equipo:**
    1. **Inmediato (Zeetrex - DIARCO):** Completar el 100% de las pruebas y la inversión de interfaces del Bloque 1.
    2. **Coordinación con Proveedores Externos:** Exigir compromisos de entrega formal a los equipos de **BRIDGE**, **Valkimia** y **SAP/PUEBLUM** para evitar cuellos de botella en la fase del Bloque 2.
    3. **Reuniones Semanales de Control de Hitos:** Evaluar el avance de desarrollo del Bloque 2 en paralelo mientras se estabiliza la operación del Bloque 1.
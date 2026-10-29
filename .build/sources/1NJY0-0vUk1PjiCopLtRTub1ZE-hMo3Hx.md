**Fecha:** 22 de octubre de 2026, 9:30 h.  
**Participantes:** Eduardo Ettlin, Stefano Mugetti y Matías Ochoa.  
**Objetivo:** recuperar las funcionalidades existentes de CONNEXA y dejar disponible la toma de inventario, priorizando la continuidad operativa de DIARCO.

**Aclaración de fecha:** indicaron “lunes 26/11”, pero, por la fecha de la reunión y las referencias de la conversación, se interpreta que el compromiso corresponde al **lunes 26 de octubre de 2026, a las 8:00 h**. El 26 de noviembre cae jueves.

### Estado de avances

|Frente|Avances informados en la reunión|Pendientes y bloqueos|
|---|---|---|
|**Recepciones y ajustes de stock**|Informaron pruebas de recepciones y ajustes en Mercado Central y Barrio. También probaron ajustes de alta y baja con aprobación directa.|Completar la validación con flujo de autorización y precisar la cobertura de pruebas en mayoristas.|
|**Decomisos y devoluciones**|Informaron que las operaciones se generan desde CONNEXA y se visualizan en las tablas de destino.|Cerrar el circuito en SGM: verificar procesamiento, remitos y numeración. Stefano necesita recuperar el acceso a un entorno donde pueda ejecutar SGM.|
|**Sincronización de OC y transferencias**|Confirmaron que el servidor del proceso de sincronización sobrevivió al incidente.|Habilitar la conectividad mediante el nuevo túnel y comprobar la actualización efectiva en CONNEXA. La existencia del servidor no acredita que el circuito esté restablecido.|
|**Toma de inventario**|Informaron que la funcionalidad está disponible en la versión hexagonal, tanto en test como en producción, y que los mapas están actualizados. Disponen de importación de la base de stock, conteos, resolución de diferencias y reporte de cierre exportable a Excel.|Completar una prueba operativa en DIARCO con PDA, mapas y QR. Verificar la generación de la base desde SGM y el procedimiento para aplicar el resultado del inventario.|
|**Diseño de ubicaciones**|Mostraron mejoras para representar racks, módulos y niveles de distintas alturas, incluyendo posiciones superiores de almacenamiento.|Publicar la versión estable y comprobar que conserve las ubicaciones existentes. La importación desde CAD quedó como una mejora todavía incompleta.|
|**Maestros e integración con SGM**|Iniciaron el análisis de equivalencias y cuentan con scripts y documentación de referencia. Mantienen la extracción diaria hacia Diarco Data.|Validar con Hernán las tablas, campos, procedimientos y reglas de escritura. Las actualizaciones de maestros desde los procesos de Eduardo hacia CONNEXA permanecen desactivadas.|
|**Órdenes de compra desde CONNEXA**|Informaron antecedentes de generación de OC hacia SGM y definieron la necesidad de publicar después de la autorización en CONNEXA.|Confirmar el circuito completo: valorización, pendientes, estado de publicación y envío por SGM mediante EDI o correo. La modalidad técnica sigue abierta.|

### Compromisos para el lunes 26/10 a primera hora

La prioridad acordada fue **resolver primero inventario y recuperar las funcionalidades anteriores**. La integración completa de maestros y el nuevo circuito de compras requieren definiciones posteriores.

Los responsables se indican según las intervenciones de la reunión; donde no hubo una asignación expresa, se señalan como coordinación propuesta.

|Compromiso|Responsable / coordinación|Resultado esperado para la revisión|
|---|---|---|
|**Recuperar el acceso a SGM para completar pruebas.**|Eduardo: gestión con Jorge Borja / infraestructura DIARCO. Stefano: validación del acceso.|Entorno accesible y posibilidad de ejecutar el circuito de test.|
|**Completar las pruebas de decomisos y devoluciones.**|Stefano.|Verificación de punta a punta, incluyendo remitos y numeración en SGM. Si el acceso sigue bloqueado, informar los casos pendientes.|
|**Validar ajustes con flujo de autorización.**|Stefano y Matías.|Confirmación de que la aprobación dispara correctamente la integración, además del camino de aprobación directa ya probado.|
|**Restablecer y verificar la sincronización de OC y transferencias.**|Stefano e infraestructura DIARCO.|Conectividad habilitada y evidencia de actualización de órdenes y pendientes.|
|**Dejar disponible la toma de inventario en la versión hexagonal.**|Matías; coordinación operativa propuesta con Pablo y DIARCO.|Circuito disponible y prueba con PDA, mapas y QR; identificación de cualquier restricción por formato de sucursal.|
|**Publicar las mejoras estables de ubicaciones.**|Matías.|Versión desplegada, con verificación de conservación de ubicaciones y compatibilidad con el inventario. Apuntaron a completarlo el viernes 23/10.|
|**Precisar la entrada y salida del inventario.**|Coordinación propuesta: Stefano, Matías y referentes de inventario / SGM.|Confirmar cómo obtienen la base de stock, qué archivo genera CONNEXA y cómo aplican el resultado en SGM. La integración directa no se consideró requisito para comenzar a contar.|
|**Informar la disponibilidad y las restricciones a Guillermo y Pablo.**|Eduardo, con información del equipo técnico.|Comunicación concreta sobre lo probado, lo disponible y lo pendiente para organizar el uso operativo.|
|**Regularizar los accesos de test comprometidos.**|Equipo técnico; asignación individual por confirmar.|Enlace y credenciales habilitados para los destinatarios previstos.|

### Condiciones para dar por cerrado el compromiso

Para la revisión del lunes, deberían presentar evidencia de que pueden:

- **Realizar una toma de inventario:** cargar la base, contar, resolver diferencias, cerrar y exportar el resultado.
- **Conservar la correspondencia entre mapas, ubicaciones y QR**, comprobada con una PDA en DIARCO.
- **Completar los movimientos recuperados en SGM**, distinguiendo los casos con aprobación directa de los que requieren autorización.
- **Consultar OC y pendientes actualizados**, una vez restablecida la sincronización.
- **Identificar los bloqueos restantes**, con responsable y siguiente acción.

La disponibilidad de la toma de inventario debe distinguirse de la actualización posterior del stock en SGM: pueden contar y obtener el archivo de resultados, pero todavía necesitan confirmar el mecanismo de aplicación y sus controles.

### Definiciones para la siguiente etapa

Para el **martes 27/10**, plantearon coordinar una reunión de aproximadamente una hora y media con Hernán y preparar previamente un documento de trabajo. Deberían resolver:

|Tema|Definición requerida|
|---|---|
|**Mantenimiento de maestros**|Qué datos administrarán en CONNEXA, cómo los publicarán en SGM y qué procedimientos existentes conviene reutilizar.|
|**Publicación de OC**|Qué tablas y estados deben completar, cómo valorizarán y cómo dejarán las órdenes aptas para recibir y enviar.|
|**Convivencia con SGM**|Cómo reconocerán las órdenes originadas en CONNEXA y mantendrán sincronizadas las recepciones realizadas en cualquiera de los sistemas.|
|**Pendientes y vencimientos**|Cómo respetarán el estado de cabecera para evitar que órdenes cerradas o vencidas sigan reduciendo las necesidades de reposición.|
|**Valkimia**|Disponibilidad de API o alternativa de intercambio por archivos para transferencias y despachos.|

Las fechas mencionadas para comenzar a usar Comprador Inteligente a fines de octubre y ampliar su utilización en noviembre fueron **objetivos tentativos**, sujetos a completar la interfaz con SGM.

**Evaluación:** el principal avance es que inventario fue informado como disponible y los pendientes parecen concentrarse en validación operativa, publicación de mejoras y accesos. Sin embargo, todavía no corresponde declarar recuperado el conjunto de funcionalidades. Para el lunes, conviene priorizar un circuito de inventario probado y movimientos verificados en SGM, acompañados por una lista explícita de excepciones; eso permitirá comunicar una disponibilidad concreta y organizar su utilización.

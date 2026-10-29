# CONNEXA — Matriz de Requerimientos Funcionales

**Módulo:** Listas de Precios de Compra de Proveedores Versión 1.0 — Documento de trabajo para validación funcional y técnica.

A partir de la minuta de reunión del 13 de octubre de 2026, organizo los requerimientos en una matriz que permita al equipo de DIARCO y Zeetrex validar el alcance, identificar decisiones pendientes y convertir los acuerdos en funcionalidades desarrollables y verificables.

La matriz distingue entre lo tratado en la reunión y las propuestas que todavía requieren definición. En particular, considero prioritario resolver la diferencia entre el costo neto de la orden de compra y el costo neto estadístico, porque afecta tanto la administración de listas como los acuerdos comerciales, la comparación de costos y los procesos posteriores de compras y precios de venta.

Preparé la matriz en Excel, con 37 requerimientos funcionales y 8 decisiones pendientes de validación.

Matriz de Requerimientos Funcionales — CONNEXA v1.0

Excel editable · 2 hojas · Prioridades, criterios de aceptación y dependencias

Descargar matriz de requerimientos

## Estructura de la matriz

Los requerimientos están agrupados en los siguientes procesos:

|Proceso|Alcance|
|---|---|
|Administración de listas|Listas globales, regionales, sucursales, vigencias e históricos|
|Importación|Plantillas Excel, validaciones y carga de precios|
|Impuestos|Estructura fiscal del artículo y jurisdicciones|
|Descuentos y reglas|Descuentos en OC, bonificaciones, escalas y condiciones|
|Cálculo de costos|Costo neto OC y costo neto estadístico|
|Aprobaciones|Roles, estados, autorizaciones y auditoría|
|Comparación|Diferencias entre listas, costos y acuerdos|
|Compras excepcionales|Costos especiales sin alterar listas generales|
|Integraciones|Relación con compras y precios de venta|

## Requerimientos críticos para validar primero

Considero que hay cinco definiciones que conviene cerrar antes de avanzar con el desarrollo:

1. Precedencia de listas: cómo resolver coincidencias entre una lista global, una de grupo y una específica de sucursal.
    
2. Cálculo de costos: fórmula precisa del costo neto OC y del costo neto estadístico.
    
3. Bonificaciones: cuáles afectan el costo de mercadería y cuáles deben administrarse separadamente.
    
4. Reglas comerciales: cómo calcular descuentos en cascada, aditivos y condicionados por volumen.
    
5. Vigencia y actualización: cuándo entra en efecto un nuevo costo y cómo impacta en las órdenes de compra.
    

La planilla diferencia los requerimientos demostrados o tratados en la reunión de las propuestas técnicas y decisiones todavía pendientes. De esta manera, no se presentan como acuerdos definitivos cuestiones que aún deben validarse.

Próximo paso recomendado: realizar una reunión de validación funcional con DIARCO, recorrer los requerimientos críticos y cerrar las decisiones pendientes. Con esa base podremos preparar la Especificación Funcional Detallada (EFD), incluyendo pantallas, reglas de negocio, cálculos, casos de prueba y criterios de aceptación para el equipo de desarrollo.

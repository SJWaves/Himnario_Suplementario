# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.1.1] - 2026-01-26

### ✨ Añadido (New Features)

- **Logos institucionales**: Logo_Himnario en pantalla principal y Logo_Iglesia en sección "Acerca de - Nuestra Iglesia"
- **Reinicio automático**: El input del modal de búsqueda se reinicia al cerrar la ventana

### 🎨 Mejorado (Improvements)

- **Texto justificado**: Letra de himnos y textos de "Acerca de" con alineación justificada para mejor legibilidad
- **Diseño del numpad**: Botones estilo iPhone con bordes grises, degradados suaves y sombras sutiles
- **Feedback visual**: Los botones del numpad se iluminan en dorado (#C9A958) al presionarlos
- **Espaciado mejorado**: Pantalla de inicio mejor centrada verticalmente con espaciado responsive
- **Padding inferior aumentado**: pb-32 (128px) en todas las pantallas con scroll para evitar que barras de navegación oculten contenido
- **Logo más grande**: Tamaño del logo incrementado en pantalla principal para mejor visibilidad
- **Persistencia de datos**: Cambio definitivo a localStorage para guardar configuraciones permanentemente (favoritos, fuente, tamaño, modo de color)

### 🔧 Configuración (Configuration)

- **GitHub Pages**: Configurado base path `/Himnario_Suplementario/` para deployment correcto
- **Assets dinámicos**: Rutas de audio y logos con `import.meta.env.BASE_URL` para funcionar en cualquier entorno
- **GitHub Actions**: Workflow automatizado para build y deploy en cada push a master
- **Storage adapter**: Sistema de almacenamiento unificado usando localStorage para web y app
- **CNAME**: Configuración de dominio personalizado para GitHub Pages

### 🐛 Corregido (Bug Fixes)

- Rutas de audio corregidas para funcionar en GitHub Pages
- Rutas de logos actualizadas con base path correcto
- Error de tipeo en padding del modal (`p-49` → `p-4`) que causaba desplazamiento
- Espaciado excesivo en parte superior de la pantalla principal eliminado
- Contenido cortado por barra de navegación del navegador en móviles (Brave, Chrome, Safari)
- Logo sin fondo actualizado para mejor integración visual

## [1.1.0] - 2026-01-24

### ✨ Añadido (New Features)

- **Formato de cursiva para coro**: El coro del himno #8 ahora se muestra en cursiva para destacarlo
- Soporte completo para Capacitor y plataforma Android
- Sección "Acerca de" con información detallada de la iglesia, himnario y desarrollo
- Enlace directo al canal de YouTube de ICB Fusagasugá
- Funcionalidad de compartir letra completa de himnos con referencias bíblicas
- Pausa automática de audio al minimizar la app o cambiar de pestaña
- Soporte para botón de atrás y gestos de navegación en Android

### 🎨 Mejorado (Improvements)

- Diseño del panel de búsqueda por número completamente renovado
- Selector de fuentes cambiado a dropdown elegante con vista previa en tiempo real
- Pantalla de inicio ampliada con elementos más grandes y visibles
- Título de la app ahora en letra cursiva
- Reproductor de audio minimalista con barra de progreso superior
- Colores del reproductor invertidos (dorado en fondo, blanco en controles)
- Interfaz completamente responsive optimizada para todos los tamaños de pantalla
- Vista previa de ajustes actualizada con texto relevante del himno #8

### 🐛 Corregido (Bug Fixes)

- Formato del logo corregido de SVG a PNG para visualización correcta
- Zoom y movimientos táctiles no deseados deshabilitados en dispositivos móviles
- Logo ahora visible tanto en HomeScreen como en AppBar
- Botones duplicados eliminados en panel de búsqueda por número
- Problemas de responsive con tamaños de letra grandes del sistema

## [1.0.0] - 2026-01-24

### ✨ Características Principales (Major Update)

- Himnario digital completo con 10 himnos
- Búsqueda por número y por nombre
- Reproductor de audio integrado
- Sistema de favoritos
- Ajustes personalizables (fuente, tamaño, modo de color)
- Soporte para Android con navegación nativa
- Prevención de zoom y movimientos táctiles no deseados

### 🎨 Nuevas Características (New Features)

- **Búsqueda inteligente**: Panel de búsqueda por número con diseño elegante
- **Reproductor mejorado**: Barra de progreso superior con controles intuitivos
- **Compartir letra**: Funcionalidad para compartir himnos vía WhatsApp y otras apps
- **Sistema de fuentes**: 6 tipos de fuentes disponibles con vista previa
- **Modos de color**: Luz, Noche y Sepia para mejor lectura
- **Pantalla "Acerca de"**: Información de la iglesia, himnario y desarrollador
- **Canal de YouTube**: Enlace directo al canal de la iglesia

### 🐛 Correcciones (Bug Fixes & Patches)

- Corrección del logo PNG en lugar de SVG
- Pausado automático de audio al salir de la app
- Soporte para botón de atrás de Android
- Prevención de zoom no deseado
- Ajustes responsive en todos los componentes
- Corrección de errores de TypeScript

---

## Formato de Versionamiento

Este proyecto usa [Semantic Versioning](https://semver.org/lang/es/):

- **MAJOR** (X.0.0): Cambios incompatibles con versiones anteriores
- **MINOR** (0.X.0): Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH** (0.0.X): Correcciones de errores y mejoras menores

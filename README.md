# Himnario Suplementario - ICB Fusagasugá

[![Version](https://img.shields.io/badge/version-1.1.1-blue.svg)](https://github.com/SJWaves/Himnario_Suplementario)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](LICENSE)

Aplicación móvil híbrida (Web + Android/iOS) que contiene el himnario suplementario de la Iglesia Cristiana Bíblica de Fusagasugá. Desarrollada con tecnologías modernas para proporcionar una experiencia nativa tanto en navegadores web como en dispositivos móviles.

## 📖 Acerca del Proyecto

Este proyecto es una aplicación digital del **Himnario Suplementario** utilizado por la congregación de la **Iglesia Cristiana Bíblica de Fusagasugá**. La aplicación permite acceder a los himnos y cantos congregacionales de manera fácil y rápida, tanto desde la web como desde dispositivos móviles nativos.

### 🎵 Características Principales

- **📱 Interfaz Nativa**: Experiencia móvil optimizada para Android e iOS
- **🔍 Búsqueda Avanzada**: Buscar himnos por número o nombre
- **🎵 Reproducción de Audio**: Escuchar himnos con controles de reproducción
- **💾 Persistencia Local**: Configuraciones guardadas permanentemente
- **🌙 Diseño Moderno**: Interfaz intuitiva con tema oscuro/claro
- **📖 Visualización Óptima**: Texto justificado y legible en móviles
- **⚡ Rendimiento**: Aplicación rápida y responsiva

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Ionic React** - Componentes UI móviles

### Móvil Nativo
- **Capacitor 8** - Framework para aplicaciones híbridas
- **Android Studio** - Desarrollo Android
- **Xcode** - Desarrollo iOS (futuro)

### Desarrollo
- **ESLint** - Linting de código
- **Git** - Control de versiones
- **GitHub Pages** - Despliegue web
- **Ionic Appflow** - CI/CD para móviles

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Git**
- **Android Studio** (para desarrollo Android)
- **Java JDK 11+** (para Android)

### Para Desarrollo Android
```bash
# Instalar Android SDK y configurar variables de entorno
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/SJWaves/Himnario_Suplementario.git
cd Himnario_Suplementario
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Capacitor

```bash
# Sincronizar con plataformas móviles
npx cap sync
```

### 4. Configurar Android (Opcional)

```bash
# Abrir proyecto en Android Studio
npm run cap:android
```

## 💻 Uso de la Aplicación

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de Producción

```bash
# Crear build optimizado
npm run build

# Vista previa del build
npm run preview
```

### Despliegue Móvil

```bash
# Sincronizar y abrir Android Studio
npm run cap:android

# Solo sincronizar cambios
npm run cap:sync
```

## 📱 Funcionalidades de la App

### 🏠 Pantalla Principal
- Logo de la iglesia y himnario
- Navegación intuitiva a todas las secciones

### 🔍 Búsqueda por Número
- Teclado numérico estilo iPhone
- Búsqueda rápida de himnos por número
- Reset automático al cerrar modal

### 🔤 Búsqueda por Nombre
- Búsqueda de texto para encontrar himnos
- Resultados en tiempo real

### 🎵 Reproductor de Audio
- Controles de reproducción (play/pause/stop)
- Indicador de progreso
- Soporte para archivos MP3/MP4

### ❤️ Favoritos
- Guardar himnos favoritos
- Acceso rápido a himnos preferidos

### ⚙️ Configuración
- Ajustes de la aplicación
- Persistencia de preferencias

### ℹ️ Acerca de
- Información de la iglesia
- Créditos y versión de la app

## 🔧 Desarrollo

### Estructura del Proyecto

```
Himnario_Suplementario/
├── android/                 # Proyecto Android nativo
├── ios/                     # Proyecto iOS nativo (futuro)
├── public/                  # Assets estáticos
│   ├── audio/              # Archivos de audio de himnos
│   └── ...                 # Logos e imágenes
├── src/
│   ├── app/
│   │   ├── components/     # Componentes React
│   │   ├── lib/           # Utilidades (assets.ts)
│   │   └── ...
│   ├── data/              # Datos de himnos
│   └── styles/            # Estilos CSS
├── capacitor.config.json   # Configuración Capacitor
├── vite.config.ts         # Configuración Vite
└── package.json           # Dependencias y scripts
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Vista previa del build
npm run cap:sync     # Sincronizar con plataformas móviles
npm run cap:android  # Abrir Android Studio
```

### Gestión de Assets

Los assets (imágenes y audio) se gestionan a través del helper `getAssetUrl()` en `src/app/lib/assets.ts`, que automáticamente detecta si la app está corriendo en un entorno nativo (Android/iOS) o web, y ajusta las rutas correspondientes.

## 🚀 Despliegue

### Web (GitHub Pages)

La aplicación se despliega automáticamente en GitHub Pages en la ruta `/Himnario_Suplementario/`.

### Android (Google Play)

1. **Ionic Appflow**: El CI/CD se configura en Ionic Appflow
2. **Build**: Genera APK y AAB automáticamente
3. **Distribución**: Subir a Google Play Console

### Configuración de Rutas

- **Desarrollo**: `http://localhost:5173/`
- **GitHub Pages**: `https://sjwaves.github.io/Himnario_Suplementario/`
- **Android**: `file:///android_asset/public/index.html`

## 🤝 Contribución

Este proyecto es mantenido por la comunidad de la **Iglesia Cristiana Bíblica de Fusagasugá**.

### Para Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Guías de Contribución

- Mantener la consistencia del código
- Usar TypeScript para nuevo código
- Seguir las convenciones de nomenclatura
- Actualizar la documentación cuando sea necesario

## 📄 Licencia

Este proyecto es de uso exclusivo de la **Iglesia Cristiana Bíblica de Fusagasugá** y no tiene licencia pública.

## 🙏 Agradecimientos

- **Iglesia Cristiana Bíblica de Fusagasugá** - Por el contenido y apoyo
- **Comunidad de Desarrollo** - Por las tecnologías y herramientas utilizadas
- **Contribuidores** - Por el mantenimiento y mejoras del proyecto

## 📞 Contacto

Para preguntas o soporte técnico:

- **Desarrollador**: Sara
- **Email**: ciberespacio3000@proton.me
- **GitHub**: [SJWaves](https://github.com/SJWaves)

---

**¡Que esta herramienta sirva para exaltar el nombre de nuestro Señor Jesucristo!** 🙌</content>
<parameter name="filePath">/home/juls/Documentos/Himnario_Suplementario/README.md
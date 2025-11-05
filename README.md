# Portfolio Personal 🚀

Este es mi portfolio personal desarrollado con Svelte, TypeScript y Vite. Una aplicación web interactiva y responsiva que muestra mis proyectos y habilidades.

## 🛠️ Tecnologías Utilizadas

- **Svelte** - Framework frontend
- **TypeScript** - Lenguaje de programación
- **Vite** - Build tool y dev server
- **Particles.js** - Efectos visuales interactivos

## 🚀 Características

- Diseño moderno y responsivo
- Animaciones fluidas
- Fondo interactivo con particles.js
- Modo oscuro/claro
- Secciones para proyectos, habilidades y contacto

## 🏃‍♂️ Cómo ejecutar el proyecto

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/portfolio.git
```

2. Instala las dependencias

```bash
pnpm install
```

3. Inicia el servidor de desarrollo

```bash
pnpm dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 🛠️ Comandos disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm preview` - Previsualiza la build de producción localmente

## 📁 Estructura del Proyecto

```
/
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes Svelte
│   ├── assets/      # Imágenes y recursos
│   ├── lib/         # Utilidades y helpers
│   ├── App.svelte   # Componente principal
│   └── main.ts      # Punto de entrada
└── ...
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from "svelte/store";
export default writable(0);
```

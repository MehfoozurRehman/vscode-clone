# VSCode Clone

A desktop code editor prototype built with Electron. It recreates the layout of Visual Studio Code: a frameless window with a custom title bar, a menu bar, a file explorer, a CodeMirror editor and a website preview pane.

## The problem

An editor is a large application, but its shell (window chrome, explorer, editor area and status bar) is a manageable project for learning how a desktop app fits together. This repo builds that shell in Electron with plain HTML, CSS and JavaScript.

## What it does

- **Custom window**: a frameless Electron window (minimum 1000 x 700) with minimise, maximise and close buttons drawn in `src/index.html`.
- **Menu bar**: a menu bar with a Quit entry and an About entry.
- **File explorer**: an "opened files" section and an "opened folder" section, with buttons for new file, new folder and sync. These are interface elements only.
- **Code editor**: CodeMirror 5 with the Dracula theme, the Sublime keymap, line numbers and line wrapping. The page loads syntax modes for JavaScript, XML, CSS, Sass and PHP.
- **New file**: `createNewFile` in `src/js/functions.js` creates an editor buffer and an entry in the file list. `deleteFile` clears both.
- **Website preview**: a side-bar button toggles a preview pane (`src/js/screen-control-btn.js`).

## How it's built

- **Shell**: Electron 11.5 with Electron Forge 6 for packaging (`maker-squirrel`, `maker-zip`, `maker-deb`, `maker-rpm`).
- **Front end**: HTML, CSS and plain JavaScript. jQuery and a menu plugin are vendored in `src/js/libraries/`, and CodeMirror is vendored in `src/js/code_mirror/`.
- **Main process**: `src/index.js` creates one `BrowserWindow` and loads `src/index.html`.
- **Decision 1: no bundler.** Each library is loaded with a `<script>` tag in dependency order. This keeps the project small and easy to follow.
- **Decision 2: custom chrome.** The window is frameless, so the title bar and window controls are HTML elements instead of the operating system's.

## Running it locally

```bash
npm install
npm start
```

To build installers, run `npm run package` (app bundle) or `npm run make` (platform installers). Output goes to `out/`.

## What I learned / what I'd do next

- The main process sets `nodeIntegration: true` and `enableRemoteModule: true`, which gives the page full Node access. Move to `contextIsolation` with a preload script that exposes only the needed functions, and remove the remote module.
- Electron 11 is well out of support. Upgrading will also need changes to the packaging setup.
- File explorer and save are not connected to disk. `src/index.js` imports `ipcMain` but registers no handlers. Add IPC handlers for open, read and save.
- Multiple tabs are not implemented. `createNewFile` always creates a single buffer.
- The `lint` script is a placeholder. Add ESLint and a test setup.
- The `.vscode/settings.json` file contains a `tasks` key with `runOn: folderOpen`. VS Code does not read that key from settings, so remove it.

## Author

Mehfooz-ur-Rehman

## License

MIT

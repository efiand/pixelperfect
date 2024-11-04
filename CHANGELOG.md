# pixelperfect changelog

Undescribed versions are deprecated.

## 1.9.2

- Webpack -> vite.

## 1.8.1

- Remove ended slash from page name.

## 1.8.0

- Vue-component is available separately from the nuxt-module.
- Reinitialization prevented.
- Removed сomponent resolve warning.

## 1.7.1

- Nuxt component `PixelperfectTool` added.

## 1.6.0

- `index.d.ts` added.

## 1.5.0

- The options as the arguments of `loadPixelperfect` are supported.

## 1.4.2

- Updating dependency versions to eliminate vulnerabilities.

## 1.4.0

- Bugfix: `Uncaught TypeError: this._offsets[this._page][this._currentBreakpoint] is undefined`.
- Bugfix: save scroll position if DOM element had fixed position on start.

## 1.1.4

- Change the implementation of offsets to from `transform` to `background-position`. This will avoid scrollbars when associating a layer with an arbitrary selector inside the `body`.

## 1.1.2

- Add custom selector for `.pixelperfect` element (`window.pixelperfect.selector`). Default value is `body` (for compatibility with previous versions).
- Change default desktop breakpoint from 1260 to 1240.
- Add this changelog.

## 1.0.9

- Bugfix (problem of `--pp-img` value in Mac OS).

## 1.0.8

- Added modifier keystroke check.
- Code refactoring by [@fyvfyv](https://github.com/fyvfyv) to make it more prettier and simple.

## 1.0.6

- Support `R` key: clear offsets in LocalStorage.
- Update npm packages.

## 1.0.5

- Support `I` key: toggle invert mode of image layer (default – apply invert filter).
- Document hotkeys in `README.md` and some same text edits.
- Add npm shield to `README.md`.

## 1.0.0

- First edition.

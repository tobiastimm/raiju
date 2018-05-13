# Raijū

[![Version](https://vsmarketplacebadge.apphb.com/version/TobiasTimm.raiju.svg)](https://marketplace.visualstudio.com/items?itemName=TobiasTimm.raiju)
[![Downloads](https://img.shields.io/vscode-marketplace/d/TobiasTimm.raiju.svg)](https://marketplace.visualstudio.com/items?itemName=TobiasTimm.raiju)

**Raijū** is a vscode theme inspired by [Ariake Dark](https://marketplace.visualstudio.com/items?itemName=wart.ariake-dark) and [Subliminal](https://marketplace.visualstudio.com/items?itemName=gaearon.subliminal).

**Note: Pull requests for additional languages are welcome.**

![Screenshot](screenshot.png)

_Icon theme: [ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu), Font: [Dank Mono](https://dank.sh)_

## Minimalistic Look & Feel

For a more minimalistic look I recommend these settings

```js
{
    "editor.folding": false,
    "editor.hideCursorInOverviewRuler": true,
    "editor.lineNumbers": "off",
    "editor.matchBrackets": false,
    "editor.minimap.enabled": false,
    "editor.occurrencesHighlight": false,
    "editor.overviewRulerBorder": false,
    "editor.renderIndentGuides": false,
    "editor.renderLineHighlight": "none",
    "editor.scrollbar.horizontal": "hidden",
    "explorer.openEditors.visible": 0,
    "window.zoomLevel": 0,
    "workbench.activityBar.visible": false,
    "workbench.colorTheme": "Raijū",
    "workbench.iconTheme": "ayu",
    "workbench.editor.showIcons": false,
    "workbench.statusBar.visible": false,
}
```

Since I have turned off features like the default matching brackets highlighting, I recommend you to install [this extension](https://marketplace.visualstudio.com/items?itemName=rafamel.subtle-brackets).

To remove the icon buttons on panels you need to install [this extension](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) with the following custom CSS:

```css
.title-actions
  > .monaco-toolbar
  > .monaco-action-bar
  > .actions-container
  > .action-item
  > .action-label.icon.explorer-action {
  display: none !important;
}
.editor-actions > .monaco-toolbar > .monaco-action-bar {
  display: none !important;
}
```

You can remove the warning from the title bar with [this extension](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-no-unsupported).

To use a special font for the UI you need to add addtional custom css rules

```css
.monaco-shell {
  font-family: "Dank Mono";
}

// For better readability
.monaco-workbench
  > .activitybar
  > .content
  .monaco-action-bar
  .badge
  .badge-content {
  top: 17px !important;
}
```

## License

MIT

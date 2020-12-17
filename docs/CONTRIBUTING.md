# CONTRIBUTING

## Requirements

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)

## IDE

Wir empfehlen [VS Code](https://code.visualstudio.com/), aber jede andere Art von IDE ist natürlich möglich.

### VS Code einrichten

1. [VS Code](https://code.visualstudio.com/) installieren
2. Empfohlene Extensions installieren:
   1. [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
   2. [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
   3. [Auto Close Tag](https://i.imgur.com/aeqWZDF.png)
   4. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   5. [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
   6. [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
   7. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   8. [Intellisense for CSS classes](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
   9. [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
   10. [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
   11. [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
   12. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
   13. [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
   14. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

## Setup

    git clone https://github.com/adrian-cerdeira/kampf-der-diener.git;
    cd ./kampf-der-diener;
    npm ci;

## Build

    npm run build; // dev
    npm run build-prod; // prod

## Start

    npm start

## Test Lint

    npm run lint

## Test Performance

    npm run lighthouse

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

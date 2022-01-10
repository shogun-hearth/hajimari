[![Netlify Status](https://api.netlify.com/api/v1/badges/97b786c8-8342-4962-bd67-c95cd0ae7d9c/deploy-status)](https://app.netlify.com/sites/hearth-kokoro/deploys)

# Hajimari | Hearth Design System

[Figma](https://www.figma.com/file/M7Z0RpYEQszVSWhAFs2yAe/Design-System?node-id=38%3A2) | [Notion](https://www.notion.so/gethearth/Kokoro-Hearth-s-Design-System-f925086806a24898897786379cbc17dc) |

###  **hajimari (始まり)**  _/.n/_ -- beginnings

> Made with ❤️ with `npm` and `react typescript`, leveraging `MUI` for building and styling components. We use [`rollup`](https://rollupjs.org/guide/en/) to bundle our JS modules.

> This repository maintains the component library for Hearth's web (and eventually mobile) app and overall style guide. Hajimari follows atomic design system guidelines.

---

## Getting started

<br />

[![Material UI v5](https://img.shields.io/badge/Material%20UI-v5-blue?style=for-the-badge)]((https://mui.com/))
[![React v17](https://img.shields.io/badge/react-v17-brightgreen?style=for-the-badge)]((https://reactjs.org/))
[![@emotion/react](https://img.shields.io/badge/%40emotion%2Freact-v11-ff69b4?style=for-the-badge)]((https://emotion.sh/docs/introduction))
[![TypeScript v4+](https://img.shields.io/badge/TypeScript-v4%2B-dodgerblue?style=for-the-badge)](https://www.typescriptlang.org/)

Clone this repository with `SSH`:
```bash
git clone git@github.com:shogun-hearth/hajimari.git
```

Install dependencies:
```bash
npm install
```

---

## Workflows

The recommended workflow is to work within Storybook to build a component:

```bash
npm run storybook
```

(This loads the stories from `./src/components`. A tab should automatically open with Storybook running, but if it doesn't, navigate to `localhost:6006`)


## Contributing Guidelines

Named exports for all components that we want to surface as a part of the npm package--this includes the component itself, as well as any interfaces or props that we would like to export as well.

Use existing component folder structures when creating new components and use the provided template [`Template.stories.mdx`]() to build a component's story.

<br />

1. **Where do new components and stories go?**  
Every new component should live within its _own folder_, where it is the default export from that folder. The story file lives within the same folder as `ComponentName.stories.mdx`. In the case of more complex documentation, we can write component stories within `ComponentName.stories.tsx`, and then use those within MDX documentation. For example, the `Card` component looks like:

```
Card
  |__Card.tsx
  |__index.ts
  |__Card.stories.tsx
  |__Card.stories.mdx
```

1. **What should a new component look like?**
Beyond exporting the actual component, we also want to export the `Props` that relate to it. Some prop requirements:
   - Reasonable names, so we someone might be able to tell what it's for right away
   - A comment above each prop describing its purpose and any other useful notes
   - When appropriate, ensure you are **extending** the existing props of a MUI component you use, so that we can forward props from MUI as well

If this component is an `Atom` or `Molecule`, it should be written using syntax that follows the [`styled()` API](https://mui.com/system/styled/#api), as this is the MUI recommended approach for "lower level" components. For larger / more complex components, we can use a combination of the `styled()` API and the `sx prop`.


1. **What should a new story look like?**

Use the provided `Template.stories.mdx` file to create new stories. What's listed is what a story should include at a minimum; more interactivity (or information) is great too!

The `title` prop determines where in the folder hierarchy a story appears: it should follow a naming convention of `Component level > Component Name > Variant`. For example:

```bash
title: 'Atoms/Button/Outlined Button'
```



4. **I need to install a new package!**  
There are two kinds of packages we could use here, which are either for using within Storybook _or_ for a component. 

   1. For Storybook, there are a good amount of libraries installed for our purposes, but we can add them pretty freely. 
   2. For the actual component library, we want to avoid importing too many external libraries--so only add one if we really, _really_ need to.

  > IMPORTANT: In **both** cases, libraries should be installed as `devDependencies` in order to avoid dependency issues later.

    ```bash
    npm i --save-dev <package name>
    ```

<br />

## Design Tokens 101

(TBA)

---

## Resources
- [Storybook](https://storybook.js.org/)
    - [Rich docs with MDX](https://storybook.js.org/blog/rich-docs-with-storybook-mdx/)
- [What is Atomic Design?](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/)
- Design system examples:
    - [Gamut (Codecademy's design system)](https://gamut.codecademy.com/?path=/docs/atoms-card--card)
    - [Storybook's Storybook](https://next--storybookjs.netlify.app/official-storybook/)

---

## Bookkeeping

### Continuous Integration

Deployed to Netlify on pushing to the `main` branch. 

### TODO / Ongoing progress

1. Converting components not written this way to be [written using the `styled()` API](https://smartdevpreneur.com/material-ui-styled-components/) that wraps emotion, which is the MUI-recommended approach.

2. Setting up Jest in order to implement some basic unit tests, at least to start.


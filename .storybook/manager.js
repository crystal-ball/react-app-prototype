import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  // --- Customize theme of Storybook to be hecka rad
  theme: create({
    base: 'dark',
    brandTitle: 'React App Prototype',
  }),
})

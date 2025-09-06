import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        width: '1.2em',
        height: '1.2em',
        'vertical-align': '-0.175rem',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup()],
})

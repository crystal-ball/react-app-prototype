import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as ComponentryTheme } from 'componentry'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

import { componentryTheme } from './theme/componentry'
import { emotionTheme } from './theme/emotion'

// ⚠️ Import styles first to ensure lower specificity than component styles
import './index.scss'
import './utils/require-icons'

import App from './components/App/App'
import configureStore from './dux/store'
import logger from './utils/logger'

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

const store = configureStore()

// Start the party 🎉
// Render all of the root application providers then application root component
render(
  <Provider store={store}>
    <ComponentryTheme.Provider value={componentryTheme}>
      <EmotionTheme theme={emotionTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EmotionTheme>
    </ComponentryTheme.Provider>
  </Provider>,
  document.getElementById('root'),
)

logger('React prototype application initialized 🎉')

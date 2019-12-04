import React from 'react'
import { Flex, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

import { Footer, Header } from '@/components/universal'

const rightContainerStyles = css`
  width: 60%;
  min-height: 100%;
`

export default function HomeScreen() {
  // Layout notes
  // Large screens ->
  //   40%/60% 2 column layout with a position sticky header
  // Small screens ->
  //   Flex column layout with title then contents
  return (
    <Flex css={rightContainerStyles} direction='column'>
      <Header />

      <Flex align='center' className='my-5'>
        <h1 className='flex-grow-1 text-center'>React Application Prototype</h1>
      </Flex>

      <Text italic mb={0} textAlign='center'>
        Prototype React application for{' '}
        <span aria-label='crystal ball' role='img'>
          🔮
        </span>
        Projects
      </Text>
      <Text italic textAlign='center'>
        v{process.env.PACKAGE_VERSION}
      </Text>

      <div className='mx-5'>
        <h4>
          <Icon id='coffee' /> Application featureset
        </h4>
        <ul>
          <li>
            JS loader setup to transpile all source in the <code>babelLoaderInclude</code>{' '}
            with the <code>babel-loader</code>
          </li>
          <li>Appropriate sourcemaps for dev vs prod builds</li>
          <li>
            Handles adding scripts to <code>index.html</code>
          </li>
          <li>Friendly errors</li>
          <li>Dev server with hot reloading</li>
          <li>Progress indicators</li>
          <li>Production optimizations including uglify and module concatenation</li>
          <li>Output directory cleaning</li>
          <li>
            Application theming with Emotion{' '}
            <span aria-label='emotion' role='img'>
              👩‍🎤
            </span>
          </li>
          <li>
            Injected <code>PUBLIC_PATH</code> for routing
          </li>
          <li>
            Auto deploy with Zeit{' '}
            <span aria-label='mindblown' role='img'>
              🤯
            </span>
          </li>
          <li>
            All the notifications in Slack{' '}
            <span aria-label='yay' role='img'>
              🎉
            </span>
          </li>
          <li>
            Visual regression testing with Percy{' '}
            <span aria-label='hedgehog' role='img'>
              🦔
            </span>
          </li>
        </ul>
      </div>

      <Footer />
    </Flex>
  )
}
HomeScreen.displayName = 'HomeScreen'

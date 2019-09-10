import React from 'react'
import { Flex, Header, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

import RadState from './RadState'
import RadToggle from './RadToggle'

import CodeClimate from '@/media/codeclimate.svg'
import Cypress from '@/media/cypress.svg'
import Renovate from '@/media/renovate.svg'
import Travis from '@/media/travis-ci.svg'
import Zeit from '@/media/zeit.svg'
import MagicImg from '@/media/karly-santiago.jpg'

const titleContainerStyles = css`
  width: 40%;

  .sticky-title {
    position: sticky;
    padding-top: 3rem;
    top: 3rem;
  }
`

const featuresContainerStyles = css`
  width: 60%;
`

const integrationsContainerStyles = css`
  .integration {
    display: flex;
    align-items: center;
    width: 75px;
    height: 75px;
    margin: 0 10px;
  }

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`

const HomeScreen = () => (
  // Layout notes
  // Large screens ->
  //   40%/60% 2 column layout with a position sticky header
  // Small screens ->
  //   Flex column layout with title then contents
  <Flex className='flex-grow-1'>
    <div className='mx-3' css={titleContainerStyles}>
      <h1 className='sticky-title font-ornamental display-1'>
        The Order
        <br />
        of the
        <br />
        Crystal Code Wizards
      </h1>
    </div>
    <div css={featuresContainerStyles}>
      <div className='hero d-flex align-items-center mb-4'>
        <img src={MagicImg} className='w-25' alt='In pursuit of magic' />
        <Header textAlign='center flex-grow-1'>React Application Prototype</Header>
      </div>

      <Text italic textAlign='center' mb={0}>
        Prototype React application for{' '}
        <span role='img' aria-label='crystal ball'>
          🔮
        </span>{' '}
        projects
      </Text>
      <Text italic textAlign='center'>
        v{process.env.PACKAGE_VERSION}
      </Text>

      <Flex>
        <div className='w-75 pl-3'>
          <RadToggle />
          <RadState />
          <h4>
            <Icon id='coffee' />
            Application featureset
          </h4>
          <ul>
            <li>
              JS loader setup to transpile all source in the{' '}
              <code>babelLoaderInclude</code> with the <code>babel-loader</code>
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
              <span role='img' aria-label='emotion'>
                👩‍🎤
              </span>
            </li>
            <li>
              Injected <code>PUBLIC_PATH</code> for routing
            </li>
            <li>
              Auto deploy with Zeit{' '}
              <span role='img' aria-label='mindblown'>
                🤯
              </span>
            </li>
            <li>
              All the notifications in Slack{' '}
              <span role='img' aria-label='yay'>
                🎉
              </span>
            </li>
          </ul>
          <h4>
            <Icon id='education' />
            Workflow integrations
            <Flex justify='center' css={integrationsContainerStyles}>
              <div className='integration'>
                <Renovate />
              </div>
              <div className='integration'>
                <CodeClimate />
              </div>
              <div className='integration'>
                <Cypress />
              </div>
              <div className='integration'>
                <Travis />
              </div>
              <div className='integration'>
                <Zeit />
              </div>
            </Flex>
          </h4>
        </div>
      </Flex>
    </div>
  </Flex>
)

export default HomeScreen

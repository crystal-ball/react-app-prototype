import React from 'react'
import { Flex } from 'componentry'

import { Footer, Header } from '@/components/universal'
import layoutClasses from '@/components/App/layouts.scss'
import ReactContents from './ReactContents.mdx'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={layoutClasses.mainSection} direction='column'>
      <Header />

      <Flex className='flex-grow-1' direction='column' px='xl'>
        <ReactContents />
      </Flex>

      <Footer />
    </Flex>
  )
}
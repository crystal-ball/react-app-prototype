import { Block, Flex, Icon, Text } from 'componentry'

import { Link } from '@/components/universal'

export default function FourOhFourScreen(): JSX.Element {
  return (
    <div className='flex-grow'>
      <Text variant='heading-2' mt='xl' align='center'>
        <Icon variant='feather' fontColor='warning' id='mood-sad-outline' /> The page you
        are looking for can&apos;t be found 😣
      </Text>
      <Flex className='mt-xl' justify='center'>
        <Block className='mx-md'>
          <Link to='/'>Introduction</Link>
        </Block>
        <Block className='mx-md'>
          <Link to='/application-stack'>Application Stack</Link>
        </Block>
      </Flex>
    </div>
  )
}

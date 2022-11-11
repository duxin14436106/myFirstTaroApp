import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Mine extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='mine'>
        <Text>Hello mine!</Text>
      </View>
    )
  }
}

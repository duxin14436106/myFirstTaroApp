import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class Cart extends Component<PropsWithChildren> {

  list = {
    name: '张三',
    sex: '男',
    address: '广东省深圳市南山区南山大道科技南路左边'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const list = this.list
    return (
      <View className='cart'>
        <View>
          {Object.keys(list).map((item, index)=>
              <View key={index}>{item}: {list[item]}</View>
          )}
        </View>
      </View>
    )
  }
}

import { Component, PropsWithChildren } from 'react'
import { View, Text, Icon } from '@tarojs/components'
import './index.scss'

export default class Search extends Component<PropsWithChildren> {


  render() {
    return (
      <View className='search-box'>
        <Icon size='18' type={"search"}></Icon>
        <Text> 搜索商品，共 10000 款好物</Text>
      </View>
    )
  }
}

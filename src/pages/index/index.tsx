import { Component, PropsWithChildren, createRef } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Search from './component/search/search'
import Banner from './component/banner/index'
import Ads from './component/Ads/index'
import {GoodList} from '../../components/index'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  indexEl = createRef()

  UNSAFE_componentWillMount () { }

  componentDidMount () {
    console.log('ref', this.indexEl.current)
  }

  componentWillUnmount () { }

  onAddToFavorites (res) {
    console.log('onAddToFavorites', res?.webviewUrl)
    return {
      title: '分享首页',
      imageUrl: 'https://demo.png',
      query: 'name=xxx'
    }
  }

  onShareAppMessage(res) {
    console.log('onShareAppMessage', res)
    return {
      title: '请转发首页',
      imageUrl: 'https://demo.png',
      query: 'name=xxx'
    }
  }

  onShareTimeline (res) {
    console.log('onShareTimeline ', res)
    return {
      title: '请转发首页',
      imageUrl: 'https://demo.png',
      query: 'name=xxx'
    }
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <ScrollView
          scrollY

        >
          <Search />
          <Banner />
          <Ads />
          <GoodList />
        </ScrollView>
      </View>
    )
  }
}

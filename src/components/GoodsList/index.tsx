import { Component, PropsWithChildren } from 'react'
import {View} from '@tarojs/components'
import './index.scss'

export default class GoodsList extends Component<PropsWithChildren>{

  goodslist = [{
    'id': Math.random(),
    'title': '编号1',
    'price': '999',
    'number': '10',
  },{
    'id': Math.random(),
    'title': '编号2',
    'price': '999',
    'number': '10',
  },{
    'id': Math.random(),
    'title': '编号3',
    'price': '999',
    'number': '10',
  },{
    'id': Math.random(),
    'title': '编号4',
    'price': '999',
    'number': '10',
  },{
    'id': Math.random(),
    'title': '编号5',
    'price': '999',
    'number': '10',
  },{
    'id': Math.random(),
    'title': '编号6',
    'price': '999',
    'number': '10',
  },{
    'id': Math.random(),
    'title': '编号7',
    'price': '999',
    'number': '10',
  }]

  render() {
    const list = this.goodslist
    return (
      <View>
        {
          list.map((i) =>
            <View key={i.id}>
              标题：{i.title},
              价格：{i.price},
              数量：{i.number}
            </View>
          )
        }
      </View>
    )
  }
}

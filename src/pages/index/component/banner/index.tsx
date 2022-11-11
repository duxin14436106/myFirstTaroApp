import { Component, PropsWithChildren } from 'react'
import {Swiper, SwiperItem, Image} from '@tarojs/components'
import './index.scss'

export default class Search extends Component<PropsWithChildren> {
  bannerJson = [{
    url: 'https://img14.360buyimg.com/babel/s590x470_jfs/t1/183788/24/29179/107408/636b6f4bE1eb6bfd4/28b051c7742688ce.jpg.avif'
  }, {
    url: 'https://img11.360buyimg.com/pop/s590x470_jfs/t1/186094/29/28365/83529/636381b5Ee0977f94/4799aa3aeb3d7225.jpg.avif'
  }, {
    url: 'https://imgcps.jd.com/ling4/100005483298/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6e6/9b0fb4ba/cr/s/q.jpg'
  }]

  render() {
    const bannerJson = this.bannerJson
    return (
      <Swiper
        className= 'box'
        autoplay
        interval={3000}
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#f85050'
        onClick={(e) => console.log(e)}
        onAnimationFinish={()=> {}}
      >
        {bannerJson.map((item, index) =>
          <SwiperItem key={index}>
            <Image className='bannerImage' src={item.url}></Image>
          </SwiperItem>
        )}
      </Swiper>
    )
  }
}

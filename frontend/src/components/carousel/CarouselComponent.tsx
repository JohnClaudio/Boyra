import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import Box from '@mui/material/Box';
import './CarouselComponent.css'

function CarouselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://i.imgur.com/b4l0qDO.png"},
    {id: 2, title: 'item #2', img:"https://i.imgur.com/7h9I4RA.png"},
    {id: 3, title: 'item #3', img:"https://i.imgur.com/u5RN5wY.png"}
   
  ])
  return (

<Carousel   className='' focusOnSelect={false} showArrows={false} isRTL={false} enableAutoPlay autoPlaySpeed={2000}>
{items.map(item => <div key={item.id}>
<img src={item.img} className="imagemCarrosel" />

</div>)}
</Carousel>

  )
}

export default CarouselComponent
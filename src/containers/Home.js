import React from 'react'

import {PokeList, DoubleBall, SingleBall, Menu} from '../components'

export default function home() {

  return (
    <div className="home">
        <DoubleBall/>
        <PokeList/>
        <div className="wrapper-down-line">
          <SingleBall/>
          <Menu/>
        </div>
    </div>
    )
}
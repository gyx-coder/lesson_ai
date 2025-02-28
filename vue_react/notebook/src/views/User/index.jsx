import React from "react"
import s from './style.module.less'
import {
  Cell, Input, Button
} from 'zarm'

const User = () => {
  return (
    <div className={s.user}>
      <div className={s.head}>
        <div className={s.info}>
          <span>昵称: admin</span>
          <span>
            <img
              style={{ width: 30, height: 30, verticalAlign: '-10px' }}
              src="//s.yezgea02.com/1616032174786/cryptocurrency.png"
              alt=""
            />
            <b>这个家伙很懒，什么都没有留下</b>
          </span>
        </div>
      </div>
    </div>
  )
}

export default User
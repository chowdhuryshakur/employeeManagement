import React from 'react'
import {Link} from 'react-router-dom'
import {LiaTimesSolid} from 'react-icons/lia'

function BotupgrateAlart({toggle, botUpgrade}) {
  return (
    <>
     <div className='bot-upgrate-alart'>
      <Link to="/pricing">
          <strong>Upgrade</strong>

          <svg className='dot-badge' viewBox="0 0 2 2" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg>

          You are currently limited to only 1 bot.

          {/* <span> → </span> */}

      </Link> 
          <LiaTimesSolid className='bot-alart-cancel-icon' onClick={() => toggle()}/>
     </div>
    </>
  )
}

export default BotupgrateAlart
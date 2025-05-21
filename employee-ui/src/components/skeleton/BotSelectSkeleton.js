import React from 'react'
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css';

function BotSelectSkeleton() {
  return (
    <>
      <div className="prompt-bot-select-container">
          <div className='select-bot-wrap'>
            <Skeleton width={100} height={10} />
            <Skeleton width={300} height={20} />
          </div>
        </div>
    </>
  )
}

export default BotSelectSkeleton
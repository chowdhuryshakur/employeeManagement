import React from 'react';
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css';

function PromptBodySkeleton() {
  return (
    <>
      <div className="chatbot-config-wrapper prompt-body-wrapper">
          {/* Configuration fields */}
          <div className="chatbot-config-fields">
            <div className="form-title">
                <Skeleton width={100} height={10} />
                <Skeleton width={300} height={20} />
            </div>
            <form>
              {/* Prompt title */}
              <div className="form-group">
                <Skeleton width={100} height={10} />
                <Skeleton width={300} height={40} />
              </div>
              {/* Prompt link */}
              <div className="form-group">
                <Skeleton width={100} height={10} />
                <Skeleton width={300} height={40} />
              </div>
              {/* Action button */}
              <div className="chatbot-action-wrap prompt-action-wrap">
                  <Skeleton width={50} height={20} />
                {/* <button type="submit" className="chatbot-action-item active">
                </button> */}
              </div>
            </form>
          </div>

          {/* List of prompts */}
          <div className="prompt-wrap-container">
            <div className="form-title">
            <Skeleton width={100} height={10} />
                <Skeleton width={300} height={30} />
            </div>
            <div className="uploaded-file-wrap prompt-wrapper">
                {// Show loading skeleton while data is being fetched
                  Array.from({ length: 5 }).map((_, index) => (
                  <div className="list-of-the-bot-item" key={index}>
                    <div className="list-bot-profile">
                      <div className="list-bot-content">
                        <Skeleton height={20} width={200} />
                        {/* <Skeleton width={150} /> */}
                      </div>
                    </div>
                    <div className="list-bot-option-wrap">
                      {/* <div className="list-span-flex">
                        <Skeleton width={20} height={20} />
                        <Skeleton width={80} />
                      </div>
                      <div className="list-span-flex">
                        <Skeleton width={20} height={20} />
                        <Skeleton width={120} />
                      </div> */}
                      <div className="list-span-flex bot-delete-icon">
                        <Skeleton width={20} height={20} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default PromptBodySkeleton
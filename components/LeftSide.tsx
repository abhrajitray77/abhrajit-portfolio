import React from 'react'

const LeftSide = () => {
  return (
    <div className="flex flex-col my-10 h-[90%] md:w-fit mx-1 md:mx-2 diag-lines">
        {/* Hello text */}
        <div className="mt-auto bg-neutral-100 px-1 lg:px-2 lg:pt-2 pt-10
        w-fit"
        style={{ writingMode: 'vertical-rl' }}>
            <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800
            border-[1px] border-neutral-900 pl-1 lg:pl-2 pr-2 lg:pr-4 py-2">
                こんにちは
            </h1>
        </div>
        
        
    </div>
  )
}

export default LeftSide
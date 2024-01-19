import React from 'react'

const RightSide = () => {
  return (
    <div className="flex flex-col my-10 h-[90%] md:w-fit mx-2 diag-lines">
    {/* Hello text */}
    <div className="mt-auto bg-neutral-100 p-2
    w-fit rotate-180"
    style={{ writingMode: 'vertical-rl' }}>
        <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800
        border-[1px] border-neutral-900 px-4 py-2 ">
            HELLO!
        </h1>
    </div>
    
    
</div>
  )
}

export default RightSide
import React from 'react'
import ThemeButton from './ThemeButton'

const RightSide = () => {
  return (
    <div className="flex flex-col h-full md:w-fit ml-2 diag-lines no-highlights">
        {/* theme switch */}
        <div className="self-center mt-6">
            <ThemeButton />
        </div>
        {/* Hello text */}
        <div className="mt-auto bg-neutral-100 px-1 lg:px-2 lg:py-2 pt-6
        w-fit"
        style={{ writingMode: 'vertical-rl' }}>
            <h3 className="text-2xl lg:text-6xl font-bold text-neutral-800
            border-[1px] border-neutral-900 pl-1 lg:pl-2 pr-2 lg:pr-4 py-2 dark:text-neutral-200">
                こんにちは
            </h3>
        </div>
    </div>
  )
}

export default RightSide
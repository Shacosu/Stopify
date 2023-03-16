import React from 'react'

export default function Loading() {
  return (
    <div className=" w-full h-[calc(100vh-24rem)]  flex justify-center ">
    <div className="flex flex-col w-full  items-center">
        <span className="font-black text-xl mb-4">Stopify</span>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-slate-300 to-slate-900 animate-spin">
            <div className="h-9 w-9 rounded-full bg-gray-200"></div>
        </div>
    </div>
</div>
  )
}

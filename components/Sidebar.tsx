'use client'

import React, { useEffect, useState } from 'react'
import { useRouter as navigationRouter } from 'next/navigation'
import links from '@/module/links'

const Sidebar = () => {

  const [windowInnerWidth, setWindowInnerWidth] = useState(0)

  const router = navigationRouter()

  // 清理backdrop
  const clearBackdrop = () => {
    // 如果畫面寬度低於1024，就要將preline產生的backdrop移除
    if (windowInnerWidth < 1280) {
      document.getElementById('close-sidebar-button')?.click()
    }
  }

  useEffect(() => {
    setWindowInnerWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setWindowInnerWidth(window.innerWidth)
    })
  }, [])

  return (
    <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 border-r pt-7 pb-10 overflow-y-auto scrollbar-y xl:block xl:translate-x-0 xl:right-auto xl:bottom-0 scrollbar-y bg-gray-800 border-gray-700 select-none">
      <div className="px-6">
        <a className="flex-none text-xl font-semibold text-white" aria-label="Demo">MEUN</a>
        <button type="button" id="close-sidebar-button" className="hidden" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
          <span className="sr-only">Close Sidebar</span>
        </button>
      </div>

      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul className="space-y-1.5">

          {links.map((link, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    router.push(link.routePath, { scroll: false })
                    clearBackdrop()
                  }}
                  className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-gray-900 text-slate-400 hover:text-slate-300"
                >
                  {link.svgIcon}
                  {link.title}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
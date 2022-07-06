import Link from 'next/link'
import React from 'react'

export type MobileHeaderItemProps = {
  href: string,
  children: React.ReactNode,
  setNavOpen: (navState: boolean) => void
}

function MobileHeaderItem({ href="", children, setNavOpen} : MobileHeaderItemProps) {
  return (
    <Link href={href}>
      <div onClick={() => setNavOpen(false)} className='cursor-pointer'>
        {children}
      </div>
    </Link>
  )
}

export default MobileHeaderItem
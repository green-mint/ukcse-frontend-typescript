import React from 'react'
import Header from "../../ui/Header/Header";

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className=''>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
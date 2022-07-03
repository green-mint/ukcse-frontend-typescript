import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  title: string;
  price: number;
  thumbnail: string;
  href: string;
}

const ProductCard = ({ thumbnail, title, href, price }: Props) => {
  return (
    <div className={`cursor-pointer group`}>
      <div className='relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square'>
        <Image src={thumbnail} layout="fill" alt={title} />
      </div>

      <div className='mt-3'>
        <Link href={href}>
          <span className="text-xl font-semibold">
            {title}
          </span>
        </Link>
      </div>

      <div>
        <span className="text-sm font-bold text-slate-800">${price}</span>
      </div>
    </div>
  )
}

export default ProductCard
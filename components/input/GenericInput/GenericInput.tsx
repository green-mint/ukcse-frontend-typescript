import React, { HTMLInputTypeAttribute } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

const GenericInput = React.forwardRef<HTMLInputElement, Props>(({ label, className, id, ...props }, ref) => {
  return (
    <div className={className}>
      <label className='block font-semibold' htmlFor={`${id}`}>{label}:</label>
      <input ref={ref} id={`${id}`} className="py-1 w-full px-2 rounded-md bg-slate-200" {...props} />
    </div>
  )
})

export default GenericInput;
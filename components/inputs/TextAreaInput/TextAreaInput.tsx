import React from 'react'
import { FieldError } from 'react-hook-form';
import { BiErrorCircle } from 'react-icons/bi';

type Props = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: FieldError;
}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, Props>(({ label, className, id, error, ...props }, ref) => {
  return (
    <div className={className}>
      <label className='block font-semibold' htmlFor={`${id}`}>{label}:</label>
      <textarea ref={ref} id={`${id}`} className="py-1.5 w-full px-2 rounded-md bg-slate-200" {...props} />
      {error && <p className="text-red-500 text-sm mt-1"> <BiErrorCircle className='mb-0.5 inline mr-1' color='red' />{error.message}</p>}
    </div>
  )
})

export default TextAreaInput;
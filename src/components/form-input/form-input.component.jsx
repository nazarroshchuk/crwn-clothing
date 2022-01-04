import React from "react";

import './form-input.styles.scss'

export const FormInput = ({ label, name, onChange, ...props}) => (
   <div className='group'>
       <input
           className='form-input'
           id={name}
           onChange={onChange}
           {...props}
       />
       {
           label &&
           <label
               className={`${props.value.length ? 'shrink' : ''} form-input-label`}
               htmlFor={name}
           >
               {label}
           </label>
       }
   </div>
)
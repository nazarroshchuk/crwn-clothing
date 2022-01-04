import React from "react";

import './form-input.styles.scss'

export const FormInput = ({ label, onChange, ...props}) => (
   <div className='group'>
       <input
           className='form-input'
           onChange={onChange}
           {...props}
           autoComplete='true'
       />
       {
           label &&
           <label
               className={`${props.value.length ? 'shrink' : ''} form-input-label`}
           >
               {label}
           </label>
       }
   </div>
)
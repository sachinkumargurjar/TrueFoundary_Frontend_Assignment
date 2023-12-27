import React, { useContext } from 'react'
import { FormContext } from '../App'

function Input(props) {
    props = props.edata
    const { updateForm } = useContext(FormContext)

    const onChange = e => {
        updateForm(props.jsonKey, e.target.value)
    }

    return (
        <input 
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            readOnly={props.immutable}
            pattern={props.pattern}
            onChange={e => onChange(e)}
            required={props.validate.required}
            style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
    )
}

export default Input
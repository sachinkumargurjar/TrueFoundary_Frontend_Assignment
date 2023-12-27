import React, { useContext, useState } from 'react'
// import './Switch.css'
import { FormContext } from '../App'
import Description from './Descriptions'

function Switch(props) {
    props = props.edata
    const { updateForm } = useContext(FormContext)
    const [on, setOn] = useState(props.validate.defaultValue)

    const onChange = e => {
        const current  = !on
        setOn(current)
        updateForm(props.jsonKey, current)
    }
    console.log("Select: ", props)

    return <div>
        <label>{props.label} </label><Description description={props.description} />

        <label class="switch">
            <input type="checkbox" onChange={e => onChange(e)} checked={on} required={props.validate.required}/>
            <span class="slider round"></span>
        </label>
    </div>
}
export default Switch
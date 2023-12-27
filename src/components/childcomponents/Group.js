import React from 'react'
import DynamicFormElement from '../uiComponents/DynamicFormElement'

function Group({ edata }) {


    return (
        <div>
            {edata.subParameters.map(subParameter => {
                const newSubParameter = {...subParameter, jsonKey: edata.jsonKey + "." + subParameter.jsonKey}
                return <DynamicFormElement edata={newSubParameter} />
            })}
        </div>
    )
}

export default Group
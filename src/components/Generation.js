import React from 'react'

export default function generation(
    // {
    // list,
    // optionDefault,
    // callback
    
// }
) {
    const genId = [1, 2, 3, 4, 5, 6, 7]

    // function renderList() {
    //     return list.map(item => (
    //         <option className="" key={item.ID} value={item.ID}>{item.Name}</option>
    //     ))
    // }
    // function selectOnChange(event) {
    //     callback(event.target.value)
    //     console.log(event.target.value)
    // }

    return (
        // <select className="input-box" onChange={selectOnChange}>
        //     <option className="option-disable" disabled selected >{optionDefault}</option>
        //     {renderList()}
        // </select>
            <select className="generation">
                {genId.map(id => (
                    <option key={id} value={id} id={id}>
                        Geração: {id}
                    </option>
                ))}
            </select>
    )
}
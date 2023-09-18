import { useState } from "react"

export function TodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") {
          return; 
        }
  
        onSubmit(newItem);
         
        setNewItem("");
      }


    return (
        <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" id="item"></label>
        <input value={newItem}
        onChange={e => setNewItem(e.target.value)} 
        type="text" id="item"/>
      </div>
      <button className="header">Add</button>
      </form>
    )
}
import React from 'react'

function RoleFilter({onFilterValueSelected}) {

  const onFilterValueChange = (event) => {
    onFilterValueSelected(event.target.value)
  }

  return (
    <div className="form-group">
      <select onChange={onFilterValueChange} id="isAdmin">
        <option value="select-user" disabled selected>Roles</option>
        <option value="admin">admin</option>
        <option value="editor">editor</option>
        <option value="user">user</option>
      </select>
    </div>
  )
}

export default RoleFilter
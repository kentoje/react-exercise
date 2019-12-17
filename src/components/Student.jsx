import React from 'react';

const Student = ({ settings: { name }, index }) => {
  const [ checkboxValue, setCheckbox ] = React.useState(false);
  const [ inputValue, setValue ] = React.useState(name);

  return (
  <li style={ index % 2 ? { color: 'red' } : { color: 'blue' } }>
    <label>
      { checkboxValue
        ? <input type="text"
                 value={ inputValue }
                 onChange={ event => setValue(event.target.value) }/>
        : <>{ inputValue }</> }
    </label>
    <input type="checkbox"
           checked={ checkboxValue ? 'checked' : '' }
           onChange={ event => setCheckbox(event.target.checked) }/>
  </li>
  )
}

export default Student;

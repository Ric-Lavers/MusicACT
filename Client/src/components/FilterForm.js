import React from 'react';

const FilterForm = ({color, array, handleClick,activeButton}) =>{

  const norm = "filter-button"
  const active = "filter-button active"
  const activeColor = {backgroundColor:color}
  const x = {}

  return(
    <form className="type-filter" action="">
      {
        array.map( (name, index)=> {
        return (<input
          onClick={ handleClick}
          key={ index }
          type="button"
          className ={ activeButton === index?active:norm}
          value={ name }
          style={ activeButton === index?activeColor:x }
          />)
      })}

    </form>
  )
}

export default FilterForm

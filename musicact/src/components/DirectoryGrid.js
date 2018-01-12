import React from 'react';
import image from '../images/second_sun.jpg';


export const DirectoryGrid = ({listing}) => {

  let backgroundImage = { backgroundImage:{image} }
  const divs = []
  for (let i = 0; i < listing.length; i++) {
    divs.push(
      <div className="testing" >

        <div className="inside-testing">
          <h1> {`${listing[i]}`} </h1>
        </div>
      </div> )
  }
  console.log(divs);
  return(
    <div className="container">
      <div className= "directory-grid">
        {divs.map( (i) =>{
          return (i)
        })}

      </div>
    </div>
  )
}

export default DirectoryGrid;

import React from 'react';
import image from '../images/second_sun.jpg';


export const DirectoryGrid = ({listing,handleHover}) => {

  let backgroundImage = { backgroundImage:{image} }
  const listings = []
  for (let i = 0; i < listing.length; i++) {
    listings.push(
      <div onHover={(event)=>handleHover(event)}className="testing" >
        <h1> {`${listing[i]}`} </h1>
        <div className="inside-testing">
        </div>
      </div> )
  }
  console.log(listings);
  return(
    <div className="container">
      <div className= "directory-grid">
        {listings.map( (i) =>{
          return (i)
        })}

      </div>
    </div>
  )
}

export default DirectoryGrid;

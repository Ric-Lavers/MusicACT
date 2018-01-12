import React from 'react';
import image from '../images/second_sun.jpg';

const colors = [
  ['#C8FF5D','#FF2D61'],
  ['#FF2D61','#E8CF3B'],
  ['#4BFF8D','#FD713E'],
  ['#E85821','#E8CF3B'],
  ['#E8CF3B','#4BFF8D']
]

export const DirectoryGrid = ({listing}) => {

  let color = ()=>{
    return colors[Math.floor(Math.random()*(colors.length) )]
  }
  let randomColor = { backgroundColor:color() }


  let backgroundImage = { backgroundImage:{image} }
  const listings = []
  for (let i = 0; i < listing.length; i++) {
    listings.push(
      <div style={ { backgroundColor:colors[i%colors.length][0] } } className="testing" >
        <h1 style={{color:colors[i%colors.length][1] }}> {`${listing[i]}`} </h1>
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

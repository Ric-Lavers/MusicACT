import React from 'react';
import image from '../images/second_sun.jpg';
import { Route, Link } from 'react-router-dom';

const colors = [
  ['#C8FF5D','#FF2D61'],
  ['#FF2D61','#E8CF3B'],
  ['#4BFF8D','#FD713E'],
  ['#E85821','#E8CF3B'],
  ['#E8CF3B','#4BFF8D']
]

export const DirectoryGrid = ({listing}) => {

  // let backgroundImage = { backgroundImage:{image} }
  const listings = []
  for (let i = 0; i < listing.length; i++) {

      listings.push(

          <div
            key={listing[i]._id}
            style={ {
              backgroundColor:colors[i%colors.length][0]
             } }
            className="testing" >

            <h1
              key={"_2"+listing[i]._id}
              style={{color:colors[i%colors.length][1] }}>
              {`${listing[i].profile.name}`}
            </h1>

            <div
              key={"_3"+listing[i]._id}
              className="inside-testing"
              style={{ backgroundImage: `url(${listing[i].profile.imageSrc? (listing[i].profile.imageSrc):
              (image)
              })` }}>
            </div>
          </div>

      )
  }

  return(
    <div className="container">
      <div className= "directory-grid">
        {listings.map( (i) =>{
          return (

              <div style={{width:"100%",height:"100%"}}>
                <Link to={ `/directory/${i.key}` }>
                  { i }
                </Link>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default DirectoryGrid;

// for random select
// let color = ()=>{
//   return colors[Math.floor(Math.random()*(colors.length) )]
// }
// let randomColor = { backgroundColor:color() }

import React from 'react'

function MusicianForm({userId}){


  return (
    <form >
      <label for="artist name"> Artist Name<br/>
        <input type="text" name="Artist Name"/>
      </label><br/>
      <label for="bio"> Bio<br/>
        <textarea name="bio" rows="8" cols="80"/>
      </label>
      <input type="submit"/>
    </form>
  )
}

export default MusicianForm;

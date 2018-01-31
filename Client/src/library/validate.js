import validator from 'validator';

function validate(name, value, errors){
    if(value.length > 0) errors[name] = 1
    if(name === "email" && validator.isEmail(value)){errors.email = 2}
    if(name === "phoneNumber" &&
                validator.isNumeric( value.replace(/\s/g, '') ) &&
                value.length > 7  ) {errors.phoneNumber = 2}
    if(name === "pointOfContact" ){errors.pointOfContact = 2}
    if(name === "name" && value.length >2 ){errors.name = 2}
    if(name === "bio" && value.length >2 ){errors.bio = 2}
    if(name === "soundcloud" && validator.contains(value,"soundcloud.com") ){errors.soundcloud = 2}
    if(name === "spotify" && validator.contains(value,"spotify.com") ){errors.spotify = 2}
    if(name === "instagram" && validator.contains(value,"instagram.com") ){errors.instagram = 2}
    if(name === "facebook" && validator.contains(value,"facebook.com") ){errors.facebook = 2}
    if(name === "youtube" && validator.contains(value,"youtube.com") ){errors.youtube = 2}
    if(name === "website"){errors.website = 2}
    if(name === "twitter" && validator.contains(value,"twitter.com") ){errors.twitter = 2}

    if(name === "soundcloudLink" && validator.contains(value,"soundcloud.com") ){errors.soundcloudLink = 2}
    if(name === "youtubeLink" && validator.contains(value,"youtube.com") ){errors.youtubeLink = 2}

    if(value.length === 0) errors[name] = 0
    return errors
  }

export default validate

<<<<<<< HEAD
### Website redesign
#### Client: MusicACT
#### address: (www.musicact.com.au)

This Node.JS API and React app is a redesign of the current MusicACT website.

Its intention is to improve the UX of the site providing users a modern experience, and build upon previous features. The previous site was built in Drupal around 2012 and has limited updating (save for blog posts around 3 times a year), in addition to the blog the other main feature is a directory that allows musicians, venues and businesses create a profile that listed on the site. Minor features include a members sign up, email confirmation, admin rights (including editing, deleting profiles, banning users), password recovery, JWT tokens, document downloads.
_____________
### Significant Packages
- React
- [React Router](https://reacttraining.com/react-router/)
- Passport
- [react-player](https://www.npmjs.com/package/react-player)

#### Package Notes
[react-player](https://www.npmjs.com/package/react-player)
- works for youtube soundcloud and more and has a number of options.
- For **soundcloud** playlists are  not supported
_____________
### Client Interviews

_____________
### Inspiration

(http://www.musicvictoria.com.au/)
(http://www.musicnsw.com/)
(http://theoperatives.com.au/artist/ (for artist profiles))
(https://bandcamp.com/ (search limiting))
(https://warp.net/ (blog page))

_____________
### User Journeys & Wireframes
##### Musicians & bands
##### Venues
##### Businesses
##### Admin

_____________
### Getting started

1. Created API folder, `create-reate-app musicact`, documents folder
1. `git init`
1. `echo "**/node_modules" > .git`
1. `echo "**/.env" >> .git`
1. [set up preprocessor for sass](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

### API

### Layout End-to-end

### Homepage

### Blog

### Profiles

### Admin

_____________
### Tests

### Bugs and Fixes

### Compatibility and Legacy browsers
- **CSS GRIDS** (https://caniuse.com/#feat=css-grid)
 CSS is a new major addition to the CSS language and 84.96% of browser use in Australia have _full_ support of the feature. From the remaining browsers without support, most cases are un-updated phone browsers ( <= Safari 10.2 for iOS ), and from IE that has partial support with prefix.
 There are certain [tactics to creating a fall back for grids](https://rachelandrew.co.uk/archives/2017/07/04/is-it-really-safe-to-start-using-css-grid-layout/) for the minority of older unsupported. Including proving the user the a differently styled layout which such as a the mobile view layout. 

- **pointer-events: none;**
  This feature works on all browsers, above IE 10. For this site there will be some aesthetic for those small number of users, but will provide no major functional problems.

_____________
### Deployment
=======

>>>>>>> kevin

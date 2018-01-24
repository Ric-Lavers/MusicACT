### Website redesign

#### Client: MusicACT

#### address: (www.musicact.com.au)

This Node.JS API and React app is a redesign of the current MusicACT website.

Its intention is to improve the UX of the site providing users a modern experience, and build upon previous features. The previous site was built in Drupal around 2012 and has limited updating (save for blog posts around 3 times a year), in addition to the blog the other main feature is a directory that allows musicians, venues and businesses create a profile that listed on the site. Minor features include a members sign up, email confirmation, admin rights (including editing, deleting profiles, banning users), password recovery, JWT tokens, document downloads.

---

### Significant Packages

#### FE

* React
* [React Router](https://reacttraining.com/react-router/)
* Passport
* [react-player](https://www.npmjs.com/package/react-player)
* [cloudinary-react](https://github.com/cloudinary/cloudinary-react)

#### BE

* [validator](https://github.com/chriso/validator.js)

#### Package Notes

[react-player](https://www.npmjs.com/package/react-player)

* works for youtube soundcloud and more and has a number of options.
* For **soundcloud** playlists are not supported
* We encounted a issue with ReactRouter as the pages could not be refreshed , the solution was to use HashRouter insteat of BrowserRouter.

---

### Client Interviews

---

### Inspiration

(http://www.musicvictoria.com.au/)
(http://www.musicnsw.com/)
(http://theoperatives.com.au/artist/ (for artist profiles))
(https://bandcamp.com/ (search limiting))
(https://warp.net/ (blog page))

---

### User Journeys & Wireframes

##### Musicians & bands

##### Venues

##### Businesses

##### Admin

---

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

followed a tutorial at (https://buttercms.com/react-blog-engine/) using **buttercms**

### Form Creates

* [cloudinary uploading ](https://css-tricks.com/image-upload-manipulation-react/)
* To create a positive user experience when creating a profile (before saving to data base), we need to consider the user journey. It may include spending time drafting a perfect biography, carefully selecting the right profile image and leaving the computer on many occasions. We can save the JSON to state and use that data to create the profile live in front of the user, however if they refresh the page all their changes will be lost. Therefore we also will need to save the profiles state to the browsers localStorage, this way it will be stored safely before calling the API to save to the database.
  [localStorage introduction guide](https://alligator.io/js/introduction-localstorage-sessionstorage/)

```js
localStorage.setItem('profile', JSON.stringify(this.state.createProfile)); //sets the profile
let profile = JSON.parse(localStorage.getItem('profile')); // retrieves profile
localStorage.clear(); //clears profile
```

### Profiles

* the JSON data holds line breaks as \n and did not import properly, so we needed to add a .replace(/\n/g, '<br />') method. **correction**( This turned out to not the right approach _instead_ simple css `white-space: pre-line;` does the same thing to better effect.)

### Admin

---

### Tests

### Bugs and Fixes

Cloudninary uploading is done simply without any security.

### Compatibility and Legacy browsers

* **CSS GRIDS** (https://caniuse.com/#feat=css-grid)
  CSS is a new major addition to the CSS language and 84.96% of browser use in Australia have _full_ support of the feature. From the remaining browsers without support, most cases are un-updated phone browsers ( <= Safari 10.2 for iOS ), and from IE that has partial support with prefix.
  There are certain [tactics to creating a fall back for grids](https://rachelandrew.co.uk/archives/2017/07/04/is-it-really-safe-to-start-using-css-grid-layout/) for the minority of older unsupported. Including proving the user the a differently styled layout which such as a the mobile view layout.

* **pointer-events: none;**
  This feature works on all browsers, above IE 10. For this site there will be some aesthetic for those small number of users, but will provide no major functional problems.

---

### Deployment

#### Netlify

Deployment has a few issues,

1. the CSS was not compiling properly on the home page due to foreign code copy and pasted form an online example.
1. The site appears to of deploy on netlify, however the link returns a _Page Not Found_ at (https://music-act.netlify.com/)

#### Heroku

Heroku deployment

1.set up config
￼

-dev.js
module.exports = {
MONGO_URI:'mongodb://<db:user>:<db:password>:@ds111478.mlab.com:11478/app-name’
}

-key.js
if (process.env.NODE_ENV === 'production') {
module.exports = require('./prod');
}else{
module.exports =require('./dev');
}

-prod.js
module.exports = {
MONGO_URI: process.env.MONGO_URI
}

2.add .gitignore to dev.js

3.modify server.js

-server.js

```
// heroku env handring the ReactRoutes and NormalRoutes
if (process.env.NODE_ENV == 'production') {
  //Express will serve up production assets
  app.use(express.static('Client/build'));
  //Express will serve up the index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
  });
}

// setup env running on heroku
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`started on port ${port}`);
});
```

4.add package.json (!server side not client side)

-add engines

```
"engines": {
    "node": "9.2.0",
    "npm": "5.5.1"
  }
```

-add script

```
  "scripts": {
    "start": "node server",
    "heroku-postbuild":
      "NPM_CONFIG_PRODUCTION=false npm install --prefix Client && npm run build --prefix Client },

note: Client is the your client side folder name
```

5.create heroku app and push

heroku login
heroku create “NAMEOFAPP”
heroku git:remote -a “NAMEOFAPP”
git add .
git commit
git push heroku master

6.add config key to heroku

Top >> Settting >> configkey
￼

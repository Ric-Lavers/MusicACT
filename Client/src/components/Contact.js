import React from 'react'


const Contact = () => {

  const handleSubmit = (event)=>{

    var request = new XMLHttpRequest();
    // POST to httpbin which returns the POST data as JSON
    request.open('POST', 'http://httpbin.org/post', /* async = */ false);


    event.preventDefault()
    const data = new FormData(event.target);
    console.log(data);
    console.log(data.get('email'));
    console.log(data.set('name', data.get('name')) )

    request.send(data);

    console.log(request.response);
  }

    return(
      <div className='Contact'>
        <h3>CONTACT MUSICACT</h3>
        <p></p>
        <form onSubmit={handleSubmit} style={{maxWidth:700}}>
          <fieldset>
            <legend>To contact MusicACT please send your message and contact details using the form below.</legend>
          <label htmlFor="name">
            Your Name:
            <input name="name" type="text"/>
          </label>
          <br/>
          <label htmlFor="email">
            EmaiL Address:
            <input name="email" type="email"/>
          </label>
          <br/>
          <label htmlFor="phone">
            Phone:
            <input name="phone" type="text"/>
          </label>
          <br/>
          <label>
            Message
            <textarea
              placeholder="Write something here"
              name="message"
              rows="10" cols="45"
              className="profile"
              />
          </label>
          <br/>
          <input type="submit"/>
          </fieldset>
        </form>
      </div>
    )
}

export default Contact;

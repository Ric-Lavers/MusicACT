module.exports = app => {
  // Index /profiles
  app.get('/profiles', (req, res) => {
    Profile.find().then(
      profiles => {
        ////returnning array
        // res.send(profiles)
        ////returnning object
        res.send({ profiles });
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  // Show /profiles/:id
  app.get('/profiles/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Profile.findById(id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send();
        }
        res.send({ todo });
      })
      .catch(e => res.status(404).send(e));
  });

  //create /profiles
  app.post('/profiles', (req, res) => {
    // console.log(req.body)
    var todo = new Profile({
      text: req.body.text
    });
    todo.save().then(
      doc => {
        res.send(doc);
        console.log(doc);
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  // Delete /profiles/:id
  app.delete('/profiles/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Profile.findByIdAndRemove(id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send();
        }
        res.send(todo);
      })
      .catch(e => res.status(404).send(e));
  });

  // Update /profiles/:id
  app.patch('/profiles/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Profile.findByIdAndUpdate(id, { $set: body }, { new: true })
      .then(todo => {
        if (!todo) {
          return res.status(404).send();
        }

        res.send({ todo });
      })
      .catch(e => {
        res.status(400).send();
      });
  });
};

const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0-zw87r.mongodb.net/note-app?retryWrites=true`;

mongoose.connect(url, { useNewUrlParser: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'Khaadafasfasfasaaaan!',
  date: new Date(),
  important: true
});

/* note.save().then(response => {
  console.log('note saved', response);
  mongoose.connection.close();
}); */

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
});

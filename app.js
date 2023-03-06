const path = require('path');

const express = require('express');
const csrf = require('csurf');

const authRoutes = require('./routes/auth.route');
const eintoryRoutes = require('./routes/eintory.route');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const db = require('./data/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use(csrf());
// app.use(addCsrfTokenMiddleware);


app.use(authRoutes)
app.use(eintoryRoutes)

db.connectTodobase()
.then(() => {
  app.listen(3000);
})
.catch((error) => {
  console.log(error.messeage)
})

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import SERVER from '../routes/schema';

//Initializations
const app = express();
connect();

//MongoDB models
import {connect} from './database';
import teacher from '../models/teacher';

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
SERVER.applyMiddleware({
  app
});
app.use('/', (req, res) => {res.json({message: 'helloWorld'});});

//Static Files
// app.use(express.static(path.join(__dirname, '../Public')));

//start the server
app.listen(app.get('port'), () => console.log('=> Server on port ' + app.get('port')));

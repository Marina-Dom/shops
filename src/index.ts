import express from 'express';
import routes from './routes/shop';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3003;

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port: ${port}.`));

import express = require('express');
import bodyparser = require('body-parser');
import cors = require('cors');

const app = express();

const portstr: string = process.env.PORT || '4001';
const port: number = parseInt(portstr);

app.use(express.static('public'));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const apiRouter = express.Router();

apiRouter.get('/test', (req: any, res: any) => {
  res.status(200).send("Works");
  res.end();
});

app.use('/', apiRouter);

app.listen(port, "0.0.0.0" , (err: Error) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});

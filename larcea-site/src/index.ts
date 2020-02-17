import express = require('express');
import bodyparser = require('body-parser');

const app = express();

const port: string = process.env.PORT || '8096';

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());


app.get('/', (req: any, res: any) => {
  res.status(200).send("hello");
});


app.listen(port, (err: Error) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});

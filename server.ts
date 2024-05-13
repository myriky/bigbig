import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3333;

var uniqueID = 1;

var makeID = (function () {
  return function () {
    return uniqueID++;
  };
})();

app.use(function (req: any, res, next) {
  req.id = makeID();
  next();
});

app.get('/', async (req: any, res: Response, next: NextFunction) => {
  const wait = Math.floor(Math.random() * 6000);

  const id = req.id;

  await new Promise((resolve) => setTimeout(resolve, wait));
  res.status(200).json({ id, wait });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

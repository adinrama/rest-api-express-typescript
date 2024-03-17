import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const port: Number = 5000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "Hello, I'm Nainnunissa" })
})

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))

import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product data')
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: {
      product: 'Sepatu Kulit Kerbau',
      price: 450000
    }
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success post product data')
  res.status(201).send({
    status: true,
    statusCode: 201,
    data: req.body
  })
})

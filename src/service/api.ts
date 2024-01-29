import express, { Request, Response } from 'express'
import { ApiFunction } from '../types/api';
import cors from 'cors'
import { Config } from '../utils/config.js'
import { testHandler } from '../logic/api/test-handler.js'

export const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

/**
 * Проверка авторизации запроса используя заголовок с ключем авторизации
 * @param req
 * @param res
 * @param next
 */
const authentication = (
	req: Request,
	res: Response,
	next: () => void
) : void => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null || token !== Config.express.secret) {
		res.sendStatus(401)
	} else {
		next()
	}
}

/**
 * Обертка роутера
 * @param {String} method - метод взаимодействия
 * @param {String} route - путь API
 * @param {Function} handler - callback функция
 * @param {Boolean} secure - требуется ли авторизация для запроса
 */
const createRouter = (
	method : string,
	route : string,
	handler: ApiFunction,
	secure: boolean = false
) : void => {

  const args = [
		route,
		...(secure ? [ authentication ] : []),
    // @ts-ignore
		(req: Request, res: Response) : void => handler({ req, res })
	]

	return app[method](...args)
}


/**
 * Router
 */
createRouter('get', '/', testHandler, true)

app.listen(Config.express.port, () => {
	console.info(`EXPRESS : API running at address http://localhost:${Config.express.port}`)
})

import { ApiFunction } from '../../types/api'

export const testHandler : ApiFunction = ({ res }) => {
	res.send('TELEGRAM_API_TEST_OK')
}

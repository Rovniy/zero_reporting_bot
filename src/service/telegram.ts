import TelegramBot from 'node-telegram-bot-api'
import { Config } from '../utils/config.js'
import { StatusHandler } from '../logic/telegram/command/status.js'
import { RegistrationHandler } from '../logic/telegram/command/registration.js'

export const bot = new TelegramBot(Config.telegram.token, {
	polling: true
})


bot.onText(/\/registration/, RegistrationHandler)
bot.onText(/\/status/, StatusHandler)


bot.on('polling_error', console.error)

import { bot } from '../../../service/telegram.js'
import TelegramBot from 'node-telegram-bot-api'

export async function RegistrationHandler(msg : TelegramBot.Message) : Promise<TelegramBot.Message> {
	const chatId = msg.chat.id

	return bot.sendMessage(chatId, 'Начинаем регистрацию...-')
}

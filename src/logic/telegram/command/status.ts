import { bot } from '../../../service/telegram.js'
import TelegramBot from 'node-telegram-bot-api'

export async function StatusHandler(msg : TelegramBot.Message) : Promise<TelegramBot.Message> {

	const chatId = msg.chat.id

	return bot.sendMessage(chatId, 'Текущий статус вот такой...')
}

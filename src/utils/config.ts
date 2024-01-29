import 'dotenv/config'

export const Config = {
	express: {
		port: process.env.API_PORT || 3000,
		secret: process.env.API_SECRET_KEY
	},
	telegram: {
		token: process.env.TELEGRAM_BOT_TOKEN
	},
	firebase: {
		service: {
			project_id: process.env.FIREBASE_PROJECT_ID,
			private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
			private_key: process.env.FIREBASE_PRIVATE_KEY,
			client_id: process.env.FIREBASE_CLIENT_ID,
		}
	}
}

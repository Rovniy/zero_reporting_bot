import firebaseAdmin from 'firebase-admin'
import { Config } from '../utils/config.js'

const credentials = {
	'type': 'service_account',
	'project_id': Config.firebase.service.project_id,
	'private_key_id': Config.firebase.service.private_key_id,
	'private_key': Config.firebase.service.private_key,
	'client_email': `firebase-adminsdk-nolll@${Config.firebase.service.project_id}.iam.gserviceaccount.com`,
	'client_id': Config.firebase.service.client_id,
	'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
	'token_uri': 'https://oauth2.googleapis.com/token',
	'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
	'client_x509_cert_url': `https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nolll%40${Config.firebase.service.project_id}.iam.gserviceaccount.com`,
	'universe_domain': 'googleapis.com'
}

firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(credentials as firebaseAdmin.ServiceAccount)
})

export const db = firebaseAdmin.firestore()

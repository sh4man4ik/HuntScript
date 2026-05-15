import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions/index.js';
import input from 'input';
import dotenv from 'dotenv';
import { messageHandler } from './handlers/messageHandler.js';

dotenv.config();

async function setup() {
	const apiId = Number(process.env.API_ID);
	const apiHash = String(process.env.API_HASH);

	const phoneNumber = String(process.env.PHONE_NUMBER);
	const password = String(process.env.PASSWORD);

	const session = String(process.env.SESSION);
	const stringSession = new StringSession(session);

	const client = new TelegramClient(stringSession, apiId, apiHash, {
		connectionRetries: 5
	});

	await client.start({
		phoneNumber: () => phoneNumber,
		password: () => password,
		phoneCode: async () => await input.text('Please enter the code you received: '),
		onError: (error) => console.log(error)
	});

	messageHandler(client);

	console.log('Connected!');

	if (!session) {
		console.log('Copy the code: ' + client.session.save());
	}
}
setup();

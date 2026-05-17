import { NewMessage } from 'telegram/events/index.js';
import { messageSender } from './messageSender.js';
import { getMessageUrl } from '../helpers/getMessageUrl.js';

function messageHandler(client) {
	const chats = JSON.parse(process.env.WATCH_CHATS);
	const keywords = JSON.parse(process.env.KEYWORDS);

	client.addEventHandler(
		async (event) => {
			let message = event.message.text;
			let messageCopy = message.toLowerCase();

			for (let keyword of keywords) {
				keyword = keyword.toLowerCase();

				if (messageCopy.includes(keyword)) {
					const link = await getMessageUrl(event);

					await messageSender(client, message, link);

					return;
				}
			}
		},
		new NewMessage({ chats: chats, incoming: true })
	);
}

export { messageHandler };

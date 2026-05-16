import { NewMessage } from 'telegram/events/index.js';
import { getMessageUrl } from '../helpers/getMessageUrl.js';

function messageHandler(client, keywords) {
	const chats = JSON.parse(process.env.WATCH_CHATS);

	client.addEventHandler(
		async (event) => {
			let message = event.message.text;
			let messageCopy = message.toLowerCase();

			for (let keyword of keywords) {
				keyword = keyword.toLowerCase();

				if (messageCopy.includes(keyword)) {
					const link = await getMessageUrl(event);
					console.log(link);
				}
			}
		},
		new NewMessage({ chats: chats, incoming: false })
	);
}

export { messageHandler };

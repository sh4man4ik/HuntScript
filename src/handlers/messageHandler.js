import { NewMessage } from 'telegram/events/index.js';

function messageHandler(client) {
	const chats = JSON.parse(process.env.WATCH_CHATS);

	client.addEventHandler(
		async (event) => {
			let message = event.message.text;
			console.log(message);
		},
		new NewMessage({ chats: chats, incoming: false })
	);
}

export { messageHandler };

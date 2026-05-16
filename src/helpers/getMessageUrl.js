async function getMessageUrl(event) {
	const chat = await event.message.getChat();
	const chatUsername = chat.username;

	const messageId = event.message.id;

	const link = `https://t.me/${chatUsername}/${messageId}`;

	return link;
}

export { getMessageUrl };

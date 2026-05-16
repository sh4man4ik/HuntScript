async function messageSender(client, message, link) {
	const targetChat = String(process.env.TARGET_CHAT);

	const fullMessage = `${message}\n\n ${link}`;

	await client.sendMessage(targetChat, { message: fullMessage });
}

export { messageSender };

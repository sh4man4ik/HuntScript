# What is it?

HuntScript is a script that monitors Telegram chats and sends you only the filtered messages.

# How does it work?

The script logs into your Telegram account, finds the right messages, and sends them to your chat. It all works in real
time.

# Quick Start

1. Clone the repository:

```bash
git clone https://github.com/sh4man4ik/HuntScript.git
```

2. Go to the directory:

```bash
cd HuntScript
```

3. Download the dependencies:

```bash
npm install
```

4. Create a .env file in the root directory:

- `API_ID — Copy from https://my.telegram.org`

- `API_HASH — Copy from https://my.telegram.org`

- `PHONE_NUMBER — Telegram phone number`

- `PASSWORD — Telegram account password`

- `TARGET_CHAT — Chat where your messages will go. Or type “me” to get them sent directly to your Saved Messages`

- `WATCH_CHATS — Chats where messages will come from`

- `KEYWORDS — Keywords for filtering messages`

- `SESSION — When you run the script for the first time, you'll need to log in to your Telegram account. Then, copy the code from the console and paste it here. This way, you won't have to log in every time`

For example:

```bash
API_ID="12345678"
API_HASH="dj43jldf3mdjm34udh43nd3j3nd3ukji"
PHONE_NUMBER="+123 45678912"
PASSWORD="jskfdsm723dewf"
TARGET_CHAT="target_chat"
WATCH_CHATS=["chat_number_one", "chat_number_two", "chat_number_three"]
KEYWORDS=["one", "two", "three"]
SESSION="CSKKSDCJLUERFref8u4efmejimwlulKI4F38IDJW8JMsdjnhhh47h7d373dsc"
```

5. Run the script:

```bash
npm run script
```

# Tech stack

The following technologies are used to develop the bot: **JavaScript**, **Node.js** and **GramJS**.

# Script hosting

The code contains the comments **ONLY FOR RENDER**. If you use a different hosting method, just delete that code.
Otherwise, if you want to host a script for free, you don't need to delete the code. How does it work and why?

1. Connect your repository with this code (or your own) to **Render** as a **Web Service**. Only there is a free plan.
   Also, without this code, Render will not allow you to build the project because it needs to listen to the port.

2. Next, copy the link provided by Render and leave it on the **UptimeRobot** website. Also, don't forget to set it to
   check our website every **14 minutes**. This is important to prevent our bot from falling sleep.

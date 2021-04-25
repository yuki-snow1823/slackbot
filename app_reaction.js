const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
  // Webアプリの起動
  await app.start(3000);
  // ターミナルに出力されるログ
  console.log('Bolt app is running!');
})();

app.event('reaction_added', async ({ event, context }) => {
  const result = await app.client.chat.postMessage({
    token: context.botToken,
    channel: event.item.channel,
    text: `<@${event.user}> added reaction! :${event.reaction}:`
  });
  console.log("hoge", event);
  console.log(result);
});
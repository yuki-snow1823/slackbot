const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
  // Webアプリの起動
  await app.start(3000);
  console.log('Bolt app is running!');
})();

// コマンドが来たらそう動く
app.command('/echo', async ({ command, ack, say }) => {
  await ack();
  await say(`echo: ${command.text}`);
});
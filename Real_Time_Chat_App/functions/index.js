/* eslint-disable indent */
const functions = require("firebase-functions");
const axios = require("axios");
exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
      // eslint-disable-next-line indent
    },
    // eslint-disable-next-line object-curly-spacing, comma-dangle
    { headers: { "Private-Key": "4521c5f3-f0ec-4270-90ad-c00ae2ed7798" } }
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "83d862c2-d123-48c9-b71f-d35ce4007c4f",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});

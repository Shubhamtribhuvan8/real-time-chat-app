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
    { headers: { "Private-Key": "fbf32438-52b7-4716-961c-e1d36f200264" } }
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "b39efe72-80e0-4bbe-a840-e2bbfb6a82f6",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});

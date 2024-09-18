/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import Chatbot from "./Chatbot";

function getScriptAttributes() {
  const script =
    document.currentScript ||
    (function () {
      const scripts = document.getElementsByTagName("script");
      return scripts[scripts.length - 1];
    })();

  return {
    chatbotId: script.getAttribute("chatbotId") || "default-chatbot",
    position: script.getAttribute("position") || "right",
    theme: script.getAttribute("theme") || "light",
  };
}

window.initChatbot = function () {
  const attributes = getScriptAttributes();
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbot-container-" + attributes.chatbotId;
  document.body.appendChild(chatbotContainer);

  ReactDOM.render(
    <React.StrictMode>
      <Chatbot
        id={attributes.chatbotId}
        position={attributes.position}
        theme={attributes.theme}
      />
    </React.StrictMode>,
    chatbotContainer
  );
};

document.addEventListener("DOMContentLoaded", window.initChatbot);

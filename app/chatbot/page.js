"use client";

import { useEffect } from 'react';
import styles from './chatbot.module.css';

export default function ChatbotPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '66c71a0fb682ba943a0c0ef2' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        render: {
          mode: 'embedded',
          target: document.getElementById('voiceflow-chatbot'),
        },
        autostart: true
      }).then(() => {
        window.voiceflow.chat.open();
      });
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Minu chatbot</h1>
      <div id="voiceflow-chatbot" className={styles.voiceflowChatbot}></div>
    </div>
  );
}
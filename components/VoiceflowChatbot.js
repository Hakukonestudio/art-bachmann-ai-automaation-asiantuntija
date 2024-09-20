"use client";

import { useEffect } from 'react';
import styles from './VoiceflowChatbot.module.css';

const VoiceflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '66c71a0fb682ba943a0c0ef2' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      }).then(() => {
        window.voiceflow.chat.open({
          el: '#voiceflow-chatbot',
          appId: '65df350a33dfac9fbfad5426'
        });
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="voiceflow-chatbot" className={styles.voiceflowChatbot}></div>;
};

export default VoiceflowChatbot;
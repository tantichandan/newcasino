// components/BrevoWidget.js
import Script from 'next/script';
import React from 'react';

const BrevoWidget = () => {
  return (
    <Script id="brevo-conversations" strategy="afterInteractive">
      {`
        (function(d, w, c) {
          w.BrevoConversationsID = '674809c52dfa0afa280f5546';
          w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
        })(document, window, 'BrevoConversations');
      `}
    </Script>
  );
};

export default BrevoWidget;

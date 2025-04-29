'use client'
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

type IframeRendererProps = {
  width: number | string;
  height: number | string;
  children: React.ReactNode;
};

export default function IframeRenderer({ width, height, children }: IframeRendererProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-white text-black">
          <div id="root"></div>
        </body>
      </html>
    `);
    doc.close();

    const interval = setInterval(() => {
      const mountPoint = doc.getElementById('root');
      if (mountPoint) {
        clearInterval(interval);
        setReady(true);
      }
    }, 10);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const mountPoint = iframeRef.current?.contentDocument?.getElementById('root');
    if (mountPoint) {
      const root = createRoot(mountPoint);
      root.render(children);
    }
  }, [ready, children]);

  return (
    <iframe
      ref={iframeRef}
      style={{ width, height, border: '1px solid #ccc' }}
    />
  );
}

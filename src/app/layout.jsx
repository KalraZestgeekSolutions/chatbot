export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          id="crmone-chatbot"
          chatbotId="9908c559-b284-4aa2-88d3-3e3c45872fd6"
          src="dist/chatbot-widget.min.js"
        ></script>
        {children}
      </body>
    </html>
  );
}

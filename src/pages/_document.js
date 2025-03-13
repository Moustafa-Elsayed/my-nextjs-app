import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ locale }) {
  return (
    <Html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.renderPage();
  return {
    ...initialProps,
    locale: ctx.locale || "en",
  };
};

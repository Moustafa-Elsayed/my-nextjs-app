import { useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ data }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  console.log("data", data);

  return (
    <>
      <Head>
        <title>{t("homeTitle")}</title>
        <meta name="description" content={t("homeDescription")} />
      </Head>
      <LanguageSwitcher />
      <h1>{t("welcome")}</h1>
      <p>{t("welcome")}</p>
      <p>{data?.page_slider?.title[locale]}</p>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch("https://gcc.cnc.sa/api/contact");
  const apiData = await res.json();
  const data = apiData?.data;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
    revalidate: 10,
  };
}

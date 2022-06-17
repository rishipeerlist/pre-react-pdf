import Head from "next/head";
import { getProfile } from "../services";
import styles from "../styles/Home.module.css";
import PdfDocument from "../components/PdfDocument";
import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Resume from "../components/Resume";

export default function Home({ profile }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>{`${profile.displayName} | Peerlist Profile`}</title>
        <meta name="description" content={profile.headline} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <Resume profile={profile} />
        {isClient && (
          <PDFDownloadLink
            className="bg-gray-gray9 hover:bg-gray-gray8 p-4 text-white font-semibold  mt-5 inline-block rounded-lg"
            document={<PdfDocument profile={profile} />}
            fileName={`${profile.firstName.toLowerCase()}_resume.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download my resume"
            }
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const profile = (await getProfile()) || [];
  return {
    props: { profile: profile.data },
  };
}

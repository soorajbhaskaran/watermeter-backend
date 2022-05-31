import { FC } from "react";
import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  path: string | null;
  og_title?: string;
  og_description?: string;
  og_image?: string;
}

const Seo: FC<SeoProps> = ({
  title,
  description,
  path,
  og_title,
  og_description,
  og_image,
}) => {
  const siteUrl = "https://arcane.summerstartupfestival.in";
  const currentUrl = siteUrl + path;
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    publisher: {
      "@type": "Organization",
      name: "Summer Startup Festival",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icons/android-chrome-192x192.png`,
      },
    },
    headline: title,
    url: currentUrl,
    description: description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl,
    },
  };

  if (!path)
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="canonical" href={currentUrl} />

        {/* Open graph tags */}
        <meta property="og:type" content={"website"} />

        <meta property="og:site_name" content="Water authority" />

        <meta property="og:title" content={og_title ? og_title : title} />

        <meta
          property="og:description"
          content={og_description ? og_description : description}
        />

        <meta property="og:url" content={currentUrl} />

        {og_image ? <meta property="og:image" content={og_image} /> : <></>}

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgJsonLd),
          }}
        ></script>
      </Head>
    </>
  );
};

export default Seo;

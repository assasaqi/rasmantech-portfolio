import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Rasman Juliadi — Full-Stack Developer",
  description = "Portofolio resmi Rasman Juliadi, Full-Stack Developer spesialis React, Node.js, dan Tailwind CSS.",
  name = "Rasman Juliadi",
  type = "website"
}) {
  const siteUrl = "https://rasmantech.web.id";
  const ogImage = `${siteUrl}/og-image.png`; // Pastikan gambar ini ada di folder public/

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={name} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={siteUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

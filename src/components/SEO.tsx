import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  robots?: string;
}

const SITE_URL = 'https://rivo.city';
const DEFAULT_TITLE = 'Rivo | One City. Infinite Possibilities.';
const DEFAULT_DESCRIPTION = 'Discover trusted local businesses, fast local delivery and everything your city has to offer with Rivo.';
const DEFAULT_IMAGE = '/og-image.png';
const DEFAULT_ROBOTS = 'index,follow';

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  robots = DEFAULT_ROBOTS
}) => {
  const siteName = 'Rivo';
  
  // Safe production generation for absolute canonical pathways[cite: 8]
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonicalUrl = canonical 
    ? `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}` 
    : `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
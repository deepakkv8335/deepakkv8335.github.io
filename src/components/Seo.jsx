import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_WIDTH,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from '@/data/seo.js';

/**
 * Renders the per-page <title>, meta description, canonical link, Open Graph and
 * Twitter Card tags. Call once per page with only the props that differ from the
 * site-wide defaults (usually just `title` and `description`).
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  type = 'website',
  image,
  imageWidth,
  imageHeight,
}) {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const resolvedImage = image ?? DEFAULT_IMAGE;
  const resolvedWidth = image ? imageWidth : DEFAULT_IMAGE_WIDTH;
  const resolvedHeight = image ? imageHeight : DEFAULT_IMAGE_HEIGHT;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedImage} />
      {resolvedWidth && <meta property="og:image:width" content={String(resolvedWidth)} />}
      {resolvedHeight && <meta property="og:image:height" content={String(resolvedHeight)} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </Helmet>
  );
}

import { Image as ImageIcon } from 'lucide-react';

/**
 * Renders a project screenshot, or a clean placeholder when `image` is not set yet.
 * `image` is `{ src, alt }` or undefined/null.
 */
export default function ProjectMedia({ image, title, className = '' }) {
  if (!image) {
    return (
      <div
        className={`flex items-center justify-center bg-linear-to-br from-accent-soft to-accent/10 text-accent ${className}`}
      >
        <ImageIcon size={36} aria-hidden="true" />
        <span className="sr-only">{title} screenshot not added yet</span>
      </div>
    );
  }

  return <img src={image.src} alt={image.alt} loading="lazy" className={className} />;
}

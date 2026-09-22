import { LoaderCircle } from 'lucide-react';

export default function RouteFallback() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] items-center justify-center">
      <LoaderCircle size={28} aria-hidden="true" className="animate-spin text-accent" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

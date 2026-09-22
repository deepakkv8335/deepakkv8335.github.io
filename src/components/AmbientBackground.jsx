// Decorative only: fixed, behind all content, ignores pointer events.
// Pure CSS transform animation (see src/styles/index.css) — no JS animation loop,
// so it costs nothing on scroll or interaction. Disabled entirely under
// prefers-reduced-motion via the same stylesheet.
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-drift-a absolute -top-32 -left-24 size-[26rem] rounded-full bg-accent/20 blur-3xl dark:bg-accent/15" />
      <div className="animate-drift-b absolute top-1/3 -right-24 size-[22rem] rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />
      <div className="animate-drift-a absolute bottom-[-6rem] left-1/4 size-[20rem] rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}

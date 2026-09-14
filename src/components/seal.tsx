/** Original two-color shelter mark. Not a lab logo. */
export function ShelterMark({
  size = 88,
  title = "OPEN shelter mark",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg
      className="seal-mark"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="50" cy="50" r="48" fill="#1a150f" />
      <circle cx="50" cy="50" r="44" fill="#e6c200" />
      <circle cx="50" cy="50" r="40" fill="#1a150f" />
      <polygon points="50,14 66,42 34,42" fill="#e6c200" />
      <polygon points="14,62 42,62 28,88" fill="#e6c200" />
      <polygon points="86,62 72,88 58,62" fill="#e6c200" />
      <path d="M42 46 h16 v3 h2 v24 h-20 V49 h2 z" fill="#e6c200" />
      <rect x="48.5" y="58" width="3" height="9" fill="#1a150f" />
    </svg>
  );
}

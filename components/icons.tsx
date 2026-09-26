type IconProps = {
  className?: string;
};

export function IconPrecision({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5v9M7.5 12h9" />
    </svg>
  );
}

export function IconQuality({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8L12 3.5Z" />
      <path d="m8.5 12 2.3 2.3L15.5 9.6" />
    </svg>
  );
}

export function IconReliability({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="1" />
    </svg>
  );
}

export function IconInnovation({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M12 4.5v2.2M12 17.3V19.5M4.5 12h2.2M17.3 12H19.5M7.1 7.1l1.6 1.6M15.3 15.3l1.6 1.6M7.1 16.9l1.6-1.6M15.3 8.7l1.6-1.6" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function IconPhone({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7.2 4.8h2.4l1.2 3-1.8 1.2a11 11 0 0 0 5.8 5.8l1.2-1.8 3 1.2v2.4c0 .7-.6 1.3-1.3 1.3A13.7 13.7 0 0 1 5.9 6.1c0-.7.6-1.3 1.3-1.3Z" />
    </svg>
  );
}

export function IconMail({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="4" y="6" width="16" height="12" rx="1.2" />
      <path d="m5 7.5 7 5.2 7-5.2" />
    </svg>
  );
}

export function IconMenu({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 8h14M5 12h14M5 16h14" />
    </svg>
  );
}

export function IconClose({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

export function IconArrowUp({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

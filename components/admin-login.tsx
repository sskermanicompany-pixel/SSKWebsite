"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

export function AdminLogin() {
  const { t } = useLanguage();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setPending(false);

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error || "Unable to sign in.");
      return;
    }

    window.location.reload();
  }

  return (
    <main id="main" className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-16">
      <form onSubmit={onSubmit} className="w-full border border-line bg-paper p-8">
        <p className="eyebrow text-xs font-medium text-accent">{t.admin.title}</p>
        <h1 className="mt-3 font-display text-3xl text-navy">{t.admin.loginTitle}</h1>
        <label className="mt-8 block text-sm font-medium text-charcoal">
          {t.admin.password}
          <input
            type="password"
            name="password"
            className="admin-field mt-2"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="mt-4 text-sm text-accent-hover">{error}</p> : null}
        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center bg-navy px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-navy"
          disabled={pending}
        >
          {t.admin.login}
        </button>
      </form>
    </main>
  );
}

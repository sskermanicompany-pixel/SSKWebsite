const ALLOWED_HREF = /^(https?:|mailto:|\/|#)/i;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inline(value: string) {
  return escapeHtml(value)
    .replace(/\[(.+?)\]\((.+?)\)/g, (_match, label: string, href: string) => {
      if (!ALLOWED_HREF.test(href)) {
        return label;
      }
      return `<a href="${escapeHtml(href)}">${label}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) {
      html.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      html.push("</ol>");
      inOl = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      closeLists();
      continue;
    }

    if (trimmed.startsWith("> ")) {
      closeLists();
      html.push(`<blockquote><p>${inline(trimmed.slice(2))}</p></blockquote>`);
      continue;
    }

    if (/^###\s+/.test(trimmed)) {
      closeLists();
      html.push(`<h3>${inline(trimmed.replace(/^###\s+/, ""))}</h3>`);
      continue;
    }

    if (/^##\s+/.test(trimmed)) {
      closeLists();
      html.push(`<h2>${inline(trimmed.replace(/^##\s+/, ""))}</h2>`);
      continue;
    }

    if (/^#\s+/.test(trimmed)) {
      closeLists();
      html.push(`<h2>${inline(trimmed.replace(/^#\s+/, ""))}</h2>`);
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)/);
    if (unordered) {
      if (inOl) {
        html.push("</ol>");
        inOl = false;
      }
      if (!inUl) {
        html.push("<ul>");
        inUl = true;
      }
      html.push(`<li>${inline(unordered[1])}</li>`);
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)/);
    if (ordered) {
      if (inUl) {
        html.push("</ul>");
        inUl = false;
      }
      if (!inOl) {
        html.push("<ol>");
        inOl = true;
      }
      html.push(`<li>${inline(ordered[1])}</li>`);
      continue;
    }

    closeLists();
    html.push(`<p>${inline(trimmed)}</p>`);
  }

  closeLists();
  return html.join("\n");
}

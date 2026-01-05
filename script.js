(() => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Copy email button
  const btn = document.getElementById("btnCopyEmail");
  const status = document.getElementById("copyStatus");
  const email = "ethan.translation@gmail.com";

  if (btn) {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        if (status) status.textContent = "Copied!";
      } catch {
        // Fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        if (status) status.textContent = "Copied!";
      }
      setTimeout(() => { if (status) status.textContent = ""; }, 1500);
    });
  }
})();

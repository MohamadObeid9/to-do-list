export const openCloseNav = () => {
  const nav = document.querySelector("#nav");
  const closeBtn = document.querySelector("#closeBtn");
  const openBtn = document.querySelector("#openBtn");
  openBtn?.addEventListener("click", () => {
    openBtn.classList.add("hidden");
    nav?.classList.add("translate-x-0");
  });
  closeBtn?.addEventListener("click", () => {
    nav?.classList.remove("translate-x-0");
    openBtn?.classList.remove("hidden");
  });
};

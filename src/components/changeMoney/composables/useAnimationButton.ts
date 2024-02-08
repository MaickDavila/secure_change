// useAnimation.ts

export default function useAnimation() {
  const applyAnimation = (animationName: string) => {
    const button = document.querySelector(".change-button") as HTMLImageElement;
    if (!button) return;
    button.style.animation = `${animationName} 0.3s linear`;
  };

  const spin = () => applyAnimation("spin");
  const spinBack = () => applyAnimation("spinBack");

  return {
    spin,
    spinBack,
  };
}

"use client";

export default function CRTOverlay() {
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="crt-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>
      <div className="crt-overlay" aria-hidden="true">
        <div className="crt-tint" aria-hidden="true" />
        <div className="crt-reflection" aria-hidden="true" />
        <div className="crt-mask" aria-hidden="true" />
        <div className="crt-vignette" aria-hidden="true" />
        <div className="crt-scanlines" aria-hidden="true" />
        <div className="crt-scanline-moving" aria-hidden="true" />
        <div className="crt-grain" aria-hidden="true" />
      </div>
    </>
  );
}

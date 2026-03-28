import { TICKER_ITEMS } from "@/lib/constants";

/**
 * Horizontally scrolling marquee strip with brand stats & guarantees.
 * Pure CSS animation — no JS needed.
 */
export function Ticker() {
  // Duplicate items so the track loops seamlessly
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #2a2a2a",
        borderBottom: "1px solid #2a2a2a",
        padding: "10px 0",
        background: "#111111",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="ticker-track">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0 32px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#909090",
              fontSize: "0.8rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#ff2a2a" }}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

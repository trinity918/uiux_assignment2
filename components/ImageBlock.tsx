"use client";

interface ImageBlockProps {
  src?: string;
  alt: string;
  caption?: string;
  label?: string;
  aspect?: "video" | "square" | "wide" | "portrait";
  dark?: boolean;
}

export default function ImageBlock({
  src,
  alt,
  caption,
  label,
  aspect = "video",
  dark = false,
}: ImageBlockProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  const border = dark ? "border-white" : "border-black";
  const bg = dark ? "bg-zinc-900" : "bg-zinc-100";
  const textMuted = dark ? "opacity-60" : "opacity-50";

  return (
    <figure className="w-full">
      {label && (
        <p className={`mono text-xs uppercase tracking-widest mb-3 ${textMuted}`}>
          {label}
        </p>
      )}
      <div
        className={`w-full ${aspectClasses[aspect]} border-2 ${border} overflow-hidden relative ${bg}`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Structured placeholder with cross-hatch pattern */
          <div className="w-full h-full flex flex-col items-center justify-center relative">
            {/* Cross-hatch lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id={`hatch-${alt.replace(/\s/g, "")}`}
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="20"
                    stroke={dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#hatch-${alt.replace(/\s/g, "")})`}
              />
            </svg>
            {/* Corner markers */}
            <div className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 ${border}`} />
            <div className={`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 ${border}`} />
            <div className={`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 ${border}`} />
            <div className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 ${border}`} />
            {/* Label */}
            <p className={`mono text-xs uppercase tracking-widest text-center px-6 ${textMuted} relative z-10`}>
              [ {alt} ]
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className={`mono text-xs mt-3 ${textMuted}`}>
          ↳ {caption}
        </figcaption>
      )}
    </figure>
  );
}

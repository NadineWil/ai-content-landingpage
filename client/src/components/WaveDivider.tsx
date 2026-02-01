/*
 * Wave Divider Component - Organic section transitions
 * Part of Organic Tech design philosophy
 */

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className = "", flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,80 350,80 600,60 C850,40 1050,40 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    </div>
  );
}

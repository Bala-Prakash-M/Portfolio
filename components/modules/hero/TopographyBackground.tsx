import React from "react";

export default function TopographyBackground() {
  return (
    <div className="absolute inset-0 bg-[#FAF9F6] overflow-hidden select-none">
      {/* Our SVG canvas spans the full screen. 
        viewBox="0 0 100 100" gives us a responsive fluid grid.
      */}
      <svg 
        className="w-full h-full opacity-85" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Premium Carved Inset Shadow Filter
            This replicates the physical depth of carved paper layers.
          */}
          <filter id="topography-inset-shadow" x="-20%" y="-20%" width="140%" height="140%">
            {/* Guard against shadow clipping */}
            <feOffset dx="0.4" dy="0.8" />
            <feGaussianBlur stdDeviation="0.6" result="offset-blur" />
            
            {/* Invert mask logic to make the shadow sit *inside* the path cuts */}
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="#4b5563" floodOpacity="0.14" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            
            {/* Blend the composite shadow smoothly back into the base graphic layout */}
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Layer 0: Absolute Base Canvas 
          Fills the entire background footprint.
        */}
        <rect width="100" height="100" fill="#FAF9F6" />

        {/* Layer 1: The Outermost Contour Cut 
          Sweeps from top right through the core center canvas down to the bottom.
        */}
        <path 
          d="M 45,0 Q 52,25 40,45 T 65,85 T 40,100 L 100,100 L 100,0 Z" 
          fill="#F7F6F0" 
          filter="url(#topography-inset-shadow)"
        />

        {/* Layer 2: Intermediate Deep Cut */}
        <path 
          d="M 58,0 Q 64,20 54,40 T 74,78 T 58,100 L 100,100 L 100,0 Z" 
          fill="#F5F4ED" 
          filter="url(#topography-inset-shadow)"
        />

        {/* Layer 3: Concentric Internal Ridge */}
        <path 
          d="M 68,0 Q 75,18 66,35 T 84,72 T 75,100 L 100,100 L 100,0 Z" 
          fill="#F2F1E8" 
          filter="url(#topography-inset-shadow)"
        />

        {/* Layer 4: Deep Island Core Feature (Top Right Isolated Shelf) */}
        <path 
          d="M 80,10 Q 85,22 76,32 T 92,55 T 95,85 L 100,85 L 100,10 Z" 
          fill="#EFEEDB" 
          filter="url(#topography-inset-shadow)"
        />
      </svg>
    </div>
  );
}
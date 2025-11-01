#!/bin/bash
cd "/home/ahmadjon/Desktop/pediatra-website. (1)/my-app/src/assets/icons"

# Create SVG icons first, then convert to PNG

# 1. Child Massage (HandHeart icon)
cat > child-massage.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  <path d="M12 5v14"/>
  <path d="M12 12h.01"/>
</svg>
EOF

# 2. LFK (Activity icon)
cat > lfk.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
</svg>
EOF

# 3. CME (Zap icon)
cat > cme.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
</svg>
EOF

# 4. Trainer (Dumbbell icon)
cat > trainer.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6.5 6.5 11 11"/>
  <path d="m11 11 6 6"/>
  <path d="m13 13 6 6"/>
  <path d="m16 16 4 4"/>
  <path d="m19 19-6-6"/>
  <path d="m14.5 14.5-11-11"/>
  <path d="m20.5 20.5-4-4"/>
  <path d="m17 17-6-6"/>
</svg>
EOF

# 5. Logoped (MessageCircle icon)
cat > logoped.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
</svg>
EOF

# 6. Acupuncture (Sparkles icon)
cat > acupuncture.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m12 3-1.912 5.813a2 2 0 0 1-3.274 1.009L5 8l4.186 1.787A2 2 0 0 1 9.81 12.81l-5.812 1.912 5.813 1.912a2 2 0 0 1 1.009 3.274L8 19l1.787-4.186a2 2 0 0 1 3.274-1.009L12 21l1.912-5.813a2 2 0 0 1 3.274-1.009L21 16l-4.186-1.787a2 2 0 0 1-1.009-3.274L21 8.5l-5.813-1.912a2 2 0 0 1-1.009-3.274L16 5l-1.787 4.186a2 2 0 0 1-3.274 1.009z"/>
</svg>
EOF

# Convert SVG to PNG with proper size (128x128 for better quality)
for svg in child-massage.svg lfk.svg cme.svg trainer.svg logoped.svg acupuncture.svg; do
  name=$(basename "$svg" .svg)
  convert -background none -resize 256x256 "$svg" "${name}.png"
done

echo "PNG icons created successfully!"


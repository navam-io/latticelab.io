<template>
  <section class="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
    <!-- Lattice pattern background (logo-inspired diamond grid) -->
    <div class="absolute inset-0 opacity-[0.06]">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lattice-diamond" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
            <!-- Diamond lattice grid lines inspired by the logo -->
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#92400e" stroke-width="1.5"/>
            <circle cx="30" cy="0" r="2" fill="#92400e"/>
            <circle cx="60" cy="30" r="2" fill="#92400e"/>
            <circle cx="30" cy="60" r="2" fill="#92400e"/>
            <circle cx="0" cy="30" r="2" fill="#92400e"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice-diamond)"/>
      </svg>
    </div>

    <!-- Radial gradient overlay to fade edges -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-50/80"></div>

    <!-- Floating Holiday Decorations -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Ornament - top left -->
      <div class="holiday-ornament absolute top-16 left-[8%] opacity-60 hidden lg:block">
        <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ornament-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#dc2626"/>
              <stop offset="50%" stop-color="#991b1b"/>
              <stop offset="100%" stop-color="#7f1d1d"/>
            </linearGradient>
            <linearGradient id="ornament-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <!-- Cap -->
          <rect x="18" y="0" width="12" height="8" rx="2" fill="#d4af37"/>
          <rect x="22" y="8" width="4" height="4" fill="#d4af37"/>
          <!-- Ball -->
          <circle cx="24" cy="36" r="22" fill="url(#ornament-grad)"/>
          <ellipse cx="18" cy="28" rx="8" ry="10" fill="url(#ornament-shine)"/>
        </svg>
      </div>

      <!-- Star - top right -->
      <div class="holiday-star absolute top-24 right-[10%] opacity-50 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fcd34d"/>
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M20 0 L24 14 L40 14 L28 24 L32 40 L20 30 L8 40 L12 24 L0 14 L16 14 Z" fill="url(#star-grad)"/>
          <path d="M20 4 L22 14 L20 12 L18 14 Z" fill="#fef3c7" opacity="0.6"/>
        </svg>
      </div>

      <!-- Snowflake - bottom left -->
      <div class="holiday-snowflake absolute bottom-20 left-[6%] opacity-40 hidden lg:block">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="snow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e0f2fe"/>
              <stop offset="100%" stop-color="#7dd3fc"/>
            </linearGradient>
          </defs>
          <g stroke="url(#snow-grad)" stroke-width="2" stroke-linecap="round">
            <line x1="22" y1="2" x2="22" y2="42"/>
            <line x1="2" y1="22" x2="42" y2="22"/>
            <line x1="8" y1="8" x2="36" y2="36"/>
            <line x1="36" y1="8" x2="8" y2="36"/>
            <!-- Branch details -->
            <line x1="22" y1="8" x2="18" y2="4"/>
            <line x1="22" y1="8" x2="26" y2="4"/>
            <line x1="22" y1="36" x2="18" y2="40"/>
            <line x1="22" y1="36" x2="26" y2="40"/>
            <line x1="8" y1="22" x2="4" y2="18"/>
            <line x1="8" y1="22" x2="4" y2="26"/>
            <line x1="36" y1="22" x2="40" y2="18"/>
            <line x1="36" y1="22" x2="40" y2="26"/>
          </g>
          <circle cx="22" cy="22" r="3" fill="url(#snow-grad)"/>
        </svg>
      </div>

      <!-- Gift box - bottom right -->
      <div class="holiday-gift absolute bottom-16 right-[8%] opacity-50 hidden lg:block">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gift-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#7c3aed"/>
              <stop offset="100%" stop-color="#4c1d95"/>
            </linearGradient>
            <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fcd34d"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
          </defs>
          <!-- Box -->
          <rect x="4" y="14" width="36" height="28" rx="2" fill="url(#gift-grad)"/>
          <!-- Lid -->
          <rect x="2" y="8" width="40" height="8" rx="2" fill="url(#gift-grad)"/>
          <rect x="2" y="8" width="40" height="3" rx="1" fill="#a78bfa" opacity="0.4"/>
          <!-- Ribbon vertical -->
          <rect x="18" y="8" width="8" height="34" fill="url(#ribbon-grad)"/>
          <!-- Ribbon horizontal -->
          <rect x="2" y="10" width="40" height="6" fill="url(#ribbon-grad)"/>
          <!-- Bow -->
          <ellipse cx="22" cy="6" rx="8" ry="5" fill="url(#ribbon-grad)"/>
          <circle cx="22" cy="6" r="3" fill="#fbbf24"/>
        </svg>
      </div>

      <!-- Small pine branch - mid left -->
      <div class="holiday-pine absolute top-1/2 left-[4%] -translate-y-1/2 opacity-40 hidden xl:block">
        <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pine-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#16a34a"/>
              <stop offset="100%" stop-color="#14532d"/>
            </linearGradient>
          </defs>
          <path d="M18 0 C18 0 8 12 4 24 C8 22 12 20 18 24 C24 20 28 22 32 24 C28 12 18 0 18 0Z" fill="url(#pine-grad)"/>
          <path d="M18 16 C18 16 10 26 6 36 C10 34 14 32 18 36 C22 32 26 34 30 36 C26 26 18 16 18 16Z" fill="url(#pine-grad)"/>
          <rect x="16" y="36" width="4" height="10" rx="1" fill="#78350f"/>
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto">
        <!-- Premium Paper Effect -->
        <div class="letter-paper relative bg-white rounded-sm shadow-2xl p-8 md:p-12 lg:p-16">
          <!-- Paper texture overlay - heavier on margins -->
          <div class="absolute inset-0 pointer-events-none paper-texture-heavy"></div>
          <!-- Paper texture overlay - lighter in reading area -->
          <div class="absolute inset-8 md:inset-12 lg:inset-16 pointer-events-none paper-texture-light"></div>

          <!-- Decorative corner -->
          <div class="absolute top-0 left-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" class="w-full h-full text-amber-800">
              <path d="M0,0 L100,0 L0,100 Z" fill="currentColor"/>
            </svg>
          </div>

          <!-- Letter Content -->
          <div class="relative z-10">
            <!-- Header -->
            <h2 class="letter-heading text-2xl md:text-3xl text-gray-800 mb-8 text-center">
              A Letter from Team Lattice
            </h2>

            <!-- Salutation -->
            <p class="letter-text text-lg md:text-xl text-gray-700 mb-6 italic">
              To the engineers, architects, and leaders building the future of AI
            </p>

            <!-- Body -->
            <div class="letter-body text-gray-800 space-y-6 leading-relaxed">
              <p class="text-xl md:text-2xl font-medium">We know your world.</p>

              <p>
                You spend weeks reading vendor docs, comparing benchmarks, and building spreadsheets to justify decisions. When leadership asks "why this vendor?", you need evidence, not intuition. But the AI landscape changes faster than any team can track, and your research contains sensitive information you can't paste into a chatbot.
              </p>

              <p class="text-xl md:text-2xl font-medium text-amber-900">Lattice changes this.</p>

              <p>
                An agentic AI lab assistant that runs privately on your machine. Your data never leaves your control. Research depth of a dedicated analyst, in minutes instead of weeks.
              </p>

              <ul class="list-none space-y-3 pl-5 border-l-3 border-amber-400">
                <li><strong>34 curated blueprints</strong> from leading AI vendors, ready with one click</li>
                <li><strong>Source-grounded recommendations</strong> with citations to specific documentation</li>
                <li><strong>Scenario-aware analysis</strong> for your latency, budget, and compliance requirements</li>
              </ul>

              <p class="mt-8">
                <strong>$99 for lifetime access.</strong> No subscriptions. No vendor lock-in. No data leaving your machine.
              </p>

              <p class="text-center text-xl md:text-2xl font-semibold text-amber-900 mt-8">
                Smart AI system decisions, grounded in evidence.
              </p>

              <!-- Signature -->
              <div class="mt-12 pt-8 border-t border-amber-700/30">
                <p class="letter-signature text-2xl text-gray-800">Team Lattice</p>
              </div>

              <!-- P.S. -->
              <p class="mt-8 text-gray-600 italic">
                P.S. Watch our <a href="/#walkthrough" class="text-violet-600 hover:text-violet-700 underline">walkthrough</a> or read our <a href="/blog" class="text-violet-600 hover:text-violet-700 underline">blog</a> to see Lattice in action.
              </p>
            </div>
          </div>

          <!-- Decorative bottom corner -->
          <div class="absolute bottom-0 right-0 w-24 h-24 opacity-10 rotate-180">
            <svg viewBox="0 0 100 100" class="w-full h-full text-amber-800">
              <path d="M0,0 L100,0 L0,100 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Import elegant serif font for letter feel */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Dancing+Script:wght@500;600&display=swap');

.letter-paper {
  background: linear-gradient(135deg, #fefefe 0%, #f9f6f1 50%, #f5f0e8 100%);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* Heavier texture for margins */
.paper-texture-heavy {
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Lighter texture for readable content area */
.paper-texture-light {
  opacity: 0.08;
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
}

.letter-heading {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.letter-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
}

.letter-body {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.25rem;
  line-height: 1.9;
  color: #1f2937;
}

.letter-body p {
  text-indent: 0;
}

.letter-body strong {
  font-weight: 600;
  color: #111827;
}

.letter-body ul {
  font-size: 1.125rem;
  line-height: 1.8;
}

.letter-signature {
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .letter-body {
    font-size: 1.375rem;
    line-height: 2;
  }

  .letter-body ul {
    font-size: 1.25rem;
  }
}

/* Holiday decoration animations */
.holiday-ornament {
  animation: float-gentle 6s ease-in-out infinite;
}

.holiday-star {
  animation: twinkle 4s ease-in-out infinite, float-gentle 8s ease-in-out infinite reverse;
}

.holiday-snowflake {
  animation: spin-slow 20s linear infinite, float-gentle 7s ease-in-out infinite;
}

.holiday-gift {
  animation: float-gentle 5s ease-in-out infinite 1s;
}

.holiday-pine {
  animation: sway 8s ease-in-out infinite;
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.5;
    filter: brightness(1);
  }
  50% {
    opacity: 0.7;
    filter: brightness(1.2);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes sway {
  0%, 100% {
    transform: translateY(-50%) rotate(-3deg);
  }
  50% {
    transform: translateY(-50%) rotate(3deg);
  }
}
</style>

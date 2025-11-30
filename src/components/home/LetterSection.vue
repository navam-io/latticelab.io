<template>
  <section class="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
    <div class="container mx-auto px-4">
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
                You spend weeks reading vendor documentation, comparing model benchmarks, and building spreadsheets to justify infrastructure decisions. You juggle pricing pages that change monthly, model cards with incompatible metrics, and compliance requirements that vary by region. And when leadership asks "why this vendor?", you need an answer backed by evidence, not intuition.
              </p>

              <p class="text-xl md:text-2xl font-medium text-amber-900">We built Lattice because we faced the same challenge.</p>

              <p>
                <strong>The AI infrastructure landscape changes faster than any team can track.</strong> New models drop weekly. Pricing structures shift. Benchmarks contradict each other. Meanwhile, your business requirements (latency targets, budget constraints, compliance needs) remain non-negotiable.
              </p>

              <p>
                <strong>Your research contains sensitive information.</strong> Requirements under NDA. Proprietary use cases. Competitive analysis. You can't simply paste everything into a general-purpose chatbot and hope for the best.
              </p>

              <p class="text-xl md:text-2xl font-medium text-amber-900">Lattice changes this.</p>

              <p>
                We created an agentic AI lab assistant that runs privately on your laptop or cloud. Your data never leaves your control. You bring your own API keys. And you get the research depth of a dedicated analyst, in minutes instead of weeks.
              </p>

              <p class="font-semibold mt-10 mb-4">Here's what Lattice delivers:</p>

              <ul class="list-none space-y-4 pl-5 border-l-3 border-amber-400">
                <li><strong>36 curated blueprints</strong> from Anthropic, AWS, NVIDIA, Google Cloud, Meta, and Mistral, ready to apply with one click</li>
                <li><strong>Source-grounded recommendations</strong> with numbered citations linking every claim to specific documentation</li>
                <li><strong>Scenario-aware analysis</strong> that factors in your latency targets, budget limits, and compliance requirements</li>
                <li><strong>Exportable artifacts</strong> for board presentations, architecture docs, and decision memos</li>
              </ul>

              <p class="mt-8">
                Whether you're a research engineer evaluating embedding models for a RAG pipeline, a platform lead selecting LLM providers for your team, or a CTO presenting AI strategy to the board, Lattice gives you confidence backed by evidence.
              </p>

              <p>
                <strong>We priced Lattice at $99 for lifetime access because we believe every AI team deserves quality research tools, not just those with enterprise budgets.</strong>
              </p>

              <p class="text-center text-xl md:text-2xl my-10 text-gray-600 tracking-wide">
                No subscriptions. No vendor lock-in. No data leaving your machine.
              </p>

              <p class="text-center text-xl md:text-2xl font-semibold text-amber-900">
                Just smart AI system decisions, grounded in evidence.
              </p>

              <p class="mt-10 text-xl">We can't wait to see what you build.</p>

              <!-- Signature -->
              <div class="mt-12 pt-8 border-t border-amber-700/30">
                <p class="letter-signature text-2xl text-gray-800">Team Lattice</p>
              </div>

              <!-- P.S. -->
              <p class="mt-8 text-sm text-gray-600 italic">
                P.S. Watch our <a href="/#walkthrough" class="text-violet-600 hover:text-violet-700 underline">walkthrough</a> or read our <a href="/blog" class="text-violet-600 hover:text-violet-700 underline">blog</a> to see Lattice in action. And find us on <a href="https://www.producthunt.com/products/lattice-4" target="_blank" rel="noopener noreferrer" class="text-violet-600 hover:text-violet-700 underline">Product Hunt</a>, we'd love your support.
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
</style>

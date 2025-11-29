<template>
  <div class="stripe-button-wrapper h-12">
    <stripe-buy-button
      buy-button-id="buy_btn_1SYXbwRCxnzBPkIXayfIahbD"
      publishable-key="pk_live_51SJ4zqRCxnzBPkIX08pXFlwWr4FsjHXyZZUhnJuafZvQI05nSTGMxHkl9SWNeuCgzVZ8JHH1grR6XsnOEbAvAKHC00vw9mIIbB"
    >
    </stripe-buy-button>
  </div>
</template>

<script setup lang="ts">
// Lattice Stripe Buy Button - uses fixed button ID
</script>

<style scoped>
.stripe-button-wrapper {
  display: inline-flex;
  align-items: center;
  height: 48px;
}

/* Override Stripe button styles to match our design */
.stripe-button-wrapper :deep(stripe-buy-button) {
  height: 48px;
  display: flex;
  align-items: center;
}
</style>

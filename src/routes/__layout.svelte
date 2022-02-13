<script>
  import "../app.css";
  import Header from '$lib/partial/Header.svelte';
  import Footer from '$lib/partial/Footer.svelte';
</script>

<Header />
<div class="container mx-auto p-5">
  <slot />
</div>
<Footer />

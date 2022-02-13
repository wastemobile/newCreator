<script conext="module">
    export const testKey = process.env['TEST_KEY'];
</script>

<svelte:head>
    <title>newCreator</title>
</svelte:head>

<h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-orange-800">
    Learn SvelteKit with Tailwind
</h1>

<article class="prose prose-lg lg:prose-xl dark:prose-invert">
    <p>測試部署 SvelteKit 到 Cloudflare Pages.</p>
    <p>{testKey}</p>
</article>
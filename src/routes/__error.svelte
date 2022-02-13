<script context="module">
	export function load({error, status}) {
		return {
			props: {
				title: {
					code: status,
					result: error.message,
				}
			}
		};
	}
</script>

<script>
	export let title;
</script>

<svelte:head>
	<title>{title.code}</title>
</svelte:head>


<h1 class="text-9xl text-bold text-center py-6">{title.code}</h1>
<h5 class="text-xl text-center">{title.result}</h5>
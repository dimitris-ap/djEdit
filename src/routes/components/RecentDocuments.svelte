<script>
	import DocumentCard from './common/DocumentCard.svelte';
	export let data;
</script>

<div class="container px-4 py-5" id="custom-cards">
	<h3 class="pb-2 border-bottom">
		<svg class="bi" width="24" height="24" role="img" aria-label="History"
			><use xlink:href="#history" /></svg
		> Recent documents
	</h3>

	<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
		{#each data.items as { id, created, updated, title, content }, i}
			<DocumentCard {id} {title} {content} {created} {updated} />
		{/each}
	</div>
</div>

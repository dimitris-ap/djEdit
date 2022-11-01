<script>
	import Nav from '../components/nav/Nav.svelte';
	import AllDocuments from './../components/AllDocuments.svelte';
	import Search from '../components/common/Search.svelte';

	export let data;
</script>

<svelte:head>
	<title>DJ.Edit - All Documents</title>
	<meta name="description" content="DJEditor" />
</svelte:head>

<Nav />

<div class="container" style="overflow: auto; max-width: -webkit-fill-available;">
	<Search />
	<AllDocuments {data} />
</div>

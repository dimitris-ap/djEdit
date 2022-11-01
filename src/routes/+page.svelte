<script>
	import Nav from './components/nav/Nav.svelte';
	import RecentDocuments from './components/RecentDocuments.svelte';
	import Search from './components/common/Search.svelte';

	export let data;
</script>

<svelte:head>
	<title>DJ.Edit - Home</title>
	<meta name="description" content="DJEditor" />
</svelte:head>

<Nav />

<div class="container" style="overflow: auto; max-width: -webkit-fill-available;">
	<Search />
	<RecentDocuments {data} />
</div>

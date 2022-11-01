<script>
	import Nav from '../components/nav/Nav.svelte';
	import Editor from '../components/Editor.svelte';

	// export let data;
</script>

<svelte:head>
	<title>DJ.Edit - Editor</title>
	<meta name="description" content="DJEditor" />
</svelte:head>

<Nav />

<div class="container" style="overflow: auto; max-width: -webkit-fill-available;">
	<!-- <Editor {data} /> -->
	<Editor />
</div>

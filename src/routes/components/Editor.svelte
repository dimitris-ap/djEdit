<script>
	import { onMount } from 'svelte';
	import { getDocumentById } from '../../ws/DocumentService';

	export let id;
	export let title;
	export let content;

	let editor;

	export let toolbarOptions = [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{ header: 1 }, { header: 2 }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ color: [] }, { background: [] }],
		['clean']
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');

		var quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow'
		});


		if (content)
			quill.setText(content);
	});
</script>

<label for="title" class="form-label">Title</label>
<div class="input-group mb-3">
	<input type="text" class="form-control" id="title" placeholder="" bind:value={title}/>
	<button
		class="btn btn-default"
		title="Delete document"
		data-bs-toggle="tooltip"
		data-bs-placement="left"
	>
		<svg class="lnr lnr-trash" width="24" height="24" style="margin: 7px;"
			><use xlink:href="#trash" /></svg
		>
	</button>
</div>
<div class="mb-3" style="height: calc(100% - 190px);">
	<label for="editor" class="form-label">Content</label>
	<div bind:this={editor} id="editor" style="height: 100%;" />
</div>

<style>
	@import '/css/quill.snow.css';
</style>

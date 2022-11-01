<script>
	import Icon from '../common/Icon.svelte';
	import { onMount } from 'svelte';

	let currentPath;
	onMount(() => {
		currentPath = window.location.pathname;
	});

	export let title;
	export let icon;
	export let href;
</script>

<li class="nav-item">
	<a
		{href}
		class="nav-link active py-3 border-bottom"
        class:active={currentPath == href}
		aria-current="page"
		{title}
		data-bs-toggle="tooltip"
		data-bs-placement="right"
	>
		<Icon name={icon} />
	</a>
</li>
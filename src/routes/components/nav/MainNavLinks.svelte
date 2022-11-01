<script>
	import NavLink from "./NavLink.svelte";

</script>


<ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    <NavLink href="/" title="Home" icon="home" />
    <NavLink href="/documents" title="All documents" icon="book"/>
    <NavLink href="/create" title="New document..." icon="newFile"/>
</ul>
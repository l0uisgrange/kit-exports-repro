<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<h1>This is my layout</h1>
<a href="/">Home</a> <a href="/y">Page not working</a>
<hr />

{@render children?.()}

<script lang="ts">
    import { computeBananaQuality } from "./y/y.remote";
</script>

<h2>Welcome to the banana shop</h2>
<p>You can <a href="/y">hover or click here</a> to see the issue</p>

<p>
    The banane quality will be {#await computeBananaQuality()}
        #######
    {:then quality}
        {quality}
    {/await} out of 10 in my opinion.
</p>

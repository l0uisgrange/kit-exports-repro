<script lang="ts">
    import { getFruits } from "./y.remote";
    import { getBananaProfile } from "../x.remote";
</script>

<h2>Page that won't load unless removing the remote</h2>
<p>
    This issue is caused because the y.remote.ts calls a remote function from
    x.remote.ts.
</p>

<p>
    The fruits are
    {#await getFruits("all")}
        loading
    {:then fruits}
        {fruits.fruits} and there are {fruits.banana.quantity} bananas.
    {/await}
</p>

<p>
    The banana quality is
    {#await getBananaProfile()}
        loading
    {:then banana}
        {banana.quality}
    {/await} out of 10
</p>

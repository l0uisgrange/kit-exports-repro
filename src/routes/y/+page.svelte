<script lang="ts">
    import { getFruits, createFruit } from "./y.remote";
    import { getBananaProfile } from "../x.remote";

    let { data } = $props();
</script>

<h2>Page that won't load unless removing the remote</h2>
<p>
    This issue is caused because the y.remote.ts calls a remote function from
    x.remote.ts.
</p>

{data.fruitsServer.fruits}

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

<form {...createFruit}>
    New list is {createFruit.result}, given the brand new fruit
    <input {...createFruit.fields.name.as("text")} placeholder="orange" />
    with quantity
    <input {...createFruit.fields.quantity.as("number")} placeholder="6" />
    <button type="submit">Submit</button>
</form>

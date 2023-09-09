<script lang="ts">
    import type { PageData } from './$types';
    export let data : PageData;
</script>

<p>HELLO BIATCH : {data}</p>

<form action="?/something" method="post">
    <input type="text" name="SMALL" id="SMALL">
    <button type="submit">Test</button>
</form>

<template><div class="prose prose-zinc dark:prose-invert max-w-4xl"><h1>Pagination</h1><p class="lead">In this guide, we will look at how to work with paginated responses when querying the Protocol API. By default, all responses limit results to ten. However, you can go as high as 100 by adding a `limit` parameter to your requests.</p><p>When an API response returns a list of objects, no matter the amount, pagination is supported. In paginated responses, objects are nested in a `data` attribute and have a `has_more` attribute that indicates whether you have reached the end of the last page. You can use the `starting_after` and `ending_before` query parameters to browse pages.</p><h2>Example using cursors</h2><p>In this example, we request the page that starts after the conversation with id `s4WycXedwhQrEFuM`. As a result, we get a list of three conversations and can tell by the `has_more` attribute that we have reached the end of the resultset.</p><h3>Query parameters</h3><ul><li><strong>starting_after</strong> (string) - The last ID on the page you're currently on when you want to fetch the next page.</li><li><strong>ending_before</strong> (string) - The first ID on the page you're currently on when you want to fetch the previous page.</li><li><strong>limit</strong> (integer) - Limit the number of items returned.</li></ul><h3>Manual pagination using cURL</h3><div class="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 my-6 overflow-x-auto"><pre class="text-zinc-200 m-0"><code>curl -G https://api.protocol.chat/v1/conversations \
  -H "Authorization: Bearer {token}" \
  -d starting_after="s4WycXedwhQrEFuM" \
  -d limit=10</code></pre></div><h3>Paginated response</h3><div class="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 my-6 overflow-x-auto"><pre class="text-zinc-200 m-0"><code>{
  "has_more": false,
  "data": [
    {"id": "WAz8eIbvDR60rouK"},
    {"id": "hSIhXBhNe8X1d8Et"},
    {"id": "fbwYwpi9C2ybt6Yb"}
  ]
}</code></pre></div></div></template>

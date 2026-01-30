<template><div class="prose prose-zinc dark:prose-invert max-w-4xl"><h1>Quickstart</h1><p class="lead">This guide will get you all set up and ready to use the Protocol API. We'll cover how to get started using one of our API clients and how to make your first API request. We'll also look at where to go next to find all the information you need to take full advantage of our powerful REST API.</p><div class="not-prose bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-4 my-6"><p class="font-semibold text-blue-900 dark:text-blue-200 m-0">ℹ Before you can make requests to the Protocol API, you will need to grab your API key from your dashboard. You find it under Settings &raquo; API.</p></div><h2>Choose your client</h2><p>Before making your first API request, you need to pick which API client you will use. In addition to good ol' cURL HTTP requests, Protocol offers clients for JavaScript, Python, and PHP. In the following example, you can see how to install each client.</p><div class="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 my-6 overflow-x-auto"><pre class="text-zinc-200 m-0"><code># cURL is most likely already installed on your machine
curl --version

# Install the Protocol JavaScript SDK
npm install @example/protocol-api --save

# Install the Protocol Python SDK
pip install protocol_api

# Install the Protocol PHP SDK
composer require protocol/sdk</code></pre></div><h2>Making your first API request</h2><p>After picking your preferred client, you are ready to make your first call to the Protocol API. Below, you can see how to send a GET request to the Conversations endpoint to get a list of all your conversations.</p><div class="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 my-6 overflow-x-auto"><pre class="text-zinc-200 m-0"><code>curl -G https://api.protocol.chat/v1/conversations \
  -H "Authorization: Bearer {token}" \
  -d limit=10</code></pre></div><h2>What's next?</h2><p>Great, you're now set up with an API client and have made your first request to the API. Here are a few links that might be handy as you venture further into the Protocol API:</p><ul><li>Grab your API key from the Protocol dashboard</li><li><router-link to="/conversations">Check out the Conversations endpoint</router-link></li><li><router-link to="/errors">Learn about the different error messages in Protocol</router-link></li></ul></div></template>

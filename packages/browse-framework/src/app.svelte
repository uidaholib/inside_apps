<script>
  import Header from "./components/header.svelte";
  import Body from "./components/body.svelte";
  import Browser from "./components/browser.svelte";

  let title = "INSIDE Idaho";
</script>

<main class="flex flex-col min-h-0 w-screen h-screen overflow-hidden text-gray-700">
  <Body>
	<Browser />
  </Body>
</main>

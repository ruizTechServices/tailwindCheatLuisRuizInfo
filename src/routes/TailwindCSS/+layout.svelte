<script>
  import "../../app.css";
  import FooterTailwind from "../../components/footerTailwind.svelte";
  import Navbar from "../../components/navbarTailwind.svelte";
</script>

<Navbar />
<main class="text-center p-4 mx-auto h-auto  ">
  <slot />
</main>
<FooterTailwind/>
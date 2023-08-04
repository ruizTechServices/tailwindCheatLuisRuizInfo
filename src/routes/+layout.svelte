<script>
  import "../app.css";
  import Footer from "../components/footer.svelte";
  import Navbar from "../components/navbar.svelte";
</script>

<Navbar />
<main class="max-w-[960px] text-center p-4 mx-auto">
  <slot />
</main>
<Footer />

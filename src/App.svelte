<script lang="ts">
  import Header from "./pages/Header.svelte";
  import About from "./pages/About.svelte";
  import Showcase from "./pages/Showcase.svelte";
  import Help from "./pages/Help.svelte";
  import Server from "./pages/Server.svelte";
  import Footer from "./pages/Footer.svelte";
</script>

<main>
  <section>
    <Header />
  </section>
  <section>
    <About />
  </section>
  <section>
    <Showcase />
  </section>
  <section>
    <Help />
  </section>
  <section>
    <Server />
  </section>
  <Footer />
</main>

<style>
  section {
    height: auto;
    margin-inline: auto;
    border-bottom: 2px solid white;
  }
  section:last-child {
    border-bottom: none;
    padding-bottom: 45px;
  }
</style>

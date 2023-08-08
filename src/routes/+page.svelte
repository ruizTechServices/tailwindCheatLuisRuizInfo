<script>
  import { supabase } from "$lib/supabase";
  import Footer from "../components/footer.svelte";
  import Navbar from "../components/navbar.svelte";

  // @ts-ignore
  export let data;

  let country = "";

  // @ts-ignore
  const submit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("countries")
      .insert([{ name: country }]);

    if (error) {
      console.error("Error inserting data:", error);
      return;
    }

    console.log(data);
    country = "";
  };
</script>

<Navbar />

<!--test-->
<div class="bg-red-300 text-center text-4xl">
  <h1 class="text-red-700 font-bold">this is a test</h1>
  <ul>
    {#each data.countries as country}
      <li>{country.name}</li>
    {/each}
  </ul>
</div>

<br />

<!-- <ul role="list" class="p-6 divide-y divide-slate-200">
    {#each people as person}
      <li class="flex py-4 first:pt-0 last:pb-0">
        <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900">{person.name}</p>
          <p class="text-sm text-slate-500 truncate">{person.email}</p>
        </div>
      </li>
    {/each}
  </ul> -->

<br />

<div class="min-w-min flex flex-col bg-green-700">
  <form action="post" class="flex flex-col w-30 p-4 text-center font-bold" on:submit={submit}>
    <label for="country" class="text-4xl">Country</label>
    <input id="country" bind:value={country} type="text" class="w-25" />
    <button type="submit">Submit</button>
  </form>
</div>
<!--end of test-->

<div class="container text-center">
  <img
    class="w-[2500px] sm:ml-10"
    src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    alt="keyboard"
  />
  <h1 class=" text-6xl font-bold p-10 z-40">Hello this is LuisRuiz.info</h1>
</div>

<Footer />

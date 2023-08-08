<script>
  import { supabase } from "$lib/supabase.js";
  import Footer from "../../components/footer.svelte";
  import Navbar from "../../components/navbar.svelte";
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  const login = async (event) => {
    event.preventDefault();
    const { user, error } = await supabase.auth.signIn({email, password});

    if (error) {
      console.error("Error during sign in:", error);
      return;
    }
    console.log("User logged in:", user);
    goto('/dashboard');
  };
</script>

<Navbar />

<div class="sm:p-8 sm:h-screen">
  <div class="bg-yellow-100 mx-auto container content-center sm:w-2/4 sm:p-4">
    <h1 class="text-6xl text-center p-4">LOGIN</h1>
    <div class="">
      <form action="post" class="flex flex-col p-5" on:submit={login}>
        <label for="email">Email</label>
        <input bind:value={email} type="email" name="email" id="email" />
        <label for="password">password</label>
        <input bind:value={password} type="password" name="password" id="password" />
        <br/>
        <button
          class="w-40 middle self-center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</div>

<!--or register here-->
<div class="flex flex-col items-center justify-center pb-10">
  <p class="text-center text-2xl">or</p>
  <a href="/register" class="text-center text-2xl underline">Register here</a>
</div>

<Footer />

<style>
</style>

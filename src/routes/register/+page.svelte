<script>
  import { supabase } from "$lib/supabase";
  import { goto } from "$app/navigation";
  import Navbar from "../../components/navbar.svelte";
  import Footer from "../../components/footer.svelte";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let showModal = false;

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      // You can show an error message to the user here
      return;
    }

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("Error during registration:", error);
      // Handle error appropriately
      return;
    }

    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
    goto("/login"); // Redirect to home page or any other page after closing the modal
  };
</script>

<Navbar />
<div class="sm:p-8 sm:h-screen">
  <div class="bg-yellow-100 mx-auto container content-center sm:w-2/4 sm:p-4">
    <h1 class="text-6xl text-center p-4">REGISTER</h1>
    <form action="post" class="flex flex-col p-5" on:submit={register}>
      <label for="email">Email</label>
      <input bind:value={email} type="email" name="email" id="email" />
      <label for="password">Password</label>
      <input
        bind:value={password}
        type="password"
        name="password"
        id="password"
      />
      <label for="confirmPassword">Confirm Password</label>
      <input
        bind:value={confirmPassword}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
      />
      <br />
      <button
        class="w-40 self-center bg-red-500 py-3 px-6 text-white rounded-lg"
        >Register</button
      >
    </form>
  </div>

  {#if showModal}
    <div
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl mb-4">Confirmation Needed</h2>
        <p>
          Please check your email and follow the link to confirm your
          registration.
        </p>
        <button
          on:click={closeModal}
          class="w-40 self-center mt-4 bg-red-500 py-3 px-6 text-white rounded-lg"
          >Close</button
        >
      </div>
    </div>
  {/if}
</div>

<Footer />

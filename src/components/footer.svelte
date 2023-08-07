<script>
  let currentYear = new Date().getFullYear();
</script>

<footer class="bg-black text-white text-center">
  <div class="p-4">
    <ul class="">
      <li><a href="/">home</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="#">components</a></li>
      <li><a href="https://tailwindcss.com">TailwindCSS</a></li>
    </ul>
  </div>
  <div class="bg-gray-700 p-4 h-20">
    &copy <span>{currentYear}</span> <a href="http://ruiztechservices.com" class="hover:text-lg"
      >ruizTechServices</a
    ><span id="blinking">|</span><br />
  </div>
</footer>

<style>
  @keyframes blink {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #blinking {
    animation: blink 1s infinite;
  }
</style>

<script>
  // @ts-ignore
  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<!-- ========== { HEADER }==========  -->
<header class="fixed top-0 left-0 right-0 z-40">
    <nav class="bg-[#080815] main-nav">
       <div class="container px-4 mx-auto xl:max-w-6xl">
         <div class="lg:flex lg:justify-between">
             <div class="flex justify-between">
               <div class="flex items-center text-4xl font-bold text-white capitalize mx-w-10">VL</div>
                 <!-- mobile nav -->
               <div class="flex flex-row items-center py-4 lg:py-0">
                 <div class="relative block text-gray-900 hover:text-black lg:hidden">
                   <button type="button" class="block px-6 py-3 border-b-2 border-transparent menu-mobile">
                     <span class="sr-only">Mobile menu</span>
                     <svg class="w-8 h-8 open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>

                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8 close bi bi-x-lg" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                     <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                   </svg>
                   </button>
                 </div>
               </div>
             </div>
           
           <div class="flex flex-row">
             <!-- nav menu -->
             <ul class="items-center hidden w-full text-sm font-bold text-center text-gray-400 bg-white navbar lg:bg-transparent lg:text-left lg:flex lg:flex-row">
              <li class="relative hover:text-white">
                <a class="block px-6 py-3 border-b-2 border-transparent active lg:py-7" href="#hero" on:click|preventDefault={scrollIntoView}>Home</a>
              </li>
              <li class="relative hover:text-white">
                <a class="block px-6 py-3 border-b-2 border-transparent lg:py-7" href="#services" on:click|preventDefault={scrollIntoView}>What we do</a>
              </li>
              <li class="relative hover:text-white">
                <a class="block px-6 py-3 border-b-2 border-transparent lg:py-7" href="#portfolio" on:click|preventDefault={scrollIntoView}>Our works</a>
              </li>
              <li class="relative hover:text-white">
                <a class="block px-6 py-3 border-b-2 border-transparent lg:py-7" href="#pricing" on:click|preventDefault={scrollIntoView}>Pricing</a>
              </li>
              <li class="relative hover:text-white">
                <a class="block px-6 py-3 border-b-2 border-transparent lg:py-7" href="#team" on:click|preventDefault={scrollIntoView}>Team</a>
              </li>
              <li class="relative hover:text-white">
                <a class="block px-6 py-3 border-b-2 border-transparent lg:py-7" href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
              </li>
            </ul>
           </div>
         </div>
       </div>
    </nav>
 </header><!-- end header -->
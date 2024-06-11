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


<!-- hero start -->
<div id="hero" class="relative z-0 py-16 section md:pt-32 md:pb-20 bg-[#080815]">
	<div class="container px-4 mx-auto xl:max-w-6xl">
		<div class="flex flex-row flex-wrap justify-center -mx-4">
			<!-- content -->
			<div
				class="self-center flex-shrink w-full max-w-full px-4 sm:px-12 lg:px-18 sm:w-9/12 lg:w-1/2"
			>
				<img src="/img/dummy/dev.png" class="w-full h-auto max-w-full" alt="creative agency" />
			</div>
			<!-- end content -->

			<!-- text -->
			<div class="self-center flex-shrink w-full max-w-full px-4 md:w-9/12 lg:w-1/2 lg:pr-12">
				<div class="mt-6 text-center lg:text-left lg:mt-0">
					<div class="mb-12">
						<h1 class="mb-4 text-4xl font-bold leading-normal text-white">
							Streamline Your Web Development
						</h1>
						<p class="pb-2 mx-auto text-xl font-light leading-relaxed text-gray-600">
							Access unlimited web development resources and expertise at a predictable monthly
							cost.
						</p>
					</div>

					<a
						class="py-2.5 px-10 rounded-lg  inline-block text-center leading-normal text-gray-100 bg-slate-900 border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
						href="#pricing" on:click|preventDefault={scrollIntoView}
					>
						Get Started
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- end Hero -->

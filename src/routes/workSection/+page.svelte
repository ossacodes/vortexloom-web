<script>
	import { onMount } from 'svelte';
	// Attempting to import GLightbox directly from the static path.
	// This might not work as expected in SvelteKit if glightbox.min.js is not an ES module.
	// If this fails, GLightbox should be installed as a dependency or loaded globally in app.html.
	import GLightbox from '../../static/vendors/glightbox/dist/js/glightbox.min.js';

	onMount(() => {
		// Check if GLightbox was successfully imported (it might be undefined if the import failed)
		if (typeof GLightbox === 'function') {
			const lightbox = GLightbox({
				selector: '.glightbox-workitem',
				gallery: 'work-portfolio' // Optional: if you want to group them into a gallery
			});
		} else {
			console.error('GLightbox could not be loaded. Please check the import path or method.');
		}
	});
</script>

<!-- Portfolio Content -->
<div id="portfolio" class="relative z-0 py-12 bg-white section md:py-16">
	<div class="container px-4 mx-auto xl:max-w-6xl">
		<!-- Heading start -->
		<header class="mx-auto mb-12 text-center lg:px-20">
			<h2 class="mb-2 text-2xl font-bold leading-normal text-black">Our work</h2>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 100 60"
				style="margin: 0 auto;height: 35px;"
				xml:space="preserve"
			>
				<circle
					cx="50.1"
					cy="30.4"
					r="5"
					class="stroke-primary"
					style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"
				/>
				<line
					x1="55.1"
					y1="30.4"
					x2="100"
					y2="30.4"
					class="stroke-primary"
					style="stroke-width: 2;stroke-miterlimit: 10;"
				/>
				<line
					x1="45.1"
					y1="30.4"
					x2="0"
					y2="30.4"
					class="stroke-primary"
					style="stroke-width: 2;stroke-miterlimit: 10;"
				/>
			</svg>
			<p class="pb-2 mx-auto text-xl font-light leading-relaxed text-gray-500">
				Here is a couple of project we created and worked on.
			</p>
		</header>
		<!-- End heading -->
	</div>

	<div class="flex flex-row flex-wrap justify-center space-x-3">
		<div class="shadow-xl card w-96 bg-base-100">
			<figure class="rounded-b-3xl">
				<a href="/img/dummy/work_project_1.png" class="glightbox-workitem" data-gallery="work-portfolio" title="Project 1 Title - View Image">
					<img
						src="/img/dummy/work_project_1.png"
						alt="Project 1 Image Placeholder"
					/>
				</a>
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Project 1 Title
					<div class="badge badge-secondary">NEW</div>
				</h2>
				<p>Brief description of Project 1. This project involved creating a comprehensive solution for X, focusing on Y and Z.</p>
				<div class="justify-end card-actions">
					<div class="badge badge-outline">Flutter</div>
					<div class="badge badge-outline">Firebase</div>
				</div>
			</div>
		</div>

		<div class="shadow-xl card w-96 bg-base-100">
			<figure class="rounded-b-3xl">
				<a href="/img/dummy/work_project_2.png" class="glightbox-workitem" data-gallery="work-portfolio" title="Project 2 Title - View Image">
					<img
						src="/img/dummy/work_project_2.png"
						alt="Project 2 Image Placeholder"
					/>
				</a>
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Project 2 Title
					<div class="badge badge-secondary">NEW</div>
				</h2>
				<p>Brief description of Project 2. This was a challenging project that required integration of A with B platform.</p>
				<div class="justify-end card-actions">
					<div class="badge badge-outline">Flutter</div>
					<div class="badge badge-outline">Firebase</div>
					<div class="badge badge-outline">Google Maps Api</div>
				</div>
			</div>
		</div>

		<div class="shadow-xl card w-96 bg-base-100">
			<figure class="rounded-b-3xl">
				<a href="/img/dummy/work_project_3.png" class="glightbox-workitem" data-gallery="work-portfolio" title="Project 3 Title - View Image">
					<img
						src="/img/dummy/work_project_3.png"
						alt="Project 3 Image Placeholder"
					/>
				</a>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Project 3 Title</h2>
				<p>Brief description of Project 3. Leveraged modern technologies to deliver a scalable and efficient C.</p>
				<div class="justify-end card-actions">
					<div class="badge badge-outline">Flutter</div>
					<div class="badge badge-outline">Firebase</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--  End Content -->

<!-- src/routes/index.svelte (or any Svelte component) -->
<script>
	import { goto } from '$app/navigation';

	let isLoading = false;

	/**
	 * @param {string} priceId
	 */
	async function handleSubscribe(priceId) {
		const response = await fetch('/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ priceId })
		});

		console.log(response.status);

		if (response.ok) {
			// @ts-ignore
			if (response.status === 200) {
				const data = await response.json();
				// @ts-ignore
				console.log(data);
				// Get the URL to redirect to from the Location header and redirect the browser to the Stripe Checkout page
				// const checkoutUrl = response.headers.get('Location');
				// @ts-ignore
				window.location.href = data.returnUrl;
			} else {
				// If the status code is not 303, we assume a JSON response with session information
				const { sessionId } = await response.json();
				// Normally, you would redirect to a URL provided within the session, but here we're just using the sessionId for an example
				window.location.href = `/success?session_id=${sessionId}`;
			}
		} else {
			// Handle errors
			console.error('Failed to start Stripe Checkout');
			// Optionally, retrieve and display error details from the response
			const errorDetails = await response.json();
			console.error(errorDetails.error);
		}
	}
</script>

<div id="pricing" class="relative flex items-center w-full mx-auto my-5 section md:px-12 max-w-7xl">
	<div>
		<header class="mx-auto mb-12 text-center">
			<h2 class="mb-2 text-2xl font-bold leading-normal text-gray-800 dark:text-gray-100">
				<span class="font-light">Our</span> Pricing
			</h2>
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
		</header>
		<!-- end section header -->
		<div
			class="relative p-0 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl"
		>
			<div class="relative flex flex-col p-8 bg-[#080815] rounded-2xl">
				<div class="relative flex-1">
					<h3 class="text-xl font-semibold text-white">Standard</h3>

					<p class="flex items-baseline mt-4 text-white">
						<span class="text-5xl font-extrabold tracking-tight">$4,999</span>
						<span class="ml-1 text-xl font-semibold">/month</span>
					</p>
					<p class="mt-6 text-white text-solitud">
						Unlock endless web dev magic—flat fee, no limits.
					</p>

					<!-- Feature list -->
					<ul role="list" class="pt-6 mt-6 space-y-6 border-t">
						<span class="text-lg font-semibold text-white">What's included?</span>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-white">One request at a time</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-white">Two weeks delivery</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-white">Unlimited revisions</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-white">Unlimited Stock photos and design resources</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-white">Full-time Support</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-white">Pause or cancel anytime</span>
						</li>
					</ul>
				</div>
				<div class="mt-6 rounded-lg">
					{#if !isLoading}
						<button
							on:click={async () => {
								isLoading = true;
								await handleSubscribe('price_1O56sIAoblSttJOcbMpBgBL0');
								isLoading = false;
							}}
							class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-[#080815] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
						>
							Get Started Now
						</button>
					{:else}
						<button
							class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-[#080815] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
						>
							Loading...
						</button>
					{/if}
				</div>
				<div class="mt-6 rounded-lg">
					<a
						href="https://calendly.com/ossacodes/15min"
						type="highlight"
						target="”_blank”"
						class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-[#080815]"
					>
						Or book a call
					</a>
				</div>
			</div>
			<div class="relative flex flex-col p-8 bg-white">
				<div class="flex-1">
					<h3 class="text-xl font-semibold text-neutral-600">Pro</h3>
					<p class="flex items-baseline mt-4 text-neutral-600">
						<span class="text-5xl font-extrabold tracking-tight">$5,599</span>
						<span class="ml-1 text-xl font-semibold">/month</span>
					</p>
					<p class="mt-6 text-gray-500">More dedicated support and feature requests, no limit.</p>

					<!-- Feature list -->
					<ul role="list" class="pt-6 mt-6 space-y-6 border-t">
						<span class="text-lg font-semibold text-neutral-600">What's included?</span>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600">Two requests at a time</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600">Two weeks delivery</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600">Unlimited revisions</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600"
								>Unlimited Stock photos and design resources
							</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600">Full-time Support</span>
						</li>

						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600">Custom integrations</span>
						</li>
						<li class="flex">
							<div class="inline-flex items-center w-6 h-6 bg-[#164863] rounded-xl">
								<svg
									class="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="ml-3 text-neutral-600">Pause or cancel anytime</span>
						</li>
					</ul>
				</div>

				<div class="mt-6 rounded-lg">
					<a
						href="/"
						type="highlight"
						class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-[#080815] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
					>
						Get Started
					</a>
				</div>
				<div class="mt-6 rounded-lg">
					<a
						href="https://calendly.com/ossacodes/15min"
						type="highlight"
						target="”_blank”"
						class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-[#080815]"
					>
						Or book a call
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

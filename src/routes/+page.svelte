<script>
	import NavBar from './navbar/+page.svelte';
	import PreLoader from './preloader/+page.svelte';
	import HeroSection from './heroSection/+page.svelte';
	import ServicesSection from './servicesSection/+page.svelte';
	import WorkSection from './workSection/+page.svelte';
	import ClientsSection from './clientsSection/+page.svelte';
	import TeamSection from './teamSection/+page.svelte';
	import ContactScetion from './contactusSection/+page.svelte';
	import FooterSection from './footerSection/+page.svelte';
	import PricingSection from './pricingSection/+page.svelte';
	import FaqSection from './FaqSection/+page.svelte';
</script>

<!-- =========={ MAIN }==========  -->

<PreLoader />
<NavBar />
<main id="content">
	<HeroSection />
	<ServicesSection />
	<!-- <ClientsSection /> -->
	<WorkSection />
  <PricingSection />
	<FaqSection />
	<ContactScetion />
</main>
<FooterSection />

<!-- <style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style> -->

import { defineMiddleware } from "astro/middleware";

const INDEX_PATH = "/canada-work-visa-requirements";

const pathsToAdQuery = [
	"/canada-work-visa-requirements",
	"/canada-job-visa-requirements",
	"/usa-work-visa-requirements",
	"/canada-immigrants-jobs-and-loans-visa-requirements",
];
const queryArr = [
	"jobs-you-can-get-with-a-degree-in-healthcare-administration",
	"job-benefits-in-canada",
	"what-jobs-can-i-get-in-healthcare-administration",
	"free-job-posting-sites-in-canada",
	"what-jobs-can-you-get-with-masters-in-healthcare-administration",
	"jobs-in-alberta-canada-for-foreign-workers",
	"can-you-do-job-costing-in-quickbooks-online",
	"where-can-i-post-jobs-for-free-in-usa",
	"free-job-portals-in-canada",
	"what-jobs-can-i-get-with-mba-in-healthcare-management",
	"what-jobs-can-you-get-with-masters-in-social-work",
	"can-you-get-a-job-in-cybersecurity-without-a-degree",
	"canada-job-agency-in-myanmar",
	"what-jobs-can-i-get-with-a-masters-in-counseling",
	"what-jobs-can-you-get-with-a-masters-in-counseling",
	"how-can-i-get-a-job-in-cyber-security",
	"what-job-can-i-get-with-a-degree-in-criminology",
	"what-jobs-can-i-get-with-a-degree-in-criminology",
	"jobs-you-can-get-with-a-masters-in-accounting",
	"temporary-jobs-in-canada",
	"can-you-choose-your-job-in-the-navy",
	"what-jobs-can-you-get-with-an-mba-in-finance",
	"lmia-jobs-in-canada-with-visa-sponsorship",
	"jobs-you-can-get-with-a-masters-in-cyber-security",
	"what-job-can-i-get-with-masters-in-psychology",
	"what-jobs-can-i-get-with-masters-in-psychology",
	"can-you-get-a-job-in-it-without-a-degree",
	"can-you-get-a-job-in-coding-without-a-degree",
	"can-you-get-a-job-in-it-with-just-certifications",
	"lmia-approved-truck-driver-jobs-in-canada",
	"can-i-get-a-job-in-coding-without-a-degree",
	"jobs-you-can-get-with-a-masters-in-health-administration",
	"jobs-you-can-get-with-a-masters-in-social-work",
	"job-posting-in-canada",
	"job-postings-in-canada",
	"post-jobs-in-canada",
	"what-jobs-can-a-degree-in-business-management-get-you",
	"can-you-get-a-job-with-an-associates-in-nursing",
	"what-jobs-can-i-get-in-cyber-security",
	"what-jobs-can-you-get-with-masters-in-public-health",
	"jobs-you-can-get-with-a-degree-in-social-work",
	"jobs-you-can-get-in-the-army",
	"what-jobs-can-you-get-in-cyber-security",
	"can-you-pick-your-job-in-the-air-force",
	"what-jobs-can-you-do-in-the-army",
	"can-you-choose-your-job-in-the-air-force",
	"can-i-get-a-job-in-google",
	"what-jobs-can-i-get-with-an-mba-in-finance",
	"how-can-i-get-a-job-in-ai",
	"what-job-can-you-get-in-business-administration",
	"what-jobs-can-you-get-in-business-administration",
	"can-i-invest-in-roth-ira-without-a-job",
	"contract-job-in-canada",
	"contract-jobs-in-canada",
	"how-can-ai-help-me-in-my-job",
	"monster-jobs-in-canada",
	"jobs-you-can-do-with-a-masters-in-public-health",
	"job-contract-in-canada",
	"jobs-you-can-get-with-an-mba-in-healthcare-management",
	"can-i-get-a-job-in-programming-without-a-degree",
	"what-jobs-can-i-get-in-computer-science",
	"what-jobs-can-you-get-with-a-masters-in-biotechnology",
	"can-i-choose-my-job-in-the-air-force",
	"can-i-pick-my-job-in-the-air-force",
	"canada-job-agency-in-philippines",
	"canada-jobs-agency-in-philippines",
	"what-jobs-can-you-get-with-a-bachelors-in-nursing",
	"what-jobs-can-you-get-with-a-bachelors-in-nursing",
	"how-much-is-a-boob-job-in-canada",
	"what-jobs-can-u-get-with-a-bachelors-in-psychology",
	"what-jobs-can-u-get-with-a-bachelors-in-psychology",
	"can-i-get-a-job-in-it-without-a-degree",
	"what-jobs-can-a-medical-assistant-do-in-a-hospital",
	"what-jobs-can-you-get-with-a-degree-in-accounting",
	"jobs-you-can-get-in-criminal-justice",
	"virtual-assistant-job-in-canada",
	"virtual-assistant-jobs-in-canada",
	"how-can-i-get-a-job-in-the-music-industry",
	"what-jobs-can-i-get-with-a-masters-in-psychology",
	"can-you-get-a-job-with-a-masters-in-psychology",
	"jobs-you-can-get-with-a-masters-degree-in-psychology",
	"jobs-you-can-get-with-a-masters-in-psychology",
	"jobs-you-can-get-with-masters-in-psychology",
	"what-job-can-i-get-with-a-masters-in-psychology",
	"what-job-can-you-get-with-a-masters-in-psychology",
	"what-jobs-can-a-masters-in-psychology-get-you",
	"what-jobs-can-i-get-with-a-master-in-psychology",
	"what-jobs-can-you-get-with-a-masters-in-psychology",
	"jobs-you-can-get-in-the-air-force",
	"how-can-i-get-a-teaching-job-in-usa",
	"what-jobs-can-i-get-with-a-degree-in-accounting",
	"what-jobs-can-you-get-in-data-science",
	"jobs-you-can-do-in-the-army",
	"agencies-for-jobs-in-canada",
	"agency-for-job-in-canada",
	"agency-for-jobs-in-canada",
	"job-agencies-in-canada",
	"job-agency-in-canada",
	"job-agent-in-canada",
	"job-agents-in-canada",
	"job-placement-agencies-in-canada",
	"job-placement-agency-in-canada",
	"job-placement-in-canada",
	"job-recruiting-agencies-in-canada",
	"job-recruitment-agencies-in-canada",
	"job-recruitment-agency-in-canada",
	"jobs-agencies-in-canada",
	"jobs-agency-in-canada",
	"jobs-agent-in-canada",
	"jobs-agents-in-canada",
	"jobs-you-can-get-with-a-masters-in-criminal-justice",
	"conservation-jobs-in-canada",
	"can-you-switch-jobs-in-the-military",
	"how-can-i-use-ai-in-my-job",
];

export const onRequest = defineMiddleware((context, next) => {
	/**
	 * The middleware runs every time a page or endpoint is about to be rendered.
	 * Only redirect if this is the home page
	 */

	/**
	 * Construct a full URL by passing `context.url` as the base URL
	 */

	// Return the element at the random index
	const randomIndex = Math.floor(Math.random() * queryArr.length);
	let redirectURL = "";

	pathsToAdQuery.forEach((x) => {
		if (
			context.url.pathname.slice(0, -1) === x &&
			context.url.href.length - 1 === (context.url.origin + x).length
		) {
			redirectURL = x;
		}
	});

	if (redirectURL) {
		return Response.redirect(
			new URL(
				redirectURL + `/?travel-usa-canada=${queryArr[randomIndex]}`,
				context.url
			),
			302
		);
	}

	/**
	 * You may also redirect using `context.redirect` as shown below:
	 * =========================================
	 * return context.redirect("/redirected", 302);
	 * =========================================
	 * Note that this only works in SSR mode
	 */

	return next();
});

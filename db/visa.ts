const DATABASE = [
	{
		route: "canada-immigrants-jobs-and-loans-visa-requirements",
		title: "Canada Immigrants Jobs and Loans: Visa Requirements",
		description:
			"Are you planning to work in Canada as an immigrant? This quiz will help you understand the visa requirements necessary for securing a job and loans.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it appears you may be well-prepared to pursue job opportunities and obtain loans as an immigrant in Canada. It's advisable to consult with relevant authorities or professionals to ensure you meet all requirements.",
		low: "Your responses indicate that you may need further preparation before considering job opportunities and loans in Canada as an immigrant. Research thoroughly and seek guidance from immigration experts to understand and fulfill all necessary criteria.",
		questions: [
			{
				question:
					"Have you researched the visa requirements for immigrating and working in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you possess the necessary qualifications and experience required for your desired job in Canada?",
				answers: ["Yes", "No", "In Progress"],
				correct: "Yes",
			},
			{
				question:
					"Have you explored the available job opportunities in Canada for immigrants?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the financial requirements and options for immigrants, including loans?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered the cost of living in Canada and its impact on your financial planning?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with the process of obtaining loans as an immigrant in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed your eligibility for loans based on your financial situation?",
				answers: ["Yes", "No", "In Progress"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the responsibilities and obligations associated with loans in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you consulted with immigration experts or advisors regarding your job and loan plans in Canada?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
			{
				question:
					"Are you prepared to meet all the necessary requirements and obligations as an immigrant seeking jobs and loans in Canada?",
				answers: ["Yes", "No", "Getting There"],
				correct: "Yes",
			},
		],
	},
	{
		route: "usa-travel-visa-requirements",
		title:
			"U.S.A Travel Visa Requirements for Immigrants: Are You Ready for Jobs in USA?",
		description:
			"This quiz will assess your readiness for applying for jobs in the USA and the corresponding travel visa requirements.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it appears you may be ready to explore job opportunities in the USA. Please consult with an immigration lawyer or relevant authorities to understand the visa requirements and procedures.",
		low: "Your responses suggest that you may need to further prepare before considering job opportunities in the USA. Research and gather necessary information about visa requirements and job prospects before proceeding.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question: "Have you researched job opportunities in the USA?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question: "Do you have a job offer from a U.S. employer?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with the different types of U.S. work visas?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Do you meet the educational and/or professional requirements for your desired job in the USA?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cost of living in the area where you plan to work in the USA?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the visa application process?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered healthcare and insurance options in the USA?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the cultural and lifestyle differences between your home country and the USA?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question: "Have you started saving for potential relocation expenses?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
		],
	},
	{
		route: "canada-travel-visa-requirements",
		title:
			"Canada Travel Visa Requirements for Immigrants: Are You Ready for Jobs in Canada?",
		description:
			"This quiz will assess your readiness for applying for jobs in Canada and the corresponding travel visa requirements.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it appears you may be ready to explore job opportunities in Canada. Please consult with an immigration lawyer or relevant authorities to understand the visa requirements and procedures.",
		low: "Your responses suggest that you may need to further prepare before considering job opportunities in Canada. Research and gather necessary information about visa requirements and job prospects before proceeding.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question: "Have you researched job opportunities in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question: "Do you have a job offer from a Canadian employer?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with the different types of Canadian work visas?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Do you meet the educational and/or professional requirements for your desired job in Canada?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cost of living in the area where you plan to work in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the visa application process for Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered healthcare and insurance options in Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the cultural and lifestyle differences between your home country and Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you started saving for potential relocation expenses to Canada?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
		],
	},
	{
		route: "usa-work-visa-requirements",
		title:
			"U.S.A Work Visa Requirements for Immigrants: Are You Ready for Jobs in USA?",
		description:
			"This quiz will assess your readiness for applying for work visas in the U.S.A.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be ready to pursue job opportunities in the U.S.A. Please consult with relevant authorities or an immigration lawyer to understand the specific work visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering job opportunities in the U.S.A. Research and gather necessary information about work visa requirements and job prospects before proceeding.",
		questions: [
			{
				question: "Do you have a job offer from a U.S. employer?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the work visa requirements for the U.S.A?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you meet the educational and/or professional qualifications required for the job?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the employment regulations and laws in the U.S.A?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary certifications or licenses for your profession?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the tax implications of working in the U.S.A?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cost of living in the area where you plan to work in the U.S.A?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with healthcare and insurance options available in the U.S.A?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered cultural and lifestyle differences between your home country and the U.S.A?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Do you have sufficient funds to support yourself until you receive your first paycheck?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
		],
	},
	{
		route: "canada-work-visa-requirements",
		title:
			"Canada Work Visa Requirements for Immigrants: Are You Ready for Jobs in Canada?",
		description:
			"This quiz will assess your readiness for applying for work visas in Canada.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be ready to pursue job opportunities in Canada. Please consult with relevant authorities or an immigration lawyer to understand the specific work visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering job opportunities in Canada. Research and gather necessary information about work visa requirements and job prospects before proceeding.",
		questions: [
			{
				question: "Do you have a job offer from a Canadian employer?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question: "Have you researched the work visa requirements for Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you meet the educational and/or professional qualifications required for the job?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the employment regulations and laws in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary certifications or licenses for your profession?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the tax implications of working in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cost of living in the area where you plan to work in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with healthcare and insurance options available in Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered cultural and lifestyle differences between your home country and Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Do you have sufficient funds to support yourself until you receive your first paycheck?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
		],
	},
	{
		route: "visitor-visa-requirements",
		title: "Visitor Visa Requirements: Are You Ready to Explore the World?",
		description:
			"This quiz will assess your readiness for applying for visitor visas in various countries.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be ready to explore opportunities for travel abroad. Please consult with relevant authorities or an immigration lawyer to understand the specific visitor visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering travel opportunities abroad. Research and gather necessary information about visitor visa requirements and travel prospects before proceeding.",
		questions: [
			{
				question:
					"Do you have a clear purpose for your visit to the desired country?",
				answers: ["Yes", "No", "Not Yet Decided"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the visitor visa requirements of the country you wish to visit?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question: "Do you have sufficient funds to cover your travel expenses?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you arranged for accommodation during your stay in the country?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the maximum duration you are allowed to stay on a visitor visa?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary travel insurance for your trip?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question: "Do you have a return ticket or proof of onward travel?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of any specific health or vaccination requirements for entry into the country?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you reviewed the local customs and cultural norms of the country you plan to visit?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a contingency plan in case of emergencies during your trip?",
				answers: ["Yes", "No", "Working on it"],
				correct: "Yes",
			},
		],
	},
	{
		route: "canada-visitor-visa-requirements",
		title:
			"Canada Visitor Visa Requirements for Immigrants: Are You Ready for Visiting Canada?",
		description:
			"This quiz will assess your readiness for applying for visitor visas in Canada.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be ready to visit Canada. Please consult with relevant authorities or an immigration lawyer to understand the specific visitor visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering visiting Canada. Research and gather necessary information about visitor visa requirements and travel prospects before proceeding.",
		questions: [
			{
				question: "Do you have a clear purpose for your visit to Canada?",
				answers: ["Yes", "No", "Not Yet Decided"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the visitor visa requirements for Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you have sufficient funds to cover your travel expenses during your visit?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you arranged for accommodation during your stay in Canada?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the maximum duration you are allowed to stay on a visitor visa in Canada?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary travel insurance for your trip to Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a return ticket or proof of onward travel from Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of any specific health or vaccination requirements for entry into Canada?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you reviewed the local customs and cultural norms of Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a contingency plan in case of emergencies during your visit to Canada?",
				answers: ["Yes", "No", "Working on it"],
				correct: "Yes",
			},
		],
	},
	{
		route: "usa-student-visa-requirements",
		title:
			"U.S.A Student Visa Requirements for Immigrants: Are You Ready for Studying in USA?",
		description:
			"This quiz will assess your readiness for applying for student visas in the U.S.A.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be ready to pursue educational opportunities in the U.S.A. Please consult with relevant authorities or an immigration advisor to understand the specific student visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering studying in the U.S.A. Research and gather necessary information about student visa requirements and educational prospects before proceeding.",
		questions: [
			{
				question:
					"Have you been accepted into a recognized educational institution in the U.S.A?",
				answers: ["Yes", "No", "Still Applying"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the student visa requirements for the U.S.A?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you have sufficient funds to cover your tuition fees and living expenses in the U.S.A?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary academic transcripts and certificates?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of any specific English language proficiency requirements for the U.S.A?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you secured any necessary scholarships or funding for your education in the U.S.A?",
				answers: ["Yes", "No", "Still Looking"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the academic and cultural expectations in the U.S.A?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you arranged for suitable accommodation during your studies in the U.S.A?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you prepared to comply with all visa regulations and requirements during your stay in the U.S.A?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a plan for transitioning to post-graduation opportunities after completing your studies in the U.S.A?",
				answers: ["Yes", "No", "Still Planning"],
				correct: "Yes",
			},
		],
	},
	{
		route: "canada-student-visa-requirements",
		title:
			"Canada Student Visa Requirements for Immigrants: Are You Ready for Studying in Canada?",
		description:
			"This quiz will assess your readiness for applying for student visas in Canada.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be ready to pursue educational opportunities in Canada. Please consult with relevant authorities or an immigration advisor to understand the specific student visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering studying in Canada. Research and gather necessary information about student visa requirements and educational prospects before proceeding.",
		questions: [
			{
				question:
					"Have you been accepted into a recognized educational institution in Canada?",
				answers: ["Yes", "No", "Still Applying"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the student visa requirements for Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you have sufficient funds to cover your tuition fees and living expenses in Canada?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary academic transcripts and certificates?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of any specific English or French language proficiency requirements for Canada?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Have you secured any necessary scholarships or funding for your education in Canada?",
				answers: ["Yes", "No", "Still Looking"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the academic and cultural expectations in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you arranged for suitable accommodation during your studies in Canada?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Are you prepared to comply with all visa regulations and requirements during your stay in Canada?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a plan for transitioning to post-graduation opportunities after completing your studies in Canada?",
				answers: ["Yes", "No", "Still Planning"],
				correct: "Yes",
			},
		],
	},
	{
		route: "canada-job-visa-requirements",
		title:
			"Canada Visa Requirements to Get A Job In Canada: Are You Prepared for Employment?",
		description:
			"This quiz will assess your readiness for applying for jobs and obtaining a work visa in Canada.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you may be well-prepared to pursue job opportunities in Canada. Please consult with relevant authorities or an immigration lawyer to understand the specific visa requirements and procedures.",
		low: "Your responses indicate that you may need to further prepare before considering job opportunities in Canada. Research and gather necessary information about visa requirements, job prospects, and other essential factors before proceeding.",
		questions: [
			{
				question: "Do you have a valid job offer from a Canadian employer?",
				answers: ["Yes", "No", "In Process"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the visa requirements for working in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you meet the educational and/or professional qualifications required for the job?",
				answers: ["Yes", "No", "Not Sure"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the employment regulations and labor laws in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you obtained any necessary certifications or licenses for your profession?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you have a clear understanding of the tax implications of working in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cost of living in the area where you plan to work in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with healthcare and insurance options available in Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered cultural and lifestyle differences between your home country and Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Do you have sufficient funds to support yourself until you receive your first paycheck?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
		],
	},
];

export default DATABASE;

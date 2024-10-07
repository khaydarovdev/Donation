<template>
	<div class="sec4_full">
		<section class="sec4">
			<div class="txtnacc">
				<h1>Any Questions</h1>
				<h4>
					When deciding which charity to donate to, it's important to do your search and find one
					that aligns with <br />
					your values and interests.
				</h4>
				<div class="accordion-container">
					<div class="accordion-item" v-for="(accordion, index) in accordions" :key="index">
						<div class="accordion-header" @click="toggle(index)">
							<h3>{{ accordion.question }}</h3>
						</div>
						<div class="accordion-body" v-if="accordion.isOpen">
							<p>{{ accordion.answer }}</p>
						</div>
					</div>
				</div>
			</div>
			<img src="../../assets/Main → Section → que.png.png" alt="" />
		</section>
	</div>
</template>
<script>
export default {
	data() {
		return {
			accordions: [
				{
					question: 'Have you weighed the potential risks and benefits?',
					answer: "When deciding which charity to donate to, it's important to do your search.",
					isOpen: true,
				},
				{
					question: 'How will you gather feedback from stakeholders?',
					answer:
						'Engaging stakeholders early and frequently is key to ensure all voices are heard.',
					isOpen: false,
				},
				{
					question: 'Are there any sustainability or ethical issues to take into account?',
					answer:
						"Yes, it's critical to evaluate if the charity is aligned with sustainability and ethical practices.",
					isOpen: false,
				},
				{
					question: 'Are there any sustainability or ethical issues to take into account?',
					answer:
						"Yes, it's critical to evaluate if the charity is aligned with sustainability and ethical practices.",
					isOpen: false,
				},
			],
		};
	},
	methods: {
		toggle(index) {
			this.accordions[index].isOpen = !this.accordions[index].isOpen;
		},
	},
};
</script>
<style scoped>
.sec4_full {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec4 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.accordion-container {
	width: 820px; /* Matching the width of the accordion from the image */
	margin: 0 auto;
}

.accordion-item {
	margin-bottom: 10px;
	border-radius: 5px;
}

.accordion-header {
	background-color: #f9f9f9;
	padding: 15px; /* Matching the header size and padding */
	cursor: pointer;
	border: 1px solid #ddd;
	font-size: 16px; /* Font size to match image */
	font-weight: 500;
}

.accordion-body {
	padding: 15px; /* Matching the padding of the content */
	border: 1px solid #ddd;
	border-top: none;
	font-size: 14px; /* Font size to match body text */
	background-color: #ffffff;
}

h3 {
	margin: 0;
	font-size: 16px; /* Same as header font size */
}

p {
	margin: 0;
}
.txtnacc {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	gap: 20px;
}
.txtnacc h1 {
	font-size: 45px;
	text-align: left;
}
.txtnacc h4 {
	font-weight: 400;
}
.sec4 img {
	width: 450px;
}
</style>

<template>
	<div class="sec6_full">
		<section class="sec6">
			<h1>What People Say</h1>
			<div class="imgntxt">
				<img src="../../assets/Group 9.png" alt="" />
				<h2>Robart Jonson</h2>
				<h4>United , Canada</h4>
			</div>
			<h4>
				These questions are used to provoke thought and discussion. They can be used to challenge
				the other person's assumptions, such as "Do you really <br />
				think that's true?", or to get them to think about a different perspective, such as "What if
				we tried it this way? The specific questions to ask may vary <br />
				depending on the context and the information you are seeking.
			</h4>
			<div class="arrows">
				<i class="bx bx-left-arrow-alt"></i>
				<i class="bx bx-right-arrow-alt"></i>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec6_full {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec6 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.sec6 h4 {
	font-weight: 400;
	color: gray;
	text-align: center;
}
.sec6 h1 {
	font-size: 45px;
}
.imgntxt h4 {
	font-weight: 400;
	color: gray;
	text-align: center;
}
.arrows i {
	font-size: 39px;
	color: #00715d;
}
</style>

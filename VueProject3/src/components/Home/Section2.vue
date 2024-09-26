<template>
	<div class="sec2_full">
		<section class="sec2">
			<div class="cards">
				<div class="card"></div>
				<div class="card"></div>
				<div class="card"></div>
				<div class="card"></div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec2_full {
	width: 100%;
	height: 115vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 15vh;
}
.sec2 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.cards {
	display: flex;
	gap: 20px;
}
.card {
	height: 300px;
	width: 350px;
	box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.1),
		inset -50px -50px 50px rgba(255, 255, 255, 0.2), inset 50px 50px 50px rgba(0, 0, 0, 0.1);
}
</style>

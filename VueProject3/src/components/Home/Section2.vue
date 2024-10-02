<template>
	<div class="sec2_full">
		<section class="sec2">
			<div class="cards">
				<div class="card">
					<div class="rnd">
						<i class="bx bxs-hand"></i>
					</div>
					<h1 class="ch1">Support</h1>
					<h4 class="ch4">
						When deciding which charity to <br />
						donate to, it important to do your <br />
						research.
					</h4>
				</div>
			</div>
			<div class="cards">
				<div class="card">
					<div class="rnd">
						<i class="bx bxs-graduation"></i>
					</div>
					<h1 class="ch1">Education</h1>
					<h4 class="ch4">
						When deciding which charity to <br />
						donate to, it important to do your <br />
						research.
					</h4>
				</div>
			</div>
			<div class="cards">
				<div class="card">
					<div class="rnd">
						<i class="bx bx-user"></i>
					</div>
					<h1 class="ch1">Volunteers</h1>
					<h4 class="ch4">
						When deciding which charity to <br />
						donate to, it important to do your <br />
						research.
					</h4>
				</div>
			</div>
			<div class="cards">
				<div class="card">
					<div class="rnd">
						<i class="bx bxl-bitcoin"></i>
					</div>
					<h1 class="ch1">Donations</h1>
					<h4 class="ch4">
						When deciding which charity to <br />
						donate to, it important to do your <br />
						research.
					</h4>
				</div>
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
	height: 55vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec2 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
}
.cards {
	display: flex;

	gap: 395px;
}
.card {
	height: 300px;
	padding: 20px;
	gap: 30px;
	width: 330px;
	display: flex;
	border-radius: 10px;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	transition: all 0.4s;
	-webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
}
.card:hover {
	background-color: #00715d;
	.rnd {
		background-color: white;
	}
	.rnd i {
		color: #00715d;
	}
	.ch1 {
		color: white;
	}
	.ch4 {
		color: white;
	}
}

.rnd {
	padding: 15px;
	border-radius: 80px;
	background-color: #00715d;
}
.rnd i {
	color: white;
	font-size: 27px;
}
.card h1 {
	font-size: 25px;
	color: black;
}
.card h4 {
	color: gray;
	font-weight: 400;
}
</style>

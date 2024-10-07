<template>
	<div class="sec5_full">
		<section class="sec5">
			<h1>Our Upcoming Events</h1>
			<div class="jessore">
				<div class="je">
					<img src="../../assets/Group 8.png" alt="" class="jeimg" />
				</div>
				<div class="je">
					<img src="../../assets/Group 8.png" alt="" class="jeimg" />
				</div>
				<div class="je">
					<img src="../../assets/Group 8.png" alt="" class="jeimg" />
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec5_full {
	width: 100%;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec5 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.sec5 h1 {
	font-size: 45px;
}
.jessore {
	display: flex;
	align-items: center;
	gap: 30px;
}
.je {
	overflow: hidden;
	height: 215px;
}
.jeimg {
	transition: all 0.4s;
}
.je:hover {
	.jeimg {
		transform: scale(1.1);
	}
}
</style>

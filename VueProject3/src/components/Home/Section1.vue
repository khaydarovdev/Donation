<template>
	<div>
		<div class="sec1_full">
			<section class="sec1">
				<div class="txt">
					<h1>
						Donate to children <br />
						& senior citizens
					</h1>
					<h4>
						Involves donating one's body after death for medical research, education, <br />
						or anatomical dissection. Body donation plays a crucial role in advancing <br />
						medical science
					</h4>
					<div class="btns">
						<button class="don">Donate now</button>
						<button class="join">Join Now</button>
					</div>
				</div>
				<img src="../../assets/Group 7.png" alt="" />
			</section>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec1_full {
	width: 100%;
	height: 115vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 15vh;
}
.sec1 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.txt {
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.txt h1 {
	font-size: 45px;
}
.txt h4 {
	color: gray;
	font-weight: 400;
}
.don {
	width: 250px;
	height: 50px;
	background-color: #00715d;
	border: 1px solid #00715d;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.4s;
	color: white;
	cursor: pointer;
	font-size: 17px;
}
.don:hover {
	color: #00715d;
	border: 1px solid #00715d;
	background-color: white;
}
.join {
	width: 250px;
	height: 50px;
	background-color: black;
	border: 1px solid black;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.4s;
	color: white;
	cursor: pointer;
	font-size: 17px;
}
.btns {
	display: flex;
	gap: 20px;
}
.join:hover {
	color: black;
	border: 1px solid black;
	background-color: white;
}
</style>

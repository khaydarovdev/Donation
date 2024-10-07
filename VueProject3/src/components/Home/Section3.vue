<template>
	<div class="sec3_full">
		<section class="sec3">
			<h1>The best way is to find yourself</h1>
			<div class="help">
				<img src="../../assets/div.col-xxl-7.png" alt="" />
				<div class="count">
					<h2>
						The Universal Hands-free <br />
						lighting Solution
					</h2>
					<h4>
						Fund programs that help children escape <br />
						poverty by providing vocational training.
					</h4>
					<div class="progress">
						<div class="progress2"><h5>65%</h5></div>
					</div>
					<div class="rised">
						<div class="txt">
							<h3 class="r">Raised</h3>
							<h3 class="p">15000$</h3>
						</div>
						<div class="txt">
							<h3 class="r">Raised</h3>
							<h3 class="p">15000$</h3>
						</div>
						<div class="rbtn"><i class="bx bxs-send"></i></div>
					</div>
					<div class="btns">
						<div class="btn1"><h6>Donate</h6></div>
						<div class="btn2"><h6>Details</h6></div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec3_full {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec3 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	/* flex-wrap: wrap; */
}
.sec3 h1 {
	font-size: 45px;
}
.help {
	display: flex;
	align-items: center;
	justify-content: center;
}
.help img {
	height: 500px;
}
.count {
	height: 500px;
	width: 420px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	background-color: #00715d;
	border-radius: 0px 10px 10px 0px;
}
.count h2 {
	color: white;
	text-align: center;
}
.count h4 {
	color: white;
	font-weight: 350;
}
.progress {
	width: 380px;
	height: 15px;
	background-color: white;
	border-radius: 50px;
}
.progress2 {
	width: 250px;
	height: 15px;
	background-color: #ffd502;
	border-radius: 50px 0px 0px 50px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 10px;
}
.progress2 h5 {
	font-weight: 500;
	color: white;
}
.rised {
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 60px;
}
.txt {
	display: flex;
	flex-direction: column;
}
.r {
	color: white;
}
.p {
	color: #ffd502;
	font-weight: 450;
}
.rbtn {
	padding: 10px;
	background-color: #ffd502;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	transition: all 0.4s;
}
.rbtn i {
	font-size: 26px;
}
.rbtn:hover {
	background-color: black;
	color: #ffd502;
}
.btns {
	display: flex;
	align-items: center;
	justify-content: center;
}
.btns h6 {
	font-size: 21px;
}
.btn1 {
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffd502;
	border-radius: 10px 0px 0px 10px;
	transition: all 0.4s;
}
.btn1:hover {
	color: #ffd502;
	background-color: black;
}
.btn2 {
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	color: black;
	border-radius: 0px 10px 10px 0px;
	transition: all 0.4s;
}
.btn2:hover {
	color: white;
	background-color: black;
}
</style>

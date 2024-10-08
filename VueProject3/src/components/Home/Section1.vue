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
@media (max-width: 1024px) {
	.sec1 {
		width: 100%;
		flex-direction: column;
		text-align: center;
		gap: 20px;
	}

	.txt h1 {
		font-size: 35px;
	}

	.txt h4 {
		font-size: 16px;
	}

	.don,
	.join {
		width: 220px;
		height: 45px;
		font-size: 15px;
	}

	.btns {
		flex-direction: column;
		gap: 15px;
	}

	img {
		width: 70%; /* Resize image for smaller screens */
	}
}

/* For mobile devices (max-width: 768px) */
@media (max-width: 768px) {
	.sec1_full {
		padding-top: 10vh;
		height: auto;
	}

	.sec1 {
		width: 100%;
		flex-direction: column;
		text-align: center;
		gap: 30px;
	}

	.txt h1 {
		font-size: 30px;
	}

	.txt h4 {
		font-size: 14px;
	}

	.don,
	.join {
		width: 200px;
		height: 40px;
		font-size: 14px;
	}

	.btns {
		flex-direction: column;
		gap: 10px;
	}

	img {
		width: 80%; /* Adjust the image size for mobile */
	}
}

/* For very small devices (max-width: 480px) */
@media (max-width: 480px) {
	.txt h1 {
		font-size: 24px;
	}

	.txt h4 {
		font-size: 12px;
	}

	.don,
	.join {
		width: 180px;
		height: 35px;
		font-size: 12px;
	}

	img {
		width: 100%; /* Full width on small devices */
	}
}
</style>

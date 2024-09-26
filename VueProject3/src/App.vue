<template>
	<div class="nav_full">
		<nav>
			<router-link to="/">
				<img src="../src/assets/Link → Logo-charitfix.png.png" alt="" />
			</router-link>
			<ul>
				<router-link to="/">
					<li>
						<a href="" class="il"><h1>Home</h1></a>
					</li>
				</router-link>
				<router-link :to="{ name: 'about' }">
					<li>
						<a href="" class="il"><h1>About</h1></a>
					</li>
				</router-link>
				<router-link :to="{ name: 'donation' }">
					<li>
						<a href="" class="il"><h1>Donation</h1></a>
					</li>
				</router-link>
				<router-link :to="{ name: 'blog' }">
					<li>
						<a href="" class="il"><h1>Blog</h1></a>
					</li>
				</router-link>
				<router-link :to="{ name: 'pages' }">
					<li>
						<a href="" class="il"><h1>Pages</h1></a>
					</li>
				</router-link>
				<router-link :to="{ name: 'contact' }">
					<li>
						<a href="" class="il"><h1>Contact</h1></a>
					</li>
				</router-link>
			</ul>
			<div class="btns">
				<div class="search"><i class="bx bx-search" id="ic"></i></div>
				<div class="log">Log In</div>
			</div>
		</nav>
	</div>
	<RouterView />
</template>
<script>
export default {};
</script>
<style scoped>
.nav_full {
	width: 1536px;
	backdrop-filter: blur(4px);
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	position: fixed;
}
nav {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
nav ul {
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 30px;
	list-style: none;
}
.il h1 {
	font-weight: 600;
	font-size: 20px;
	color: black;
	transition: all 0.4s;
}
.il h1:hover {
	color: #00715d;
	text-decoration: underline;
}
#ic {
	font-size: 20px;
	color: white;
}
.search {
	padding: 10px;
	background-color: #00715d;
	border: 1px solid #00715d;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.4s;
	color: white;
	cursor: pointer;
}
.search:hover {
	#ic {
		color: #00715d;
	}
	color: #00715d;
	border: 1px solid #00715d;
	background-color: white;
}
.btns {
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 10px;
}
.log {
	padding: 10px 20px;
	background-color: #00715d;
	border: 1px solid #00715d;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.4s;
	color: white;
	cursor: pointer;
}
.log:hover {
	color: #00715d;
	border: 1px solid #00715d;
	background-color: white;
}
</style>

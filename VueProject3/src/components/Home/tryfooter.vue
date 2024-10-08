<template>
	<footer class="footer-container">
		<div class="footer-content">
			<div class="footer-section brand-section">
				<img src="../../assets/Link → Logo-charitfix.png.png" class="brand-logo" />
				<h2>Charitfix</h2>
				<ul class="nav-links">
					<li><a href="#">Home</a></li>
					<li><a href="#">Donation</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<a href="#" class="donate-button">Donate</a>
			</div>

			<div class="footer-section explore-links">
				<h3>Explore Links</h3>
				<ul>
					<li><a href="#">About Company</a></li>
					<li><a href="#">Latest Projects</a></li>
					<li><a href="#">Latest Blog</a></li>
					<li><a href="#">Our Testimonials</a></li>
					<li><a href="#">Our Mission</a></li>
				</ul>
			</div>

			<div class="footer-section get-support">
				<h3>Get Support</h3>
				<ul>
					<li><a href="#">About</a></li>
					<li><a href="#">How it Works</a></li>
					<li><a href="#">Knowledge Hub</a></li>
					<li><a href="#">Success Stories</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<div class="support-contact">
					<p><i class="bx bx-envelope"></i> donation@gmail.com</p>
					<p><i class="bx bx-phone"></i> (+88) 111-222-333</p>
					<p><i class="bx bx-store-alt"></i> Tropical Cyclone, Volcano</p>
				</div>
			</div>

			<div class="footer-section projects">
				<h3>Projects</h3>
				<div class="project-item">
					<img src="../../assets/List → Item → Link → project-1.png.png" alt="Project 1" />
					<div>
						<p class="date">12.Oct.2023</p>
						<p>18 Best Charity Marketing Champions</p>
					</div>
				</div>
				<div class="project-item">
					<img src="../../assets/List → Item → Link → project-2.png.png" alt="Project 2" />
					<div>
						<p class="date">20.Oct.2023</p>
						<p>Charity starts from home. You Can't Even Help,</p>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; 2023 initTheme. All rights reserved.</p>
			<div class="social-icons">
				<a href="#"><i class="bx bxl-facebook-square"></i></a>
				<a href="#"><i class="bx bxl-twitter"></i></a>
				<a href="#"><i class="bx bxl-instagram"></i></a>
				<a href="#"><i class='bx bxl-linkedin-square' ></i></a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style scoped>
.footer-container {
	background-color: #1a1a1a;
	color: #fff;
	padding: 40px 0;
	font-family: Arial, sans-serif;
}

.footer-content {
	display: flex;
	justify-content: space-between;
	padding: 0 50px;
	max-width: 1200px;
	margin: 0 auto;
}

.footer-section {
	width: 22%;
}

.brand-section h2 {
	margin-top: 10px;
}

.brand-logo {
	width: 50px;
	height: auto;
}

.nav-links {
	list-style-type: none;
	padding: 0;
	margin: 20px 0;
}

.nav-links li {
	margin-bottom: 10px;
}

.nav-links a {
	color: #fff;
	text-decoration: none;
}

.donate-button {
	background-color: #11c299;
	color: #fff;
	padding: 10px 20px;
	border-radius: 5px;
	text-decoration: none;
}

.explore-links ul,
.get-support ul {
	list-style-type: none;
	padding: 0;
}

.explore-links li,
.get-support li {
	margin-bottom: 10px;
}

.explore-links a,
.get-support a {
	color: #fff;
	text-decoration: none;
}

.support-contact p {
	margin: 10px 0;
	font-size: 14px;
}

.projects .project-item {
	display: flex;
	align-items: center;
	margin-bottom: 15px;
}

.projects img {
	width: 50px;
	height: 50px;
	border-radius: 5px;
	margin-right: 10px;
}

.projects .date {
	color: #ffc107;
	font-size: 12px;
}

.footer-bottom {
	display: flex;
	justify-content: space-between;
	padding: 20px 50px;
	background-color: #111;
	font-size: 14px;
}

.social-icons a {
	color: #fff;
	margin-left: 15px;
	font-size: 18px;
}
</style>

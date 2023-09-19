<script>
export let showMenuMobile = false;
$: theDynamicClass = showMenuMobile ? 'open' : '';
$: theDynamicClass2 = showMenuMobile ? 'fade-in' : '';

function showMenuMobileButtom() {
	showMenuMobile = !showMenuMobile

	let body =  document.querySelector('body')
	if (showMenuMobile) {
		body.classList.add('overflow-hidden')
	} else {
		body.classList.remove('overflow-hidden')
	}
}
</script>

<header class="header absolute z-50 w-full container {theDynamicClass}">
	<div class="overlay has-fade {theDynamicClass2}"></div>
	<nav class="grid grid-cols-2 text-black items-center py-3 px-4 md:px-6">
		<div class="flex items-center">
			<!-- <div class="m-logo"></div> -->
			<a href="/" class="font-poppins font-medium text-sm magic-hover magic-hover__square">DEV</a>
		</div>

		<div class="header__links hidden lg:flex justify-between items-center">
			<div class="tracking-widest font-poppins">
				<a href="#profile">INICIO</a>
				<a href="#experience">EXPERIENCIA</a>
				<a href="#projects">PROYECTOS</a>
				<a href="#about">SOBRE MÍ</a>
				<a href="#contact">CONTACTO</a>
			</div>
			<a href="#" class="text-black">
				<!-- <i class="fas fa-moon"></i> -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
					<path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
		<div class="flex items-center justify-end lg:hidden">
			<!-- icon mode -->
			<a href="#" class="mr-5 text-black">
				<!-- <i class="fas fa-moon"></i> -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
					<path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
				</svg>
			</a>
			<!-- icon menu -->
			<div class="header__toggle" on:click={showMenuMobileButtom}>
				<span class={showMenuMobile ? 'bg-white': 'bg-black'}></span>
				<span class={showMenuMobile ? 'bg-white': 'bg-black'}></span>
				<span class={showMenuMobile ? 'bg-white': 'bg-black'}></span>
			</div>
		</div>
	</nav>

	<div v-if="showMenuMobile"
		class="header__menu has-fade tracking-widest {theDynamicClass2}">
		<a on:click={showMenuMobileButtom} href="#profile" class="rounded-md hover:bg-green-500">INICIO</a>
		<a on:click={showMenuMobileButtom} href="#experience" class="rounded-md hover:bg-green-500">EXPERIENCIA</a>
		<a on:click={showMenuMobileButtom} href="#projects" class="rounded-md hover:bg-green-500">PROYECTOS</a>
		<a on:click={showMenuMobileButtom} href="#about" class="rounded-md hover:bg-green-500">SOBRE MÍ</a>
		<a on:click={showMenuMobileButtom} href="#contact" class="rounded-md hover:bg-green-500">CONTACTO</a>
	</div>
</header>

<style>
	.header.open .header__toggle > span:first-child{
		transform: rotate(45deg);
	}
	.header.open .header__toggle > span:nth-child(2){
		opacity: 0;
	}
	.header.open .header__toggle > span:last-child{
		transform: rotate(-45deg);
	}

	.overlay {
		opacity: 0;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-image: linear-gradient(hsl(0, 0%, 0%), transparent 400%);
	}
	.header__toggle {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.header__toggle > span {
		display: block;
		width: 25px;
		height: 2px;
		transition: all 300ms ease-in-out;
		transform-origin: 2px 1px;
	}
	.header__toggle > span:not(:last-child) {
		margin-bottom: 3px;
	}
	.header__toggle > span:not(:nth-child(2)) {
		width: 18px;
	}

	.overlay .fade-in {
		display: block;
	}

	.overlay .fade-out {
		display: none;
	}

	.header__menu {
		position: absolute;
		width: calc(100% - 3rem);
		left: 50%;
		transform: translateX(-50%);
		margin-top: 1.5rem;
		padding: 1.625rem;
		border-radius: 4px;
	}
	.header__menu a {
		display: block;
		padding: 0.625rem;
		color: white;
		text-align: center;
	}

	.header__links a {
		position: relative;
		font-size: 12px;
		color: black;
		-webkit-transition: color 300ms ease-in-out;
		transition: color 300ms ease-in-out;
	}

	.header__links a:not(:last-child) {
		margin-right: 32px;
	}

	.header__links div a::before {
		content: "";
		height: 5px;
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		bottom: -20px;
		background: -webkit-gradient(linear, left top, right top, from(var(--primary)), to(hsla(138, 36%, 78%, 0.82)));
		background: linear-gradient(to right, var(--primary), hsla(138, 36%, 78%, 0.82));
		opacity: 0;
		-webkit-transition: opacity 300ms ease-in-out;
		transition: opacity 300ms ease-in-out;
	}

	.header__links div a:hover {
		color: var(--primary);
	}

	.header__links div a:hover::before {
		opacity: 1;
	}

	.has-fade {
		visibility: hidden;
	}

	.m-logo {
		/* background-image: url("./../assets/img/wizard-logo.jpg"); */
		background-image: url("../assets/shapes/triangle.png");
		height: 20px;
		width:20px;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.t {
		font-family: 'Kaushan Script', cursive;
	}
</style>

<script>

</script>
<!--Hack to preload fonts -->
<head>
	<link rel="stylesheet" href="/fonts/ErvaEsra.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
</head>

<body>
	<script>
		// Dynamically set title of tab to URL
		window.onload = function () {
			var pageTitle = document.title

			document.addEventListener('visibilitychange', function (e) {
				var isPageActive = !document.hidden

				if (!isPageActive) {
					document.title = pageTitle
				}
			})
		}
	</script>
	<main>
		<h1>ANSON TONG</h1>
	</main>
</body>

<style>
	/* Set custom font */
	@font-face {
		font-family: 'ErvaEsra', 'sans-serif';
		font-style: normal;
		font-weight: 400;
		src: url(fonts/ErvaEsra.woff2), url(fonts/ErvaEsra.ttf);
		font-display: swap;
	}
	/* Set values we can reuse on root selector. */
	:root {
		--primary: #3df5ff;
		--dark: #000000;
		--light: #eeeeee;
	}
</style>

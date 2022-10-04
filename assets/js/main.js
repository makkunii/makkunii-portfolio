	//open nav

	
    function openNav() {
		document.getElementById("myNav").style.height = "100%";
		}
		//close nav
		function closeNav() {
		document.getElementById("myNav").style.height = "0%";
		}

		//change icon logo
		$(document).ready(function () {
				$('.menu-icon').hover(function () {
					$(this).addClass('fa-burger');
					$(this).removeClass('fa-bars'); 
				}, function () {
					$(this).addClass('fa-bars');
					$(this).removeClass('fa-burger');
				});


			});

			$(document).ready(function () {
				$('.move-down').hover(function () {
					$(this).addClass('fa-angles-up');
					$(this).removeClass('fa-angles-down'); 
				}, function () {
					$(this).addClass('fa-angles-down');
					$(this).removeClass('fa-angles-up');
				});


			});	

	   //change state of header
		const navbar = document.querySelector('.header');
		const logo = document.querySelector('.logo');
		window.onscroll = () => {
			if (window.scrollY > 300) {
				navbar.classList.add('header-active');
				logo.classList.remove('logo');
				logo.classList.add('logo-active');
				
			} else {
				navbar.classList.remove('header-active');
				logo.classList.remove('logo-active');
				logo.classList.add('logo');
			}
		};

		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			typeSpeed: 50,
			backDelay: 700,
			fadeOutDelay: 500,
			loop:false,
			loopCount: Infinity,
			showCursor: true,

			});

			var pages = ["home","projects","certificates","about"];
			var pageCounter = 1;

			function scrollDown() {
			
			var goTo = document.getElementById(pages[pageCounter]);
						
			
					if (pageCounter < pages.length-1)
					{
						pageCounter++;
						goTo.scrollIntoView({ behavior:"smooth"},true);
						return;
					}
						pageCounter = 0;
						goTo.scrollIntoView({ behavior:"smooth"},true);
					
			}

			function reveal() {
				var reveals = document.querySelectorAll(".reveal");
	
				for (var i = 0; i < reveals.length; i++) {
					var windowHeight = window.innerHeight;
					var elementTop = reveals[i].getBoundingClientRect().top;
					var elementVisible = 150;
	
					if (elementTop < windowHeight - elementVisible) {
					reveals[i].classList.add("active");
					} else {
					reveals[i].classList.remove("active");
					}
				}
				}
	
			window.addEventListener("scroll", reveal);
	
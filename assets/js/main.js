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

        
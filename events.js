$(document).ready(function() {
	
	var sections = [0]; //default height
	sections.push($(".about-me-container").height()); //height of about me
	sections.push(sections[1] + $(".info1-content").height()); //height of work exp
	sections.push(sections[2] + $(".info2-content").height()); //height of projects
	sections.push(sections[3] + $(".classwork-banner").height()); //height of classwork

	$(".navbar #about-tab").click(function(event) {
		event.preventDefault();
		console.log("about");
		$('html, body').animate({scrollTop: sections[0]}, 200);
	});
	$(".navbar #work-tab").click(function(event) {
		event.preventDefault();
		console.log("resume");
		$('html, body').animate({scrollTop: sections[1]}, 200);
	});
	$(".navbar #projects-tab").click(function(event) {
		event.preventDefault();
		console.log("projects");
		$('html, body').animate({scrollTop: sections[2]}, 200);
	});
	$(".navbar #courses-tab").click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: sections[3]}, 200);
	})

	$(".navbar #contact-tab").click(function(event) {
		event.preventDefault();
		console.log("contact");
		$('html, body').animate({scrollTop: sections[4]}, 200);
	});
});
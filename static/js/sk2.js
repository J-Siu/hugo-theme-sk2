var c = document.getElementsByClassName("collapsible");
for (var i = 0; i < c.length; i++) {
	c[i].addEventListener("click", function () {
		this.classList.toggle(false);
		var el = this.nextElementSibling;
		el.style.display === "block" ? el.style.display = "none" : el.style.display = "block";
	},false)
}
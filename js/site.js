$(document).ready(function () {
  $("#btn-nav").click(function () {
    if ($("#navbarSupportedContent").attr("class") == "collapse navbar-collapse") {
      $("#navbarSupportedContent").addClass("show")
      $("#btn-nav").addClass("collapsed").attr("aria-expanded", "false")
    } else {
      $("#navbarSupportedContent").removeClass("show")
      $("#btn-nav").removeClass("collapsed").attr('aria-expanded', 'true')
    }
  })
})
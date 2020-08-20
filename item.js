$(document).ready(function(){
		  $("#myInputi").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#myTablei tr").filter(function() {
			  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		  });
	});
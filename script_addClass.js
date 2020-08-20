$(document).ready(function(){
  // $("#myTablei tbody").on('mousedown', 'tr', function(){
	  // console.log('here!!')
    // $("#conductor").addClass("module");
  // },function(){
		// $("#conductor").removeClass("module");
	// }
	// );
  // $("#ball").mousemove(function(e){
	 // if(e.which==1)
	 // {
	   // $("#conductor").toggleClass("module");
	 // }
  // });
	
	
	var clicked = false;
	
	//if clicked on table row - clicked true, module class added
	$("#myTablei tbody").on('mousedown','tr', function(){
			//check if row is already selected
			var testSelected = $(this).hasClass("selected");
			if(testSelected){
				//if yes add class module and clicked = true
				$("#conductor").addClass("module");
				clicked = true;
				//are you hovering over droppable div?
				//yes add color to droppable div
				//code extracted from github.com/kchiran
				//from javascript.info/mouseover
				//let currentDroppable = null;
				
				let currentDroppable = null;
				myULi.onmouseover = function() {
					if (currentDroppable) return;
					let target = event.target.closest('li');
					if (!target) return;
					if (!myULi.contains(target)) return;
					currentDroppable = target;
					onEnter(currentDroppable);
					console.log('111')
				};
				myULi.onmouseout = function(event) {
					if (!currentDroppable) return;
					let relatedTarget = event.relatedTarget;
					while (relatedTarget) {
						if (relatedTarget == currentDroppable) return;
						relatedTarget = relatedTarget.parentNode;
					}
					onLeave(currentDroppable);
					currentDroppable = null;
				};
				function onEnter(elem) {
				elem.style.background = 'pink';
				}
				function onLeave(elem) {
				elem.style.background = '';
				}
				
				/*myULi.onmouseenter = function(event) {
				let target = event.target;
				target.style.background = 'pink';
				};

				myULi.onmouseleave = function(event) {
				let target = event.target;
				target.style.background = '';
				};*/
				};

				});
	
	//if mouseup on body anywhere - check if clicked true and unset
	$(document).on('mouseup', function(){
		if (clicked) {
			
			//is this over a droppable div?
			//var newListItem = document.createElement("li");  
			//if yes put alert database updated
			
			clicked = false;
			$("#conductor").removeClass("module");
		}
	});
	
	if ($( "#myDiv2" ).hasClass(( "drag.even.selected" ) || ("drag.odd.selected"))){
		console.log(this)
	}
		
	
});
/* ============================================================
Helper jQuery Code 
* ============================================================ */

/* Featured Banner Height Adjustment */
/* Remember the user's choice of expanded or collapsed header in the session cookie */
$('.superfeatured_control').on('click', function(){
  $(this).parents('.super_featured').toggleClass('expanded')
})

/* Dismiss Alerts */

$('.icon_alert').on('click', function(e){
  $(this).parents('.flash_message').addClass('opacity_hidden')
})

/* Hide/Reveal Time Range Controls */

$('body').on('click', '.time_link', function(e)  {
  $('.time_controls').toggleClass('hidden')
})

/* Card Flip */

$('body').on('click', '.flip_control', function(e){
  $(this).parents('.article_infeed').toggleClass('flip')
})

/* Close/open social media links */

$('body').on('click', '.share', function(e){
  $(this).parents('.controls_container').toggleClass('share_active')
})
$('body').on('click', '.close_share', function(e){
  $(this).parents('.controls_container').toggleClass('share_active')
})


/***********************************************
* Disable "Enter" key in Form script- By Nurul Fadilah(nurul@REMOVETHISvolmedia.com)
* This notice must stay intact for use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

function handleEnter (field, event) {
		var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		if (keyCode == 13) {
			var i;
			for (i = 0; i < field.form.elements.length; i++)
				if (field == field.form.elements[i])
					break;
			i = (i + 1) % field.form.elements.length;
			field.form.elements[i].focus();
			return false;
		} 
		else
		return true;
	}      

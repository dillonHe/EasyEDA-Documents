(function($) {
	var $win = $(window),
		$directory = $('.directory-list-wrapper'),
		$placeholder = $('.directory-list-placeholder'),
		sidebar;
	function handle(){
		var rect;
		if(!sidebar){
			rect = $directory[0].getBoundingClientRect();
			if(rect.bottom < 0){
				$directory.addClass('sidebar');
				$placeholder.show();
				sidebar = 1;
			}
		}else{
			rect = $placeholder[0].getBoundingClientRect();
			if(rect.bottom >= 0){
				$directory.removeClass('sidebar');
				$placeholder.hide();
				sidebar = 0;
			}
		}
	}
	function updatePlaceholder(){
		var h;
		if($directory.hasClass('sidebar')){
			$directory.removeClass('sidebar');
			h = $directory.height();
			$directory.addClass('sidebar');
		}else{
			h = $directory.height();
		}
		$placeholder.css('height',h+'px');
	}
	$win.on('scroll resize', handle);
	$win.on('resize', updatePlaceholder);
	$(document).ready(updatePlaceholder);
}(jQuery));

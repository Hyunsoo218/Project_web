var imgeIndex = 1;
function changePotalImg() {
  $('#mainpic > #changeimg > img').attr('src','./jpg/img'+ imgeIndex +'.jpg');
  imgeIndex++;
  if(imgeIndex > 2){
    imgeIndex = 1;
  }
}
$(document).ready(
  function () {
    $('.goto').click(
      function () {
        var base = $(this).attr('base');
        var go = $(this).attr('go');
        var where = "./html/" + base +"/" + go + ".html";
        location.href = where;
      }
    );
      setInterval("changePotalImg()",2000);
  }
);

$.fn.toggleSub = function($target, complete)
	{
		var
			$this = $(this),
			result = {
				self : $this,
				target : $target
			}
		;
		$this.on('click', function(){
			$(this).toggleClass('on');
			$(this).parent().children($target).slideToggle(200, function(){
				$(this).parent().children($target).toggleClass('on').removeAttr('style');
			});
			if (complete)
			{
				complete(result);
			}
		});
	}

	$(function(){
		//alert("jQuery init");

		$('#tabs > span').click(function () {
			$('.contentmenu').css('background-color', 'white');
			$("#tabs > span").css('z-index', '0');
			$(this).css('z-index', '1');
			var divname = $(this).attr('id');
			//alert(divname);
			$('.contentmenudiv').hide();
			$('#' + divname + 'div').show();
		});

		$("#gonji").click();
	});
	
	
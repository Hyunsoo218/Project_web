


$(function () {
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

	const slideImg = $('#photos article'); //모든 슬라이드들
	let currentIdx = 1; //현재 슬라이드 index

	$('#perv').click(function () { // 왼쪽화살표 눌렀을때
		currentIdx--;
		$('#photos').css("transition", "left 0.2s ease-out");
		$('#photos').css("left", (-currentIdx * 400) + 'px');

		$("#nav > div").css("background-color", "lightgray");
		$("#nav > div:nth-child(" + currentIdx + ")").css("background-color", "gray");
	
		if (currentIdx == 0) {
			$("#nav > div").css("background-color", "lightgray");
			$("#nav > div:nth-child(10)").css("background-color", "gray");
			
			setTimeout(function () {
				currentIdx = slideImg.length - 2;
				$('#photos').css("transition", "left 0s ease-out");
				$('#photos').css("left", (-currentIdx * 400) + 'px');
			}, 200);
		}
	});
	$('#next').click(function () { // 오른쪽화살표를 눌렀을때 
		currentIdx++;
		$('#photos').css("transition", "left 0.2s ease-out");
		$('#photos').css("left", (-currentIdx * 400) + 'px');

		$("#nav > div").css("background-color", "lightgray");
		$("#nav > div:nth-child(" + currentIdx + ")").css("background-color", "gray");

		if (currentIdx == slideImg.length - 1) {

			$("#nav > div").css("background-color", "lightgray");
			$("#nav > div:nth-child(1)").css("background-color", "gray");

			setTimeout(function () {
				$('#photos').css("transition", "left 0s ease-out");
				currentIdx = 1;
				$('#photos').css("left", (-currentIdx * 400) + 'px');
			}, 200);
		}
	});

	setInterval( function(){
		$('#next').click();
	},3000);

	for (let i = 1; i <= 10; i++) {
		$("#nav > div:nth-child(" + i + ")").click(function () {
			currentIdx = i;
			$('#photos').css("transition", "left 0.2s ease-out");
			$('#photos').css("left", (-currentIdx * 400) + 'px');
			$("#nav > div").css("background-color", "lightgray");
			$(this).css("background-color", "gray");
		});
	}

	const slideJpg = $('#mainpicc article');
	let mainImgIdx = 1;

	$('#left').click(function () { // 왼쪽화살표 눌렀을때
		mainImgIdx--;
		$('#mainpicc').css("transition", "left 0.2s ease-out");
		$('#mainpicc').css("left", (-mainImgIdx * 1400) + 'px');

		$("#navb > div").css("background-color", "rgba(0,0,0,0)");
		$("#navb > div:nth-child(" + mainImgIdx + ")").css("background-color", "white");

		if (mainImgIdx == 0) { 
			$("#navb > div").css("background-color", "rgba(0,0,0,0)");
			$("#navb > div:nth-child(2)").css("background-color", "white");

			setTimeout(function () {
				mainImgIdx = slideJpg.length - 2;
				$('#mainpicc').css("transition", "left 0s ease-out");
				$('#mainpicc').css("left", (-mainImgIdx * 1400) + 'px');
			}, 200);
		}


	});

	$('#right').click(function () { // 오른쪽화살표를 눌렀을때
		mainImgIdx++;
		$('#mainpicc').css("transition", "left 0.2s ease-out");
		$('#mainpicc').css("left", (-mainImgIdx * 1400) + 'px');
		$("#navb > div").css("background-color", "rgba(0,0,0,0)");
		$("#navb > div:nth-child(" + mainImgIdx + ")").css("background-color", "white");
		if (mainImgIdx == slideJpg.length - 1) {
			$("#navb > div").css("background-color", "rgba(0,0,0,0)");
			$("#navb > div:nth-child(1)").css("background-color", "white");
			setTimeout(function () {
				$('#mainpicc').css("transition", "left 0s ease-out");
				mainImgIdx = 1;
				$('#mainpicc').css("left", (-mainImgIdx * 1400) + 'px');
			}, 200);
		}
	});

	setInterval( function(){
		$('#right').click();
	},3000);


	for (let i = 1; i <= 2; i++) {
		$("#navb > div:nth-child(" + i + ")").click(function () {
			mainImgIdx = i;
			$('#mainpicc').css("transition", "left 0.2s ease-out");
			$('#mainpicc').css("left", (-mainImgIdx * 1400) + 'px');
			$("#navb > div").css("background-color", "rgba(0,0,0,0)");
			$(this).css("background-color", "white");
		});
	}

});


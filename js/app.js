$(document).ready(function(){
 
	function invia(){
		var img = new FormData();
		img.append('img', $('input[type=file]')[0].files[0]);
		$.ajax({
			url: 'https://apius.faceplusplus.com/v2/detection/detect?api_key=62126969655ce884764c0d54ed0d4b32&api_secret=E4iRtm26kf2Or4rji5ewptP9P3_NVnnF',
            type: 'POST',
            data: img,
            contentType: false,
            processData: false,
            success: function(response) {
                console.log(JSON.stringify(response));
            },
        });
    };
    	$('#invia').click(function(){
		invia();
	});
});
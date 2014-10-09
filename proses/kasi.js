$(document).ready(function() {

$('#loading_panel').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://sitihp.com/mobile/permohonankasi.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
					AmbilData = data.items;
					if(AmbilData=='')
					{
						$('#loading_panel').hide();
						$('#empty').show();
					}
					else
					{						
						$('#loading_panel').hide();
						$('#tampilData').show();
						$.each(AmbilData, function(index, loaddata) {
						$('#sispakList').append(
							'<table><tr></tr></table>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom"><a href="disposisikasi.html?id='+ loaddata.id_permohonan + '" data-ajax="false">'+ loaddata.id_permohonan + '</a></li>');
						});
					}
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#conn_failed').show();
				}
		});	
}	
});










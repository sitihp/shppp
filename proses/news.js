$(document).ready(function() {

$('#loading').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://sitihp.com/mobile/DBConnect2.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						AmbilData = data.items;
							$('#loading').hide();
							$('#tampilData').show();
							$.each(AmbilData, function(index, loaddata) {
							$('#sispakList').append(
								'<li data-role="list-divider" data-theme="a" class="listview-custom"><a href="saran2.html?id='+ loaddata.id_permohonan + '" data-ajax="false">'+ loaddata.id_permohonan + '</a></li>');
							});
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#conn_failed').show();
				}
		});	
}
	

});










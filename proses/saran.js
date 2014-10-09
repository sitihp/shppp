$(document).ready(function() {
				
		$("#proses").click( function(e){
			var strNama			= $("#nama").val();
			var strEmail		= $("#email").val();
			var strPelanggan	= $("#data_pelanggan").val();
			var strHP			= $("#number").val();
			var strOS			= $("#os").val();
			var strKeluhan		= $("#masukan").val();
			e.preventDefault();
			
			if(strNama==''){
				$('#required').show();
			}else if(strEmail==''){
				$('#required').show();
			}else if(strHP==''){
				$('#required').show();
			}else if(strKeluhan==''){
				$('#required').show();
			}else{
				$('#formsaran').hide();
				$('#required').hide();
				$('#loading_panel').show();
				KirimSaran();
			}
		});
	
	
		

function KirimSaran(){
var idKategori = window.location.search.substring(4);

	//var serviceURL = "http://localhost/shpratama-mobile/mobile/";
	
	var strNama			= $("#nama").val();
	var strEmail		= $("#email").val();
	var strPelanggan	= $("#data_pelanggan").val();
	var strHP			= $("#hp").val();
	var strOS			= $("#os").val();
	var strKeluhan		= $("#masukan").val();
	
	$.ajax({
				type : 'GET',
				url : "http://sitihp.com/mobile/DBinsert.php",
				async: true,
				data: {
					strNama: strNama,
					strEmail: strEmail,
					strPelanggan: strPelanggan,
					strHP: strHP,
					strOS: strOS,
					strKeluhan: strKeluhan,
					idKategori : idKategori
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var cek = data.result;
						if(cek=='Sukses'){
							$('#loading_panel').hide();
							$('#sukses').show();
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready










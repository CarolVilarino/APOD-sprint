//https://api.nasa.gov/planetary/apod?api_key=gbKLuQ5PBhAnauk3dyQWBlPdoOiGfOcVzbgouHsS

const chaveApi = 'gbKLuQ5PBhAnauk3dyQWBlPdoOiGfOcVzbgouHsS'

$('form').submit( function (event) { 
    event.preventDefault();
})

$("#btn").click(function () {
    const data = new Date($('#data').val()); 
    $("#mostra-nome").text(data);
    console.log(data)
    atualizaImagem ()
});
  
function atualizaImagem () {
    
    const chaveApi = 'gbKLuQ5PBhAnauk3dyQWBlPdoOiGfOcVzbgouHsS'
    const dataRecebida = $('#data').val()
    $.ajax({ 
        url: `https://api.nasa.gov/planetary/apod?api_key=${chaveApi}&date=${dataRecebida}`,
        success: function (retorna) {  
            
            try {

                const imagem = retorna.hdurl 
                $('#texto').text(retorna.explanation)
                if(retorna.media_type == 'image') {
                    if($('img-container').show()) {
                        $('video-container').hide()
                    } 
                    $('#img-api').attr('src', imagem)  
                } if (retorna.media_type == 'video') {
                    if ($('video-container').show()) {
                        $('img-container').hide()
                    }
                    
                    $('#video-api').attr('src', retorna.hdurl)  
                }  
            } catch (error) {
                alert('data invalida');
            }

        }
    })
}
 
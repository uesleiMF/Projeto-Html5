var imagens = [
    "https://grupobracosabertos.com.br/wp-content/uploads/2020/03/Como-ajudar-uma-pessoa-com-depressao-768x512.jpg",
    "https://i1.wp.com/hospitalsantamonica.com.br/wp-content/uploads/2019/08/depressao-doencas-cronicas.jpg?w=1024&ssl=1",
    "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_depressao_tristeza6.jpg?quality=70&strip=info",
    "https://lh5.googleusercontent.com/proxy/G4eg3lND-ciDip9X-o-BQFT6qP3g4AwUAV24UUukAH3GzjA9B6S3pHDI-7zXaqkuyjemHCbJsoPQ50dJni-SgLGFv_9MDnqHNHRMZofAsH82neFQs7b2bwZ6V-2ScrBa8djYdHOsY-OIH28PXbcejOG9m2DkGA=w1200-h630-p-k-no-nu" 
 ];
  
 function trocar(){
    var img = document.getElementById("Deus");
    var img_src = img.src;
    var img_idx = imagens.indexOf(img_src);
    img.src = imagens[ img_idx == imagens.length-1 ? 0 : img_idx+1 ];
 } 

 var fotos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4c0ciXnjzsWXOj-tfZtoRYNIt8Dpi7z-IGCILv3E2UEnMu3nf2odieqZ9SoyAg5slCs&usqp=CAU",
    "http://1.bp.blogspot.com/-BmaB4zl3x-A/UqSPIZ10PbI/AAAAAAAABJo/A_-QTAMszFc/s640/obra_salvifica.jpg",
    "https://4.bp.blogspot.com/-KqynROmf9DY/VJc7gJ-r3lI/AAAAAAAACKQ/CmX9X_NmsPU/s1600/levantar%2Bdas%2Bm%C3%A3os.jpg",
    "https://1.bp.blogspot.com/-Zy373Hbq0Yw/WFBw6GV9NeI/AAAAAAAAAwg/0izRl9wlBa8jaVlG8ca4qMznhW7EHb8QQCLcB/s1600/atitude-mulher-feliz.jpg"
 ];
  
 function mudar(){
    var img = document.getElementById("Jesus");
    var img_src = img.src;
    var img_idx = fotos.indexOf(img_src);
    img.src = fotos[ img_idx == fotos.length-1 ? 0 : img_idx+1 ];
 } 
 

 
 
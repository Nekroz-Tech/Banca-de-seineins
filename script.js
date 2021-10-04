var nomeDoManga = ["Berserk", "Chainsaw Man", "Gantz", "Vagabond"];
var imagemDoManga = [
  "https://c4.wallpaperflare.com/wallpaper/1007/699/748/berserk-anime-girls-anime-boys-night-eclipse-hd-wallpaper-preview.jpg",

  "https://www.enwallpaper.com/wp-content/uploads/2021/07/664e5513e25f4103bb1dc6f01fbdb973.jpg",

  "https://www.teahub.io/photos/full/214-2140217_gantz-0-osaka-team.jpg",

  "https://fsa.zobj.net/crop.php?r=C__AeVY6S0Jn20sLASJWuTZ-hFMMYE5qboylcaWChzgDl5ADX8-_fVMLt_H3Oell66qIR6yNhImrcgoFYKa51kv4_PMyqDhsa19fL5u0DGfSbrhyzCrpX1_71qsAgarZk50Xoj9xtJ5_w6q6bmn9mylLZLI49asxCGLMw1ApK-tp27SiQAdBYhMTMxObWlfTKvKxHdHHY3N6cmVt"
];

function adicionarManga() {
  var campoAddImagem = document.getElementById("addImagem").value;
  var elementoManga = "<img src=" + campoAddImagem + ">";

  var campoAddNome = document.getElementById("addNome").value;

  var AddNaLista = document.getElementById("addAqui");
  AddNaLista.innerHTML = elementoManga;

  document.getElementById("addNomeAqui").innerHTML = campoAddNome;
}
for (i = 0; i < imagemDoManga.length; i++) {
  document.getElementById("listaDeMangas").innerHTML +=
    "<img src=" +
    imagemDoManga[i] +
    ">" +
    '<div class="nomeManga">' +
    nomeDoManga[i] +
    "</div>";
}
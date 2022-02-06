let musica = document.querySelector('audio')
let player = document.querySelector('#pause')
let pause = document.querySelector('#play')
let inicio = document.querySelector('#inicio')
let final = document.querySelector('#final')

let indexMusica = 0;
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.all-content h1');
let nomeArtista = document.querySelector('.all-content h2');

let musicas = [
    {titulo:'Dont Wanna',artista:'Jazz',src:'./musicas/musica1.mp3',img:'https://i.pinimg.com/236x/6a/5b/f5/6a5bf5d583d966fc3b8752e7ec712224.jpg'},
    {titulo:'Modern Attempt',artista:'Pop',src:'./musicas/Modern Attempt - TrackTribe.mp3',img:'https://i.pinimg.com/236x/47/1c/de/471cdec3cf219adf0f8293d04692c8f1.jpg'},
    {titulo:'Smoke Jacket',artista:'Pop/Jazz',src:'./musicas/Smoke Jacket Blues - TrackTribe.mp3',img:'https://i.pinimg.com/236x/56/2b/f1/562bf16ce76823b0cd4db4e00ea3481a.jpg'}
   

]
renderizarMusica(indexMusica)  ;
player.addEventListener('click',()=>{
musica.play();
player.style.display ='none'
pause.style.display ='inline'

})

pause.addEventListener('click',()=>{
musica.pause();
pause.style.display ='none'
player.style.display ='inline'

})

musica.addEventListener('timeupdate',()=>{
    let barra = document.querySelector('progress')

barra.style.width= Math.floor((musica.currentTime/musica.duration)*100) + '%';
inicio.textContent=segundosParaMin(Math.floor(musica.currentTime))
})

document.querySelector('#voltar').addEventListener('click',()=>{
    indexMusica--;
   if(indexMusica < 0){
        indexMusica = 2
   }
    renderizarMusica(indexMusica)  
})
document.querySelector('#avancar').addEventListener('click',()=>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0
   }
   
renderizarMusica(indexMusica)
})

function segundosParaMin(segundos){
    let campoMinuto = Math.floor(segundos/60)
    let campoSegundos = segundos % 60;

    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinuto+':' +campoSegundos
}
final.textContent=segundosParaMin(Math.floor(musica.duration))

function renderizarMusica(index){

    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata',()=>{
        nomeMusica.textContent=musicas[index].titulo;
        nomeArtista.textContent=musicas[index].artista;
        imagem.src=musicas[index].img;
        
        final.textContent=segundosParaMin(Math.floor(musica.duration))
    })
}
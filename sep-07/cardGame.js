const game = new PIXI.Application({
    width:800,
    height:600,
    backgroundColor:0x3366FF,
        
});
document.getElementById('game').append(game.view);
loadAssets([
    { name:'back' url: './backImg.png'},
    { name:'front' url: './frntImg.png'}
    
]);
//-------
const pBar = document.getElementById('bar');
function preload(e) {
    pBar.style.width = e.progress*2 +'%';
    pText.innerText =e.progress +"%";
    if(e.progress === 100) {
        document.getElementById('loader').style.display='none';
    }
    console.log(e.progress);
}

function loadAssets(list, callback) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
}
//------------
function start(loader,resources) {
    console.log('param', arguments);
    const back = PIXI.Sprite.from(resources[back].texture);
    back.scale.set(0.2);
    game.stage.addChild(back);


    const front = PIXI.Sprite.from(resources[front].texture);
    back.scale.set(0.2);
    game.stage.addChild(front);
}


var drag = false;

function Track(p){
    document.getElementById('info').innerHTML = 'Pos X : ' + p.pageX + '<br />Pos Y : ' + p.pageY;
       
    if(drag){
        document.getElementById('canvas').innerHTML+='<line x1="'+p.pageX+'" x2="'+0+'" y1="'+p.pageY+'" y2="'+0+'" stroke="'+getRandomColor()+'" stroke-width="3"/>';
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Drag(bool) {
    drag = bool;
}

addEventListener('mousemove', Track, false);
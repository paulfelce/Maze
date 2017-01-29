var row = 1
var col = 1

$(function() {
  
  fill_squares()
  set_square(1, 1, 'XX');
  hide_buttons();
})

function move(direction) {
  set_square(row, col, '');
  switch (direction) {
    case 'right':
      col++;
      break;
    case 'left':
      col--;
      break;
    case 'up':
      row--;
      break;
    case 'down':
      row++;
      break;

  }
  set_square(row, col, 'XX');
  hide_buttons();
}

//function to put text in a grid ref
function set_square(tr, tc, td) {
  $('#maze tr:eq(' + tr + ') td:eq(' + tc + ')').text(td)
 }

//function to colour in a grid ref
function colour_square(tr,tc){
  $('#maze tr:eq(' + tr + ') td:eq(' + tc + ')').css('background','blue')
  
}
//show only buttons that make legal moves
function hide_buttons(){
  
  $('#up').hide();
  $('#down').hide();
  $('#left').hide();
  $('#right').hide();
  
  if($('#maze tr:eq(' + row + ') td:eq(' + (col+1) + ')').css('background')!=$('#maze tr:eq(0) td:eq(0)').css('background'))
    $('#right').show()
  
  //compare with a known blue square
  if($('#maze tr:eq(' + row + ') td:eq(' + (col-1) + ')').css('background')!=$('#maze tr:eq(0) td:eq(0)').css('background'))
    $('#left').show()
  
  if($('#maze tr:eq(' + (row-1) + ') td:eq(' + col + ')').css('background')!=$('#maze tr:eq(0) td:eq(0)').css('background'))
    $('#up').show()
  
    if($('#maze tr:eq(' + (row+1) + ') td:eq(' + col + ')').css('background')!=$('#maze tr:eq(0) td:eq(0)').css('background'))
    $('#down').show()
  
  
  
}

//fill in squares to make the maze
function fill_squares(){
  for(i=0;i<10;i++)
    {
      colour_square(i,0)
      colour_square(i,9)
      colour_square(0,i)
      colour_square(0,9)
    }
  
      colour_square(2,1)
      colour_square(2,2)
      colour_square(2,3)
      colour_square(2,5)
      colour_square(2,6)
      colour_square(2,7)
      
      colour_square(3,5)
      colour_square(4,5)
      
      colour_square(4,4)
      colour_square(4,3)
      colour_square(4,2)
      //set target squaer
        $('#maze tr:eq(5) td:eq(5)').css('background','red')
      
    
      
  
}

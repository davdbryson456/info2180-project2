
window.onload=operation;
	
		function operation(){

			var left=0;// grid values
			var top=0;

			whiteSpaceX = '300px';
    		whiteSpaceY = '300px';

			var puzzlearea=[];//puzzlearea as a list
			puzzlearea=document.getElementById("puzzlearea");
			var pchildren=puzzlearea.children; //puzzle area divisions
			
			for(var a=0; a < pchildren.length; a++){


				pchildren[a].classList.add("puzzlepiece");

				pchildren[a].style.top =top+"px"; //top initialised to 0
				pchildren[a].style.left =left+"px";// left initialised to 0
				
				pchildren[a].style.backgroundPosition ="-" + pchildren[a].style.left +" "+"-"+ pchildren[a].style.top;

				if(left==300){ 
					top+=100;
					left=0;
				}else{
					left+=100;
				}; 

				pchildren[a].onmouseover = function(){
        
		            if (canMove(parseInt(this.innerHTML))){
		            
		               this.classList.add("movablepiece");
		            }
       		  	};

        		pchildren[a].onmouseout = function(){
        			
	            	this.classList.remove("movablepiece");
	        	};

            	pchildren[a].onclick = function(){
        
		            if (canMove(parseInt(this.innerHTML))){
		            	
		            	this.style.transition = "all 300ms";
		                swap(this.innerHTML-1);
		                
		            }

				}// onlclick closing
	};//forloop closing bracket


		    var shufflebutton = document.getElementById('shufflebutton');
		    shufflebutton.onclick = function(){

	        for (var i=0; i<100; i++){
	        
	            var random = parseInt(Math.random()* 100) %4;
	            if (random == 0)
	            {
	                var tmp = moveUp(whiteSpaceX, whiteSpaceY);
	                if ( tmp != -1)
	                {
	                    swap(tmp);
	                }
	            }
	            if (random == 1)
	            {
	                var tmp = moveDown(whiteSpaceX, whiteSpaceY);
	                if ( tmp != -1) 
	                {
	                    swap(tmp);
	                }
	            }

	            if (random == 2)
	            {
	                var tmp = moveLeft(whiteSpaceX, whiteSpaceY);
	                if ( tmp != -1)
	                {
	                    swap(tmp);
	                }
	            }

	            if (random == 3)
	            {
	                var tmp = moveRight(whiteSpaceX, whiteSpaceY);
	                if (tmp != -1)
	                {
	                    swap(tmp);
	                }
	            }
	        }// end of for loop
    }//end of shuffle button
}//operation closing

				  	 
function moveLeft(x, y){

	var puzzlearea=[];//puzzlearea as a list
	puzzlearea=document.getElementById("puzzlearea");
	var pchildren=puzzlearea.children; 

    var X = parseInt(x);
    var Y = parseInt(y);

    if (X > 0)
    {
        for (var i = 0; i < pchildren.length; i++) 
        {
            if (parseInt(pchildren[i].style.left)+100==X && parseInt(pchildren[i].style.top) == Y)
            {
                return i;
            } 
        }
    }
    else 
    {
        return -1;
    }
};

function moveRight(x, y){

	var puzzlearea=[];//puzzlearea as a list
	puzzlearea=document.getElementById("puzzlearea");
	var pchildren=puzzlearea.children; 

    var X = parseInt(x);
    var Y = parseInt(y);

    if (X < 300)
    {
        for (var i =0; i<pchildren.length; i++){

            if (parseInt(pchildren[i].style.left)-100==X  && parseInt(pchildren[i].style.top) == Y) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
};


function moveUp(x, y){

	var puzzlearea=[];//puzzlearea as a list
	puzzlearea=document.getElementById("puzzlearea");
	var pchildren=puzzlearea.children; 

    var X = parseInt(x);
    var Y = parseInt(y);

    if (Y > 0)
    {
        for (var i=0; i<pchildren.length; i++)
        {
            if (parseInt(pchildren[i].style.top)+100==Y && parseInt(pchildren[i].style.left)==X) 
            {
                return i;
            }
        } 
    }
    else 
    {
        return -1;
    }
}

function moveDown(x, y){

	var puzzlearea=[];//puzzlearea as a list
	puzzlearea=document.getElementById("puzzlearea");
	var pchildren=puzzlearea.children; 

    var X = parseInt(x);
    var Y = parseInt(y);

    if (Y < 300)
    {
        for (var i=0; i<pchildren.length; i++)
        {
            if (parseInt(pchildren[i].style.top)-100==Y && parseInt(pchildren[i].style.left)==X) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}
 
function swap(where){

	var puzzlearea=[];//puzzlearea as a list
	puzzlearea=document.getElementById("puzzlearea");
	var pchildren=puzzlearea.children; 

    var temp = pchildren[where].style.top;

    
    pchildren[where].style.top = whiteSpaceY;
    whiteSpaceY = temp;

    temp = pchildren[where].style.left;
    pchildren[where].style.left = whiteSpaceX;
    whiteSpaceX = temp;
}


function canMove(tile){

    if (moveLeft(whiteSpaceX, whiteSpaceY) == (tile-1))
    {
        return true;
    }

    if (moveDown(whiteSpaceX, whiteSpaceY) == (tile-1))
    {
        return true;
    }

    if (moveUp(whiteSpaceX, whiteSpaceY) == (tile-1))
    {
        return true;
    }

    if (moveRight(whiteSpaceX, whiteSpaceY) == (tile-1))
    {
        return true;
    }
}



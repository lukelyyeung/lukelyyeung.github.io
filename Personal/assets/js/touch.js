document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if (! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( yDiff ) > Math.abs( xDiff ) ) {
        if ( yDiff < 0 ) {
            $("#carouselSPAControls").carousel("prev"); 
        } else { 
            $("#carouselSPAControls").carousel("next"); 
        }                                                                 
    }

    xDown = null;
    yDown = null;                                             
};
$(function(){
    let $slider = $('#slider');
    let $slideContainer= $slider.find('.slides');
    let $slides= $slideContainer.find('.slide'); 
    let $leftarrow=$('#arrow-left');
    let $rightarrow=$('#arrow-right');
    let $botharrows=$('.arrow');
    let currentSlide=1; 
    let interval;

    function startSlider(){
        interval=setInterval(function(){
            $('#slider .slides').animate({'margin-left':'-=1536px'},1000,function(){
                currentSlide++;
                if(currentSlide===$slides.length){
                    currentSlide=1;
                    $slideContainer.css('margin-left',0);
                }
            });
        },3000);
    }
    function pauseSlider(){
        clearInterval(interval);
    }

    $slider.on('mouseenter',pauseSlider).on('mouseleave',startSlider);
    $botharrows.on('mouseenter',startSlider).on('mouseleave',pauseSlider);
    
    $rightarrow.on('click',function(){
            $('#slider .slides').animate({'margin-left':'-=1536px'},1000,function(){
                currentSlide++;
                if(currentSlide===$slides.length){
                    currentSlide=1;
                    $slideContainer.css('margin-left',0);
                }
            });
    })
    $leftarrow.on('click',function(){
        currentSlide--;
        if(currentSlide===0){
            currentSlide=$slides.length;
            $slideContainer.animate({'margin-left':'-=6144px'},1000);
        } 
        else{
            $('#slider .slides').animate({'margin-left':'+=1536px'},1000);
        }
    })

    startSlider();



});
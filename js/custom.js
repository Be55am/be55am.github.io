/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();

    $('#theform').click((event) => {
        // event.preventDefault();
        console.log('Submiting ...');
        const object = {
            name: $('#name').val(),
            text: $('#message').val(),
            mail: $('#email').val()
        };
        fetch('https://a420p45omb.execute-api.us-east-1.amazonaws.com/default/portfolio-mailsender', {




            method : 'post',
            mode: 'no-cors',
            body: JSON.stringify(object)
        }).then( (data) => {
            console.log('data : '+ data);
            alert("Message sent successfully !");

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';


        }).catch( (error) => console.log(error) )
     })

});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */

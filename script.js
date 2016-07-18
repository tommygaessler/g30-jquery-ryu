$(document).ready(function() {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png

    // $('body').css({'background-image': 'url(background.png)', 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover'})

    $('body').css({ 'margin': 'auto', 'max-width': '800px', 'background': 'black'})

    $('<img class="background" src="background.png">').appendTo('body')

    $('.background').css({'z-index':'-1','position': 'absolute', 'margin': 'auto', 'max-width': '800px', 'width': '800px'})

    $('<img class="goodguy" src="http://i.imgur.com/90Mmdcm.png">').appendTo('body')

    $('<img class="enemy" src="enemy.gif">').appendTo('body')

    $('.goodguy').css({'position': 'relative', 'top': '220px'});

    // $('.enemy').css({'position': 'absolute', 'top': '110px', 'right': '20px', 'width': '200px'});
    $('.enemy').css({'float': 'right', 'width': '200px', 'margin-top': '220px', 'z-index': '1'});

    // change the img src on hover to the animated gif of Ryu
    // url: http://i.imgur.com/nTj3Fxx.gif
    // when the user 'unhovers' change back to static Ryu

    $('.goodguy').hover(function(){
      $(this).attr('src', 'http://i.imgur.com/nTj3Fxx.gif');
    },
    function(){
      $(this).attr('src', 'http://i.imgur.com/90Mmdcm.png');
      $('.fire').remove();
    });

    // when a user clicks, change Ryu's stance
    // url: http://i.imgur.com/Rfj0a80.png

    $('.goodguy').on('click', function(){
      $(this).attr('src', 'http://i.imgur.com/Rfj0a80.png');
      $('<img class="fire" src="http://i.imgur.com/oTyQRvX.gif">').appendTo('body');
      $('.fire').css('position', 'absolute');
      $('.fire').css('top', '270px');
      // $(".fire").animate({left: '100vw'}, 500);
      $('.fire').animate({ left: '65vw' }, 500, function () {
        $('.fire').attr('src', 'blowup.jpg');
        $('.fire').css('width', '200px');
        $('.fire').css('position', 'absolute');
        $('.fire').css('top', '200px');
        $('.fire').fadeOut(700);
        $('.enemy').fadeOut(700);
      });
    });



    // add the Hadouken!
    // url: http://i.imgur.com/oTyQRvX.gif



    // animate that Hadouken

    // let Ryu relax
    // url: http://i.imgur.com/90Mmdcm.png

});

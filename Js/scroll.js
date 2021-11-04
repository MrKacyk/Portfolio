jQuery(function($)
        {

            $.scrollTo(0);

            $('.srolldown').click(function() { $.scrollTo($('#jquery'), 900); });
            $('.srollup').click(function() { $.scrollTo($('#jqueryV1'), 900); });

        }  
        
        );
        
         $(window).scroll(function()
         {
            if($(this).scrollTop()>350) $('.srollup').fadeIn();
            else  $('.srollup').fadeOut();

            if($(this).scrollTop()<50) $('.srolldown').fadeIn();
            else  $('.srolldown').fadeOut();
         }
         ); 
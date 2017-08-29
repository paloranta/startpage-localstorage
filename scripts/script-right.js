(function ($) {
    
    })(jQuery);
    $(document).ready(function () {
        var $ul = $('#fav-right');
        var $title = $('#title-r');
        var $url = $('#url-r');
    
        //get items from local storage
        if (localStorage.getItem('fav-right')) {
            $ul.html(localStorage.getItem('fav-right'));
        }
    
        // add new item
        $('#add-right').click(function () {
    
            //add new item
            $('#fav-right').append('<li><a href="' + $url.val() + '">' + $title.val() + '</a><button class="removebtn">x</button></li>');
    
            //save changes to localstorage
            localStorage.setItem('fav-right', $ul.html());
    
            //reset form
            $title.val("");
            $url.val("http://");
            $("#add-link-form-r").slideToggle("100");
    
        });
    
        //remove item
        $("#fav-right").on('click', '.removebtn', function () {
            $(this).parent().remove();
            //save changes to localstorage
            localStorage.setItem('fav-right', $ul.html());
        });
    
        //form toggle
        $("#new-link-button-r").click(function () {
            $("#add-link-form-r").slideToggle("100");
        });
    
    });
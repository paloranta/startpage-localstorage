(function ($) {
    
    })(jQuery);
    $(document).ready(function () {
        var $ul = $('#fav-left');
        var $title = $('#title-l');
        var $url = $('#url-l');
    
        //get items from local storage
        if (localStorage.getItem('fav-left')) {
            $ul.html(localStorage.getItem('fav-left'));
        }
    
        // add new item
        $('#add-left').click(function () {
    
            //add new item
            $('#fav-left').append('<li><a href="' + $url.val() + '">' + $title.val() + '</a><button class="removebtn">x</button></li>');
    
            //save changes to localstorage
            localStorage.setItem('fav-left', $ul.html());
    
            //reset form
            $title.val("");
            $url.val("http://");
            $("#add-link-form-l").slideToggle("100");
    
        });
    
        //remove item
        $("#fav-left").on('click', '.removebtn', function () {
            $(this).parent().remove();
            //save changes to localstorage
            localStorage.setItem('fav-left', $ul.html());
        });
    
        //form toggle
        $("#new-link-button-l").click(function () {
            $("#add-link-form-l").slideToggle("100");
        });
    
    });
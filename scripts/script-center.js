(function ($) {
    
    })(jQuery);
    $(document).ready(function () {
        var $ul = $('#fav-center');
        var $title = $('#title-c');
        var $url = $('#url-c');
    
        //get items from local storage
        if (localStorage.getItem('fav-center')) {
            $ul.html(localStorage.getItem('fav-center'));
        }
    
        // add new item
        $('#add-center').click(function () {
    
            //add new item
            $('#fav-center').append('<li><a href="' + $url.val() + '">' + $title.val() + '</a><button class="removebtn">x</button></li>');
    
            //save changes to localstorage
            localStorage.setItem('fav-center', $ul.html());
    
            //reset form
            $title.val("");
            $url.val("http://");
            $("#add-link-form-c").slideToggle("100");
    
        });
    
        //remove item
        $("#fav-center").on('click', '.removebtn', function () {
            $(this).parent().remove();
            //save changes to localstorage
            localStorage.setItem('fav-center', $ul.html());
        });
    
        //form toggle
        $("#new-link-button-c").click(function () {
            $("#add-link-form-c").slideToggle("100");
        });
    
    });
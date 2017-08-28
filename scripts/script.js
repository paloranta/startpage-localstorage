(function ($) {

})(jQuery);
$(document).ready(function () {
    var $ul = $('#fav-center');
    var $title = $('#title-c');
    var $url = $('#url-c');

    var $ul = $('#fav-left');
    var $title = $('#title-l');
    var $url = $('#url-l');

    var $ul = $('#fav-right');
    var $title = $('#title-r');
    var $url = $('#url-r');

    //get items from local storage
    if (localStorage.getItem('fav-center')) {
        $ul.html(localStorage.getItem('fav-center'));
    }

    if (localStorage.getItem('fav-left')) {
        $ul.html(localStorage.getItem('fav-left'));
    }

    if (localStorage.getItem('fav-right')) {
        $ul.html(localStorage.getItem('fav-right'));
    }

    // add new item left
    $('#add-left').click(function () {

        //add new item left
        $('#fav-left').append('<li><a href="' + $url.val() + '">' + $title.val() + '</a><button class="removebtn">x</button></li>');

        //save changes to localstorage
        localStorage.setItem('fav-left', $ul.html());

        //reset form
        $title.val("");
        $url.val("http://");
        $("#add-link-form-l").slideToggle("100");

    });

    // add new item center
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

    // add new item right
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


    //remove item center
    $("#fav-center").on('click', '.removebtn', function () {
        $(this).parent().remove();
        //save changes to localstorage
        localStorage.setItem('fav-center', $ul.html());
    });

    //remove item left
    $("#fav-left").on('click', '.removebtn', function () {
        $(this).parent().remove();
        //save changes to localstorage
        localStorage.setItem('fav-left', $ul.html());
    });

    //remove item right
    $("#fav-right").on('click', '.removebtn', function () {
        $(this).parent().remove();
        //save changes to localstorage
        localStorage.setItem('fav-right', $ul.html());
    });


    //form toggle center
    $("#new-link-button-c").click(function () {
        $("#add-link-form-c").slideToggle("100");
    });

    //form toggle left
    $("#new-link-button-l").click(function () {
        $("#add-link-form-l").slideToggle("100");
    });

    //form toggle right
    $("#new-link-button-r").click(function () {
        $("#add-link-form-r").slideToggle("100");
    });

});
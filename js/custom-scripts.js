$(window).ready(function () {

    $('.custom-select .current-value').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).find('span').text();
            var newPhone = $(this).find('a').text();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-value').text(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').text(newPhone);
            $(this).parents('.select-city').siblings('.link-phone').find('a').attr('href', newLink);

            $(this).parents('.select-city').removeClass('active');

        }

    });

    $('.select-form ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newChoice = $(this).text();

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-form').find('.current-value').text(newChoice);
            $(this).parents('.select-form').find('.hidden-field').find('input').attr('val', newChoice);

            $(this).parents('.select-form').removeClass('active');

        }

    });

    $('.select-options .current-value').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.select-options ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newChoice = $(this).text();
            var newIndex = $(this).index();
            var optionsWrapper = $(this).parents('.select-options').siblings('.additional-options');

            $(this).addClass('active');
            $('<div class="option-item">' + newChoice + '<div class="option-close"></div></div>').attr('id', 'item#' + newIndex).appendTo(optionsWrapper);

            $(this).parents('.select-options').removeClass('active');

        }

    });

    $('html').on('click', '.option-close', function() {
        var curNumber = $(this).parent().attr('id').split('#')[1];
        $(this).parent().detach();
        $('.select-options ul li').eq(curNumber).removeClass('active');
    });

});
$( document ).ready(function(){


    /*---- Випадаючий блок з телефоном в хедері -----*/
    $('.drop-active').click(function () {
        $(this).toggleClass('active');
        $('.drop-down').toggleClass('active');
    });
    $(document).click(function (event) {
        if ($(event.target).closest(".wrapper").length) return;
        $(".drop-down").removeClass('active');
        $(".drop-active").removeClass('active');
        event.stopPropagation();
    });

    /*---- Кінець випадаючого блоку з телефоном в хедері -----*/

    /*---- Випадаючий блок з мовами в хедері -----*/
    $('.drop-active-lang').click(function () {
        $(this).toggleClass('active');
        $('.another_lang').toggleClass('active');
    });
    $(document).click(function (event) {
        if ($(event.target).closest(".lang").length) return;
        $(".another_lang").removeClass('active');
        $(".drop-active-lang").removeClass('active');
        event.stopPropagation();
    });
    /*---- Кінець випадаючого блоку з мовами -----*/



    /*---- Ховер на меню -----*/
    $('nav a').hover(function () {
        $(this).parent('li').toggleClass('active');
    });
    /*---- Кінець ховера на меню -----*/


    /*---- Слайдер на головній сторінці і коментарях-----*/
    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        // fade: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.goods_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    /*---- Кінець слайдера на головній сторінці і коментарях-----*/



    /*------------mobile menu---------------*/
    $('.menu-mobile-btn').click(function(e){
        $('.mobile_menu').toggleClass('active');
        e.preventDefault();
        $(this).toggleClass('active');
        $('header').toggleClass('is_opened');
    });
    /*------------end mobile menu---------------*/


    /*--------- Збільшення картинки при ховері --------------------*/
    $(".image_zoom").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    });
    $(document).on('click','.item_gal',function(e){
        e.preventDefault();
        var dataZoomImg = $(this).attr('data-zoom-image');
        var dataImg = $(this).attr('data-image');
        var mainImg = $('#img');
        mainImg.attr('src',dataImg);
        mainImg.data('zoom-image',dataZoomImg).elevateZoom({
            zoomType: "inner",
            cursor: "crosshair"
        });

    });
    /*---------Кінець  збільшення картинки при ховері --------------------*/


    /*------------- Вибір розміру---------------------*/
    $('.size a').click(function (e) {
        e.preventDefault();
        $('.size a').removeClass('active');
        $(this).addClass('active');
    });
    /*-------------Кінець вибору розміру---------------------*/


    /*--------Змінка кількості товару--------*/
    var count = 0;
    $('.text').html(count);
    $('.down').click(function () {

        var target= $(this).next();
        var count = target.text();
        if(count>= 2){
            target.text(parseInt(count)-1);
        }
    });
    $('.up').click(function () {
        var target= $(this).prev();
        var count = target.text();
        target.text(parseInt(count)+1);

    });
    /*--------Кінець зміни кількості товару--------*/


    /*---------Сторінка каталог фільтр ціни -  range price---------------------------*/
    $(function(){
        var rangeSlider = $( "#slider-range" );
        rangeSlider.slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $( "#price_start" ).val(ui.values[ 0 ]);
                $( "#price_end" ).val( ui.values[ 1 ]);

            }
        });
        $( "#price_start" ).val( rangeSlider.slider( "values", 0 ) );
        $( "#price_end" ).val(rangeSlider.slider( "values", 1 ) );

    });
    /*---------Кінець фільтр ціни  range price----------------------*/


    /*---------select---------------------*/
    $('#select,.select').niceSelect();
    /*---------select---------------------*/


    /*---------Особистий кабінет зміна паролю---------------------*/
    $('.change_password_button').click(function (e) {
        e.preventDefault();
        $(this).removeClass('active');
        $(this).parents().find('.change_password').slideDown();
        $('.cancel_change_password').addClass('active');
        $('#password').hide();
    });
    $('.cancel_change_password').click(function (e) {
        e.preventDefault();
        $(this).removeClass('active');
        $(this).parents().find('.change_password').slideUp();
        $('.change_password_button').addClass('active');
        $('#password').show();
    });
    /*---------Кінець особистого кабінету -  зміни паролю---------------------*/


    /*---------Особистий кабінет переключення вкладок---------------------*/
    $('.tabs_wrapper p').click(function () {
        var id = $(this).data('id');
        $('.tabs_wrapper p').removeClass('active');
        $(this).addClass('active');
        $('.tabs_item').removeClass('active');
        $(this).parents('.cabinet').find('#'+id).addClass('active');
    });
    /*---------Кінець переключення вкладок---------------------*/


    ///*-----------------------tabs-----------------------------------------------------*/
    $(function() {
        $('ul.tabs').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs_wrapper').find('.tabs_item').hide().eq($(this).index()).show();

        });

    });
    /*-----------------------tabs-----------------------------------------------------*/


    /*-------------------------Історія замовлень переключення періоду-----------------------*/
    $('.tabs_history li').click(function(){
        $('.tabs_history li').removeClass('active');
        $(this).addClass('active')
    });
    /*-------------------------Кінець історії замовлень переключення періоду-----------------------*/


    /*------------------------order------------------------------*/
    $('.tabs_order p a').click(function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var parent = $(this).parents('.wrapper');
        $('.tabs_order p a').removeClass('active');
        $(this).addClass('active');
        parent.find('.auth_item').removeClass('active');
        parent.find('#item_'+ id).addClass('active');
    });
    /*------------------------order------------------------------*/


    /*------------------------Виклик фільтра на мобільній версії------------------------------*/
    $('.filter-button').click(function (e) {
        e.preventDefault();
        $('.filter').addClass('active');
    });
    $('.close_button').click(function () {
        $('.filter').removeClass('active');
    });
    $('.part h3').click(function () {
        $(this).next().slideToggle();
    });
    /*------------------------Кінець виклику фільтра на мобільній версії------------------------------*/


    /*------------------------mask------------------------------*/
    $('.phone').mask("+38(099) 999-9999");
    /*------------------------end mask------------------------------*/


    /*----------------------Оформлення замовлення------------------------*/
    $('.step').on('submit',function (e) {
        console.log('step1');
        e.preventDefault();
        $('.step input.validate').each(function () {
            console.log('step2');
            if($(this).val().length === 0){
                $(this).addClass('error');
                e.preventDefault();
            }
            else {
                $.ajax({
                    type: "POST",
                    // url: "form_handler.php",
                    // data: $(this).serialize(),
                    success: function() {
                        $('.step_1').addClass('done');
                        $('.step_2').addClass('active');
                        console.log('done');
                    }
                })
            }
        });

    });
    /*----------------------Кінець оформлення замовлення------------------------*/


    /*------------------ Зміна форми в залежності від вибраного пункту------------*/
    $('#delivery').on('change',function () {
        var value = $(this).val();
        console.log(value);
        $('.item').hide();
        if(value === 'new_post'){
            $('.new_post').show();
        }if(value === 'courier'){
            $('.courier').show();
        }if(value === 'post'){
            $('.courier,.zipcode_wrapper').show();
        }
    });
    /*------------------Кінець зміни форми в залежності від вибраного пункту------------*/


    /*--------Виклик модально вікна---------*/
    $('.modals').fancybox();
    $('#contact-form').on('submit',function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            // url: "form_handler.php",
            // data: $(this).serialize(),
            success: function() {
                console.log('sucs');
                $('#thanks').fancybox();
            }
        })

    });
    /*--------Виклик модально вікна---------*/
});

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation({
    orbit: {
        animation: 'fade',
        timer_speed: 30000,
        pause_on_hover: true,
        animation_speed: 500,
        bullets: false,
        next_on_click: true,
        navigation_arrows: false,
        slide_number: false,
        timer: false
    },
    topbar : {
        custom_back_text: false, // Set this to false and it will pull the top level link name as the back text
    }
});
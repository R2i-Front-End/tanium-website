// JavaScript Document
// DISABLE/ENABLE NAV TOGGLE
var mobileNavVisible = 768;
function toggleNav($obj) {
    if ($obj.width() > mobileNavVisible) {
        $('#toggleNav, [for="toggleNav"]').prop('disabled', true).attr('aria-hidden', true).addClass('disabled');
    } else {
        $('#toggleNav, [for="toggleNav"]').prop('disabled', false).removeAttr('aria-hidden').removeClass('disabled');
    }
}
// DOCUMENT READY
$(document).ready(function() {
    // UNCHECK DROPDOWN
    $('header nav>ul>li>a').on('focus', function() {
        $('header nav input[type="checkbox"]:checked').prop('checked', false);
    });
    // CHECK WIDTH
    toggleNav($(window));
    // ON RESIZE
    $(window).on('resize', function() {
        toggleNav($(this));
    });
});
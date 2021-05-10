let square_box = $('.square-box')
let amount_row = 5
let amount_column = 5
let position_check_left ="50%"
let position_check_top ="50%"

function drawSquare() {
    let html_square =" <table> <tbody>"
    for (let row = 0; row < amount_row; row++) {
        html_square += "<tr>";
        for (let column = 0; column <amount_column; column++) {
            html_square+=`<td><div class="content_square"></div></td>`        
        }
        html_square += "</tr>";
    } 
    html_square +=`</table> </tbody> <div class="check-note"></div>`
    square_box.html(html_square)

}
function setPostionCheckNote() {
    let check_note = $('.check-note');
    let check_note_width = $('.check-note').width()/2+"px";
    check_note.css("left",`calc(${position_check_left} - ${check_note_width})`);
    check_note.css("top",`calc(${position_check_top} - ${check_note_width})`);
}
drawSquare()
setPostionCheckNote()

/*caculate arrow position*/

function calculateArrowPosition() {
    let arrowImg = $('#arrowImg');
    let cop = $('#copRiskTitle');
    let deoxy = $('#deoxyRiskTitle');

    let copCenterY = cop.offset().top+ cop.outerHeight() / 2;
    let deoxyCenterY = deoxy.offset().top +deoxy.outerHeight() / 2;

    let imgOffsetTop = copCenterY;
    let newImgHeight = deoxyCenterY - copCenterY;

    arrowImg.offset({ top: imgOffsetTop });
    arrowImg.height(newImgHeight);
    arrowImg.width($('#arrowImgDiv').outerWidth());
 }

$(document).ready(function() {
    calculateArrowPosition();
    $(window).resize(function() {
        calculateArrowPosition();
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});
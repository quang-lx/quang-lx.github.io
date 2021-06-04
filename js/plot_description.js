let square_box = $('#square-box')
let amount_row = 5
let amount_column = 5


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
function setPostionCheckNote(checknote,position_check_left,position_check_top) {
    let check_note = $(`.${checknote}`);
    let check_note_width = check_note.width()/2+"px";
    check_note.css("left",`calc(${position_check_left} - ${check_note_width})`);
    check_note.css("top",`calc(${position_check_top} - ${check_note_width})`);
}
drawSquare()
setPostionCheckNote('check-note','50%','50%')
setPostionCheckNote('check-note1','0%','100%')
setPostionCheckNote('check-note2','50%','50%')
setPostionCheckNote('check-note3','100%','0%')

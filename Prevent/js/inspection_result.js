let square_box = $('.square-box')
let amount_row = 6
let amount_column = 6

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
drawSquare()
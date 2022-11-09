const sheet = document.querySelector('#sheet')
const rows = 1001;
const cols = 27;
let count = 0;
const namebox = document.querySelector('.namebox');

document.addEventListener('contextmenu', event => event.preventDefault());

const alphbt = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function createEl(){
    for (let i = 0; i < cols; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.className = "row-container"
        for (let j = 0; j < rows; j++) {
            const cell = document.createElement('input');
            cell.className = "cell-block" 
            cell.classList.add(`${alphbt[i-1]}`,`${j}`);
            // cell.value = `${j}-${i}`
            if(count<=26){
                rowContainer.append(cell);
            }
            else{
                count = 0
            }


            if(i == 0 && j == 0) cell.value = "";
            if(i>0 && j==0) cell.value = alphbt[i-1];
            if(i==0 && j>0) cell.value = j;


            if(i==0){
                cell.style.width = "3rem"
                cell.style.textAlign = "center";
                cell.style.pointerEvents = "none";
                cell.style.color = "rgb(85, 80, 80)";
            }
            if(j==0 && i!=0){
                cell.style.backgroundColor = "rgba(204, 204, 204, 0.2)";
                cell.style.textAlign = "center";
                cell.style.pointerEvents = "none"
                cell.style.color = "rgb(85, 80, 80)";
            }
            count++;
        }
        sheet.append(rowContainer);  
    }
}

createEl();

const cells = document.querySelectorAll('.cell-block');
cells.forEach(cell => {
    cell.addEventListener('click', (e)=>{
        console.log(e.target)
        console.log(e.target.classList)
        console.log(alphbt[e.target.classList[2]-1]+e.target.classList[1])
        namebox.innerHTML = `${e.target.classList[1]+e.target.classList[2]} <i class="fa-solid fa-caret-down"></i>`;
    });
});

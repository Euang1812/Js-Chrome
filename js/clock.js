$clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    let hour = String(date.getHours()).padStart(2,'0');
    let minute = String(date.getMinutes()).padStart(2,'0');
    let second = String(date.getSeconds()).padStart(2,'0');
    
    $clock.textContent =`${hour}:${minute}:${second}`;
    // let minute =''; 
    // minute = String(date.getSeconds());
    // if(minute.length === 2){
    //     $clock.textContent =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // }else {
    //     $clock.textContent =`${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
    // }
}
//setInterval 은 등록후 밀리초 이후에 실행이 되기 떄문에 getClock()을 미리 따로 한번 호출해준다.
getClock()
setInterval(getClock, 1000);
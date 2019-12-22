function myClock() {

    let hour = document.getElementById('hour');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('seconds');


    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;

}

let interval = setInterval(myClock, 1000);
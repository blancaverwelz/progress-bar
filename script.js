function progressBar(seconds){
    const bar = document.querySelector('.bar');
    let percentageValue = 0;
    const interval = setInterval(() => {
        bar.style.width = percentageValue + '%';
        percentageValue++;
        if (percentageValue >= 101) {
            clearInterval(interval);
        }
    }, (seconds * 1000) / 100);
}

class Clock {
    constructor() {
        this.initializeClock();
    }
    // 2. events
    initializeClock() {
        let t = setInterval( () => this.time(), 1000 );
        console.log(t)
    }
    numPad( str ) {
        let cStr = str.toString();
        if ( cStr.length < 2 ) str = 0 + cStr;
        return str;
    }
    time() {
        let currDate = new Date();
        let currSec  = currDate.getSeconds();
        let currMin  = currDate.getMinutes();
        let curr24Hr = currDate.getHours();
        let ampm     = curr24Hr >= 12 ? 'pm' : 'am';
        let currHr   = curr24Hr % 12;
        currHr       = currHr ? currHr : 12;

        let stringTime = currHr + ':' + this.numPad( currMin ) + ':' + this.numPad( currSec );
        const timeEmojiEl =document.querySelector('#time-emoji');
        const clockTime =document.querySelector('#time');
        const clockAMPM =document.querySelector('#ampm');

        if ( curr24Hr >= 5 && curr24Hr <= 17 ) {
            timeEmojiEl.innerHTML= '🌞' ;
        } else {
            timeEmojiEl.innerHTML= '🌜' ;
        }

        clockTime.innerHTML= stringTime;
        clockAMPM.innerHTML= ampm ;
    }

}
export default Clock
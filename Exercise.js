//A STOPWATCH EXERCISE
/*function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new error('The Stopwatch has already started!');
        running = true;
        startTime = new Date();
        console.log(startTime);
    };
    this.stop = function() {
        if (!running)
            throw new error('Stopwatch is not started');

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        console.log(duration);
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}
let sw = new StopWatch();  */


//Ternary Operator

let age = 22;
let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
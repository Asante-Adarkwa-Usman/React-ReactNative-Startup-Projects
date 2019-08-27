//IF- ELSE STATEMENT
let hour = new Date();
if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
} else if (hour >= 12 && hour < 6) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}
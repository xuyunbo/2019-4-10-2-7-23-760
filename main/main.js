module.exports = function main(inputs) {
    // write your code here...
    var price_start = 6;
    var price_less_than_8km = 0.8; // distance < 8km
    var price_more_than_8km = price_less_than_8km * 1.5; // distance > 8km
    var price_park_time = 0.25;
    var distance = inputs.distance;
    var parkTime = inputs.parkTime;
    var price = 0;

    if (distance < 2) {
        price = price_start;
    } else if (distance < 8) {
        price += (distance - 2) * price_less_than_8km;
    } else if (distance >= 8) {
        price += price_less_than_8km * (8 - 2) + (distance - 8) * price_more_than_8km;
    }

    price += parkTime * price_park_time


    return Math.round(price);
};
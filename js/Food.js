class food {
    constructor() {
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage("images/Milk.png");
    }

    updateFoodStock(foodStock) {
        this.foodStock = foodStock;
    }

    getFedTime(lastFed) {
        this.lastFed = lastFed;
    }

    deductFood() {
        if (this.foodStock > 0) {
            this.foodStock = this.foodStock - 1;
        }
    }

    getFoodStock() {

        return this.foodStock;
    }

    bedroom() {

        background(bedRoomImg, 550, 500);

    }

    garden() {

        background(gardenImg, 550, 500);

    }

    washroom() {

        background(washRoomImg, 550, 500);

    }

    display() {
        background("green")
        fill(255,255,254);
        textSize(15);
        if (lastFed >= 12) {

            text("last Feed: " + lastFed % 12 + "PM", 50, 30);

        }

        else if (lastFed == 0) {

            text("last Feed: 12AM ",50,30)

        }
        else{

         text("last Feed: " + lastFed + "AM",50,30)

        }

        var x = 80, y = 100;
        imageMode(CENTER);

        if (this.foodStock != 0) {

            for (var i = 0; i < this.foodStock; i++) {

                if (i % 10 == 0) {

                    x = 80;
                    y = y + 50;

                }

                image(this.image, x, y, 50, 50);

                x = x + 30;
            }
        }
    }
}
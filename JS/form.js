class Form {
  constructor() {
    this.title = createElement("h2")
    this.input = createInput("Name")
    this.button = createButton("play")
    this.greeting = createElement("h3")
  }

  display() {

    this.title.html("Car Racing Game")
    this.title.position(width / 2, 80)
    this.input.position(width / 2, 150)
    this.button.position(width / 2, 250)

    this.button.mousePressed(() => {

      this.input.hide();
      this.button.hide();
      var Name = this.input.value();
      player.name = Name;
      this.greeting.html("hello " + Name)
      this.greeting.position(350, 250);
      playerCount = playerCount + 1;
      player.index = playerCount;
      player.updateCount(playerCount)
      player.update()
    })


  }
  hideForm() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}
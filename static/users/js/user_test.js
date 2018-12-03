// This file represents the data saved to a user. Not all data presented
// is final. This should be replaced by real online user databases.
//
// Author Douglas Wetmore (A00395869)

function UserTest() {

    // The name saved to the account. It is displayed on screen.
    this.name = "Douglas Wetmore";

    // The password to access the account. Should have a password data
    // type created and saved to it for security purposes.
    this.password = "EasterEgg";

    // Events made by the user. These are samples for testing purposes.
    // The code should be overhauled and organized.
    this.events = [new Event(2, 10, "Dad's Birthday", "Going out for supper with family for Dad's Birthday."),
                  new Event(4, 10, "CSCI Group Meeting", "Meeting up with your group for Software Engineering."),
                  new Event(4, 10, "MKTG Group Meeting", "Meeting with your Marketing Channels group for the Final Project."),
                  new Event(5, 10, "Dentist", "Dentist appointment at 8:00 am."),
                  new Event(5, 10, "Northwood Presentation", "Presenting our software at Northwood for Software Engineering"),
                  new Event(9, 10, "Finance Assignment 3", "Finance Assignment 3 due today."),
                  new Event(11, 10, "Rememberance Day", "Never forget, and be sure to give a moment of silence..."),
                  new Event(19, 10, "Birthday", "It's your 21st Birthday!"),
                  new Event(20, 10, "MKTG Assignment 3", "Consumer Behaviour assignment 3 due."),
                  new Event(22, 10, "MKTG Presentation", "Consumer Behaviour brand project presentation day."),
                  new Event(28, 10, "MKTG Presentation", "Marketing Channels Lobster presentation day."),
                  new Event(7, 11, "Smash Ultimate", "Smash Ultimate releases today!"),
                  new Event(99, 99, "dummy", "dummy")];

    // Notes made by the user. These are samples for testing purposes.
    // The code should be overhauled and organized.
    this.notes = [new Note("Northwood Reminder", "Remember to give it your all during your presentation!"),
                  new Note("Game Recomendation", "Tommy recommended I play Deltarune when I have the chance!")];

    // The display theme saved to the user. Can be either Dark or Light.
    this.display = new LightDisplay()
}

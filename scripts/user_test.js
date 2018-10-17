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

    // Notes made by the user. These are samples for testing purposes.
    // The code should be overhauled and organized.
    this.notes = [new Note(2, 10, "CB A1"),
                  new Note(11, 10, "CB Mid"),
                  new Note(12, 10, "FINA A2"),
                  new Note(15, 10, "MKCH A2"),
                  new Note(19, 10, "FINA Mid"),
                  new Note(24, 10, "MKCH Test")];

    // The display theme saved to the user. Can be either Dark or Light.
    this.display = new DarkDisplay()
}

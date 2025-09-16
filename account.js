const moment = require("moment");

class Account {
  #amount;
  #usernameID;

  constructor(name, amount, usernameID) {
    this.name = name;
    this.#amount = amount;
    this.#usernameID = usernameID;
  }

  tellMeBalance() {
    console.log(`Sizning xisobingizda xozirda ${this.#amount}$ mavjud`);
    return this.#amount;
  }

  withdrawal(amount) {
    if (this.#amount >= amount) {
      this.#amount -= amount;
      console.log(
        `Hisobingizdan ${amount}$ miqdorida pul yechildi. Xozirda sizda ${
          this.#amount
        }$ mavjud`
      );
    } else {
      console.log(
        `Kechirasiz xozirda sizning balansingizda ${amount} miq1dorida mablag' yetarli emas`
      );
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(
      `Hisobingiz ${amount}$ga to'ldirildi. Xozirda xisobingizda ${
        this.#amount
      }$ mavjud`
    );
  }

  giveMeDetails() {
    console.log(
      `Salom hurmatli ${this.name}. Sizning xisobingizda ${
        this.#amount
      }$ miqdorida pul mavjud.`
    );
    console.log(`Sizning xisob raqaimingiz: ${this.#usernameID}`);
  }

  static tellMeAboutClass() {
    console.log(`Bu class Accountlarni yasash uchun xizmat qiladi.`);
  }

  static tellMetime() {
    console.log(`Xozirgi vaqt ${moment().format("YYYY-MM-DD HH:mm:ss")}`);
  }
}

module.exports = Account;

const Book = {
  title: 'worldMio',
  author: 'kazumi',
  printInfo () {
    console.log(`${this.title}: ${this.author}`);
  }
};

Book.printInfo();



const Employee = {
  name: 'Roman',
  position: 'it-dev',
  introduce () {
    console.log(`Меня зовут ${this.name}, я занимаю должность ${this.position}`);
  }
};

Employee.introduce();
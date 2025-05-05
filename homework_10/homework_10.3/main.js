const contactBook = {
  myContacts: [
    { firstName: "Tonia", tel: "+48758374293", email: "tonia.b@gmail.com" },
    { firstName: "Katia", tel: "+35158374293", email: "katiushik@gmail.com" },
    { firstName: "Stas", tel: "+491827529431", email: "s1mpler@gmail.com" },
    { firstName: "Granny", tel: "+380637583793", email: "babcia123@gmail.com" },
  ],
  searchByName(name) {
    return this.myContacts.filter((contact) =>
      contact.firstName.toLowerCase().includes(name.toLowerCase())
    );
  },
  addContact(name, tel, email) {
    this.myContacts.push({ firstName: name, tel, email });
  },
};

console.log(contactBook.searchByName("to"));
contactBook.addContact("Marta", "+487578493", "marta@gmail.com");

console.log(contactBook.myContacts);

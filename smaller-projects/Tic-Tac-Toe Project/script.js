//the typical way to make an obect using Object Literal syntax is like this

const myBook = 
{
    name: 'Inside Mari',
    author: 'Shuzo Oshimi',
    genre: 'Psychological',
    mangaSound: function(){
        console.log('fwwwwwwwwwwwwwwwwwp');
    }
}

console.log(myBook.name);
myBook.mangaSound();

//there are, however, better and more consistent ways to make objects 

function Book(name,author) //this is an object constructor
{
    this.name = name;
    this.author = author;
}

const Solanin = new Book('Solanin', 'Inio Asano');
console.log(`Book Title: ${Solanin.name} Book Author: ${Solanin.author}`);

Book.prototype.bookSound = function() //this uses the prototype to set up inheritance 
{
    console.log("FWWWWWWWWWWWWWWWP");
}

Solanin.bookSound(); //here we're actually calling the function 

function Manga(genre)
{
    this.genre = genre;
}

Manga.prototype = Object.create(Book.prototype); //what this does is sets the Manga prototype to Book, so it inherits everything from Book

const Happiness = new Manga('Psychological');

console.log(Happiness.name);//this is undefined as we haven't given it a name yet

Happiness.name = 'Happiness'; //we can access the name by addressing the object 

console.log(Happiness.name); //now we can show the name 

Happiness.bookSound();

//one of the issues with constructors is that you can't treat them like regular functions
//and that you have to use them with the new keyword, but also JS won't point out to you
// if you forget to add it and stuff just won't work 

//so let's start working with factory functions 

const bookFactory = (title,writer) => {
    const whatSound = () => console.log('*page turning noises*');
    return {title, writer, whatSound};
};

//factory functons helps us to like, keep specific functions or things inside the 
// factory function private, so that we only output the things that 
// the rest of the program needs to see and us 

const Vagabond = bookFactory('Vagabond', 'Takehiko Inoue');
console.log(Vagabond);
console.log(Vagabond.title);
console.log(Vagabond.writer);
Vagabond.whatSound();

//that's all well and good, and it seems very similar to stuff we've done before,
// but how can we do inheritance here?

// let's try doing the prototype thing

// bookFactory.prototype.bookScream = function()
// {
//     console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
// }

// Vagabond.bookScream();

//so, factory functions do not have prototype, thus we cannot do this

const joseiManga = (mangaTitle, mangaAuthor) => {
    const theManga = bookFactory(mangaTitle, mangaAuthor); //so out here we're using bookFactory to get 
    const completeManga = () => console.log(`Title: ${theManga.title} | Author: ${theManga.writer}`);
    const mangaReview = () => console.log(`${theManga.title} SUCKS!`);
    return {completeManga, mangaReview};
}
//this is actually really cool because the only thing accessible are the things we're returning and nothing else 
const Nana = joseiManga('Nana','Ai Yazawa');
Nana.completeManga();
Nana.mangaReview();

//so, let's finally learn about this module thing they talk so much about 
//so this module is an example of an IIFE (Immediately Invoked Function Expression)
//adding the () at the end immediately calls the function 
//we do this because we only need the one, not abunch like with factory functions 

const calculator = (() => {
    const add = (a,b) => a + b;
    const subtract = (a,b) => a - b;

    return { add, subtract};
})();

//the () at the end is a closure, a way to make everything inside the function private,
// just like in factory functions, we're keeping everything very much private
// unless we need them, where we'll call them with the module name like so 

console.log(calculator.add(3,5));


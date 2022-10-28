
// passing functions as parameters

function exec(func, arg){
    func(arg);
}
exec((something) => {
  console.log(something);
}, "Greetings, Guys!");


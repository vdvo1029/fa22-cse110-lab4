function givetime(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
const interval = setInterval(givetime,1000);

function Random(){
let number = Math.random()*20;
return <h1 style={{"background" :"red"}}> Random number is : {Math.round(number)}</h1>
};
 export default Random;
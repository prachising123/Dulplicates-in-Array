const list = [1,2,3,4,4,3,2,"prachi","harry","john","john"];
console.log(list);

function removeDuplicate(array){
   return array.filter((el,index) => array.indexOf(el) === index);

}
document.write(removeDuplicate(list));

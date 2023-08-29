const data =[];

const addData=()=>{
const inputval= document.getElementById('name').value;
if(!inputval){
   alert("Please enter your name.....");
}else{
data.push(inputval);

   document.getElementById('ol').innerHTML=data.map((value,i)=> {

      return `<li> ${i+1} ${value}
      <button id="edit1" onclick="editform(${i})">Edit</button>
      <button id="delet" onclick="deletform(${i})">Delet</button>   
      </li>`;
   });
   document.getElementById('name').value="";
}


return false;
}

const editform=(i)=> {
   document.getElementById("form").innerHTML=`<lable for="name">Name</lable>
   <input type="text" id="name" value=${data[i]} >
   <button class="btn" onClick="editdata(${i})">Edit</button>`;
}

const editdata=(i)=>{
   data.splice(i, 1,document.getElementById('name').value);

   document.getElementById('ol').innerHTML=data.map((value,i)=> {

      return `<li> ${i+1} ${value}
      <button id="edit1" onclick="editform(${i})">Edit</button>
      <button id="delet" onclick="deletform(${i})">Delet</button>   
      </li>`;
   }); 
   return document.getElementById('form').innerHTML=`
   <lable for="name">Name</lable>
   <input type="text" id="name"  >
   <button class="btn" onClick="return addData()">Submit</button>
   `
}

const deletform=(i)=> {
   data.splice(i, 1);
   document.getElementById('ol').innerHTML=data.map((value,i)=> {

      return `<li> ${i+1} ${value}
      <button id="edit1" onclick="editform(${i})">Edit</button>
      <button id="delet" onclick="deletform(${i})">Delet</button>   
      </li>`;
   });
}
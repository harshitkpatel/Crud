const data = [];

const addData=(e)=> {
    e.preventDefault();
      valueofData();
      tableData();
}

document.addEventListener('submit',addData)

const valueofData=()=> {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    
  const formData={
         formname:name,
         formemail:email,
         formcity:city,
 }

    data.push(formData);
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('city').value="";
}

const tableData=()=> {
     document.getElementById('tbody').innerHTML = data.map((value,i)=>{
         return `
         <tr>
         <td>${i+1}</td>
         <td>${value.formname}</td>
         <td>${value.formemail}</td>
         <td>${value.formcity}</td>
         <td><button id="edit1" onclick="editform(${i})">Edit</button>
         <button id="delet" onclick="deletform(${i})">Delet</button></td>
        </tr>
         `
    })
}

const editform=(i)=> {
    document.getElementById('form').innerHTML=`
    <div class="pb-3" >
        <label>Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" value="${data[i].formname}">
      </div>
      
      <div class="pb-3">
        <label>Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" value="${data[i].formemail}">
      </div>
      
      <div class="pb-3">
        <label>City:</label>
        <input type="text" class="form-control" id="city" placeholder="Enter city name" value="${data[i].formcity}">
      </div>
      
      <div class="pb-3">
      <button  class="btn btn-primary" id="editdata" onClick="editformdata(${i})" type="button">Edit</button>
      </div>

    `
}

const editformdata=(i)=> {
    
    const arraydata=data[i];
    arraydata.formname = document.getElementById('name').value || data[i].formname;
    arraydata.formemail = document.getElementById('email').value || data[i].formemail;
    arraydata.formcity = document.getElementById('city').value || data[i].formcity;

    

    document.getElementById('tbody').innerHTML = data.map((value,i)=>{
        return `
        <tr>
        <td>${i+1}</td>
        <td>${value.formname}</td>
        <td>${value.formemail}</td>
        <td>${value.formcity}</td>
        <td><button id="edit1" onclick="editform(${i})">Edit</button>
        <button id="delet" onclick="deletform(${i})">Delet</button></td>
       </tr>
        `

   })

   
  
    document.getElementById('form').innerHTML=`

    <div class="pb-3" >
        <label>Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" value="">
      </div>
      
      <div class="pb-3">
        <label>Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" value="">
      </div>
      
      <div class="pb-3">
        <label>City:</label>
        <input type="text" class="form-control" id="city" placeholder="Enter city name" value="">
      </div>
      
      <div class="pb-3">
      <button  class="btn btn-primary" id="submit" type="submit">Submit</button>
      </div>
   `

}

const deletform=(i)=> {
    data.splice(i, 1);

    document.getElementById('tbody').innerHTML = data.map((value,i)=>{
        return `
        <tr>
        <td>${i+1}</td>
        <td>${value.formname}</td>
        <td>${value.formemail}</td>
        <td>${value.formcity}</td>
        <td><button id="edit1" onclick="editform(${i})">Edit</button>
        <button id="delet" onclick="deletform(${i})">Delet</button></td>
       </tr>
        `

   })

}
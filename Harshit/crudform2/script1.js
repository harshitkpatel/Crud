const data = [];

const addData=(e)=> {
    e.preventDefault();
      valueofData();
      tableData();
      
}
document.addEventListener('submit',addData)

const valueofData=()=> {

  const fname = document.getElementById('fname').value
  const lname = document.getElementById('lname').value;
  const sname = document.getElementById('sname').value;
  const email = document.getElementById('email').value;
  const phonumber = document.getElementById('phonumber').value;
  const country = document.getElementById('country').value;
 
  const state = document.getElementById('state').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;

  var hobby =[];
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
        hobby.push(item.value);
    }
  })

  var gendaerid = [];
  document.querySelectorAll(`[type="radio"]`).forEach(item => {
    if(item.checked === true) {
      gendaerid.push(item.value)}

  });

  if(fname === ""){
    alert("Please enter first name");
  }
  else if(lname === ""){
    alert("Please enter last name");
  }
  else if(sname === ""){
    alert("Please enter surname");
  }
  else if(email === ""){
    alert("Please enter email");
  }
  else if (phonumber === ""){
    alert("Please enter phone number");
  }
  else if (country === ""){
    alert("Please enter country");
  }
  else if (state === ""){
    alert("Please enter state");
  }
  else if (city === ""){
    alert("Please enter city");
  }
  else if (hobby.length == 0){
    alert("Please enter your hoby")
  }
  else if (gendaerid.length == 0){
    alert("Please enter your hoby")
  }
 
  
  else {
    const formData={
      formfname:fname,
      formlname:lname,
      formsname:sname,
      formemail:email,
      formphonumber:phonumber,
      formecountry:country,
      formestate:state,
      formcity:city,
      formaddress:address,
      formhobby: hobby,
      formgenderid: gendaerid,
    };
    
        data.push(formData);
    
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('sname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phonumber').value = "";
        document.getElementById('country').value = "";
        document.getElementById('state').value = "";
        document.getElementById('city').value = "";
        document.getElementById('address').value = "";
        document.querySelectorAll('[type="checkbox"]').forEach(item => {
        item.checked = false
    
      })
    
      document.querySelectorAll(`[type="radio"]`).forEach(item => {
        item.checked=false
    
      });
  }

  // var male = document.getElementById('male');
  // var female = document.getElementById('female');
  // var gendername = [male,female];
  // var gendaerid =[];

  

    
}

const tableData=()=> {
     document.getElementById('tbody').innerHTML = data.map((value,i)=>{
         return `
         <tr>
         <td>${i+1}</td>
         <td>${value.formfname}</td>
         <td>${value.formlname}</td>
         <td>${value.formsname}</td>
         <td>${value.formemail}</td>
         <td>${value.formphonumber}</td>
         <td>${value.formecountry}</td>
         <td>${value.formestate}</td>
         <td>${value.formcity}</td>
         <td>${value.formaddress}</td>
         <td>${value.formhobby}</td>
         <td>${value.formgenderid}</td>
         <td><button class="btn btn-primary" id="edit1" onClick="editform(${i})">Edit</button>
         <button class="btn btn-primary" id="delet" onclick="deletform(${i})">Delet</button></td>
        </tr>
         `
    })
}

const editform=(i)=>{
  // console.log("data[i]",data[i]);
  document.getElementById("form").innerHTML=`
  <div class="pb-3" >
            <label>FirstName:</label>
            <input type="text" class="form-control" id="fname" placeholder="Enter FirstName" value="${data[i].formfname}">
          </div>
          
          <div class="pb-3" >
            <label>LastName:</label>
            <input type="text" class="form-control" id="lname" placeholder="Enter LastName" value="${data[i].formlname}">
          </div>

          <div class="pb-3" >
            <label>SarName:</label>
            <input type="text" class="form-control" id="sname" placeholder="Enter SarName" value="${data[i].formsname}">
          </div>

          <div class="pb-3">
            <label>Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" value="${data[i].formemail}">
          </div>

          <div class="pb-3">
            <label>PhoneNumber:</label>
            <input type="number" class="form-control" id="phonumber" placeholder="Enter PhoneNumber" value="${data[i].formphonumber}">
          </div>

          <div class="pb-3">
            <label>Country:</label>
            <select class="form-select" id="country">
                <option value="">Select your country</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
            </select>
          </div>

          <div class="pb-3">
            <label>State:</label>
            <select class="form-select" id="state">
                <option value="">Select your state</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnatak">Karnatak</option>
                <option value="Tamilnadu">Tamilnadu</option>
            </select>
          </div>

          <div class="pb-3">
            <label>City:</label>
            <select class="form-select" id="city">
                <option value="">Select your city</option>
                <option value="Ahemdabad">Ahemdabad</option>
                <option value="Surat">Surat</option>
                <option value="Baroda">Baroda</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Junagadh">Junagadh</option>
            </select>
          </div>

          <div class="pb-3">
            <label for="address">Address:</label>
            <textarea class="form-control" rows="3" id="address" name="address" placeholder="Enter your full Address"></textarea>
          </div>
          

          <div class="pb-3">
            <label>Hobby:</label>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="read" name="option1" value="Reading">
                <label class="form-check-label" for="check1">Reading</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="sport" name="option2" value="Sports">
                <label class="form-check-label" for="check2">Sports</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="music" name="option2" value="Music">
                <label class="form-check-label" for="check2">Music</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="travel" name="option2" value="Traveling">
                <label class="form-check-label" for="check2">Traveling</label>
              </div>
          </div>

          <div class="pb-3">
            <label>Gender:</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="male" name="optradio" value="Male">
                <label class="form-check-label" for="radio1">Male</label>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" id="female" name="optradio" value="Female">
                <label class="form-check-label" for="radio2">Female</label>
              </div>
          </div>
          <div class="pb-3">
          <button class="btn btn-primary" id="edit" onclick="editdata(${i})">Edit</button>
          </div>
  `
  document.getElementById("address").value = data[i].formaddress;

  const newcountry = data[i].formecountry;
  // console.log(".....1",newcountry);
  if (newcountry == "India"){
    document.getElementById("country").value = "India";
  } else if (newcountry == "Australia"){
    document.getElementById("country").value = "Australia";
  } else if (newcountry == "Canada"){
    document.getElementById("country").value = "Canada";
  } else if (newcountry == "UK"){
    document.getElementById("country").value = "UK";
  };

  const newstate = data[i].formestate;
  if (newstate == "Gujrat"){
    document.getElementById("state").value = "Gujrat";
  } else if (newstate == "Maharashtra"){
    document.getElementById("state").value = "Maharashtra";
  } else if (newstate == "Karnatak"){
    document.getElementById("state").value = "Karnatak";
  } else if (newstate == "Tamilnadu"){
    document.getElementById("state").value = "Tamilnadu";
  };

  const newcity = data[i].formcity;
  if (newcity == "Ahemdabad"){
    document.getElementById("city").value = "Ahemdabad";
  } else if (newcity == "Surat"){
    document.getElementById("city").value = "Surat";
  } else if (newcity == "Baroda"){
    document.getElementById("city").value = "Baroda";
  } else if (newcity == "Rajkot"){
    document.getElementById("city").value = "Rajkot";
  } else if (newcity == "Junagadh"){
    document.getElementById("city").value = "Junagadh";
  };

  const newhobby = data[i].formhobby;
  newhobby.forEach((v)=>{
    if(v == "Reading") {
      document.getElementById("read").checked=true;
    } else if (v == "Sports") {
      document.getElementById("sport").checked=true;
    } else if (v == "Music") {
      document.getElementById("music").checked=true;
    } else if (v == "Traveling") {
      document.getElementById("travel").checked=true;
    }
  })

  const newsex = data[i].formgenderid;
  newsex.forEach((v)=>{
    if(v == "Male") {
      document.getElementById("male").checked=true;
    } else if (v == "Female") {
      document.getElementById("female").checked=true;
    };
  })
};

const editdata=(i)=>{
  
  const newarr = data[i];
  
  newarr.formfname = document.getElementById('fname').value || newarr.formfname
  newarr.formlname = document.getElementById('lname').value || newarr.formlname
  newarr.formsname = document.getElementById('sname').value || newarr.formsname
  newarr.formemail = document.getElementById('email').value || newarr.formemail
  newarr.formphonumber = document.getElementById('phonumber').value || newarr.formphonumber
  newarr.formecountry = document.getElementById('country').value || newarr.formecountry
  newarr.formestate = document.getElementById('state').value || newarr.formestate
  newarr.formcity = document.getElementById('city').value || newarr.formcity
  newarr.formaddress = document.getElementById('address').value || newarr.formaddress
  newarr.formhobby = 
  hobby =[];
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
        hobby.push(item.value)}
  }) || newarr.formhobby

  newarr.formgenderid = 
  gendaerid = [];
  document.querySelectorAll(`[type="radio"]`).forEach(item => {
    if(item.checked === true) {
      gendaerid.push(item.value)}
  }) || newarr.formgenderid;

  document.querySelectorAll(`[type="radio"]`).forEach(item => {
    item.checked=false

  });

  document.getElementById("form").innerHTML =`
  <div class="pb-3" >
            <label>FirstName:</label>
            <input type="text" class="form-control" id="fname" placeholder="Enter FirstName">
          </div>
          
          <div class="pb-3" >
            <label>LastName:</label>
            <input type="text" class="form-control" id="lname" placeholder="Enter LastName">
          </div>

          <div class="pb-3" >
            <label>SarName:</label>
            <input type="text" class="form-control" id="sname" placeholder="Enter SarName">
          </div>

          <div class="pb-3">
            <label>Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>

          <div class="pb-3">
            <label>PhoneNumber:</label>
            <input type="number" class="form-control" id="phonumber" placeholder="Enter PhoneNumber">
          </div>

          <div class="pb-3">
            <label>Country:</label>
            <select class="form-select" id="country">
                <option value="">Select your country</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
            </select>
          </div>

          <div class="pb-3">
            <label>State:</label>
            <select class="form-select" id="state">
                <option value="">Select your state</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnatak">Karnatak</option>
                <option value="Tamilnadu">Tamilnadu</option>
            </select>
          </div>

          <div class="pb-3">
            <label>City:</label>
            <select class="form-select" id="city">
                <option value="">Select your city</option>
                <option value="Ahemdabad">Ahemdabad</option>
                <option value="Surat">Surat</option>
                <option value="Baroda">Baroda</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Junagadh">Junagadh</option>
            </select>
          </div>

          <div class="pb-3">
            <label for="address">Address:</label>
            <textarea class="form-control" rows="3" id="address" name="address" placeholder="Enter your full Address" ></textarea>
          </div>
          

          <div class="pb-3">
            <label>Hobby:</label>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="read" name="option1" value="Reading">
                <label class="form-check-label" for="check1">Reading</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="sport" name="option2" value="Sports">
                <label class="form-check-label" for="check2">Sports</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="music" name="option2" value="Music">
                <label class="form-check-label" for="check2">Music</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="travel" name="option2" value="Traveling">
                <label class="form-check-label" for="check2">Traveling</label>
              </div>
          </div>

          <div class="pb-3">
            <label>Gender:</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="male" name="optradio" value="Male">
                <label class="form-check-label" for="radio1">Male</label>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" id="female" name="optradio" value="Female">
                <label class="form-check-label" for="radio2">Female</label>
              </div>
          </div>
          <div class="pb-3">
          <button class="btn btn-primary" id="submit" type="submit">Submit</button>
          </div>`

          tableData();
 }


const deletform=(i)=> {
    data.splice(i, 1);
    tableData();
}
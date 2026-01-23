const users = [];
function disMessage(){    
    let email=document.getElementById("txtEmail").value;
    let pwd=document.getElementById("txtpass").value;
    let found=users.find(
    (el)=> el.email===email && el.pwd===pwd
    );
    if(found){
        lblMsg.innerHTML="Welcome";
    }
    else{
        lblMsg.innerHTML="Access Denied";
    }
}
function addUser(){
    let name=document.getElementById("txtName").value
    let email=document.getElementById("txtEmail").value
    let pwd=document.getElementById("txtpass").value
    let user={name : name, email : email, pwd : pwd};
    users.push(user)
    showLoginForm();
    console.log(users);
}
function showLoginForm(){
    let str= `
    <h3>Login Form</h3>
        <p><label id="lblMsg"></label></p>
        <!-- <p><label id="lblMsg1"></label></p> -->
        <p><label >Email: </label><input type="text" id="txtEmail" placeholder="Email Address"></p>
        <p><label >Password: </label> <input type="password" id="txtpass" placeholder="Password"></p>
        <p><button class="login-btn" onclick="disMessage()">Log in</button></p>
        <hr>
        <p><button class="register-btn" onclick="showRegisterForm()">Create Account</button></p>
        `
        root.innerHTML=str
}
function showRegisterForm(){
    let s=`
    <h3>Registration Form</h3>
        <p><label >Name: </label><input type="text" id="txtName" placeholder="Enter Name"></p>
        <p><label >Email: </label><input type="text" id="txtEmail" placeholder="Email Address"></p>
        <p><label >Password: </label> <input type="password" id="txtpass" placeholder="Password"></p>
        <p><button class="login-btn" onclick="addUser()">Submit</button></p>
        <hr>
         <p>Already a member?<a href='#' onclick="showLoginForm()">Login here</p>
    `
    root.innerHTML=s
}

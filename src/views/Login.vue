<template>
<section>
<div class="login-container">
    <div class="login-box">
        <div class="login-items"> 
            
            <div class="logo"><img src="@/assets/img/logo.png" alt="logo">
                <p style="font-weight: bold ">Welcome!</p>
            </div>
        
            <p class="login-text"><a href="#">Create an account</a></p>
            <p class="login-text">Or</p>
            <p class="login-text" style="font-weight:bold ">Please Log In</p>
            <form class="login" action="index.html">
                <input type="text" placeholder="Email">
                <input type="password" placeholder="Password">
                <input type="submit" value="Log in"> 
            </form>
            <p class="login-text"><a href="#">Forgot password?</a></p>
            
        </div>
    </div>
</div>
</section>
</template>

<style>
/* login */

.login-container{
      
    display: flex;
    justify-content: center; /*horizontal*/
    align-items: center; /*vertical*/
    min-height: 100vh; 
    
}

.login-box{
    
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    
    background-color: #f5f5f5;
    width: 245px;
    height: 300px;
    border-radius: 3px;
    
}

.logo {
    
    display: flex;
    justify-content: flex-start;
    align-content: space-around;
    padding: none;
    
}

.logo p{
    
    padding:10px 10px 10px 25px;
    
}


.login-items{
    
    padding: 30px 10px 30px 10px;
    text-align: center;
    
}

div.login-box img {
    
    width: 50px;
    height: 50px;
    vertical-align: baseline;
    top: 20px;
    
}

login-logo{
    
    top: 50px;
    padding: none;
    width: 20px;
    height: 20px;
    
}


.login{
    
    display: block;
    margin: 10px;
    padding: 5px;
    
}



input {
    
    margin: 3px;
    width: 70%;
    
}

input[type=submit]{
    
    background-color: #3333ff;
    width: 60px;
    
}

.login-text {
    
    font-size: 13px;
    
}
</style>

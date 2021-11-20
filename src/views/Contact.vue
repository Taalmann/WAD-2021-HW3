<template>
<section>
  <div class="contact">
    <div class="contact-box">
      <div class="contact-items">
        <div class="avatar"><img src="@/assets/img/default_avatar.png" alt="avatar">
                <p style="font-weight: bold ">Contact us:</p>
        </div>
        <br>
        <p class="contact-text">e-mail: holothewisewolf@yoitsu.com</p>
        <p class="contact-text">mobile: +999999999</p>
    
      </div>
    </div>
  </div>
</section>
</template>

<style>
/* contact */

.contact{
      
    display: flex;
    justify-content: center; /*horizontal*/
    align-items: center; /*vertical*/
    min-height: 100vh; 
    
}

.contaxt-box{
    
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    
    background-color: #f5f5f5;
    width: 245px;
    height: 300px;
    border-radius: 3px;
    
}

.contact-items{
    
    padding: 30px 10px 30px 10px;
    text-align: center;
    
}

.avatar {
    
    display: flex;
    justify-content: flex-start;
    align-content: space-around;
    padding: none;
    
}

.avatar p{
    
    padding:10px 10px 10px 25px;
    
}

div.contact-box img {
    
    width: 50px;
    height: 50px;
    vertical-align: baseline;
    top: 20px;
    
}

.contact-text {
    
    font-size: 13px;
    
}

</style>
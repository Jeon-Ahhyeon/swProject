<template>
    <div class="login">
        <article>
                    <div>
                        <h1>LOGIN</h1>
                        <form   v-on:submit.prevent>
                            <div id="signin">
                                <input type="email" id="email" name="email" placeholder="이메일" required> <br>
                                <input type="password" id="pass" name="pass" placeholder="비밀번호" required><br>
                                
                                <!-- <input type="email" id="email" v-model="email" name="email" placeholder="이메일" required/>
                                <input type="password" id="pass" v-model="password" name="pass" placeholder="비밀번호" required/> -->
                                <div class="checkbox-area">
                                    <input type="checkbox" id="keep_login" name="keeplogin" value="Y">
                                    <label for="keep_login">로그인 상태 유지</label> <br>
                                </div>
                                
                                <button @click="onClick()" class="btn-shape white-text" type="submit">로그인</button><br>
                                <div class="onediv">
                                    <div class="align-right">
                                        <router-link to="/join">회원가입</router-link>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
        </article>
    </div>
</template>

<script>
import NewsVue from './News.vue';
export default {
    name : "Login",
    methods: {
        onClick(e){
            //e.preventDefault();
            
            let _id = document.getElementById("email");
            let _pw = document.getElementById('pass');

            console.log(_id.value);
            console.log(_pw.value);
            
            if(_id.value != null && _pw.value != null){
                if(_id.value == "123@naver.com")
                {
                    if(_pw.value =="1234"){
                        alert("로그인이 완료되었습니다.");
                        location.href="/";
                    }
                    else{
                        alert("비밀번호가 잘못 입력되었습니다.");
                        return false;
                    }
                }
            }
            else{
                alert("로그인 실패");
                return false;
                location.href="/";
            }         
        }
    },
    
}
</script>

<style src="../css/login.css" scoped>
    
</style>
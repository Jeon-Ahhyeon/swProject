<template>
    <div class="join">
        <div>
                    <h1>JOIN</h1>
                    <p class="grey-text font-1">안녕하세요 제주맥주입니다.</p>
                    <div id="joinin">
                        <form id="join" v-on:submit.prevent>
                            <div>
                                <input type="file" name="photo" id="photo"> <br>
                            </div>
                            <div>
                                <input type="email" id="email" name="email" placeholder="이메일" required> <br>
                            
                                <input type="password" id="pass1" name="pass1" placeholder="비밀번호" required> <br>
                                <input type="password" id="pass2" name="pass2" placeholder="비밀번호 확인" required> <br>
                            </div>
                            <div>
                                <label for="name">이름</label> <br>
                                <input type="text" id="name" name="name" placeholder="이름을 입력하세요." required> <br>
                            </div>
                            <div>
                                <label>성별</label> <br>
                                <input type="radio" id="man" name="man" value="man">남자 <br>
                                <input type="radio" id="man" name="woman" value="woman">여자 <br>
                            </div>
                            <div>
                                <label for="phone">연락처</label> <br>
                                <input type="tel" id="phone" name="phone" placeholder="연락처"> <br>
                            </div>
                            <div>
                                <label for="address1">주소</label> <br>
                                <input type="address" id="address1" name="address1" placeholder="주소"> <br>
                                <input type="address" id="address2" name="address2" placeholder="상세주소"> <br>
                            </div>
                            <div class="bir">
                                <label for="birth">생년월일</label> <br>
                                <div  class="selectbox">
                                    <select title="생년월일"  class="form-control" id="birth_y" name="birth_y" >
                                        <option value="">년</option>
                                    </select>     
                                </div>                  
                                <div class="selectbox">
                                    <select title="생년월일"  class="form-control" id="birth_m" name="birth_m" >
                                        <option value="">월</option>
                                       
                                    </select>
                                </div> 
                                <div class="selectbox">
                                    <select title="생년월일"  class="form-control" id="birth_d" name="birth_d" >
                                        <option value="">일</option>
                                        	
                                      
                                    </select>
                                </div>
                            </div>
                            <div>
                                <input type="hidden" id="agree_terms" name="agree_terms">
                                <input type="hidden" id="agree_user" name="agree_user">
                                <input type="hidden" id="agree_marketing" name="agree_terms">
                                <input type="hidden" id="agree_use" name="agree_use">
                                <button  @click="onClick()" class="btn-shape white-text" type="submit">가입하기</button>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
    name : "Join",
    methods : {
        getYear : function(){
            let _year = document.getElementById('birth_y');
            let _month = document.getElementById('birth_m');
            let _day = document.getElementById('birth_d');

             for(var i = 1990 ; i <=2021 ; i++){
                _year.innerHTML+='<option value="'+ i +'">' + i + '</option> <br>';
                
            }

             for(var k = 1 ; k <=12 ; k++){
                _month.innerHTML+='<option value="'+ k +'">' + k + '</option> <br>';
                
            }

             for(var j = 1 ; j <=31 ; j++){
                _day.innerHTML+='<option value="'+ j +'">' + j + '</option> <br>';
                
            }
        },
        onClick(e){
            //e.preventDefault();


            let _id = document.getElementById("email");
            let _pw1 = document.getElementById('pass1');
            let _pw2 = document.getElementById('pass2');
            let _name = document.getElementById('name');
            let _address = document.getElementById('address1');
            
            if(_id && _pw1 && _pw2 && _name && _address.value){
                var con_text = confirm("입력된 정보를 다시 확인하시겠습니까?");
                
                console.log(typeof(con_text));

                if(!con_text)
                {
                        alert("로그인 화면으로 이동");
                        location.href="/login";
                }
                else if(con_text){
                        return false;
                }
                
            } 

        }
    },
    mounted(){
        this.getYear()
    }
    
}
</script>

<style src = "../css/join.css" scoped>
    
</style>
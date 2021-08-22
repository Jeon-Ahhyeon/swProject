<template>
  <div class="container">
        <header>
            <div class="logo"><router-link to="/">제주맥주</router-link></div>
            <div class="user_info">
                <router-link to="/join">Join</router-link> |
                <router-link to="/login">Login</router-link>
            </div>
        </header>
        <nav>
          <router-link to="/">Event</router-link> |
          <router-link to="/shop">Shop</router-link> |
          <router-link to="/about">About_us</router-link> |
          <router-link to="/news">News</router-link> 
            
        </nav>
        <aside>
            <div class="nav-btn">
                <a href="#"><img src="./img/share.png" class="width-50px" alt = "공유"></a>
            </div>
            <div class="nav-btn margin-25">
                <a href="#"><img src="./img/share.png" class="width-50px" alt = "맨 위로"></a>
            </div>
        </aside>
        <main>
          <router-view></router-view>
        </main>
        <footer class="clear">
            <div>
                제주제주 주식회사 대표이사 XXX <br>
                본사) 본사 주소 <br>
                호스팅 제공자XXX&nbsp;&nbsp;&nbsp;  사업자등록번호 xxx-xx-xxxx&nbsp;&nbsp;&nbsp;  통신판매업신고번호 제 xxxx-xxx-xxxx호 <br>
                개인정보보호책임자 XXX  &nbsp;&nbsp;&nbsp;고객센터 xx-xxxx-xxxx, xxx@xxx.co.kr
            </div>
        </footer>
  </div>
</template>

<style src="./css/all.css"></style>

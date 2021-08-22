<template>
  <div class="home">
    <section>
                    <div>
                        <video src="../videos/event.mp4" class="width_100" playsinline autoplay loop muted>
                            이 브라우저에서는 지원되지 않는 형식입니다.
                        </video>
                    </div>
                </section>
                <section>
                    <article>
                        <div class="main_suffer">
                            <p class="main_btntext event">제주맥주 광고 이벤트</p> 
                            <img class="width_100" src="../img/bg1.png" alt="">
                            <img class="hotel" src="../img/event_message.png" alt="">
                            <img class="suffer" src="../img/suffer.png" alt="">
                        </div>
                        <div class="goods">
                            <div class="main_goods">
                                <div>
                                    <img src="../img/img1.jpg" alt="히든클리프 호텔 숙박권">
                                </div>
                                <p>히든클리프 호텔 숙박권</p>
                            </div> 
                            <div class="main_goods">
                                <div>
                                    <img src="../img/img2.jpg" alt="제주도 왕복 비행기 항공권">
                                </div>
                                <p>제주도 왕복 비행기 항공권</p>
                            </div> 
                            <div class="main_goods">
                                <div>
                                    <img src="../img/img3.jpg" alt="제주맥주 양조장 투어권">
                                </div>
                                <p>제주맥주 양조장 투어권</p>
                            </div> 
                        </div>
                        
                    </article>
                    <article cas>
                        <table>
                            <colgroup>
                                <col width ="100px;">
                            </colgroup>
                            <tr>
                                <th>참여 방법</th>
                                <td>
                                    빈칸에 들어갈 정답을 맞춰 주세요! <br>
                                    힌트는 광고 영상 속에 있어요.
                                </td>
                            </tr>
                            <tr>
                                <th>이벤트 기간</th>
                                <td>
                                    <strong>2021.07.16 - 2021.07.31 </strong>
                                </td>
                            </tr>
                            <tr>
                                <th>발표일</th>
                                <td>
                                    <strong>2021.08.02</strong>
                                </td>
                            </tr>
                        </table>
                        본 이벤트는 조기 마감될 수 있습니다.
                    </article>
                    <article>
                        <div class="main_quiz">
                            <img class="width_100" src="../img/bg2.jpg" alt="">
                            <div class="main-quiz1">
                                <h1 class="main_btntext">QUIZ</h1>
                                <p >
                                    4개 퀴즈를 전부 맞추면 선물이 펑펑! <br>
                                    광고 영상 속에 힌트가 있어요.
                                </p>
                            </div>
                           
                        </div>
                        
                        <div class="main_video">
                            <img class="width_100" src="../img/bg3.png" alt="">
                            <div id="ani">
                                <a href="#"> <img src="../img/start_btn.png"  alt="버튼"></a>
                            </div>
                        </div>
                        
                    </article>
                </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style src ="../css/home.css" scoped>

</style>

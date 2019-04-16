<template>
  <div class="login">
    <div class="topBack">
      <img class="logo" src="./icons/logo.png" alt="">
    </div>
    <div class="loginBox">
      <div class="cutLogin">
        <span :class="{nowPage:page===0}" @click="cutPage(0)">登录</span>
        <span :class="{nowPage:page===1}" @click="cutPage(1)">注册</span>
      </div>
      <div class="cutContent">
        <div class="login" v-show="page===0">
          <div class="inputBox">
            <div class="region">
              <img src="./icons/china.png" alt="">
              <span>中文</span>
              <i></i>
            </div>
            <div class="phone">
              <img src="./icons/phone.png" alt="">
              <span>+86</span>
              <input type="text" placeholder="手机号">
            </div>
            <div class="password">
              <img src="./icons/password.png" alt="">
              <input type="password" placeholder="请输入密码">
            </div>
          </div>
          <div class="select">
            <checklist
            v-model="loginDefaultSelect"
            :max="1"
            :options="['记住密码']"
            ></checklist>
          </div>
          <span class="loginBut">登录</span>
          <span class="forgetPassword">忘记密码？</span>
        </div>
        <div class="sigUp" v-show="page===1">
          <div class="inputBox">
            <div>
              <img src="./icons/phoneIcon.png" alt="">
              <input type="text" placeholder="请输入注册手机号码">
            </div>
            <div>
              <img src="./icons/note.png" alt="">
              <input type="text" placeholder="请输入短信验证码">
            </div>
            <div>
              <img src="./icons/password.png" alt="">
              <input type="password" placeholder="请设置6-20位登录密码">
            </div>
            <div>
              <img src="./icons/password.png" alt="">
              <input type="password" placeholder="请再次确认登录密码">
            </div>
          </div>
          <div class="protocol">
            <checklist
              v-model="loginDefaultSelect"
              :max="1"
              :options="['同意']"
            ></checklist>
            <span>【<i @click="goTo('/protocol')">用户服务协议</i>】</span>
          </div>
          <span class="sigUpBut">注册</span>
          <span class="goToLogin" @click="cutPage(0)">已有账户，立即登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checklist } from 'mint-ui';
export default {
name:'login',
components:{
  Checklist
},
data(){
  return{
    page:1,
    loginDefaultSelect:['记住密码']
  }
},
methods:{
  cutPage(index){
    if(index === this.page) return ;
    this.page = index;
  },
  goTo(url){
    this.$router.push(url);
  }
}
}
</script>
<style lang="less">
.login{
  height: 100%;
  position: relative;
  >.topBack{
    width: 50rem;
    height:49rem;
    background-color: #ff6600;
    display: flex;
    justify-content: center;
    >.logo{
      width: 9rem;
      height:9rem;
      padding:1.2rem 1.6rem;
      margin-top:9rem;
      background-color: #fff;
      box-sizing: border-box;
      border-radius:1.4rem;
    }
  }
  >.loginBox{
    position: absolute;
    top:22rem;
    left:2.4rem;
    right:2.4rem;
    margin: auto;
    background-color: #fff;
    width: 45.2rem;
    height: 56.5rem;
    border-radius: 1.4rem;
    box-shadow: 0rem 0rem 1rem 0rem rgba(23,30,49,0.3);
    >.cutLogin{
      margin:2.7rem 3.6rem 3rem;
      width: 38rem;
      height: 6rem;
      background:rgba(242,242,242,1);
      border-radius: 3rem;
      display: flex;
      >span{
        border-radius: 3rem;
        line-height: 6rem;
        display: block;
        text-align: center;
        color:#333333;
        font-size:2.2rem;
        flex: 1;
      }
      >.nowPage{
        background-color: #ff6600;
        color:#fff;
      }
    }
    >.cutContent{
      padding: 0rem 3.5rem;
      >.login{
        display: flex;
        flex-direction: column;
        >.inputBox{
          display: flex;
          flex-direction: column;
          >.region,>.phone,>.password{
            margin-top:0.7rem;
            width: 100%;
            height: 6rem;
            border-radius: 3rem;
            background-color:#F2F2F2;
            display: flex;
            align-items: center;
            >img{
              width: 3rem;
              padding:0rem 1.3rem;
            }
            >input{
              border:none;
              outline:none;
              background-color: rgba(0,0,0,0,0);
            }
          }
          >.region{
            >span{
              flex:1;
              line-height: 6rem;
              color:#666;
              font-size:1.8rem;
              font-family: 'Adobe Heiti Std R';
            }
            >i{
              margin-right:2.5rem;
              background:url('./icons/more.png') no-repeat;
              background-size:cover;
              width: 1.5rem;
              height:2rem;
            }
          }
          >.phone,>.password{
            >span{
              line-height: 6rem;
              color:#666;
              font-size:1.8rem;
              font-family: 'Adobe Heiti Std R';
              letter-spacing: 0.03rem;
              margin-right:0.5rem;
            }
            >input{
              flex: 1;
              margin-right:3rem;
              height: 6rem;
              font-size: 2rem;
              color:#666;
              padding:0rem;
              letter-spacing: 0.08rem;
            }
          }
        }
        >.select{
          height: 3rem;
          >.mint-checklist{
            >label{
              display: none;
            }
            >.mint-cell{
              background: none;
              min-height: auto;
              >.mint-cell-left,>.mint-cell-right{
                display: none;
              }
              >.mint-cell-wrapper{
                padding:0rem;
                background: none;
                >.mint-cell-title{
                  >.mint-checklist-label{
                    margin-top:1.3rem;
                    padding:0rem;
                    height: 2rem;
                    >.mint-checkbox{
                        line-height: 2rem;
                      >.mint-checkbox-core{
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius:0rem;
                        background-color:#ff6600;
                        border:none;
                      }
                      >.mint-checkbox-core:after{
                        top:0.2rem;
                        left:0.5rem;
                        width: 0.4rem;
                        height: 0.7rem;
                      }
                    }
                    >.mint-checkbox-label{
                      color:#666;
                      margin-left:0rem;
                      font-size: 1.6rem;
                      letter-spacing: 0.03rem;
                    }
                  }
                }
              }
            }
          }
        }
        >.loginBut{
          height: 6rem;
          border-radius: 3rem;
          background-color: #ff6600;
          margin-top:6rem;
          font-size: 2.27rem;
          line-height: 6rem;
          color:#fff;
          text-align:center;
        }
        >.forgetPassword{
          line-height: 5rem;
          text-align:center;
          font-size: 1.6rem;
          color:#999;
        }
      }
      >.sigUp{
        display: flex;
        flex-direction: column;
        >.inputBox{
          display: flex;
          flex-direction: column;
          >div{
            margin-top:0.7rem;
            width: 100%;
            height: 6rem;
            border-radius: 3rem;
            background-color:#F2F2F2;
            display: flex;
            align-items: center;
            >img{
              width: 2rem;
              padding:0rem 1.5rem 0rem 2rem;
            }
            >input{
              flex:1;
              border:none;
              outline:none;
              line-height: 6rem;
              background-color: rgba(0,0,0,0,0);
              font-size: 2rem;
              margin-right:2rem;
            }
          }
        }
        >.protocol{
          margin-top:1rem;
          display: flex;
          >.mint-checklist{
            display: block;
            >.mint-checklist-title{
              display: none;
            }
            >.mint-cell{
              background:none;
              min-height:3rem;
              >.mint-cell-wrapper{
                background:none;
                padding:0rem;
                >.mint-cell-title{
                  >.mint-checklist-label{
                    padding:0rem;
                    .mint-checkbox-core{
                      width: 1.5rem;
                      height: 1.5rem;
                      border-radius: 0rem;
                      background-color: #ff6600;
                      border: none;
                    }
                    .mint-checkbox-core:after{
                      top: 0.2rem;
                      left: 0.5rem;
                      width: 0.4rem;
                      height: 0.7rem;
                    }
                    .mint-checkbox-label{
                      margin:0rem;
                      color:#999999;
                      font-size:1.9rem;
                    }
                  }
                }
                
              }
              >.mint-cell-left,>.mint-cell-right{
                display: none;
              }
            }
          }
          >span{
            line-height: 3rem;
            color:#999999;
            font-size: 1.9rem;
            >i{
              font-style:normal;
              font-size:1.6rem;
              color:#ff6600;
            }
          }
        }
        >.sigUpBut{
          line-height: 6rem;
          background-color: #ff6600;
          border-radius: 3rem;
          text-align:center;
          margin-top:2rem;
          color:#fff;
          font-size:2.27rem;
        }
        >.goToLogin{
          line-height: 6rem;
          text-align:center;
          font-size: 1.8rem;
          color:#999999;
        }
      }
    }
  }
}
</style>



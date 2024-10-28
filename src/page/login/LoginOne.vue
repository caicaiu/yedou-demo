<template>
  <div id="login" :class="{ active: showWxLogin }">
    <div class="header">
      <div class="logo">
        <img src="../../assets/vue.svg">
        <h1>亿设计</h1>
      </div>
      <div class="nav">
        <button class="login">登录</button>
        <button class="register">注册</button>
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <img src="../../assets/banner.svg"/>
      </div>
      <div class="form">
        <a-tabs :active-key="tabsActiveKey" @tab-click="tabsChange">
          <a-tab-pane key="phone" title="快捷登录">
            <div class="phone-form">
              <div class="phone-input">
                <span>+86</span>
                <input type="text" v-model="form.userPhone" placeholder="请输入手机号">
              </div>
              <div class="input-group">
                <input type="text" :value="form.userCode" placeholder="请输入短信验证码">
                <button :disabled="isSending" @click="sendCode">
                  {{ buttonText }}
                </button>
              </div>
              <button class="login" @click="clickLogin">
                <span v-if="loginLoading">
                  <a-spin/>
                  登录中...
                </span>
                <span v-if="!loginLoading">登录</span>
              </button>
              <button class="wx-login" @click="showWxLogin = true">微信扫码登录</button>
              <div class="no-account">没有账号？<a href="#">立即注册</a></div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="account" title="密码登录">
            <div class="account-form">
              <div class="account-input">
                <input type="text" :value="form.userAccount" placeholder="请输入账号">
              </div>
              <div class="password-input">
                <input type="password" :value="form.userPassword" placeholder="请输入密码">
              </div>
              <div class="forget-password"><a href="#">忘记密码？</a></div>
              <button class="login" @click="clickLogin">
                <span v-if="loginLoading">
                  <a-spin/>
                  登录中...
                </span>
                <span v-if="!loginLoading">登录</span>
              </button>
              <button class="wx-login" @click="showWxLogin = true">微信扫码登录</button>
              <div class="no-account">没有账号？<a href="#">立即注册</a></div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">招聘信息</a></li>
        <li><a href="#">友情链接</a></li>
        <li><a href="#">法律声明</a></li>
        <li><a href="#">隐私政策</a></li>
        <li><a href="#">廉政举报</a></li>
        <li><a href="#">意见反馈</a></li>
      </ul>
      <div class="copyright">copyright © 2021 亿设计 版权所有</div>
    </div>
  </div>
  <div class="wx-login-drawer" v-if="showWxLogin">
    <div class="title">
      <h1>微信扫码登录</h1>
      <div @click="showWxLogin = false">x</div>
    </div>
    <div class="qrcode">
      <div>
        <vue-qrcode value="https://example.com" :width="200" :height="200"></vue-qrcode>
      </div>

    </div>
    <div class="desc">扫描二维码并关注公众号，即可开启扫码登录功能</div>
  </div>
</template>

<script setup lang="ts">
import {onUnmounted, reactive, ref} from "vue";
import {Message} from "@arco-design/web-vue";
// region 登录相关变量
const loginLoading = ref(false)
const tabsActiveKey = ref<string | number>("phone")
const form = reactive({
  userAccount: "",
  userPassword: "",
  userPhone: "",
  userCode: ""
})
const showWxLogin = ref(false)
// endregion
// region 发送验证码相关变量
const isSending = ref(false) // 按钮是否禁用状态
const countdown = ref(60) // 倒计时秒数
const buttonText = ref("发送验证码") // 按钮显示的文字
let timer: number | undefined // 定时器ID，用于清除倒计时

// endregion
//region 发送验证码相关函数
const sendCode = () => {
  if (isSending.value) return
  // 假设这里调用验证码接口
  Message.success("验证码发送成功")
  // 开始倒计时
  isSending.value = true
  buttonText.value = `${countdown.value}秒`
  // 每秒更新倒计时
  timer = window.setInterval(() => {
    if (countdown.value > 1) {
      countdown.value--
      buttonText.value = `${countdown.value}秒`
    } else {
      resetButton()
    }
  }, 1000)
}

// 重置按钮状态
const resetButton = () => {
  if (timer) clearInterval(timer) // 清除定时器
  isSending.value = false
  countdown.value = 60
  buttonText.value = "发送验证码"
}
// endregion
// region 登录相关函数
const clickLogin = () => {
  loginLoading.value = true
  console.log(tabsActiveKey)
  setTimeout(() => {
    Message.success("登录成功")
    loginLoading.value = false
  }, 3000)
}

const tabsChange = (key: string | number) => {
  tabsActiveKey.value = key
  console.log(tabsActiveKey.value)
}

// endregion

// 在组件销毁时清除定时器
onUnmounted(() => {
  if (timer) clearInterval(timer)
})

</script>

<style scoped lang="scss">
$theme-color: #10BE81;
.active {
  filter: blur(5px);
}

#login {
  .header {
    height: 60px;
    width: 100%;
    padding: 0 60px;
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .logo {
      display: flex;

      h1 {
        font-size: 22px;
        margin-left: 10px;
      }
    }

    .nav {
      .login {
        height: 30px;
        width: 80px;
        color: $theme-color;
        border: 1px solid $theme-color;
        background: none;
        border-radius: 5px;
      }

      .register {
        margin-left: 10px;
        background: $theme-color;
        color: #fff;
        border: 1px solid $theme-color;
        border-radius: 5px;
        height: 30px;
        width: 80px;
      }
    }
  }

  .content {
    img {
      width: 500px;
      height: 300px;
    }

    height: calc(100vh - 150px);
    background: #EEEEEE;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .banner {
      height: 300px;
      width: 300px;
    }

    .form {
      height: 500px;
      width: 450px;
      background-color: #fff;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      ::v-deep(.arco-tabs-nav-type-line .arco-tabs-tab) {
        color: black;
        font-size: 16px;
        font-weight: 600;
      }

      ::v-deep(.arco-tabs-nav-ink) {
        background-color: $theme-color;
      }

      ::v-deep(.arco-tabs-nav::before) {
        background-color: transparent;
      }

      .phone-form {
        margin-top: 30px;

        .phone-input {
          height: 50px;
          border-radius: 5px;
          display: flex;
          /* justify-content: center; */
          align-items: center;
          border: 1px solid #D6DCE3;
          padding: 0 10px;
          box-sizing: border-box;

          input {
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            margin-left: 14px;
          }

          span {
            padding-right: 5px;
            position: relative;
          }

          span::after {
            position: absolute;
            height: 24px;
            background-color: #DBE0E6;
            width: 1px;
            content: "";
            transform: translate(0px, -4px);
            margin-left: 5px;
          }
        }

        .input-group {
          overflow: hidden;
          border-radius: 5px;
          display: flex;
          border: 1px solid #D6DCE3;
          margin-top: 30px;
          align-items: center;
          height: 50px;
          box-sizing: border-box;
          padding-left: 10px;

          input {
            width: 70%;
            height: 100%;
            border: none;
            border-right: 1px solid #D6DCE3;
            outline: none;
          }

          button {
            width: 30%;
            height: 100%;
            font-size: 14px;
            background: #F4F4F4;
            border: none;
            color: #888;
          }
        }
      }

      .account-form {
        margin-top: 30px;

        .account-input, .password-input {
          input {
            height: 50px;
            border-radius: 5px;
            border: 1px solid #D6DCE3;
            padding: 0 10px;
            width: 100%;
            outline: none;
            box-sizing: border-box;
          }
        }

        .forget-password {
          margin-top: 10px;
          text-align: right;

          a {
            color: $theme-color;
            font-size: 16px;
            font-weight: 600;
          }


        }

        .password-input {
          margin-top: 20px;
        }
      }

      .login {
        cursor: pointer;
        margin-top: 30px;
        width: 100%;
        height: 50px;
        border: none;
        background: $theme-color;
        font-size: 16px;
        color: #fff;
        border-radius: 5px;
      }

      .wx-login {
        cursor: pointer;
        margin-top: 10px;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        border: 1px solid $theme-color;
        background: #fff;
        font-size: 16px;
        color: $theme-color;
      }

      .no-account {
        text-align: center;
        margin-top: 30px;

        a {
          color: $theme-color;
          font-weight: 600;
        }
      }
    }
  }

  .footer {
    height: 90px;
    background-color: #2E2E41;
    color: #939394;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;

      li {


        a {
          color: #939394;

          &::after {
            content: "|";
            margin: 0 10px;
          }
        }

        &:last-child a::after {
          content: "";
        }
      }
    }

    .copyright {
      margin-top: 10px;
    }
  }


}

.wx-login-drawer {
  position: absolute;
  height: 450px;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 16px;
      font-weight: 600;
      color: $theme-color;
    }

    div {
      font-size: 18px;
      cursor: pointer;
    }
  }

  .qrcode {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    div {
      border: 1px solid $theme-color;
      padding: 1px;
    }
  }

  .desc {
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
    color: $theme-color;
  }
}
</style>

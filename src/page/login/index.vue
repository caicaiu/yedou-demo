<template>
  <div id="login">
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
        <a-tabs default-active-key="phone">
          <a-tab-pane key="phone" title="快捷登录">
            <div class="phone-form">
              <div class="phone-input">
                <span>+86</span>
                <input type="text" placeholder="请输入手机号">
              </div>
              <div class="input-group">
                <input type="text" placeholder="请输入短信验证码">
                <button>获取验证码</button>
              </div>
              <button class="login">登录</button>
              <button class="wx-login">微信扫码登录</button>
              <div class="no-account">没有账号？<a href="#">立即注册</a></div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="account" title="密码登录">
            Content of Tab Panel 2
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

</template>

<script setup lang="ts">
import {ref} from "vue";

const tabClick = (e: any) => {
  console.log('tabClick', e.target)
}
const username = ref('')
const password = ref('')
</script>

<style scoped lang="scss">
#login {
  $theme-color: #10BE81;

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
      height: 450px;
      width: 400px;
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
          height: 40px;
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
          height: 40px;
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

      .login {
        cursor: pointer;
        margin-top: 30px;
        width: 100%;
        height: 40px;
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
        height: 40px;
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

</style>

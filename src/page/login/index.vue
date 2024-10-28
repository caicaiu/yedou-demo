<template>
  <div class="app" :class="isShow ? 'login-show' : 'login-hide'">
    <div id="login">
      <div class="left-container" :style="{backgroundImage: `url(${logoBg})`}">
      </div>
      <div class="right-container">
        <div class="close-btn" @click="isShow = false">
          <svg t="1730095644246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2749" width="16" height="16">
            <path
                d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z"
                p-id="2750"></path>
          </svg>
        </div>
        <div class="qr-title">
          <span>扫码登录</span>
          开启编程之旅
        </div>
        <div class="qr-tip">未注册的微信号将自动创建账号</div>
        <div class="qr-code">
          <vue-qrcode value="https://example.com" :width="200" :height="200"></vue-qrcode>
        </div>
        <div class="qr-desc">
          <p>注册登录即表示同意用户协议和隐私政策</p>
        </div>
      </div>
      <div class="icon-container">
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABfCAMAAAA6VtL8AAAAY1BMVEUAAABXuv9Yuf9Yt//////////L6f+O0f+84v////8LC1lXuf+By/8Ak84A//Sr3P8FT5Q0WPd/yebV7f+/5PMILXaZq/tArtoISIADcbHM1f0FhaYDws1ngvkSgLsxn9Bad/lkZ8cpAAAACXRSTlMAv4BAgL/PwKCI1PSxAAADpElEQVRo3t2a63aqMBCFm9BzQc0RYrhpxb7/U54kVQfZCaEO+KN7rda6AvnYMzuBZX17WlkmrcRNMsvix/IoYhuSWJZnOdspycVICNrdtDBNiiFkv98fDvlQh79/xDKwbODJYnLQr/fr9Qi+KQLlIb1TjZkRuZu6OkJXdxLXmARPaEtCPFj5IxLqTdxIvHAgCvUbSGxUXDsiMSQAFdR+gW0qowCmYUyeJFspHXZMnCQUG8dnIY54DNbKOAEsRjW5rDROfovlEs/Akbl0v3a5FRc3h0W+mLi0uYzBgl1FJliUDa65NE1Aw3jmZKpheURGN02jlLK/tdYmbQ5oMxtmHKbv++JLvbKySA5NXBuGKNV3VbUZqiqKTimtn6Vl4YZppToPQhUF8ObSRKiI5qK6zYQsTukEbe7WocEVqHL2JjMZgPl0QLOKzQwRLkgTczpmyFYSN0mToY4BK01JmwsUMoPYAyuJa0zUWsoYsFKqOqUTtJgxrTbf1p0G+ReTxjTk8NmcoLVxFA2wOLQbjKp4gIYxaGgNqshpGNFMsGsyWkUs4nx1lylrWEXNgVWqmYgIVhFY7EISjKoYj2LbtvQmMdCFrcWqOJ7w45/TCUi3gdOokCZeR5moop8xhDvBAFiDOgrIIrA+2tPJvbYjlh2wI0SLWttZGsCwiic3433yFgZ8NUeXoXS0aaOWNY/G7JTD6WlggG7tAK41XNeYD1WMjLVU0UcY1Y6sxepIsMd8VKOOwRu8inZUx2DTBLbMUMvIDAHgb4JhHrFp8XywN0iEjW7Sul8AVqlQQjLKBxuWTshrYRJunD8AtgvBjKr4sELlwYUmx8/4i8CCtzQBe37e9HyY0iHYFmBYR34VEUbWVLTvXyqKwr/GWToFiz+iuum7XoXUd54MrPkwo1RRfVE85Prph3EaHGWltW6UV+ep/gRiASz4eYRWV108JE9oSL1okydgIKPJB0sIW0PHJOxY1nQYj3Quj6mA1GXtgCw5kLts3EEQ5i6JJT9LWeYJ2PFoj7OHsVWey9rNhhvxljpWnt0PH3YuP+mqAXalnUurBQLiSGVdR2HEqxdwRiS8eQ71STRGQKYfeEjsQtaBtsOjHOWEQaLzw8+Ne7wyHusYgQU3x5rTNkoYwGhVA43Nwmd9H0c85VkYnknLDGF8xWEUx6WFa9pqpdsnLrNVYRjGYBxXgVnUagnBfHgYJmQVGP2zYmXRV4m264tgcvsK3b9X9QJJC/oP4R9O8wZK4UEAAAAASUVORK5CYII=">
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue";
const isShow = ref(true);
const logoBg = ref("data:image/png;base64,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")
</script>
<style scoped lang="scss">
$theme-color: #10BE81;
.app {
  height: 100vh;
  width: 100vw;
}

.login-show {
  display: block;
  background-color: #8C8C8C;
}

.login-hide {
  display: none;
  background-color: #fff;
}

#login {
  width: 750px;
  height: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  display: flex;
  justify-content: space-between;

  .left-container {
    width: 30%;
    height: 100%;
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    /*logo 图片*/
    background-repeat: no-repeat;
  }

  .right-container {
    background-color: #ffffff;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    width: 80%;
    border-radius: 30px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    .close-btn {
      cursor: pointer;
      text-align: right;
      svg:hover{
        color: white;
      }
    }

    .qr-title {
      font-size: 20px;
      text-align: center;
      margin-top: 50px;

      span {
        color: $theme-color;
      }
    }

    .qr-code {
      text-align: center;
      margin-top: 30px;

      img {
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
      }
    }

    .qr-tip {
      font-size: 14px;
      margin-top: 10px;
      color: #a8a8a8;
      text-align: center;
    }

    .qr-desc {
      position: absolute;
      bottom: 0;
      width: 100%;
      margin: 0 !important;
      padding: 10px 10px 10px 20px;
      color: #888;
      font-size: 12px;
      text-align: center;
      text-align: left;
    }
  }

  .icon-container {
    position: absolute;
    right: -50px;
    bottom: -3px;
  }
}
</style>

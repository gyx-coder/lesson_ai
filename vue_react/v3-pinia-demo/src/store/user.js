// 全局共享的用户状态
import { defineStore } from "pinia";
import {
  ref,
  reactive
} from 'vue'
// hooks 编程
export const useUserStore = defineStore("user",() =>{
  const isLogin = ref(false)
  const toLogin = () => {
    isLogin.value = true
  }
  const toLogout = () => {
    isLogin.value = false
  }

  const userInfo = reactive({
    name:'',
    avatar:'',
    message:0,
    uid:null
  })
  const setUserInfo = () => {
    userInfo.name = '少年姜太公'
    userInfo.avatar = "https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~110x110.awebp"
    userInfo.message = 10
    userInfo.uid = 4334729370542980
  }

  return {
    isLogin,
    toLogin,
    toLogout,
    userInfo,
    setUserInfo
  }
})
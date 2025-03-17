function throttle(func, wait, options={}) {
  // 定义内部变量
  let timeout, context, args, result;
  let previous = 0; // 上次执行时间戳
  // if (!options) options = {}; // 初始化 options

  // 延迟执行函数
  const later = function() {
      // 根据 leading 选项更新 previous
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null; // 清除定时器
      func.apply(context, args); // 执行目标函数
      if (!timeout) context = args = null; // 清除上下文和参数
  };

  // 节流函数
  var throttled = function() {
      var now = new Date().getTime(); // 当前时间戳
      // 如果 leading 为 false 且是第一次调用
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous); // 剩余等待时间
      context = this; // 保存上下文
      args = arguments; // 保存参数
      // 如果剩余时间小于等于0或大于等待时间
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout); // 清除定时器
              timeout = null;
          }
          previous = now; // 更新上次执行时间
          func.apply(context, args); // 立即执行
          if (!timeout) context = args = null; // 清除上下文和参数
      } else if (!timeout && options.trailing !== false) {
          // 设置延迟执行
          timeout = setTimeout(later, remaining);
      }
  };
  
  // 取消节流
  throttled.cancel = function() {        
      clearTimeout(timeout); // 清除定时器
      previous = 0; // 重置上次执行时间
      timeout = null; // 清除定时器引用
  }
  return throttled; // 返回节流函数
}
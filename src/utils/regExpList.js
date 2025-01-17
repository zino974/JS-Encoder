/**
 * Set of regular expressions to be used
 * 使用到的正则表达式集合
 */

module.exports = {
  // 只包含字母或数字
  onlyLetterAndNum: /^[A-Za-z0-9]+$/,
  // 邮箱验证
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // 必须包含字母和数字
  password: /^\S*(?=\S*\d)(?=\S*[a-zA-Z])\S*$/,
  // url格式
  url: /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/,
  // 是否为http(s)格式链接
  httpUrl: /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%@&=]*)?$/,
  // 文件名,长度不超过255且不包括特殊字符\/<>|?:*
  filename: /^((?!\\|\/|:|\*|\?|<|>|\|).){1,255}$/
}

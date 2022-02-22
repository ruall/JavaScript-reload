/**
 * 方法一：双循环去重
 */
function unique1(arr) {
  if (!Array.isArray(arr)) {
    console.log('type err!')
    return
  }
  let res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < res.length; j++) {
      if (res[j] === arr[i]) {
        flag = false
        break
      }
    }
    if (flag) {
      res.push(arr[i])
    }
  }
  console.log(res)
  return res
}

unique1([1, 2, 3, 4, 9, 6, 3, 4, 8, 7, 3, 4])

/**
 * 方法二：indexOf
 * 创建一个空数组res，通过循环判断数组arr中的每一项是否包含在res中，如果有就表示是重复元素，如果没有就将这一项添加到res中
 */
function unique2(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  console.log(res)
  return res
}

unique2([1, 2, 3, 3, 1, 2, 4, 5, 9, 7, 6, 5, 5])

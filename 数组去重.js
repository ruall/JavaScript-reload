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

unique1([1, 1, 2, 3, 9, 6, 3, 8, 7, 3, 4, 4])

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

/**
 * 方法三：indexOf
 * 利用indexOf检查元素在数组中第一次出现的位置是否与现在的位置相同，如果不同说明是重复元素
 */
function unique3(arr) {
  if (!Array.isArray(arr)) {
    console.log('type err!')
    return
  }
  return Array.prototype.filter.call(arr, function (item, index) {
    return arr.indexOf(item) === index
  })
}

unique3([1, 2, 3, 3, 1, 2, 4, 5, 9, 7, 6, 5, 5])

/**
 * 方法四：相邻元素去重比较
 * 调用sot()方法排序arr数组，然后通过循环遍历数组，比较相邻两个元素是否相等，如果相等就跳过
 */
function unique4(arr) {
  if (!Array.isArray(arr)) {
    console.log('type err!')
    return
  }
  arr = arr.sort()
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      res.push(arr[i])
    }
  }
  console.log(res)
  return res
}
unique4([1, 2, 3, 3, 1, 2, 4, 5, 9, 7, 6, 5, 5])

/**
 * 方法五：利用对象属性去重
 * 创建空对象，遍历数组、并把数组的值作为对象的属性，并给该属性赋值1，没出现一次对应的属性值加1
 */
function unique5(arr) {
  if (!Array.isArray(arr)) {
    console.log('type err!')
    return
  }
  let res = [],
    obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      res.push(arr[i])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  console.log(res)
  return res
}
unique5([1, 2, 3, 3, 1, 2, 4, 5, 9, 7, 6, 5, 5])

/**
 * 方法六：利用set和结构赋值方法去重
 * ES6中新增了数据类型set，set的一个最大特点就是数据不重复
 */
function unique6(arr) {
  if (!Array.isArray(arr)) {
    console.log('type err!')
    return
  }
  return [...new Set(arr)]
}
unique6([1, 2, 3, 3, 1, 2, 4, 5, 9, 7, 6, 5, 5])

/**
 * 方法七：Array.form()和Set()去重
 * Array.form()可以将Set结构转换为数组结构
 */
function unique7(arr) {
  if (!Array.isArray(arr)) {
    console.log('type err!')
    return
  }
  return Array.from(new Set(arr))
}
unique7([1, 2, 3, 3, 1, 2, 4, 5, 9, 7, 6, 5, 5])

// 类型判断方法
Object.prototype.toString.call(num), // '[object Number]'
  Object.prototype.toString.call(str), // '[object String]'
  Object.prototype.toString.call(bool), // '[object Boolean]'
  Object.prototype.toString.call(arr), // '[object Array]'
  Object.prototype.toString.call(obj), // '[object Object]'
  Object.prototype.toString.call(func), // '[object Function]'
  Object.prototype.toString.call(und), // '[object Undefined]'
  Object.prototype.toString.call(nul), // '[object Null]'
  Object.prototype.toString.call(date), // '[object Date]'
  Object.prototype.toString.call(reg), // '[object RegExp]'
  Object.prototype.toString.call(error) // '[object Error]'

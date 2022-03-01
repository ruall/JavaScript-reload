function calc(a, option, b) {
  let res
  let formula
  if (option == '+') {
    res = a.value + b.value
    formula = a.formula + '+' + b.formula
  } else if (option == '-') {
    res = a.value - b.value
    formula = a.formula + '-' + b.formula
  } else if (option == '*') {
    res = a.value * b.value
    formula = a.formula + '*' + b.formula
  } else if (option == '/') {
    res = a.value / b.value
    formula = a.formula + '/' + b.formula
  } else if (option == '.') {
    res = Number([a.value, b.value].join(''))
    formula = a.formula + '.' + b.formula
  }
  if (res < 0) {
    res = NaN
  } else if (res % 1 !== 0) {
    res = NaN
  }
  return {
    value: res,
    formula: '(' + formula + ')',
  }
}
let cache = {}
function calcSum(nums, options, target) {
  let cha = nums.length - 1 - options.length
  if (cha) {
    options.push(...'.'.repeat(cha))
  }
  cache = {}
  options.sort()
  for (let i of nums) {
    cache[i] = {
      value: i,
      formula: i,
    }
  }
  calcLoop(nums, options, target)
}
function calcLoop(nums, options, target) {
  if (
    nums.length === 1 &&
    options.length == 0 &&
    cache[nums[0]].value == target
  ) {
    console.log(nums[0])
    return
  }
  nums.sort()
  let key = [...nums].join() + '|' + nums.join()
  if (cache[key]) {
    return
  }
  cache[key] = true
  for (let i of '*+-/.') {
    let index = options.indexOf(i)
    if (index >= 0) {
      let newOptions = [...options]
      newOptions.splice(index, 1)
      let len = nums.length
      for (let j = 0; j < len - 1; j++) {
        let newNums = [...nums]
        newNums.splice(nums.indexOf(nums[j]), 1)
        for (let k = j + 1; k < len; k++) {
          let newNums2 = [...newNums]
          newNums2.splice(newNums2.indexOf(nums[k]), 1)
          let newNum = calc(cache[nums[j]], i, cache[nums[k]])
          if (isNaN(newNum.value)) {
          } else {
            cache[newNum.formula] = newNum
            let t = [newNum.formula, ...newNums2]
            calcLoop(t, newOptions, target)
          }
          if (i != '+' && i != '*') {
            let newNum = calc(cache[nums[k]], i, cache[nums[j]])
            if (isNaN(newNum.value)) {
            } else {
              cache[newNum.formula] = newNum
              let t = [newNum.formula, ...newNums2]
              calcLoop(t, newOptions, target)
            }
          }
        }
      }
    }
  }
}
calcSum([1, 9, 8, 6, 2, 1, 9], ['*', '/', '+', '-'], 36)

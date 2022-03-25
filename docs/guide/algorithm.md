
## 一个数组旋转k步

``` js
function reserveArr(arr, k) {
    const len = arr.length;
    if (!k || len == 0) return arr;
    const num = Math.abs(k % len);
    const leftArr = arr.slice(0, len - num);
    const rightArr = arr.slice(-num);
    return rightArr.concat(leftArr);
}
```

## 判断字符串是否括号匹配

``` js

function isMatchBracket(lB, rB) {
    switch (lB + rB) {
        case '()':
        case '{}':
        case '[]':
            return true;
        default: false;
    }
}

function matchBracket(str) {
    const stack = [];
    const leftB = '({[';
    const rightB = ')}]';

    for(let i =0; i < str.length; i++) {
        const item = str[i];
        if (leftB.includes(item)) {
            stack.push(item);
        } else if (rightB.includes(item)) {
            const lItem = stack.pop();
                if (!isMatchBracket(lItem, item)) {
                    return false
                }
        }
    }
    return !stack.length;
}
```

## 两个栈实现队列

``` js
class myQueue {
    stack1: [],
    stack2: [],
    addTail(value) {
        this.stack1.push(value);
    },
    deleteHead() {
        if (this.stack2.length) return this.stack2.pop();
        if (!this.stack1.length) return -1;
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop() || -1;
    }
} 
```

## 二分查找

``` js
function binarySearch(arr, target) {
    const len = arr.length;
    if (len == 0) return -1;
    let startIndex = 0;
    let endIndex = len - 1;

    while(startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleValue = arr[middleIndex];
        if (middleValue > target) {
            endIndex = middleIndex - 1;
        } else if (middleValue < target) {
            startIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

function binarySearch2(arr, target, startIndex, endIndex) {
    const len = arr.length;
    if (len == 0) return -1;
    startIndex = startIndex || 0;
    endIndex = endIndex || len - 1;

    const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleValue = arr[middleIndex];
        if (middleValue > target) {
            return binarySearch2(arr, target, startIndex, middleIndex - 1)
        } else if (middleValue < target) {
            return binarySearch2(arr, target, middleIndex + 1, endIndex)
        } else {
            return middleIndex;
        }
}
```

## 给一个数组，找出其中和为n的两个数 - 双指针

``` js
function findTwoNum(arr, total) {
    const res = [];

    const len = arr.length;
    if (len == 0) return res;

    let s = 0;
    let e = len - 1;

    while(s < e) {
        if (arr[s] + arr[e] > total) {
            e--;
        } else if (arr[s] + arr[e] < total) {
            s++;
        } else {
            res.push(arr[s]);
            res.push(arr[e]);
            break;
        }
    }
    return res;
}
```

## 青蛙跳台有几种方式，每次1, 2个台阶

``` js
function fn (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return fn(n - 1) + f(n - 2);
}
```

## 获取字符串中连续出现最多的字符

``` js
function getMaxChar(str) {
    const res = {
        char: '',
        len: 0
    };

    const len = str.length;
    if (len == 0) return res;

    let maxLen = 0;

    let i = 0;
    let j = 0;

    for(; i < len; i++) {
        if(str[i] === str[j]) {
            maxLen++;
        }
        console.log(i, str[i], maxLen)

        if (str[i] !== str[j] || i == len - 1) {
            if(maxLen > res.len) {
                res.char = str[j];
                res.len = maxLen;
            }

            maxLen = 0;

            if (i < len - 1) {
                j = i;
                i--;
            }
        }
    }
    return res;
}
```

## 快速排序

``` js
function quickSort(arr) {
    const len = arr.length;
    if (len == 0) return arr;

    const middleIndex = Math.floor(len / 2);
    const middleValue = arr[middleIndex];

    const left = [];
    const right = [];

    for (let i = 0; i< len; i++) {
        const item = arr[i];
        if (item < middleValue) {
            left.push(item)
        } else if (item > middleValue) {
            right.push(item);
        }
    }
    return [...quickSort(left), middleValue, ...quickSort(right)];
}
```

## 获取对称数 - 双指针

``` js
function getPartNum(max) {
    const res = [];
    for (let i = 0; i < max; i++) {
        const s = i.toString();
        const len = s.length;

        let flag = true;
        let sIndex = 0;
        let eIndex = len - 1;
        while(sIndex < eIndex) {
            if (s[sIndex] != s[eIndex]) {
                flag = false;
                break;
            } else {
                sIndex++;
                eIndex--;
            }
        }

        if (flag) {
            res.push(i);
        }
    }
    return res;
}
```

## 千分位格式化

``` js
function padLeft(n) {
    return ('0000000' + (n)).slice(-3);
}
function matchNum(num) {
    let n = '';

    while(num >= 1000) {
        const left = ',' + padLeft(num % 1000);
        n = left + n;
        num = parseInt(num / 1000)
    }
    return num + n;
}
```

## js切换字母大小

``` js
function changeChar(str) {
    const len = str.length;
    let res = '';
    for(let i = 0; i < len; i++) {
        const code = str.charCodeAt(i)
        if (code >= 65 && code <= 90) {
            res += str[i].toLowerCase();
        } else if (code >= 97 && code <= 122) {
            res += str[i].toUpperCase();
        } else {
            res += str[i]
        }
    }
    return res
}
```


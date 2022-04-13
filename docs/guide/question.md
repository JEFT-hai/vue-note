<!--
 * @Author: your name
 * @Date: 2022-03-28 22:54:57
 * @LastEditTime: 2022-03-29 00:22:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\question.md
-->
## [1, 2, 3].map(parseInt);

``` js
[1, 2, 3].map((item, index) => parseInt(item, index));

// 1, 0 1
// 2, 1 NaN
// 3, 2 NaN
```

## 

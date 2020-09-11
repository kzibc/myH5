# Markdown学习笔记


## 1. 使用>放在开头可以引用，可以嵌套
> # try0911
>>## markdown study<br>
>let's begin
```md
> # try0911
>>## markdown study<br>
>let's begin
```

## 2. 标题可以用=-对应12级标题，也可以用#加空格对应1-6级标题
```md
# Hello Markdown
Hello Markdown
===
h1
===
h2
----
```

# Hello Markdown
Hello Markdown
===
h1
===
h2
----

## 3. 行内代码 \`代码\` 放在一对反引号中间 `code`<br/>
`当高亮用好像也不错`

## 4. 引用代码块用三对反引号\```,可以在前面加上语言名
\```md/markdown\```也可以哦

python
```python
print(
    'hello world'
    )
```
javascript 可以js
```js
console.log('js code')
```

html
```html
<div><p>write </p></div>
```


## 5. md内可以直接使用HTML语言
```md
<font color="green">1111111</font>
```
<font color="green">1111111</font>

## 6. &<>相关转译待明确，好像现在看不出来
```html
4 > 3
```
4>2
1&2

## 7. 列表
1. 有序列表 数字加英文点
    1. red
11111111111111
    2. blue

2. 无序列表 */+/-一个效果
    - re
    - blue

## 8. 分割线，三个以上-或*
```md
---
***
* * *
*****
-------------------------
```
---
***


## 9. 超链接 
1. 行内方式
```md
[baidu](http:www.baidu.com)

[comeon](/css/1122.html)
```
[baidu](http:www.baidu.com)

[comeon](/css/1122.html)

2. 参考方式（建议地址放在最后，美观易读）

```md
this is  [apple][] tree

[apple]: 
http://www.baidu.com 
"baidu website"

I get 10 times more traffic from [Google][] than from
[Yahoo][2] or [MSN][3].

[Google]: http://google.com/ "google"
[2]: http://google.com/ "google"
[3]: http://google.com/ "google"
```
this is  [apple][] tree

[apple]: 
http://www.baidu.com 
"baidu website"

I get 10 times more traffic from [Google][] than from
[Yahoo][2] or [MSN][3].

[Google]: http://google.com/ "google"
[2]: http://google.com/ "google"
[3]: http://google.com/ "google"


## 10. 引用图片
1. 行内方式
```md
![try](https://i.loli.net/2018/08/14/5b72e9cdb2984.jpg)
```

2. 参考方式
```markdown
![try][bb]

[bb]:
https://i.loli.net/2018/08/14/5b72e9cdb2984.jpg "bb"
```

`引用无法调节大小，可以使用html语言调节`
```html
<img src="https://i.loli.net/2018/08/14/5b72e9cdb2984.jpg" height=100/>
```

## 11. 网址和邮箱可以直接用<>超链接
```md
<http://www.baidu.com>

<shounakou537@qq.com>
```

<http://www.baidu.com>

<shounakou537@qq.com>

## 12. 文字倾斜加粗, 分别是123个*或_
```md
*倾斜*

**加粗**

***倾斜加粗***
```
*倾斜*

**加粗**

***倾斜加粗***


### 购物首页 动画页面练习
---
#### 主要用到的插件 

* fullpage,jquery

---
#### 主要用到的知识点

* css3中的动画

  * `animation:动画名 运动模式 延迟时间 速度曲线 播放次数 是否反向`
  * `@keyframes down {
    from{
      bottom:50px;
    }
    to{
      bottom:70px;
    }
    }`

* fullpage的使用
* css的编写规范
  * css书写顺序
    * 1.位置属性(position, top, right, z-index, display, float等)
    * 2.大小(width, height, padding, margin)
    * 3.文字系列(font, line-height, letter-spacing, color- text-align等)
    * 4.背景(background, border等)
    * 5.其他(animation, transition等)
  * css书写规范
    * 使用css缩写属性
    * 去掉小数点前面的"0"
    * 类名不要太简单,简单的前提是要看懂
    * 16进制颜色代码缩写
    * 连字符css,可以使用`-`,不建议使用`_`
    * 不要随意使用Id选择器
    * 为选择器添加状态前缀.增强语义
  * 常用的css命名规则

---
#### 碰到的问题

* 碰到了margin为负值的情况,通过查资料总结如下
* > margin为负数的影响及常见的布局应用>`http://www.jianshu.com/p/549aaa5fabaa`
  * margin为负值产生的影响
    * 对自身的影响:当元素自身没有width值火width值为auto时,会增加自身宽度;top和bottom对高度没影响
    * 对文档流的影响
    * 对浮动元素的影响:
      * 总结:负margin会改变浮动元素的显示位置，即使我的元素写在DOM的后面，我也能让它显示在最前面。圣杯布局、双飞翼布局啊什么的，都是利用这个原理实现的
    * 对绝对定位影响:
      * 可以进行对绝对定位元素的偏移,知道自身宽高便宜一半可以居中
      * 不过常用的是`transform: translate3d(-50%,-50%,0);`
  * margin为负值的常见布局应用
    * 左右固定中间自使用(双飞翼布局)
    * 去除列表右边框
      * 利用负margin增加宽度的特点，举个在实际中应用例子🌰
      * 对于图片列表，我会常常设计成两边对齐，中间元素平均分布，类似下面的布局
      * 负边距+定位：水平垂直居中
      * 去除列表最后一个li元素的border-bottom
      * 多列等高
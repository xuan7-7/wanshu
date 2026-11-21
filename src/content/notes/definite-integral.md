---
title: 定积分：牛顿-莱布尼茨、换元法与面积体积
chapter: 第四、五章 不定积分 / 定积分及应用
summary: 积分是分值最重的一块。不定积分不熟，定积分必崩；换元忘换上下限，白算。
order: 3
date: 2026-11-20
tags: [积分, 换元法, 分部积分, 面积体积, 广东专升本]
---

## 一、原函数与不定积分

若 $F'(x) = f(x)$，称 $F$ 是 $f$ 的一个原函数。全体原函数记作

$$
\int f(x)\,dx = F(x) + C

$$

$C$ 不能丢——同一个函数的原函数有无穷多个，只差常数。

## 二、基本积分表

$$
\int x^a dx = \frac{x^{a+1}}{a+1} + C \ (a \ne -1),\qquad \int \frac{dx}{x} = \ln|x| + C

$$

$$
\int \mathrm{e}^x dx = \mathrm{e}^x + C,\qquad \int a^x dx = \frac{a^x}{\ln a} + C

$$

$$
\int \sin x\,dx = -\cos x + C,\qquad \int \cos x\,dx = \sin x + C

$$

$$
\int \frac{dx}{1+x^2} = \arctan x + C,\qquad \int \frac{dx}{\sqrt{1-x^2}} = \arcsin x + C

$$

这张表要能做到「看到就写」，它是后面所有技巧的原料。

## 三、第一类换元（凑微分）

$$
\int f(\varphi(x))\varphi'(x)\,dx = \int f(u)\,du

$$

关键是把 $\varphi'(x)dx$ 凑成 $d\varphi(x)$。

> 例：$\int x \mathrm{e}^{x^2}dx$。注意到 $x\,dx = \frac{1}{2}d(x^2)$，令 $u = x^2$：
>
> $$\int x \mathrm{e}^{x^2}dx = \frac{1}{2}\int \mathrm{e}^u du = \frac{1}{2}\mathrm{e}^{x^2} + C$$

## 四、第二类换元（变量代换）

遇到根式，令 $x = \varphi(t)$ 把根号消掉：

- $\sqrt{a^2-x^2}$：令 $x = a\sin t$
- $\sqrt{a^2+x^2}$：令 $x = a\tan t$
- $\sqrt{x^2-a^2}$：令 $x = a\sec t$

**定积分换元时必须同时换上下限**，换完直接用新上下限算，不必再回代。

> 例：$\displaystyle\int_0^1 x \mathrm{e}^{x^2}dx$。令 $u=x^2$，$x:0\to1$ 对应 $u:0\to1$，
>
> $$\frac{1}{2}\int_0^1 \mathrm{e}^u du = \frac{e-1}{2}$$

## 五、分部积分

$$
\int u\,dv = uv - \int v\,du

$$

选 $u$ 的口诀：**反对幂三指**（反三角、对数、幂函数、三角、指数），排在前面的优先当 $u$。

> 例：$\int x\ln x\,dx$。取 $u=\ln x$，$dv = x\,dx$，则 $du = \frac{dx}{x}$，$v=\frac{x^2}{2}$：
>
> $$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot\frac{dx}{x} = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

## 六、定积分的性质

**牛顿-莱布尼茨公式**把所有计算收归一处：

$$
\int_a^b f(x)\,dx = F(b) - F(a)

$$

常用性质：

- 线性：$\int_a^b [\alpha f + \beta g] = \alpha\int f + \beta\int g$
- 区间可加：$\int_a^b = \int_a^c + \int_c^b$
- 交换上下限变号：$\int_a^b = -\int_b^a$
- 定积分是**数**，不定积分是**函数族**，别混淆

**对称性秒杀**：若积分区间关于原点对称，

- $f$ 奇函数：$\displaystyle\int_{-a}^{a} f(x)dx = 0$
- $f$ 偶函数：$\displaystyle\int_{-a}^{a} f(x)dx = 2\int_0^a f(x)dx$

> 例：$\displaystyle\int_{-1}^{1} x^3\cos x\,dx = 0$，因为被积函数是奇函数。

## 七、应用：面积与旋转体

**平面图形面积**（上下两曲线之间）：

$$
S = \int_a^b |f(x) - g(x)|\,dx

$$

判断谁在上谁在下，必要时分段。

**绕 $x$ 轴旋转的体积**（圆盘法）：

$$
V = \mathrm{\pi}\int_a^b [f(x)]^2 dx

$$

**绕 $y$ 轴旋转的体积**（柱壳法）：

$$
V = 2\mathrm{\pi}\int_a^b x f(x)\,dx

$$

做题第一步永远是**画图**。图画不对，上下限必错，后面全废。

## 八、三道典型例题

**例 1**：$\displaystyle\int_0^{\mathrm{\pi}/2}\sin^2 x\,dx$

用半角公式降次：$\sin^2 x = \frac{1-\cos 2x}{2}$，得 $\frac{\mathrm{\pi}}{4}$。

**例 2**：$\displaystyle\int_0^1 x\mathrm{e}^{-x}dx$

分部积分，取 $u=x$、$dv=\mathrm{e}^{-x}dx$，得 $\left[-x\mathrm{e}^{-x}\right]_0^1 + \int_0^1 \mathrm{e}^{-x}dx = -\mathrm{e}^{-1} + 1 - \mathrm{e}^{-1} = 1 - \frac{2}{e}$。

**例 3**：求 $y=x^2$ 与 $y=x$ 围成的图形面积。

交点为 $x=0$ 与 $x=1$，在 $(0,1)$ 上 $x > x^2$，故

$$
S = \int_0^1 (x - x^2)dx = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}

$$

## 九、易错点

- 定积分换元后忘记换上下限（最高频）。
- 不定积分丢 $+C$。
- 面积题不画图，上下限设错。
- 奇偶性看错：只对对称区间成立。
- 旋转体公式混用圆盘法与柱壳法。

## 十、练习路线

1. 不定积分表默写，每天一遍，5 天。
2. 凑微分 15 题，根式代换 10 题。
3. 分部积分 15 题（三类循环：幂×指数、幂×三角、幂×对数）。
4. 定积分计算 15 题，重点练上下限。
5. 应用题 8 题：面积 4、旋转体 4。

积分没有捷径，手上得有感觉。每天动笔 5 道，胜过周末突击 3 小时。

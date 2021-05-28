import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于我们' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>这个项目的初衷，是想让从事前端开发的同学，进入全栈开发的领域。当然，不能说学完本教程你就能胜任任何全栈开发。但至少，你已经可以从设计数据库表开始，把自己的一个想法转化成实际可见的项目。</article>
      <h2>关于作者</h2>
      <article>
        从 2015 年实习开始至今，有 6 年前端开发经验。虽然没有在大厂呆过，但是正因如此，我深知奋战在中小厂的前端开发在从业 1 到 3 年后，会遇到什么瓶颈，小册中也详细的描述了怎样从初级到中级的进阶之路。
      </article>
      <h2>关于小册</h2>
      <article>这是一本全栈小册，服务端采用 Node 上层架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库。本小册致力于让同学们学会服务端的开发流程，从设计数据库到接口的编写，前端的接口数据对接和页面制作，再到线上环境的部署。由于本人用的是 Mac，为了照顾到 Windows 系统的同学，全程关键步骤都会有 Windows 部分的讲解。</article>
    </div>
  </>
};

export default About;
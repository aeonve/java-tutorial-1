(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{292:function(v,_,t){"use strict";t.r(_);var e=t(11),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"javaee-面经"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javaee-面经"}},[v._v("#")]),v._v(" JavaEE 面经")]),v._v(" "),t("h2",{attrs:{id:"_1-servlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-servlet"}},[v._v("#")]),v._v(" 1. Servlet")]),v._v(" "),t("h3",{attrs:{id:"_1-1-什么是-servlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是-servlet"}},[v._v("#")]),v._v(" 1.1. 什么是 Servlet")]),v._v(" "),t("p",[v._v("Servlet（Server Applet），即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。")]),v._v(" "),t("ul",[t("li",[v._v("狭义的 Servlet 是指 Java 实现的一个接口。")]),v._v(" "),t("li",[v._v("广义的 Servlet 是指任何实现了这个 Servlet 接口的类。")])]),v._v(" "),t("p",[v._v("Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服务器。")]),v._v(" "),t("h3",{attrs:{id:"_1-2-servlet-和-cgi-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-servlet-和-cgi-的区别"}},[v._v("#")]),v._v(" 1.2. Servlet 和 CGI 的区别")]),v._v(" "),t("p",[v._v("Servlet 技术出现之前，Web 主要使用 CGI 技术。它们的区别如下：")]),v._v(" "),t("ul",[t("li",[v._v("Servlet 是基于 Java 编写的，处于服务器进程中，他能够通过多线程方式运行 service() 方法，一个实例可以服务于多个请求，而且一般不会销毁；")]),v._v(" "),t("li",[v._v("CGI(Common Gateway Interface)，即通用网关接口。它会为每个请求产生新的进程，服务完成后销毁，所以效率上低于 Servlet。")])]),v._v(" "),t("h3",{attrs:{id:"_1-3-servlet-版本以及主要特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-servlet-版本以及主要特性"}},[v._v("#")]),v._v(" 1.3. Servlet 版本以及主要特性")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("版本")]),v._v(" "),t("th",[v._v("日期")]),v._v(" "),t("th",[v._v("JAVA EE/JDK 版本")]),v._v(" "),t("th",[v._v("特性")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Servlet 4.0")]),v._v(" "),t("td",[v._v("2017 年 10 月")]),v._v(" "),t("td",[v._v("JavaEE 8")]),v._v(" "),t("td",[v._v("HTTP2")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 3.1")]),v._v(" "),t("td",[v._v("2013 年 5 月")]),v._v(" "),t("td",[v._v("JavaEE 7")]),v._v(" "),t("td",[v._v("非阻塞 I/O，HTTP 协议升级机制")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 3.0")]),v._v(" "),t("td",[v._v("2009 年 12 月")]),v._v(" "),t("td",[v._v("JavaEE 6, JavaSE 6")]),v._v(" "),t("td",[v._v("可插拔性，易于开发，异步 Servlet，安全性，文件上传")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 2.5")]),v._v(" "),t("td",[v._v("2005 年 10 月")]),v._v(" "),t("td",[v._v("JavaEE 5, JavaSE 5")]),v._v(" "),t("td",[v._v("依赖 JavaSE 5，支持注解")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 2.4")]),v._v(" "),t("td",[v._v("2003 年 11 月")]),v._v(" "),t("td",[v._v("J2EE 1.4, J2SE 1.3")]),v._v(" "),t("td",[v._v("web.xml 使用 XML Schema")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 2.3")]),v._v(" "),t("td",[v._v("2001 年 8 月")]),v._v(" "),t("td",[v._v("J2EE 1.3, J2SE 1.2")]),v._v(" "),t("td",[v._v("Filter")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 2.2")]),v._v(" "),t("td",[v._v("1999 年 8 月")]),v._v(" "),t("td",[v._v("J2EE 1.2, J2SE 1.2")]),v._v(" "),t("td",[v._v("成为 J2EE 标准")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 2.1")]),v._v(" "),t("td",[v._v("1998 年 11 月")]),v._v(" "),t("td",[v._v("未指定")]),v._v(" "),t("td",[v._v("First official specification, added RequestDispatcher, ServletContext")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 2.0")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("JDK 1.1")]),v._v(" "),t("td",[v._v("Part of Java Servlet Development Kit 2.0")])]),v._v(" "),t("tr",[t("td",[v._v("Servlet 1.0")]),v._v(" "),t("td",[v._v("1997 年 6 月")]),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("h3",{attrs:{id:"_1-4-servlet-和-jsp-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-servlet-和-jsp-的区别"}},[v._v("#")]),v._v(" 1.4. Servlet 和 JSP 的区别")]),v._v(" "),t("ol",[t("li",[v._v("Servlet 是一个运行在服务器上的 Java 类,依靠服务器支持向浏览器传输数据。")]),v._v(" "),t("li",[t("strong",[v._v("JSP 本质上就是 Servlet")]),v._v("，每次运行的时候 JSP 都会被编译成 .java 文件，然后再被编译成 .class 文件。")]),v._v(" "),t("li",[v._v("有了 JSP，Servlet 不再负责动态生成页面，转而去负责控制程序逻辑的作用，控制 JSP 与 JavaBean 之间的流转。")]),v._v(" "),t("li",[v._v("JSP 侧重于视图,而 Servlet 侧重于控制逻辑,在 MVC 架构模式中,JSP 适合充当视图 View,Servlet 适合充当控制器 Controller。")])]),v._v(" "),t("h3",{attrs:{id:"_1-5-简述-servlet-生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-简述-servlet-生命周期"}},[v._v("#")]),v._v(" 1.5. 简述 Servlet 生命周期")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://www.runoob.com/wp-content/uploads/2014/07/Servlet-LifeCycle.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("Servlet 生命周期如下：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("加载")]),v._v(" - 第一个到达服务器的 HTTP 请求被委派到 Servlet 容器。容器通过类加载器使用 Servlet 类对应的文件加载 servlet；")]),v._v(" "),t("li",[t("strong",[v._v("初始化")]),v._v(" - Servlet 通过调用 "),t("strong",[v._v("init ()")]),v._v(" 方法进行初始化。")]),v._v(" "),t("li",[t("strong",[v._v("服务")]),v._v(" - Servlet 调用 "),t("strong",[v._v("service()")]),v._v(" 方法来处理客户端的请求。")]),v._v(" "),t("li",[t("strong",[v._v("销毁")]),v._v(" - Servlet 通过调用 "),t("strong",[v._v("destroy()")]),v._v(" 方法终止（结束）。")]),v._v(" "),t("li",[t("strong",[v._v("卸载")]),v._v(" - Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。")])]),v._v(" "),t("h3",{attrs:{id:"_1-6-如何现实-servlet-的单线程模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-如何现实-servlet-的单线程模式"}},[v._v("#")]),v._v(" 1.6. 如何现实 servlet 的单线程模式")]),v._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("%")]),v._v("@ page isThreadSafe"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"false"')]),v._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("%")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])])]),t("h3",{attrs:{id:"_1-7-servlet-中如何获取用户提交的查询参数或者表单数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-servlet-中如何获取用户提交的查询参数或者表单数据"}},[v._v("#")]),v._v(" 1.7. Servlet 中如何获取用户提交的查询参数或者表单数据")]),v._v(" "),t("ul",[t("li",[v._v("HttpServletRequest 的 getParameter() 方法。")]),v._v(" "),t("li",[v._v("HttpServletRequest 的 getParameterValues() 方法。")]),v._v(" "),t("li",[v._v("HttpServletRequest 的 getParameterMap() 方法。")])]),v._v(" "),t("h3",{attrs:{id:"_1-8-request-的主要方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-request-的主要方法"}},[v._v("#")]),v._v(" 1.8. request 的主要方法")]),v._v(" "),t("ul",[t("li",[v._v("setAttribute(String name,Object)：设置名字为 name 的 request 的参数值")]),v._v(" "),t("li",[v._v("getAttribute(String name)：返回由 name 指定的属性值")]),v._v(" "),t("li",[v._v("getAttributeNames()：返回 request 对象所有属性的名字集合，结果是一个枚举的实例")]),v._v(" "),t("li",[v._v("getCookies()：返回客户端的所有 Cookie 对象，结果是一个 Cookie 数组")]),v._v(" "),t("li",[v._v("getCharacterEncoding()：返回请求中的字符编码方式")]),v._v(" "),t("li",[v._v("getContentLength()：返回请求的 Body 的长度")]),v._v(" "),t("li",[v._v("getHeader(String name)：获得 HTTP 协议定义的文件头信息")]),v._v(" "),t("li",[v._v("getHeaders(String name)：返回指定名字的 request Header 的所有值，结果是一个枚举的实例")]),v._v(" "),t("li",[v._v("getHeaderNames()：返回所以 request Header 的名字，结果是一个枚举的实例")]),v._v(" "),t("li",[v._v("getInputStream()：返回请求的输入流，用于获得请求中的数据 getMethod()：获得客户端向服务器端传送数据的方法")]),v._v(" "),t("li",[v._v("getParameter(String name)：获得客户端传送给服务器端的有 name 指定的参数值")]),v._v(" "),t("li",[v._v("getParameterNames()：获得客户端传送给服务器端的所有参数的名字，结果是一个枚举的实例")]),v._v(" "),t("li",[v._v("getParameterValues(String name)：获得有 name 指定的参数的所有值")]),v._v(" "),t("li",[v._v("getProtocol()：获取客户端向服务器端传送数据所依据的协议名称")]),v._v(" "),t("li",[v._v("getQueryString()：获得查询字符串")]),v._v(" "),t("li",[v._v("getRequestURI()：获取发出请求字符串的客户端地址")]),v._v(" "),t("li",[v._v("getRemoteAddr()：获取客户端的 IP 地址")]),v._v(" "),t("li",[v._v("getRemoteHost()：获取客户端的名字")]),v._v(" "),t("li",[v._v("getSession([Boolean create])：返回和请求相关")]),v._v(" "),t("li",[v._v("Session getServerName()：获取服务器的名字")]),v._v(" "),t("li",[v._v("getServletPath()：获取客户端所请求的脚本文件的路径")]),v._v(" "),t("li",[v._v("getServerPort()：获取服务器的端口号")]),v._v(" "),t("li",[v._v("removeAttribute(String name)：删除请求中的一个属性")])]),v._v(" "),t("h2",{attrs:{id:"_2-jsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jsp"}},[v._v("#")]),v._v(" 2. JSP")]),v._v(" "),t("h3",{attrs:{id:"_2-1-jsp-的内置对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-jsp-的内置对象"}},[v._v("#")]),v._v(" 2.1. JSP 的内置对象")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("request")]),v._v("：包含"),t("strong",[v._v("客户端请求的信息")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("response")]),v._v("：包含"),t("strong",[v._v("服务器传回客户端的响应信息")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("session")]),v._v("：主要用来"),t("strong",[v._v("区分每个用户信息和会话状态")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("pageContext")]),v._v("：管理"),t("strong",[v._v("页面属性")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("application")]),v._v("：服务器启动时创建，服务器关闭时停止，"),t("strong",[v._v("保存所有应用系统中的共有数据")]),v._v("，一个共享的内置对象（即一个容器中的多个用户共享一个 application 对象）；")]),v._v(" "),t("li",[t("strong",[v._v("out")]),v._v("：向客户端"),t("strong",[v._v("输出数据")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("config")]),v._v("：代码片段配置对象，用于"),t("strong",[v._v("初始化 Servlet 的配置参数")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("page")]),v._v("：指"),t("strong",[v._v("网页本身")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("exception")]),v._v("：处理 JSP 文件执行时发生的错误和异常，只要在"),t("strong",[v._v("错误页面")]),v._v("里才能使用。")])]),v._v(" "),t("h3",{attrs:{id:"_2-2-jsp-的作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-jsp-的作用域"}},[v._v("#")]),v._v(" 2.2. JSP 的作用域")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("page")]),v._v("：一个页面；")]),v._v(" "),t("li",[t("strong",[v._v("request")]),v._v("：一次请求；")]),v._v(" "),t("li",[t("strong",[v._v("session")]),v._v("：一次会话；")]),v._v(" "),t("li",[t("strong",[v._v("application")]),v._v("：服务器从启动到停止。")])]),v._v(" "),t("h3",{attrs:{id:"_2-3-jsp-中-7-个动作指令和作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-jsp-中-7-个动作指令和作用"}},[v._v("#")]),v._v(" 2.3. JSP 中 7 个动作指令和作用")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("jsp:forward")]),v._v(" - 执行页面转向，把请求转发到下一个页面；")]),v._v(" "),t("li",[t("strong",[v._v("jsp:param")]),v._v(" - 用于传递参数，必须与其他支持参数的标签一起使用；")]),v._v(" "),t("li",[t("strong",[v._v("jsp:include")]),v._v(" - 用于"),t("strong",[v._v("动态引入一个 JSP 页面")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("jsp:plugin")]),v._v(" - 用于"),t("strong",[v._v("下载 JavaBean 或 Applet 到客户端执行")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("jsp:useBean")]),v._v(" - 寻求或者实例化一个 JavaBean；")]),v._v(" "),t("li",[t("strong",[v._v("jsp:setProperty")]),v._v(" - 设置 JavaBean 的属性值；")]),v._v(" "),t("li",[t("strong",[v._v("jsp:getProperty")]),v._v(" - 获取 JavaBean 的属性值。")])]),v._v(" "),t("h3",{attrs:{id:"_2-4-jsp-中动态-include-和静态-include-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-jsp-中动态-include-和静态-include-有什么区别"}},[v._v("#")]),v._v(" 2.4. JSP 中动态 INCLUDE 和静态 INCLUDE 有什么区别")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("静态 INCLUDE")]),v._v("：用 include 伪码实现，"),t("strong",[v._v("不会检查所含文件的变化")]),v._v("，适用于包含"),t("strong",[v._v('静态页面<%@ include file="页面名称.html" %>')]),v._v("。"),t("strong",[v._v("先合并再编译")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("动态 INCLUDE")]),v._v("：用 jsp:include 动作实现 "),t("strong",[v._v('<jsp:include page="页面名称 .jsp" flush="true">')]),v._v(" 它总是"),t("strong",[v._v("会检查文件中的变化")]),v._v("，适用于包含"),t("strong",[v._v("动态页面")]),v._v("，并且可以"),t("strong",[v._v("带参数")]),v._v("。"),t("strong",[v._v("先编译再合并")]),v._v("。")])]),v._v(" "),t("h2",{attrs:{id:"_3-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-原理"}},[v._v("#")]),v._v(" 3. 原理")]),v._v(" "),t("h3",{attrs:{id:"_3-1-请求转发-forward-和重定向-redirect-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-请求转发-forward-和重定向-redirect-的区别"}},[v._v("#")]),v._v(" 3.1. 请求转发(forward)和重定向(redirect)的区别")]),v._v(" "),t("ul",[t("li",[v._v("效率上\n"),t("ul",[t("li",[v._v("转发（forward） > 重定向（redirect）")])])]),v._v(" "),t("li",[v._v("显示上\n"),t("ul",[t("li",[v._v("重定向（redirect）：显示新的 URL")]),v._v(" "),t("li",[v._v("转发（forward）：地址栏不变")])])]),v._v(" "),t("li",[v._v("数据上\n"),t("ul",[t("li",[v._v("转发（forward）：可以共享 request 里面的数据")]),v._v(" "),t("li",[v._v("重定向（redirect）：不能")])])]),v._v(" "),t("li",[v._v("请求次数\n"),t("ul",[t("li",[v._v("重定向（redirect）是两次")]),v._v(" "),t("li",[v._v("转发（forward）是一次")])])])]),v._v(" "),t("h3",{attrs:{id:"_3-2-get-请求和-post-请求的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-get-请求和-post-请求的区别"}},[v._v("#")]),v._v(" 3.2. get 请求和 post 请求的区别")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7779232-5be5ae990207f9d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/814/format/webp",alt:"img"}})]),v._v(" "),t("ul",[t("li",[v._v("GET：\n"),t("ul",[t("li",[v._v("从服务器上获取数据，一般不能使用在写操作接口")]),v._v(" "),t("li",[v._v("由 URL 所限制，GET 方式传输的数据大小有所限制，传送的数据量不超过 2KB")]),v._v(" "),t("li",[v._v("请求的数据会附加在 URL 之后，以？分隔 URL 和传输数据，多个参数用&连接")]),v._v(" "),t("li",[v._v("安全性差")])])]),v._v(" "),t("li",[v._v("POST:\n"),t("ul",[t("li",[v._v("向服务器提交数据,一般处理写业务")]),v._v(" "),t("li",[v._v("POST 方式传送的数据量比较大，一般被默认为没有限制")]),v._v(" "),t("li",[v._v("安全性高")]),v._v(" "),t("li",[v._v("请的求的数据内容放置在 HTML HEADER 中")])])])]),v._v(" "),t("h3",{attrs:{id:"_3-3-用户在浏览器中输入-url-之后，发什么了什么？写出请求和响应的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-用户在浏览器中输入-url-之后，发什么了什么？写出请求和响应的流程"}},[v._v("#")]),v._v(" 3.3. 用户在浏览器中输入 URL 之后，发什么了什么？写出请求和响应的流程")]),v._v(" "),t("ol",[t("li",[v._v("域名解析")]),v._v(" "),t("li",[v._v("TCP 三次握手")]),v._v(" "),t("li",[v._v("浏览器向服务器发送 http 请求")]),v._v(" "),t("li",[v._v("浏览器发送请求头信息")]),v._v(" "),t("li",[v._v("服务器处理请求")]),v._v(" "),t("li",[v._v("服务器做出应答")]),v._v(" "),t("li",[v._v("服务器发送应答头信息")]),v._v(" "),t("li",[v._v("服务器发送数据")]),v._v(" "),t("li",[v._v("TCP 连接关闭")])]),v._v(" "),t("h3",{attrs:{id:"_3-4-什么是-web-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-什么是-web-service"}},[v._v("#")]),v._v(" 3.4. 什么是 Web Service?")]),v._v(" "),t("ol",[t("li",[v._v("WebService 就是一个应用程序，它向外界暴露出一个能够通过 Web 进行调用的 API。")]),v._v(" "),t("li",[v._v("它是基于 HTTP 协议传输数据，这使得运行在不同机上的不同应用程序，无须借助附加的、专门的第三方 软件或硬件，就可以相互交换数据或集成。")])]),v._v(" "),t("h3",{attrs:{id:"_3-5-会话跟踪技术有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-会话跟踪技术有哪些"}},[v._v("#")]),v._v(" 3.5. 会话跟踪技术有哪些?")]),v._v(" "),t("p",[v._v("由于 HTTP 协议本身是无状态的，服务器为了区分不同的用户，就需要对用户会话进行跟踪，简单的说就是为用户进行登记，为用户分配唯一的 ID，下一次用户在请求中包含此 ID，服务器根据此判断到底是哪一个用户。")]),v._v(" "),t("ul",[t("li",[v._v("URL 重写：在 URL 中添加会话信息作为请求的参数，或者将唯一的会话 ID 添加到 URL 结尾，以表示一个会话。设置表单隐藏域：将和会话跟踪相关的字段添加到隐藏域中，这些信息不会在浏览器显示，但是提交表单时会提交给服务器。")]),v._v(" "),t("li",[v._v("cookie：cookie 有两种：\n"),t("ul",[t("li",[v._v("一种是基于窗口的，浏览器关闭后，cookie 就没有了；")]),v._v(" "),t("li",[v._v("另一种是将信息存储在一个临时文件中，并设置其有效路径和最大存活时间。当用户通过浏览器和服务器建立一次会话后，会话 ID 就会随相应信息储存在基于窗口的 cookie 中，那就意味着只要浏览器没有关闭，会话没有超时，下一次请求时这个会话 ID 又会提交给服务器，让服务器识别用户身份。")]),v._v(" "),t("li",[v._v("在使用 cookie 时要注意几点：\n"),t("ul",[t("li",[v._v("首先不要在 cookie 中存放敏 感信息；")]),v._v(" "),t("li",[v._v("其次 cookie 存储的数据量有限（4k），不能将过多的内容存储 cookie 中；")]),v._v(" "),t("li",[v._v("再者浏览器通常只允许一个站点最多存放 20 个 cookie。")]),v._v(" "),t("li",[v._v("当然，和用户会话相关的其他信息（除了会话 ID）也可以存在 cookie 方便进行会话 跟踪;")])])])])]),v._v(" "),t("li",[v._v("HttpSession：在所有会话跟踪技术中，HttpSession 对象是最强大也是功能最多的。当一个用户第一次访问某个网站时会自动创建 HttpSession，每个用户可以访问他自己的 HttpSession。可以通过 HttpServletRequest 对象的 getSession 方法获得 HttpSession，通过 HttpSession 的 setAttribute 方法可以将一个值放在 HttpSession 中，通过调用 HttpSession 对象的 getAttribute 方法，同时传入属性名就可以获取保存在 HttpSession 中的对象。\n"),t("ul",[t("li",[v._v("与上面三种方式不同的是，HttpSession 放在服务器的内存中，因此不要将过大的对象放在里面，即使目前的 Servlet 容器可以在内存将满时将 HttpSession 中的对象移到其他存储设备中，但是这样势必影响性能。")]),v._v(" "),t("li",[v._v("添加到 HttpSession 中 的值可以是任意 Java 对象，这个对象最好实现了 Serializable 接口，这样 Servlet 容器在必要的时候可以将其序列 化到文件中，否则在序列化时就会出现异常。")])])])]),v._v(" "),t("h3",{attrs:{id:"_3-6-响应结果状态码有哪些，并给出中文含义？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-响应结果状态码有哪些，并给出中文含义？"}},[v._v("#")]),v._v(" 3.6. 响应结果状态码有哪些，并给出中文含义？")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("1**")]),v._v("：信息性状态码")]),v._v(" "),t("li",[t("code",[v._v("2**")]),v._v("：成功状态码\n"),t("ul",[t("li",[v._v("200：请求正常成功")]),v._v(" "),t("li",[v._v("204：指示请求成功但没有返回新信息")]),v._v(" "),t("li",[v._v("206：指示服务器已完成对资源的部分 GET 请求")])])]),v._v(" "),t("li",[t("code",[v._v("3**")]),v._v("：重定向状态码\n"),t("ul",[t("li",[v._v("301：永久性重定向")]),v._v(" "),t("li",[v._v("302：临时性重定向")]),v._v(" "),t("li",[v._v("304：服务器端允许请求访问资源，但未满足条件")])])]),v._v(" "),t("li",[t("code",[v._v("4**")]),v._v("：客户端错误状态码\n"),t("ul",[t("li",[v._v("400：请求报文中存在语法错误")]),v._v(" "),t("li",[v._v("401：发送的请求需要有通过 HTTP 认证的认证信息")]),v._v(" "),t("li",[v._v("403：对请求资源的访问被服务器拒绝了")]),v._v(" "),t("li",[v._v("404：服务器上无法找到请求的资源")])])]),v._v(" "),t("li",[t("code",[v._v("5**")]),v._v("：服务器错误状态码\n"),t("ul",[t("li",[v._v("500：服务器端在执行请求时发生了错误")]),v._v(" "),t("li",[v._v("503：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求")])])])]),v._v(" "),t("h3",{attrs:{id:"_3-7-xml-文档定义有几种形式？它们之间有何本质区别？解析-xml-文档有哪几种方式？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-xml-文档定义有几种形式？它们之间有何本质区别？解析-xml-文档有哪几种方式？"}},[v._v("#")]),v._v(" 3.7. XML 文档定义有几种形式？它们之间有何本质区别？解析 XML 文档有哪几种方式？")]),v._v(" "),t("p",[v._v("（1）XML 文档有两种约束方式：")]),v._v(" "),t("ol",[t("li",[v._v("DTD 约束")]),v._v(" "),t("li",[v._v("Schema 约束")])]),v._v(" "),t("p",[v._v("（2）XML 文档区别：\n1 DTD 不符合 XML 的语法结构，schema 符合 XML 的语法结构；\n2 DTD 的约束扩展性比较差，XML 文档只能引入一个 DTD 的文件。schema 可以引入多个文件；\n3 DTD 不支持名称空间（理解包结构），schema 支持名称空间；\n4 DTD 支持数据比较少，schema 支持更多的数据类型；")]),v._v(" "),t("p",[v._v("（3）解析方式主要有三种：")]),v._v(" "),t("ul",[t("li",[v._v("DOM 解析：\n"),t("ul",[t("li",[v._v("（a）加载整个 xml 的文档到内存中，形成树状结构，生成对象；")]),v._v(" "),t("li",[v._v("（b）容易产生内存溢出；")]),v._v(" "),t("li",[v._v("（c）可以做增删改")])])]),v._v(" "),t("li",[v._v("SAX 解析\n"),t("ul",[t("li",[v._v("（a）边读边解析；")]),v._v(" "),t("li",[v._v("（b）不可以做增删改")])])]),v._v(" "),t("li",[v._v("DOM4J 解析（hibernate 底层采用)\n"),t("ul",[t("li",[v._v("（a）可让 SAX 解析也产生树状结构。")]),v._v(" "),t("li",[v._v("（b）主要 api 开发步骤：\n"),t("ul",[t("li",[v._v("1）SAXReader.read(xxx.xml)代表解析 xml 的文档，返回对象是 Document；")]),v._v(" "),t("li",[v._v("2）Document.getRootElement(),返回的是文档的根节点，是 Element 对象；")]),v._v(" "),t("li",[v._v("3）Element:\n"),t("ul",[t("li",[v._v(".element(...)-- 获得指定名称第一个子元素。可以不指定名称;")]),v._v(" "),t("li",[v._v(".elements(...)-- 获得指定名称的所有子元素。可以不指定名称;")]),v._v(" "),t("li",[v._v(".getText()-- 获得当前元素的文本内容；")]),v._v(" "),t("li",[v._v(".elementText(...)-- 获得指定名称子元素的文本值")]),v._v(" "),t("li",[v._v(".addElement()-- 添加子节点")]),v._v(" "),t("li",[v._v(".setText()-- 设置子标签内容")])])]),v._v(" "),t("li",[v._v('4）XMLWriter.write("..")-- 写出')]),v._v(" "),t("li",[v._v("5）XMLWriter.close()-- 关闭输出流")])])])])])]),v._v(" "),t("h2",{attrs:{id:"_4-参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[v._v("#")]),v._v(" 4. 参考资料")]),v._v(" "),t("ul",[t("li",[v._v("https://blog.csdn.net/YM_IlY/article/details/81266959")]),v._v(" "),t("li",[v._v("https://www.jianshu.com/p/f073dde56262")])])])}),[],!1,null,null,null);_.default=r.exports}}]);
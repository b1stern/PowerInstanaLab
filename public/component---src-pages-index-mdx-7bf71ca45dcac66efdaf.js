(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{pfKO:function(a,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return A}));var n=t("wx14"),i=t("zLVn"),s=(t("q1tI"),t("7ljp")),o=t("013z"),l=(t("qKvR"),{}),r=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}},b=r("Row"),c=r("Column"),p=r("ArticleCard"),d={_frontmatter:l},g=o.a;function A(a){var e=a.components,t=Object(i.a)(a,["components"]);return Object(s.b)(g,Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Introduction"),Object(s.b)("p",null,"This lab will allow students to learn how to intrument a hybrid application for observability using Instana.  The application consists\nof a cloud native component running in kubernetes (OpenShift) and a traditional server with IBM MQ and IBM App Connect Enterprise.",Object(s.b)("br",{parentName:"p"}),"\n","Once instrumented, students will explore the rich set of monitoring data available to monitor the traditional and cloud native infratructure,\nthe application, and the web traffic.  Students will see how Instana can help them get to root cause quickly and in an intuitive way by\nallowing the Instana UI to guide them through the diagnosis.  Students will also learn how to customize the environment and define custom Events."),Object(s.b)("p",null,"1) In the first portion of the lab, students will instrument kubernetes and IBM ACE and MQ for monitoring."),Object(s.b)("p",null,"2) Once instrumented, students will explore key aspects of the Instana user interface.   Part 1 must be completed before proceding the second\nportion of the lab."),Object(s.b)("p",null,"3) In the 3rd section of the lab, students will perform a diagnostic scenario in the hybrid application"),Object(s.b)("p",null,"4) Finally, in the 4th section students will learn how to perform administrative tasks."),Object(s.b)("p",null,"After completing the Login section, use the other links to go directly to one of the lab exercises."),Object(s.b)("p",null,"When you first login to the Soleil virtual machines, a chrome browser will be open with multiple tabs.  The first tab will be this lab guide.  We recommend that you use\nthe lab guide within the virtual machine so that you can easily copy and past text into the terminal windows."),Object(s.b)("h2",null,"Logging into the Environment"),Object(s.b)("p",null,"  Before beginning the exercises, take the following steps to login to the soleil environment and access the lab environment."),Object(s.b)("p",null,"  After opening your browser and logging into the lab, you’ll see an image of a two computers.  The first is named thinkdemo. This\nserver is the kubernetes(OpenShift) cluster where the cloud native portion of the application will run."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1012px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVQ4y4WTuW8TURCHt+PvScdfQolEhyIEEUJRJERCCqDDAgkaREFBhyKloQNBYofgI76vrOUjlrEWe72Hj117j4/3NjI02F7p29+89zQz75hRiqUypa5FbzhmMZ/jOC6u6+JIHIeZQGo0J9aW41UoifQ5xV6ZXK5IqVIlXyxRqdWpqWqkBZFQbbaitf7vAeOZgzWZrkQ5T6UZGiZ9bYBuWuiW/VdH0l6qmJNq2OO1KN9O4pEhM9siQ8R0Fqm1tKf/5jahpHIFZl7IRDhptnSaMDJGeJ5L4C2Eevi+TxAEEWEYrkX5nPxKS9fFLufC2ceehZji8gtaS1yFA2HAXCQ0p74IHIrxhoDxdJqmpVH91aM9GNKfDJmEYzq2Tu6qSbnbp6FpGL6BFy6Qn3Bl1ackinGSwXeytSzu2CWvZ8j4P+lS4MnRR27cPGDrzktO3C+Y6DLa+h2eFuJk+EGmdSGObVB28pTI0hb/12fHbN2OcevZe1IksDA2B/x0fMRh7IB7e9s8fLzD9t5dXr2L8fbDGx4dPuDp8132X+yys3+fWqMaHUs+zsojn8bPaDc7XNZUOq1rleOrdpd6VaWhNiPqlUtsUV5yF/LVfT/4L0oyc4EnIs9E20mchRfpVLbaYiHsaxxRPrIWTRHUHE9WEnWKLOplJ6xjU5dI/gD3csfmzKJPVQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"skytap",title:"skytap",src:"/InstanaMiddlewareLab/static/9590d5026f163599c041ebe240ebb0d5/83283/skytap.png",srcSet:["/InstanaMiddlewareLab/static/9590d5026f163599c041ebe240ebb0d5/7fc1e/skytap.png 288w","/InstanaMiddlewareLab/static/9590d5026f163599c041ebe240ebb0d5/a5df1/skytap.png 576w","/InstanaMiddlewareLab/static/9590d5026f163599c041ebe240ebb0d5/83283/skytap.png 1012w"],sizes:"(max-width: 1012px) 100vw, 1012px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"  If the background is green, it means the virtual machine is running.  If it is not running, click the start arrow to start the VM\n",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"41px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.56097560975611%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXklEQVQ4y62UvUrEQBDHg73gC1hoZ6OV6Ev4GL6EndVZiYIgqJ1gZ2Ntd4VwxMPkQGwsjohevkniHeRj8zcT3DUk8UziLcxmsmR++5+dyUrIRpqmCzOJpkUOiSv0fR+O48B13fzZxmzbFn4OJIjneYjjGGEYIoqiVqbruvBzoGVZ/0qTFIqUKV1aqDvghDUrBAkSReEKi8Up+izz2fc7DyqPYoaVlHmAM4vRH/tiPWY/sDJ4LpCr+QhCbJ0r2L97xbsfVjZsDTQ+I+xcjrDcG2AzA18rBsKEVWCNgXoG3L5QsXYyxOrxI5YOH3BwP+6eMgF3r0ZYORpg/XSIXv8N5jTqDpwEETbOnrB38wJlMq3tgLnA8mGTmttnW2xAVWZNqvxbY2dh4qO/Gry2sesGSzv8ejRpmiZUJknS2kgQ93MgXTuqqkKW5U5WjJW41CAIYBgGTNNsbaSQ+wu/sb8AdSMFe84gXUoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 00 11",title:"2021 04 27 20 00 11",src:"/InstanaMiddlewareLab/static/37244716675d44157bc09fe79b5f6125/11028/2021-04-27-20-00-11.png",srcSet:["/InstanaMiddlewareLab/static/37244716675d44157bc09fe79b5f6125/11028/2021-04-27-20-00-11.png 41w"],sizes:"(max-width: 41px) 100vw, 41px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"  The 2nd VM is named “MQ and ACE”.  This VM is a traditional server running IBM MQ and IBM App Connect Enterprise."),Object(s.b)("p",null,"  After the VM is running, click the picture of the ",Object(s.b)("strong",{parentName:"p"},"“thinkdemo”")," computer to launch the desktop.  Login to the virtual machine as the\nuser ",Object(s.b)("strong",{parentName:"p"},"“demo”")," and password ",Object(s.b)("strong",{parentName:"p"},"“Passw0rd”"),". "),Object(s.b)("p",null,"  For more information on using the soleil environment, scroll towards the bottom of the page."),Object(s.b)("h2",null,"Begin the Exercises"),Object(s.b)("p",null,"You are now ready to start performing the lab exercises.  You must complete the Installation section first.  After that, the sections can be done in any order.  For a new user of Instana, we recommend\nperforming the ",Object(s.b)("strong",{parentName:"p"},"Explore Instana")," section of the lab next.  If you are already familiar with Instana, you can select any other section of the lab."),Object(s.b)("p",null,"Select one of the lab exercises in the upper left corner or select one of the images below."),Object(s.b)(b,{mdxType:"Row"},Object(s.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(p,{color:"dark",subTitle:"Installing and Configuring Monitoring",title:"Install the Instana Monitoring Agent and Configure the Sensors",href:"/tutorials/Install",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVQozy2SSZPSUBhF2VsuLC11YZPkkQEykZCQARKmQBgCBTJ0tW1rWZYL//8fOD66XGSXuu/cc7/WByfGTif0xxVevsCNp4RqQtoZMRQ5USel34nxrBjLDNAtH8MJ0d0A0XMRlo3aMVFUgaKotD75Kfmy4enXX87f/zAcbRh+KZjrNVNjRWlWJEZJ2B3juSO6fo4Z5uhBiuaGtC0HxejS1jqoqkbro5eSVA2bywvr8wtZsadUVuzME5vukZV9YO43FNGWJFkT5jVWMqcTl6j9BMUJULsObWGgaILWe3dIutxTbM5MtjfG0xMLTT6gnjj0bjT+je3wSl1eKYoTwbjBKbYYeYUWjVG86JXyiyS81259lg6LzYlZ88ji8MRkcWahNuy0C3vrxjH8xtfZD06bn9TrZ5LFBXd6QB+t0NMpnUGGcPposrbW0aVDO6LcnamOz6xOL8yWVyq9oTFlYPfGKXnmXP3kUP9gKQPz+hF/fqRbbjCzGXooXfY8hNlDlZStd3bMpLmwkv7u36y+MjNravPA1j2zi2+s80emoyvZ5EIwkWH3ylklPY7RvAGadCgMC+3u8K3RJ1sfKbdnZrsr+fxApk+Ymkvm9paZt6Mc7EmGDfFojyuvQE8XiKhABAmqpFN0C1XoklCu/Eb3sJMJ1stvetfveFFJZOYk+vj1XEZeRRouGURL/GEl/51jDUuEXFi7u5N0+mtdwcPDw//AtMReyfUWWzwZ7hkBngjwjZiBk+M5Gbab4YQjegN5g370OoSQYZqkE3IMTdK1223+AbcXRbo8Ff80AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"dynamicGraph",title:"dynamicGraph",src:"/InstanaMiddlewareLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/3cbba/dynamicGraph.png",srcSet:["/InstanaMiddlewareLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/7fc1e/dynamicGraph.png 288w","/InstanaMiddlewareLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/a5df1/dynamicGraph.png 576w","/InstanaMiddlewareLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/3cbba/dynamicGraph.png 1152w","/InstanaMiddlewareLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/0b124/dynamicGraph.png 1728w","/InstanaMiddlewareLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/fa64a/dynamicGraph.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(s.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(p,{color:"dark",subTitle:"Explorer Instana",title:"Explore the Instana UI and Capabilities",href:"/tutorials/Explore",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVQoz21S227TQBD1b5WqQkKoPFZVqUCQ8tb+Sn8H8cAf8MADT21RgeZSUyeOE8eOL+u9eQ8zG8dKKo482tnZmbNnZh28PB8gzOe4C8f4PfqLh8cIo3CG8eMUt/EC39IUcS1gjYUyZmN6Y1JpFGWFfF2QryAaieDNpyvEKsNwQQT3I9yQ3f2Z4OevMb6HEb7GMcKyRGstpLYwRGxt682w0d7YLta2CI4vLmGVRaMMjGuxB1JDWXC0alIk6oJWBTj6WgNH+c45SiPFpJZzgqO3AwjatHTAqOraS2eE0QxZUfT8y2RChQJCaiTzIeUWVAdPbEllywpfn1/4ZNcRLleZn8tGoGUxWBclXdL0xEprNFJBkjHJLoJXZx/64FYlo6wqRLO596dxQqQVtSQxi+59rJEScbLo61xnwdHZxz7gFaYrrPK19/nlGMkiJdWlv7gWjW+P81dZjqYbT094ePp+r+WyqqlIeP9pGtOchD/jWWXLCYwWfRfJMkXezXgrKjg4ebd3wy5SUqCN8XFWxbPbPhxf/D8EL54R7hLz7PiX8C/+NO2V80i43Q0cPo9qXP/I8WVc4x/2ofXRNOdCIQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"InstanaTopology",title:"InstanaTopology",src:"/InstanaMiddlewareLab/static/89b2ea37affa992b5541f69f4591372a/3cbba/InstanaTopology.png",srcSet:["/InstanaMiddlewareLab/static/89b2ea37affa992b5541f69f4591372a/7fc1e/InstanaTopology.png 288w","/InstanaMiddlewareLab/static/89b2ea37affa992b5541f69f4591372a/a5df1/InstanaTopology.png 576w","/InstanaMiddlewareLab/static/89b2ea37affa992b5541f69f4591372a/3cbba/InstanaTopology.png 1152w","/InstanaMiddlewareLab/static/89b2ea37affa992b5541f69f4591372a/0b124/InstanaTopology.png 1728w","/InstanaMiddlewareLab/static/89b2ea37affa992b5541f69f4591372a/fa64a/InstanaTopology.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(s.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(p,{color:"dark",subTitle:"Diagnose a Problem",title:"Learn How Instana Can Help you Quickly Diagnose a Complex Problem",href:"/tutorials/Diagnose",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVQoz12S224TQQyG97EQ4hAk4BIuEBU0VEARVxVI8CK8ChfAA4BAqNygqqVCCW24KpRkT5PdOXhmf2zvsmqZyJlvHI9jj/9scncLZt2gaS1iTCCKvcWIEAiB+X8j3Qk+BJRVjao2Gp8XBbKbm9tIKaGxDjUnbW0L6xxM0yoHvuTV/LDTyPqHzFKMJCyrCtn1+49QFg1+nZzAe4/UQSuNXEHPXX9WFqOBu3OMLqEoSmSTjcdIdoaQGiTwCl8xrrDHX6lntyuOMxxH7vgjS7rKbkx3gMNXoA9T0O5L0NuroM9PmZ+B3l0Dfdzi8zb7L3HMJvufg15fAb1/APryAvRmAvr0kHkHoTriN5w+gf+9gp0dwC++wf34CXd8CLvYZ17AHgkfwM6Z59/hmN2cY2bC++p3HNMe78GaGtnlO1Mt13LVlrtzzDQ0JA12Q9PdcK4s6R7O/P4vNvBbZxdv39Mrxhh91JLNWp4aD0V8a5YU8UQjT0SGVpYVDMvEO69xUWVEOkSZenbh1oYmFD2dLlf4s8xHTcq5rAwiy0rM+YDlKtdY63q5iF8kI/HnEtZmjRVXl3MFLWtSggpm8ats+KJoLx98klz02idMY8K/NKvnmiz5iqwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instanaEvents",title:"instanaEvents",src:"/InstanaMiddlewareLab/static/f38820630a63c518260986dd240e034a/3cbba/instanaEvents.png",srcSet:["/InstanaMiddlewareLab/static/f38820630a63c518260986dd240e034a/7fc1e/instanaEvents.png 288w","/InstanaMiddlewareLab/static/f38820630a63c518260986dd240e034a/a5df1/instanaEvents.png 576w","/InstanaMiddlewareLab/static/f38820630a63c518260986dd240e034a/3cbba/instanaEvents.png 1152w","/InstanaMiddlewareLab/static/f38820630a63c518260986dd240e034a/0b124/instanaEvents.png 1728w","/InstanaMiddlewareLab/static/f38820630a63c518260986dd240e034a/fa64a/instanaEvents.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(s.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(p,{color:"dark",subTitle:"Administer Instana",title:"Learn How to Perform Administrative Tasks in Instana",href:"/tutorials/Console_Access",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNklEQVQoz0VR2W7aUBD1J7R9aR9of6CL1CwkIlHCYraCC4QlZjU2Zo+xHRuCQQlLU0VkkVqpqlSpUj/1dHxJyMPR3HvnzJkzd7g3n/YQjGcQEQo4jqTgCyRwGErCF0xg7ziOff8zvEcxeos93r8QJwk+kQefzOMonII/mgb3znuMYKaIyEkZoTTFbJnhIHaC3ZAAL/8VO1S47TaKZ+GLZrBFZy8vsPwONd8nIy7/KJED5yHBcEUFT3BjuNpcR/et3ECwpCApd5AgRGstyNoM2ZaJIOXWfHVT74Lz+HiEqIgVF2X4TyUG9xyTWsj3z1FzluheGqif60g1dRS0AaSLNuL1BgKiwrguXA3u7fYhdaAEPbgOJHsCdTKD2B8i1xshTXehbyNA5Gxbh7P6gVzbRFySoBjUtCKhej5GoW8yI5zns48puyNJloOr+9/QZzfIOyZKmg7Vou6ijFzHRHEwIs4UijbBac9GxbBQ0S3Io2uIYxN8TQH3euuAjZyQuygYGgp6F/WzKdSLOR7+/oN1vYJGDZShg+Z4TqN/g75coWxcQDSmEFoWudUQqXaYDvfqo5d9KvuHkuu0hquHGUY3Kzi3v7D8eQdjTs5XPahDi4QcKPYCadWmEWsIl1USqm/2wL14v7vZ6HoxDQiyCu1yCHO5wP2fO4y+L+BcjyGRe7/Y2CzgaZGBx6Uwhy8/rAWfOrgIkGioKNEfnmEwv4WoDVFsqBCqCpvimScj3zMpbyPdGiDT0fEfniObSys/YRsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"infrastructure",title:"infrastructure",src:"/InstanaMiddlewareLab/static/5174919845744cf2c13bd5e9203972b2/3cbba/infrastructure.png",srcSet:["/InstanaMiddlewareLab/static/5174919845744cf2c13bd5e9203972b2/7fc1e/infrastructure.png 288w","/InstanaMiddlewareLab/static/5174919845744cf2c13bd5e9203972b2/a5df1/infrastructure.png 576w","/InstanaMiddlewareLab/static/5174919845744cf2c13bd5e9203972b2/3cbba/infrastructure.png 1152w","/InstanaMiddlewareLab/static/5174919845744cf2c13bd5e9203972b2/0b124/infrastructure.png 1728w","/InstanaMiddlewareLab/static/5174919845744cf2c13bd5e9203972b2/fa64a/infrastructure.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(s.b)("hr",null),Object(s.b)("h2",null,"Using the soleil environment"),Object(s.b)("p",null,"  There are a couple of things that are important to know when using the soleil environment.  At the top of the screen you will see a menu bar.  You’ll notice a full screen icon as shown below. You’ll have a much better experience with the lab if you use full screen."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"450px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"7.638888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVQI1x3MQRJDMABAUXepa9S0O2Mhm8qCkqgigiIXqEWd+zdj8Xd/XjCNI1JKnHP0fYfWinG0lOWTYRgwxvh6mubFcfzOL89z5nnGWotSijiOEUKwriuBMQNpKvgsC7quKQoP+fGRZbRtd/ZuW8qq4rvvTB7KMukhTZIk3O53LmHINYrYNscfWtdVGODDasAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 24 32",title:"2021 04 27 20 24 32",src:"/InstanaMiddlewareLab/static/ab067aa7ba078c01ca30e4cabb5d3a61/532bf/2021-04-27-20-24-32.png",srcSet:["/InstanaMiddlewareLab/static/ab067aa7ba078c01ca30e4cabb5d3a61/7fc1e/2021-04-27-20-24-32.png 288w","/InstanaMiddlewareLab/static/ab067aa7ba078c01ca30e4cabb5d3a61/532bf/2021-04-27-20-24-32.png 450w"],sizes:"(max-width: 450px) 100vw, 450px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"  Another icon on the taskbar that is important is the clipboard icon"),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"450px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"7.638888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiElEQVQI1x2MOQ6DMADA+FPZy1wkGMpNCVCuHFUiIbHRkXe7UQcvluXgYwxFUbDvO9u2Mgw9xmi67oVSCimlZ2Oa3lzXxXEcNE3DOI7E8YNeCLTWtN45ZwmkVCRJinWOwUdt60c+yPKcZVn/zPOCED3n+aUsK+5RRJKm3MKQqq790PDMcqx1/ABP7VV5YEL5lwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 28 10 47 13",title:"2021 04 28 10 47 13",src:"/InstanaMiddlewareLab/static/4de010df1906b878e7d722ada9996b78/532bf/2021-04-28-10-47-13.png",srcSet:["/InstanaMiddlewareLab/static/4de010df1906b878e7d722ada9996b78/7fc1e/2021-04-28-10-47-13.png 288w","/InstanaMiddlewareLab/static/4de010df1906b878e7d722ada9996b78/532bf/2021-04-28-10-47-13.png 450w"],sizes:"(max-width: 450px) 100vw, 450px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"  The only way to paste content into the virtual machine is by using this icon."),Object(s.b)("p",null,"  To copy text into the virtual machine, perform a copy as you normally would do on your laptop/desktop.  Then, click the clipboard icon. You will notice that there is text within the clipboard user interface"),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"599px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVQoz62Sy27bMBBF9aVdZZVlV/2cbvsbRRYF0oVh2HrEelCy4toSqbcomnJ8O6QTOd1XwMVweM+IEnidIAiwC0MIIdA0Der6QzX1LWQrF/VNb/fvzE1mjnOBOI7hFMcDKl5gPk84q5uUktBUx6nHSxtYeY2L03DErM7W/2CXmYkO7Fo4v90EHjshLTqc6tHqWA+oGo1NmeBh84iv/jd82TzgO/uBrr3iT9Uv7GeJdoLz9Bzi53OEX6sE5/kKpd8WTfqCQU/otbSSWv/j37k3zJcrfYiCg//4iF7DqeUFnBain1ENdxnT1LJVKDsFMeib3vdNNf1n/iAknJhlyPavYFlulaR7mL19fqB1hn6QaLsB6Z588gwbxgwZ+en7nOlPhYCc6JejKKTrjqwYS5AmMaJwZ/uQqomEols0kTA9SxLybzOM2Jjmfc9Dnu8h5QhnvV5ju91a+cELfJbDDenF9HWMMZRlSaCEyetqtYLrulaeT1GKM2x2MRLisiyzGXU45xBVZYNdUUiLdgTv6EYnk0eFieo4jqiIsSxxnA7hokLRGXYkRi3sXwZx709bZNE5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 40 37",title:"2021 04 27 20 40 37",src:"/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png",srcSet:["/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/7fc1e/2021-04-27-20-40-37.png 288w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/a5df1/2021-04-27-20-40-37.png 576w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png 599w"],sizes:"(max-width: 599px) 100vw, 599px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"  This will make the text available within the virtual machine. Then, within the virtual machine, either type “Ctrl-V” or right-click and use your browser to paste the text into the virtual machine."),Object(s.b)("p",null,"  To copy text from the virtual machine, do the process in reverse.  Copy the text inside the virtual machine.  Then, click the clipboard icon and you will notice that the text is visible on the screen."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"599px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVQoz62Sy27bMBBF9aVdZZVlV/2cbvsbRRYF0oVh2HrEelCy4toSqbcomnJ8O6QTOd1XwMVweM+IEnidIAiwC0MIIdA0Der6QzX1LWQrF/VNb/fvzE1mjnOBOI7hFMcDKl5gPk84q5uUktBUx6nHSxtYeY2L03DErM7W/2CXmYkO7Fo4v90EHjshLTqc6tHqWA+oGo1NmeBh84iv/jd82TzgO/uBrr3iT9Uv7GeJdoLz9Bzi53OEX6sE5/kKpd8WTfqCQU/otbSSWv/j37k3zJcrfYiCg//4iF7DqeUFnBain1ENdxnT1LJVKDsFMeib3vdNNf1n/iAknJhlyPavYFlulaR7mL19fqB1hn6QaLsB6Z588gwbxgwZ+en7nOlPhYCc6JejKKTrjqwYS5AmMaJwZ/uQqomEols0kTA9SxLybzOM2Jjmfc9Dnu8h5QhnvV5ju91a+cELfJbDDenF9HWMMZRlSaCEyetqtYLrulaeT1GKM2x2MRLisiyzGXU45xBVZYNdUUiLdgTv6EYnk0eFieo4jqiIsSxxnA7hokLRGXYkRi3sXwZx709bZNE5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 40 37",title:"2021 04 27 20 40 37",src:"/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png",srcSet:["/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/7fc1e/2021-04-27-20-40-37.png 288w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/a5df1/2021-04-27-20-40-37.png 576w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png 599w"],sizes:"(max-width: 599px) 100vw, 599px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"  Whatever text you see on the VM clipboard, you’ll be able to past within your laptop/desktop."),Object(s.b)("p",null,"  Note:  The clipboard is a little bit unreliable.  You may need to attempt to copy/paste a couple of timess.  Also, try to avoid clicking in multiple places on the screen. Copy the content (Ctrl-C), click on the clipboard, then immediately paste to either your laptop or into the virtual machine."))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-7bf71ca45dcac66efdaf.js.map
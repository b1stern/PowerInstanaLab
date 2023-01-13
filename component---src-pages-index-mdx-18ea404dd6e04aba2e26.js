(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{pfKO:function(a,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return r})),e.d(t,"default",(function(){return m}));var n=e("wx14"),o=e("zLVn"),i=(e("q1tI"),e("7ljp")),s=e("013z"),r=(e("qKvR"),{}),b=function(a){return function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=b("Row"),l=b("Column"),p=b("ArticleCard"),g={_frontmatter:r},d=s.a;function m(a){var t=a.components,e=Object(o.a)(a,["components"]);return Object(i.b)(d,Object(n.a)({},g,e,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"This lab is intended to educate on how to use Instana to monitor a Power Systems environment.   The lab will focus on a few key areas including the installation and configuration of Agents, learning administrative capabilities, and how to diagnose problems with Instan.  Key sections of the lab include: "),Object(i.b)("p",null,"1) In the first portion of the lab, students will instrument kubernetes and an AIX LPAR"),Object(i.b)("p",null,"2) Next, students will explore the monitoring capabilities of Instana in relation to Power Systems"),Object(i.b)("p",null,"3) In the 3rd section of the lab, students will perform a diagnostic scenario in the hybrid application"),Object(i.b)("p",null,"4) Finally, in the 4th section students will learn how to perform administrative tasks."),Object(i.b)("p",null,"After completing the Login section, use the other links to go directly to one of the lab exercises."),Object(i.b)("h2",null,"Key Credentials and Configuration information"),Object(i.b)("p",null,"When performing the lab, there are a few key pieces of information that you’ll need to perform the lab.  For example, the username and password to log into the Instana user interface.  Those credentials and other configuration information is stored in a Box Note named ",Object(i.b)("strong",{parentName:"p"},"Instana Lab Information.boxnote"),".  "),Object(i.b)("p",null,"You can navigate to this boxnote by going into the top level box folder.  Then, select the ",Object(i.b)("strong",{parentName:"p"},"Instana & Turbonomic Docs")," folder.  Within that folder, you will find the boxnote."),Object(i.b)("h2",null,"Logging into the Environment"),Object(i.b)("p",null,"  For the lab, you will be using the following Instana environment.  Open your browser and login to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://instana-labs.instana.io/"}),"https://instana-labs.instana.io/")),Object(i.b)("p",null,"  Students will be logging in with user account ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:apmdemo-2@yahoo.com."}),"apmdemo-2@yahoo.com."),"   The password is provided in the boxnote listed in the previous section."),Object(i.b)("p",null,"  As part of the lab, you will be using the AIX LPAR and OpenShift Cluster where you previously setup the Wordpress application and MariaDB.  "),Object(i.b)("p",null,"  After successfully logging into the Instana environment, you should see the main landing page that includes a list of Websites & Mobile Applications, Applications, Platforms, Infrastructure, and Events."),Object(i.b)("p",null," ",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPElEQVQoz4WRS0vDUBCF888ENy7sVhBUfFBc+Gu71rVW27TJzX2/cpyZJFCkYGCYy2TmzHfubVbPb7CbDUrbgr9xHP8NnJxLKfA+YNAGvRrQrB5fod8/YHZ7KGPhQ0CmppzPR8oZNiXElJHmCDHh0PVojz2aq4c19lrj83uHrlfSwJtrrRILSa1TrVDunRdBS5npFNFt9we4EImQBHlriFGGSqkTTZnCRRoMiXqK2OP/iYi4h0U5W7ZsHDzVm+u7F2iyaq2jhkQEVYaW8EzCAssCWu5LkQV5zoHmWEwIL2+f0CmFr+2P4J/aXSwzuY0FhkmIuCWLjgSUtmKbSVlMCC9u7ukQoQYt1s89RGRbZJudmJAJwJB4QjcYecTwV3CwFodjJ8Nyh7PdJbMgN3saYpsswnVD1+R8EMuL4C+h6mJ6hSuxIgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"landingPage",title:"landingPage",src:"/PowerInstanaLab/static/413da70c78967cc138c3fefcf8f79631/3cbba/landingPage.png",srcSet:["/PowerInstanaLab/static/413da70c78967cc138c3fefcf8f79631/7fc1e/landingPage.png 288w","/PowerInstanaLab/static/413da70c78967cc138c3fefcf8f79631/a5df1/landingPage.png 576w","/PowerInstanaLab/static/413da70c78967cc138c3fefcf8f79631/3cbba/landingPage.png 1152w","/PowerInstanaLab/static/413da70c78967cc138c3fefcf8f79631/0b124/landingPage.png 1728w","/PowerInstanaLab/static/413da70c78967cc138c3fefcf8f79631/cc56e/landingPage.png 1891w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(i.b)("h2",null,"Begin the Exercises"),Object(i.b)("p",null,"You are now ready to start performing the lab exercises.  You must complete the ",Object(i.b)("strong",{parentName:"p"},"Installation")," section first.  After that, the sections can be done in any order.  For a new user of Instana, we recommend performing the ",Object(i.b)("strong",{parentName:"p"},"Explore Instana")," section of the lab next. "),Object(i.b)("p",null,"Select ",Object(i.b)("strong",{parentName:"p"},"“Installation”")," in the upper left corner or select the ",Object(i.b)("strong",{parentName:"p"},"“Installing and Configuring Monitoring”")," tile below."),Object(i.b)(c,{mdxType:"Row"},Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{color:"dark",subTitle:"Installing and Configuring Monitoring",title:"Install the Instana Monitoring Agent and Configure the Sensors",href:"/tutorials/Install",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVQozy2SSZPSUBhF2VsuLC11YZPkkQEykZCQARKmQBgCBTJ0tW1rWZYL//8fOD66XGSXuu/cc7/WByfGTif0xxVevsCNp4RqQtoZMRQ5USel34nxrBjLDNAtH8MJ0d0A0XMRlo3aMVFUgaKotD75Kfmy4enXX87f/zAcbRh+KZjrNVNjRWlWJEZJ2B3juSO6fo4Z5uhBiuaGtC0HxejS1jqoqkbro5eSVA2bywvr8wtZsadUVuzME5vukZV9YO43FNGWJFkT5jVWMqcTl6j9BMUJULsObWGgaILWe3dIutxTbM5MtjfG0xMLTT6gnjj0bjT+je3wSl1eKYoTwbjBKbYYeYUWjVG86JXyiyS81259lg6LzYlZ88ji8MRkcWahNuy0C3vrxjH8xtfZD06bn9TrZ5LFBXd6QB+t0NMpnUGGcPposrbW0aVDO6LcnamOz6xOL8yWVyq9oTFlYPfGKXnmXP3kUP9gKQPz+hF/fqRbbjCzGXooXfY8hNlDlZStd3bMpLmwkv7u36y+MjNravPA1j2zi2+s80emoyvZ5EIwkWH3ylklPY7RvAGadCgMC+3u8K3RJ1sfKbdnZrsr+fxApk+Ymkvm9paZt6Mc7EmGDfFojyuvQE8XiKhABAmqpFN0C1XoklCu/Eb3sJMJ1stvetfveFFJZOYk+vj1XEZeRRouGURL/GEl/51jDUuEXFi7u5N0+mtdwcPDw//AtMReyfUWWzwZ7hkBngjwjZiBk+M5Gbab4YQjegN5g370OoSQYZqkE3IMTdK1223+AbcXRbo8Ff80AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"dynamicGraph",title:"dynamicGraph",src:"/PowerInstanaLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/3cbba/dynamicGraph.png",srcSet:["/PowerInstanaLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/7fc1e/dynamicGraph.png 288w","/PowerInstanaLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/a5df1/dynamicGraph.png 576w","/PowerInstanaLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/3cbba/dynamicGraph.png 1152w","/PowerInstanaLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/0b124/dynamicGraph.png 1728w","/PowerInstanaLab/static/e8e6fb3c214f834fbca9a92bb0a2e21b/fa64a/dynamicGraph.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{color:"dark",subTitle:"Explorer Instana",title:"Explore the Instana UI and Capabilities",href:"/tutorials/Explore",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVQoz21S227TQBD1b5WqQkKoPFZVqUCQ8tb+Sn8H8cAf8MADT21RgeZSUyeOE8eOL+u9eQ8zG8dKKo482tnZmbNnZh28PB8gzOe4C8f4PfqLh8cIo3CG8eMUt/EC39IUcS1gjYUyZmN6Y1JpFGWFfF2QryAaieDNpyvEKsNwQQT3I9yQ3f2Z4OevMb6HEb7GMcKyRGstpLYwRGxt682w0d7YLta2CI4vLmGVRaMMjGuxB1JDWXC0alIk6oJWBTj6WgNH+c45SiPFpJZzgqO3AwjatHTAqOraS2eE0QxZUfT8y2RChQJCaiTzIeUWVAdPbEllywpfn1/4ZNcRLleZn8tGoGUxWBclXdL0xEprNFJBkjHJLoJXZx/64FYlo6wqRLO596dxQqQVtSQxi+59rJEScbLo61xnwdHZxz7gFaYrrPK19/nlGMkiJdWlv7gWjW+P81dZjqYbT094ePp+r+WyqqlIeP9pGtOchD/jWWXLCYwWfRfJMkXezXgrKjg4ebd3wy5SUqCN8XFWxbPbPhxf/D8EL54R7hLz7PiX8C/+NO2V80i43Q0cPo9qXP/I8WVc4x/2ofXRNOdCIQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"InstanaTopology",title:"InstanaTopology",src:"/PowerInstanaLab/static/89b2ea37affa992b5541f69f4591372a/3cbba/InstanaTopology.png",srcSet:["/PowerInstanaLab/static/89b2ea37affa992b5541f69f4591372a/7fc1e/InstanaTopology.png 288w","/PowerInstanaLab/static/89b2ea37affa992b5541f69f4591372a/a5df1/InstanaTopology.png 576w","/PowerInstanaLab/static/89b2ea37affa992b5541f69f4591372a/3cbba/InstanaTopology.png 1152w","/PowerInstanaLab/static/89b2ea37affa992b5541f69f4591372a/0b124/InstanaTopology.png 1728w","/PowerInstanaLab/static/89b2ea37affa992b5541f69f4591372a/fa64a/InstanaTopology.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{color:"dark",subTitle:"Diagnose a Problem",title:"Learn How Instana Can Help you Quickly Diagnose a Complex Problem",href:"/tutorials/Diagnose",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVQoz12S224TQQyG97EQ4hAk4BIuEBU0VEARVxVI8CK8ChfAA4BAqNygqqVCCW24KpRkT5PdOXhmf2zvsmqZyJlvHI9jj/9scncLZt2gaS1iTCCKvcWIEAiB+X8j3Qk+BJRVjao2Gp8XBbKbm9tIKaGxDjUnbW0L6xxM0yoHvuTV/LDTyPqHzFKMJCyrCtn1+49QFg1+nZzAe4/UQSuNXEHPXX9WFqOBu3OMLqEoSmSTjcdIdoaQGiTwCl8xrrDHX6lntyuOMxxH7vgjS7rKbkx3gMNXoA9T0O5L0NuroM9PmZ+B3l0Dfdzi8zb7L3HMJvufg15fAb1/APryAvRmAvr0kHkHoTriN5w+gf+9gp0dwC++wf34CXd8CLvYZ17AHgkfwM6Z59/hmN2cY2bC++p3HNMe78GaGtnlO1Mt13LVlrtzzDQ0JA12Q9PdcK4s6R7O/P4vNvBbZxdv39Mrxhh91JLNWp4aD0V8a5YU8UQjT0SGVpYVDMvEO69xUWVEOkSZenbh1oYmFD2dLlf4s8xHTcq5rAwiy0rM+YDlKtdY63q5iF8kI/HnEtZmjRVXl3MFLWtSggpm8ats+KJoLx98klz02idMY8K/NKvnmiz5iqwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instanaEvents",title:"instanaEvents",src:"/PowerInstanaLab/static/f38820630a63c518260986dd240e034a/3cbba/instanaEvents.png",srcSet:["/PowerInstanaLab/static/f38820630a63c518260986dd240e034a/7fc1e/instanaEvents.png 288w","/PowerInstanaLab/static/f38820630a63c518260986dd240e034a/a5df1/instanaEvents.png 576w","/PowerInstanaLab/static/f38820630a63c518260986dd240e034a/3cbba/instanaEvents.png 1152w","/PowerInstanaLab/static/f38820630a63c518260986dd240e034a/0b124/instanaEvents.png 1728w","/PowerInstanaLab/static/f38820630a63c518260986dd240e034a/fa64a/instanaEvents.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{color:"dark",subTitle:"Administer Instana",title:"Learn How to Perform Administrative Tasks in Instana",href:"/tutorials/Administration",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNklEQVQoz0VR2W7aUBD1J7R9aR9of6CL1CwkIlHCYraCC4QlZjU2Zo+xHRuCQQlLU0VkkVqpqlSpUj/1dHxJyMPR3HvnzJkzd7g3n/YQjGcQEQo4jqTgCyRwGErCF0xg7ziOff8zvEcxeos93r8QJwk+kQefzOMonII/mgb3znuMYKaIyEkZoTTFbJnhIHaC3ZAAL/8VO1S47TaKZ+GLZrBFZy8vsPwONd8nIy7/KJED5yHBcEUFT3BjuNpcR/et3ECwpCApd5AgRGstyNoM2ZaJIOXWfHVT74Lz+HiEqIgVF2X4TyUG9xyTWsj3z1FzluheGqif60g1dRS0AaSLNuL1BgKiwrguXA3u7fYhdaAEPbgOJHsCdTKD2B8i1xshTXehbyNA5Gxbh7P6gVzbRFySoBjUtCKhej5GoW8yI5zns48puyNJloOr+9/QZzfIOyZKmg7Vou6ijFzHRHEwIs4UijbBac9GxbBQ0S3Io2uIYxN8TQH3euuAjZyQuygYGgp6F/WzKdSLOR7+/oN1vYJGDZShg+Z4TqN/g75coWxcQDSmEFoWudUQqXaYDvfqo5d9KvuHkuu0hquHGUY3Kzi3v7D8eQdjTs5XPahDi4QcKPYCadWmEWsIl1USqm/2wL14v7vZ6HoxDQiyCu1yCHO5wP2fO4y+L+BcjyGRe7/Y2CzgaZGBx6Uwhy8/rAWfOrgIkGioKNEfnmEwv4WoDVFsqBCqCpvimScj3zMpbyPdGiDT0fEfniObSys/YRsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"infrastructure",title:"infrastructure",src:"/PowerInstanaLab/static/5174919845744cf2c13bd5e9203972b2/3cbba/infrastructure.png",srcSet:["/PowerInstanaLab/static/5174919845744cf2c13bd5e9203972b2/7fc1e/infrastructure.png 288w","/PowerInstanaLab/static/5174919845744cf2c13bd5e9203972b2/a5df1/infrastructure.png 576w","/PowerInstanaLab/static/5174919845744cf2c13bd5e9203972b2/3cbba/infrastructure.png 1152w","/PowerInstanaLab/static/5174919845744cf2c13bd5e9203972b2/0b124/infrastructure.png 1728w","/PowerInstanaLab/static/5174919845744cf2c13bd5e9203972b2/fa64a/infrastructure.png 1907w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-18ea404dd6e04aba2e26.js.map
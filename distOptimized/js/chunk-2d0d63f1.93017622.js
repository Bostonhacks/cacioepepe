(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"pt-70px darkBlue"},[e("div",{staticClass:"darkBlue text--white white--text py-10"},[e("SponsorDashboard"),e("VolunteerDashboard"),e("MentorDashboard")],1)])},r=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-container",[e("v-layout",{attrs:{"text-center":"",wrap:""}},[e("v-flex",{attrs:{xs12:""}}),e("v-flex",{attrs:{"mb-4":""}},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to the Sponsor Dashboard ")]),e("v-card",{attrs:{flat:"",tile:""}},[e("v-card-text",[e("HackerTable",{attrs:{data:t.data}})],1)],1),e("v-card",[e("v-row",[e("v-col",{staticClass:"col-3"},[this.hackathonsChartData.datasets[0].data?e("PieChart",{attrs:{chartData:t.hackathonsChartData,options:t.hackathonsChartData.options,id:"hackathonChart"}}):t._e()],1),e("v-col",{staticClass:"col-3"},[this.genderChartData.datasets[0].data?e("PieChart",{attrs:{chartData:t.genderChartData,options:t.genderChartData.options,id:"genderChart"}}):t._e()],1),e("v-col",{staticClass:"col-3"},[this.majorChartData.datasets[0].data?e("PieChart",{attrs:{chartData:t.majorChartData,options:t.majorChartData.options,id:"majorChart"}}):t._e()],1),e("v-col",{staticClass:"col-3"},[this.educationChartData.datasets[0].data?e("PieChart",{attrs:{chartData:t.educationChartData,options:t.educationChartData.options,id:"educationChart"}}):t._e()],1)],1)],1)],1)],1)],1)],1)},o=[],l=(e("4de4"),e("caad"),e("c975"),e("d81d"),e("2532"),e("96cf"),e("c964")),i=e("2ca5"),c=e("337f"),d=e("032d"),u={name:"SponsorDashboard",components:{HackerTable:i["a"],PieChart:c["a"]},data:function(){return{data:null,hackathonsChartData:{options:{title:{display:!0,text:"Hackathons Attended"}},labels:["0","1","2","3+"],datasets:[{label:"2020",backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1"],data:null}]},genderChartData:{options:{title:{display:!0,text:"Genders"}},labels:["Male","Female","Other"],datasets:[{label:"2020",backgroundColor:["#F7464A","#46BFBD","#FDB45C"],data:null}]},majorChartData:{options:{title:{display:!0,text:"Majors"}},labels:["Computer Science","Electrical Engineering","Computer Engineering","Others"],datasets:[{label:"2020",backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1"],data:null}]},educationChartData:{options:{title:{display:!0,text:"Education Levels"}},labels:["High School","Undergraduate","Graduate"],datasets:[{label:"2020",backgroundColor:["#F7464A","#46BFBD","#FDB45C"],data:null}]}}},methods:{getData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var e,n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=["Accepted","Confirmed","Checked In"],n=["Started","Submitted","Rejected","Waitlisted","Accepted","Confirmed","Declined","Checked In"],a.next=4,d["c"].httpsCallable("retrieveAllApplications")({});case 4:r=a.sent,s=r.data,t.data=s.filter((function(t){return e.includes(n[t.status])}));case 7:case"end":return a.stop()}}),a)})))()},getGender:function(){var t=["Male","Female","Other"],a=[0,0,0],e=0;this.data.map((function(n){e=t.indexOf(n.gender),a[e]++})),this.genderChartData.datasets[0].data=a},getMajor:function(){var t=["Computer Science","Electrical Engineering","Computer Engineering"],a=[0,0,0,0],e=0;this.data.map((function(n){e=t.indexOf(n.major),-1==e&&(e=3),a[e]++})),this.majorChartData.datasets[0].data=a},getEducation:function(){var t=["High School","College Freshman","College Sophomore","College Junior","College Senior"],a=[0,0,0],e=0;this.data.map((function(n){e=t.indexOf(n.educationLevel),-1==e?e=2:0!=e&&(e=1),a[e]++})),this.educationChartData.datasets[0].data=a},getHackathons:function(){var t=["0","1","2","3+"],a=[0,0,0,0],e=0;this.data.map((function(n){e=t.indexOf(n.beenToHackathon),a[e]++})),this.hackathonsChartData.datasets[0].data=a}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getData();case 2:t.getGender(),t.getMajor(),t.getEducation(),t.getHackathons();case 6:case"end":return a.stop()}}),a)})))()}},h=u,C=e("2877"),p=e("6544"),m=e.n(p),v=e("b0af"),f=e("99d9"),b=e("62ad"),g=e("a523"),D=e("0e8f"),x=e("a722"),k=e("0fd9"),w=Object(C["a"])(h,s,o,!1,null,null,null),_=w.exports;m()(w,{VCard:v["a"],VCardText:f["b"],VCol:b["a"],VContainer:g["a"],VFlex:D["a"],VLayout:x["a"],VRow:k["a"]});var V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-container",[e("v-layout",{attrs:{"text-center":"",wrap:""}},[e("v-flex",{attrs:{xs12:""}}),e("v-flex",{attrs:{"mb-4":""}},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to the Volunteer Dashboard ")]),e("v-card",{attrs:{flat:"",tile:""}},[e("SlackComponent",{attrs:{channels:t.channels}})],1)],1)],1)],1)],1)},j=[],y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[t.links?e("v-card",[t.userExists?e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" Check out our channels ")]),t._l(t.links,(function(a){return e("v-list-item-subtitle",{key:a.id},[e("a",{attrs:{href:a[0],target:"_blank"}},[t._v(" View the "+t._s(a[1])+" channel")])])}))],2):e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" You didn't join our slack yet! ")]),e("v-list-item-subtitle",[e("a",{attrs:{href:t.links[0],target:"_blank"}},[t._v(" Join Our Slack! ")])])],1)],1):t._e()],1)},F=[],S={name:"SlackComponent",props:["channels"],data:function(){return{userExists:null,links:null}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d["c"].httpsCallable("checkSlackUser")({});case 2:return e=a.sent,t.userExists=e.data,a.next=6,d["c"].httpsCallable("populateSlackComponent")({userAdded:t.userExists,channels:t.channels});case 6:n=a.sent,t.links=n.data;case 8:case"end":return a.stop()}}),a)})))()}},E=S,B=e("5d23"),O=Object(C["a"])(E,y,F,!1,null,null,null),A=O.exports;m()(O,{VCard:v["a"],VContainer:g["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"]});var M={name:"VolunteerDashboard",components:{SlackComponent:A},data:function(){return{channels:["general","volunteer"]}}},H=M,L=Object(C["a"])(H,V,j,!1,null,null,null),R=L.exports;m()(L,{VCard:v["a"],VContainer:g["a"],VFlex:D["a"],VLayout:x["a"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-container",[e("v-layout",{attrs:{"text-center":"",wrap:""}},[e("v-flex",{attrs:{xs12:""}}),e("v-flex",{attrs:{"mb-4":""}},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to the Mentor Dashboard ")]),e("v-card",{attrs:{flat:"",tile:""}})],1)],1)],1)],1)},I=[],P={name:"MentorDashboard"},T=P,G=Object(C["a"])(T,$,I,!1,null,null,null),J=G.exports;m()(G,{VCard:v["a"],VContainer:g["a"],VFlex:D["a"],VLayout:x["a"]});var W={name:"Dashboard",components:{SponsorDashboard:_,VolunteerDashboard:R,MentorDashboard:J},computed:{user:function(){return this.$store.state.user}}},U=W,Y=Object(C["a"])(U,n,r,!1,null,null,null);a["default"]=Y.exports}}]);
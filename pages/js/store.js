var store = Framework7.createStore({
  state: {
    loading: false,
    users: [],
    name: "MAKERJOE1",
    pomo: (name1) => {console.log('store state function!!!',name1)},
    index: 0,
    vitems:[],
    vitemsFAKE:[
      {
      "_id":"1",
      "address":"Martires Palotinos 4041 depto 22222",
      "fechaini":[2018,3,1],
      "finiano":"2018",
      "finimes":"3",
      "finidia":"1",
      "duracion":2,
      "tasa":21,
      "first_name":"Miguel",
      "last_name":"Angel",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      "montosx":"9999",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"2",
      "address":"Martires Palotinos 4041 depto 3",
      "fechaini":[2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Yesica",
      "last_name":"Giordano",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      "montosx":"9999",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"3",
      "address":"Martires Palotinos 4043 Planta Alta",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Manuel",
      "last_name":"Gomez",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"4",
      "address":"Martires Palotinos 4047 taller",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Homero",
      "last_name":"Simson",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"5",
      "address":"Martires Palotinos 4053 depto 2",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Stefania",
      "last_name":"borson",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"6",
      "address":"Martires Palotinos 4053 depto 3",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"nicolas",
      "last_name":"litchen",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24      
      }
      ],

    alqsdata :[
      {
      "_id":"1",
      "address":"Martires Palotinos 4041 depto 22222",
      "fechaini":[2018,3,1],
      "finiano":"2018",
      "finimes":"3",
      "finidia":"1",
      "duracion":2,
      "tasa":21,
      "first_name":"Miguel",
      "last_name":"Angel",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      "montosx":"9999",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"2",
      "address":"Martires Palotinos 4041 depto 3",
      "fechaini":[2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Yesica",
      "last_name":"Giordano",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      "montosx":"9999",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"3",
      "address":"Martires Palotinos 4043 Planta Alta",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Manuel",
      "last_name":"Gomez",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"4",
      "address":"Martires Palotinos 4047 taller",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Homero",
      "last_name":"Simson",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"5",
      "address":"Martires Palotinos 4053 depto 2",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"Stefania",
      "last_name":"borson",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24
      
      },
      {
      "_id":"6",
      "address":"Martires Palotinos 4053 depto 3",
      "fechaini": [2018,12,1],
      "finiano":"2018",
      "finimes":"12",
      "finidia":"1",
      "first_name":"nicolas",
      "last_name":"litchen",
      "email":"cstimson0@seesaa.net",
      "gender":"Female",
      "ip_address":"129.251.46.64",
      
      "alq0":0,"alq1":0,"alq2":0,"alq3":0,"alq4":0,"alq5":0,"alq6":0,"alq7":0,"alq8":0,"alq9":0,"alq10":0,"alq11":12,"alq12":0,"alq13":0,"alq14":0,"alq15":0,"alq16":0,"alq17":0,"alq18":0,"alq19":0,"alq20":0,"alq21":0,"alq22":0,"alq23":24,
      "abl0":0,"abl1":0,"abl2":0,"abl3":0,"abl4":0,"abl5":0,"abl6":0,"abl7":0,"abl8":0,"abl9":0,"abl10":0,"abl11":12,"abl12":0,"abl13":0,"abl14":0,"abl15":0,"abl16":0,"abl17":0,"abl18":0,"abl19":0,"abl20":0,"abl21":0,"abl22":0,"abl23":24,
      "ays0":0,"ays1":0,"ays2":0,"ays3":0,"ays4":0,"ays5":0,"ays6":0,"ays7":0,"ays8":0,"ays9":0,"ays10":0,"ays11":12,"ays12":0,"ays13":0,"ays14":0,"ays15":0,"ays16":0,"ays17":0,"ays18":0,"ays19":0,"ays20":0,"ays21":0,"ays22":0,"ays23":24,
      "hon0":0,"hon1":0,"hon2":0,"hon3":0,"hon4":0,"hon5":0,"hon6":0,"hon7":0,"hon8":0,"hon9":0,"hon10":0,"hon11":12,"hon12":0,"hon13":0,"hon14":0,"hon15":0,"hon16":0,"hon17":0,"hon18":0,"hon19":0,"hon20":0,"hon21":0,"hon22":0,"hon23":24,
      "imb0":0,"imb1":0,"imb2":0,"imb3":0,"imb4":0,"imb5":0,"imb6":0,"imb7":0,"imb8":0,"imb9":0,"imb10":0,"imb11":12,"imb12":0,"imb13":0,"imb14":0,"imb15":0,"imb16":0,"imb17":0,"imb18":0,"imb19":0,"imb20":0,"imb21":0,"imb22":0,"imb23":24,
      "fix0":0,"fix1":0,"fix2":0,"fix3":0,"fix4":0,"fix5":0,"fix6":0,"fix7":0,"fix8":0,"fix9":0,"fix10":0,"fix11":12,"fix12":0,"fix13":0,"fix14":0,"fix15":0,"fix16":0,"fix17":0,"fix18":0,"fix19":0,"fix20":0,"fix21":0,"fix22":0,"fix23":24      
      }
      ],
    },

  actions: {

    openAlertx({state},$f7) {
      $f7.dialog.alert('Hello world!');
    },

    getUsers({ state },x) {
      state.loading = true;
      setTimeout(() => {
        state.users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
        state.loading = false;
        console.log('this is a parameter outside de state',x);
      }, 30);
    },

    changeUsers({ state }) {
      state.loading = true;
      setTimeout(() => {
        state.users = ['User 11', 'User 22', 'User 33', 'User 44', 'User 55'];
        state.loading = false;
        state.name = "SOFTHRYD";
      }, 30);
    },
  },

  getters: {
    loading({ state }) {
      return state.loading;
    },
    users({ state }) {
      return state.users;
    },
    getfunc({ state }) {
      a=1
      result=a*2
      return result;
    },
    name({ state }) {
      return state.name;
    },
  },
});
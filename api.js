let btn1 = document.querySelectorAll(".card-1 button");
let btn2 = document.querySelectorAll(".card-2 button");
let base = "RUB";
let symbols = "USD";
let value;
let p1 = document.querySelector(".card-1 p");
let p2 = document.querySelector(".card-2 p");
let input1 = document.querySelector(".card-1 input");
let input2 = document.querySelector(".card-2 input")


btn1.forEach(function (e) {
  e.onclick = async function () {
    base = e.innerText;
    console.log(e)
  await edit()
    clickBtn()

    btn1.forEach(function (i) {
      i.classList.remove("active")
    })
    e.classList.add("active");
  }
})

btn2.forEach(function (e) {
  e.onclick = async function () {
    symbols = e.innerText;
    await edit()
    clickBtn()
    btn2.forEach(function (i) {
      i.classList.remove("active")
    })
    e.classList.add("active");
  }
})

async function edit() {
  let ft = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`);
    let m = await ft.json();
    value = m.rates[`${symbols}`]
    console.log(m.base, Object.keys(m.rates), Object.values(m.rates))
    p1.innerText = `1 ${base} = ${value.toFixed(4)} ${symbols}`;
    p2.innerText = `1 ${base} = ${(1/value).toFixed(4)} ${symbols}`
}

edit();
input1.oninput = (item) => {

  input2.value = (value * input1.value).toFixed(3);
}


function clickBtn(){

    input2.value = (value * input1.value).toFixed(3);


}
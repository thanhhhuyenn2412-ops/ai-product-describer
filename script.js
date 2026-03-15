async function generateDescription(){

const name=document.getElementById("productName").value;
const features=document.getElementById("features").value;
const benefits=document.getElementById("benefits").value;
const keywords=document.getElementById("keywords").value;

if(!name){
alert("Vui lòng nhập tên sản phẩm");
return;
}

const prompt = `
Viết mô tả sản phẩm ecommerce hấp dẫn.

Tên sản phẩm: ${name}
Tính năng: ${features}
Lợi ích: ${benefits}
Từ khóa SEO: ${keywords}

Bao gồm:
- đoạn mô tả marketing
- danh sách tính năng
- tích hợp SEO keywords
`;

try{

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAAJiluH3e2MOyhdEHKH45YBMPL8966zpQ",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[{text:prompt}]
}
]
})
}
);

const data=await response.json();

console.log(data);

const text=data.candidates[0].content.parts[0].text;

document.getElementById("result").innerText=text;

}catch(error){

document.getElementById("result").innerText="Lỗi gọi AI API";

}

}

function copyText(){

const text=document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Đã copy nội dung!");

}

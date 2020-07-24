function roll()
{

    //document.getElementById("rollInput").innerHTML = x;
    let shijian, rollNum, rollRange, rollOut, i, r,
        rollSum = 0, textcontent, prompt, rollText;
    textcontent = document.getElementById("rollText").value;
    //textcontent = document.getElementById('rollInput').innerHTML;
    /*document.write(textcontent + '<br>');*/
    rollText = / r[0-9]*[d[0-9]*]?/.exec(textcontent);
    shijian = textcontent.replace(rollText, '') ;
    rollText = rollText[0].split(/[rd]/);
    /*document.write(rollText + '<br>');*/
    if(rollText[1] === ''){rollNum = 1}
    else{rollNum = Number(rollText[1])}
    /*document.write(rollNum + '<br>')*/
    if(rollText.length<3){rollRange = 100}
    else{rollRange = Number(rollText[2])}
    if(rollNum===1){
        r = Math.floor(Math.random() * rollRange) + 1;
        prompt = '「' + shijian + '」的结果：' + rollNum + ' d ' +
            rollRange + ' = ' + '「' + r.slice(0,-1) + '」';
    }else {

        for (i = 0, rollOut = ''; i < rollNum; i++) {
            r = Math.floor(Math.random() * rollRange) + 1;
            /*document.write(r+'<br>')*/
            rollOut += r + '+';
            rollSum += r.valueOf()
        }
        prompt = '「' + shijian + '」的结果：' + rollNum + ' d ' +
            rollRange + ' = ' + '「' + rollOut.slice(0, -1) + '」' +
            '=「' + rollSum +   '」';
    }
    /*document.getElementById('rollConsult').innerHTML = prompt;*/
    //return prompt
    const p = document.createElement('p');
    document.body.appendChild(p);
    p.innerHTML = prompt;
    reply_hd(prompt)
}

//function rollDian(pro){
//var tag=document.createElement('li');
//document.getElementById('li').innerHTML = prompt
//}
function reply_hd(content) {
    const Http = new XMLHttpRequest();
    const url = 'https://www.cpszd.com/api/create/reply/626830';
    const id = '033C7619BD5EKXKXI7G3JAO1C1F7EB75DCEBD8418484DF3AF057CD39e991af15945259367';
    const data = new FormData();
    data.append('username', 'Roll点系统');
    data.append('content', content);
    Http.open('POST', url);
    Http.setRequestHeader('userid', id);
    Http.setRequestHeader('api-user-tool', 'roll');
    Http.send(data);
}
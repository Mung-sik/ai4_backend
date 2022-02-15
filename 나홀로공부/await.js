function timer(time) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

/*
//timer는 리턴값이 프로미스이므로 then을 써줄 수 있다.
timer(1000).then(function(time){
  console.log('time:' +time);
  return timer(time+1000); //기존 시간에 1초를 더한 시간을 추가
}).then(function(time){
  console.log('time'+time);
  console.log('end');
});
*/

//위 코드를 깔끔하게 동기적으로 동작하는 것처럼 만들어보자

async function run(){
  console.log('start');
  let time = await timer(1000); //이 타이머가 비동기적이란걸 명확하게 알리기 위해 await 붙임.
  console.log('time:' +time);
  time = await timer(time+1000);
  console.log('time:' +time);
  time = await timer(time+1000);
  console.log('time:' +time);
  console.log('end');
}
async function run2(){
  console.log('parent start');
  await run();   // async 함수의 리턴값은 프로미스이므로 await를 써줄 수 있다.
  console.log('parent end');
}
run2().then(function(){
  console.log('final end');  // 마지막 결과물에선 async가 아닌 then을 써서 마무리.
})

//즉, async라고 하는 것은 평범한 함수를 프로미스를 리턴하는 비동기적인 함수로 만들어주는 키워드이다.


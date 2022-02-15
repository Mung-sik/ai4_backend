function job1() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){     //프라미스 객체는 executor(‘제작 코드’ 혹은 ‘가수’)와 결과나 에러를 받을 소비 함수(‘팬’)를 이어주는 역할을 합니다. 
      resolve('job1 ok!');
    }, 2000);
  });
}

function job2() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){     //프라미스 객체는 executor(‘제작 코드’ 혹은 ‘가수’)와 결과나 에러를 받을 소비 함수(‘팬’)를 이어주는 역할을 합니다. 
      resolve('job2 ok!');
    }, 2000);
  });
}
// job1().then(function(data){    //소비함수는 .then, .catch, .finally 메서드를 사용해 등록(구독)됩니다.
//                               //.then의 첫 번째 인수는 프라미스가 이행되었을 때 실행되는 함수이고, 여기서 실행 결과를 받습니다.
//   console.log('data',data);``
// })

job1()
  .then(function(data){
    console.log('data1',data);
    return job2();  // job2의 리턴값도 프로미스이다.
  })
  . catch(function(reason){
    console.log('reason', reason);
    return Promise.reject();   //만약에 위의 then에서 에러가 나면 아래 then을 실행시키지 않고 에러가 떴다고 출력.
  })
  .then(function(data){
    console.log('data2',data);
  });
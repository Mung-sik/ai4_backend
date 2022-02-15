Promise.all([timer(1000), timer(2000), timer(3000)]).then(function(result){
  console.log('result', result);
  console.timeEnd('Promise.all');
})

// 배열의 각각의 promise를 원소로 전달해주면 가장 늦게 끝나는 작업이 끝났을 때, callback 함수가 실행되고
// 첫 번째 파라미터로(위의 경우 result)는 각각의 프로미스의 실행결과를 담은 배열이 반환된다.

Promise.race([timer(1000), timer(2000), timer(3000)]).then(function(result){
  console.log('result', result);
  console.timeEnd('Promise.all');

  // 동시에 실행시켜놓고 제일 빨리 끝나는 작업이 끝나면, 제일 먼저 끝나는 작업을 기준으로 콜백함수가 실행된다.(나머지는 실행 x)
<script>
  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printNumbers() {
  console.log('Start');

  // 使用 await 控制輸出順序
  await delay(2000);
  console.log(1);

  await delay(1000);
  console.log(2);

  await delay(3000);
  console.log(3);

  console.log('End');
}

printNumbers();


</script>

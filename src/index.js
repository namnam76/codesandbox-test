/**
 * const,let等の変数宣言
 */

// var vall = "var変数";
// console.log(vall);

// // var変数は上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const
// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

// const変数は再宣言不可
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jak";
// val4.address = "広島";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };

// 処理が一行で終わる場合には、こういう書き方もある。const func2 = (str) => str;

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// オブジェクト
// const myProfile = {
//   name: "じゃけ",
//   age: 28
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前も${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列
// const myProfile = [`じゃけぇ`, 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);
// 分割代入
// const [name, age] = myProfile;
// [0]→name　[1]→ageに代入される
// const message4 = `名前も${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello();
// 引数がないとundefinedと表示されてしまう
// なので、、、デフォルト値を設定してあげる！
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレット構文　... ドット三つ！
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// スプレット構文にすると配列の中身を順番に表示してくれる
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// スプレット構文にすると配列の中身を順番に処理してくれる
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// 3,4,5をまとめて表示することができる
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// // arr4のコピーをarr6として作成することができる
// const arr6 = [...arr4];
// // arr4の中身と同じ[10,20]
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// // コピーして結合することもできる
// console.log(arr7);

// // Question：イコールでコピーできるのでは？
// const arr8 = arr4;
// console.log(arr8);
// // コピーはできるが。。。参照してしまっているので
// // arr8の中身を変えてしまうと
// arr8[0] = 100;
// console.log(arr8);
// // コピー元のarr4の値も変わってしまう
// console.log(arr4);

// // スプレット構文だとどうなの？
// const arr9 = [...arr4];
// arr9[0] = 1000;
// console.log(arr9);
// // コピー元に影響はない！
// console.log(arr4);
// // 配列をコピーしたいときはスプレット構文で！

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// // 従来はfor文などを使って配列を処理していた
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // mapを使うと (mapは配列に対して設定できる関数)
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// // returnされた値(nameArrの配列の順番通りの値)に基づいて新しい配列を生成できる
// console.log(nameArr2);

// // 配列の値の順番通りに表示させる
// nameArr.map((name) => console.log(name));

// filter
// ある条件に一致したものだけ返却して新しい配列を生成する
// const numArr = [1, 2, 3, 4, 5];
// // 奇数の値だけ取り出したい
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
//   // 2で割った値が1になるものだけ返却する
// });
// console.log(newNumArr);

// // 従来：何番目は何々と表示させたい場合
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index+1}番目は${nameArr[index]}です。`);
// }
// // mapの場合：何番目は何々と表示させたい場合 順番の要素indexないが。。。
// // mapの一つ目の引数には実際の中身、二つ目の引数には何番目の値化の順番の数字が入っている
// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です。`))
// // 順番の要素が必要ない場合は第一引数だけで良い　用途に合わせて

// // 実践！自分の名前以外には名前の後に「さん」をつけたい場合
// // 新しい配列が値をmapで受け取る。mapはnameArr配列を順番に処理する。値がnameに順番に入っていく
// const newNameArr =nameArr.map((name)=>{
//   if(name==="じゃけぇ"){
//     // nameがじゃけぇに一致する場合はそのまま返却
//     return name
//   }else{
//     // nameがじゃけぇ以外は、テンプレート文字列で語尾に「さん」
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */
// if文がシンプルに
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// // 1が0より大きい時は
// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = "1300";
// // num=1300の時は「1,300」と表示されるが、"1300"(文字列)の時は「1300」とそのまま表示される
// console.log(num.toLocaleString());

// // 文字列の時は三桁区切りで表示、文字列の際は「数値を入力してください」を表示
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// // 関数のreturnに三項演算子を使う例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(100,200))
// console.log(checkSum(10,20))
// // 関数のreturnで三項演算子が使われることが多いので押さえておきましょう！

/**
 * 論理演算子の本当の意味を知ろう if分の中でよく使われる && || とか
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log(`1か2はtrueになります`);
// }
// if (flag1 && flag2) {
//   console.log(`1も2もtrueになります`);
// }
// // これらの演算子は「または、かつ」という意味ではない?!

// // || は左側がfalseなら右側を返す　という意味(※重要)
// // num=nullの時、false判定されるので"金額未設定です"を返す
// // num=100の時、false判定されないのでnum(自分の値)を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// // num2=100の時、左側がtrueになるので"何か設定されました"が返される
// // num2=nullの時、左側がfalseになるのでnull(num2)が返される
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
// 下はflag1がtrue→flag2がtrue→if文の処理をする
// if (flag1 && flag2) {
//   console.log(`1も2もtrueになります`);
// }
// ReactのJSXでは&&や||がよく使われるので要チェック！

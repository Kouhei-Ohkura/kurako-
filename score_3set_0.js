// ID からテーブルを取得
var table = document.getElementById("tennis1");
var get1 = document.getElementById("get1"); // button, my winner
var get2 = document.getElementById("get2"); // button, your miss
var lost1 = document.getElementById("lost1"); // button, your winner
var lost2 = document.getElementById("lost2"); // button, my miss

var reset = document.getElementById("reset");

var winner1 = document.getElementById("winner1");
var winner2 = document.getElementById("winner2");
var miss1 = document.getElementById("miss1");
var miss2 = document.getElementById("miss2");
var total1 = document.getElementById("total1");
var total2 = document.getElementById("total2");

// 自分、相手のゲーム数とポイント数を確保する変数
var count_get_game = 0;
var count_lost_game = 0; // count_gameの上限は 7
var count_get_point = 0;
var count_lost_point = 0; // count_pointの上限は 5 または 無限

// 下の配列は count_get_point, count_lost_point を引数とし、それぞれのポイントに反映させたものである
var point_array = new Array("0", "15", "30", "40", "Ad");

// winner, miss, total 関連のpoint
var winner_count1 = 0; // 無限, my
var miss_count1 = 0; // 無限, my
var winner_count2 = 0;
var miss_count2 = 0;
var total_point1 = 0;
var total_point2 = 0;

// set 関連
var count_get_set = 0;
var count_lost_set = 0;
var count_set = 1;

// それぞれのゲーム数とポイント数で各セットごとに対応したもの
var game1 = table.rows[1].cells[count_set];
var game2 = table.rows[2].cells[count_set];
var point1 = table.rows[1].cells[count_set + 1];
var point2 = table.rows[2].cells[count_set + 1];

// 勝ったか負けたかの判定を行う
var finish = document.getElementById("finish");
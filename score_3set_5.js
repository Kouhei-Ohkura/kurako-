reset.addEventListener("click", function () {
  count_get_game = 0;
  count_get_point = 0;
  count_get_set = 0;
  count_lost_game = 0;
  count_lost_point = 0;
  count_lost_set = 0;

  winner_count1 = 0;
  winner_count2 = 0;
  miss_count1 = 0;
  miss_count2 = 0;
  total_point1 = 0;
  total_point2 = 0;

  game1 = table.rows[1].cells[count_set];
  game2 = table.rows[2].cells[count_set];
  point1 = table.rows[1].cells[count_set + 1];
  point2 = table.rows[2].cells[count_set + 1];

  if (count_set == 1) {
    game1.innerHTML = 0;
    game2.innerHTML = 0;
    point1.innerHTML = 0;
    point2.innerHTML = 0;
    winner1.innerHTML = winner_count1;
    winner2.innerHTML = winner_count2;
    miss1.innerHTML = miss_count1;
    miss2.innerHTML = miss_count2;
    total1.innerHTML = total_point1;
    total2.innerHTML = total_point2;
  } else if (count_set == 2) {
    var rows = table.rows.length;
    for (var i = 0; i < rows; i++) {
      table.rows[i].deleteCell(count_set);
    }
    count_set -= 1;
    game1 = table.rows[1].cells[count_set];
    game2 = table.rows[2].cells[count_set];
    game1.innerHTML = 0;
    game2.innerHTML = 0;
    point1.innerHTML = 0;
    point2.innerHTML = 0;
    game1.style.color = "black";
    game2.style.color = "black";
    winner1.innerHTML = winner_count1;
    winner2.innerHTML = winner_count2;
    miss1.innerHTML = miss_count1;
    miss2.innerHTML = miss_count2;
    total1.innerHTML = total_point1;
    total2.innerHTML = total_point2;
    finish.innerHTML = " ";
    get1.removeAttribute("disabled");
    get2.removeAttribute("disabled");
    lost1.removeAttribute("disabled");
    lost2.removeAttribute("disabled");
    get1.style.color = "black";
    get2.style.color = "black";
    lost1.style.color = "black";
    lost2.style.color = "black";
  } else {
    count_set = 3;
    var rows1 = table.rows.length;
    for (var i1 = 0; i1 < 2; i1++) {
      for (var i2 = 0; i2 < rows1; i2++) {
        table.rows[i2].deleteCell(count_set);
      }
      count_set -= 1;
    }
    game1 = table.rows[1].cells[count_set];
    game2 = table.rows[2].cells[count_set];
    game1.innerHTML = 0;
    game2.innerHTML = 0;
    point1.innerHTML = 0;
    point2.innerHTML = 0;
    game1.style.color = "black";
    game2.style.color = "black";
    winner1.innerHTML = winner_count1;
    winner2.innerHTML = winner_count2;
    miss1.innerHTML = miss_count1;
    miss2.innerHTML = miss_count2;
    total1.innerHTML = total_point1;
    total2.innerHTML = total_point2;
    finish.innerHTML = " ";
    get1.removeAttribute("disabled");
    get2.removeAttribute("disabled");
    lost1.removeAttribute("disabled");
    lost2.removeAttribute("disabled");
    get1.style.color = "black";
    get2.style.color = "black";
    lost1.style.color = "black";
    lost2.style.color = "black";
  }
});
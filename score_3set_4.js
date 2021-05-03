lost2.addEventListener("click", function () {
  // my miss
  count_lost_point += 1;
  miss_count1 += 1;
  miss1.innerHTML = miss_count1;
  total_point2 += 1;
  total2.innerHTML = total_point2;

  game1 = table.rows[1].cells[count_set];
  game2 = table.rows[2].cells[count_set];
  point1 = table.rows[1].cells[count_set + 1];
  point2 = table.rows[2].cells[count_set + 1];

  if (count_get_game == 6 && count_lost_game == 6) {
    point2.innerHTML = count_lost_point;
    if (
      count_lost_point - count_get_point >= 2 &&
      count_lost_point >= 7
    ) {
      count_lost_game += 1;
      point1.innerHTML = 0;
      point2.innerHTML = 0;
      game1.innerHTML = 6 + "(" + count_get_point + ")";
      game2.innerHTML = count_lost_game;
      game2.style.color = "red";
      var numRows = table.rows.length;
      count_set += 1;
      count_lost_set += 1;
      if (count_lost_set == 2) {
        count_set -= 1;
        finish.innerHTML = "you lose";
        get1.setAttribute("disabled", true);
        get2.setAttribute("disabled", true);
        lost1.setAttribute("disabled", true);
        lost2.setAttribute("disabled", true);
        get1.style.color = "white";
        get2.style.color = "white";
        lost1.style.color = "white";
        lost2.style.color = "white";
      } else {
        for (var i = 0; i < numRows; i++) {
          var cell = table.rows[i].insertCell(count_set);
          if (i == 0) {
            cell.innerHTML = count_set + "set";
          } else {
            cell.innerHTML = 0;
          }
        }
        count_get_game = 0;
        count_lost_game = 0;
      }
    }
  } else {
    if (count_lost_point < 4) {
      point2.innerHTML = point_array[count_lost_point];
    } else if (count_lost_point == 4) {
      if (count_get_point < 3) {
        count_lost_game += 1;
        game2.innerHTML = count_lost_game;
        count_get_point = 0;
        count_lost_point = 0;
        point1.innerHTML = point_array[count_lost_point];
        point2.innerHTML = point_array[count_lost_point];
      } else if (count_get_point == 3) {
        point2.innerHTML = point_array[count_lost_point];
      } else {
        count_get_point -= 1;
        count_lost_point -= 1;
        point1.innerHTML = point_array[count_lost_point];
        point2.innerHTML = point_array[count_lost_point];
      }
    } else {
      count_get_point = 0;
      count_lost_point = 0;
      count_lost_game += 1;
      game2.innerHTML = count_lost_game;
      point1.innerHTML = point_array[count_lost_point];
      point2.innerHTML = point_array[count_lost_point];
    }
    if (count_lost_game == 6 && count_get_game < 5) {
      point1.innerHTML = 0;
      point2.innerHTML = 0;
      game2.style.color = "red";
      var numRows1 = table.rows.length;
      count_set += 1;
      count_lost_set += 1;
      if (count_lost_set == 2) {
        count_set -= 1;
        finish.innerHTML = "you lose";
        get1.setAttribute("disabled", true);
        get2.setAttribute("disabled", true);
        lost1.setAttribute("disabled", true);
        lost2.setAttribute("disabled", true);
        get1.style.color = "white";
        get2.style.color = "white";
        lost1.style.color = "white";
        lost2.style.color = "white";
      } else {
        for (var i1 = 0; i1 < numRows1; i1++) {
          var cell1 = table.rows[i1].insertCell(count_set);
          if (i1 == 0) {
            cell1.innerHTML = count_set + "set";
          } else {
            cell1.innerHTML = 0;
          }
        }
        count_get_game = 0;
        count_lost_game = 0;
      }
    } else if (count_lost_game == 7 && count_get_game == 5) {
      point1.innerHTML = 0;
      point2.innerHTML = 0;
      game2.style.color = "red";
      var numRows2 = table.rows.length;
      count_set += 1;
      count_lost_set += 1;
      if (count_lost_set == 2) {
        count_set -= 1;
        finish.innerHTML = "you lose";
        get1.setAttribute("disabled", true);
        get2.setAttribute("disabled", true);
        lost1.setAttribute("disabled", true);
        lost2.setAttribute("disabled", true);
        get1.style.color = "white";
        get2.style.color = "white";
        lost1.style.color = "white";
        lost2.style.color = "white";
      } else {
        for (var i2 = 0; i2 < numRows2; i2++) {
          var cell2 = table.rows[i2].insertCell(count_set);
          if (i2 == 0) {
            cell2.innerHTML = count_set + "set";
          } else {
            cell2.innerHTML = 0;
          }
        }
        count_get_game = 0;
        count_lost_game = 0;
      }
    }
  }
});

function load() {
  let column_1 = [
    3, 5, 6, 2, 1, 8, 9, 1, 7, 5, 10, 5, 7, 6, 8, 5, 9, 1, 10, 3, 6, 5, 3, 10,
    2, 2, 1, 9, 6, 5,
  ];
  let column_2 = [
    5, 9, 9, 4, 8, 6, 10, 2, 2, 8, 7, 2, 3, 3, 3, 8, 2, 4, 1, 4, 10, 4, 4, 3,
    10, 8, 8, 1, 4, 4,
  ];
  let column_3 = [
    79, 53, 55, 49, 52, 84, 60, 61, 90, 68, 72, 44, 75, 41, 60, 49, 41, 69, 50,
    58, 79, 83, 67, 71, 53, 47, 73, 57, 75, 84,
  ];
  let column_4 = [
    70, 53, 76, 87, 77, 54, 58, 50, 89, 63, 53, 86, 56, 71, 78, 53, 58, 68, 47,
    62, 99, 77, 89, 66, 63, 80, 88, 89, 55, 53,
  ];

  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    sum4 = 0;

  for (let i = 0; i < column_1.length; i++) {
    sum1 += column_1[i];
    sum2 += column_2[i];
    sum3 += column_3[i];
    sum4 += column_4[i];
  }

  let total_score = 0;
  const sums = [sum1, sum2, sum3, sum4];

  for (let i = 0; i < sums.length; i++) {
    total_score += sums[i];
  }

  const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums,
    total_score,
  };

  console.log(results);
}

load();

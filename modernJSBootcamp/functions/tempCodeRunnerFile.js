et grade;
    const percent = Math.floor(score / possibleScore * 100);
    if (percent >= 90) {
        grade = 'A';
    } else if (percent >= 80 && percent < 90) {
        grade = 'B';
    } else if (percent >= 70 && percent < 80) {
        grade = 'C';
    } else if (percent >= 60 && percent < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }
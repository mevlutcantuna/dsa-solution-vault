function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const row = Math.floor(mid / cols);
        const col = mid % cols;
        const value = matrix[row][col];

        if (value === target) return true;
        if (value < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
}
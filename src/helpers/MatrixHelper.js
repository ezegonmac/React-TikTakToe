
class MatrixHelper {

    static transpose(matrix) {
        let transposed = Array.from(matrix);
        return transposed[0].map((col, i) => transposed.map(row => row[i]));
    }

    static symmetry(matrix) {
        let symmetry = Array.from(matrix);

        for (let i = 0; i < symmetry.length; i++) {
            for (let j = 0; j < symmetry[i].length / 2; j++) {
                const temp = symmetry[i][j];
                symmetry[i][j] = symmetry[i][symmetry.length - 1 - j];
                symmetry[i][symmetry.length - 1 -j] = temp;
            }
        }

        return symmetry;
    }

    static checkRows(matrix) {
        const res = matrix.some(row => {
            return (row[0] === row[1]) && (row[0] === row[2]) && (row[0] != null)
        });

        return res;
    }

    static checkColumns(matrix) {
        matrix = MatrixHelper.transpose(matrix);
        return MatrixHelper.checkRows(matrix);
    }

    static checkFirstDiagonal(matrix) {
        return (matrix[0][0] === matrix[1][1]) && 
            (matrix[0][0] === matrix[2][2]) &&
            (matrix[0][0] !== null);
    }

    static checkSecondDiagonal(matrix) {
        matrix = MatrixHelper.symmetry(matrix);
        console.log(matrix);
        return MatrixHelper.checkFirstDiagonal(matrix);
    }

    static checkMatrix(matrix) {
        return MatrixHelper.checkRows(matrix) ||
            MatrixHelper.checkColumns(matrix) ||
            MatrixHelper.checkFirstDiagonal(matrix) ||
            MatrixHelper.checkSecondDiagonal(matrix);
    }

}

export default MatrixHelper;
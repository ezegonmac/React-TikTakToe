
class BorderHelper {

    static borders = 
        [
            [
                {top    : false,
                 right  : true,
                 bottom : true,
                 left   : false},
                {top    : false,
                 right  : false,
                 bottom : true,
                 left   : false},
                {top    : false,
                 right  : false,
                 bottom : true,
                 left   : true},
            ],
            [
                {top    : false,
                 right  : true,
                 bottom : false,
                 left   : false},
                {top    : false,
                 right  : false,
                 bottom : false,
                 left   : false},
                {top    : false,
                 right  : false,
                 bottom : false,
                 left   : true},
            ],
            [
                {top    : true,
                 right  : true,
                 bottom : false,
                 left   : false},
                {top    : true,
                 right  : false,
                 bottom : false,
                 left   : false},
                {top    : true,
                 right  : false,
                 bottom : false,
                 left   : true},
            ]
        ];


    static hasTopBorder = (row, col) => {
        return this.borders[row-1][col-1].top;
    }
    
    static hasRightBorder = (row, col) => {
        return this.borders[row-1][col-1].right;
    }
    
    static hasBottomBorder = (row, col) => {
        return this.borders[row-1][col-1].bottom;
    }
    
    static hasLeftBorder = (row, col) => {
        return this.borders[row-1][col-1].left;
    }

}

export default BorderHelper;
//画布的大小
var canvasSize = {"maxX": 1024, "maxY": 768};

//数组中每个元素表示一个点的坐标[x,y,z]，这里一共有9个点
var vertex_pos = [
    [0, 0, 0],
    [700, 0, 0],
    [1000, 0, 0],
    [100, 400, 0],
    [600, 450, 0],
    [1000, 400, 0],
    [50, 650, 0],
    [700, 700, 0],
    [1000, 700, 0]
];

//顶点颜色数组，保存了上面顶点数组中每个顶点颜色信息[r,g,b]
var vertex_color = [
    [0, 0, 255],
    [0, 255, 0],
    [0, 255, 255],
    [255, 255, 0],
    [0, 255, 255],
    [0, 255, 0],
    [0, 255, 0],
    [0, 200, 100],
    [255, 255, 0]
];

//四边形数组，数组中每个元素表示一个四边形，其中的四个数字是四边形四个顶点的index，例如vertex[polygon[2][1]]表示第三个多边形的第2个顶点的坐标
const quadrilateral = [
    [0, 1, 4, 3],
    [1, 2, 5, 4],
    [3, 4, 7, 6],
    [4, 5, 8, 7]
];

const polygon = quadrilateral;

const RADIUSQUAD = 100;                 // radius of handle is 10
const OUTLINEOFFSET = 21;               // outline of handle
const HANDLEFIELDHALFEDGE = 15;         // half edge length of square field contaning handle
const HANDLEFILLCOLOR = [255, 0, 0];    // red handle
const HANDLEOUTLINECOLOR = [0, 0, 0];   // black handle outline
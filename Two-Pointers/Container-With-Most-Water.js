var maxArea = function (height) {
    let rInd = height.length
    let lInd = 1
    let max = 0

    while (rInd > lInd) {
        let r = height[rInd - 1]
        let l = height[lInd - 1]
        let width = rInd - lInd
        let area = l < r ? l * width : r * width;
        if (area > max) max = area
        if (l < r) {
            lInd++
        } else {
            rInd--
        }
    }

    return max
};
var trap = function(height) {
    let trapped = 0;

    let lInd = 0;
    let rInd = height.length - 1;

    let lMax = height[lInd];
    let rMax = height[rInd];

    while(lInd < rInd) {
        let l = height[lInd];
        let r = height[rInd];
        let min = Math.min(lMax, rMax);
        if (lMax <= rMax) {
            lInd++;
            l = height[lInd];
            if(l < min) {
                trapped += min - l
            }
        } else {
            rInd--
            r = height[rInd];
            if(r < min) {
                trapped += min - r
            }
        }
        if(lMax < l) lMax = l
        if(rMax < r) rMax = r
    }
    return trapped
};
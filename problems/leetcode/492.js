var constructRectangle = function(area) {
    var root = parseInt(Math.sqrt(area).toString())

    while(area % root) {
        root--
    }

    return [area / root, root]
}

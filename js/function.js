clearClass = (choice, classes) => {
    for (var i = 0; i < choice.length; i++) {
        if (choice[i] != null) {
            if (
                choice[i].classList.value.split(" ").filter(value => value == classes)
                .length != 0
            ) {
                choice[i].classList.remove(classes);
            }
        }
    }
};

addChoice = (choice, eventChoice) => {
    eventChoice.addEventListener("click", () => {
        clearChoice(choice);
        eventChoice.classList.add("choice");
    });
};

checkChoice = choice => {
    for (var i = 0; i < choice.length; i++) {
        if (
            choice[i].classList.value.split(" ").filter(value => value == "choice")
            .length != 0
        ) {
            return i;
        }
    }
    return -1;
};

coorX = clickX =>
    Math.round(((clickX - wid / 2) * axisX * 100 * 2) / wid) / 100;

coorY = clickY =>
    Math.round(((101 + hei / 2 - clickY) * axisY * 100 * 2) / hei) / 100;

whichPoint = allPoint => {
    for (var i = 0; i < allPoint.length; i++) {
        if (allPoint[i].mouseover) {
            return i;
        }
    }
    return -1;
};

whichLine = allLine => {
    for (var i = 0; i < allLine.length; i++) {
        if (allLine[i].mouseover) {
            return i;
        }
    }
    return -1;
};

whichCirc = allCirc => {
    for (var i = 0; i < allCirc.length; i++) {
        if (allCirc[i].mouseover) {
            return i;
        }
    }
    return -1;
};

whichText = allText => {
    for (var i = 0; i < allText.length; i++) {
        if (allText[i].mouseover) {
            return i;
        }
    }
    return -1;
};

allVisible = (allPoint, allLine, allCirc, allText) => {
    for (var i = 0; i < allPoint.length; i++) {
        allPoint[i].setAttribute({
            visible: true
        });
    }
    for (var i = 0; i < allLine.length; i++) {
        allLine[i].setAttribute({
            visible: true
        });
    }
    for (var i = 0; i < allCirc.length; i++) {
        allCirc[i].setAttribute({
            visible: true
        });
    }
    for (var i = 0; i < allText.length; i++) {
        allText[i].setAttribute({
            visible: true
        });
    }
};

allInvisible = (allPoint, allLine, allCirc, allText) => {
    for (var i = 0; i < allPoint.length; i++) {
        allPoint[i].setAttribute({
            visible: false
        });
    }
    for (var i = 0; i < allLine.length; i++) {
        allLine[i].setAttribute({
            visible: false
        });
    }
    for (var i = 0; i < allCirc.length; i++) {
        allCirc[i].setAttribute({
            visible: false
        });
    }
    for (var i = 0; i < allText.length; i++) {
        allText[i].setAttribute({
            visible: false
        });
    }
};

onlyChoice = (allPoint, allPointColor) => {
    for (var i = 0; i < allPoint.length; i++) {
        allPoint[i].setAttribute({
            fillColor: allPointColor[i][0],
            strokeColor: allPointColor[i][1]
        });
    }
};

round2 = (x) => Math.round(x * 100) / 100

checkConc = (allPoint, tempInter) => {
    var k = 0,
        i = 0;
    while (k == 0 && i < allPoint.length) {
        if (round2(allPoint[i].Dist(tempInter)) == 0) {
            k = 1
        }
        i++
    }
    return k
}

pointXY = click => [coorX(click.pageX), coorY(click.pageY)]

kindPoint = (allPoint, kind, coo, allPointColor) => {
    allPoint.push(
        brd.create(kind, coo, {
            fillColor: "#eeeeee",
            strokeColor: "#c3d9ff",
            strokeWidth: 1,
            highlightFillColor: "#ff0000",
            highlightStrokeColor: "#ff0000",
            size: 3,
            label: {
                fixed: false
            }
        })
    );
    allPointColor.push(["#eeeeee", "#c3d9ff", 1])
    onlyChoice(allPoint, allPointColor)
    allPoint[allPoint.length - 1].setAttribute({
        fillColor: "#ff0000",
        strokeColor: "#ff0000"
    })
}

createPoint = (choice, click, allPoint, all, allPointColor, kind) => {
    var coo = pointXY(click);
    if (kind == "glider") {
        coo = [pointXY(click)[0], pointXY(click)[1], all[choice]]
    }
    kindPoint(allPoint, kind, coo, allPointColor)
}
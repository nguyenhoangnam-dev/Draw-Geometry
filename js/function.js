clearChoice = choice => {
    for (var i = 0; i < choice.length; i++) {
        if (choice[i] != null) {
            if (
                choice[i].classList.value.split(" ").filter(value => value == "choice")
                .length != 0
            ) {
                choice[i].classList.remove("choice");
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

allVisible = (allPoint, allLine, allCirc) => {
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
};

allInvisible = (allPoint, allLine, allCirc) => {
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
};

onlyChoice = (allPoint, allPointColor) => {
    for (var i = 0; i < allPoint.length; i++) {
        allPoint[i].setAttribute({
            fillColor: allPointColor[i][0],
            strokeColor: allPointColor[i][1]
        });
    }
};
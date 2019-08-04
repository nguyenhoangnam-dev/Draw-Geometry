// This use for default choice

tex = document.createTextNode("Normal");
squareDiv.appendChild(tex);
squareDiv.classList.add("choice");
moreTool.appendChild(squareDiv);
tex = document.createTextNode("Eraser");
squareDiv1.appendChild(tex);
moreTool.appendChild(squareDiv1);
tex = document.createTextNode("Show");
squareDiv2.appendChild(tex);
moreTool.appendChild(squareDiv2);
tex = document.createTextNode("Hide");
squareDiv3.appendChild(tex);
moreTool.appendChild(squareDiv3);
moreTool.appendChild(squareDiv4);

one = document.getElementById('one')
two = document.getElementById('two')
three = document.getElementById('three')
four = document.getElementById('four')
five = document.getElementById('five')

fill.value = ""
fill.disabled = true
stroke.value = "";
stroke.disabled = true;
slider.value = 1;
slider.disabled = true;

mouse.addEventListener("click", () => {
    if (checkChoice(choice) != 0) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
        clearChoice(choiceTool);
        mouse.classList.add("choice");
        tex = document.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = document.createTextNode("Eraser");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = document.createTextNode("Show");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = document.createTextNode("Hide");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        moreTool.appendChild(squareDiv4);
    }

    one = document.getElementById('one')
    two = document.getElementById('two')
    three = document.getElementById('three')
    four = document.getElementById('four')
    five = document.getElementById('five')
});

search.value = ""

document.getElementsByTagName("body")[0].onclick = (click) => {
    if (click.target !== search) {
        listOption.classList.add("hide")
    } else {
        listOption.classList.remove("hide")
        search.value = ""
    }
}

listOption.onclick = (click) => {
    for (var i = 0; i < listOption.children.length; i++) {
        if (click.target === listOption.children[i]) {
            searchValue = listOption.children[i].innerText;
        } else if (click.target === textChoice[i]) {
            searchValue = textChoice[i].firstChild.data
        }
    }
    search.value = searchValue;
    for (var i = 0; i < userList.items.length; i++) {
        if (searchValue === userList.items[i]._values.name) {
            searchId = i
        }
    }

}

// This event for main type

point.addEventListener("click", () => {
    if (checkChoice(choice) != 1) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }

            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
        clearChoice(choiceTool);
        point.classList.add("choice");
        tex = document.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = document.createTextNode("Midpoint");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = document.createTextNode("Intersect");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        moreTool.appendChild(squareDiv3);
        moreTool.appendChild(squareDiv4);
    }
    one = document.getElementById('one')
    two = document.getElementById('two')
    three = document.getElementById('three')
    four = document.getElementById('four')
    five = document.getElementById('five')

    fill.value = ""
    fill.disabled = true
    stroke.value = "";
    stroke.disabled = true;
});

line.addEventListener("click", () => {
    if (checkChoice(choice) != 2) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
        clearChoice(choiceTool);
        line.classList.add("choice");
        tex = document.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = document.createTextNode("Perpen");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = document.createTextNode("Parallel");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = document.createTextNode("Segment");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        tex = document.createTextNode("Angle");
        squareDiv4.appendChild(tex);
        moreTool.appendChild(squareDiv4);
    }
    one = document.getElementById('one')
    two = document.getElementById('two')
    three = document.getElementById('three')
    four = document.getElementById('four')
    five = document.getElementById('five')

    fill.value = ""
    fill.disabled = true
    stroke.value = "";
    stroke.disabled = true;
});

circle.addEventListener("click", () => {
    if (checkChoice(choice) != 3) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
        clearChoice(choiceTool);
        circle.classList.add("choice");
        tex = document.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = document.createTextNode("Circum");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = document.createTextNode("Incircle");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        moreTool.appendChild(squareDiv3);
        moreTool.appendChild(squareDiv4);
    }
    one = document.getElementById('one')
    two = document.getElementById('two')
    three = document.getElementById('three')
    four = document.getElementById('four')
    five = document.getElementById('five')

    fill.value = ""
    fill.disabled = true
    stroke.value = "";
    stroke.disabled = true;
});

conic.addEventListener("click", () => {
    if (checkChoice(choice) != 4) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
        clearChoice(choiceTool);
        conic.classList.add("choice");
        tex = document.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        moreTool.appendChild(squareDiv1);
        moreTool.appendChild(squareDiv2);
        moreTool.appendChild(squareDiv3);
        moreTool.appendChild(squareDiv4);
    }
    one = document.getElementById('one')
    two = document.getElementById('two')
    three = document.getElementById('three')
    four = document.getElementById('four')
    five = document.getElementById('five')

    fill.value = ""
    fill.disabled = true
    stroke.value = "";
    stroke.disabled = true;
});

// This use for more tool

one.addEventListener("click", () => {
    clearChoice(choiceTool);
    one.classList.add("choice");

});

two.addEventListener("click", () => {
    clearChoice(choiceTool);
    two.classList.add("choice");

});

three.addEventListener("click", () => {
    clearChoice(choiceTool);
    three.classList.add("choice");
    if (checkChoice(choice) == 0) {
        allVisible(allPoint, allLine, allCirc)
    }

});

four.addEventListener("click", () => {
    clearChoice(choiceTool);
    four.classList.add("choice");
    if (checkChoice(choice) == 0) {
        allInvisible(allPoint, allLine, allCirc)
    }
});

five.addEventListener("click", () => {
    clearChoice(choiceTool);
    five.classList.add("choice");

});

download.addEventListener("click", () => {
    var canvasScreen = document.getElementsByTagName("canvas");
    download.href = canvasScreen[0].toDataURL();
    download.target = "blank";
    download.download = 'screenshot.png';
    download.click();
})

document.getElementById("jxgbox").addEventListener("click", click => {
    if (checkChoice(choice) >= 1) {
        fill.value = ""
        fill.disabled = true
        stroke.value = "";
        stroke.disabled = true;
        slider.value = 1;
        slider.disabled = true;
        if (checkChoice(choice) == 1) {
            isLine = []
            perp = []
            para = []
            segment = []
            ang = []
            isCirc = []
            circum = []
            incircle = []
            if (checkChoice(choiceTool) == 0) {
                mid = []
                inter = []
                var clickX = click.pageX;
                var clickY = click.pageY;
                var pointX = coorX(clickX);
                var pointY = coorY(clickY);
                allPoint.push(
                    brd.create("point", [pointX, pointY], {
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
            } else if (checkChoice(choiceTool) == 1) {
                inter = []
                pointChoice = whichPoint(allPoint);
                if (mid.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        mid.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        mid.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        mid.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                fillColor: "#eeeeee",
                                strokeColor: "#c3d9ff",
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
                        mid.push(allPoint[allPoint.length - 1].name)
                    }
                    allPoint.push(brd.create('midpoint', mid, {
                        fillColor: "#eeeeee",
                        strokeColor: "#c3d9ff",
                        strokeWidth: 1,
                        highlightFillColor: "#ff0000",
                        highlightStrokeColor: "#ff0000",
                        size: 3,
                        label: {
                            fixed: false
                        }
                    }))
                    allPointColor.push(["#eeeeee", "#c3d9ff", 1])
                    onlyChoice(allPoint, allPointColor)
                    allPoint[allPoint.length - 1].setAttribute({
                        fillColor: "#ff0000",
                        strokeColor: "#ff0000"
                    })
                    mid = []
                }
            } else {
                mid = []
                lineChoice = whichLine(allLine);
                circChoice = whichCirc(allCirc);
                if (inter.length == 0) {
                    if (lineChoice + 1) {
                        inter.push(allLine[lineChoice]);
                    } else if (circChoice + 1) {
                        inter.push(allCirc[circChoice]);
                    }
                } else {
                    if (lineChoice + 1) {
                        inter.push(allLine[lineChoice]);
                        if (lineKind.includes(inter[0].elType)) {
                            allPoint.push(brd.create('intersection', inter, {
                                fillColor: "#eeeeee",
                                strokeColor: "#c3d9ff",
                                strokeWidth: 1,
                                highlightFillColor: "#ff0000",
                                highlightStrokeColor: "#ff0000",
                                size: 3,
                                label: {
                                    fixed: false
                                }
                            }))
                            allPointColor.push(["#eeeeee", "#c3d9ff", 1])
                            onlyChoice(allPoint, allPointColor)
                            allPoint[allPoint.length - 1].setAttribute({
                                fillColor: "#ff0000",
                                strokeColor: "#ff0000"
                            })
                        } else {
                            allPoint.push(brd.create('intersection', inter, {
                                fillColor: "#eeeeee",
                                strokeColor: "#c3d9ff",
                                strokeWidth: 1,
                                highlightFillColor: "#ff0000",
                                highlightStrokeColor: "#ff0000",
                                size: 3,
                                label: {
                                    fixed: false
                                }
                            }))
                            allPointColor.push(["#eeeeee", "#c3d9ff", 1])
                            onlyChoice(allPoint, allPointColor)
                            allPoint[allPoint.length - 1].setAttribute({
                                fillColor: "#ff0000",
                                strokeColor: "#ff0000"
                            })

                            tempInter = brd.create('intersection', [inter[0], inter[1], 1], {
                                name: "",
                                visible: false
                            })

                            if (round2(allPoint[allPoint.length - 1].Dist(tempInter)) == 0) {
                                delete tempInter;
                            } else {
                                allPoint.push(brd.create('intersection', [inter[0], inter[1], 1], {
                                    fillColor: "#eeeeee",
                                    strokeColor: "#c3d9ff",
                                    strokeWidth: 1,
                                    highlightFillColor: "#ff0000",
                                    highlightStrokeColor: "#ff0000",
                                    size: 3,
                                    label: {
                                        fixed: false
                                    }
                                }))
                                allPointColor.push(["#eeeeee", "#c3d9ff", 1])
                                allPoint[allPoint.length - 1].setAttribute({
                                    fillColor: "#ff0000",
                                    strokeColor: "#ff0000"
                                })
                            }
                        }
                        inter = []
                    } else if (circChoice + 1) {
                        inter.push(allCirc[circChoice]);
                        allPoint.push(brd.create('intersection', inter, {
                            fillColor: "#eeeeee",
                            strokeColor: "#c3d9ff",
                            strokeWidth: 1,
                            highlightFillColor: "#ff0000",
                            highlightStrokeColor: "#ff0000",
                            size: 3,
                            label: {
                                fixed: false
                            }
                        }))
                        allPointColor.push(["#eeeeee", "#c3d9ff", 1])
                        onlyChoice(allPoint, allPointColor)
                        allPoint[allPoint.length - 1].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })

                        tempInter = brd.create('intersection', [inter[0], inter[1], 1], {
                            name: "",
                            visible: false
                        })

                        if (round2(allPoint[allPoint.length - 1].Dist(tempInter)) == 0) {
                            delete tempInter;
                        } else {
                            allPoint.push(brd.create('intersection', [inter[0], inter[1], 1], {
                                fillColor: "#eeeeee",
                                strokeColor: "#c3d9ff",
                                strokeWidth: 1,
                                highlightFillColor: "#ff0000",
                                highlightStrokeColor: "#ff0000",
                                size: 3,
                                label: {
                                    fixed: false
                                }
                            }))
                            allPointColor.push(["#eeeeee", "#c3d9ff", 1])
                            allPoint[allPoint.length - 1].setAttribute({
                                fillColor: "#ff0000",
                                strokeColor: "#ff0000"
                            })
                        }
                        inter = []
                    }

                }
            }

        } else if (checkChoice(choice) == 2) {
            mid = []
            inter = []
            isCirc = []
            circum = []
            incircle = []
            pointChoice = whichPoint(allPoint);
            lineChoice = whichLine(allLine);
            if (pointChoice + 1) {
                lineChoice = -1
            }
            if (checkChoice(choiceTool) == 0) {
                segment = []
                perp = []
                para = []
                ang = []
                if (isLine.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isLine.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        isLine.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isLine.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        isLine.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create("line", isLine, {
                            strokeColor: "#000000",
                            strokeWidth: 1
                        })
                    );
                    allLineColor.push("#000000")
                    allLineWidth.oush(1)
                    isLine = [];
                }
            } else if (checkChoice(choiceTool) == 1) {
                isLine = []
                para = []
                segment = []
                ang = []
                if (perp.length == 0) {
                    if (lineChoice + 1) {
                        perp.push(allLine[lineChoice])
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        perp.push(allPoint[pointChoice])
                    }
                } else {
                    if (lineChoice + 1) {
                        if (pointKind.includes(perp[0].elType)) {
                            perp.push(allLine[lineChoice])
                            allLine.push(brd.create('perpendicular', perp, {
                                strokeWidth: 1
                            }))
                            allLineColor.push("#000000")
                            allLineWidth.push(1)
                            perp = []
                        }
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        if (lineKind.includes(perp[0].elType)) {
                            perp.push(allPoint[pointChoice])
                            allLine.push(brd.create('perpendicular', perp, {
                                strokeWidth: 1
                            }))
                            allLineColor.push("#000000")
                            allLineWidth.push(1)
                            perp = []
                        }
                    }
                }
            } else if (checkChoice(choiceTool) == 2) {
                isLine = []
                perp = []
                segment = []
                ang = []
                if (para.length == 0) {
                    if (lineChoice + 1) {
                        para.push(allLine[lineChoice])
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        para.push(allPoint[pointChoice])
                    }
                } else {
                    if (lineChoice + 1) {
                        if (pointKind.includes(para[0].elType)) {
                            para.push(allLine[lineChoice])
                            allLine.push(brd.create('parallel', para, {
                                strokeWidth: 1
                            }))
                            allLineColor.push("#000000")
                            allLineWidth.push(1)
                            para = []
                        }
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        if (lineKind.includes(para[0].elType)) {
                            para.push(allPoint[pointChoice])
                            allLine.push(brd.create('parallel', para, {
                                strokeWidth: 1
                            }))
                            allLineColor.push("#000000")
                            allLineWidth.push(1)
                            para = []
                        }
                    }
                }
            } else if (checkChoice(choiceTool) == 3) {
                isLine = []
                perp = []
                para = []
                ang = []
                if (segment.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        segment.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        segment.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        segment.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        segment.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create("segment", segment, {
                            strokeColor: "#000000",
                            strokeWidth: 1
                        })
                    );
                    allLineColor.push("#000000")
                    allLineWidth.push(1)
                    segment = [];
                }
            } else {
                isLine = []
                perp = []
                para = []
                segment = []
                if (ang.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[allPoint.length - 1].name)
                    }
                } else if (ang.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create('bisector', ang, {
                            strokeWidth: 1
                        })
                    );
                    allLineColor.push("#000000")
                    allLineWidth.push(1)
                    ang = [];
                }
            }
        } else if (checkChoice(choice) == 3) {
            isLine = []
            perp = []
            para = []
            segment = []
            ang = []
            mid = []
            inter = []
            pointChoice = whichPoint(allPoint);
            if (checkChoice(choiceTool) == 0) {
                circum = []
                incircle = []
                if (isCirc.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isCirc.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isCirc.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isCirc.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
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
                        allPoint[allPoint[allPoint.length - 1]].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isCirc.push(allPoint[allPoint.length - 1].name)
                    }
                    allCirc.push(
                        brd.create("circle", isCirc, {
                            strokeColor: "#000000",
                            highlightStrokeWidth: 2,
                            strokeWidth: 1
                        })
                    );
                    allCircColor.push("#000000")
                    allCircWidth.push(1)
                    isCirc = [];
                }
            } else if (checkChoice(choiceTool) == 1) {
                isCirc = []
                incircle = []
                if (circum.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circum.push(allPoint[pointChoice]);
                    }
                } else if (circum.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circum.push(allPoint[pointChoice]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circum.push(allPoint[pointChoice]);
                        allCirc.push(brd.create('circumcircle', circum, {
                            strokeColor: "#000000",
                            highlightStrokeWidth: 2,
                            strokeWidth: 1
                        }))
                        allCircColor.push("#000000")
                        allCircWidth.push(1)
                        circum = []
                    }
                }
            } else if (checkChoice(choiceTool) == 2) {
                isCirc = []
                circum = []
                if (incircle.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        incircle.push(allPoint[pointChoice]);
                    }
                } else if (incircle.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        incircle.push(allPoint[pointChoice]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        incircle.push(allPoint[pointChoice]);
                        allCirc.push(brd.create('incircle', incircle, {
                            strokeColor: "#000000",
                            highlightStrokeWidth: 2,
                            strokeWidth: 1
                        }))
                        allCircColor.push("#000000")
                        allCircWidth.push(1)
                        incircle = []
                    }
                }
            }
        }
    } else if (checkChoice(choice) == 0) {
        isLine = []
        perp = []
        para = []
        segment = []
        ang = []
        mid = []
        inter = []
        isCirc = []
        circum = []
        incircle = []
        pointChoice = whichPoint(allPoint);
        lineChoice = whichLine(allLine);
        circChoice = whichCirc(allCirc);

        if (pointChoice + 1) {
            onlyChoice(allPoint, allPointColor)
            allPoint[pointChoice].setAttribute({
                fillColor: "#ff0000",
                strokeColor: "#ff0000"
            })
        } else {
            onlyChoice(allPoint, allPointColor)
        }

        if (checkChoice(choiceTool) == 1) {
            if (pointChoice + 1) {
                allPoint[pointChoice].setAttribute({
                    visible: false
                });
            } else if (lineChoice + 1) {
                allLine[lineChoice].setAttribute({
                    visible: false
                });
            } else if (circChoice + 1) {
                allCirc[circChoice].setAttribute({
                    visible: false
                });
            }
        }

        // This use to change coor of point
        if (pointChoice + 1) {
            fill.value = allPointColor[pointChoice][0]
            fill.disabled = false
        } else {
            fill.value = ""
            fill.disabled = true
        }

        //allPointColor.push(["#eeeeee", "#c3d9ff"])
        fillColor.on("change", color => {
            if (pointChoice + 1) {
                allPoint[pointChoice].setAttribute({
                    fillColor: "#" + color,
                    strokeColor: allPointColor[pointChoice][1],
                    strokeWidth: allPointColor[pointChoice][2]
                })
                allPointColor[pointChoice][0] = '#' + color
                fill.style.backgroundColor = allPointColor[pointChoice][0]
                fill.value = "#" + color;
            }
        });

        // This use to change color of stroke
        if (circChoice + 1) {
            stroke.value = allCircColor[circChoice]
            stroke.disabled = false
        } else if (lineChoice + 1 == 0 && pointChoice + 1 == 0) {
            stroke.value = ""
            stroke.disabled = true
        }

        if (lineChoice + 1) {
            stroke.value = allLineColor[lineChoice]
            stroke.disabled = false
        } else if (pointChoice + 1 == 0 && circChoice + 1 == 0) {
            stroke.value = ""
            stroke.disabled = true
        }

        if (pointChoice + 1) {
            stroke.value = allPointColor[pointChoice][1]
            stroke.disabled = false
        } else if (lineChoice + 1 == 0 && circChoice + 1 == 0) {
            stroke.value = ""
            stroke.disabled = true
        }

        strokeColor.on("change", color => {
            if (pointChoice + 1) {
                allPoint[pointChoice].setAttribute({
                    fillColor: allPointColor[pointChoice][0],
                    strokeColor: "#" + color,
                    strokeWidth: allPointColor[pointChoice][2]
                })
                allPointColor[pointChoice][1] = '#' + color
                stroke.style.backgroundColor = allPointColor[pointChoice][1]
                stroke.value = "#" + color
            } else if (lineChoice + 1) {
                allLine[lineChoice].setAttribute({
                    strokeColor: '#' + color
                });
                allLineColor[lineChoice] = '#' + color
                stroke.style.backgroundColor = allLineColor[lineChoice]
                stroke.value = "#" + color
            } else if (circChoice + 1) {
                allCirc[circChoice].setAttribute({
                    strokeColor: '#' + color
                });
                allCircColor[circChoice] = '#' + color
                stroke.style.backgroundColor = allCircColor[circChoice]
                stroke.value = "#" + color
            }
        });

        if (circChoice + 1) {
            slider.value = allCircWidth[circChoice]
            slider.disabled = false
        } else if (lineChoice + 1 == 0 && pointChoice + 1 == 0) {
            slider.value = 1
            slider.disabled = true
        }

        if (lineChoice + 1) {
            slider.value = allLineWidth[lineChoice]
            slider.disabled = false
        } else if (pointChoice + 1 == 0 && circChoice + 1 == 0) {
            slider.value = 1
            slider.disabled = true
        }

        if (pointChoice + 1) {
            slider.value = allPointColor[pointChoice][2]
            slider.disabled = false
        } else if (lineChoice + 1 == 0 && circChoice + 1 == 0) {
            slider.value = 1
            slider.disabled = true
        }

        slider.oninput = () => {
            if (pointChoice + 1) {
                allPoint[pointChoice].setAttribute({
                    fillColor: allPointColor[pointChoice][0],
                    strokeColor: allPointColor[pointChoice][1],
                    strokeWidth: slider.value
                })
                allPointColor[pointChoice][2] = slider.value
            } else if (lineChoice + 1) {
                allLine[lineChoice].setAttribute({
                    strokeColor: allLineColor[lineChoice],
                    strokeWidth: slider.value
                })
                allLineWidth[lineChoice] = slider.value
            } else if (circChoice + 1) {
                allCirc[circChoice].setAttribute({
                    strokeColor: allCircColor[circChoice],
                    strokeWidth: slider.value
                })
                allCircWidth[circChoice] = slider.value
            }
        }

    }
});
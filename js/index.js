//MicroModal.init();

// This use for default choice

tex = doc.createTextNode("Normal");
squareDiv.appendChild(tex);
squareDiv.classList.add("choice");
moreTool.appendChild(squareDiv);
tex = doc.createTextNode("Eraser");
squareDiv1.appendChild(tex);
moreTool.appendChild(squareDiv1);
tex = doc.createTextNode("Show");
squareDiv2.appendChild(tex);
moreTool.appendChild(squareDiv2);
tex = doc.createTextNode("Hide");
squareDiv3.appendChild(tex);
moreTool.appendChild(squareDiv3);
tex = doc.createTextNode("Text");
squareDiv4.appendChild(tex);
moreTool.appendChild(squareDiv4);
tex = doc.createTextNode("More");
squareDiv5.appendChild(tex);
moreTool.appendChild(squareDiv5);

one = doc.getElementById('one')
two = doc.getElementById('two')
three = doc.getElementById('three')
four = doc.getElementById('four')
five = doc.getElementById('five')

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

        clearClass(choice, "choice");
        clearClass(choiceTool, "choice");
        clearClass(choiceTool, "not-choice");
        mouse.classList.add("choice");
        tex = doc.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = doc.createTextNode("Eraser");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = doc.createTextNode("Show");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = doc.createTextNode("Hide");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        tex = doc.createTextNode("Text");
        squareDiv4.appendChild(tex);
        moreTool.appendChild(squareDiv4);
        tex = doc.createTextNode("More");
        squareDiv5.appendChild(tex);
        moreTool.appendChild(squareDiv5);
    }

    one = doc.getElementById('one')
    two = doc.getElementById('two')
    three = doc.getElementById('three')
    four = doc.getElementById('four')
    five = doc.getElementById('five')
    six = doc.getElementById('six')
});

search.value = ""

doc.getElementsByTagName("body")[0].onclick = (click) => {
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

        clearClass(choice, "choice");
        clearClass(choiceTool, "choice");
        clearClass(choiceTool, "not-choice");
        point.classList.add("choice");
        tex = doc.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = doc.createTextNode("Mid");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = doc.createTextNode("Intersect");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = doc.createTextNode("Center");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        tex = doc.createTextNode("Incenter");
        squareDiv4.appendChild(tex);
        moreTool.appendChild(squareDiv4);
        squareDiv5.classList.add("not-choice")
        moreTool.appendChild(squareDiv5);
    }
    one = doc.getElementById('one')
    two = doc.getElementById('two')
    three = doc.getElementById('three')
    four = doc.getElementById('four')
    five = doc.getElementById('five')
    six = doc.getElementById('six')

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

        clearClass(choice, "choice");
        clearClass(choiceTool, "choice");
        clearClass(choiceTool, "not-choice");
        line.classList.add("choice");
        tex = doc.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = doc.createTextNode("Perpen");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = doc.createTextNode("Parallel");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = doc.createTextNode("Segment");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        tex = doc.createTextNode("Angle");
        squareDiv4.appendChild(tex);
        moreTool.appendChild(squareDiv4);
        tex = doc.createTextNode("Tangent");
        squareDiv5.appendChild(tex);
        moreTool.appendChild(squareDiv5);
    }
    one = doc.getElementById('one')
    two = doc.getElementById('two')
    three = doc.getElementById('three')
    four = doc.getElementById('four')
    five = doc.getElementById('five')
    six = doc.getElementById('six')

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

        clearClass(choice, "choice");
        clearClass(choiceTool, "choice");
        clearClass(choiceTool, "not-choice");
        circle.classList.add("choice");
        tex = doc.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = doc.createTextNode("Circum");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = doc.createTextNode("Incircle");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = doc.createTextNode("Excircle");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        squareDiv4.classList.add("not-choice")
        moreTool.appendChild(squareDiv4);
        squareDiv5.classList.add("not-choice")
        moreTool.appendChild(squareDiv5);
    }
    one = doc.getElementById('one')
    two = doc.getElementById('two')
    three = doc.getElementById('three')
    four = doc.getElementById('four')
    five = doc.getElementById('five')
    six = doc.getElementById('six')

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

        clearClass(choice, "choice");
        clearClass(choiceTool, "choice");
        clearClass(choiceTool, "not-choice");
        conic.classList.add("choice");
        tex = doc.createTextNode("Normal");
        squareDiv.appendChild(tex);
        squareDiv.classList.add("choice");
        moreTool.appendChild(squareDiv);
        tex = doc.createTextNode("Ellipse");
        squareDiv1.appendChild(tex);
        moreTool.appendChild(squareDiv1);
        tex = doc.createTextNode("Parabola");
        squareDiv2.appendChild(tex);
        moreTool.appendChild(squareDiv2);
        tex = doc.createTextNode("Hyper");
        squareDiv3.appendChild(tex);
        moreTool.appendChild(squareDiv3);
        squareDiv4.classList.add("not-choice")
        moreTool.appendChild(squareDiv4);
        squareDiv5.classList.add("not-choice")
        moreTool.appendChild(squareDiv5);
    }
    one = doc.getElementById('one')
    two = doc.getElementById('two')
    three = doc.getElementById('three')
    four = doc.getElementById('four')
    five = doc.getElementById('five')
    six = doc.getElementById('six')

    fill.value = ""
    fill.disabled = true
    stroke.value = "";
    stroke.disabled = true;
});

// This use for more tool

one.addEventListener("click", () => {
    clearClass(choiceTool, "choice");
    if (one.classList.length != 2) {
        one.classList.add("choice");
    }
});

two.addEventListener("click", () => {
    clearClass(choiceTool, "choice");
    if (two.classList.length != 2) {
        two.classList.add("choice");
    }
});

three.addEventListener("click", () => {
    clearClass(choiceTool, "choice");
    if (three.classList.length != 2) {
        three.classList.add("choice");
    }
    if (checkChoice(choice) == 0) {
        allVisible(allPoint, allLine, allCirc, allText)
    }
});

four.addEventListener("click", () => {
    clearClass(choiceTool, "choice");
    if (four.classList.length != 2) {
        four.classList.add("choice");
    }
    if (checkChoice(choice) == 0) {
        allInvisible(allPoint, allLine, allCirc, allText)
    }
});

five.addEventListener("click", () => {
    clearClass(choiceTool, "choice");
    if (five.classList.length != 2) {
        five.classList.add("choice");
    }
});

six.addEventListener("click", () => {
    clearClass(choiceTool, "choice");
    if (six.classList.length != 2) {
        six.classList.add("choice");
    }
});

download.addEventListener("click", () => {
    var canvasScreen = doc.getElementsByTagName("canvas");
    download.href = canvasScreen[0].toDataURL();
    download.target = "blank";
    download.download = 'screenshot.png';
    download.click();
})

doc.getElementById("jxgbox").addEventListener("click", click => {
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
            excircle = []
            isConic = []
            ellipse = []
            parabola = []
            hyperbola = []
            if (checkChoice(choiceTool) == 0) {
                mid = []
                inter = []
                circumCenter = []
                inCenter = []
                lineChoice = whichAll(allLine);
                circChoice = whichAll(allCirc);
                if (lineChoice + 1) {
                    createPoint(lineChoice, click, allPoint, allLine, allPointColor, "glider")
                } else if (circChoice + 1) {
                    createPoint(circChoice, click, allPoint, allCirc, allPointColor, "glider")
                } else {
                    createPoint(0, click, allPoint, 0, allPointColor, "point")
                }
            } else if (checkChoice(choiceTool) == 1) {
                inter = []
                circumCenter = []
                inCenter = []
                pointChoice = whichAll(allPoint);
                lineChoice = whichAll(allLine);
                if (pointChoice + 1) {
                    lineChoice = -1
                }
                if (mid.length == 0) {
                    if (lineChoice + 1) {
                        if (allLine[lineChoice].elType == "segment") {
                            kindPoint(allPoint, 'midpoint', [allLine[lineChoice].point1, allLine[lineChoice].point2], allPointColor)
                        }
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        mid.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        mid.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (lineChoice + 1) {
                        if (allLine[lineChoice].elType == "segment") {
                            kindPoint(allPoint, 'midpoint', [allLine[lineChoice].point1, allLine[lineChoice].point2], allPointColor)
                        }
                        mid = []
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        mid.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        mid.push(allPoint[allPoint.length - 1].name)
                    }
                    kindPoint(allPoint, 'midpoint', mid, allPointColor)
                    mid = []
                }
            } else if (checkChoice(choiceTool) == 2) {
                mid = []
                circumCenter = []
                inCenter = []
                lineChoice = whichAll(allLine);
                circChoice = whichAll(allCirc);
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
                            kindPoint(allPoint, 'intersection', inter, allPointColor)
                        } else {

                            tempInter = brd.create('intersection', inter, {
                                name: "",
                                visible: false
                            })
                            if (checkConc(allPoint, tempInter)) {
                                delete tempInter;
                            } else {
                                kindPoint(allPoint, 'intersection', inter, allPointColor)
                            }

                            tempInter = brd.create('intersection', [inter[0], inter[1], 1], {
                                name: "",
                                visible: false
                            })

                            if (checkConc(allPoint, tempInter)) {
                                delete tempInter;
                            } else {
                                kindPoint(allPoint, 'intersection', [inter[0], inter[1], 1], allPointColor)
                            }
                        }
                        inter = []
                    } else if (circChoice + 1) {
                        inter.push(allCirc[circChoice]);

                        tempInter = brd.create('intersection', inter, {
                            name: "",
                            visible: false
                        })
                        if (checkConc(allPoint, tempInter)) {
                            delete tempInter;
                        } else {
                            kindPoint(allPoint, 'intersection', inter, allPointColor)
                        }

                        tempInter = brd.create('intersection', [inter[0], inter[1], 1], {
                            name: "",
                            visible: false
                        })

                        if (checkConc(allPoint, tempInter)) {
                            delete tempInter;
                        } else {
                            kindPoint(allPoint, 'intersection', [inter[0], inter[1], 1], allPointColor)
                        }
                        inter = []
                    }
                }
            } else if (checkChoice(choiceTool) == 3) {
                mid = []
                inter = []
                inCenter = []
                pointChoice = whichAll(allPoint);
                circChoice = whichAll(allCirc);
                if (circumCenter.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circumCenter.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        circumCenter.push(allPoint[allPoint.length - 1])
                    }
                } else if (circumCenter.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circumCenter.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        circumCenter.push(allPoint[allPoint.length - 1])
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circumCenter.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        circumCenter.push(allPoint[allPoint.length - 1])
                    }
                    kindPoint(allPoint, 'circumcenter', circumCenter, allPointColor)
                    circumCenter = []
                }
            } else {
                mid = []
                inter = []
                circumCenter = []
                pointChoice = whichAll(allPoint);
                if (inCenter.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        inCenter.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        inCenter.push(allPoint[allPoint.length - 1])
                    }
                } else if (inCenter.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        inCenter.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        inCenter.push(allPoint[allPoint.length - 1])
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        inCenter.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        inCenter.push(allPoint[allPoint.length - 1])
                    }
                    kindPoint(allPoint, 'incenter', inCenter, allPointColor)
                    inCenter = []
                }
            }
        } else if (checkChoice(choice) == 2) {
            mid = []
            inter = []
            circumCenter = []
            inCenter = []
            isCirc = []
            circum = []
            incircle = []
            excircle = []
            isConic = []
            ellipse = []
            parabola = []
            hyperbola = []
            pointChoice = whichAll(allPoint);
            lineChoice = whichAll(allLine);
            circChoice = whichAll(allCirc);
            if (pointChoice + 1) {
                lineChoice = -1
                circChoice = -1
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        isLine.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create("line", isLine, {
                            strokeColor: "#000000",
                            strokeWidth: 1
                        })
                    );
                    allLineColor.push("#000000")
                    allLineWidth.push(1)
                    isLine = [];
                }
            } else if (checkChoice(choiceTool) == 1) {
                isLine = []
                para = []
                segment = []
                ang = []
                tangent = []
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
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        perp.push(allPoint[allPoint.length - 1])
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
                    } else {
                        if (lineKind.includes(perp[0].elType)) {
                            createPoint(0, click, allPoint, 0, allPointColor, "point")
                            perp.push(allPoint[allPoint.length - 1])
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
                tangent = []
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
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        para.push(allPoint[allPoint.length - 1])
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
                    } else {
                        if (lineKind.includes(para[0].elType)) {
                            createPoint(0, click, allPoint, 0, allPointColor, "point")
                            para.push(allPoint[allPoint.length - 1])
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
                tangent = []
                if (segment.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        segment.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
            } else if (checkChoice(choiceTool) == 4) {
                isLine = []
                perp = []
                para = []
                segment = []
                tangent = []
                if (ang.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
            } else {
                isLine = []
                perp = []
                para = []
                segment = []
                ang = []
                if (tangent.length == 0) {
                    if (circChoice + 1) {
                        tangent.push(allCirc[circChoice]);
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        tangent.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        tangent.push(allPoint[allPoint.length - 1])
                    }
                } else {
                    if (circChoice + 1) {
                        if (pointKind.includes(tangent[0].elType)) {
                            tangent.push(allCirc[circChoice]);
                            if (tangent[0].Dist(tangent[1].center) == tangent[1].Radius()) {
                                sample = brd.create('line', [tangent[0], tangent[1].center], {
                                    name: "",
                                    visible: false
                                })
                                allLine.push(brd.create('perpendicular', [sample, tangent[0]], {
                                    strokeColor: "#000000",
                                    strokeWidth: 1
                                }))
                                allLineColor.push("#000000")
                                allLineWidth.push(1)
                            } else if (tangent[0].Dist(tangent[1].center) > tangent[1].Radius()) {
                                sample = brd.create('polarline', tangent, {
                                    visible: false
                                })

                                tempInter = brd.create('intersection', [sample, tangent[1]], {
                                    name: "",
                                    visible: false
                                })
                                if (checkConc(allPoint, tempInter)) {
                                    delete tempInter;
                                } else {
                                    kindPoint(allPoint, 'intersection', [sample, tangent[1]], allPointColor)
                                    allLine.push(brd.create('line', [allPoint[allPoint.length - 1].name, tangent[0].name], {
                                        strokeColor: "#000000",
                                        strokeWidth: 1
                                    }))
                                    allLineColor.push("#000000")
                                    allLineWidth.push(1)
                                }

                                tempInter = brd.create('intersection', [sample, tangent[1], 1], {
                                    name: "",
                                    visible: false
                                })

                                if (checkConc(allPoint, tempInter)) {
                                    delete tempInter;
                                } else {
                                    kindPoint(allPoint, 'intersection', [sample, tangent[1], 1], allPointColor)
                                    allLine.push(brd.create('line', [allPoint[allPoint.length - 1].name, tangent[0].name], {
                                        strokeColor: "#000000",
                                        strokeWidth: 1
                                    }))
                                    allLineColor.push("#000000")
                                    allLineWidth.push(1)
                                }
                            }
                        }
                        tangent = []
                    } else if (pointChoice + 1) {
                        if (circleKind.includes(tangent[0].elType)) {
                            tangent.push(allPoint[pointChoice]);
                            if (tangent[1].Dist(tangent[0].center) == tangent[0].Radius()) {
                                sample = brd.create('line', [tangent[1], tangent[0].center], {
                                    name: "",
                                    visible: false
                                })
                                allLine.push(brd.create('perpendicular', [sample, tangent[1]], {
                                    strokeColor: "#000000",
                                    strokeWidth: 1
                                }))
                                allLineColor.push("#000000")
                                allLineWidth.push(1)
                            } else if (tangent[1].Dist(tangent[0].center) > tangent[0].Radius()) {
                                sample = brd.create('polarline', tangent, {
                                    visible: false
                                })

                                tempInter = brd.create('intersection', [tangent[0], sample], {
                                    name: "",
                                    visible: false
                                })
                                if (checkConc(allPoint, tempInter)) {
                                    delete tempInter;
                                } else {
                                    kindPoint(allPoint, 'intersection', [tangent[0], sample], allPointColor)
                                    allLine.push(brd.create('line', [allPoint[allPoint.length - 1].name, tangent[1].name], {
                                        strokeColor: "#000000",
                                        strokeWidth: 1
                                    }))
                                    allLineColor.push("#000000")
                                    allLineWidth.push(1)
                                }

                                tempInter = brd.create('intersection', [tangent[0], sample, 1], {
                                    name: "",
                                    visible: false
                                })

                                if (checkConc(allPoint, tempInter)) {
                                    delete tempInter;
                                } else {
                                    kindPoint(allPoint, 'intersection', [tangent[0], sample, 1], allPointColor)
                                    allLine.push(brd.create('line', [allPoint[allPoint.length - 1].name, tangent[1].name], {
                                        strokeColor: "#000000",
                                        strokeWidth: 1
                                    }))
                                    allLineColor.push("#000000")
                                    allLineWidth.push(1)
                                }
                            }
                        }
                        tangent = []
                    }
                }
            }
        } else if (checkChoice(choice) == 3) {
            isLine = []
            perp = []
            para = []
            segment = []
            ang = []
            tangent = []
            mid = []
            inter = []
            circumCenter = []
            inCenter = []
            isConic = []
            ellipse = []
            parabola = []
            hyperbola = []
            pointChoice = whichAll(allPoint);
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
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
                excircle = []
                if (circum.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circum.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        circum.push(allPoint[allPoint.length - 1]);
                    }
                } else if (circum.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circum.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        circum.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        circum.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        circum.push(allPoint[allPoint.length - 1]);
                    }
                    allCirc.push(brd.create('circumcircle', circum, {
                        strokeColor: "#000000",
                        highlightStrokeWidth: 2,
                        strokeWidth: 1
                    }))
                    allCircColor.push("#000000")
                    allCircWidth.push(1)
                    circum = []
                }
            } else if (checkChoice(choiceTool) == 2) {
                isCirc = []
                circum = []
                excircle = []
                if (incircle.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        incircle.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        incircle.push(allPoint[allPoint.length - 1]);
                    }
                } else if (incircle.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        incircle.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        incircle.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        incircle.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        incircle.push(allPoint[allPoint.length - 1]);
                    }
                    allCirc.push(brd.create('incircle', incircle, {
                        strokeColor: "#000000",
                        highlightStrokeWidth: 2,
                        strokeWidth: 1
                    }))
                    allCircColor.push("#000000")
                    allCircWidth.push(1)
                    incircle = []
                }
            } else if (checkChoice(choiceTool) == 3) {
                isCirc = []
                circum = []
                incircle = []
                if (excircle.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        excircle.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        excircle.push(allPoint[allPoint.length - 1]);
                    }
                } else if (excircle.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        excircle.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        excircle.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        excircle.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        excircle.push(allPoint[allPoint.length - 1]);
                    }
                    sample = brd.create('incenter', excircle, {
                        name: "",
                        visible: false
                    })

                    line1 = brd.create('line', [sample, excircle[1]], {
                        name: "",
                        visible: false
                    })
                    line11 = brd.create('perpendicular', [line1, excircle[1]], {
                        name: "",
                        visible: false
                    })
                    line2 = brd.create('line', [sample, excircle[2]], {
                        name: "",
                        visible: false
                    })
                    line22 = brd.create('perpendicular', [line2, excircle[2]], {
                        name: "",
                        visible: false
                    })
                    excenter = brd.create('intersection', [line11, line22], {
                        name: "T",
                        visible: true
                    })
                    line3 = brd.create('line', [excircle[1], excircle[2]], {
                        name: "",
                        visible: false
                    })
                    point_1 = brd.create('perpendicularpoint', [line3, excenter], {
                        name: "",
                        visible: false
                    })
                    allCirc.push(brd.create('circle', [excenter, point_1], {
                        strokeColor: "#000000",
                        highlightStrokeWidth: 2,
                        strokeWidth: 1
                    }))
                    allCircColor.push("#000000")
                    allCircWidth.push(1)
                    excircle = []
                }
            }
        } else if (checkChoice(choice) == 4) {
            isLine = []
            perp = []
            para = []
            segment = []
            ang = []
            tangent = []
            mid = []
            inter = []
            circumCenter = []
            inCenter = []
            isCirc = []
            circum = []
            incircle = []
            excircle = []
            pointChoice = whichAll(allPoint);
            lineChoice = whichAll(allLine);
            if (pointChoice + 1) {
                lineChoice = -1
            }
            if (checkChoice(choiceTool) == 0) {
                ellipse = []
                parabola = []
                hyperbola = []
                if (isConic.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isConic.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        isConic.push(allPoint[allPoint.length - 1]);
                    }
                } else if (isConic.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isConic.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        isConic.push(allPoint[allPoint.length - 1]);
                    }
                } else if (isConic.length == 2) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isConic.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        isConic.push(allPoint[allPoint.length - 1]);
                    }
                } else if (isConic.length == 3) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isConic.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        isConic.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        isConic.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        isConic.push(allPoint[allPoint.length - 1]);
                    }
                    allConic.push(brd.create('conic', isConic, {
                        strokeColor: "#000000",
                        highlightStrokeWidth: 2,
                        strokeWidth: 1
                    }))
                    allConicColor.push("#000000")
                    allConicWidth.push(1)
                    isConic = []
                }
            } else if (checkChoice(choiceTool) == 1) {
                isConic = []
                parabola = []
                hyperbola = []
                if (ellipse.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ellipse.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        ellipse.push(allPoint[allPoint.length - 1]);
                    }
                } else if (ellipse.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ellipse.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        ellipse.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        ellipse.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        ellipse.push(allPoint[allPoint.length - 1]);
                    }
                    allConic.push(brd.create('ellipse', ellipse, {
                        strokeColor: "#000000",
                        highlightStrokeWidth: 2,
                        strokeWidth: 1
                    }))
                    allConicColor.push("#000000")
                    allConicWidth.push(1)
                    ellipse = []
                }
            } else if (checkChoice(choiceTool) == 2) {
                isConic = []
                ellipse = []
                hyperbola = []
                if (parabola.length == 0) {
                    if (lineChoice + 1) {
                        parabola.push(allLine[lineChoice]);
                    } else if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        parabola.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        parabola.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (lineChoice + 1) {
                        if (pointKind.includes(parabola[0].elType)) {
                            parabola.push(allLine[lineChoice]);
                        } else {
                            parabola = []
                        }
                    } else if (pointChoice + 1) {
                        if (lineKind.includes(parabola[0].elType)) {
                            onlyChoice(allPoint, allPointColor)
                            allPoint[pointChoice].setAttribute({
                                fillColor: "#ff0000",
                                strokeColor: "#ff0000"
                            })
                            parabola.push(allPoint[pointChoice]);
                        } else {
                            parabola = []
                        }
                    } else {
                        if (lineKind.includes(parabola[0].elType)) {
                            createPoint(0, click, allPoint, 0, allPointColor, "point")
                            parabola.push(allPoint[allPoint.length - 1]);
                        } else {
                            parabola = []
                        }
                    }
                    if (parabola != []) {
                        if (pointKind.includes(parabola[0].elType)) {
                            allConic.push(brd.create('parabola', parabola, {
                                strokeColor: "#000000",
                                highlightStrokeWidth: 2,
                                strokeWidth: 1
                            }))
                            allConicColor.push("#000000")
                            allConicWidth.push(1)
                        } else {
                            allConic.push(brd.create('parabola', [parabola[1], parabola[0]], {
                                strokeColor: "#000000",
                                highlightStrokeWidth: 2,
                                strokeWidth: 1
                            }))
                            allConicColor.push("#000000")
                            allConicWidth.push(1)
                        }
                        parabola = []
                    }
                }
            } else if (checkChoice(choiceTool) == 3) {
                isConic = []
                parabola = []
                ellipse = []
                if (hyperbola.length == 0) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        hyperbola.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        hyperbola.push(allPoint[allPoint.length - 1]);
                    }
                } else if (hyperbola.length == 1) {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        hyperbola.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        hyperbola.push(allPoint[allPoint.length - 1]);
                    }
                } else {
                    if (pointChoice + 1) {
                        onlyChoice(allPoint, allPointColor)
                        allPoint[pointChoice].setAttribute({
                            fillColor: "#ff0000",
                            strokeColor: "#ff0000"
                        })
                        hyperbola.push(allPoint[pointChoice]);
                    } else {
                        createPoint(0, click, allPoint, 0, allPointColor, "point")
                        hyperbola.push(allPoint[allPoint.length - 1]);
                    }
                    allConic.push(brd.create('hyperbola', hyperbola, {
                        strokeColor: "#000000",
                        highlightStrokeWidth: 2,
                        strokeWidth: 1
                    }))
                    allConicColor.push("#000000")
                    allConicWidth.push(1)
                    hyperbola = []
                }
            }
        }
    } else if (checkChoice(choice) == 0) {
        isLine = []
        perp = []
        para = []
        segment = []
        ang = []
        tangent = []
        mid = []
        inter = []
        circumCenter = []
        inCenter = []
        isCirc = []
        circum = []
        incircle = []
        pointChoice = whichAll(allPoint);
        lineChoice = whichAll(allLine);
        circChoice = whichAll(allCirc);
        textChoice = whichAll(allText);

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
            } else if (textChoice + 1) {
                allText[textChoice].setAttribute({
                    visible: false
                })
            }
        } else if (checkChoice(choiceTool) == 4) {
            var clickX = click.pageX;
            var clickY = click.pageY;
            var pointX = coorX(clickX);
            var pointY = coorY(clickY);
            if (textChoice + 1) {
                vex.dialog.open({
                    message: 'Type your text or latex',
                    input: [
                        '<style>',
                        '.vex-custom-field-wrapper {',
                        'margin: 1em 0;',
                        '}',
                        '.vex-custom-field-wrapper > label {',
                        'display: inline-block;',
                        'margin-bottom: .2em;',
                        '}',
                        '</style>',
                        '<div class="vex-custom-field-wrapper">',
                        '<label for="font-size">Font size</label>',
                        '<div class="vex-custom-input-wrapper">',
                        '<input name="font_size" type="number" id="font-size" value="18" min="12 max="40"/>',
                        '</div>',
                        '</div>',
                        '<label for="tex">Tex</label>',
                        '<textarea name="tex" rows="4" cols="50">',
                        allText[0].htmlStr,
                        '</textarea>'
                    ].join(''),
                    buttons: [
                        $.extend({}, vex.dialog.buttons.YES, {
                            text: 'Done'
                        }),
                        $.extend({}, vex.dialog.buttons.NO, {
                            text: 'Back'
                        })
                    ],
                    callback: function (data) {
                        if (data) {
                            var a = data.tex.split("");
                            for (var i = 0; i < a.length; i++) {
                                if (a[i] == "\\") {
                                    a[i] = "\\\\";
                                }
                            }
                            a = a.join("")
                            allText[textChoice].setText(a);
                        }
                    }
                })
            } else {
                vex.dialog.open({
                    message: 'Type your text or latex',
                    input: [
                        '<style>',
                        '.vex-custom-field-wrapper {',
                        'margin: 1em 0;',
                        '}',
                        '.vex-custom-field-wrapper > label {',
                        'display: inline-block;',
                        'margin-bottom: .2em;',
                        '}',
                        '</style>',
                        '<div class="vex-custom-field-wrapper">',
                        '<label for="font-size">Font size</label>',
                        '<div class="vex-custom-input-wrapper">',
                        '<input name="font_size" type="number" id="font-size" value="18" min="12 max="40"/>',
                        '</div>',
                        '</div>',
                        '<label for="tex">Tex</label>',
                        '<textarea name="tex" rows="4" cols="50"></textarea>'
                    ].join(''),
                    buttons: [
                        $.extend({}, vex.dialog.buttons.YES, {
                            text: 'Done'
                        }),
                        $.extend({}, vex.dialog.buttons.NO, {
                            text: 'Back'
                        })
                    ],
                    callback: function (data) {
                        if (data) {
                            var a = data.tex.split("");
                            for (var i = 0; i < a.length; i++) {
                                if (a[i] == "\\") {
                                    a[i] = "\\\\";
                                }
                            }
                            a = a.join("")
                            allText.push(brd.create('text', [pointX, pointY, a], {
                                fontSize: data.font_size,
                                useMathJax: true
                            }))
                        }
                    }
                })
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
addChoice(choice, circle);
addChoice(choice, conic);

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

mouse.addEventListener("click", () => {
    clearChoice(choiceTool);
    if (checkChoice(choice) != 0) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
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

point.addEventListener("click", () => {
    clearChoice(choiceTool);
    if (checkChoice(choice) != 1) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }

            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
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
});

line.addEventListener("click", () => {
    clearChoice(choiceTool);
    if (checkChoice(choice) != 2) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
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
});

circle.addEventListener("click", () => {
    clearChoice(choiceTool);
    if (checkChoice(choice) != 2) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
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
});

conic.addEventListener("click", () => {
    clearChoice(choiceTool);
    if (checkChoice(choice) != 2) {
        while (moreTool.hasChildNodes()) {
            child = moreTool.firstChild;
            if (child.hasChildNodes()) {
                child.removeChild(child.firstChild);
            }
            moreTool.removeChild(moreTool.firstChild);
        }

        clearChoice(choice);
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
});


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


document.getElementById("jxgbox").addEventListener("click", click => {
    if (checkChoice(choice) >= 1) {
        if (checkChoice(choice) == 1) {
            if (checkChoice(choiceTool) == 0) {
                var clickX = click.pageX;
                var clickY = click.pageY;
                var pointX = coorX(clickX);
                var pointY = coorY(clickY);
                allPoint.push(
                    brd.create("point", [pointX, pointY], {
                        size: 3
                    })
                );
            } else if (checkChoice(choiceTool) == 1) {
                pointChoice = whichPoint(allPoint);
                if (mid.length == 0) {
                    if (pointChoice + 1) {
                        mid.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        mid.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        mid.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        mid.push(allPoint[allPoint.length - 1].name)
                    }
                    allPoint.push(brd.create('midpoint', mid))
                    mid = []
                }
            } else {
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
                            allPoint.push(brd.create('intersection', inter))
                        } else {
                            allPoint.push(brd.create('intersection', inter))
                            allPoint.push(brd.create('intersection', [inter[0], inter[1], 1]))
                        }
                        inter = []
                    } else if (circChoice + 1) {
                        inter.push(allCirc[circChoice]);
                        allPoint.push(brd.create('intersection', inter))
                        allPoint.push(brd.create('intersection', [inter[0], inter[1], 1]))
                        inter = []
                    }

                }
            }

        } else if (checkChoice(choice) == 2) {
            pointChoice = whichPoint(allPoint);
            lineChoice = whichLine(allLine);
            if (pointChoice + 1) {
                lineChoice = -1
            }
            if (checkChoice(choiceTool) == 0) {
                if (isLine.length == 0) {
                    if (pointChoice + 1) {
                        isLine.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        isLine.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        isLine.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        isLine.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create("line", isLine, {
                            strokeColor: "#000000",
                            strokeWidth: 1
                        })
                    );
                    isLine = [];
                }
            } else if (checkChoice(choiceTool) == 1) {
                if (perp.length == 0) {
                    if (lineChoice + 1) {
                        perp.push(allLine[lineChoice])
                    } else if (pointChoice + 1) {
                        perp.push(allPoint[pointChoice])
                    }
                } else {
                    if (lineChoice + 1) {
                        if (pointKind.includes(perp[0].elType)) {
                            perp.push(allLine[lineChoice])
                            allLine.push(brd.create('perpendicular', perp, {
                                strokeWidth: 1
                            }))
                            perp = []
                        }
                    } else if (pointChoice + 1) {
                        if (lineKind.includes(perp[0].elType)) {
                            perp.push(allPoint[pointChoice])
                            allLine.push(brd.create('perpendicular', perp, {
                                strokeWidth: 1
                            }))
                            perp = []
                        }
                    }
                }
            } else if (checkChoice(choiceTool) == 2) {
                if (para.length == 0) {
                    if (lineChoice + 1) {
                        para.push(allLine[lineChoice])
                    } else if (pointChoice + 1) {
                        para.push(allPoint[pointChoice])
                    }
                } else {
                    if (lineChoice + 1) {
                        if (pointKind.includes(para[0].elType)) {
                            para.push(allLine[lineChoice])
                            allLine.push(brd.create('parallel', para, {
                                strokeWidth: 1
                            }))
                            para = []
                        }
                    } else if (pointChoice + 1) {
                        if (lineKind.includes(para[0].elType)) {
                            para.push(allPoint[pointChoice])
                            allLine.push(brd.create('parallel', para, {
                                strokeWidth: 1
                            }))
                            para = []
                        }
                    }
                }
            } else if (checkChoice(choiceTool) == 3) {
                if (segment.length == 0) {
                    if (pointChoice + 1) {
                        segment.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        segment.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        segment.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        segment.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create("segment", segment, {
                            strokeColor: "#000000",
                            strokeWidth: 1
                        })
                    );
                    segment = [];
                }
            } else {
                if (ang.length == 0) {
                    if (pointChoice + 1) {
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        ang.push(allPoint[allPoint.length - 1].name)
                    }
                } else if (ang.length == 1) {
                    if (pointChoice + 1) {
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        ang.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        ang.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        ang.push(allPoint[allPoint.length - 1].name)
                    }
                    allLine.push(
                        brd.create('bisector', ang, {
                            strokeWidth: 1
                        })
                    );
                    ang = [];
                }
            }
        } else if (checkChoice(choice) == 3) {
            pointChoice = whichPoint(allPoint);
            if (checkChoice(choiceTool) == 0) {
                if (isCirc.length == 0) {
                    if (pointChoice + 1) {
                        isCirc.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        isCirc.push(allPoint[allPoint.length - 1].name)
                    }
                } else {
                    if (pointChoice + 1) {
                        isCirc.push(allPoint[pointChoice].name);
                    } else {
                        var clickX = click.pageX;
                        var clickY = click.pageY;
                        var pointX = coorX(clickX);
                        var pointY = coorY(clickY);
                        allPoint.push(
                            brd.create("point", [pointX, pointY], {
                                size: 3
                            })
                        );
                        isCirc.push(allPoint[allPoint.length - 1].name)
                    }
                    allCirc.push(
                        brd.create("circle", isCirc, {
                            strokeColor: "#000000",
                            strokeWidth: 2
                        })
                    );
                    isCirc = [];
                }
            } else if (checkChoice(choiceTool) == 1) {
                if (circum.length == 0) {
                    if (pointChoice + 1) {
                        circum.push(allPoint[pointChoice]);
                    }
                } else if (circum.length == 1) {
                    if (pointChoice + 1) {
                        circum.push(allPoint[pointChoice]);
                    }
                } else {
                    if (pointChoice + 1) {
                        circum.push(allPoint[pointChoice]);
                        allCirc.push(brd.create('circumcircle', circum))
                        circum = []
                    }
                }
            } else if (checkChoice(choiceTool) == 2) {
                if (incircle.length == 0) {
                    if (pointChoice + 1) {
                        incircle.push(allPoint[pointChoice]);
                    }
                } else if (incircle.length == 1) {
                    if (pointChoice + 1) {
                        incircle.push(allPoint[pointChoice]);
                    }
                } else {
                    if (pointChoice + 1) {
                        incircle.push(allPoint[pointChoice]);
                        allCirc.push(brd.create('incircle', incircle))
                        incircle = []
                    }
                }
            }
        }
    } else if (checkChoice(choice) == 0) {
        pointChoice = whichPoint(allPoint);
        lineChoice = whichLine(allLine);
        circChoice = whichCirc(allCirc);
        if (checkChoice(choiceTool) == 1) {
            if (pointChoice + 1) {
                allPoint[pointChoice].setAttribute({
                    visible: false
                });
            } else if (lineChoice + 1) {
                allLine[lineChoice].setAttribute({
                    visible: false
                });
            } else if (circChoice) {
                allCirc[circChoice].setAttribute({
                    visible: false
                });
            }
        }
    }
    for (var i = 0; i < allPoint.length; i++) {
        allPoint[i].highlighted = true;
        allPoint[i].needsUpdate = true;
        allPoint[i].update();
    }
});
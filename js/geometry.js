document.getElementById('btn-triangle').addEventListener('click',function(){
    const bTriangle = inputField('triangle-b');
    const hTriangle = inputField('triangle-h');
    const multiTriangle = 0.5 * bTriangle * hTriangle;
    setBtn('area-triangle',multiTriangle);
    // validation
    if(isNaN(bTriangle) || isNaN(hTriangle)){
        alert('please provide a number');
        return;
    }
    // addedHTMl
    addAreaCalculation('Triangle',multiTriangle);
});
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const wRectangle = inputField('rectangle-w');
    const lRectangle = inputField('rectangle-l');
    const multiRectangle =  wRectangle * lRectangle;
    setBtn('area-rectangle',multiRectangle);
    // validation
    if(isNaN(wRectangle) || isNaN(lRectangle)){
        alert('please provide a number');
        return;
    }
    // addedHTMl
    addAreaCalculation('Rectangle',multiRectangle);
    
});
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const bParallelogram = inputField('parallelogram-b');
    const hParallelogram = inputField('parallelogram-h');
    const multiParallelogram =  bParallelogram * hParallelogram;
    setBtn('area-parallelogram',multiParallelogram);
    // validation
    if(isNaN(bParallelogram) || isNaN(hParallelogram)){
        alert('please provide a number');
        return;
    }
    // addedHTMl
    addAreaCalculation('Parallelogram',multiParallelogram);
});
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const bRhombus = inputField('rhombus-b');
    const hRhombus = inputField('rhombus-h');
    const multiRhombus =  0.5*bRhombus * hRhombus;
    setBtn('area-rhombus',multiRhombus);
    // validation
    if(isNaN(bRhombus) || isNaN(hRhombus)){
        alert('please provide a number');
        return;
    }
    // addedHTMl
    addAreaCalculation('Rhombus',multiRhombus);
});
document.getElementById('btn-pentagon').addEventListener('click',function(){
    const bPentagon = inputField('pentagon-b');
    const hPentagon = inputField('pentagon-h');
    const multiPentagon =  0.5*bPentagon * hPentagon;
    setBtn('area-pentagon',multiPentagon);
    // validation
    if(isNaN(bPentagon) || isNaN(hPentagon)){
        alert('please provide a number');
        return;
    }
    // addedHTMl
    addAreaCalculation('Pentagon',multiPentagon);
});
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const bEllipse = inputField('ellipse-b');
    const hEllipse = inputField('ellipse-h');
    const multiEllipse =  3.14*bEllipse * hEllipse;
    setBtn('area-ellipse',multiEllipse);
    // validation
    if(isNaN(bEllipse) || isNaN(hEllipse)){
        alert('please provide a number');
        return;
    }
    // addedHTMl
    addAreaCalculation('Ellipse',multiEllipse);
});

function addAreaCalculation(areaType,area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
const p = document.createElement('p');
p.classList.add('my-4');
p.innerHTML= `${count+1}.${areaType} ${area}cm<sup>2</sup> <button class='btn btn-success'>Convert</button>`;
calculationEntry.appendChild(p);
};


// conceptual session
document.getElementById('conceptual').addEventListener('click',function(){
    window.location.href = 'conceptual.html';
})
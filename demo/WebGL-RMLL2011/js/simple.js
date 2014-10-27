window.addEventListener("load", function() { start(); }, true );

function start(){
    var canvas = document.getElementById("3DView");
    var w,h;
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;
    var viewer = new osgViewer.Viewer(canvas);
    viewer.init();
    viewer.view.setClearColor([0.0, 0.0, 0.0, 0.0]);

    

    viewer.setupManipulator();
    viewer.run();
}